import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
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
  X
} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

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

          {/* Actions */}
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

          <button style={{
            position: 'relative',
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
          }}>
            <Bell size={20} />
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '1rem',
              height: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              color: 'white',
              fontSize: '0.625rem',
              fontWeight: 600,
              borderRadius: '9999px'
            }}>3</span>
          </button>

          {/* Profile Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
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
