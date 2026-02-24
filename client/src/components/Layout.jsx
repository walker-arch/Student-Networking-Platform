import { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children || <Outlet />}
      </main>

      <footer className="footer-modern">
        <div className="container">
          <div className="footer-grid">

            {/* Brand Column */}
            <div className="footer-brand-col">
              <div className="footer-logo-wrapper">
                <div className="brand-logo-modern">
                  <span>S</span>
                </div>
                <span className="brand-text-modern">StudentNet</span>
              </div>
              <p className="footer-desc">
                Empowering students to connect, collaborate, and grow their professional network before graduation.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Github"><Github size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="#" aria-label="Email"><Mail size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-col">
              <h3>Platform</h3>
              <Link to="/discover">Discover</Link>
              <Link to="/messages">Messages</Link>
              <Link to="/connections">Connections</Link>
            </div>

            {/* Resources */}
            <div className="footer-links-col">
              <h3>Resources</h3>
              <Link to="/help-center">Help Center</Link>
              <Link to="/community-guidelines">Community Guidelines</Link>
              <Link to="/career-advice">Career Advice</Link>
            </div>

            {/* Legal */}
            <div className="footer-links-col">
              <h3>Legal</h3>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} StudentNet. All rights reserved.</p>
            <div className="footer-bottom-links">
              <span>Designed with ❤️ for students</span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
          padding: 2rem 0;
        }

        /* Modern Footer Redesign */
        .footer-modern {
          background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
          border-top: 1px solid rgba(255,255,255,0.05); /* very subtle border */
          padding: 4rem 0 2rem;
          margin-top: auto;
          position: relative;
          overflow: hidden;
        }
        
        /* Subtle glow effect behind footer */
        .footer-modern::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary-500), transparent);
          opacity: 0.5;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-logo-wrapper {
            justify-content: center;
          }
          .social-links {
            justify-content: center;
          }
        }

        .footer-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .brand-logo-modern {
          width: 2.75rem;
          height: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 0.75rem;
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .brand-text-modern {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px;
        }

        .footer-desc {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          max-width: 90%;
        }

        @media (max-width: 600px) {
          .footer-desc {
            max-width: 100%;
            margin: 0 auto 1.5rem;
          }
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          color: var(--text-secondary);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-links a:hover {
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary-500);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
        }

        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-col h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
        }

        .footer-links-col a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          position: relative;
          width: fit-content;
        }

        @media (max-width: 600px) {
          .footer-links-col a {
            margin: 0 auto;
          }
        }

        .footer-links-col a:hover {
          color: var(--primary-400);
          transform: translateX(3px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
