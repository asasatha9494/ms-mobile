import React, { useState } from 'react';

const WHATSAPP_NUMBER = '94777174227';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', device: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = 'New Repair Request - MS Mobile' +
      '\n\nName: ' + form.name +
      '\nPhone: ' + form.phone +
      '\nDevice: ' + form.device +
      '\nIssue: ' + form.message;
    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
    setSent(true);
    setForm({ name: '', phone: '', device: '', message: '' });
  };

  const quickWaUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hi! I need a phone repair.');

  return (
    <>
      <style>{`
        .contact { padding: 6rem 3rem; background: #f8f7f4; }
        .contact-inner { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .contact-tag { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: #e8421a; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; }
        .contact h2 { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: clamp(1.8rem, 4vw, 2.8rem); letter-spacing: -0.03em; color: #1a1a18; margin-bottom: 0.75rem; line-height: 1.2; }
        .contact-sub { color: #8a8a82; font-size: 0.95rem; margin-bottom: 2.5rem; line-height: 1.7; }
        .info-card { display: flex; align-items: flex-start; gap: 1rem; padding: 1rem 1.25rem; background: #f0efe9; border: 1px solid rgba(26,26,24,0.08); border-radius: 10px; margin-bottom: 0.75rem; text-decoration: none; transition: border-color 0.2s; }
        .info-card:hover { border-color: rgba(232,66,26,0.3); }
        .info-icon { width: 38px; height: 38px; background: rgba(232,66,26,0.08); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
        .info-label { font-family: 'DM Mono', monospace; font-size: 0.62rem; color: #e8421a; letter-spacing: 0.08em; text-transform: uppercase; display: block; margin-bottom: 3px; }
        .info-val { font-size: 0.9rem; color: #1a1a18; font-weight: 500; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; color: #8a8a82; letter-spacing: 0.08em; text-transform: uppercase; display: block; margin-bottom: 0.4rem; }
        .form-input { width: 100%; padding: 0.8rem 1rem; background: #f0efe9; border: 1.5px solid rgba(26,26,24,0.1); border-radius: 8px; font-size: 0.9rem; color: #1a1a18; font-family: 'Outfit', sans-serif; outline: none; transition: border-color 0.2s; }
        .form-input:focus { border-color: rgba(37,211,102,0.5); }
        .form-textarea { width: 100%; padding: 0.8rem 1rem; background: #f0efe9; border: 1.5px solid rgba(26,26,24,0.1); border-radius: 8px; font-size: 0.9rem; color: #1a1a18; font-family: 'Outfit', sans-serif; outline: none; transition: border-color 0.2s; resize: none; min-height: 110px; }
        .form-textarea:focus { border-color: rgba(37,211,102,0.5); }
        .wa-btn { padding: 0.9rem 2rem; background: #25D366; color: white; border: none; border-radius: 8px; font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s; align-self: flex-start; width: 100%; }
        .wa-btn:hover { background: #1da851; transform: translateY(-2px); }
        .success-msg { padding: 1rem 1.25rem; background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.3); border-radius: 8px; color: #16a34a; font-size: 0.9rem; font-weight: 500; }
        .wa-float { position: fixed; bottom: 2rem; right: 2rem; z-index: 999; width: 56px; height: 56px; border-radius: 50%; background: #25D366; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; box-shadow: 0 4px 20px rgba(37,211,102,0.4); cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .wa-float:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(37,211,102,0.5); }
        @media (max-width: 768px) {
          .contact { padding: 4rem 1.5rem; }
          .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
          .wa-btn { width: 100%; }
          .wa-float { bottom: 1.25rem; right: 1.25rem; width: 50px; height: 50px; font-size: 1.4rem; }
        }
      `}</style>

      <a href={quickWaUrl} target="_blank" rel="noreferrer" className="wa-float">💬</a>

      <section id="contact" className="contact">
        <div className="contact-inner">
          <div>
            <div className="contact-tag">// reach us</div>
            <h2>Get Your Phone Fixed Today</h2>
            <p className="contact-sub">Fill the form and it will be sent straight to our WhatsApp. We reply fast!</p>

            {[
              { icon: '📍', label: 'location', val: 'Pottuvil, Sri Lanka', href: 'https://maps.app.goo.gl/SBzhDfM5CPVomFzP7' },
              { icon: '📞', label: 'phone', val: '+94 77 717 4227', href: 'tel:+94777174227' },
              { icon: '✉️', label: 'email', val: 'asasatha9494@gmail.com', href: 'mailto:asasatha9494@gmail.com' },
              { icon: '🕐', label: 'hours', val: 'Every Day: 9am - 9pm', href: null },
              { icon: '📸', label: 'instagram', val: '@mohammed_satha', href: 'https://www.instagram.com/mohammed_satha' },
              { icon: '🎵', label: 'tiktok', val: '@satha.mohammed', href: 'https://www.tiktok.com/@satha.mohammed' },
            ].map(({ icon, label, val, href }) => {
              const Tag = href ? 'a' : 'div';
              return (
                <Tag key={label} href={href} target={href && href.startsWith('http') ? '_blank' : undefined} className="info-card">
                  <div className="info-icon">{icon}</div>
                  <div>
                    <span className="info-label">{label}</span>
                    <span className="info-val">{val}</span>
                  </div>
                </Tag>
              );
            })}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {sent && <div className="success-msg">WhatsApp opened! Send the message to complete your booking.</div>}
            {[
              { name: 'name', label: 'Your Name', placeholder: 'Your name...', type: 'text' },
              { name: 'phone', label: 'Your Phone Number', placeholder: '+94 7X XXX XXXX', type: 'tel' },
              { name: 'device', label: 'Device Model', placeholder: 'e.g. Samsung A54, iPhone 13...', type: 'text' },
            ].map(({ name, label, placeholder, type }) => (
              <div key={name}>
                <label className="form-label">{label}</label>
                <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder} required className="form-input" />
              </div>
            ))}
            <div>
              <label className="form-label">Describe the Issue</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="e.g. Cracked screen, not turning on..." required className="form-textarea" />
            </div>
            <button type="submit" className="wa-btn">💬 Send via WhatsApp</button>
          </form>
        </div>
      </section>
    </>
  );
}