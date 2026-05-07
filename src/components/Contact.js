import React, { useState } from 'react';

const WHATSAPP_NUMBER = '94777174227';

const s = {
  section: { padding: '6rem 3rem', background: '#f8f7f4' },
  inner: { maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' },
  tag: { fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#e8421a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' },
  h2: { fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.03em', color: '#1a1a18', marginBottom: '0.75rem', lineHeight: 1.2 },
  sub: { color: '#8a8a82', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: 1.7 },
  infoCard: { display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 1.25rem', background: '#f0efe9', border: '1px solid rgba(26,26,24,0.08)', borderRadius: 10, marginBottom: '0.75rem', textDecoration: 'none' },
  infoIcon: { width: 38, height: 38, background: 'rgba(232,66,26,0.08)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 },
  infoLabel: { fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: '#e8421a', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 3 },
  infoVal: { fontSize: '0.9rem', color: '#1a1a18', fontWeight: 500 },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  label: { fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#8a8a82', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' },
  input: { width: '100%', padding: '0.8rem 1rem', background: '#f0efe9', border: '1.5px solid rgba(26,26,24,0.1)', borderRadius: 8, fontSize: '0.9rem', color: '#1a1a18', fontFamily: 'Outfit, sans-serif', outline: 'none', transition: 'border-color 0.2s' },
  textarea: { width: '100%', padding: '0.8rem 1rem', background: '#f0efe9', border: '1.5px solid rgba(26,26,24,0.1)', borderRadius: 8, fontSize: '0.9rem', color: '#1a1a18', fontFamily: 'Outfit, sans-serif', outline: 'none', transition: 'border-color 0.2s', resize: 'none', minHeight: 110 },
  btn: { padding: '0.9rem 2rem', background: '#25D366', color: 'white', border: 'none', borderRadius: 8, fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' },
  waFloat: { position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999, width: 56, height: 56, borderRadius: '50%', background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', cursor: 'pointer', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' },
  success: { padding: '1rem 1.25rem', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 8, color: '#16a34a', fontSize: '0.9rem', fontWeight: 500 },
};

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
    <section id="contact" style={s.section}>

      <a href={quickWaUrl} target="_blank" rel="noreferrer" style={s.waFloat}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}>
        💬
      </a>

      <div style={s.inner}>
        <div>
          <div style={s.tag}>// reach us</div>
          <h2 style={s.h2}>Get Your Phone Fixed Today</h2>
          <p style={s.sub}>Fill the form and it will be sent straight to our WhatsApp. We reply fast!</p>

          {[
            { icon: '📍', label: 'location', val: 'Pottuvil, Sri Lanka', href: 'https://maps.app.goo.gl/8fpQGQBdfoKdJEeq9' },
            { icon: '📞', label: 'phone', val: '+94 77 717 4227', href: 'tel:+94777174227' },
            { icon: '✉️', label: 'email', val: 'asasatha9494@gmail.com', href: 'mailto:asasatha9494@gmail.com' },
            { icon: '🕐', label: 'hours', val: 'Mon-Sat: 9am - 9pm', href: null },
            { icon: '📸', label: 'instagram', val: '@mohammed_satha', href: 'https://www.instagram.com/mohammed_satha' },
            { icon: '🎵', label: 'tiktok', val: '@satha.mohammed', href: 'https://www.tiktok.com/@satha.mohammed' },
          ].map(({ icon, label, val, href }) => {
            const Tag = href ? 'a' : 'div';
            return (
              <Tag key={label} href={href} target={href && href.startsWith('http') ? '_blank' : undefined} style={s.infoCard}
                onMouseEnter={href ? e => e.currentTarget.style.borderColor = 'rgba(232,66,26,0.3)' : undefined}
                onMouseLeave={href ? e => e.currentTarget.style.borderColor = 'rgba(26,26,24,0.08)' : undefined}>
                <div style={s.infoIcon}>{icon}</div>
                <div>
                  <span style={s.infoLabel}>{label}</span>
                  <span style={s.infoVal}>{val}</span>
                </div>
              </Tag>
            );
          })}
        </div>

        <form style={s.form} onSubmit={handleSubmit}>
          {sent && (
            <div style={s.success}>
              WhatsApp opened! Send the message to complete your booking.
            </div>
          )}

          {[
            { name: 'name', label: 'Your Name', placeholder: 'Your name...', type: 'text' },
            { name: 'phone', label: 'Your Phone Number', placeholder: '+94 7X XXX XXXX', type: 'tel' },
            { name: 'device', label: 'Device Model', placeholder: 'e.g. Samsung A54, iPhone 13...', type: 'text' },
          ].map(({ name, label, placeholder, type }) => (
            <div key={name}>
              <label style={s.label}>{label}</label>
              <input type={type} name={name} value={form[name]} onChange={handleChange}
                placeholder={placeholder} required style={s.input}
                onFocus={e => e.target.style.borderColor = 'rgba(37,211,102,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(26,26,24,0.1)'} />
            </div>
          ))}

          <div>
            <label style={s.label}>Describe the Issue</label>
            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="e.g. Cracked screen, not turning on, wont charge..." required style={s.textarea}
              onFocus={e => e.target.style.borderColor = 'rgba(37,211,102,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(26,26,24,0.1)'} />
          </div>

          <button type="submit" style={s.btn}
            onMouseEnter={e => { e.currentTarget.style.background = '#1da851'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}