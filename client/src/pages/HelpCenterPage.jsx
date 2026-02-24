import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp, Users, MessageCircle, Shield, Settings, Search, ArrowLeft } from 'lucide-react';

const faqs = [
  {
    category: 'Account & Profile',
    icon: <Settings size={20} />,
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click the "Sign Up" button on the homepage. You can register using your email address or sign in with Google. You\'ll need to verify your email before accessing all features.'
      },
      {
        q: 'How do I edit my profile?',
        a: 'Navigate to your profile page by clicking your avatar in the navigation bar. Click the "Edit Profile" button to update your bio, skills, university, and other details.'
      },
      {
        q: 'Can I change my email address?',
        a: 'Currently, email changes are not supported directly. Please contact our support team for assistance with email updates.'
      },
      {
        q: 'How do I delete my account?',
        a: 'To delete your account, please contact our support team. We will process your request and remove all associated data within 30 days.'
      }
    ]
  },
  {
    category: 'Connections & Networking',
    icon: <Users size={20} />,
    questions: [
      {
        q: 'How do I connect with other students?',
        a: 'Visit the Discover page to find students with similar interests. Click the "Connect" button on their profile card to send a connection request.'
      },
      {
        q: 'Can I remove a connection?',
        a: 'Yes. Visit the connected user\'s profile and click the "Connected" button to disconnect. You can always reconnect later.'
      },
      {
        q: 'How does the Discover algorithm work?',
        a: 'Our recommendation engine suggests students based on shared skills, university, interests, and mutual connections to help you find the most relevant peers.'
      }
    ]
  },
  {
    category: 'Messaging',
    icon: <MessageCircle size={20} />,
    questions: [
      {
        q: 'How do I send a message?',
        a: 'You can message any of your connections. Go to the Messages page or click "Message" on a connected user\'s profile to start a conversation.'
      },
      {
        q: 'Can I block or mute someone?',
        a: 'Yes. In the message thread, use the options menu to mute notifications or block a user. Blocked users cannot send you messages or view your profile.'
      },
      {
        q: 'How do I clear a chat?',
        a: 'In the message thread options menu, select "Clear Chat" to remove the conversation history from your view. This action only affects your side.'
      }
    ]
  },
  {
    category: 'Privacy & Safety',
    icon: <Shield size={20} />,
    questions: [
      {
        q: 'Who can see my profile?',
        a: 'Your profile is visible to all registered users on the platform. Non-registered visitors cannot view user profiles.'
      },
      {
        q: 'How do I report inappropriate behavior?',
        a: 'If you encounter any behavior that violates our Community Guidelines, please block the user and contact our support team with details of the incident.'
      },
      {
        q: 'Is my data secure?',
        a: 'We use industry-standard encryption and security practices to protect your data. Read our Privacy Policy for detailed information on how we handle your information.'
      }
    ]
  }
];

const HelpCenterPage = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredFaqs = faqs.map(cat => ({
    ...cat,
    questions: cat.questions.filter(
      q =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="info-page">
      <Link to="/" className="back-home-btn"><ArrowLeft size={18} /> Back to Home</Link>
      <div className="info-page-header">
        <div className="info-page-icon"><HelpCircle size={36} /></div>
        <h1>Help Center</h1>
        <p className="info-page-subtitle">Find answers to common questions about StudentNet</p>
      </div>

      <div className="help-search-bar">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search for help..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="info-page-content">
        {filteredFaqs.length === 0 && (
          <div className="help-no-results">
            <p>No results found for "<strong>{searchQuery}</strong>". Try different keywords.</p>
          </div>
        )}
        {filteredFaqs.map((cat, catIdx) => (
          <div key={catIdx} className="help-category">
            <div className="help-category-header">
              {cat.icon}
              <h2>{cat.category}</h2>
            </div>
            <div className="help-questions">
              {cat.questions.map((item, qIdx) => {
                const key = `${catIdx}-${qIdx}`;
                const isOpen = openItems[key];
                return (
                  <div key={qIdx} className={`help-item ${isOpen ? 'open' : ''}`}>
                    <button className="help-question" onClick={() => toggleItem(catIdx, qIdx)}>
                      <span>{item.q}</span>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {isOpen && <div className="help-answer"><p>{item.a}</p></div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="info-page-contact">
        <h3>Still need help?</h3>
        <p>Can't find what you're looking for? Reach out to our support team.</p>
        <a href="mailto:support@studentnet.com" className="info-page-btn">Contact Support</a>
      </div>

      <style>{`
        .info-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }
        .info-page-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .info-page-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          color: #fff;
          margin-bottom: 1.25rem;
          box-shadow: 0 8px 30px rgba(59,130,246,0.3);
        }
        .info-page-header h1 {
          font-size: 2.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary), var(--primary-400));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        .info-page-subtitle {
          color: var(--text-muted);
          font-size: 1.05rem;
        }
        .help-search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.08));
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          margin-bottom: 2rem;
          transition: border-color 0.2s;
        }
        .help-search-bar:focus-within {
          border-color: var(--primary-500);
        }
        .help-search-bar svg { color: var(--text-muted); flex-shrink: 0; }
        .help-search-bar input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        .info-page-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .help-category-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
          color: var(--primary-400);
        }
        .help-category-header h2 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }
        .help-questions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .help-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 0.75rem;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .help-item.open {
          border-color: rgba(59,130,246,0.25);
        }
        .help-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          text-align: left;
        }
        .help-question:hover { color: var(--primary-400); }
        .help-question svg { color: var(--text-muted); flex-shrink: 0; }
        .help-answer {
          padding: 0 1.25rem 1rem;
          animation: fadeSlideIn 0.25s ease;
        }
        .help-answer p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.9rem;
          margin: 0;
        }
        .help-no-results {
          text-align: center;
          padding: 2rem;
          color: var(--text-muted);
        }
        .info-page-contact {
          text-align: center;
          margin-top: 3rem;
          padding: 2.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
        }
        .info-page-contact h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .info-page-contact p {
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
        }
        .info-page-btn {
          display: inline-block;
          padding: 0.7rem 1.75rem;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          color: #fff;
          border-radius: 0.6rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .info-page-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59,130,246,0.35);
        }
        .back-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          transition: all 0.2s ease;
        }
        .back-home-btn:hover {
          color: var(--primary-400);
          border-color: rgba(59,130,246,0.3);
          transform: translateX(-3px);
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HelpCenterPage;
