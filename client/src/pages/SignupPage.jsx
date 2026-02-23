import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    User,
    Building,
    GraduationCap,
    ArrowRight,
    ArrowLeft,
    Loader,
    Check,
    MapPin
} from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';

const INTERESTS = [
    'Artificial Intelligence', 'Machine Learning', 'Web Development', 'Mobile Apps',
    'Data Science', 'Cybersecurity', 'Cloud Computing', 'Blockchain',
    'Game Development', 'UI/UX Design', 'DevOps', 'IoT',
    'Robotics', 'AR/VR', 'Open Source', 'Competitive Programming',
    'Startups', 'Research', 'Networking', 'Public Speaking'
];

const SKILLS = [
    'JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js',
    'TypeScript', 'Go', 'Rust', 'Swift', 'Kotlin', 'SQL',
    'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Git', 'Linux',
    'TensorFlow', 'PyTorch', 'Figma', 'Adobe XD'
];

const SignupPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        college: '',
        course: '',
        year: '',
        bio: '',
        location: '',
        interests: [],
        skills: []
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { register, googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleItem = (field, item) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].includes(item)
                ? prev[field].filter(i => i !== item)
                : [...prev[field], item]
        }));
    };

    const validateStep = () => {
        setError('');

        if (step === 1) {
            if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
                setError('Please fill in all fields');
                return false;
            }
            if (formData.password.length < 6) {
                setError('Password must be at least 6 characters');
                return false;
            }
            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                return false;
            }
        }

        if (step === 2) {
            if (!formData.college || !formData.course || !formData.year) {
                setError('Please fill in all fields');
                return false;
            }
        }

        if (step === 3) {
            if (formData.interests.length < 3) {
                setError('Please select at least 3 interests');
                return false;
            }
        }

        if (step === 4) {
            if (formData.skills.length < 2) {
                setError('Please select at least 2 skills');
                return false;
            }
        }

        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep()) return;

        setLoading(true);
        setError('');

        try {
            const data = await register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                college: formData.college,
                course: formData.course,
                year: parseInt(formData.year),
                bio: formData.bio,
                location: formData.location,
                interests: formData.interests,
                skills: formData.skills
            });

            if (data?.requiresVerification) {
                setStep(5); // Show check email screen
            } else {
                navigate('/');
            }
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
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
            setError(err.message || 'Google signup failed');
        } finally {
            setLoading(false);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="step-content animate-fadeIn">
                        <h3>Create Your Account</h3>
                        <p>Let's start with your basic information</p>

                        <div className="oauth-section" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={() => {
                                    setError('Google Signup Failed');
                                }}
                                useOneTap
                                theme="filled_blue"
                                shape="pill"
                                text="signup_with"
                            />
                        </div>

                        <div className="divider" style={{ textAlign: 'center', margin: '1rem 0 1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                            - OR -
                        </div>

                        <div className="form-fields">
                            <div className="input-group">
                                <label htmlFor="name">Full Name</label>
                                <div className="input-wrapper">
                                    <User size={18} className="input-icon" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <div className="input-wrapper">
                                    <Mail size={18} className="input-icon" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="input"
                                        placeholder="you@university.edu"
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        name="password"
                                        className="input"
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleChange}
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

                            <div className="input-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-wrapper">
                                    <Lock size={18} className="input-icon" />
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="input"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="step-content animate-fadeIn">
                        <h3>Academic Information</h3>
                        <p>Tell us about your educational background</p>

                        <div className="form-fields">
                            <div className="input-group">
                                <label htmlFor="location">Location</label>
                                <div className="input-wrapper">
                                    <MapPin size={18} className="input-icon" />
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        className="input"
                                        placeholder="e.g., Delhi, India"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="college">College/University</label>
                                <div className="input-wrapper">
                                    <Building size={18} className="input-icon" />
                                    <input
                                        type="text"
                                        id="college"
                                        name="college"
                                        className="input"
                                        placeholder="Enter your college name"
                                        value={formData.college}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="course">Course/Program</label>
                                <div className="input-wrapper">
                                    <GraduationCap size={18} className="input-icon" />
                                    <input
                                        type="text"
                                        id="course"
                                        name="course"
                                        className="input"
                                        placeholder="e.g., B.Tech Computer Science"
                                        value={formData.course}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="year">Current Year</label>
                                <select
                                    id="year"
                                    name="year"
                                    className="input"
                                    value={formData.year}
                                    onChange={handleChange}
                                >
                                    <option value="">Select your year</option>
                                    <option value="1">1st Year</option>
                                    <option value="2">2nd Year</option>
                                    <option value="3">3rd Year</option>
                                    <option value="4">4th Year</option>
                                    <option value="5">5th Year (Integrated)</option>
                                    <option value="6">Postgraduate</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label htmlFor="bio">Bio (Optional)</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    className="input textarea"
                                    placeholder="Tell us a bit about yourself..."
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows={3}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="step-content animate-fadeIn">
                        <h3>Select Your Interests</h3>
                        <p>Choose at least 3 interests to help us find like-minded students</p>

                        <div className="selection-count">
                            {formData.interests.length} selected
                        </div>

                        <div className="tag-grid">
                            {INTERESTS.map(interest => (
                                <button
                                    key={interest}
                                    type="button"
                                    className={`tag-button ${formData.interests.includes(interest) ? 'selected' : ''}`}
                                    onClick={() => toggleItem('interests', interest)}
                                >
                                    {formData.interests.includes(interest) && <Check size={14} />}
                                    {interest}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="step-content animate-fadeIn">
                        <h3>Select Your Skills</h3>
                        <p>Choose at least 2 skills you're proficient in</p>

                        <div className="selection-count">
                            {formData.skills.length} selected
                        </div>

                        <div className="tag-grid">
                            {SKILLS.map(skill => (
                                <button
                                    key={skill}
                                    type="button"
                                    className={`tag-button ${formData.skills.includes(skill) ? 'selected' : ''}`}
                                    onClick={() => toggleItem('skills', skill)}
                                >
                                    {formData.skills.includes(skill) && <Check size={14} />}
                                    {skill}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="step-content animate-fadeIn text-center">
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary-500)' }}>
                            <Mail size={48} />
                        </div>
                        <h3>Check Your Email</h3>
                        <p>We've sent a verification link to <strong>{formData.email}</strong>.</p>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            Please click the link in the email to verify your account and complete your registration.
                        </p>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="auth-page">
            <div className="signup-container">
                {/* Progress Bar */}
                <div className="progress-bar">
                    {[1, 2, 3, 4].map(s => (
                        <div key={s} className={`progress-step ${step >= s ? 'active' : ''}`}>
                            <div className="step-number">{s}</div>
                            <span className="step-label">
                                {s === 1 && 'Account'}
                                {s === 2 && 'Academic'}
                                {s === 3 && 'Interests'}
                                {s === 4 && 'Skills'}
                            </span>
                        </div>
                    ))}
                    <div className="progress-line">
                        <div
                            className="progress-fill"
                            style={{ width: `${((step - 1) / 3) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Form Card */}
                <div className="signup-card">
                    <Link to="/" className="back-home">
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>

                    {error && (
                        <div className="error-alert animate-slideDown">
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {renderStep()}

                        <div className="form-actions">
                            {step > 1 && step < 5 && (
                                <button
                                    type="button"
                                    className="btn btn-ghost"
                                    onClick={prevStep}
                                >
                                    <ArrowLeft size={18} />
                                    Back
                                </button>
                            )}

                            {step < 4 ? (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={nextStep}
                                >
                                    Next
                                    <ArrowRight size={18} />
                                </button>
                            ) : step === 4 ? (
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <Loader size={20} className="animate-spin" />
                                    ) : (
                                        <>
                                            Create Account
                                            <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => navigate('/login')}
                                    style={{ width: '100%' }}
                                >
                                    Continue to Login
                                </button>
                            )}
                        </div>
                    </form>

                    <div className="auth-footer">
                        <p>
                            Already have an account?{' '}
                            <Link to="/login" className="auth-link">Sign in</Link>
                        </p>
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

        .signup-container {
          width: 100%;
          max-width: 600px;
        }

        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
          position: relative;
          padding: 0 1rem;
        }

        .progress-line {
          position: absolute;
          top: 1rem;
          left: 2.5rem;
          right: 2.5rem;
          height: 3px;
          background: var(--border-color);
          z-index: 0;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          transition: width var(--transition-normal);
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 1;
        }

        .step-number {
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all var(--transition-normal);
        }

        .progress-step.active .step-number {
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-color: transparent;
          color: white;
        }

        .step-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .progress-step.active .step-label {
          color: var(--text-primary);
          font-weight: 600;
        }

        .signup-card {
          background: var(--bg-primary);
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px var(--shadow-color);
        }

        .back-home {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          transition: color var(--transition-fast);
        }

        .back-home:hover {
          color: var(--text-primary);
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

        .step-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .step-content > p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
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

        .textarea {
          resize: vertical;
          min-height: 80px;
        }

        .selection-count {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: var(--bg-tertiary);
          border-radius: 9999px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .tag-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          max-height: 300px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .tag-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--bg-tertiary);
          border: 2px solid var(--border-color);
          border-radius: 9999px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tag-button:hover {
          border-color: var(--primary-500);
          color: var(--primary-500);
        }

        .tag-button.selected {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          border-color: transparent;
          color: white;
        }

        .form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          gap: 1rem;
        }

        .form-actions .btn {
          flex: 1;
        }

        .auth-footer {
          margin-top: 1.5rem;
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

        @media (max-width: 640px) {
          .step-label {
            display: none;
          }

          .signup-card {
            padding: 1.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default SignupPage;
