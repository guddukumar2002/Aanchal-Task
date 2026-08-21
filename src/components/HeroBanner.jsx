import React from 'react';

export default function HeroBanner({ onExplore }) {
  return (
    <section 
      onClick={onExplore}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#E5C4B4',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
    >
      <img
        src="/images/Banner.png"
        alt="Aanchal New Arrivals - Freshly dropped styles designed to fit right into your everyday wardrobe"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxHeight: '620px',
          objectFit: 'cover'
        }}
      />
    </section>
  );
}
