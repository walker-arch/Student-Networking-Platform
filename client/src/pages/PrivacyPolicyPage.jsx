import { Link } from 'react-router-dom';
import { Shield, Eye, Database, Share2, Lock, UserCheck, Bell, Trash2, ArrowLeft } from 'lucide-react';

const sections = [
  {
    icon: <Database size={20} />,
    title: '1. Information We Collect',
    content: [
      { subtitle: 'Account Information', text: 'When you register, we collect your name, email address, university, and profile details you choose to provide (bio, skills, interests, profile photo).' },
      { subtitle: 'Usage Data', text: 'We automatically collect information about how you interact with the platform, including pages visited, features used, connection activity, and messaging patterns (metadata only, not content).' },
      { subtitle: 'Device Information', text: 'We collect browser type, operating system, IP address, and device identifiers to ensure platform security and optimize your experience.' }
    ]
  },
  {
    icon: <Eye size={20} />,
    title: '2. How We Use Your Information',
    content: [
      { subtitle: 'Platform Operations', text: 'To create and manage your account, enable connections and messaging, and provide the core StudentNet experience.' },
      { subtitle: 'Personalization', text: 'To recommend relevant connections through our Discover feature based on shared skills, interests, university, and network activity.' },
      { subtitle: 'Communication', text: 'To send you essential notifications including connection requests, messages, and important platform updates.' },
      { subtitle: 'Safety & Security', text: 'To detect fraud, prevent abuse, enforce our Community Guidelines, and protect the rights of our users.' }
    ]
  },
  {
    icon: <Share2 size={20} />,
    title: '3. Information Sharing',
    content: [
      { subtitle: 'With Other Users', text: 'Your profile information (name, university, bio, skills) is visible to other registered StudentNet users. Your email is never publicly displayed.' },
      { subtitle: 'Service Providers', text: 'We may share data with trusted third-party services that help us operate the platform (hosting, email delivery, analytics). These providers are bound by data protection agreements.' },
      { subtitle: 'Legal Requirements', text: 'We may disclose your information if required by law, court order, or governmental request, or to protect the safety of our users and platform.' },
      { subtitle: 'We Never Sell', text: 'StudentNet does not sell your personal information to advertisers or third parties. Period.' }
    ]
  },
  {
    icon: <Lock size={20} />,
    title: '4. Data Security',
    content: [
      { subtitle: 'Encryption', text: 'All data transmitted between your browser and our servers is encrypted using TLS/SSL. Passwords are hashed using industry-standard bcrypt.' },
      { subtitle: 'Access Controls', text: 'We implement strict access controls and authentication measures to prevent unauthorized access to your data.' },
      { subtitle: 'Monitoring', text: 'We continuously monitor our systems for vulnerabilities and potential breaches. In the event of a data breach, we will notify affected users within 72 hours.' }
    ]
  },
  {
    icon: <UserCheck size={20} />,
    title: '5. Your Rights',
    content: [
      { subtitle: 'Access & Portability', text: 'You have the right to request a copy of all personal data we hold about you. Contact our support team to make this request.' },
      { subtitle: 'Correction', text: 'You can update your profile information at any time through your profile settings. For other data corrections, contact support.' },
      { subtitle: 'Deletion', text: 'You can request complete deletion of your account and associated data. We will process deletion requests within 30 days.' },
      { subtitle: 'Opt-Out', text: 'You can mute notifications and control your privacy settings within the platform. You can unsubscribe from non-essential emails at any time.' }
    ]
  },
  {
    icon: <Bell size={20} />,
    title: '6. Changes to This Policy',
    content: [
      { subtitle: 'Updates', text: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through a platform notification.' },
      { subtitle: 'Effective Date', text: 'This policy is effective as of January 1, 2026. Continued use of the platform after changes constitutes acceptance of the updated policy.' }
    ]
  }
];

const PrivacyPolicyPage = () => {
  return (
    <div className="info-page">
      <Link to="/" className="back-home-btn"><ArrowLeft size={18} /> Back to Home</Link>
      <div className="info-page-header">
        <div className="info-page-icon"><Shield size={36} /></div>
        <h1>Privacy Policy</h1>
        <p className="info-page-subtitle">How we collect, use, and protect your personal information</p>
      </div>

      <div className="info-page-intro-card">
        <p>
          Your privacy is a core value at StudentNet. This policy explains what data we collect, how we use it,
          and the rights you have over your information. We are committed to being transparent about our data practices.
        </p>
      </div>

      <div className="info-page-content">
        {sections.map((section, idx) => (
          <div key={idx} className="policy-section">
            <div className="policy-section-header">
              <div className="policy-icon">{section.icon}</div>
              <h2>{section.title}</h2>
            </div>
            <div className="policy-items">
              {section.content.map((item, iIdx) => (
                <div key={iIdx} className="policy-item">
                  <h4>{item.subtitle}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="info-page-contact">
        <Trash2 size={24} style={{ color: 'var(--primary-400)', marginBottom: '0.75rem' }} />
        <h3>Data Requests</h3>
        <p>To request access, correction, or deletion of your data, please contact our privacy team.</p>
        <a href="mailto:privacy@studentnet.com" className="info-page-btn">Contact Privacy Team</a>
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
        .info-page-intro-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          margin-bottom: 2rem;
        }
        .info-page-intro-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }
        .info-page-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .policy-section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          transition: border-color 0.2s;
        }
        .policy-section:hover {
          border-color: rgba(59,130,246,0.2);
        }
        .policy-section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .policy-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 0.6rem;
          background: rgba(59,130,246,0.1);
          color: var(--primary-400);
          flex-shrink: 0;
        }
        .policy-section-header h2 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }
        .policy-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .policy-item h4 {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem;
        }
        .policy-item p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.9rem;
          margin: 0;
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
        .back-home-btn{display:inline-flex;align-items:center;gap:.5rem;color:var(--text-muted);text-decoration:none;font-size:.9rem;font-weight:500;margin-bottom:1.5rem;padding:.5rem 1rem;border-radius:.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));transition:all .2s ease}
        .back-home-btn:hover{color:var(--primary-400);border-color:rgba(59,130,246,.3);transform:translateX(-3px)}
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPage;
