import React from 'react';

const categories = [
  {
    id: 'banarasi',
    name: 'Banarasi',
    image: '/images/image 18.png'
  },
  {
    id: 'kanjivaram',
    name: 'Kanjivaram',
    image: '/images/image 19.png'
  },
  {
    id: 'bengoli',
    name: 'Bengoli',
    image: '/images/image 20.png'
  },
  {
    id: 'sambalpuri',
    name: 'Sambalpuri',
    image: '/images/image 17.png'
  },
  {
    id: 'bridal',
    name: 'Bridal Sarees',
    image: '/images/image 21.png'
  },
  {
    id: 'daily',
    name: 'Daily Wear',
    image: '/images/image 58.png'
  }
];

export default function ShopByCategory({ selectedCategory, onSelectCategory }) {
  return (
    <section id="categories" style={{
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
          Shop by Category
        </span>

        {/* Section Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(26px, 3.5vw, 42px)',
          fontWeight: 500,
          color: 'var(--text-primary)',
          letterSpacing: '0.02em',
          marginBottom: '8px'
        }}>
          A Century of Craft. A New Way to Wear Tradition
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

        {/* Categories Circle Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'start'
        }}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <div 
                key={cat.id} 
                onClick={() => onSelectCategory(cat.id === selectedCategory ? 'all' : cat.id)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'var(--transition)'
                }}
              >
                {/* Circle Frame */}
                <div style={{
                  width: '135px',
                  height: '135px',
                  borderRadius: '50%',
                  padding: '4px',
                  border: isSelected ? '2.5px solid var(--bg-burgundy)' : '2px solid var(--color-gold-light)',
                  boxShadow: isSelected ? '0 8px 24px rgba(90, 6, 37, 0.25)' : 'var(--shadow-sm)',
                  backgroundColor: '#FFF',
                  transition: 'all 0.3s ease',
                  marginBottom: '12px',
                  position: 'relative'
                }}
                className="category-circle"
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={cat.image} 
                      alt={cat.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Label */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '18px',
                  fontWeight: isSelected ? '700' : '500',
                  color: isSelected ? 'var(--bg-burgundy)' : 'var(--text-primary)',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s ease'
                }}>
                  {cat.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .category-circle:hover {
          transform: translateY(-6px);
          border-color: var(--color-gold) !important;
          box-shadow: 0 10px 25px rgba(197, 160, 89, 0.3) !important;
        }
        .category-circle:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
