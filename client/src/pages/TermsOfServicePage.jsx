import { Link } from 'react-router-dom';
import { FileText, Scale, UserCheck, AlertTriangle, ShieldCheck, Globe, Clock, Gavel, ArrowLeft } from 'lucide-react';

const sections = [
    {
        icon: <UserCheck size={20} />,
        title: '1. Eligibility & Account',
        items: [
            'You must be at least 16 years old. Under 18 requires parental consent.',
            'Provide accurate information. Impersonation is prohibited.',
            'You are responsible for your account security.',
            'One person, one account. Multiple accounts may be suspended.'
        ]
    },
    {
        icon: <Scale size={20} />,
        title: '2. Acceptable Use',
        items: [
            'Use StudentNet for professional networking, collaboration, and career development.',
            'No commercial solicitation, spam, or advertising without permission.',
            'Comply with all applicable laws and our Community Guidelines.',
            'No automated access (bots, scrapers) without authorization.'
        ]
    },
    {
        icon: <Globe size={20} />,
        title: '3. User Content',
        items: [
            'You retain ownership of all content you post.',
            'You grant StudentNet a license to display your content as needed to operate the platform.',
            'Do not post illegal, defamatory, or IP-infringing content.',
            'We may remove content that violates these terms without notice.'
        ]
    },
    {
        icon: <ShieldCheck size={20} />,
        title: '4. Intellectual Property',
        items: [
            'StudentNet content and branding are protected by IP laws.',
            'Do not copy, modify, or reverse-engineer any part of the platform.',
            'Report IP infringement by contacting our team.'
        ]
    },
    {
        icon: <AlertTriangle size={20} />,
        title: '5. Termination',
        items: [
            'We may suspend or terminate accounts for violations.',
            'You may delete your account anytime — data removed within 30 days.',
            'Shared chat content may persist in other users\' history.'
        ]
    },
    {
        icon: <Gavel size={20} />,
        title: '6. Limitation of Liability',
        items: [
            'StudentNet is provided "as is" without warranties.',
            'We are not responsible for user-posted content accuracy.',
            'Our liability is limited to the maximum extent permitted by law.'
        ]
    },
    {
        icon: <Clock size={20} />,
        title: '7. Changes',
        items: [
            'We may modify these terms at any time with notice.',
            'Continued use constitutes acceptance. Effective January 1, 2026.'
        ]
    }
];

const TermsOfServicePage = () => (
    <div className="info-page">
        <Link to="/" className="back-home-btn"><ArrowLeft size={18} /> Back to Home</Link>
        <div className="info-page-header">
            <div className="info-page-icon"><FileText size={36} /></div>
            <h1>Terms of Service</h1>
            <p className="info-page-subtitle">Rules governing your use of StudentNet</p>
        </div>
        <div className="info-page-intro-card">
            <p>By using StudentNet you agree to these terms. If you disagree, do not use the platform.</p>
        </div>
        <div className="info-page-content">
            {sections.map((s, i) => (
                <div key={i} className="ts-card">
                    <div className="ts-header"><div className="ts-ico">{s.icon}</div><h2>{s.title}</h2></div>
                    <ul>{s.items.map((t, j) => <li key={j}>{t}</li>)}</ul>
                </div>
            ))}
        </div>
        <div className="info-page-contact">
            <h3>Questions?</h3>
            <p>Contact our legal team for any clarifications.</p>
            <a href="mailto:legal@studentnet.com" className="info-page-btn">Contact Legal</a>
        </div>
        <style>{`
      .info-page{max-width:800px;margin:0 auto;padding:2rem 1.5rem 4rem}
      .info-page-header{text-align:center;margin-bottom:2.5rem}
      .info-page-icon{display:inline-flex;align-items:center;justify-content:center;width:72px;height:72px;border-radius:1.25rem;background:linear-gradient(135deg,var(--primary-500),var(--secondary-500));color:#fff;margin-bottom:1.25rem;box-shadow:0 8px 30px rgba(59,130,246,.3)}
      .info-page-header h1{font-size:2.25rem;font-weight:800;background:linear-gradient(135deg,var(--text-primary),var(--primary-400));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.5rem}
      .info-page-subtitle{color:var(--text-muted);font-size:1.05rem}
      .info-page-intro-card{background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem;padding:1.5rem 1.75rem;margin-bottom:2rem}
      .info-page-intro-card p{color:var(--text-secondary);line-height:1.7;font-size:.95rem;margin:0}
      .info-page-content{display:flex;flex-direction:column;gap:1.25rem}
      .ts-card{background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem;padding:1.5rem 1.75rem;transition:border-color .2s}
      .ts-card:hover{border-color:rgba(59,130,246,.2)}
      .ts-header{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}
      .ts-ico{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:.6rem;background:rgba(59,130,246,.1);color:var(--primary-400);flex-shrink:0}
      .ts-header h2{font-size:1.1rem;font-weight:700;color:var(--text-primary);margin:0}
      .ts-card ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.6rem}
      .ts-card li{position:relative;padding-left:1.25rem;color:var(--text-secondary);line-height:1.6;font-size:.9rem}
      .ts-card li::before{content:'';position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:var(--primary-500);opacity:.6}
      .info-page-contact{text-align:center;margin-top:3rem;padding:2.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem}
      .info-page-contact h3{font-size:1.2rem;font-weight:700;color:var(--text-primary);margin-bottom:.5rem}
      .info-page-contact p{color:var(--text-muted);margin-bottom:1.25rem;font-size:.95rem}
      .info-page-btn{display:inline-block;padding:.7rem 1.75rem;background:linear-gradient(135deg,var(--primary-500),var(--secondary-500));color:#fff;border-radius:.6rem;text-decoration:none;font-weight:600;font-size:.9rem;transition:transform .2s,box-shadow .2s}
      .info-page-btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(59,130,246,.35)}
      .back-home-btn{display:inline-flex;align-items:center;gap:.5rem;color:var(--text-muted);text-decoration:none;font-size:.9rem;font-weight:500;margin-bottom:1.5rem;padding:.5rem 1rem;border-radius:.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));transition:all .2s ease}
      .back-home-btn:hover{color:var(--primary-400);border-color:rgba(59,130,246,.3);transform:translateX(-3px)}
    `}</style>
    </div>
);

export default TermsOfServicePage;
