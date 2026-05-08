import React from 'react';

export default function Location() {
  return (
    React.createElement(React.Fragment, null,
      React.createElement('style', null, `
        .location { padding: 6rem 3rem; background: #f0efe9; }
        .location-inner { max-width: 1000px; margin: 0 auto; }
        .location-tag { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: #e8421a; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; }
        .location h2 { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: clamp(2rem, 5vw, 3rem); letter-spacing: -0.03em; color: #1a1a18; margin-bottom: 0.75rem; }
        .location-sub { color: #8a8a82; font-size: 1rem; margin-bottom: 2.5rem; }
        .location-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .map-wrap { border-radius: 12px; overflow: hidden; border: 1px solid rgba(26,26,24,0.1); height: 350px; }
        .map-wrap iframe { width: 100%; height: 100%; border: none; }
        .location-details { display: flex; flex-direction: column; gap: 1rem; }
        .loc-card { display: flex; align-items: flex-start; gap: 1rem; padding: 1rem 1.25rem; background: #f8f7f4; border: 1px solid rgba(26,26,24,0.08); border-radius: 10px; }
        .loc-icon { width: 38px; height: 38px; background: rgba(232,66,26,0.08); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
        .loc-label { font-family: 'DM Mono', monospace; font-size: 0.62rem; color: #e8421a; letter-spacing: 0.08em; text-transform: uppercase; display: block; margin-bottom: 3px; }
        .loc-val { font-size: 0.9rem; color: #1a1a18; font-weight: 500; }
        .directions-btn { display: block; width: 100%; padding: 0.9rem; background: #1a1a18; color: white; border-radius: 8px; text-align: center; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: all 0.2s; margin-top: 0.5rem; font-family: 'Outfit', sans-serif; }
        .directions-btn:hover { background: #e8421a; transform: translateY(-2px); }
        @media (max-width: 768px) {
          .location { padding: 4rem 1.5rem; }
          .location-grid { grid-template-columns: 1fr; }
          .map-wrap { height: 250px; }
        }
      `),
      React.createElement('section', { id: 'location', className: 'location' },
        React.createElement('div', { className: 'location-inner' },
          React.createElement('div', { className: 'location-tag' }, '// find us'),
          React.createElement('h2', null, 'Our Location'),
          React.createElement('p', { className: 'location-sub' }, 'Come visit us in Pottuvil. We are open every day from 9am to 9pm.'),
          React.createElement('div', { className: 'location-grid' },
            React.createElement('div', { className: 'map-wrap' },
              React.createElement('iframe', {
                title: 'MS Mobile Location',
                src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7922.326578558657!2d81.831887!3d6.871029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5a344f568b95d%3A0x865da14d171e7e5c!2sMs-mobile!5e0!3m2!1sen!2slk!4v1778214882988!5m2!1sen!2slk',
                allowFullScreen: '',
                loading: 'lazy'
              })
            ),
            React.createElement('div', { className: 'location-details' },
              [
                { icon: '📍', label: 'address', val: 'Pottuvil, Sri Lanka' },
                { icon: '🕐', label: 'hours', val: 'Every Day: 9am - 9pm' },
                { icon: '📞', label: 'phone', val: '+94 77 717 4227' },
              ].map(({ icon, label, val }) =>
                React.createElement('div', { key: label, className: 'loc-card' },
                  React.createElement('div', { className: 'loc-icon' }, icon),
                  React.createElement('div', null,
                    React.createElement('span', { className: 'loc-label' }, label),
                    React.createElement('span', { className: 'loc-val' }, val)
                  )
                )
              ),
              React.createElement('a', {
                href: 'https://maps.app.goo.gl/JHGBK7PoAQU7aQDZ7',
                target: '_blank',
                rel: 'noreferrer',
                className: 'directions-btn'
              }, 'Get Directions')
            )
          )
        )
      )
    )
  );
}