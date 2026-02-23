import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import {
  Users,
  UserPlus,
  UserCheck,
  UserX,
  MessageCircle,
  Loader,
  Search,
  Clock,
  Check,
  X
} from 'lucide-react';



const ConnectionsPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('connections');
  const [connections, setConnections] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await api.getConnections();
      setConnections(data.connections || []);
      setRequests(data.requests || []);
    } catch (error) {
      console.log('Using mock data');
      setConnections(MOCK_CONNECTIONS);
      setRequests(MOCK_REQUESTS);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (requestId) => {
    try {
      await api.acceptConnection(requestId);
      // Move from requests to connections
      const request = requests.find(r => r._id === requestId);
      if (request) {
        setRequests(prev => prev.filter(r => r._id !== requestId));
        setConnections(prev => [...prev, {
          _id: requestId,
          user: request.requester,
          status: 'accepted',
          createdAt: new Date().toISOString()
        }]);
      }
    } catch (error) {
      console.error('Failed to accept request:', error);
    }
  };

  const handleReject = async (requestId) => {
    try {
      await api.rejectConnection(requestId);
      setRequests(prev => prev.filter(r => r._id !== requestId));
    } catch (error) {
      console.error('Failed to reject request:', error);
    }
  };

  const handleRemove = async (connectionId) => {
    try {
      await api.removeConnection(connectionId);
      setConnections(prev => prev.filter(c => c._id !== connectionId));
    } catch (error) {
      console.error('Failed to remove connection:', error);
    }
  };

  const filteredConnections = connections.filter(conn =>
    conn.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conn.user.college.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="connections-page">
        {/* Header */}
        <div className="page-header">
          <h1>Connections</h1>
          <p>Manage your network and connection requests</p>
        </div>

        {/* Tabs */}
        <div className="tabs-container card">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'connections' ? 'active' : ''}`}
              onClick={() => setActiveTab('connections')}
            >
              <UserCheck size={18} />
              Connections
              <span className="tab-count">{connections.length}</span>
            </button>
            <button
              className={`tab ${activeTab === 'requests' ? 'active' : ''}`}
              onClick={() => setActiveTab('requests')}
            >
              <UserPlus size={18} />
              Requests
              {requests.length > 0 && (
                <span className="tab-count highlight">{requests.length}</span>
              )}
            </button>
          </div>

          {/* Search (only for connections) */}
          {activeTab === 'connections' && (
            <div className="search-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search connections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Content */}
        {loading ? (
          <div className="loading-state">
            <Loader size={40} className="animate-spin" />
            <p>Loading...</p>
          </div>
        ) : activeTab === 'connections' ? (
          <ConnectionsList
            connections={filteredConnections}
            onRemove={handleRemove}
          />
        ) : (
          <RequestsList
            requests={requests}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        )}
      </div>

      <style>{`
        .connections-page {
          padding: 1rem 0;
          max-width: 800px;
          margin: 0 auto;
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

        .tabs-container {
          margin-bottom: 1.5rem;
        }

        .tabs {
          display: flex;
          gap: 0.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 1rem;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: none;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tab:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .tab.active {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          color: white;
        }

        .tab-count {
          padding: 0.15rem 0.5rem;
          font-size: 0.75rem;
          background: var(--bg-tertiary);
          border-radius: 9999px;
        }

        .tab.active .tab-count {
          background: rgba(255,255,255,0.2);
        }

        .tab-count.highlight {
          background: #ef4444;
          color: white;
        }

        .search-wrapper {
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
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          font-size: 0.9rem;
          border: 2px solid var(--border-color);
          border-radius: 0.5rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary-500);
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};

const ConnectionsList = ({ connections, onRemove }) => {
  if (connections.length === 0) {
    return (
      <div className="empty-state card">
        <Users size={48} />
        <h3>No Connections Yet</h3>
        <p>Start connecting with other students to grow your network</p>
        <Link to="/discover" className="btn btn-primary">
          Discover Students
        </Link>
        <style>{`
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
          .empty-state .btn {
            margin-top: 1.5rem;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="connections-list">
      {connections.map(connection => (
        <div key={connection._id} className="connection-card card">
          <div className="connection-avatar">
            {connection.user.avatar ? (
              <img src={connection.user.avatar} alt={connection.user.name} />
            ) : (
              <span>{connection.user.name.charAt(0)}</span>
            )}
          </div>

          <div className="connection-info">
            <h3>{connection.user.name}</h3>
            <p>{connection.user.college} • {connection.user.course}</p>
            <div className="connection-interests">
              {connection.user.interests?.slice(0, 2).map((interest, idx) => (
                <span key={idx} className="badge">{interest}</span>
              ))}
            </div>
          </div>

          <div className="connection-actions">
            <Link to={`/messages/${connection.user._id}`} className="btn btn-ghost">
              <MessageCircle size={18} />
            </Link>
            <Link to={`/profile/${connection.user._id}`} className="btn btn-ghost">
              View
            </Link>
            <button
              className="btn btn-ghost danger"
              onClick={() => onRemove(connection._id)}
            >
              <UserX size={18} />
            </button>
          </div>
        </div>
      ))}

      <style>{`
        .connections-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .connection-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }

        .connection-avatar {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          flex-shrink: 0;
        }

        .connection-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 9999px;
        }

        .connection-info {
          flex: 1;
          min-width: 0;
        }

        .connection-info h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .connection-info > p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .connection-interests {
          display: flex;
          gap: 0.35rem;
        }

        .connection-actions {
          display: flex;
          gap: 0.5rem;
        }

        .connection-actions .btn {
          padding: 0.5rem 0.75rem;
        }

        .connection-actions .danger:hover {
          color: #ef4444;
        }

        @media (max-width: 640px) {
          .connection-card {
            flex-direction: column;
            text-align: center;
          }

          .connection-interests {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

const RequestsList = ({ requests, onAccept, onReject }) => {
  if (requests.length === 0) {
    return (
      <div className="empty-state card">
        <Clock size={48} />
        <h3>No Pending Requests</h3>
        <p>You're all caught up! No new connection requests.</p>
        <style>{`
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
        `}</style>
      </div>
    );
  }

  return (
    <div className="requests-list">
      {requests.map(request => (
        <div key={request._id} className="request-card card">
          <div className="request-avatar">
            {request.requester.avatar ? (
              <img src={request.requester.avatar} alt={request.requester.name} />
            ) : (
              <span>{request.requester.name.charAt(0)}</span>
            )}
          </div>

          <div className="request-info">
            <h3>{request.requester.name}</h3>
            <p>{request.requester.college} • {request.requester.course}</p>
            <div className="request-interests">
              {request.requester.interests?.slice(0, 2).map((interest, idx) => (
                <span key={idx} className="badge">{interest}</span>
              ))}
            </div>
          </div>

          <div className="request-actions">
            <button
              className="btn btn-primary"
              onClick={() => onAccept(request._id)}
            >
              <Check size={18} />
              Accept
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => onReject(request._id)}
            >
              <X size={18} />
              Decline
            </button>
          </div>
        </div>
      ))}

      <style>{`
        .requests-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .request-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }

        .request-avatar {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          flex-shrink: 0;
        }

        .request-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 9999px;
        }

        .request-info {
          flex: 1;
          min-width: 0;
        }

        .request-info h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .request-info > p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .request-interests {
          display: flex;
          gap: 0.35rem;
        }

        .request-actions {
          display: flex;
          gap: 0.5rem;
        }

        @media (max-width: 640px) {
          .request-card {
            flex-direction: column;
            text-align: center;
          }

          .request-interests {
            justify-content: center;
          }

          .request-actions {
            width: 100%;
          }

          .request-actions .btn {
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ConnectionsPage;
