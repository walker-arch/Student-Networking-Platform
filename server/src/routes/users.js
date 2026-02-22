import express from 'express';
import User from '../models/User.js';
import { authenticate } from '../middleware/auth.js';

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
        const { name, bio, college, course, year, interests, skills, careerGoals, avatar } = req.body;

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

// @route   GET /api/users/search
// @desc    Search users by name, interests, skills, college
// @access  Private
router.get('/search', authenticate, async (req, res) => {
    try {
        const { q, interest, skill, college, year, page = 1, limit = 20 } = req.query;

        const query = {
            _id: { $ne: req.userId } // Exclude current user
        };

        if (q) {
            query.$or = [
                { name: { $regex: q, $options: 'i' } },
                { college: { $regex: q, $options: 'i' } },
                { interests: { $regex: q, $options: 'i' } },
                { skills: { $regex: q, $options: 'i' } }
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

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Private
router.get('/:id', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Get user error:', error);

        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
