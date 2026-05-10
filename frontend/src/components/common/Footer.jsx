import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Support', to: '/support' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--footer-bg)', padding: '0 0 40px', position: 'relative' }}>
      {/* Wavy top edge */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, position: 'absolute', top: -39, left: 0, zIndex: 5 }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '40px' }}>
          <path fill="var(--footer-bg)" d="M0,100 C320,0 420,0 720,50 C1020,100 1120,100 1440,0 L1440,100 L0,100 Z" />
        </svg>
      </div>

      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto', padding: '24px 48px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        flexWrap: 'wrap', gap: 24, position: 'relative', zIndex: 1,
      }}>
        <div>
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 40, color: 'var(--footer-brand)', lineHeight: 1.1, marginBottom: 12 }}>
            TravelLoop
          </div>
          <div style={{ color: 'var(--footer-muted)', fontSize: 13 }}>
            © 2025 TravelLoop. All rights reserved.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
          {footerLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: 'var(--footer-muted)',
                fontSize: 13,
                textDecoration: 'none',
                transition: 'color 0.15s',
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}
              onMouseEnter={e => e.target.style.color = 'var(--footer-text)'}
              onMouseLeave={e => e.target.style.color = 'var(--footer-muted)'}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
