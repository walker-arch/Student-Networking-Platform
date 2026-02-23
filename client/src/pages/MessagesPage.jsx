import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import {
  Send,
  ArrowLeft,
  Search,
  MoreVertical,
  Loader,
  MessageCircle,
  Trash2
} from 'lucide-react';


const MessagesPage = () => {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [hoveredMessage, setHoveredMessage] = useState(null);
  const [deletingMsg, setDeletingMsg] = useState(null);
  const messagesContainerRef = useRef(null);
  const menuRef = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // Close 3-dots menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    fetchConversations();
  }, []);

  useEffect(() => {
    if (userId && !loading) {
      const conv = conversations.find(c => c.user?._id === userId);
      if (conv) {
        setActiveConversation(conv);
        fetchMessages(userId);
        fetchInteractionStatus(userId);
        // Clear unread badge when opening via URL
        setConversations(prev =>
          prev.map(c => c._id === conv._id ? { ...c, unread: 0 } : c)
        );
      } else {
        // No prior conversation — create a temporary one by fetching user info
        const createTempConversation = async () => {
          try {
            const user = await api.getUserById(userId);
            const tempConv = {
              _id: userId,
              user: { _id: userId, name: user.name, college: user.college, online: false },
              lastMessage: null,
              unread: 0
            };
            setActiveConversation(tempConv);
            setMessages([]);
            fetchInteractionStatus(userId);
          } catch (e) {
            console.error('Failed to load user for messaging:', e);
          }
        };
        createTempConversation();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, loading]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchConversations = async () => {
    setLoading(true);
    try {
      const data = await api.getConversations();
      setConversations(data);
    } catch (error) {
      console.error('Fetch conversations error:', error);
      showToast('Failed to load conversations.');
      setConversations([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (userId) => {
    try {
      const data = await api.getMessages(userId);
      setMessages(data);
    } catch (error) {
      console.error('Fetch messages error:', error);
      showToast('Failed to load messages.');
      setMessages([]);
    }
  };

  const fetchInteractionStatus = async (uid) => {
    try {
      const status = await api.getInteractionStatus(uid);
      setIsMuted(status.isMuted);
      setIsBlocked(status.isBlocked);
    } catch (e) {
      console.error('Failed to fetch interaction status:', e);
    }
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
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
      setConversations(prev => prev.map(c =>
        c._id === activeConversation._id
          ? { ...c, lastMessage: { content: messageContent, createdAt: 'Just now', sender: 'me' } }
          : c
      ));
    } catch (error) {
      console.error('Failed to send message:', error);
      showToast(error.message || 'Failed to send message');
      setMessages(prev => prev.filter(m => m._id !== optimisticMessage._id));
    } finally {
      setSending(false);
    }
  };

  const handleDeleteMessage = async (messageId) => {
    setDeletingMsg(messageId);
    try {
      await api.deleteMessage(messageId);
      setMessages(prev => prev.filter(m => m._id !== messageId));
      showToast('🗑️ Message deleted');
    } catch (error) {
      showToast(error.message || 'Cannot delete this message');
    } finally {
      setDeletingMsg(null);
    }
  };

  const selectConversation = (conversation) => {
    setActiveConversation(conversation);
    fetchMessages(conversation.user._id);
    fetchInteractionStatus(conversation.user._id);
    // Mark as read
    setConversations(prev =>
      prev.map(c => c._id === conversation._id ? { ...c, unread: 0 } : c)
    );
  };

  const filteredConversations = conversations.filter(conv =>
    conv.user?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="messages-page">
      {/* Conversations Sidebar */}
      <div className={`conversations-sidebar ${activeConversation ? 'hide-mobile' : ''}`}>
        <div className="sidebar-header">
          <button
            className="page-back-btn"
            onClick={() => navigate(-1)}
            title="Go back"
          >
            <ArrowLeft size={20} />
          </button>
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
                    {conv.lastMessage ? (
                      <>
                        {conv.lastMessage.sender === 'me' && 'You: '}
                        {conv.lastMessage.content}
                      </>
                    ) : (
                      <span style={{ fontStyle: 'italic', opacity: 0.7 }}>Start a conversation</span>
                    )}
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
                <div className="more-menu-wrapper" ref={menuRef}>
                  <button className="action-btn" onClick={() => setShowMenu(!showMenu)}>
                    <MoreVertical size={18} />
                  </button>
                  {showMenu && (
                    <div className="more-menu-dropdown">
                      <button onClick={() => { navigate(`/profile/${activeConversation.user._id}`); setShowMenu(false); }}>View Profile</button>
                      <button onClick={async () => {
                        try {
                          const res = await api.muteUser(activeConversation.user._id);
                          setIsMuted(res.muted);
                          showToast(res.muted ? '🔇 Notifications muted' : '🔔 Notifications unmuted');
                        } catch (e) { showToast('Failed to update mute status'); }
                        setShowMenu(false);
                      }}>{isMuted ? 'Unmute Notifications' : 'Mute Notifications'}</button>
                      <button onClick={async () => {
                        try {
                          const res = await api.blockUser(activeConversation.user._id);
                          setIsBlocked(res.blocked);
                          showToast(res.blocked ? '🚫 User blocked' : '✅ User unblocked');
                        } catch (e) { showToast('Failed to update block status'); }
                        setShowMenu(false);
                      }}>{isBlocked ? 'Unblock User' : 'Block User'}</button>
                      <button onClick={async () => {
                        try {
                          await api.clearChat(activeConversation.user._id);
                          setMessages([]);
                          setConversations(prev => prev.map(c =>
                            c.user._id === activeConversation.user._id ? { ...c, lastMessage: null, unread: 0 } : c
                          ));
                          showToast('🗑️ Chat cleared');
                        } catch (e) { showToast('Failed to clear chat'); }
                        setShowMenu(false);
                      }}>Clear Chat</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {isBlocked && (
              <div className="blocked-banner" style={{ padding: '0.75rem', backgroundColor: 'var(--bg-tertiary)', textAlign: 'center', color: 'var(--text-secondary)' }}>
                🚫 You have blocked this user. <button onClick={async () => {
                  try {
                    const res = await api.blockUser(activeConversation.user._id);
                    setIsBlocked(res.blocked);
                    showToast(res.blocked ? '🚫 User blocked' : '✅ User unblocked');
                  } catch (e) { showToast('Failed to update block status'); }
                }} style={{ background: 'none', border: 'none', color: 'var(--primary-500)', cursor: 'pointer', textDecoration: 'underline' }}>Unblock</button>
              </div>
            )}

            {/* Messages */}
            <div className="messages-container" ref={messagesContainerRef}>
              {messages.length === 0 ? (
                <div className="empty-chat-state">
                  <p>No messages yet.</p>
                  <p className="empty-chat-subtext">Send a message to start the conversation!</p>
                </div>
              ) : (
                messages.map(message => (
                  <div
                    key={message._id}
                    className={`message ${message.sender === 'me' ? 'sent' : 'received'}`}
                    onMouseEnter={() => setHoveredMessage(message._id)}
                    onMouseLeave={() => setHoveredMessage(null)}
                  >
                    <div className="message-bubble">
                      <p>{message.content}</p>
                      <span className="message-time">{message.createdAt}</span>
                    </div>
                    {message.sender === 'me' && hoveredMessage === message._id && !message._id.startsWith('temp-') && (
                      <button
                        className="msg-delete-btn"
                        style={{
                          background: 'none', border: 'none', color: 'var(--text-muted)',
                          padding: '0.25rem', cursor: 'pointer', marginLeft: '0.25rem', alignSelf: 'center'
                        }}
                        onClick={() => handleDeleteMessage(message._id)}
                        disabled={deletingMsg === message._id}
                        title="Delete message"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Message Input */}
            {!isBlocked ? (
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
            ) : (
              <div className="message-input-form" style={{ justifyContent: 'center', color: 'var(--text-muted)' }}>
                You have blocked this user. Unblock to send messages.
              </div>
            )}
          </>
        ) : (
          <div className="no-conversation-selected">
            <MessageCircle size={48} />
            <h3>Select a conversation</h3>
            <p>Choose a conversation from the sidebar to start messaging</p>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="msg-toast">{toast}</div>
      )}

      <style>{`
        /* FUTURISTIC REDESIGN */
        
        .messages-page {
          display: flex;
          height: 100vh;
          background: radial-gradient(circle at top right, #0a0a0f, #111116);
          position: relative;
          overflow: hidden;
        }
        
        /* Subtle ambient glow behind everything */
        .messages-page::before {
          content: '';
          position: absolute;
          top: -30%; left: -20%;
          width: 70vw; height: 70vw;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* Sidebar */
        .conversations-sidebar {
          width: 380px;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          background: rgba(17, 17, 22, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 10;
          box-shadow: 10px 0 30px rgba(0,0,0,0.5);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 1.5rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .page-back-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          flex-shrink: 0;
        }

        .page-back-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
          color: #60a5fa;
          transform: scale(1.1);
        }

        .sidebar-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .search-box {
          padding: 1rem 1.5rem;
          position: relative;
        }

        .search-box .search-icon {
          position: absolute;
          left: 2.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          transition: color 0.3s ease;
        }

        .search-box input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .search-box input:focus {
          outline: none;
          background: rgba(0, 0, 0, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15), inset 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .search-box input:focus + .search-icon {
          color: #60a5fa;
        }

        .conversations-list {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 0.5rem;
        }

        .conversations-list::-webkit-scrollbar {
          width: 6px;
        }
        .conversations-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .conversations-list::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }

        .conversation-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem 1.25rem;
          cursor: pointer;
          border-radius: 1rem;
          margin-bottom: 0.25rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }

        .conversation-item:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateX(4px);
        }

        .conversation-item.active {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.2);
          box-shadow: inset 0 0 20px rgba(59,130,246,0.05);
        }

        .conv-avatar {
          position: relative;
          width: 3.25rem;
          height: 3.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border-radius: 1rem;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
          transform: rotate(-3deg);
          transition: transform 0.3s ease;
        }
        
        .conversation-item:hover .conv-avatar {
          transform: rotate(0deg) scale(1.05);
        }

        .online-indicator {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 14px;
          height: 14px;
          background: #10b981;
          border: 3px solid #111116;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }

        .conv-info {
          flex: 1;
          min-width: 0;
        }

        .conv-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }

        .conv-name {
          font-weight: 600;
          color: #f8fafc;
          font-size: 1.05rem;
          letter-spacing: 0.3px;
        }

        .conv-time {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
        }

        .conv-preview {
          font-size: 0.85rem;
          color: #94a3b8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .unread-badge {
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }

        /* Chat Area */
        .chat-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: rgba(10, 10, 15, 0.8);
          z-index: 10;
          position: relative;
        }

        .chat-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem 2rem;
          background: rgba(17, 17, 22, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .chat-user-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .chat-avatar {
          position: relative;
          width: 2.75rem;
          height: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 0.8rem;
          color: white;
          font-weight: 700;
          box-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);
        }

        .chat-user-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.15rem;
          color: #f8fafc;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .chat-status {
          font-size: 0.75rem;
          color: #10b981;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .chat-user-info h3 + .chat-status::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
        }

        .action-btn {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 50%;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          transform: rotate(90deg);
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        /* Messages */
        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          scroll-behavior: smooth;
        }
        
        .messages-container::-webkit-scrollbar {
          width: 8px;
        }
        .messages-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .messages-container::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }

        .message {
          display: flex;
          max-width: 65%;
          animation: messageSlideIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(10px);
        }
        
        @keyframes messageSlideIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .message.sent {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message.received {
          align-self: flex-start;
        }

        .message-bubble {
          padding: 1rem 1.25rem;
          position: relative;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          line-height: 1.6;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
        }

        .message.sent .message-bubble {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          border-radius: 1.5rem 1.5rem 0.25rem 1.5rem;
        }

        .message.received .message-bubble {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.05);
          color: #e2e8f0;
          border-radius: 1.5rem 1.5rem 1.5rem 0.25rem;
        }

        .message-time {
          font-size: 0.65rem;
          opacity: 0.7;
          display: block;
          margin-top: 0.5rem;
          text-align: right;
        }

        /* Message Input */
        .message-input-form {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 2rem;
          background: rgba(17, 17, 22, 0.6);
          backdrop-filter: blur(15px);
          border-top: 1px solid rgba(255,255,255,0.05);
          position: relative;
          z-index: 20;
        }

        .message-input-form input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          background: rgba(30, 41, 59, 0.5);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .message-input-form input:focus {
          outline: none;
          background: rgba(15, 23, 42, 0.8);
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .send-btn {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.1) rotate(-10deg);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
        }

        .send-btn:disabled {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.3);
          box-shadow: none;
          cursor: not-allowed;
          transform: none;
        }

        /* No Conversation State */
        .no-conversation-selected {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #64748b;
          gap: 1.5rem;
          background: radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%);
        }

        .no-conversation-selected svg {
          opacity: 0.5;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .no-conversation-selected h3 {
          color: #e2e8f0;
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* 3-dots dropdown */
        .more-menu-wrapper {
          position: relative;
        }

        .more-menu-dropdown {
          position: absolute;
          top: 120%;
          right: 0;
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          z-index: 100;
          min-width: 200px;
          overflow: hidden;
          animation: menuPop 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          transform-origin: top right;
        }

        @keyframes menuPop {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .more-menu-dropdown button {
          display: block;
          width: 100%;
          padding: 0.875rem 1.25rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 0.9rem;
          color: #e2e8f0;
          cursor: pointer;
          transition: background 0.2s ease;
          font-weight: 500;
        }

        .more-menu-dropdown button:hover {
          background: rgba(59, 130, 246, 0.2);
          color: #fff;
        }
        
        @media (max-width: 768px) {
          .conversations-sidebar {
            width: 100%;
            position: absolute;
            left: 0; right: 0; top: 0; bottom: 0;
            z-index: 10;
          }
          .conversations-sidebar.hide-mobile { display: none; }
          .chat-area {
            position: absolute;
            left: 0; right: 0; top: 0; bottom: 0;
            z-index: 20;
          }
          .chat-area.hide-mobile { display: none; }
          .message { max-width: 85%; }
        }

        /* Toast Notification */
        .msg-toast {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(30, 41, 59, 0.9);
          backdrop-filter: blur(5px);
          color: white;
          padding: 0.875rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 500;
          box-shadow: 0 8px 30px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 999;
          animation: toastFadeIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes toastFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default MessagesPage;
