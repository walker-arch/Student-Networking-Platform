import { Link } from 'react-router-dom';
import { Briefcase, Network, FileText, Mic, Linkedin, Lightbulb, Target, TrendingUp, ArrowLeft } from 'lucide-react';

const tips = [
  {
    icon: <Network size={22} />,
    title: 'Build Your Network Early',
    description: 'Start networking before you need it. A strong professional network is built over time, not overnight.',
    advice: [
      'Connect with classmates, professors, and alumni — they\'re your first professional circle.',
      'Attend campus career fairs, workshops, and industry meetups to meet people outside your bubble.',
      'Follow up after meeting someone new. A simple "Great meeting you!" message goes a long way.',
      'Offer value first — share articles, introduce connections, or help with projects before asking for favors.'
    ]
  },
  {
    icon: <FileText size={22} />,
    title: 'Craft a Standout Resume',
    description: 'Your resume is your first impression. Make it count with clarity, impact, and relevance.',
    advice: [
      'Lead with action verbs and quantify your achievements (e.g., "Increased engagement by 40%").',
      'Tailor your resume for each application — one size does NOT fit all.',
      'Keep it to one page as a student. Prioritize recent, relevant experience.',
      'Include projects, hackathons, and open-source contributions — they demonstrate real skills.',
      'Proofread ruthlessly. A single typo can cost you an interview.'
    ]
  },
  {
    icon: <Mic size={22} />,
    title: 'Ace Your Interviews',
    description: 'Preparation is the difference between a good interview and a great one.',
    advice: [
      'Research the company thoroughly — know their mission, recent news, and products.',
      'Practice the STAR method (Situation, Task, Action, Result) for behavioral questions.',
      'Prepare thoughtful questions to ask the interviewer — it shows genuine interest.',
      'Do mock interviews with friends or mentors. Practice builds confidence.',
      'Send a thank-you email within 24 hours after every interview.'
    ]
  },
  {
    icon: <Linkedin size={22} />,
    title: 'Optimize Your Online Presence',
    description: 'Recruiters are searching for you online. Make sure they find something impressive.',
    advice: [
      'Keep your LinkedIn profile updated with a professional photo, headline, and summary.',
      'Your StudentNet profile should highlight your skills, projects, and career interests.',
      'Build a personal website or portfolio to showcase your best work.',
      'Be mindful of your public social media presence — employers do check.',
      'Engage with industry content: comment, share, and write posts that demonstrate your expertise.'
    ]
  },
  {
    icon: <Target size={22} />,
    title: 'Set Clear Career Goals',
    description: 'Direction matters more than speed. Know where you\'re heading.',
    advice: [
      'Identify your top 3 industries or roles of interest and research them deeply.',
      'Set short-term goals (this semester) and long-term goals (post-graduation).',
      'Find mentors in your target field — their guidance is invaluable.',
      'Be open to internships and part-time roles that build relevant experience.',
      'Reassess your goals every semester. It\'s okay to pivot as you learn more about yourself.'
    ]
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Develop In-Demand Skills',
    description: 'The job market evolves fast. Stay ahead by continuously learning.',
    advice: [
      'Learn skills that employers value: communication, teamwork, problem-solving, and adaptability.',
      'Take online courses or certifications in your field (Coursera, Udemy, freeCodeCamp).',
      'Contribute to open-source projects or build side projects to apply what you learn.',
      'Learn version control (Git), basic data analysis, and presentation skills regardless of your field.',
      'Soft skills matter just as much as technical skills — practice public speaking and leadership.'
    ]
  }
];

const CareerAdvicePage = () => {
  return (
    <div className="info-page">
      <Link to="/" className="back-home-btn"><ArrowLeft size={18} /> Back to Home</Link>
      <div className="info-page-header">
        <div className="info-page-icon"><Briefcase size={36} /></div>
        <h1>Career Advice</h1>
        <p className="info-page-subtitle">Actionable tips to kickstart your professional journey while you're still in school</p>
      </div>

      <div className="info-page-intro-card">
        <div className="intro-icon"><Lightbulb size={20} /></div>
        <p>
          The best time to start building your career is now. Whether you're a freshman exploring options or a
          senior preparing for the job market, these tips will help you stand out and succeed.
        </p>
      </div>

      <div className="info-page-content">
        {tips.map((section, idx) => (
          <div key={idx} className="career-card">
            <div className="career-card-header">
              <div className="career-icon">{section.icon}</div>
              <div>
                <h2>{section.title}</h2>
                <p className="career-card-desc">{section.description}</p>
              </div>
            </div>
            <ul>
              {section.advice.map((tip, tIdx) => (
                <li key={tIdx}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
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
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          margin-bottom: 2rem;
        }
        .intro-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 0.5rem;
          background: rgba(59,130,246,0.12);
          color: var(--primary-400);
          flex-shrink: 0;
          margin-top: 2px;
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
        .career-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          transition: border-color 0.2s;
        }
        .career-card:hover {
          border-color: rgba(59,130,246,0.2);
        }
        .career-card-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .career-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 0.6rem;
          background: rgba(59,130,246,0.1);
          color: var(--primary-400);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .career-card-header h2 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.25rem;
        }
        .career-card-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin: 0;
          line-height: 1.5;
        }
        .career-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .career-card li {
          position: relative;
          padding-left: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        .career-card li::before {
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
        .back-home-btn{display:inline-flex;align-items:center;gap:.5rem;color:var(--text-muted);text-decoration:none;font-size:.9rem;font-weight:500;margin-bottom:1.5rem;padding:.5rem 1rem;border-radius:.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));transition:all .2s ease}
        .back-home-btn:hover{color:var(--primary-400);border-color:rgba(59,130,246,.3);transform:translateX(-3px)}
      `}</style>
    </div>
  );
};

export default CareerAdvicePage;
