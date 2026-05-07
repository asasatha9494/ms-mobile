import React from 'react';
import heroBg from '../assets/hero-bg.jpeg';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .hero { min-height: 100vh; display: flex; align-items: center; padding: 8rem 3rem 5rem; position: relative; overflow: hidden; background-image: url(${heroBg}); background-size: cover; background-position: center; background-repeat: no-repeat; }
        .hero-overlay { position: absolute; inset: 0; background: rgba(10,10,10,0.65); }
        .hero-pattern { position: absolute; inset: 0; background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0); background-size: 32px 32px; pointer-events: none; }
        .hero-content { max-width: 720px; position: relative; z-index: 1; }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 1rem; background: rgba(232,66,26,0.2); border: 1px solid rgba(232,66,26,0.5); border-radius: 100px; font-family: 'DM Mono', monospace; font-size: 0.7rem; color: #ff8c6b; letter-spacing: 0.06em; margin-bottom: 2rem; }
        .hero-dot { width: 6px; height: 6px; border-radius: 50%; background: #e8421a; animation: pulse 2s infinite; flex-shrink: 0; }
        .hero h1 { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: clamp(2.5rem, 8vw, 5.5rem); line-height: 1.05; letter-spacing: -0.04em; color: #ffffff; margin-bottom: 1.5rem; }
        .hero-accent { color: #e8421a; }
        .hero-sub { font-size: clamp(0.95rem, 2vw, 1.15rem); color: rgba(255,255,255,0.85); font-weight: 400; max-width: 520px; line-height: 1.75; margin-bottom: 2.5rem; }
        .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 4rem; }
        .btn-primary { padding: 0.9rem 2rem; background: #e8421a; color: white; border-radius: 8px; font-weight: 600; font-size: 0.9rem; cursor: pointer; border: none; transition: all 0.2s; font-family: 'Outfit', sans-serif; }
        .btn-primary:hover { background: #c73515; transform: translateY(-2px); }
        .btn-secondary { padding: 0.9rem 2rem; background: transparent; color: white; border-radius: 8px; font-weight: 500; font-size: 0.9rem; cursor: pointer; border: 1.5px solid rgba(255,255,255,0.4); transition: all 0.2s; font-family: 'Outfit', sans-serif; }
        .btn-secondary:hover { border-color: white; background: rgba(255,255,255,0.1); }
        .hero-stats { display: flex; gap: 3rem; padding-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.2); flex-wrap: wrap; }
        .stat-num { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 2rem; color: #e8421a; line-height: 1; }
        .stat-label { font-size: 0.82rem; color: rgba(255,255,255,0.7); margin-top: 4px; }
        .hero-big { position: absolute; right: 3rem; top: 50%; transform: translateY(-50%); font-family: 'Outfit', sans-serif; font-weight: 800; font-size: clamp(4rem, 14vw, 13rem); color: rgba(255,255,255,0.04); letter-spacing: -0.05em; user-select: none; pointer-events: none; }
        @media (max-width: 768px) {
          .hero { padding: 6rem 1.5rem 3rem; background-position: 70% center; }
          .hero-ctas { flex-direction: column; }
          .btn-primary, .btn-secondary { width: 100%; text-align: center; }
          .hero-stats { gap: 1.5rem; }
          .hero-big { display: none; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-pattern" />
        <div className="hero-big">REPAIR</div>
        <div className="hero-content">
          <div className="hero-badge"><div className="hero-dot" />Open Now · Pottuvil</div>
          <h1>Your Phone,<br /><span className="hero-accent">Fixed Fast.</span></h1>
          <p className="hero-sub">Professional phone repair services in Pottuvil. Screen replacements, battery swaps, water damage recovery and more — done right, done fast.</p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>Book a Repair →</button>
            <button className="btn-secondary" onClick={() => scrollTo('services')}>Our Services</button>
          </div>
          <div className="hero-stats">
            {[
              { num: '10,000+', label: 'Devices Repaired' },
              { num: '30 Min', label: 'Avg. Repair Time' },
              { num: '100%', label: 'Satisfaction' }
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}