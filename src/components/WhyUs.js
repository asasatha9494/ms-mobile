import React from 'react';

const reasons = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most repairs are done within 30 minutes. We respect your time.' },
  { icon: '🔧', title: 'Experienced Technicians', desc: 'Years of hands-on experience repairing all major phone brands.' },
  { icon: '💯', title: 'Quality Parts', desc: 'We use high-quality replacement parts to ensure your phone lasts.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Fair, transparent pricing with no hidden costs. Get a quote upfront.' },
  { icon: '🛡️', title: 'Repair Warranty', desc: 'All repairs come with a service warranty for your peace of mind.' },
  { icon: '📍', title: 'Local & Trusted', desc: '10,000+ devices repaired. Proudly serving Pottuvil since day one.' },
];

export default function WhyUs() {
  return (
    <>
      <style>{`
        .whyus { padding: 6rem 3rem; background: #1a1a18; color: white; }
        .whyus-inner { max-width: 1100px; margin: 0 auto; }
        .whyus-tag { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: #e8421a; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; }
        .whyus h2 { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: clamp(2rem, 5vw, 3rem); letter-spacing: -0.03em; color: white; margin-bottom: 0.75rem; }
        .whyus-sub { color: rgba(255,255,255,0.45); font-size: 1rem; max-width: 480px; margin-bottom: 3.5rem; }
        .whyus-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; }
        .whyus-cell { background: #1a1a18; padding: 2rem; transition: background 0.2s; }
        .whyus-cell:hover { background: #222220; }
        .whyus-cell-icon { font-size: 1.5rem; margin-bottom: 1rem; }
        .whyus-cell-title { font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; color: white; }
        .whyus-cell-desc { font-size: 0.86rem; color: rgba(255,255,255,0.45); line-height: 1.7; }
        @media (max-width: 768px) {
          .whyus { padding: 4rem 1.5rem; }
          .whyus-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section id="why-us" className="whyus">
        <div className="whyus-inner">
          <div className="whyus-tag">// why choose us</div>
          <h2>Why MS Mobile?</h2>
          <p className="whyus-sub">We are not just another repair shop. Here is what sets us apart.</p>
          <div className="whyus-grid">
            {reasons.map(r => (
              <div key={r.title} className="whyus-cell">
                <div className="whyus-cell-icon">{r.icon}</div>
                <div className="whyus-cell-title">{r.title}</div>
                <p className="whyus-cell-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}