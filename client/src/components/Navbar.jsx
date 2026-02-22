import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import api from '../services/api';
import {
  Home,
  Users,
  MessageCircle,
  Search,
  Bell,
  Sun,
  Moon,
  LogOut,
  User,
  Menu,
  X,
  Check,
  UserPlus,
  CheckCircle
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [notifLoading, setNotifLoading] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchUnreadCount();
      const interval = setInterval(fetchUnreadCount, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const fetchUnreadCount = async () => {
    try {
      const data = await api.getUnreadCount();
      setUnreadCount(data.count);
    } catch (e) { /* silent */ }
  };

  const fetchNotifications = async () => {
    setNotifLoading(true);
    try {
      const data = await api.getNotifications();
      setNotifications(data);
    } catch (e) {
      setNotifications([]);
    } finally {
      setNotifLoading(false);
    }
  };

  const toggleNotifDropdown = () => {
    if (!notifOpen) {
      fetchNotifications();
    }
    setNotifOpen(!notifOpen);
    setProfileDropdownOpen(false);
  };

  const handleMarkAllRead = async () => {
    try {
      await api.markAllNotificationsRead();
      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
      setUnreadCount(0);
    } catch (e) { /* silent */ }
  };

  const handleNotifClick = async (notif) => {
    if (!notif.read) {
      try {
        await api.markNotificationRead(notif._id);
        setNotifications(prev =>
          prev.map(n => n._id === notif._id ? { ...n, read: true } : n)
        );
        setUnreadCount(prev => Math.max(0, prev - 1));
      } catch (e) { /* silent */ }
    }
    setNotifOpen(false);
    if (notif.type === 'connection_request' || notif.type === 'connection_accepted') {
      navigate('/connections');
    } else if (notif.type === 'new_message' && notif.sender?._id) {
      navigate(`/messages/${notif.sender._id}`);
    }
  };

  const getNotifIcon = (type) => {
    switch (type) {
      case 'connection_request': return <UserPlus size={16} />;
      case 'connection_accepted': return <CheckCircle size={16} />;
      case 'new_message': return <MessageCircle size={16} />;
      default: return <Bell size={16} />;
    }
  };

  const formatTime = (dateStr) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now - d;
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days === 1) return 'Yesterday';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/discover', label: 'Discover', icon: Search },
    { path: '/connections', label: 'Connections', icon: Users },
    { path: '/messages', label: 'Messages', icon: MessageCircle },
  ];

  // Guest Navbar
  if (!isAuthenticated) {
    return (
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-color)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem'
        }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '0.75rem',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'white'
            }}>
              S
            </div>
            <span style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}>
              StudentNet
            </span>
          </Link>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-tertiary)',
                border: 'none',
                borderRadius: '0.5rem',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/login" className="btn btn-ghost" style={{
              padding: '0.5rem 1rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              borderRadius: '0.5rem'
            }}>
              Login
            </Link>
            <Link to="/signup" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.625rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              border: 'none'
            }}>
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  // Authenticated Navbar
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-color)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4rem',
        gap: '2rem'
      }}>
        {/* Brand */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none'
        }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            borderRadius: '0.75rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            color: 'white'
          }}>
            S
          </div>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--text-primary)'
          }}>
            StudentNet
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }} className="desktop-nav">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                color: location.pathname === path ? 'white' : 'var(--text-secondary)',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                background: location.pathname === path
                  ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                  : 'transparent',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-tertiary)',
              border: 'none',
              borderRadius: '0.5rem',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notification Bell */}
          <div ref={notifRef} style={{ position: 'relative' }}>
            <button
              onClick={toggleNotifDropdown}
              style={{
                position: 'relative',
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: notifOpen ? 'var(--primary-100)' : 'var(--bg-tertiary)',
                border: 'none',
                borderRadius: '0.5rem',
                color: notifOpen ? 'var(--primary-600)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  minWidth: '1rem',
                  height: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 4px',
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: 'white',
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  borderRadius: '9999px'
                }}>{unreadCount > 9 ? '9+' : unreadCount}</span>
              )}
            </button>

            {/* Notification Dropdown */}
            {notifOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 0.5rem)',
                right: 0,
                width: '360px',
                maxHeight: '420px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 40px var(--shadow-color)',
                overflow: 'hidden',
                animation: 'slideDown 0.2s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  borderBottom: '1px solid var(--border-color)'
                }}>
                  <h4 style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Notifications</h4>
                  {unreadCount > 0 && (
                    <button
                      onClick={handleMarkAllRead}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary-500)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        fontWeight: 500
                      }}
                    >
                      <Check size={14} />
                      Mark all read
                    </button>
                  )}
                </div>
                <div style={{ flex: 1, overflowY: 'auto', maxHeight: '350px' }}>
                  {notifLoading ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      Loading...
                    </div>
                  ) : notifications.length === 0 ? (
                    <div style={{
                      padding: '2rem',
                      textAlign: 'center',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Bell size={28} />
                      <p style={{ margin: 0 }}>No notifications yet</p>
                    </div>
                  ) : (
                    notifications.map(notif => (
                      <div
                        key={notif._id}
                        onClick={() => handleNotifClick(notif)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          padding: '0.85rem 1rem',
                          cursor: 'pointer',
                          background: notif.read ? 'transparent' : 'var(--bg-secondary)',
                          borderBottom: '1px solid var(--border-color)',
                          transition: 'background 0.15s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                        onMouseLeave={e => e.currentTarget.style.background = notif.read ? 'transparent' : 'var(--bg-secondary)'}
                      >
                        <div style={{
                          width: '2.25rem',
                          height: '2.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '9999px',
                          flexShrink: 0,
                          background: notif.type === 'connection_request'
                            ? 'linear-gradient(135deg, var(--primary-100), var(--primary-200))'
                            : notif.type === 'connection_accepted'
                              ? 'linear-gradient(135deg, #dcfce7, #bbf7d0)'
                              : 'linear-gradient(135deg, var(--secondary-100), var(--secondary-200))',
                          color: notif.type === 'connection_request'
                            ? 'var(--primary-600)'
                            : notif.type === 'connection_accepted'
                              ? '#16a34a'
                              : 'var(--secondary-600)'
                        }}>
                          {getNotifIcon(notif.type)}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{
                            margin: 0,
                            fontSize: '0.85rem',
                            color: 'var(--text-primary)',
                            fontWeight: notif.read ? 400 : 600,
                            lineHeight: 1.4
                          }}>
                            {notif.message}
                          </p>
                          <span style={{
                            fontSize: '0.7rem',
                            color: 'var(--text-muted)'
                          }}>
                            {formatTime(notif.createdAt)}
                          </span>
                        </div>
                        {!notif.read && (
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '9999px',
                            background: 'var(--primary-500)',
                            flexShrink: 0,
                            marginTop: '6px'
                          }} />
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div ref={profileRef} style={{ position: 'relative' }}>
            <button
              onClick={() => { setProfileDropdownOpen(!profileDropdownOpen); setNotifOpen(false); }}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '2px solid var(--border-color)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span>{user?.name?.charAt(0) || 'U'}</span>
                )}
              </div>
            </button>

            {profileDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 0.5rem)',
                right: 0,
                minWidth: '200px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 40px var(--shadow-color)',
                overflow: 'hidden',
                animation: 'slideDown 0.2s ease'
              }}>
                <div style={{
                  padding: '1rem',
                  borderBottom: '1px solid var(--border-color)'
                }}>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{user?.name}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user?.email}</p>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setProfileDropdownOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none'
                  }}
                >
                  <User size={16} />
                  <span>My Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1rem'
        }}>
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.75rem 1rem',
                color: location.pathname === path ? 'var(--text-primary)' : 'var(--text-secondary)',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                background: location.pathname === path ? 'var(--bg-tertiary)' : 'transparent'
              }}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
          <div style={{ height: '1px', background: 'var(--border-color)', margin: '0.5rem 0' }} />
          <Link
            to="/profile"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '0.75rem 1rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              borderRadius: '0.5rem'
            }}
          >
            <User size={20} />
            <span>My Profile</span>
          </Link>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '0.75rem 1rem',
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              borderRadius: '0.5rem',
              textAlign: 'left'
            }}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
