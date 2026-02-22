import express from 'express';
import User from '../models/User.js';
import Connection from '../models/Connection.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

/**
 * Calculate Jaccard Similarity between two arrays
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Number} Similarity score between 0 and 1
 */
function jaccardSimilarity(arr1 = [], arr2 = []) {
    if (!arr1.length && !arr2.length) return 0;

    const set1 = new Set(arr1.map(i => i.toLowerCase()));
    const set2 = new Set(arr2.map(i => i.toLowerCase()));

    const intersection = [...set1].filter(x => set2.has(x)).length;
    const union = new Set([...set1, ...set2]).size;

    return union === 0 ? 0 : intersection / union;
}

/**
 * Calculate overall match score between two users
 * Weights:
 * - Interests: 40%
 * - Skills: 30%
 * - Career Goals: 20%
 * - College/Course: 10%
 */
function calculateMatchScore(currentUser, otherUser) {
    const interestScore = jaccardSimilarity(currentUser.interests, otherUser.interests);
    const skillScore = jaccardSimilarity(currentUser.skills, otherUser.skills);
    const careerScore = jaccardSimilarity(currentUser.careerGoals, otherUser.careerGoals);

    // College/Course match (simple binary comparison)
    let collegeScore = 0;
    if (currentUser.college && otherUser.college) {
        if (currentUser.college.toLowerCase() === otherUser.college.toLowerCase()) {
            collegeScore = 0.5;
        }
    }
    if (currentUser.course && otherUser.course) {
        if (currentUser.course.toLowerCase() === otherUser.course.toLowerCase()) {
            collegeScore += 0.5;
        }
    }

    // Weighted score
    const score = (
        (interestScore * 0.4) +
        (skillScore * 0.3) +
        (careerScore * 0.2) +
        (collegeScore * 0.1)
    );

    // Convert to percentage (0-100)
    return Math.round(score * 100);
}

// @route   GET /api/recommendations
// @desc    Get personalized recommendations for current user
// @access  Private
router.get('/', authenticate, async (req, res) => {
    try {
        const currentUser = await User.findById(req.userId);

        if (!currentUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get existing connections and pending requests
        const existingConnections = await Connection.find({
            $or: [
                { requester: req.userId },
                { recipient: req.userId }
            ],
            status: { $in: ['accepted', 'pending'] }
        });

        const excludeIds = [
            req.userId,
            ...existingConnections.map(c =>
                c.requester.toString() === req.userId.toString()
                    ? c.recipient
                    : c.requester
            )
        ];

        // Get all other users (excluding self and existing connections)
        const otherUsers = await User.find({
            _id: { $nin: excludeIds }
        }).select('-password');

        // Calculate match scores
        const recommendations = otherUsers.map(user => ({
            ...user.toJSON(),
            matchScore: calculateMatchScore(currentUser, user)
        }));

        // Sort by match score (descending) and return top 20
        recommendations.sort((a, b) => b.matchScore - a.matchScore);
        const topRecommendations = recommendations.slice(0, 20);

        res.json(topRecommendations);
    } catch (error) {
        console.error('Get recommendations error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   GET /api/recommendations/similar/:userId
// @desc    Find users similar to a specific user
// @access  Private
router.get('/similar/:userId', authenticate, async (req, res) => {
    try {
        const targetUser = await User.findById(req.params.userId);

        if (!targetUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get all other users
        const otherUsers = await User.find({
            _id: { $nin: [req.params.userId, req.userId] }
        }).select('-password');

        // Calculate similarity scores
        const similarUsers = otherUsers.map(user => ({
            ...user.toJSON(),
            matchScore: calculateMatchScore(targetUser, user)
        }));

        // Sort and return top 10
        similarUsers.sort((a, b) => b.matchScore - a.matchScore);
        const topSimilar = similarUsers.slice(0, 10);

        res.json(topSimilar);
    } catch (error) {
        console.error('Get similar users error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
