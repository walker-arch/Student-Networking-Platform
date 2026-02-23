import express from 'express';
import mongoose from 'mongoose';
import crypto from 'crypto';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import { generateToken } from '../middleware/auth.js';
import { sendVerificationEmail } from '../utils/email.js';

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper to check DB connection
const checkDB = (req, res) => {
    if (mongoose.connection.readyState !== 1) {
        res.status(503).json({ message: 'Database is not connected. Please ensure MongoDB is running.' });
        return false;
    }
    return true;
};

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
    if (!checkDB(req, res)) return;
    try {
        const { email, password, name, college, course, year, bio, location, interests, skills } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Generate verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const tokenHash = crypto.createHash('sha256').update(verificationToken).digest('hex');

        // Create new user
        const user = new User({
            email: email.toLowerCase(),
            password,
            name,
            college,
            course,
            year,
            bio,
            location,
            interests: interests || [],
            skills: skills || [],
            verificationToken: tokenHash,
            verificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        });

        await user.save();

        // Send verification email
        try {
            await sendVerificationEmail(user.email, verificationToken);
            res.status(201).json({
                message: 'Registration successful! Please check your email to verify your account.',
                requiresVerification: true
            });
        } catch (emailError) {
            console.error('Email sending failed during registration:', emailError);
            // Optionally, we could delete the user or provide a resend option
            res.status(500).json({ message: 'User registered, but failed to send verification email. Please try logging in to resend.' });
        }
    } catch (error) {
        console.error('Registration error:', error);

        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({ message: messages.join(', ') });
        }

        res.status(500).json({ message: 'Server error during registration' });
    }
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', async (req, res) => {
    if (!checkDB(req, res)) return;
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        // Find user and include password for comparison
        const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if user is verified
        if (!user.isVerified) {
            return res.status(403).json({
                message: 'Please verify your email address to log in.',
                requiresVerification: true
            });
        }

        // Check password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate token
        const token = generateToken(user._id);

        res.json({
            message: 'Login successful',
            token,
            user: user.toJSON()
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// @route   POST /api/auth/logout
// @desc    Logout user (client-side token removal)
// @access  Public
router.post('/logout', (req, res) => {
    // JWT logout is handled client-side by removing the token
    res.json({ message: 'Logged out successfully' });
});

// @route   POST /api/auth/verify-email
// @desc    Verify the user's email address
// @access  Public
router.post('/verify-email', async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ message: 'Verification token is required' });
        }

        // Hash the token from the URL to match the one in DB
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

        // Find user by token and ensure it hasn't expired
        const user = await User.findOne({
            verificationToken: tokenHash,
            verificationTokenExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired verification token' });
        }

        // Mark user as verified
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpires = undefined;
        await user.save();

        // Optionally immediately log them in
        const jwtToken = generateToken(user._id);

        res.json({
            message: 'Email verified successfully! You are now logged in.',
            token: jwtToken,
            user: user.toJSON()
        });
    } catch (error) {
        console.error('Email verification error:', error);
        res.status(500).json({ message: 'Server error during email verification' });
    }
});

// @route   POST /api/auth/google
// @desc    Authenticate with Google
// @access  Public
router.post('/google', async (req, res) => {
    try {
        const { credential } = req.body;

        if (!credential) {
            return res.status(400).json({ message: 'Google credential is required' });
        }

        // Verify the token
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();
        const { sub: googleId, email, name, picture } = payload;

        // Check if user already exists
        let user = await User.findOne({ email: email.toLowerCase() });

        if (user) {
            // User exists, just log them in
            if (!user.googleId) {
                // Link Google account to existing user
                user.googleId = googleId;
                // Since Google verified this email, we can mark them verified
                user.isVerified = true;
                await user.save();
            }
        } else {
            // Create new user via Google
            user = new User({
                name,
                email: email.toLowerCase(),
                googleId,
                isVerified: true, // Google accounts are implicitly verified
                // Required profile fields can be set to defaults or empty until they update their profile
                college: 'Update Profile',
                course: 'Update Profile',
                year: 1,
                // Avatar could theoretically be mapped, but we handle that separately right now
            });
            await user.save();
        }

        const token = generateToken(user._id);

        res.json({
            message: 'Google login successful',
            token,
            user: user.toJSON()
        });
    } catch (error) {
        console.error('Google Auth Error:', error);
        res.status(500).json({ message: 'Error authenticating with Google' });
    }
});

export default router;
