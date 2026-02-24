import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import {
  Search,
  Filter,
  MapPin,
  GraduationCap,
  UserPlus,
  Loader,
  X,
  ChevronDown
} from 'lucide-react';
import toast from 'react-hot-toast';


const DiscoverPage = () => {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    interests: [],
    skills: [],
    year: '',
    college: '',
    location: ''
  });

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      // Try to fetch from API, fallback to mock data
      const data = await api.getRecommendations();
      setStudents(data);
    } catch (error) {
      console.error('Failed to fetch recommendations:', error);
      toast.error('Failed to load recommendations');
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = async (studentId) => {
    try {
      await api.sendConnectionRequest(studentId);
      // Update UI to show pending
      setStudents(prev =>
        prev.map(s =>
          s._id === studentId ? { ...s, connectionStatus: 'pending' } : s
        )
      );
      toast.success('Connection request sent!');
    } catch (error) {
      console.error('Failed to send connection request:', error);
      toast.error('Failed to connect. Please try again.');
    }
  };

  const filteredStudents = students.filter(student => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        (student.name || '').toLowerCase().includes(query) ||
        (student.college || '').toLowerCase().includes(query) ||
        (student.interests || []).some(i => i.toLowerCase().includes(query)) ||
        (student.skills || []).some(s => s.toLowerCase().includes(query)) ||
        (student.careerGoals || []).some(g => g.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    if (filters.year && student.year !== parseInt(filters.year)) return false;
    if (filters.college && !(student.college || '').toLowerCase().includes(filters.college.toLowerCase())) return false;
    if (filters.location && !(student.location || '').toLowerCase().includes(filters.location.toLowerCase())) return false;

    return true;
  });

  return (
    <div className="container">
      <div className="discover-page">
        {/* Header */}
        <div className="page-header">
          <div>
            <h1>Discover Students</h1>
            <p>Find and connect with like-minded students</p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="search-bar card">
          <div className="search-input-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, college, interest, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>
                <X size={18} />
              </button>
            )}
          </div>
          <button
            className={`filter-btn btn ${showFilters ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            Filters
            <ChevronDown size={16} className={showFilters ? 'rotate' : ''} />
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="filter-panel card animate-slideDown">
            <div className="filter-group">
              <label>Year</label>
              <select
                className="input"
                value={filters.year}
                onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
              >
                <option value="">All Years</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
            <div className="filter-group">
              <label>College</label>
              <input
                type="text"
                className="input"
                placeholder="Filter by college..."
                value={filters.college}
                onChange={(e) => setFilters(prev => ({ ...prev, college: e.target.value }))}
              />
            </div>
            <div className="filter-group">
              <label>Location</label>
              <input
                type="text"
                className="input"
                placeholder="Filter by location..."
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
              />
            </div>
            <button
              className="btn btn-ghost"
              onClick={() => setFilters({ interests: [], skills: [], year: '', college: '', location: '' })}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Results Info */}
        <div className="results-info">
          <span>{filteredStudents.length} students found</span>
        </div>

        {/* Students Grid */}
        {loading ? (
          <div className="loading-state">
            <Loader size={40} className="animate-spin" />
            <p>Finding your matches...</p>
          </div>
        ) : filteredStudents.length === 0 ? (
          <div className="empty-state card">
            <Search size={48} />
            <h3>No students found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="students-grid">
            {filteredStudents.map((student, idx) => (
              <StudentCard
                key={student._id}
                student={student}
                onConnect={handleConnect}
                style={{ animationDelay: `${idx * 0.05}s` }}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .discover-page {
          padding: 1rem 0;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .page-header p {
          color: var(--text-muted);
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          margin-bottom: 1rem;
        }

        .search-input-wrapper {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          font-size: 1rem;
          border: 2px solid var(--border-color);
          border-radius: 0.75rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary-500);
          background: var(--bg-primary);
        }

        .clear-search {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .filter-btn {
          white-space: nowrap;
        }

        .filter-btn .rotate {
          transform: rotate(180deg);
        }

        .filter-panel {
          display: flex;
          align-items: flex-end;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 180px;
        }

        .filter-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .results-info {
          margin-bottom: 1.5rem;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .loading-state,
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
          color: var(--text-muted);
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--text-primary);
        }

        .students-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .students-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .students-grid {
            grid-template-columns: 1fr;
          }

          .search-bar {
            flex-direction: column;
          }

          .filter-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

const StudentCard = ({ student, onConnect, style }) => {
  return (
    <div className="student-card card animate-slideUp" style={style}>
      {/* Match Score Badge */}
      <div className="match-badge">
        <span>{student.matchScore || 0}%</span>
        <span className="match-label">Match</span>
      </div>

      {/* Profile Header */}
      <div className="card-header">
        <div className="avatar-wrapper">
          <div className="student-avatar">
            {student.avatar ? (
              <img src={student.avatar} alt={student.name} />
            ) : (
              <span>{student.name.charAt(0)}</span>
            )}
          </div>
        </div>
        <h3 className="student-name">{student.name}</h3>
        <div className="student-info">
          {(student.location || student.college) && (
            <span className="info-item">
              <MapPin size={14} />
              {student.location ? `${student.location} ${student.college ? `• ${student.college}` : ''}` : student.college}
            </span>
          )}
          {(student.course || student.year) && (
            <span className="info-item">
              <GraduationCap size={14} />
              {student.course ? `${student.course} ${student.year ? `• Year ${student.year}` : ''}` : (student.year ? `Year ${student.year}` : '')}
            </span>
          )}
        </div>
      </div>

      {/* Bio */}
      {student.bio && (
        <p className="student-bio">{student.bio}</p>
      )}

      {/* Interests */}
      {student.interests && student.interests.length > 0 && (
        <div className="card-section">
          <h4>Interests</h4>
          <div className="tags">
            {student.interests.slice(0, 3).map((interest, idx) => (
              <span key={idx} className="badge">{interest}</span>
            ))}
            {student.interests.length > 3 && (
              <span className="badge badge-more">+{student.interests.length - 3}</span>
            )}
          </div>
        </div>
      )}

      {/* Skills */}
      {student.skills && student.skills.length > 0 && (
        <div className="card-section">
          <h4>Skills</h4>
          <div className="tags">
            {student.skills.slice(0, 3).map((skill, idx) => (
              <span key={idx} className="badge badge-secondary">{skill}</span>
            ))}
            {student.skills.length > 3 && (
              <span className="badge badge-more">+{student.skills.length - 3}</span>
            )}
          </div>
        </div>
      )}

      {/* Career Goals */}
      {student.careerGoals && student.careerGoals.length > 0 && (
        <div className="card-section">
          <h4>Career Goals</h4>
          <div className="tags">
            {student.careerGoals.slice(0, 3).map((goal, idx) => (
              <span key={idx} className="badge badge-accent" style={{ background: 'var(--primary-100)', color: 'var(--primary-700)', border: '1px solid var(--primary-200)' }}>{goal}</span>
            ))}
            {student.careerGoals.length > 3 && (
              <span className="badge badge-more">+{student.careerGoals.length - 3}</span>
            )}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="card-actions">
        <Link to={`/profile/${student._id}`} className="btn btn-ghost">
          View Profile
        </Link>
        <button
          className={`btn ${student.connectionStatus === 'pending' ? 'btn-outline' : 'btn-primary'}`}
          onClick={() => onConnect(student._id)}
          disabled={student.connectionStatus === 'pending'}
        >
          <UserPlus size={16} />
          {student.connectionStatus === 'pending' ? 'Pending' : 'Connect'}
        </button>
      </div>

      <style>{`
        .student-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .match-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem;
          background: linear-gradient(135deg, var(--accent-500), var(--accent-600));
          border-radius: 0.5rem;
          color: white;
        }

        .match-badge span:first-child {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .match-label {
          font-size: 0.625rem;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .card-header {
          text-align: center;
          padding-right: 3rem;
        }

        .avatar-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 0.75rem;
        }

        .student-avatar {
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          overflow: hidden;
        }

        .student-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .student-name {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }

        .student-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .student-bio {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .card-section h4 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .badge-more {
          background: var(--bg-tertiary);
          color: var(--text-muted);
        }

        .card-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
          padding-top: 0.5rem;
          border-top: 1px solid var(--border-color);
        }

        .card-actions .btn {
          flex: 1;
          font-size: 0.875rem;
          padding: 0.625rem;
        }
      `}</style>
    </div>
  );
};

export default DiscoverPage;
