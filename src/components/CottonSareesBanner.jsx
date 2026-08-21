import React from 'react';

export default function CottonSareesBanner({ onShopCotton }) {
  return (
    <section 
      onClick={onShopCotton}
      style={{
        padding: '40px 4%',
        backgroundColor: 'var(--bg-cream)',
        cursor: 'pointer'
      }}
    >
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
        border: '1px solid rgba(197, 160, 89, 0.3)'
      }}>
        <img
          src="/images/image 14.png"
          alt="Cotton Sarees — Timeless Comfort Discover"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxHeight: '440px',
            objectFit: 'cover'
          }}
        />
      </div>
    </section>
  );
}
