import React from 'react';

const s = {
  section: {
    minHeight: '100vh', display: 'flex', alignItems: 'center',
    padding: '8rem 3rem 5rem', position: 'relative', overflow: 'hidden',
    background: '#f8f7f4',
    backgroundImage: `url(${require('../assets/hero-bg.jpeg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  bgPattern: {
    position: 'absolute', inset: 0,
    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(26,26,24,0.06) 1px, transparent 0)`,
    backgroundSize: '32px 32px', pointerEvents: 'none',
  },
  bgAccent: {
    position: 'absolute', top: '-10%', right: '-5%',
    width: 500, height: 500, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(232,66,26,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  content: { maxWidth: 720, position: 'relative', zIndex: 1 },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.4rem 1rem',
    background: 'rgba(232,66,26,0.08)', border: '1px solid rgba(232,66,26,0.2)',
    borderRadius: 100, fontFamily: 'DM Mono, monospace', fontSize: '0.7rem',
    color: '#e8421a', letterSpacing: '0.06em', marginBottom: '2rem',
  },
  dot: { width: 6, height: 6, borderRadius: '50%', background: '#e8421a', animation: 'pulse 2s infinite' },
  h1: {
    fontFamily: 'Outfit, sans-serif', fontWeight: 800,
    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.05,
    letterSpacing: '-0.04em', color: '#1a1a18', marginBottom: '1.5rem',
  },
  accent: { color: '#e8421a' },
  sub: {
    fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#4a4a44', fontWeight: 400,
    maxWidth: 520, lineHeight: 1.75, marginBottom: '2.5rem',
  },
  ctas: { display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' },
  btnPrimary: {
    padding: '0.9rem 2rem', background: '#1a1a18', color: 'white',
    borderRadius: 8, fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
    border: 'none', transition: 'all 0.2s', fontFamily: 'Outfit, sans-serif',
  },
  btnSecondary: {
    padding: '0.9rem 2rem', background: 'transparent', color: '#1a1a18',
    borderRadius: 8, fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer',
    border: '1.5px solid rgba(26,26,24,0.2)', transition: 'all 0.2s', fontFamily: 'Outfit, sans-serif',
  },
  statsRow: {
    display: 'flex', gap: '3rem', paddingTop: '2.5rem',
    borderTop: '1px solid rgba(26,26,24,0.1)', flexWrap: 'wrap',
  },
  statNum: { fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#e8421a', lineHeight: 1 },
  statLabel: { fontSize: '0.82rem', color: '#8a8a82', marginTop: 4, fontWeight: 400 },
  bigText: {
    position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-50%)',
    fontFamily: 'Outfit, sans-serif', fontWeight: 800,
    fontSize: 'clamp(6rem, 14vw, 13rem)', color: 'rgba(26,26,24,0.04)',
    letterSpacing: '-0.05em', userSelect: 'none', lineHeight: 1, pointerEvents: 'none',
  },
};

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section style={s.section}>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
      <div style={{ position:'absolute', inset:0, background:'rgba(248,247,244,0.45)' }} />
      <div style={s.bgAccent} />
      <div style={s.bigText}>REPAIR</div>
      <div style={s.content}>
        <div style={s.badge}>
          <div style={s.dot} />
          Open Now · Pottuvil
        </div>
        <h1 style={s.h1}>
          Your Phone,<br />
          <span style={s.accent}>Fixed Fast.</span>
        </h1>
        <p style={s.sub}>
          Professional phone repair services in Pottuvil. Screen replacements, battery swaps,
          water damage recovery and more — done right, done fast.
        </p>
        <div style={s.ctas}>
          <button style={s.btnPrimary} onClick={() => scrollTo('contact')}
            onMouseEnter={e => { e.currentTarget.style.background='#e8421a'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#1a1a18'; e.currentTarget.style.transform='translateY(0)'; }}>
            Book a Repair →
          </button>
          <button style={s.btnSecondary} onClick={() => scrollTo('services')}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#1a1a18'; e.currentTarget.style.background='rgba(26,26,24,0.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(26,26,24,0.2)'; e.currentTarget.style.background='transparent'; }}>
            Our Services
          </button>
        </div>
        <div style={s.statsRow}>
          {[
            { num: '100000+', label: 'Devices Repaired' },
            { num: '30 min', label: 'Avg. Repair Time' },
            { num: '100%', label: 'Satisfaction' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={s.statNum}>{num}</div>
              <div style={s.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}