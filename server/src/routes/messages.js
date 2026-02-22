import express from 'express';
import Message from '../models/Message.js';
import User from '../models/User.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/messages/conversations
// @desc    Get all conversations
// @access  Private
router.get('/conversations', authenticate, async (req, res) => {
    try {
        // Get all messages involving the current user
        const messages = await Message.aggregate([
            {
                $match: {
                    $or: [
                        { sender: req.userId },
                        { receiver: req.userId }
                    ]
                }
            },
            {
                $sort: { createdAt: -1 }
            },
            {
                $group: {
                    _id: {
                        $cond: [
                            { $eq: ['$sender', req.userId] },
                            '$receiver',
                            '$sender'
                        ]
                    },
                    lastMessage: { $first: '$$ROOT' },
                    unreadCount: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ['$receiver', req.userId] },
                                        { $eq: ['$read', false] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    }
                }
            },
            {
                $sort: { 'lastMessage.createdAt': -1 }
            }
        ]);

        // Populate user details
        const conversationIds = messages.map(m => m._id);
        const users = await User.find({ _id: { $in: conversationIds } })
            .select('name email college avatar');

        const userMap = {};
        users.forEach(u => {
            userMap[u._id.toString()] = u;
        });

        const conversations = messages.map(msg => ({
            _id: msg._id.toString(),
            user: userMap[msg._id.toString()],
            lastMessage: {
                content: msg.lastMessage.content,
                createdAt: formatMessageTime(msg.lastMessage.createdAt),
                sender: msg.lastMessage.sender.toString() === req.userId.toString() ? 'me' : msg._id.toString()
            },
            unread: msg.unreadCount
        }));

        res.json(conversations);
    } catch (error) {
        console.error('Get conversations error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   GET /api/messages/:userId
// @desc    Get messages with a specific user
// @access  Private
router.get('/:userId', authenticate, async (req, res) => {
    try {
        const otherUserId = req.params.userId;

        const messages = await Message.find({
            $or: [
                { sender: req.userId, receiver: otherUserId },
                { sender: otherUserId, receiver: req.userId }
            ]
        }).sort({ createdAt: 1 });

        // Mark messages as read
        await Message.updateMany(
            { sender: otherUserId, receiver: req.userId, read: false },
            { read: true }
        );

        const formattedMessages = messages.map(msg => ({
            _id: msg._id,
            sender: msg.sender.toString() === req.userId.toString() ? 'me' : msg.sender,
            content: msg.content,
            createdAt: formatMessageTime(msg.createdAt),
            read: msg.read
        }));

        res.json(formattedMessages);
    } catch (error) {
        console.error('Get messages error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/messages/:userId
// @desc    Send a message
// @access  Private
router.post('/:userId', authenticate, async (req, res) => {
    try {
        const { content } = req.body;
        const receiverId = req.params.userId;

        if (!content || !content.trim()) {
            return res.status(400).json({ message: 'Message content is required' });
        }

        // Check if receiver exists
        const receiver = await User.findById(receiverId);
        if (!receiver) {
            return res.status(404).json({ message: 'User not found' });
        }

        const message = new Message({
            sender: req.userId,
            receiver: receiverId,
            content: content.trim()
        });

        await message.save();

        res.status(201).json({
            _id: message._id,
            sender: 'me',
            content: message.content,
            createdAt: formatMessageTime(message.createdAt),
            read: false
        });
    } catch (error) {
        console.error('Send message error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Helper function to format message time
function formatMessageTime(date) {
    const now = new Date();
    const msgDate = new Date(date);
    const diffMs = now - msgDate;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) {
        return msgDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    }
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return msgDate.toLocaleDateString('en-US', { weekday: 'short' });
    return msgDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default router;
