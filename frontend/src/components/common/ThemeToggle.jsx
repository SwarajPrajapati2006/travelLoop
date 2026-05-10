import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        background: 'var(--toggle-bg)',
        border: '1.5px solid var(--toggle-border)',
        borderRadius: 'var(--r-full)',
        padding: '5px 8px',
        cursor: 'pointer',
        position: 'relative',
        width: 68,
        height: 32,
        flexShrink: 0,
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {/* Sun icon — left */}
      <Sun
        size={13}
        style={{
          color: isDark ? 'var(--text-muted)' : '#f59e0b',
          transition: 'color 0.3s, opacity 0.3s',
          opacity: isDark ? 0.4 : 1,
          flexShrink: 0,
          zIndex: 1,
          position: 'relative',
        }}
      />

      {/* Sliding thumb */}
      <motion.div
        animate={{ x: isDark ? 30 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          position: 'absolute',
          left: 4,
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: isDark ? '#2e2e2e' : '#FF5A5F',
          boxShadow: isDark
            ? '0 1px 4px rgba(0,0,0,0.5)'
            : '0 1px 6px rgba(255,90,95,0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        {isDark
          ? <Moon size={11} style={{ color: '#fbbf24' }} />
          : <Sun size={11} style={{ color: '#ffffff' }} />
        }
      </motion.div>

      {/* Moon icon — right */}
      <Moon
        size={13}
        style={{
          color: isDark ? '#fbbf24' : 'var(--text-muted)',
          transition: 'color 0.3s, opacity 0.3s',
          opacity: isDark ? 1 : 0.4,
          flexShrink: 0,
          zIndex: 1,
          position: 'relative',
        }}
      />
    </button>
  );
}
