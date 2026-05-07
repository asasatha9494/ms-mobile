import React from 'react';

const s = {
  footer: { background: '#1a1a18', color: 'rgba(255,255,255,0.4)', padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' },
  logoIcon: { width: 28, height: 28, background: '#e8421a', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.75rem', fontFamily: 'Outfit, sans-serif' },
  left: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  logoText: { color: 'white', fontWeight: 600, fontSize: '0.9rem' },
  right: { fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.04em' },
  accent: { color: '#e8421a' },
};

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.left}>
        <div style={s.logoIcon}>MS</div>
        <span style={s.logoText}>MS Mobile</span>
        <span style={{ marginLeft: 8, fontSize: '0.78rem' }}>· Pottuvil, Sri Lanka</span>
      </div>
      <div style={s.right}>
        © {new Date().getFullYear()} MS Mobile · Built by <span style={s.accent}>Anaaff Sathath</span>
      </div>
    </footer>
  );
}