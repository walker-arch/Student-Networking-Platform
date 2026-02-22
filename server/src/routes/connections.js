import express from 'express';
import Connection from '../models/Connection.js';
import User from '../models/User.js';
import Notification from '../models/Notification.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/connections
// @desc    Get all connections and pending requests
// @access  Private
router.get('/', authenticate, async (req, res) => {
    try {
        // Get accepted connections
        const connections = await Connection.find({
            $or: [
                { requester: req.userId, status: 'accepted' },
                { recipient: req.userId, status: 'accepted' }
            ]
        }).populate('requester recipient', 'name email college course interests avatar');

        // Format connections to always show the other user
        const formattedConnections = connections.map(conn => {
            const otherUser = conn.requester._id.toString() === req.userId.toString()
                ? conn.recipient
                : conn.requester;
            return {
                _id: conn._id,
                user: otherUser,
                status: conn.status,
                createdAt: conn.createdAt
            };
        });

        // Get pending requests received by current user
        const requests = await Connection.find({
            recipient: req.userId,
            status: 'pending'
        }).populate('requester', 'name email college course interests avatar');

        const formattedRequests = requests.map(req => ({
            _id: req._id,
            requester: req.requester,
            createdAt: req.createdAt
        }));

        // Get sent pending requests by current user
        const sentRequests = await Connection.find({
            requester: req.userId,
            status: 'pending'
        }).populate('recipient', 'name email college course interests avatar');

        const formattedSentRequests = sentRequests.map(sr => ({
            _id: sr._id,
            recipient: sr.recipient,
            createdAt: sr.createdAt
        }));

        res.json({
            connections: formattedConnections,
            requests: formattedRequests,
            sentRequests: formattedSentRequests
        });
    } catch (error) {
        console.error('Get connections error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   GET /api/connections/status/:userId
// @desc    Check connection status with a specific user
// @access  Private
router.get('/status/:userId', authenticate, async (req, res) => {
    try {
        const connection = await Connection.findOne({
            $or: [
                { requester: req.userId, recipient: req.params.userId },
                { requester: req.params.userId, recipient: req.userId }
            ],
            status: { $in: ['accepted', 'pending'] }
        });

        if (!connection) {
            return res.json({ status: 'none' });
        }

        res.json({ status: connection.status, connectionId: connection._id });
    } catch (error) {
        console.error('Check connection status error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/connections/request/:userId
// @desc    Send connection request
// @access  Private
router.post('/request/:userId', authenticate, async (req, res) => {
    try {
        const recipientId = req.params.userId;

        // Can't connect with yourself
        if (recipientId === req.userId.toString()) {
            return res.status(400).json({ message: 'Cannot connect with yourself' });
        }

        // Check if recipient exists
        const recipient = await User.findById(recipientId);
        if (!recipient) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check for existing connection/request
        const existingConnection = await Connection.findOne({
            $or: [
                { requester: req.userId, recipient: recipientId },
                { requester: recipientId, recipient: req.userId }
            ]
        });

        if (existingConnection) {
            if (existingConnection.status === 'accepted') {
                return res.status(400).json({ message: 'Already connected' });
            }
            if (existingConnection.status === 'pending') {
                return res.status(400).json({ message: 'Connection request already pending' });
            }
            // If rejected, allow new request
            await Connection.deleteOne({ _id: existingConnection._id });
        }

        // Create new connection request
        const connection = new Connection({
            requester: req.userId,
            recipient: recipientId
        });

        await connection.save();

        // Create notification for recipient
        try {
            const requesterUser = await User.findById(req.userId);
            await Notification.create({
                recipient: recipientId,
                sender: req.userId,
                type: 'connection_request',
                message: `${requesterUser.name} sent you a connection request`,
                relatedId: connection._id
            });
        } catch (e) { console.error('Notification error:', e); }

        res.status(201).json({
            message: 'Connection request sent',
            connection
        });
    } catch (error) {
        console.error('Send request error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   PUT /api/connections/accept/:requestId
// @desc    Accept connection request
// @access  Private
router.put('/accept/:requestId', authenticate, async (req, res) => {
    try {
        const connection = await Connection.findById(req.params.requestId);

        if (!connection) {
            return res.status(404).json({ message: 'Connection request not found' });
        }

        // Only recipient can accept
        if (connection.recipient.toString() !== req.userId.toString()) {
            return res.status(403).json({ message: 'Not authorized to accept this request' });
        }

        if (connection.status !== 'pending') {
            return res.status(400).json({ message: 'Request already processed' });
        }

        connection.status = 'accepted';
        await connection.save();

        // Add to both users' connections
        await User.findByIdAndUpdate(connection.requester, {
            $addToSet: { connections: connection.recipient }
        });
        await User.findByIdAndUpdate(connection.recipient, {
            $addToSet: { connections: connection.requester }
        });

        // Create notification for requester
        try {
            const acceptorUser = await User.findById(req.userId);
            await Notification.create({
                recipient: connection.requester,
                sender: req.userId,
                type: 'connection_accepted',
                message: `${acceptorUser.name} accepted your connection request`,
                relatedId: connection._id
            });
        } catch (e) { console.error('Notification error:', e); }

        res.json({
            message: 'Connection accepted',
            connection
        });
    } catch (error) {
        console.error('Accept request error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   PUT /api/connections/reject/:requestId
// @desc    Reject connection request
// @access  Private
router.put('/reject/:requestId', authenticate, async (req, res) => {
    try {
        const connection = await Connection.findById(req.params.requestId);

        if (!connection) {
            return res.status(404).json({ message: 'Connection request not found' });
        }

        // Only recipient can reject
        if (connection.recipient.toString() !== req.userId.toString()) {
            return res.status(403).json({ message: 'Not authorized to reject this request' });
        }

        if (connection.status !== 'pending') {
            return res.status(400).json({ message: 'Request already processed' });
        }

        connection.status = 'rejected';
        await connection.save();

        res.json({
            message: 'Connection rejected',
            connection
        });
    } catch (error) {
        console.error('Reject request error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   DELETE /api/connections/:connectionId
// @desc    Remove connection
// @access  Private
router.delete('/:connectionId', authenticate, async (req, res) => {
    try {
        const connection = await Connection.findById(req.params.connectionId);

        if (!connection) {
            return res.status(404).json({ message: 'Connection not found' });
        }

        // Either party can remove the connection
        const isParty =
            connection.requester.toString() === req.userId.toString() ||
            connection.recipient.toString() === req.userId.toString();

        if (!isParty) {
            return res.status(403).json({ message: 'Not authorized to remove this connection' });
        }

        // Remove from both users' connections
        await User.findByIdAndUpdate(connection.requester, {
            $pull: { connections: connection.recipient }
        });
        await User.findByIdAndUpdate(connection.recipient, {
            $pull: { connections: connection.requester }
        });

        await Connection.deleteOne({ _id: connection._id });

        res.json({ message: 'Connection removed' });
    } catch (error) {
        console.error('Remove connection error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
