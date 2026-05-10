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
    title: '1. Information We Collect',
    body: `TravelLoop collects information you provide directly to us, such as when you create an account, plan a trip, or contact our support team. This includes your name, email address, profile photo, travel preferences, and any itinerary data you create on our platform. We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, pages visited, and time spent on those pages.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information we collect to provide, maintain, and improve our services; personalize your experience and surface relevant destination suggestions; send you trip reminders, product updates, and promotional communications (you may opt out at any time); respond to your comments and questions; and monitor and analyze usage trends to enhance the TravelLoop experience.`,
  },
  {
    title: '3. Sharing of Information',
    body: `We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you — provided those parties agree to keep this information confidential. We may also disclose your information when we believe release is appropriate to comply with the law or protect our rights.`,
  },
  {
    title: '4. Data Retention',
    body: `We retain your personal data for as long as your account is active or as needed to provide you with our services. You may delete your account at any time from your Profile settings page. Upon deletion, we will remove your personal data within 30 days, except where retention is required by applicable law.`,
  },
  {
    title: '5. Cookies',
    body: `TravelLoop uses cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
  },
  {
    title: '6. Security',
    body: `The security of your data is important to us. We implement industry-standard encryption and security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "7. Children's Privacy",
    body: `TravelLoop does not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us so we can take necessary action.`,
  },
  {
    title: '8. Changes to This Policy',
    body: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.`,
  },
  {
    title: '9. Contact Us',
    body: `If you have any questions about this Privacy Policy, please contact us at privacy@travelloop.com or visit our Contact page.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <motion.div {...pageAnim}>
      <div style={s.page}>
        <h1 style={s.title}>Privacy Policy</h1>
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
