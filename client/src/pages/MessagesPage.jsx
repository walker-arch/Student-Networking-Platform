import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import {
    Send,
    ArrowLeft,
    Search,
    MoreVertical,
    Phone,
    Video,
    Loader,
    MessageCircle
} from 'lucide-react';

// Mock data
const MOCK_CONVERSATIONS = [
    {
        _id: 'c1',
        user: {
            _id: 'u1',
            name: 'Priya Sharma',
            college: 'IIT Delhi',
            online: true
        },
        lastMessage: {
            content: 'That sounds great! Let\'s discuss the project tomorrow.',
            createdAt: '10:30 AM',
            sender: 'u1'
        },
        unread: 2
    },
    {
        _id: 'c2',
        user: {
            _id: 'u2',
            name: 'Rahul Verma',
            college: 'BITS Pilani',
            online: false
        },
        lastMessage: {
            content: 'Thanks for connecting!',
            createdAt: 'Yesterday',
            sender: 'me'
        },
        unread: 0
    },
    {
        _id: 'c3',
        user: {
            _id: 'u3',
            name: 'Ananya Patel',
            college: 'NIT Trichy',
            online: true
        },
        lastMessage: {
            content: 'Have you checked out the hackathon?',
            createdAt: 'Yesterday',
            sender: 'u3'
        },
        unread: 0
    }
];

const MOCK_MESSAGES = [
    {
        _id: 'm1',
        sender: 'u1',
        content: 'Hey! I saw your profile and noticed we have similar interests in ML.',
        createdAt: '10:00 AM'
    },
    {
        _id: 'm2',
        sender: 'me',
        content: 'Hi Priya! Yes, I\'m currently working on a computer vision project.',
        createdAt: '10:15 AM'
    },
    {
        _id: 'm3',
        sender: 'u1',
        content: 'That\'s awesome! I\'m doing research on image classification. Maybe we can collaborate?',
        createdAt: '10:20 AM'
    },
    {
        _id: 'm4',
        sender: 'me',
        content: 'Definitely! I\'d love to hear more about your research.',
        createdAt: '10:25 AM'
    },
    {
        _id: 'm5',
        sender: 'u1',
        content: 'That sounds great! Let\'s discuss the project tomorrow.',
        createdAt: '10:30 AM'
    }
];

const MessagesPage = () => {
    const { userId } = useParams();
    const { user: currentUser } = useAuth();
    const [conversations, setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        fetchConversations();
    }, []);

    useEffect(() => {
        if (userId) {
            const conv = conversations.find(c => c.user._id === userId);
            if (conv) {
                setActiveConversation(conv);
                fetchMessages(userId);
            }
        }
    }, [userId, conversations]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const fetchConversations = async () => {
        setLoading(true);
        try {
            const data = await api.getConversations();
            setConversations(data);
        } catch (error) {
            console.log('Using mock data');
            setConversations(MOCK_CONVERSATIONS);
        } finally {
            setLoading(false);
        }
    };

    const fetchMessages = async (userId) => {
        try {
            const data = await api.getMessages(userId);
            setMessages(data);
        } catch (error) {
            console.log('Using mock messages');
            setMessages(MOCK_MESSAGES);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !activeConversation) return;

        const messageContent = newMessage.trim();
        setNewMessage('');
        setSending(true);

        // Optimistic update
        const optimisticMessage = {
            _id: `temp-${Date.now()}`,
            sender: 'me',
            content: messageContent,
            createdAt: 'Just now'
        };
        setMessages(prev => [...prev, optimisticMessage]);

        try {
            await api.sendMessage(activeConversation.user._id, messageContent);
        } catch (error) {
            console.error('Failed to send message:', error);
        } finally {
            setSending(false);
        }
    };

    const selectConversation = (conversation) => {
        setActiveConversation(conversation);
        fetchMessages(conversation.user._id);
        // Mark as read
        setConversations(prev =>
            prev.map(c => c._id === conversation._id ? { ...c, unread: 0 } : c)
        );
    };

    const filteredConversations = conversations.filter(conv =>
        conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="messages-page">
            {/* Conversations Sidebar */}
            <div className={`conversations-sidebar ${activeConversation ? 'hide-mobile' : ''}`}>
                <div className="sidebar-header">
                    <h2>Messages</h2>
                </div>

                <div className="search-box">
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search conversations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="conversations-list">
                    {loading ? (
                        <div className="loading-state">
                            <Loader size={24} className="animate-spin" />
                        </div>
                    ) : filteredConversations.length === 0 ? (
                        <div className="empty-conversations">
                            <MessageCircle size={32} />
                            <p>No conversations yet</p>
                        </div>
                    ) : (
                        filteredConversations.map(conv => (
                            <div
                                key={conv._id}
                                className={`conversation-item ${activeConversation?._id === conv._id ? 'active' : ''}`}
                                onClick={() => selectConversation(conv)}
                            >
                                <div className="conv-avatar">
                                    <span>{conv.user.name.charAt(0)}</span>
                                    {conv.user.online && <div className="online-indicator" />}
                                </div>
                                <div className="conv-info">
                                    <div className="conv-header">
                                        <span className="conv-name">{conv.user.name}</span>
                                        <span className="conv-time">{conv.lastMessage?.createdAt}</span>
                                    </div>
                                    <p className="conv-preview">
                                        {conv.lastMessage?.sender === 'me' && 'You: '}
                                        {conv.lastMessage?.content}
                                    </p>
                                </div>
                                {conv.unread > 0 && (
                                    <div className="unread-badge">{conv.unread}</div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Chat Area */}
            <div className={`chat-area ${!activeConversation ? 'hide-mobile' : ''}`}>
                {activeConversation ? (
                    <>
                        {/* Chat Header */}
                        <div className="chat-header">
                            <button
                                className="back-btn"
                                onClick={() => setActiveConversation(null)}
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <div className="chat-user-info">
                                <div className="chat-avatar">
                                    <span>{activeConversation.user.name.charAt(0)}</span>
                                    {activeConversation.user.online && <div className="online-indicator" />}
                                </div>
                                <div>
                                    <h3>{activeConversation.user.name}</h3>
                                    <span className="chat-status">
                                        {activeConversation.user.online ? 'Online' : 'Offline'}
                                    </span>
                                </div>
                            </div>
                            <div className="chat-actions">
                                <button className="action-btn" title="Voice call">
                                    <Phone size={18} />
                                </button>
                                <button className="action-btn" title="Video call">
                                    <Video size={18} />
                                </button>
                                <button className="action-btn">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="messages-container">
                            {messages.map(message => (
                                <div
                                    key={message._id}
                                    className={`message ${message.sender === 'me' ? 'sent' : 'received'}`}
                                >
                                    <div className="message-bubble">
                                        <p>{message.content}</p>
                                        <span className="message-time">{message.createdAt}</span>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input */}
                        <form className="message-input-form" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="send-btn"
                                disabled={!newMessage.trim() || sending}
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="no-conversation-selected">
                        <MessageCircle size={48} />
                        <h3>Select a conversation</h3>
                        <p>Choose a conversation from the sidebar to start messaging</p>
                    </div>
                )}
            </div>

            <style>{`
        .messages-page {
          display: flex;
          height: calc(100vh - 5rem);
          background: var(--bg-primary);
        }

        /* Sidebar */
        .conversations-sidebar {
          width: 350px;
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
        }

        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .sidebar-header h2 {
          font-size: 1.5rem;
        }

        .search-box {
          padding: 1rem 1.5rem;
          position: relative;
        }

        .search-box .search-icon {
          position: absolute;
          left: 2.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-box input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          border: 2px solid var(--border-color);
          border-radius: 0.75rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .search-box input:focus {
          outline: none;
          border-color: var(--primary-500);
        }

        .conversations-list {
          flex: 1;
          overflow-y: auto;
        }

        .conversation-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .conversation-item:hover {
          background: var(--bg-secondary);
        }

        .conversation-item.active {
          background: var(--bg-tertiary);
        }

        .conv-avatar {
          position: relative;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          flex-shrink: 0;
        }

        .online-indicator {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 10px;
          height: 10px;
          background: #22c55e;
          border: 2px solid var(--bg-primary);
          border-radius: 9999px;
        }

        .conv-info {
          flex: 1;
          min-width: 0;
        }

        .conv-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.25rem;
        }

        .conv-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .conv-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .conv-preview {
          font-size: 0.85rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .unread-badge {
          width: 1.25rem;
          height: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-500);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          border-radius: 9999px;
        }

        .loading-state,
        .empty-conversations {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: var(--text-muted);
          gap: 0.75rem;
        }

        /* Chat Area */
        .chat-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
        }

        .chat-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .back-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        .chat-user-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }

        .chat-avatar {
          position: relative;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          color: white;
          font-weight: 600;
        }

        .chat-user-info h3 {
          font-size: 1rem;
          margin-bottom: 0.15rem;
        }

        .chat-status {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .chat-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          width: 2.25rem;
          height: 2.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          border: none;
          border-radius: 0.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .action-btn:hover {
          background: var(--primary-500);
          color: white;
        }

        /* Messages */
        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
          max-width: 70%;
        }

        .message.sent {
          align-self: flex-end;
        }

        .message.received {
          align-self: flex-start;
        }

        .message-bubble {
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          position: relative;
        }

        .message.sent .message-bubble {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          color: white;
          border-bottom-right-radius: 0.25rem;
        }

        .message.received .message-bubble {
          background: var(--bg-primary);
          color: var(--text-primary);
          border-bottom-left-radius: 0.25rem;
        }

        .message-bubble p {
          margin-bottom: 0.25rem;
          color: inherit;
          line-height: 1.5;
        }

        .message-time {
          font-size: 0.65rem;
          opacity: 0.7;
        }

        /* Message Input */
        .message-input-form {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: var(--bg-primary);
          border-top: 1px solid var(--border-color);
        }

        .message-input-form input {
          flex: 1;
          padding: 0.875rem 1.25rem;
          border: 2px solid var(--border-color);
          border-radius: 9999px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .message-input-form input:focus {
          outline: none;
          border-color: var(--primary-500);
        }

        .send-btn {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          border: none;
          border-radius: 9999px;
          color: white;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* No Conversation Selected */
        .no-conversation-selected {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          gap: 1rem;
        }

        .no-conversation-selected h3 {
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .conversations-sidebar {
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 10;
          }

          .conversations-sidebar.hide-mobile {
            display: none;
          }

          .chat-area {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 20;
          }

          .chat-area.hide-mobile {
            display: none;
          }

          .back-btn {
            display: flex;
          }

          .message {
            max-width: 85%;
          }
        }
      `}</style>
        </div>
    );
};

export default MessagesPage;
