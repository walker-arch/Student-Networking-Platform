import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import {
    User,
    Mail,
    Building,
    GraduationCap,
    Calendar,
    Edit3,
    Save,
    X,
    Camera,
    Loader,
    MessageCircle,
    UserPlus,
    UserCheck,
    MapPin,
    Ban,
    Users
} from 'lucide-react';
import toast from 'react-hot-toast';

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

const ProfilePage = () => {
    const { userId } = useParams();
    const { user: currentUser, updateProfile, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [profileUser, setProfileUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [connectionStatus, setConnectionStatus] = useState(null); // 'accepted', 'pending', null
    const [connectionId, setConnectionId] = useState(null);
    const [connecting, setConnecting] = useState(false);
    const [showUnfriendModal, setShowUnfriendModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        college: '',
        course: '',
        year: '',
        location: '',
        interests: [],
        skills: []
    });

    const [isBlocked, setIsBlocked] = useState(false);
    const [blockedUsersList, setBlockedUsersList] = useState([]);
    const [uploadingAvatar, setUploadingAvatar] = useState(false);

    const isOwnProfile = !userId || userId === currentUser?._id;

    useEffect(() => {
        if (isOwnProfile) {
            setProfileUser(currentUser);
            if (currentUser) {
                setFormData({
                    name: currentUser.name || '',
                    bio: currentUser.bio || '',
                    college: currentUser.college || '',
                    course: currentUser.course || '',
                    year: currentUser.year?.toString() || '',
                    location: currentUser.location || '',
                    interests: currentUser.interests || [],
                    skills: currentUser.skills || []
                });
            }
            fetchBlockedUsers();
            setLoading(false);
        } else {
            fetchUserProfile();
            fetchConnectionStatus();
            fetchInteractionStatus();
        }
    }, [userId, currentUser, isOwnProfile]);

    const fetchBlockedUsers = async () => {
        try {
            const data = await api.getBlockedUsers();
            setBlockedUsersList(data);
        } catch (e) {
            console.error('Error fetching blocked users:', e);
        }
    };

    const fetchInteractionStatus = async () => {
        try {
            const data = await api.getInteractionStatus(userId);
            setIsBlocked(data.isBlocked);
        } catch (e) {
            console.error('Failed to get interaction status:', e);
        }
    };

    const fetchUserProfile = async () => {
        setLoading(true);
        try {
            const data = await api.getUserById(userId);
            setProfileUser(data);
        } catch (error) {
            console.error('Failed to fetch profile:', error);
            setError('Profile not found');
        } finally {
            setLoading(false);
        }
    };

    const fetchConnectionStatus = async () => {
        try {
            const data = await api.getConnectionStatus(userId);
            if (data.status === 'accepted' || data.status === 'pending') {
                setConnectionStatus(data.status);
                setConnectionId(data.connectionId || null);
            } else {
                setConnectionStatus(null);
                setConnectionId(null);
            }
        } catch (e) {
            console.error('Failed to check connection status:', e);
        }
    };

    const handleUnfriend = async () => {
        if (!connectionId) return;
        try {
            await api.removeConnection(connectionId);
            setConnectionStatus(null);
            setConnectionId(null);
            setShowUnfriendModal(false);
            toast.success('Connection removed');
        } catch (error) {
            console.error('Failed to remove connection:', error);
            setShowUnfriendModal(false);
            toast.error('Failed to remove connection');
        }
    };

    const handleConnect = async () => {
        setConnecting(true);
        try {
            await api.sendConnectionRequest(userId);
            setConnectionStatus('pending');
            toast.success('Connection request sent!');
        } catch (error) {
            console.error('Connection request failed:', error);
            // If already connected or pending, update status
            if (error.message?.includes('Already connected')) {
                setConnectionStatus('accepted');
            } else if (error.message?.includes('pending')) {
                setConnectionStatus('pending');
            } else {
                toast.error('Failed to connect. Please try again.');
            }
        } finally {
            setConnecting(false);
        }
    };

    const handleBlockUser = async () => {
        try {
            const res = await api.blockUser(userId);
            setIsBlocked(res.blocked);
        } catch (e) {
            console.error('Failed to block user:', e);
        }
    };

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

    const handleSave = async () => {
        if (!formData.name?.trim()) {
            toast.error('Name is required');
            return;
        }
        if (!formData.course?.trim()) {
            toast.error('Course/Program is required');
            return;
        }

        setSaving(true);
        setError('');
        try {
            await updateProfile({
                ...formData,
                year: parseInt(formData.year) || null
            });
            setIsEditing(false);
            toast.success('Profile updated successfully!');
        } catch (error) {
            setError(error.message || 'Failed to update profile');
            toast.error(error.message || 'Failed to update profile');
        } finally {
            setSaving(false);
        }
    };

    const handleAvatarChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploadingAvatar(true);
        setError('');
        try {
            const updatedUser = await api.uploadAvatar(file);
            setProfileUser(updatedUser);
            // Update auth context user if it's the current user
            if (isOwnProfile) {
                // You might need an update user method in AuthContext, or just rely on a page reload if it's simpler
                toast.success('Avatar updated successfully!');
                setTimeout(() => window.location.reload(), 1000);
            } else {
                toast.success('Avatar updated successfully!');
            }
        } catch (error) {
            setError(error.message || 'Failed to upload image');
            toast.error(error.message || 'Failed to upload image');
        } finally {
            setUploadingAvatar(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            name: currentUser.name || '',
            bio: currentUser.bio || '',
            college: currentUser.college || '',
            course: currentUser.course || '',
            year: currentUser.year?.toString() || '',
            location: currentUser.location || '',
            interests: currentUser.interests || [],
            skills: currentUser.skills || []
        });
        setIsEditing(false);
        setError('');
    };

    if (loading) {
        return (
            <div className="loading-container">
                <Loader size={40} className="animate-spin" />
                <p>Loading profile...</p>
                <style>{`
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            color: var(--text-muted);
          }
        `}</style>
            </div>
        );
    }

    if (error && !profileUser) {
        return (
            <div className="error-container container">
                <div className="error-card card">
                    <User size={48} />
                    <h2>Profile Not Found</h2>
                    <p>The profile you're looking for doesn't exist.</p>
                    <button className="btn btn-primary" onClick={() => navigate(-1)}>
                        Go Back
                    </button>
                </div>
                <style>{`
          .error-container {
            padding: 4rem 0;
          }
          .error-card {
            max-width: 400px;
            margin: 0 auto;
            text-align: center;
            padding: 3rem;
          }
          .error-card h2 {
            margin: 1rem 0 0.5rem;
          }
          .error-card p {
            margin-bottom: 1.5rem;
          }
        `}</style>
            </div>
        );
    }

    const displayUser = isEditing ? { ...profileUser, ...formData } : profileUser;

    return (
        <div className="container">
            <div className="profile-page">
                {error && (
                    <div className="error-alert animate-slideDown">
                        <span>{error}</span>
                        <button onClick={() => setError('')}><X size={16} /></button>
                    </div>
                )}

                {/* Profile Header */}
                <div className="profile-header card">
                    <div className="header-background" />
                    <div className="header-content">
                        <div className="avatar-section">
                            <div className="profile-avatar">
                                {uploadingAvatar ? (
                                    <Loader size={40} className="animate-spin" />
                                ) : displayUser?.avatar ? (
                                    <img src={displayUser.avatar} alt={displayUser.name} />
                                ) : (
                                    <span>{displayUser?.name?.charAt(0) || 'U'}</span>
                                )}
                                {isOwnProfile && isEditing && (
                                    <label className="avatar-edit-btn">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            onChange={handleAvatarChange}
                                            disabled={uploadingAvatar}
                                        />
                                        <Camera size={16} />
                                    </label>
                                )}
                            </div>
                        </div>

                        <div className="header-info">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="name"
                                    className="input name-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                />
                            ) : (
                                <h1 className="profile-name">{displayUser?.name}</h1>
                            )}

                            <div className="profile-meta">
                                <span className="meta-item">
                                    <Mail size={16} />
                                    {displayUser?.email}
                                </span>
                                {displayUser?.location && (
                                    <span className="meta-item">
                                        <MapPin size={16} />
                                        {displayUser?.location}
                                    </span>
                                )}
                                {displayUser?.college && (
                                    <span className="meta-item">
                                        <Building size={16} />
                                        {displayUser?.college}
                                    </span>
                                )}
                                {displayUser?.course && (
                                    <span className="meta-item">
                                        <GraduationCap size={16} />
                                        {displayUser?.course}
                                        {displayUser?.year && ` • Year ${displayUser.year}`}
                                    </span>
                                )}
                                {displayUser?.connections && (
                                    <span className="meta-item">
                                        <Users size={16} />
                                        {displayUser.connections.length} Connection{displayUser.connections.length !== 1 ? 's' : ''}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="header-actions">
                            {isOwnProfile ? (
                                isEditing ? (
                                    <>
                                        <button className="btn btn-ghost" onClick={handleCancel}>
                                            <X size={18} />
                                            Cancel
                                        </button>
                                        <button
                                            className="btn btn-primary"
                                            onClick={handleSave}
                                            disabled={saving}
                                        >
                                            {saving ? <Loader size={18} className="animate-spin" /> : <Save size={18} />}
                                            Save Changes
                                        </button>
                                    </>
                                ) : (
                                    <button className="btn action-btn-connect" onClick={() => setIsEditing(true)}>
                                        <Edit3 size={18} />
                                        Edit Profile
                                    </button>
                                )
                            ) : (
                                <>
                                    {connectionStatus === 'accepted' && (
                                        <button
                                            className="btn action-btn-message"
                                            onClick={() => navigate(`/messages/${userId}`)}
                                        >
                                            <MessageCircle size={18} />
                                            Message
                                        </button>
                                    )}
                                    {connectionStatus === 'accepted' ? (
                                        <button className="btn action-btn-connected" onClick={() => setShowUnfriendModal(true)}>
                                            <UserCheck size={18} />
                                            Connected
                                        </button>
                                    ) : connectionStatus === 'pending' ? (
                                        <button className="btn action-btn-pending" disabled>
                                            <UserPlus size={18} />
                                            Pending
                                        </button>
                                    ) : (
                                        <button
                                            className="btn action-btn-connect"
                                            onClick={handleConnect}
                                            disabled={connecting}
                                        >
                                            {connecting ? <Loader size={18} className="animate-spin" /> : <UserPlus size={18} />}
                                            Connect
                                        </button>
                                    )}
                                    <button
                                        className={`btn ${isBlocked ? 'action-btn-danger-active' : 'action-btn-danger'}`}
                                        onClick={handleBlockUser}
                                    >
                                        <Ban size={18} />
                                        {isBlocked ? 'Unblock' : 'Block'}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="profile-grid">
                    {/* Left Column - About */}
                    <div className="profile-column">
                        <div className="profile-section card">
                            <h2 className="section-title">About</h2>
                            {isEditing ? (
                                <textarea
                                    name="bio"
                                    className="input textarea"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    placeholder="Tell us about yourself..."
                                    rows={4}
                                />
                            ) : (
                                <p className="bio-text">
                                    {displayUser?.bio || 'No bio yet.'}
                                </p>
                            )}
                        </div>

                        {isEditing && (
                            <div className="profile-section card">
                                <h2 className="section-title">Academic Info</h2>
                                <div className="form-fields">
                                    <div className="input-group">
                                        <label>Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            className="input"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="e.g., Delhi, India"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>College/University</label>
                                        <input
                                            type="text"
                                            name="college"
                                            className="input"
                                            value={formData.college}
                                            onChange={handleChange}
                                            placeholder="Enter your college"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Course/Program</label>
                                        <input
                                            type="text"
                                            name="course"
                                            className="input"
                                            value={formData.course}
                                            onChange={handleChange}
                                            placeholder="e.g., B.Tech Computer Science"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Year</label>
                                        <select
                                            name="year"
                                            className="input"
                                            value={formData.year}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select year</option>
                                            <option value="1">1st Year</option>
                                            <option value="2">2nd Year</option>
                                            <option value="3">3rd Year</option>
                                            <option value="4">4th Year</option>
                                            <option value="5">5th Year</option>
                                            <option value="6">Postgraduate</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Interests & Skills */}
                    <div className="profile-column">
                        <div className="profile-section card">
                            <h2 className="section-title">Interests</h2>
                            {isEditing ? (
                                <div className="tag-selector">
                                    {INTERESTS.map(interest => (
                                        <button
                                            key={interest}
                                            type="button"
                                            className={`tag-btn ${formData.interests.includes(interest) ? 'selected' : ''}`}
                                            onClick={() => toggleItem('interests', interest)}
                                        >
                                            {interest}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="tags-display">
                                    {displayUser?.interests?.length > 0 ? (
                                        displayUser.interests.map((interest, idx) => (
                                            <span key={idx} className="badge">{interest}</span>
                                        ))
                                    ) : (
                                        <p className="no-data">No interests added yet</p>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="profile-section card">
                            <h2 className="section-title">Skills</h2>
                            {isEditing ? (
                                <div className="tag-selector">
                                    {SKILLS.map(skill => (
                                        <button
                                            key={skill}
                                            type="button"
                                            className={`tag-btn ${formData.skills.includes(skill) ? 'selected' : ''}`}
                                            onClick={() => toggleItem('skills', skill)}
                                        >
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="tags-display">
                                    {displayUser?.skills?.length > 0 ? (
                                        displayUser.skills.map((skill, idx) => (
                                            <span key={idx} className="badge badge-secondary">{skill}</span>
                                        ))
                                    ) : (
                                        <p className="no-data">No skills added yet</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Connections Section */}
                {isOwnProfile && displayUser?.connections?.length > 0 && (
                    <div className="profile-section card mt-4" style={{ marginTop: '1.5rem' }}>
                        <h2 className="section-title">Connections ({displayUser.connections.length})</h2>
                        <div className="connections-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '1rem',
                            marginTop: '1rem'
                        }}>
                            {displayUser.connections.map(conn => (
                                <div
                                    key={conn._id}
                                    className="connection-card"
                                    onClick={() => navigate(`/profile/${conn._id}`)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1rem',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '0.75rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        backgroundColor: 'var(--bg-secondary)',
                                        textDecoration: 'none'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.borderColor = 'var(--primary-400)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {conn.avatar ? (
                                        <img src={conn.avatar} style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', objectFit: 'cover' }} alt={conn.name} />
                                    ) : (
                                        <div style={{ width: '3.5rem', height: '3.5rem', background: 'linear-gradient(135deg, var(--primary-500), var(--secondary-500))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', flexShrink: 0 }}>
                                            {conn.name?.charAt(0) || 'U'}
                                        </div>
                                    )}
                                    <div style={{ overflow: 'hidden', flex: 1 }}>
                                        <div style={{ fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '1rem' }}>{conn.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {conn.college || conn.email}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Blocked Users Section (Only for own profile) */}
                {isOwnProfile && blockedUsersList.length > 0 && (
                    <div className="profile-section card mt-4" style={{ marginTop: '1.5rem' }}>
                        <h2 className="section-title">Blocked Users</h2>
                        <div className="blocked-users-list">
                            {blockedUsersList.map(u => (
                                <div key={u._id} className="blocked-user-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        {u.avatar ? (
                                            <img src={u.avatar} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', objectFit: 'cover' }} alt={u.name} />
                                        ) : (
                                            <div style={{ width: '2.5rem', height: '2.5rem', background: 'linear-gradient(135deg, var(--primary-500), var(--secondary-500))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>
                                                {u.name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{u.name}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{u.location ? `${u.location} • ` : ''}{u.college}</div>
                                        </div>
                                    </div>
                                    <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }} onClick={async () => {
                                        try {
                                            await api.blockUser(u._id);
                                            setBlockedUsersList(prev => prev.filter(b => b._id !== u._id));
                                            // Fetch interaction status again to update UI if we're somehow viewing them right now, though theoretically this is 'My Profile' view
                                        } catch (e) {
                                            console.error('Failed to unblock user:', e);
                                        }
                                    }}>Unblock</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Unfriend Confirmation Modal */}
            {showUnfriendModal && (
                <div className="modal-overlay" onClick={() => setShowUnfriendModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-icon">⚠️</div>
                        <h3>Remove Connection</h3>
                        <p>Do you want to unfriend <strong>{profileUser?.name}</strong>? You will no longer be connected.</p>
                        <div className="modal-actions">
                            <button className="btn btn-ghost" onClick={() => setShowUnfriendModal(false)}>
                                No, Keep
                            </button>
                            <button className="btn btn-danger" onClick={handleUnfriend}>
                                Yes, Unfriend
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        .profile-page {
          padding: 1rem 0;
          max-width: 900px;
          margin: 0 auto;
        }

        .error-alert {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 0.5rem;
          color: #dc2626;
          margin-bottom: 1.5rem;
        }

        .dark .error-alert {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.3);
        }

        .error-alert button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }

        /* Profile Header */
        .profile-header {
          position: relative;
          overflow: hidden;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .header-background {
          height: 120px;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
        }

        .header-content {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 0 2rem 2rem;
          position: relative;
        }

        .avatar-section {
          flex-shrink: 0;
          margin-top: -3.5rem;
        }

        .profile-avatar {
          width: 8rem;
          height: 8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
          border-radius: 9999px;
          font-size: 3rem;
          font-weight: 700;
          color: white;
          border: 4px solid var(--bg-primary);
          box-shadow: 0 4px 20px var(--shadow-color);
          position: relative;
          overflow: hidden;
        }

        .profile-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-edit-btn {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.5rem;
          background: rgba(0,0,0,0.6);
          border: none;
          color: white;
          cursor: pointer;
        }

        .header-info {
          flex: 1;
          min-width: 0; /* fixes flex children overflowing */
          padding-top: 0.5rem;
        }

        .profile-name {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .name-input {
          font-size: 1.5rem;
          font-weight: 700;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .profile-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .header-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        /* Modern Action Buttons */
        .action-btn-connect {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          padding: 0.6rem 1.75rem;
          font-weight: 600;
        }

        .action-btn-connect:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
          background: linear-gradient(135deg, #2563eb, #4f46e5);
        }

        .action-btn-connected {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          border-radius: 9999px;
          transition: all 0.3s ease;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
        }

        .action-btn-connected:hover {
          background: linear-gradient(135deg, #dc2626, #991b1b);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
          transform: scale(0.98);
        }

        .action-btn-message {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(10px);
          color: #f8fafc;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 9999px;
          transition: all 0.3s ease;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
        }

        .action-btn-message:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }

        .action-btn-pending {
          background: transparent;
          color: #94a3b8;
          border: 1px solid #64748b;
          border-radius: 9999px;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .action-btn-danger {
          background: rgba(239, 68, 68, 0.05);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 9999px;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .action-btn-danger:hover {
          background: #ef4444;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
        }

        .action-btn-danger-active {
          background: #ef4444;
          color: white;
          border: 1px solid #ef4444;
          border-radius: 9999px;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
          transition: all 0.3s ease;
        }

        /* Profile Grid */
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .profile-section {
          margin-bottom: 1.5rem;
        }

        .profile-section:last-child {
          margin-bottom: 0;
        }

        .section-title {
          font-size: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .bio-text {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tags-display {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          max-height: 200px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .tag-btn {
          padding: 0.375rem 0.75rem;
          font-size: 0.8rem;
          background: var(--bg-tertiary);
          border: 2px solid var(--border-color);
          border-radius: 9999px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tag-btn:hover {
          border-color: var(--primary-500);
          color: var(--primary-500);
        }

        .tag-btn.selected {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          border-color: transparent;
          color: white;
        }

        .no-data {
          color: var(--text-muted);
          font-size: 0.875rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }

          .header-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .profile-meta {
            justify-content: center;
          }

          .header-actions {
            width: 100%;
            justify-content: center;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 2rem;
          max-width: 400px;
          width: 90%;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: modalSlideUp 0.3s ease;
        }

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .modal-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .modal-content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }

        .btn-danger {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border: none;
        }

        .btn-danger:hover {
          background: linear-gradient(135deg, #b91c1c, #991b1b);
        }
      `}</style>
        </div>
    );
};

export default ProfilePage;
