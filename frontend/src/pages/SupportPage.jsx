import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Map, CreditCard, Shield, Smartphone, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const pageAnim = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const quickLinks = [
  { icon: Map, title: 'Trip Planning', desc: 'Help with itineraries, destinations, and bookings' },
  { icon: CreditCard, title: 'Billing', desc: 'Subscription, payments, and refund questions' },
  { icon: Shield, title: 'Account & Security', desc: 'Password, login, and privacy settings' },
  { icon: Smartphone, title: 'App Issues', desc: 'Bugs, performance, and device compatibility' },
];

const faqs = [
  {
    q: 'How do I create my first trip?',
    a: 'To create your first trip, click the "+ New Trip" button in the top navigation bar or visit the My Trips page. Fill in your trip name, dates, and destinations, then click "Create Trip". You\'ll be taken directly to the itinerary builder where you can start adding activities day by day.',
  },
  {
    q: 'Can I invite friends or family to collaborate on a trip?',
    a: 'Yes! Collaboration is coming soon to TravelLoop. You\'ll be able to share your trip with other users and plan together in real-time. Stay tuned for this feature in our upcoming updates.',
  },
  {
    q: 'How do I export my itinerary as a PDF?',
    a: 'From any trip view, click the "⋯" menu at the top right of your itinerary and select "Export as PDF". The checklist page also has a dedicated "Export PDF" button. The PDF includes all your days, activities, timings, and notes in a clean printable format.',
  },
  {
    q: 'Is TravelLoop free to use?',
    a: 'TravelLoop offers a free plan that includes up to 3 active trips, community access, and basic itinerary building. Our Pro plan (coming soon) will include unlimited trips, AI-powered suggestions, and priority support.',
  },
  {
    q: 'How do I delete my account?',
    a: 'You can delete your account from the Profile page. Scroll to the bottom and click "Delete Account". This action is permanent — all your trips, notes, and checklists will be removed within 30 days. Make sure to export any data you want to keep first.',
  },
  {
    q: 'Can I use TravelLoop offline?',
    a: 'Currently TravelLoop requires an internet connection to load and save your data. Offline support with local caching is on our roadmap and planned for a future release.',
  },
  {
    q: 'How do I reset my password?',
    a: 'On the login page, click "Forgot password?" and enter your email address. You\'ll receive a password reset link within a few minutes. If you don\'t see it, check your spam folder. The link expires after 24 hours.',
  },
  {
    q: 'How do I contact support directly?',
    a: 'You can reach our support team via the Contact Us page, or email us directly at support@travelloop.com. We typically respond within 24 hours on business days.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 12, border: '1px solid var(--border)', marginBottom: 12, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 600, color: 'var(--text-main)', paddingRight: 16 }}>{q}</span>
        <ChevronDown
          size={20}
          style={{ color: 'var(--text-muted)', flexShrink: 0, transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 24px 20px', borderTop: '1px solid var(--border)' }}>
              <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, margin: '16px 0 0' }}>{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportPage() {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');

  return (
    <motion.div {...pageAnim}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Hero search */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,90,95,0.08) 0%, rgba(252,100,45,0.06) 100%)',
          border: '1px solid rgba(255,90,95,0.15)',
          borderRadius: 20, padding: '56px 48px', textAlign: 'center', marginBottom: 64,
        }}>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 36, fontWeight: 700, color: 'var(--text-main)', marginBottom: 8 }}>
            How can we help you?
          </h1>
          <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 16, color: 'var(--text-secondary)', marginBottom: 32 }}>
            Search our knowledge base for quick answers
          </p>
          <div style={{ position: 'relative', maxWidth: 560, margin: '0 auto' }}>
            <Search size={19} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              style={{
                width: '100%', padding: '14px 20px 14px 52px', borderRadius: 99,
                border: '1.5px solid var(--border)', fontSize: 15, outline: 'none',
                fontFamily: "'Be Vietnam Pro', sans-serif", background: 'var(--surface)',
                color: 'var(--text-main)', boxSizing: 'border-box',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(255,90,95,0.12)'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
            />
          </div>
        </div>

        {/* Quick links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16, marginBottom: 72 }}>
          {quickLinks.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.1)', borderColor: 'var(--primary)' }}
              transition={{ duration: 0.18 }}
              onClick={() => toast.success(`Opening ${title} articles...`)}
              style={{
                background: 'var(--surface)', borderRadius: 16, border: '1px solid var(--border)',
                padding: 24, textAlign: 'center', cursor: 'pointer',
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 14, background: 'rgba(255,90,95,0.08)', marginBottom: 12 }}>
                <Icon size={26} style={{ color: 'var(--primary)' }} />
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: 'var(--text-main)', marginBottom: 6 }}>{title}</div>
              <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{desc}</div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 28, fontWeight: 700, color: 'var(--text-main)', marginBottom: 32 }}>
          Frequently Asked Questions
        </h2>
        {faqs.map(faq => <FAQItem key={faq.q} {...faq} />)}

        {/* CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,90,95,0.1) 0%, rgba(252,100,45,0.08) 100%)',
          border: '1px solid rgba(255,90,95,0.2)',
          borderRadius: 20, padding: 48, textAlign: 'center', marginTop: 64,
        }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, color: 'var(--text-main)', marginBottom: 8 }}>
            Still need help?
          </h2>
          <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 15, color: 'var(--text-secondary)', marginBottom: 28 }}>
            Our support team is available Mon–Fri, 9am–6pm IST
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact')}
              style={{
                background: 'var(--primary)', color: '#fff', border: 'none',
                padding: '13px 28px', borderRadius: 99, fontSize: 14, fontWeight: 600,
                cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Contact Support →
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="mailto:support@travelloop.com"
              style={{
                background: 'transparent', color: 'var(--primary)',
                border: '1.5px solid var(--primary)',
                padding: '13px 28px', borderRadius: 99, fontSize: 14, fontWeight: 600,
                cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Email Us →
            </motion.a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
