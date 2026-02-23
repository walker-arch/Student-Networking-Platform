import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const VerifyEmailPage = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [status, setStatus] = useState('verifying'); // verifying, success, error
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // we'll use a fetch directly since we don't have a specific verify method in context, or we can just fetch it

    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                setStatus('error');
                setMessage('No verification token provided.');
                return;
            }

            try {
                const response = await fetch('/api/auth/verify-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token })
                });

                const data = await response.json();

                if (response.ok) {
                    setStatus('success');
                    setMessage(data.message);

                    // We can choose to manually log them in if data contains token/user
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                        // Reload to allow AuthContext to fetch the user
                        setTimeout(() => {
                            window.location.href = '/';
                        }, 2000);
                    } else {
                        setTimeout(() => navigate('/login'), 2000);
                    }
                } else {
                    setStatus('error');
                    setMessage(data.message || 'Verification failed. Token may be invalid or expired.');
                }
            } catch (error) {
                setStatus('error');
                setMessage('Network error occurred during verification.');
            }
        };

        verifyToken();
    }, [token, navigate]);

    return (
        <div className="verify-page">
            <div className="verify-card card">
                {status === 'verifying' && (
                    <div className="state verifying">
                        <Loader size={48} className="animate-spin text-primary" />
                        <h2>Verifying Your Email</h2>
                        <p>Please wait while we verify your email address...</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="state success">
                        <CheckCircle size={48} className="text-success" />
                        <h2>Email Verified!</h2>
                        <p>{message}</p>
                        <p className="redirect-text">Redirecting you shortly...</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="state error">
                        <XCircle size={48} className="text-danger" />
                        <h2>Verification Failed</h2>
                        <p>{message}</p>
                        <button className="btn btn-primary" onClick={() => navigate('/login')}>
                            Go to Login
                        </button>
                    </div>
                )}
            </div>

            <style>{`
                .verify-page {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    background: var(--bg-secondary);
                }

                .verify-card {
                    max-width: 400px;
                    width: 100%;
                    padding: 3rem 2rem;
                    text-align: center;
                }

                .state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    animation: fadeIn 0.3s ease;
                }

                .state h2 {
                    font-size: 1.5rem;
                    color: var(--text-primary);
                }

                .state p {
                    color: var(--text-secondary);
                }

                .text-primary { color: var(--primary-500); }
                .text-success { color: #10b981; }
                .text-danger { color: #ef4444; }

                .redirect-text {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                    font-style: italic;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default VerifyEmailPage;
