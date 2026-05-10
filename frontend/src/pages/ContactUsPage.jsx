import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Phone, MapPin, Loader2, Twitter, Instagram, Linkedin } from 'lucide-react';
import toast from 'react-hot-toast';

const pageAnim = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const inputStyle = (hasErr) => ({
  width: '100%',
  padding: '12px 16px',
  borderRadius: 10,
  border: `1.5px solid ${hasErr ? 'var(--error, #e53e3e)' : 'var(--border)'}`,
  outline: 'none',
  fontSize: 15,
  fontFamily: "'Be Vietnam Pro', sans-serif",
  background: 'var(--surface)',
  color: 'var(--text-main)',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
});

const labelStyle = {
  display: 'block',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: 0.8,
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 8,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

const cardStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 16,
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
};

const subjects = [
  'General Inquiry',
  'Trip Planning Help',
  'Bug Report',
  'Feature Request',
  'Billing Question',
  'Other',
];

export default function ContactUsPage() {
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);

  const formik = useFormik({
    initialValues: { name: '', email: '', subject: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Enter a valid email').required('Email is required'),
      subject: Yup.string().required('Please select a subject'),
      message: Yup.string().min(20, 'Message must be at least 20 characters').required('Message is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await new Promise(res => setTimeout(res, 1000));
      toast.success("Message sent! We'll get back to you within 24 hours. ✈");
      resetForm();
      setSubmitting(false);
    },
  });

  const err = (field) => formik.touched[field] && formik.errors[field];

  return (
    <motion.div {...pageAnim}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Page heading */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 40, fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 }}>
            Get in Touch
          </h1>
          <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 16, color: 'var(--text-secondary)', marginTop: 8 }}>
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '55% 1fr', gap: 40, alignItems: 'start' }}>

          {/* LEFT — Contact Form */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: '40px 36px' }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 600, color: 'var(--text-main)', marginBottom: 28 }}>
              Send us a message
            </h2>

            <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {/* Name */}
              <div>
                <label style={labelStyle}>Your Name</label>
                <input
                  type="text" name="name" placeholder="e.g. Elena Rodriguez"
                  value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  style={inputStyle(err('name'))}
                  onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(255,90,95,0.12)'; }}
                  onBlurCapture={e => { e.target.style.borderColor = err('name') ? 'var(--error, #e53e3e)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                />
                {err('name') && <div style={{ color: 'var(--error, #e53e3e)', fontSize: 12, marginTop: 5, fontFamily: "'Be Vietnam Pro', sans-serif" }}>{formik.errors.name}</div>}
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email" name="email" placeholder="your@email.com"
                  value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  style={inputStyle(err('email'))}
                  onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(255,90,95,0.12)'; }}
                  onBlurCapture={e => { e.target.style.borderColor = err('email') ? 'var(--error, #e53e3e)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                />
                {err('email') && <div style={{ color: 'var(--error, #e53e3e)', fontSize: 12, marginTop: 5, fontFamily: "'Be Vietnam Pro', sans-serif" }}>{formik.errors.email}</div>}
              </div>

              {/* Subject */}
              <div>
                <label style={labelStyle}>Subject</label>
                <select
                  name="subject"
                  value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  style={{ ...inputStyle(err('subject')), appearance: 'none', cursor: 'pointer' }}
                  onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(255,90,95,0.12)'; }}
                  onBlurCapture={e => { e.target.style.borderColor = err('subject') ? 'var(--error, #e53e3e)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                >
                  <option value="">Select a subject...</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {err('subject') && <div style={{ color: 'var(--error, #e53e3e)', fontSize: 12, marginTop: 5, fontFamily: "'Be Vietnam Pro', sans-serif" }}>{formik.errors.subject}</div>}
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message" rows={5} placeholder="Tell us how we can help..."
                  value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  style={{ ...inputStyle(err('message')), resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(255,90,95,0.12)'; }}
                  onBlurCapture={e => { e.target.style.borderColor = err('message') ? 'var(--error, #e53e3e)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                />
                {err('message') && <div style={{ color: 'var(--error, #e53e3e)', fontSize: 12, marginTop: 5, fontFamily: "'Be Vietnam Pro', sans-serif" }}>{formik.errors.message}</div>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit" disabled={formik.isSubmitting}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%', height: 48,
                  background: 'var(--primary)', color: '#fff', border: 'none',
                  borderRadius: 10, fontSize: 15, fontWeight: 600,
                  cursor: formik.isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  opacity: formik.isSubmitting ? 0.75 : 1,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => { if (!formik.isSubmitting) e.currentTarget.style.boxShadow = '0 0 0 4px rgba(255,90,95,0.25)'; }}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                {formik.isSubmitting
                  ? <><Loader2 size={17} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                  : 'Send Message →'
                }
              </motion.button>
            </form>
          </div>

          {/* RIGHT — Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Email */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Mail size={20} style={{ color: 'var(--primary)' }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: 'var(--text-main)' }}>Email Us</span>
              </div>
              <a href="mailto:codebros@gmail.com" style={{ fontSize: 15, color: 'var(--primary)', textDecoration: 'none', fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 500 }}>
                codebros@gmail.com
              </a>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: "'Be Vietnam Pro', sans-serif", margin: 0 }}>
                We reply within 24 business hours
              </p>
            </div>

            {/* Phone */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Phone size={20} style={{ color: 'var(--primary)' }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: 'var(--text-main)' }}>Call Us</span>
              </div>
              <span style={{ fontSize: 15, color: 'var(--text-main)', fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 500 }}>+91 98765 43210</span>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: "'Be Vietnam Pro', sans-serif", margin: 0 }}>
                Mon–Fri, 9:00 AM – 6:00 PM IST
              </p>
            </div>

            {/* Location */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <MapPin size={20} style={{ color: 'var(--primary)' }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: 'var(--text-main)' }}>Our Office</span>
              </div>
              <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-main)', fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0 }}>Code-Bros</p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', fontFamily: "'Be Vietnam Pro', sans-serif", margin: 0 }}>
                Kalol, Gandhinagar<br />Gujarat, India — 382721
              </p>
            </div>

            {/* Social */}
            <div style={cardStyle}>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>Follow Us</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                {[
                  { Icon: Twitter, label: 'Twitter' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                ].map(({ Icon, label }) => (
                  <motion.button
                    key={label}
                    whileHover={{ scale: 1.1, background: 'var(--primary)', color: '#fff' }}
                    onClick={() => toast.success(`Follow us on ${label}!`)}
                    style={{
                      width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border)',
                      background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', transition: 'all 0.2s', color: 'var(--text-muted)',
                    }}
                    title={label}
                  >
                    <Icon size={17} />
                  </motion.button>
                ))}
              </div>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: "'Be Vietnam Pro', sans-serif", margin: '4px 0 0' }}>
                @travelloop &nbsp;·&nbsp; @travelloop &nbsp;·&nbsp; TravelLoop
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spin keyframe for loader */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </motion.div>
  );
}
