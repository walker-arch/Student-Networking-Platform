import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import api from '../services/api';
import {
  Users,
  Search,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Target,
  Zap,
  Shield
} from 'lucide-react';

const HomePage = () => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    return <AuthenticatedHome user={user} />;
  }

  return <GuestHome />;
};

const GuestHome = () => {
  return (
    <div className="guest-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-fadeIn">
              <Sparkles size={16} />
              <span>Smart Student Networking</span>
            </div>
            <h1 className="hero-title animate-slideUp">
              Connect with <span className="gradient-text">Like-minded Students</span> Worldwide
            </h1>
            <p className="hero-description animate-slideUp">
              Find the perfect teammates for projects, hackathons, research, and startups.
              Our intelligent matching connects you with students who share your interests and goals.
            </p>
            <div className="hero-actions animate-slideUp">
              <Link to="/signup" className="btn btn-primary btn-lg">
                Get Started Free
                <ArrowRight size={20} />
              </Link>
              <Link to="/login" className="btn btn-outline btn-lg">
                Sign In
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Colleges</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">5K+</span>
                <span className="stat-label">Connections</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card card-1 animate-fadeIn">
              <div className="mini-avatar">🎓</div>
              <div>
                <strong>Sarah</strong>
                <p>ML Enthusiast</p>
              </div>
            </div>
            <div className="visual-card card-2 animate-fadeIn">
              <div className="mini-avatar">💻</div>
              <div>
                <strong>Alex</strong>
                <p>Full Stack Dev</p>
              </div>
            </div>
            <div className="visual-card card-3 animate-fadeIn">
              <div className="mini-avatar">🚀</div>
              <div>
                <strong>Mike</strong>
                <p>Startup Founder</p>
              </div>
            </div>
            <div className="connection-line line-1" />
            <div className="connection-line line-2" />
            <div className="center-circle">
              <span>You</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose <span className="gradient-text">StudentNet</span>?</h2>
            <p>Everything you need to build your academic and professional network</p>
          </div>
          <div className="features-grid">
            <div className="feature-card card hover-lift">
              <div className="feature-icon-wrapper">
                <Target size={28} />
              </div>
              <h3>Interest-Based Matching</h3>
              <p>Our algorithm finds students with similar interests, skills, and career goals.</p>
            </div>
            <div className="feature-card card hover-lift">
              <div className="feature-icon-wrapper secondary">
                <Zap size={28} />
              </div>
              <h3>Smart Recommendations</h3>
              <p>Get personalized suggestions based on your profile and activity patterns.</p>
            </div>
            <div className="feature-card card hover-lift">
              <div className="feature-icon-wrapper accent">
                <MessageCircle size={28} />
              </div>
              <h3>Seamless Communication</h3>
              <p>Connect and chat with potential collaborators directly on the platform.</p>
            </div>
            <div className="feature-card card hover-lift">
              <div className="feature-icon-wrapper">
                <Shield size={28} />
              </div>
              <h3>Student-Only Network</h3>
              <p>A secure environment exclusively for verified students and academics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Find Your Perfect Match?</h2>
            <p>Join thousands of students already networking on StudentNet</p>
            <Link to="/signup" className="btn btn-primary btn-lg">
              Create Free Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .guest-home {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
          padding: 4rem 0;
          position: relative;
        }

        .hero .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, var(--primary-100), var(--secondary-100));
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--primary-700);
          margin-bottom: 1.5rem;
        }

        .dark .hero-badge {
          background: linear-gradient(135deg, var(--primary-900), var(--secondary-900));
          color: var(--primary-300);
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .stat-divider {
          width: 1px;
          height: 2.5rem;
          background: var(--border-color);
        }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          height: 400px;
        }

        .visual-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          box-shadow: 0 10px 40px var(--shadow-color);
        }

        .card-1 { top: 10%; left: 10%; animation-delay: 0.1s; }
        .card-2 { top: 40%; right: 5%; animation-delay: 0.2s; }
        .card-3 { bottom: 10%; left: 20%; animation-delay: 0.3s; }

        .mini-avatar {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          background: var(--bg-tertiary);
          border-radius: 0.75rem;
        }

        .visual-card strong {
          display: block;
          color: var(--text-primary);
        }

        .visual-card p {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin: 0;
        }

        .center-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 5rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          color: white;
          font-weight: 700;
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }

        .connection-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-500), transparent);
          opacity: 0.3;
        }

        .line-1 {
          width: 120px;
          top: 25%;
          left: 35%;
          transform: rotate(30deg);
        }

        .line-2 {
          width: 100px;
          bottom: 30%;
          left: 40%;
          transform: rotate(-20deg);
        }

        /* Features Section */
        .features {
          padding: 6rem 0;
          background: var(--bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.125rem;
          color: var(--text-muted);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .feature-card {
          text-align: center;
          padding: 2rem;
        }

        .feature-icon-wrapper {
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
          border-radius: 1rem;
          color: var(--primary-600);
        }

        .dark .feature-icon-wrapper {
          background: linear-gradient(135deg, var(--primary-900), var(--primary-800));
          color: var(--primary-400);
        }

        .feature-icon-wrapper.secondary {
          background: linear-gradient(135deg, var(--secondary-100), var(--secondary-200));
          color: var(--secondary-600);
        }

        .dark .feature-icon-wrapper.secondary {
          background: linear-gradient(135deg, var(--secondary-900), var(--secondary-800));
          color: var(--secondary-400);
        }

        .feature-icon-wrapper.accent {
          background: linear-gradient(135deg, var(--accent-100), var(--accent-200));
          color: var(--accent-600);
        }

        .dark .feature-icon-wrapper.accent {
          background: linear-gradient(135deg, var(--accent-900), var(--accent-800));
          color: var(--accent-400);
        }

        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .feature-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        /* CTA Section */
        .cta {
          padding: 6rem 0;
        }

        .cta-card {
          text-align: center;
          padding: 4rem;
          background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
          border-radius: 2rem;
          color: white;
        }

        .cta-card h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }

        .cta-card p {
          font-size: 1.125rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          color: white;
        }

        .cta-card .btn-primary {
          background: white;
          color: var(--primary-600);
        }

        .cta-card .btn-primary:hover {
          background: var(--gray-100);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        @media (max-width: 1024px) {
          .hero .container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-visual {
            display: none;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .hero-actions {
            flex-direction: column;
          }

          .cta-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

const AuthenticatedHome = ({ user }) => {
  const [stats, setStats] = useState({ connections: 0, messages: 0, profileViews: 0, pendingRequests: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await api.getDashboardStats();
        setStats(data);
      } catch (e) { /* silent */ }
    };
    fetchStats();
  }, []);

  return (
    <div className="container">
      <div className="dashboard">
        <div className="welcome-section animate-fadeIn">
          <h1>Welcome back, <span className="gradient-text">{user?.name?.split(' ')[0] || 'Student'}</span>! 👋</h1>
          <p>Here's what's happening in your network</p>
        </div>

        <div className="dashboard-grid">
          {/* Quick Stats */}
          <div className="quick-stats">
            <div className="stat-card card">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{stats.connections}</span>
                <span className="stat-label">Connections</span>
              </div>
            </div>
            <div className="stat-card card">
              <div className="stat-icon secondary">
                <MessageCircle size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{stats.messages}</span>
                <span className="stat-label">Messages</span>
              </div>
            </div>
            <div className="stat-card card">
              <div className="stat-icon accent">
                <Search size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{stats.profileViews}</span>
                <span className="stat-label">Profile Views</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions card">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <Link to="/discover" className="action-btn">
                <Search size={20} />
                <span>Discover Students</span>
              </Link>
              <Link to="/connections" className="action-btn">
                <Users size={20} />
                <span>View Connections</span>
              </Link>
              <Link to="/messages" className="action-btn">
                <MessageCircle size={20} />
                <span>Messages</span>
              </Link>
              <Link to="/profile" className="action-btn">
                <Sparkles size={20} />
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>

          {/* Your Interests */}
          <div className="interests-card card">
            <h3>Your Interests</h3>
            <div className="interests-tags">
              {user?.interests?.slice(0, 6).map((interest, idx) => (
                <span key={idx} className="badge">{interest}</span>
              )) || <p className="no-data">No interests added yet</p>}
            </div>
            <Link to="/profile" className="edit-link">Edit interests →</Link>
          </div>

          {/* Your Skills */}
          <div className="skills-card card">
            <h3>Your Skills</h3>
            <div className="skills-tags">
              {user?.skills?.slice(0, 6).map((skill, idx) => (
                <span key={idx} className="badge badge-secondary">{skill}</span>
              )) || <p className="no-data">No skills added yet</p>}
            </div>
            <Link to="/profile" className="edit-link">Edit skills →</Link>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard {
          padding: 1rem 0;
        }

        .welcome-section {
          margin-bottom: 2rem;
        }

        .welcome-section h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .welcome-section p {
          color: var(--text-muted);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .quick-stats {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
          border-radius: 1rem;
          color: var(--primary-600);
        }

        .dark .stat-icon {
          background: linear-gradient(135deg, var(--primary-900), var(--primary-800));
          color: var(--primary-400);
        }

        .stat-icon.secondary {
          background: linear-gradient(135deg, var(--secondary-100), var(--secondary-200));
          color: var(--secondary-600);
        }

        .dark .stat-icon.secondary {
          background: linear-gradient(135deg, var(--secondary-900), var(--secondary-800));
          color: var(--secondary-400);
        }

        .stat-icon.accent {
          background: linear-gradient(135deg, var(--accent-100), var(--accent-200));
          color: var(--accent-600);
        }

        .dark .stat-icon.accent {
          background: linear-gradient(135deg, var(--accent-900), var(--accent-800));
          color: var(--accent-400);
        }

        .stat-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .quick-actions {
          grid-column: 1 / -1;
        }

        .quick-actions h3 {
          margin-bottom: 1rem;
        }

        .action-buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem;
          background: var(--bg-tertiary);
          border-radius: 1rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .action-btn:hover {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          color: white;
          transform: translateY(-4px);
        }

        .interests-card,
        .skills-card {
          grid-column: span 1;
        }

        .interests-card h3,
        .skills-card h3 {
          margin-bottom: 1rem;
        }

        .interests-tags,
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .edit-link {
          font-size: 0.875rem;
          color: var(--primary-500);
        }

        .no-data {
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .quick-stats {
            grid-template-columns: 1fr;
          }

          .action-buttons {
            grid-template-columns: repeat(2, 1fr);
          }

          .interests-card,
          .skills-card {
            grid-column: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
