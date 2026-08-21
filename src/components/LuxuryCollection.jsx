import React from 'react';

const collections = [
  { id: 'kanchi-border', name: 'Kanchi Border',       image: '/Rectangle 11.png' },
  { id: 'georgette',     name: 'Georgette Sarees',    image: '/Rectangle 11 (1).png' },
  { id: 'handloom',      name: 'Handloom Sarees',     image: '/Rectangle 11 (2).png' },
  { id: 'chanderi',      name: 'Chanderi Collection', image: '/Rectangle 11 (3).png' },
  { id: 'designer',      name: 'Designer Sarees',     image: '/Rectangle 11 (4).png' },
  { id: 'linen',         name: 'Linen Sarees',        image: '/Rectangle 11 (5).png' },
];

export default function LuxuryCollection() {
  return (
    <section style={{ padding: '70px 4%', backgroundColor: '#FFF' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: '32px', color: '#8B6914', display: 'block', marginBottom: '2px' }}>Luxury Saree Collection</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 400, color: '#1A1A1A', letterSpacing: '0.01em', marginBottom: '10px' }}>Crafted Traditions, Modern Elegance</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C5A059)' }}></div>
            <img src="/Group 7.png" alt="" style={{ height: '18px', objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C5A059, transparent)' }}></div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }} className="luxury-grid">
          {collections.map((col) => (
            <div key={col.id} style={{ position: 'relative', overflow: 'hidden', height: '220px', cursor: 'pointer', borderRadius: '4px' }} className="luxury-card">
              <img src={col.image} alt={col.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)' }}></div>
              <p style={{ position: 'absolute', bottom: '12px', left: 0, right: 0, textAlign: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', fontWeight: 500, color: '#FFF', letterSpacing: '0.03em', padding: '0 6px' }}>{col.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .luxury-card:hover img { transform: scale(1.07); }
        @media (max-width: 1100px) { .luxury-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 600px)  { .luxury-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
