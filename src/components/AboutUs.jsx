import React from 'react';

export default function AboutUs() {
  return (
    <section style={{ padding: '80px 4%', backgroundColor: '#FFF' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-grid">

        {/* Image — show full, no crop */}
        <div style={{ borderRadius: '4px', overflow: 'hidden' }}>
          <img
            src="/Rectangle 7.png"
            alt="Aanchal Store"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Text */}
        <div>
          <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: '30px', color: '#8B6914', display: 'block', marginBottom: '6px' }}>About Us</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 400, color: '#1A1A1A', marginBottom: '20px' }}>Weaving Tradition with Elegance</h2>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.85, marginBottom: '16px' }}>
            At Aanchal, we celebrate the timeless beauty of Indian tradition through exquisitely crafted sarees. Our collections are thoughtfully curated to blend heritage craftsmanship with modern elegance, offering styles perfect for every occasion. From luxurious silks to graceful handloom weaves, every saree tells a story of culture, artistry, and sophistication.
          </p>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.85, marginBottom: '32px' }}>
            Aanchal brings together tradition, elegance, and contemporary fashion through premium saree collections crafted with love and authenticity. We believe every woman deserves to feel graceful, confident, and beautifully connected to her roots.
          </p>
          <div style={{ display: 'flex', gap: '14px' }}>
            <button
              style={{ padding: '12px 28px', border: '1.5px solid #1A1A1A', color: '#1A1A1A', fontFamily: 'var(--font-heading)', fontSize: '13px', letterSpacing: '0.06em', backgroundColor: 'transparent', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1A1A1A'; e.currentTarget.style.color = '#FFF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1A1A1A'; }}
            >Know More</button>
            <button
              style={{ padding: '12px 28px', backgroundColor: '#1A1A1A', color: '#FFF', fontFamily: 'var(--font-heading)', fontSize: '13px', letterSpacing: '0.06em', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.82'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >Explore Products +</button>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
