import React from 'react';

const luxurySwatches = [
  { id: 'kanchi-border', name: 'Kanchi Border', image: '/images/image 53.jpg' },
  { id: 'georgette-sarees', name: 'Georgette Sarees', image: '/images/image 56.png' },
  { id: 'handloom-sarees', name: 'Handloom Sarees', image: '/images/image 57.png' },
  { id: 'chanderi-collection', name: 'Chanderi Collection', image: '/images/image 52.png' },
  { id: 'designer-sarees', name: 'Designer Sarees', image: '/images/image 54.png' },
  { id: 'linen-sarees', name: 'Linen Sarees', image: '/images/image 58.png' }
];

export default function ShadesAndColors({ selectedColor, onSelectColor }) {
  return (
    <section id="shades-&-colors" style={{
      padding: '70px 4%',
      backgroundColor: 'var(--bg-cream)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* Section Badge */}
        <span style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '32px',
          color: 'var(--color-gold-dark)',
          display: 'block',
          marginBottom: '4px'
        }}>
          Luxury Saree Collection
        </span>

        {/* Section Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(26px, 3.5vw, 40px)',
          fontWeight: 500,
          color: 'var(--text-primary)',
          letterSpacing: '0.02em',
          marginBottom: '8px'
        }}>
          Crafted Traditions, Modern Elegance
        </h2>

        {/* Ornamental Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          margin: '0 auto 40px'
        }}>
          <div style={{ height: '1px', width: '70px', background: 'linear-gradient(90deg, transparent, var(--color-gold))' }}></div>
          <div style={{ color: 'var(--color-gold)', fontSize: '14px' }}>♦ ✦ ♦</div>
          <div style={{ height: '1px', width: '70px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }}></div>
        </div>

        {/* 6 Luxury Swatch Cards Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '18px'
        }} className="color-swatch-grid">
          {luxurySwatches.map((item) => {
            const isSelected = selectedColor === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onSelectColor(isSelected ? 'all' : item.id)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '210px',
                  boxShadow: isSelected ? '0 10px 25px rgba(90, 6, 37, 0.3)' : 'var(--shadow-sm)',
                  border: isSelected ? '3px solid var(--bg-burgundy)' : '1px solid rgba(197, 160, 89, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
                }}
                className="color-swatch-card"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                
                {/* Dark Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 15, 12, 0.88) 0%, rgba(20, 15, 12, 0.2) 60%, transparent 100%)'
                }}></div>

                {/* Swatch Title Label */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '10px',
                  right: '10px',
                  textAlign: 'center'
                }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    letterSpacing: '0.03em'
                  }}>
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .color-swatch-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 28px rgba(197, 160, 89, 0.3) !important;
        }
        .color-swatch-card:hover img {
          transform: scale(1.1);
        }
        @media (max-width: 992px) {
          .color-swatch-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 576px) {
          .color-swatch-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
