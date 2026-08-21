import React from 'react';

const fabrics = [
  { id: 'pure-zari-kanchipuram', name: 'Pure Zari Kanchipuram', image: '/images/image 21.png' },
  { id: 'soft-silks', name: 'Soft Silks', image: '/images/image 22.png' },
  { id: 'crepe', name: 'Crepe', image: '/images/image 23.png' },
  { id: 'organza', name: 'Organza', image: '/images/image 24.png' },
  { id: 'banarasi-silk', name: 'Banarasi Silk', image: '/images/image 25.png' },
  { id: 'tussar', name: 'Tussar', image: '/images/image 26.png' },
  { id: 'ikats', name: 'Ikats', image: '/images/image 27.png' },
  { id: 'silk-cotton', name: 'Silk Cotton', image: '/images/image 28.png' },
  { id: 'cotton', name: 'Cotton', image: '/images/image 29.png' },
  { id: 'paithani', name: 'Paithani', image: '/images/image 30.jpg' },
  { id: 'chanderi', name: 'Chanderi', image: '/images/image 31.png' },
  { id: 'banarasi-katan-silk', name: 'Banarasi Katan Silk', image: '/images/image 32.png' },
  { id: 'kanchi-half-fine', name: 'Kanchi Half Fine', image: '/images/image 33.png' },
  { id: 'georgette', name: 'Georgette', image: '/images/image 34.png' },
  { id: 'chiffon', name: 'Chiffon', image: '/images/image 35.png' },
  { id: 'kanchipuram-tissue-silk', name: 'Kanchipuram Tissue Silk', image: '/images/image 36.png' },
  { id: 'bangalore-silk', name: 'Bangalore Silk', image: '/images/image 37.png' },
  { id: 'brocade-kanchipuram', name: 'Brocade Kanchipuram', image: '/images/image 38.png' }
];

export default function ShopByFabric({ selectedFabric, onSelectFabric }) {
  return (
    <section id="shades-&-colors" style={{
      padding: '60px 4%',
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
          Shop by Fabric
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
          Traditional Weaves Collection
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

        {/* 18 Fabric Cards Grid (6 columns on desktop matching exact Figma order) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '20px'
        }} className="fabric-grid">
          {fabrics.map((item) => {
            const isSelected = selectedFabric === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onSelectFabric(isSelected ? 'all' : item.id)}
                style={{
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'var(--transition)'
                }}
              >
                {/* Square Card Image */}
                <div style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '8px',
                  boxShadow: isSelected ? '0 6px 20px rgba(90, 6, 37, 0.3)' : 'var(--shadow-sm)',
                  border: isSelected ? '2px solid var(--bg-burgundy)' : '1px solid rgba(197, 160, 89, 0.25)',
                  backgroundColor: '#FFF'
                }}
                className="fabric-card"
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
                </div>

                {/* Fabric Title */}
                <h3 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '12px',
                  fontWeight: isSelected ? '700' : '400',
                  color: isSelected ? 'var(--bg-burgundy)' : 'var(--text-muted)',
                  lineHeight: 1.3
                }}>
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .fabric-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-gold) !important;
          box-shadow: 0 8px 24px rgba(197, 160, 89, 0.25) !important;
        }
        .fabric-card:hover img {
          transform: scale(1.08);
        }
        @media (max-width: 1200px) {
          .fabric-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .fabric-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .fabric-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
