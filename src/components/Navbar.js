import React, { useState, useEffect } from 'react';

const styles = {
  nav: (scrolled) => ({
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 3rem',
    background: scrolled ? 'rgba(248,247,244,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(26,26,24,0.08)' : '1px solid transparent',
    transition: 'all 0.3s ease',
  }),
  logo: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  logoIcon: {
    width: 36, height: 36,
    background: '#e8421a',
    borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'white', fontWeight: 800, fontSize: '1rem', fontFamily: 'Outfit, sans-serif',
  },
  logoText: { fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#1a1a18' },
  logoSub: {
    fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', color: '#8a8a82',
    letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', lineHeight: 1, marginTop: 2,
  },
  links: { display: 'flex', gap: '2.5rem', listStyle: 'none' },
  link: { fontSize: '0.88rem', fontWeight: 500, color: '#4a4a44', cursor: 'pointer', transition: 'color 0.2s' },
  cta: {
    padding: '0.6rem 1.4rem', background: '#e8421a', color: 'white',
    borderRadius: 6, fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
    border: 'none', transition: 'all 0.2s',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav style={styles.nav(scrolled)}>
      <div style={styles.logo}>
        <div style={styles.logoIcon}>MS</div>
        <div>
          <span style={styles.logoText}>MS Mobile</span>
          <span style={styles.logoSub}>Pottuvil</span>
        </div>
      </div>
      <ul style={styles.links}>
        {['services', 'why-us', 'contact'].map(id => (
          <li key={id}>
            <span
              style={styles.link}
              onClick={() => scrollTo(id)}
              onMouseEnter={e => e.target.style.color = '#e8421a'}
              onMouseLeave={e => e.target.style.color = '#4a4a44'}
            >
              {id === 'why-us' ? 'Why Us' : id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          </li>
        ))}
      </ul>
      <button
        style={styles.cta}
        onClick={() => scrollTo('contact')}
        onMouseEnter={e => { e.target.style.background = '#c73515'; e.target.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.target.style.background = '#e8421a'; e.target.style.transform = 'translateY(0)'; }}
      >
        Book Repair
      </button>
    </nav>
  );
}