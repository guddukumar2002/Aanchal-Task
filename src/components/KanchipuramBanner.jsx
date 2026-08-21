import React from 'react';

export default function KanchipuramBanner({ onShopNow }) {
  return (
    <section 
      onClick={onShopNow}
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
        boxShadow: '0 16px 40px rgba(44, 34, 30, 0.12)',
        border: '1px solid rgba(197, 160, 89, 0.3)'
      }}>
        <img
          src="/images/image 16.png"
          alt="Kanchipuram Silk Sarees - Woven essence of legacy"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxHeight: '480px',
            objectFit: 'cover'
          }}
        />
      </div>
    </section>
  );
}
