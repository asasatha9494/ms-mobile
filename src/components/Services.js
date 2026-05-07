import React, { useState } from 'react';

const services = [
  { icon: '📱', title: 'Screen Replacement', desc: 'Cracked or shattered display? We replace screens for all major brands with original-quality parts.', time: '30–60 min', price: 'From LKR 3,500' },
  { icon: '🔋', title: 'Battery Replacement', desc: 'Battery draining fast? We swap it out with a quality replacement to restore full battery life.', time: '20–30 min', price: 'From LKR 1,500' },
  { icon: '💧', title: 'Water Damage Recovery', desc: 'Phone fell in water? Bring it to us immediately. We clean, dry, and recover your device professionally.', time: '1–2 hours', price: 'From LKR 3,000' },
  { icon: '🔌', title: 'Charging Port Repair', desc: 'Phone not charging or loose connection? We repair or replace charging ports for all models.', time: '30–45 min', price: 'From LKR 1,000' },
  { icon: '📷', title: 'Camera Repair', desc: 'Blurry photos or cracked camera lens? We fix front and rear cameras to get your shots sharp again.', time: '45–60 min', price: 'From LKR 2,000' },
  { icon: '🔊', title: 'Speaker & Mic Repair', desc: 'No sound or muffled audio? We diagnose and repair speaker and microphone issues quickly.', time: '30–45 min', price: 'From LKR 1,200' },
  { icon: '🔑', title: 'Software & Unlocking', desc: 'Phone locked or software issues? We handle software fixes and network unlocking.', time: '30–60 min', price: 'From LKR 1,000' },
  { icon: '🛒', title: 'Phone Sourcing', desc: 'Looking for a specific phone model? We can source and supply phones for customers on request.', time: 'On request', price: 'Market price' },
];

const s = {
  section: { padding: '6rem 3rem', background: '#f0efe9' },
  header: { marginBottom: '3.5rem' },
  tag: { fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#e8421a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' },
  h2: { fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', color: '#1a1a18', marginBottom: '0.75rem' },
  sub: { color: '#8a8a82', fontSize: '1rem', maxWidth: 480 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' },
  card: (h) => ({
    background: h ? '#ffffff' : '#f8f7f4',
    border: `1.5px solid ${h ? 'rgba(232,66,26,0.2)' : 'rgba(26,26,24,0.08)'}`,
    borderRadius: 12, padding: '1.75rem', cursor: 'default', transition: 'all 0.25s ease',
    transform: h ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: h ? '0 12px 40px rgba(26,26,24,0.1)' : 'none',
  }),
  iconWrap: { fontSize: '1.75rem', marginBottom: '1rem', width: 48, height: 48, background: 'rgba(232,66,26,0.08)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  cardTitle: { fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem', color: '#1a1a18' },
  cardDesc: { fontSize: '0.86rem', color: '#8a8a82', lineHeight: 1.7, marginBottom: '1.25rem' },
  cardMeta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(26,26,24,0.07)' },
  metaTime: { fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: '#8a8a82', letterSpacing: '0.04em' },
  metaPrice: { fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#e8421a', fontWeight: 500, letterSpacing: '0.04em' },
};

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={s.card(hovered)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={s.iconWrap}>{service.icon}</div>
      <div style={s.cardTitle}>{service.title}</div>
      <p style={s.cardDesc}>{service.desc}</p>
      <div style={s.cardMeta}>
        <span style={s.metaTime}>⏱ {service.time}</span>
        <span style={s.metaPrice}>{service.price}</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={s.section}>
      <div style={s.header}>
        <div style={s.tag}>// what we fix</div>
        <h2 style={s.h2}>Our Services</h2>
        <p style={s.sub}>From cracked screens to water damage — we handle it all with care and speed.</p>
      </div>
      <div style={s.grid}>
        {services.map(service => <ServiceCard key={service.title} service={service} />)}
      </div>
    </section>
  );
}