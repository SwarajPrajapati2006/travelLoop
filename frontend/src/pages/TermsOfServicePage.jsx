import { motion } from 'framer-motion';

const pageAnim = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const s = {
  page: { maxWidth: 780, margin: '0 auto', padding: '80px 24px 100px' },
  title: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 40, fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 },
  lastUpdated: { fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 14, color: 'var(--text-muted)', marginTop: 8 },
  divider: { border: 'none', borderTop: '1px solid var(--border)', margin: '32px 0' },
  sectionHeading: {
    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 600,
    color: 'var(--text-main)', marginTop: 40, marginBottom: 12,
    borderLeft: '3px solid var(--primary)', paddingLeft: 14,
  },
  sectionBody: {
    fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 15.5, lineHeight: 1.8,
    color: 'var(--text-secondary)', margin: 0,
  },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using TravelLoop ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service. These terms apply to all visitors, users, and others who access or use the Service.`,
  },
  {
    title: '2. User Accounts',
    body: `When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.`,
  },
  {
    title: '3. Use of the Service',
    body: `TravelLoop grants you a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial travel planning purposes. You agree not to reproduce, duplicate, copy, sell, or exploit any portion of the Service without our express written permission. You may not use the Service for any unlawful purpose or in violation of any applicable regulations.`,
  },
  {
    title: '4. User-Generated Content',
    body: `Our Service may allow you to post, link, store, and share trip itineraries, notes, and other content ("User Content"). You retain ownership of any content you submit. By posting User Content to the community feed, you grant TravelLoop a worldwide, non-exclusive, royalty-free license to use, display, and distribute such content within the platform.`,
  },
  {
    title: '5. Intellectual Property',
    body: `The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of TravelLoop and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of TravelLoop.`,
  },
  {
    title: '6. Limitation of Liability',
    body: `In no event shall TravelLoop, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, or goodwill, arising out of your use of or inability to use the Service.`,
  },
  {
    title: '7. Disclaimer of Warranties',
    body: `The Service is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
  },
  {
    title: '8. Governing Law',
    body: `These Terms shall be governed and construed in accordance with applicable laws, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.`,
  },
  {
    title: '9. Changes to Terms',
    body: `We reserve the right to modify or replace these Terms at any time. We will provide at least 14 days notice before any new terms take effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.`,
  },
  {
    title: '10. Contact',
    body: `Questions about the Terms of Service should be sent to legal@travelloop.com.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <motion.div {...pageAnim}>
      <div style={s.page}>
        <h1 style={s.title}>Terms of Service</h1>
        <p style={s.lastUpdated}>Last updated: January 1, 2025</p>
        <hr style={s.divider} />
        {sections.map((sec) => (
          <div key={sec.title}>
            <h2 style={s.sectionHeading}>{sec.title}</h2>
            <p style={s.sectionBody}>{sec.body}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
