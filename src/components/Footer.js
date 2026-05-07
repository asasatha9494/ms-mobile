import React from 'react';

export default function Footer() {
  return (
    <>
      <style>{`
        .footer { background: #1a1a18; color: rgba(255,255,255,0.4); padding: 2rem 3rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .footer-logo { display: flex; align-items: center; gap: 0.6rem; }
        .footer-logo-icon { width: 28px; height: 28px; background: #e8421a; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 0.75rem; font-family: 'Outfit', sans-serif; }
        .footer-logo-text { color: white; font-weight: 600; font-size: 0.9rem; }
        .footer-right { font-family: 'DM Mono', monospace; font-size: 0.68rem; letter-spacing: 0.04em; }
        .footer-accent { color: #e8421a; }
        @media (max-width: 768px) {
          .footer { padding: 2rem 1.5rem; flex-direction: column; text-align: center; }
        }
      `}</style>
      <footer className="footer">
        <div className="footer-logo">
          <div className="footer-logo-icon">MS</div>
          <span className="footer-logo-text">MS Mobile</span>
          <span style={{ marginLeft: 8, fontSize: '0.78rem' }}>· Pottuvil, Sri Lanka</span>
        </div>
        <div className="footer-right">
          © {new Date().getFullYear()} MS Mobile · Built by <span className="footer-accent">Anaaff Sathath</span>
        </div>
      </footer>
    </>
  );
}