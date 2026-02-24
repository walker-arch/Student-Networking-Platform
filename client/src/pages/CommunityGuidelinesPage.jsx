import { Link } from 'react-router-dom';
import { BookOpen, Heart, MessageCircle, ShieldAlert, AlertTriangle, ThumbsUp, Users, Ban, ArrowLeft } from 'lucide-react';

const guidelines = [
  {
    icon: <Heart size={22} />,
    title: 'Be Respectful & Inclusive',
    points: [
      'Treat every member with dignity and respect, regardless of background, identity, or opinions.',
      'Embrace diversity — our community thrives because of the variety of perspectives students bring.',
      'Use welcoming and inclusive language in all interactions.',
      'Disagree constructively without resorting to personal attacks or insults.'
    ]
  },
  {
    icon: <ThumbsUp size={22} />,
    title: 'Keep It Professional',
    points: [
      'StudentNet is a professional networking platform — maintain a professional tone in messages and profiles.',
      'Share content that adds value: career insights, academic resources, project collaborations, and industry knowledge.',
      'Avoid spam, self-promotion, or irrelevant content that doesn\'t benefit the community.',
      'Use real information on your profile — misrepresenting your identity or credentials is prohibited.'
    ]
  },
  {
    icon: <ShieldAlert size={22} />,
    title: 'Protect Privacy',
    points: [
      'Never share another person\'s private information (phone number, address, etc.) without their explicit consent.',
      'Do not screenshot or share private messages outside the platform without permission.',
      'Respect others\' boundaries — if someone doesn\'t want to connect or chat, accept their decision gracefully.',
      'Report any doxxing or privacy violations immediately.'
    ]
  },
  {
    icon: <Ban size={22} />,
    title: 'Zero Tolerance Policy',
    points: [
      'Harassment, bullying, hate speech, or threats of any kind result in immediate account suspension.',
      'Discrimination based on race, gender, religion, sexual orientation, disability, or any protected characteristic is strictly prohibited.',
      'Sharing NSFW, violent, or illegal content will lead to permanent ban.',
      'Impersonating other users, faculty, or organizations is grounds for termination.'
    ]
  },
  {
    icon: <MessageCircle size={22} />,
    title: 'Messaging Etiquette',
    points: [
      'Send connection requests with a brief, genuine introduction — not generic copy-pasted messages.',
      'Respond to messages in a timely manner when possible.',
      'Don\'t send unsolicited promotional messages or link spam.',
      'Use the mute or block feature for unwanted contacts rather than responding confrontationally.'
    ]
  },
  {
    icon: <Users size={22} />,
    title: 'Community Contribution',
    points: [
      'Help fellow students by sharing your knowledge, experiences, and opportunities.',
      'Provide honest and constructive feedback when collaborating on projects.',
      'Report bugs, issues, or policy violations to help us improve the platform.',
      'Be a positive ambassador for the student community — your actions reflect on everyone.'
    ]
  }
];

const CommunityGuidelinesPage = () => {
  return (
    <div className="info-page">
      <Link to="/" className="back-home-btn"><ArrowLeft size={18} /> Back to Home</Link>
      <div className="info-page-header">
        <div className="info-page-icon"><BookOpen size={36} /></div>
        <h1>Community Guidelines</h1>
        <p className="info-page-subtitle">Our standards for building a safe, supportive, and professional student community</p>
      </div>

      <div className="info-page-intro-card">
        <p>
          StudentNet is built on trust, respect, and a shared goal of professional growth. These guidelines ensure
          every student has a positive and safe experience. By using StudentNet, you agree to follow these principles.
        </p>
      </div>

      <div className="info-page-content">
        {guidelines.map((section, idx) => (
          <div key={idx} className="guideline-card">
            <div className="guideline-card-header">
              <div className="guideline-icon">{section.icon}</div>
              <h2>{section.title}</h2>
            </div>
            <ul>
              {section.points.map((point, pIdx) => (
                <li key={pIdx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="info-page-contact">
        <AlertTriangle size={24} style={{ color: 'var(--primary-400)', marginBottom: '0.75rem' }} />
        <h3>Reporting Violations</h3>
        <p>
          If you witness or experience any behavior that violates these guidelines, please report it immediately.
          You can block the user and contact our moderation team.
        </p>
        <a href="mailto:support@studentnet.com" className="info-page-btn">Report an Issue</a>
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
        .guideline-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          transition: border-color 0.2s;
        }
        .guideline-card:hover {
          border-color: rgba(59,130,246,0.2);
        }
        .guideline-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .guideline-icon {
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
        .guideline-card-header h2 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }
        .guideline-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .guideline-card li {
          position: relative;
          padding-left: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        .guideline-card li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-500);
          opacity: 0.6;
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
          line-height: 1.6;
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

export default CommunityGuidelinesPage;
