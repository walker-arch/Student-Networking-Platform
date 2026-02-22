import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main className="main-content">
                {children || <Outlet />}
            </main>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="brand-logo">
                                <span>S</span>
                            </div>
                            <span className="brand-text">StudentNet</span>
                        </div>
                        <p className="footer-text">
                            Connecting students with similar interests, skills, and goals.
                        </p>
                        <div className="footer-links">
                            <a href="#">About</a>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Contact</a>
                        </div>
                        <p className="footer-copyright">
                            © 2024 StudentNet. All rights reserved.
                        </p>
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

        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 3rem 0;
          margin-top: auto;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer .brand-logo {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 0.75rem;
          font-size: 1.25rem;
          font-weight: 800;
          color: white;
        }

        .footer .brand-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .footer-text {
          max-width: 400px;
          color: var(--text-muted);
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--primary-500);
        }

        .footer-copyright {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
      `}</style>
        </div>
    );
};

export default Layout;
