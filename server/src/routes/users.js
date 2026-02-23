import express from 'express';
import User from '../models/User.js';
import Connection from '../models/Connection.js';
import Message from '../models/Message.js';
import { authenticate } from '../middleware/auth.js';
import upload from '../config/cloudinary.js';

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get current user's profile
// @access  Private
router.get('/profile', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.userId).populate('connections', 'name email college avatar');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   PUT /api/users/profile
// @desc    Update current user's profile
// @access  Private
router.put('/profile', authenticate, async (req, res) => {
    try {
        const { name, bio, college, course, year, interests, skills, careerGoals, avatar, location } = req.body;

        const updateFields = {};
        if (name !== undefined) updateFields.name = name;
        if (bio !== undefined) updateFields.bio = bio;
        if (college !== undefined) updateFields.college = college;
        if (course !== undefined) updateFields.course = course;
        if (year !== undefined) updateFields.year = year;
        if (interests !== undefined) updateFields.interests = interests;
        if (skills !== undefined) updateFields.skills = skills;
        if (careerGoals !== undefined) updateFields.careerGoals = careerGoals;
        if (avatar !== undefined) updateFields.avatar = avatar;
        if (location !== undefined) updateFields.location = location;

        const user = await User.findByIdAndUpdate(
            req.userId,
            { $set: updateFields },
            { new: true, runValidators: true }
        ).populate('connections', 'name email college avatar');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Update profile error:', error);

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({ message: messages.join(', ') });
        }

        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/users/profile/avatar
// @desc    Upload user avatar
// @access  Private
router.post('/profile/avatar', authenticate, (req, res, next) => {
    upload.single('avatar')(req, res, function (err) {
        if (err) {
            console.error('Multer/Cloudinary error:', err);
            return res.status(400).json({ message: 'Error uploading image. Check Cloudinary API keys.' });
        }
        next();
    });
}, async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const avatarUrl = req.file.path;

        const user = await User.findByIdAndUpdate(
            req.userId,
            { avatar: avatarUrl },
            { new: true }
        ).populate('connections', 'name email college avatar');

        res.json(user);
    } catch (error) {
        console.error('Upload avatar error:', error);
        res.status(500).json({ message: 'Server error uploading avatar' });
    }
});

// @route   GET /api/users/dashboard
// @desc    Get dashboard stats for current user
// @access  Private
router.get('/dashboard', authenticate, async (req, res) => {
    try {
        // Connection count
        const connectionCount = await Connection.countDocuments({
            $or: [
                { requester: req.userId, status: 'accepted' },
                { recipient: req.userId, status: 'accepted' }
            ]
        });

        // Unread message count
        const unreadMessages = await Message.countDocuments({
            receiver: req.userId,
            read: false
        });

        // Profile views
        const user = await User.findById(req.userId).select('profileViews');

        // Pending requests received
        const pendingRequests = await Connection.countDocuments({
            recipient: req.userId,
            status: 'pending'
        });

        res.json({
            connections: connectionCount,
            messages: unreadMessages,
            profileViews: user?.profileViews || 0,
            pendingRequests
        });
    } catch (error) {
        console.error('Dashboard stats error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   GET /api/users/search
// @desc    Search users by name, interests, skills, college
// @access  Private
router.get('/search', authenticate, async (req, res) => {
    try {
        const { q, interest, skill, college, year, location, page = 1, limit = 20 } = req.query;

        const query = {
            _id: { $ne: req.userId } // Exclude current user
        };

        if (q) {
            query.$or = [
                { name: { $regex: q, $options: 'i' } },
                { college: { $regex: q, $options: 'i' } },
                { interests: { $regex: q, $options: 'i' } },
                { skills: { $regex: q, $options: 'i' } },
                { location: { $regex: q, $options: 'i' } }
            ];
        }

        if (interest) {
            query.interests = { $in: [new RegExp(interest, 'i')] };
        }

        if (skill) {
            query.skills = { $in: [new RegExp(skill, 'i')] };
        }

        if (college) {
            query.college = { $regex: college, $options: 'i' };
        }

        if (year) {
            query.year = parseInt(year);
        }

        if (location) {
            query.location = { $regex: location, $options: 'i' };
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const users = await User.find(query)
            .select('-password')
            .skip(skip)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 });

        const total = await User.countDocuments(query);

        res.json({
            users,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('Search users error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   PUT /api/users/mute/:userId
// @desc    Toggle mute notifications for a user
// @access  Private
router.put('/mute/:userId', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        const targetUserId = req.params.userId;

        const isMuted = user.mutedUsers.some(id => id.toString() === targetUserId);

        if (isMuted) {
            await User.findByIdAndUpdate(req.userId, {
                $pull: { mutedUsers: targetUserId }
            });
            res.json({ muted: false, message: 'User unmuted' });
        } else {
            await User.findByIdAndUpdate(req.userId, {
                $addToSet: { mutedUsers: targetUserId }
            });
            res.json({ muted: true, message: 'User muted' });
        }
    } catch (error) {
        console.error('Mute user error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   PUT /api/users/block/:userId
// @desc    Toggle block a user
// @access  Private
router.put('/block/:userId', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        const targetUserId = req.params.userId;

        const isBlocked = user.blockedUsers.some(id => id.toString() === targetUserId);

        if (isBlocked) {
            await User.findByIdAndUpdate(req.userId, {
                $pull: { blockedUsers: targetUserId }
            });
            res.json({ blocked: false, message: 'User unblocked' });
        } else {
            await User.findByIdAndUpdate(req.userId, {
                $addToSet: { blockedUsers: targetUserId }
            });
            res.json({ blocked: true, message: 'User blocked' });
        }
    } catch (error) {
        console.error('Block user error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   PUT /api/users/clear-chat/:userId
// @desc    Clear chat with a user (client-side only, stores timestamp)
// @access  Private
router.put('/clear-chat/:userId', authenticate, async (req, res) => {
    try {
        const targetUserId = req.params.userId;

        // Remove any existing cleared chat entry for this user, then add new one
        await User.findByIdAndUpdate(req.userId, {
            $pull: { clearedChats: { userId: targetUserId } }
        });
        await User.findByIdAndUpdate(req.userId, {
            $push: { clearedChats: { userId: targetUserId, clearedAt: new Date() } }
        });

        res.json({ message: 'Chat cleared', clearedAt: new Date() });
    } catch (error) {
        console.error('Clear chat error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   GET /api/users/interaction-status/:userId
// @desc    Get mute/block status for a specific user
// @access  Private
router.get('/interaction-status/:userId', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        const targetUserId = req.params.userId;

        const isMuted = user.mutedUsers.some(id => id.toString() === targetUserId);
        const isBlocked = user.blockedUsers.some(id => id.toString() === targetUserId);

        res.json({ isMuted, isBlocked });
    } catch (error) {
        console.error('Get interaction status error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   GET /api/users/blocked
// @desc    Get list of blocked users
// @access  Private
router.get('/blocked', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.userId).populate('blockedUsers', 'name college avatar location');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user.blockedUsers);
    } catch (error) {
        console.error('Get blocked users error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Private
router.get('/:id', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Increment profile views if viewing another user's profile
        if (req.params.id !== req.userId.toString()) {
            await User.findByIdAndUpdate(req.params.id, { $inc: { profileViews: 1 } });
        }

        const userObj = user.toObject();
        userObj.online = userObj.lastActive ? (Date.now() - new Date(userObj.lastActive).getTime() < 5 * 60 * 1000) : true;
        // The requester themselves is online (the API call updates the time shortly anyway, but it is instant this way)
        res.json(userObj);
    } catch (error) {
        console.error('Get user error:', error);

        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
