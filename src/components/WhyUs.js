import React from 'react';

const reasons = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most repairs are done within the hour. We respect your time.' },
  { icon: '🔧', title: 'Experienced Technicians', desc: 'Years of hands-on experience repairing all major phone brands.' },
  { icon: '💯', title: 'Quality Parts', desc: 'We use high-quality replacement parts to ensure your phone lasts.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Fair, transparent pricing with no hidden costs. Get a quote upfront.' },
  { icon: '🛡️', title: 'Repair Warranty', desc: 'All repairs come with a service warranty for your peace of mind.' },
  { icon: '📍', title: 'Local & Trusted', desc: 'Proudly serving Pottuvil and the surrounding areas since day one.' },
];

const s = {
  section: { padding: '6rem 3rem', background: '#1a1a18', color: 'white' },
  inner: { maxWidth: 1100, margin: '0 auto' },
  tag: { fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#e8421a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' },
  h2: { fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', color: 'white', marginBottom: '0.75rem' },
  sub: { color: 'rgba(255,255,255,0.45)', fontSize: '1rem', maxWidth: 480, marginBottom: '3.5rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' },
  cell: { background: '#1a1a18', padding: '2rem', transition: 'background 0.2s' },
  cellIcon: { fontSize: '1.5rem', marginBottom: '1rem' },
  cellTitle: { fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', color: 'white' },
  cellDesc: { fontSize: '0.86rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 },
};

export default function WhyUs() {
  return (
    <section id="why-us" style={s.section}>
      <div style={s.inner}>
        <div style={s.tag}>// why choose us</div>
        <h2 style={s.h2}>Why MS Mobile?</h2>
        <p style={s.sub}>We're not just another repair shop. Here's what sets us apart.</p>
        <div style={s.grid}>
          {reasons.map(r => (
            <div key={r.title} style={s.cell}
              onMouseEnter={e => e.currentTarget.style.background = '#222220'}
              onMouseLeave={e => e.currentTarget.style.background = '#1a1a18'}>
              <div style={s.cellIcon}>{r.icon}</div>
              <div style={s.cellTitle}>{r.title}</div>
              <p style={s.cellDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}