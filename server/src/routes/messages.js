import express from 'express';
import mongoose from 'mongoose';
import Message from '../models/Message.js';
import User from '../models/User.js';
import Notification from '../models/Notification.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/messages/conversations
// @desc    Get all conversations
// @access  Private
router.get('/conversations', authenticate, async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.userId);

        // Get all messages involving the current user
        const messages = await Message.aggregate([
            {
                $match: {
                    $or: [
                        { sender: userId },
                        { receiver: userId }
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
                            { $eq: ['$sender', userId] },
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
                                        { $eq: ['$receiver', userId] },
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

        const currentUser = await User.findById(userId)
            .populate('connections', 'name email college avatar lastActive')
            .select('clearedChats connections');

        const users = await User.find({ _id: { $in: conversationIds } })
            .select('name email college avatar lastActive');

        const userMap = {};
        users.forEach(u => {
            userMap[u._id.toString()] = u;
        });

        if (currentUser && currentUser.connections) {
            currentUser.connections.forEach(conn => {
                userMap[conn._id.toString()] = conn;
            });
        }

        // Get current user's cleared chats
        const clearedMap = new Map();
        if (currentUser && currentUser.clearedChats) {
            currentUser.clearedChats.forEach(c => {
                if (c.userId) clearedMap.set(c.userId.toString(), c.clearedAt.getTime());
            });
        }

        const conversations = messages.map(msg => {
            const otherUserId = msg._id.toString();
            const clearedAtTime = clearedMap.get(otherUserId);

            let lastMsg = null;
            if (msg.lastMessage) {
                const msgTime = new Date(msg.lastMessage.createdAt).getTime();
                if (!clearedAtTime || msgTime > clearedAtTime) {
                    lastMsg = {
                        content: msg.lastMessage.content,
                        createdAt: formatMessageTime(msg.lastMessage.createdAt),
                        sender: msg.lastMessage.sender.toString() === req.userId.toString() ? 'me' : otherUserId
                    };
                }
            }

            const otherUser = userMap[otherUserId];
            let userObj = otherUser;
            if (otherUser) {
                userObj = otherUser.toObject ? otherUser.toObject() : { ...otherUser };
                userObj.online = userObj.lastActive ? (Date.now() - new Date(userObj.lastActive).getTime() < 5 * 60 * 1000) : false;
            }

            return {
                _id: otherUserId,
                user: userObj,
                lastMessage: lastMsg,
                unread: msg.unreadCount
            };
        }).filter(conv => conv.user); // Remove if user somehow doesn't exist anymore

        // Add connections that are not in conversations
        const existingConvIds = new Set(conversations.map(c => c._id.toString()));
        if (currentUser && currentUser.connections) {
            currentUser.connections.forEach(conn => {
                const connId = conn._id.toString();
                if (!existingConvIds.has(connId)) {
                    const connObj = conn.toObject ? conn.toObject() : { ...conn };
                    connObj.online = connObj.lastActive ? (Date.now() - new Date(connObj.lastActive).getTime() < 5 * 60 * 1000) : false;
                    conversations.push({
                        _id: connId,
                        user: connObj,
                        lastMessage: null,
                        unread: 0
                    });
                }
            });
        }

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

        const currentUser = await User.findById(req.userId).select('clearedChats');
        const clearedChat = currentUser?.clearedChats?.find(c => c.userId?.toString() === otherUserId);

        const query = {
            $or: [
                { sender: req.userId, receiver: otherUserId },
                { sender: otherUserId, receiver: req.userId }
            ]
        };

        if (clearedChat) {
            query.createdAt = { $gt: clearedChat.clearedAt };
        }

        const messages = await Message.find(query).sort({ createdAt: 1 });

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

        // Check if either party has blocked the other
        const sender = await User.findById(req.userId);
        const senderBlocked = sender.blockedUsers?.some(id => id.toString() === receiverId);
        const receiverBlocked = receiver.blockedUsers?.some(id => id.toString() === req.userId.toString());

        if (senderBlocked) {
            return res.status(403).json({ message: 'You have blocked this user. Unblock to send messages.' });
        }
        if (receiverBlocked) {
            return res.status(403).json({ message: 'You cannot send messages to this user.' });
        }

        const message = new Message({
            sender: req.userId,
            receiver: receiverId,
            content: content.trim()
        });

        await message.save();

        // Create notification for receiver (skip if receiver has muted the sender)
        try {
            const isMuted = receiver.mutedUsers?.some(id => id.toString() === req.userId.toString());
            if (!isMuted) {
                await Notification.create({
                    recipient: receiverId,
                    sender: req.userId,
                    type: 'new_message',
                    message: `${sender.name} sent you a message`,
                    relatedId: message._id
                });
            }
        } catch (e) { console.error('Notification error:', e); }

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

// @route   DELETE /api/messages/:messageId
// @desc    Delete a message
// @access  Private
router.delete('/:messageId', authenticate, async (req, res) => {
    try {
        const message = await Message.findById(req.params.messageId);

        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }

        if (message.sender.toString() !== req.userId.toString()) {
            return res.status(403).json({ message: 'Not authorized to delete this message' });
        }

        await Message.findByIdAndDelete(req.params.messageId);

        res.json({ message: 'Message removed' });
    } catch (error) {
        console.error('Delete message error:', error);
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
