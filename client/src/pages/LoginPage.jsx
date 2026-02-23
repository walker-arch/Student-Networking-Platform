import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setLoading(true);
      setError('');
      await googleLogin(credentialResponse.credential);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Google login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="branding-content">
            <div className="brand-logo">
              <span>S</span>
            </div>
            <h1>Welcome Back to <span className="gradient-text">StudentNet</span></h1>
            <p>Connect with like-minded students, collaborate on projects, and grow together.</p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>Interest-Based Matching</h4>
                  <p>Find students with similar passions</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <div>
                  <h4>Smart Connections</h4>
                  <p>Build meaningful relationships</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💬</div>
                <div>
                  <h4>Easy Communication</h4>
                  <p>Chat and collaborate seamlessly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <div className="form-header">
              <h2>Sign In</h2>
              <p>Enter your credentials to access your account</p>
            </div>

            {error && (
              <div className="error-alert animate-slideDown">
                <span>{error}</span>
              </div>
            )}

            <div className="oauth-section" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => {
                  setError('Google Login Failed');
                }}
                useOneTap
                theme="filled_blue"
                shape="pill"
              />
            </div>

            <div className="divider" style={{ textAlign: 'center', margin: '1rem 0 1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              - OR -
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder="you@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <Lock size={18} className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={loading}
              >
                {loading ? (
                  <Loader size={20} className="animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="auth-footer">
              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="auth-link">Create one</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: var(--bg-secondary);
        }

        .auth-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1100px;
          width: 100%;
          min-height: 600px;
          background: var(--bg-primary);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px var(--shadow-color);
        }

        .auth-branding {
          background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
          padding: 3rem;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .auth-branding::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%);
          animation: pulse 15s ease-in-out infinite;
        }

        .branding-content {
          position: relative;
          z-index: 1;
          color: white;
        }

        .branding-content .brand-logo {
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.2);
          border-radius: 1rem;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .branding-content h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }

        .branding-content h1 .gradient-text {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .branding-content > p {
          font-size: 1rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .feature-icon {
          font-size: 1.5rem;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.1);
          border-radius: 0.5rem;
        }

        .feature-item h4 {
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
          color: white;
        }

        .feature-item p {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .auth-form-container {
          padding: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .auth-form-wrapper {
          width: 100%;
          max-width: 400px;
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-header h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: var(--text-muted);
        }

        .error-alert {
          padding: 1rem;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 0.5rem;
          color: #dc2626;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }

        .dark .error-alert {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.3);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }

        .input-wrapper .input {
          padding-left: 3rem;
          width: 100%;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0;
        }

        .password-toggle:hover {
          color: var(--text-primary);
        }

        .form-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .checkbox-label input {
          width: 1rem;
          height: 1rem;
          accent-color: var(--primary-500);
        }

        .forgot-link {
          font-size: 0.875rem;
          color: var(--primary-500);
        }

        .forgot-link:hover {
          color: var(--primary-600);
        }

        .btn-full {
          width: 100%;
          padding: 1rem;
        }

        .auth-footer {
          margin-top: 2rem;
          text-align: center;
          color: var(--text-muted);
        }

        .auth-link {
          color: var(--primary-500);
          font-weight: 600;
        }

        .auth-link:hover {
          color: var(--primary-600);
        }

        @media (max-width: 768px) {
          .auth-container {
            grid-template-columns: 1fr;
          }

          .auth-branding {
            display: none;
          }

          .auth-form-container {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
