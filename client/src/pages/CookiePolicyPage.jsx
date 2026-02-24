import { Link } from 'react-router-dom';
import { Cookie, Eye, Settings, BarChart3, Globe, ToggleRight, ArrowLeft } from 'lucide-react';

const sections = [
    {
        icon: <Eye size={20} />,
        title: '1. What Are Cookies?',
        items: [
            'Cookies are small text files stored on your device when you visit a website.',
            'They help us remember your preferences, keep you logged in, and understand how you use StudentNet.',
            'Cookies do not contain personal information like your name or email directly, but are linked to your account when you are logged in.'
        ]
    },
    {
        icon: <Settings size={20} />,
        title: '2. Essential Cookies',
        items: [
            'These are necessary for the platform to function and cannot be disabled.',
            'Authentication cookies keep you logged in securely across pages.',
            'Security cookies help protect against cross-site request forgery and other threats.',
            'Session cookies remember your current state (e.g., which page you are viewing).'
        ]
    },
    {
        icon: <BarChart3 size={20} />,
        title: '3. Analytics Cookies',
        items: [
            'We use analytics to understand how users interact with StudentNet.',
            'These cookies track page views, feature usage, and navigation patterns.',
            'Analytics data is aggregated and anonymized — it is not used to identify individual users.',
            'This information helps us improve the platform and fix usability issues.'
        ]
    },
    {
        icon: <ToggleRight size={20} />,
        title: '4. Preference Cookies',
        items: [
            'These cookies remember your settings like theme preference (dark/light mode).',
            'They store your language and display preferences for a personalized experience.',
            'Preference cookies improve your experience but are not strictly necessary.'
        ]
    },
    {
        icon: <Globe size={20} />,
        title: '5. Third-Party Cookies',
        items: [
            'Some third-party services we use (e.g., Google OAuth) may set their own cookies.',
            'These cookies are governed by the respective third party\'s privacy and cookie policies.',
            'We do not use third-party advertising cookies. StudentNet does not display ads.',
            'We carefully select third-party services that respect user privacy.'
        ]
    },
    {
        icon: <Settings size={20} />,
        title: '6. Managing Cookies',
        items: [
            'You can manage cookies through your browser settings (clear, block, or allow cookies).',
            'Disabling essential cookies may prevent you from logging in or using core features.',
            'Most browsers allow you to set preferences for individual websites.',
            'For more information, visit your browser\'s help documentation on cookie management.'
        ]
    }
];

const CookiePolicyPage = () => (
    <div className="info-page">
        <Link to="/" className="back-home-btn"><ArrowLeft size={18} /> Back to Home</Link>
        <div className="info-page-header">
            <div className="info-page-icon"><Cookie size={36} /></div>
            <h1>Cookie Policy</h1>
            <p className="info-page-subtitle">How and why we use cookies on StudentNet</p>
        </div>
        <div className="info-page-intro-card">
            <p>
                StudentNet uses cookies to provide a secure, functional, and personalized experience.
                This policy explains the types of cookies we use and how you can control them.
            </p>
        </div>
        <div className="info-page-content">
            {sections.map((s, i) => (
                <div key={i} className="ck-card">
                    <div className="ck-header"><div className="ck-ico">{s.icon}</div><h2>{s.title}</h2></div>
                    <ul>{s.items.map((t, j) => <li key={j}>{t}</li>)}</ul>
                </div>
            ))}
        </div>
        <div className="info-page-contact">
            <h3>Questions about cookies?</h3>
            <p>Contact us if you need more information about our cookie practices.</p>
            <a href="mailto:privacy@studentnet.com" className="info-page-btn">Contact Us</a>
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
      .ck-card{background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem;padding:1.5rem 1.75rem;transition:border-color .2s}
      .ck-card:hover{border-color:rgba(59,130,246,.2)}
      .ck-header{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}
      .ck-ico{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:.6rem;background:rgba(59,130,246,.1);color:var(--primary-400);flex-shrink:0}
      .ck-header h2{font-size:1.1rem;font-weight:700;color:var(--text-primary);margin:0}
      .ck-card ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.6rem}
      .ck-card li{position:relative;padding-left:1.25rem;color:var(--text-secondary);line-height:1.6;font-size:.9rem}
      .ck-card li::before{content:'';position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:var(--primary-500);opacity:.6}
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

export default CookiePolicyPage;
