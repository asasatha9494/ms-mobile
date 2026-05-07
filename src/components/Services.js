import React, { useState } from 'react';

const services = [
  { icon: '📱', title: 'Screen Replacement', desc: 'Cracked or shattered display? We replace screens for all major brands with original-quality parts.', time: '30–60 min', price: 'From LKR 3,500' },
  { icon: '🔋', title: 'Battery Replacement', desc: 'Battery draining fast? We swap it out with a quality replacement to restore full battery life.', time: '20–30 min', price: 'From LKR 2,500' },
  { icon: '💧', title: 'Water Damage Recovery', desc: 'Phone fell in water? Bring it to us immediately. We clean, dry, and recover your device professionally.', time: '1–2 hours', price: 'From LKR 3,000' },
  { icon: '🔌', title: 'Charging Port Repair', desc: 'Phone not charging or loose connection? We repair or replace charging ports for all models.', time: '30–45 min', price: 'From LKR 1,000' },
  { icon: '📷', title: 'Camera Repair', desc: 'Blurry photos or cracked camera lens? We fix front and rear cameras to get your shots sharp again.', time: '45–60 min', price: 'From LKR 2,000' },
  { icon: '🔊', title: 'Speaker & Mic Repair', desc: 'No sound or muffled audio? We diagnose and repair speaker and microphone issues quickly.', time: '30–45 min', price: 'From LKR 1,200' },
  { icon: '🔑', title: 'Software & Unlocking', desc: 'Phone locked or software issues? We handle software fixes and network unlocking.', time: '30–60 min', price: 'From LKR 1,000' },
  { icon: '🛒', title: 'Phone Sourcing', desc: 'Looking for a specific phone model? We can source and supply phones for customers on request.', time: 'On request', price: 'Market price' },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={'service-card' + (hovered ? ' hovered' : '')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="service-icon">{service.icon}</div>
      <div className="service-title">{service.title}</div>
      <p className="service-desc">{service.desc}</p>
      <div className="service-meta">
        <span className="service-time">⏱ {service.time}</span>
        <span className="service-price">{service.price}</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <style>{`
        .services { padding: 6rem 3rem; background: #f0efe9; }
        .services-header { margin-bottom: 3.5rem; }
        .section-tag { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: #e8421a; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; }
        .section-h2 { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: clamp(2rem, 5vw, 3rem); letter-spacing: -0.03em; color: #1a1a18; margin-bottom: 0.75rem; }
        .section-sub { color: #8a8a82; font-size: 1rem; max-width: 480px; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; }
        .service-card { background: #f8f7f4; border: 1.5px solid rgba(26,26,24,0.08); border-radius: 12px; padding: 1.75rem; transition: all 0.25s ease; }
        .service-card.hovered { background: #ffffff; border-color: rgba(232,66,26,0.2); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(26,26,24,0.1); }
        .service-icon { font-size: 1.75rem; margin-bottom: 1rem; width: 48px; height: 48px; background: rgba(232,66,26,0.08); border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .service-title { font-weight: 700; font-size: 1.05rem; margin-bottom: 0.5rem; color: #1a1a18; }
        .service-desc { font-size: 0.86rem; color: #8a8a82; line-height: 1.7; margin-bottom: 1.25rem; }
        .service-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid rgba(26,26,24,0.07); }
        .service-time { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: #8a8a82; }
        .service-price { font-family: 'DM Mono', monospace; font-size: 0.72rem; color: #e8421a; font-weight: 500; }
        @media (max-width: 768px) {
          .services { padding: 4rem 1.5rem; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section id="services" className="services">
        <div className="services-header">
          <div className="section-tag">// what we fix</div>
          <h2 className="section-h2">Our Services</h2>
          <p className="section-sub">From cracked screens to water damage — we handle it all with care and speed.</p>
        </div>
        <div className="services-grid">
          {services.map(service => <ServiceCard key={service.title} service={service} />)}
        </div>
      </section>
    </>
  );
}