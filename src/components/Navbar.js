import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 1rem 2rem; transition: all 0.3s ease; }
        .nav.scrolled { background: rgba(248,247,244,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(26,26,24,0.08); }
        .nav-logo { display: flex; align-items: center; gap: 0.6rem; }
        .nav-logo-icon { width: 36px; height: 36px; background: #e8421a; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 1rem; font-family: 'Outfit', sans-serif; }
        .nav-logo-text { font-weight: 700; font-size: 1.1rem; letter-spacing: -0.02em; color: white; }
        .nav.scrolled .nav-logo-text { color: #1a1a18; }
        .nav-logo-sub { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: rgba(255,255,255,0.6); letter-spacing: 0.1em; text-transform: uppercase; display: block; line-height: 1; margin-top: 2px; }
        .nav.scrolled .nav-logo-sub { color: #8a8a82; }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a { font-size: 0.88rem; font-weight: 500; color: rgba(255,255,255,0.85); cursor: pointer; transition: color 0.2s; }
        .nav.scrolled .nav-links a { color: #4a4a44; }
        .nav-links a:hover { color: #e8421a; }
        .nav-cta { padding: 0.6rem 1.4rem; background: #e8421a; color: white; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s; font-family: 'Outfit', sans-serif; }
        .nav-cta:hover { background: #c73515; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: all 0.3s; }
        .nav.scrolled .hamburger span { background: #1a1a18; }
        .mobile-menu { display: none; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; flex-direction: column; position: fixed; top: 64px; left: 0; right: 0; background: rgba(248,247,244,0.98); backdrop-filter: blur(20px); padding: 1.5rem 2rem; gap: 1.25rem; border-bottom: 1px solid rgba(26,26,24,0.08); z-index: 99; }
          .mobile-menu.hidden { display: none; }
          .mobile-menu a { font-size: 1rem; font-weight: 600; color: #1a1a18; cursor: pointer; padding: 0.5rem 0; border-bottom: 1px solid rgba(26,26,24,0.06); }
          .mobile-menu .mob-cta { padding: 0.9rem; background: #e8421a; color: white; border-radius: 8px; text-align: center; font-weight: 700; border-bottom: none; margin-top: 0.5rem; }
        }
      `}</style>

      <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
        <div className="nav-logo">
          <div className="nav-logo-icon">MS</div>
          <div>
            <span className="nav-logo-text">MS Mobile</span>
            <span className="nav-logo-sub">Pottuvil</span>
          </div>
        </div>
        <ul className="nav-links">
          {['services', 'why-us', 'contact', 'Loacation'].map(id => (
            <li key={id}><a onClick={() => scrollTo(id)}>{id === 'why-us' ? 'Why Us' : id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>Book Repair</button>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={'mobile-menu' + (menuOpen ? '' : ' hidden')}>
        {['services', 'why-us', 'contact', 'Location'].map(id => (
          <a key={id} onClick={() => scrollTo(id)}>{id === 'why-us' ? 'Why Us' : id.charAt(0).toUpperCase() + id.slice(1)}</a>
        ))}
        <a className="mob-cta" onClick={() => scrollTo('contact')}>Book Repair</a>
      </div>
    </>
  );
}