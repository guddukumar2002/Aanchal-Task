import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const weddingCollections = [
  {
    id: 'cocktail',
    name: 'Cocktail Conversations',
    subtitle: 'Midnight Blue & Metallic Sarees',
    image: '/images/image 52.png'
  },
  {
    id: 'engagement',
    name: 'Engagement Ensemble',
    subtitle: 'Pastels & Aqua Zari Weaves',
    image: '/images/image 54.png'
  },
  {
    id: 'haldi',
    name: 'Handpicked for Haldi',
    subtitle: 'Sun-Kissed Yellow & Gold Silks',
    image: '/images/image 53.jpg'
  },
  {
    id: 'mehendi',
    name: 'Mehendi Muse',
    subtitle: 'Emerald Green & Mint Weaves',
    image: '/images/image 56.png'
  },
  {
    id: 'wedding-vows',
    name: 'Wedding Vows',
    subtitle: 'Bridal Crimson Banarasi Silks',
    image: '/images/image 57.png'
  },
  {
    id: 'reception',
    name: 'Reception Ready',
    subtitle: 'Royal Grey & Silver Brocades',
    image: '/images/image 58.png'
  }
];

export default function WeddingSeason({ onSelectCollection }) {
  return (
    <section id="occasions" style={{
      backgroundColor: 'var(--bg-burgundy)',
      backgroundImage: `radial-gradient(circle at 10% 20%, #700930 0%, #3F0318 100%)`,
      color: '#FFFFFF',
      padding: '75px 4%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Gold Glow Background Accents */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          gap: '40px',
          alignItems: 'start'
        }} className="wedding-section-grid">

          {/* Left Title Column */}
          <div style={{ paddingRight: '20px' }}>
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '36px',
              color: 'var(--color-gold-light)',
              display: 'block',
              marginBottom: '2px'
            }}>
              Weaves for the
            </span>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(36px, 4.5vw, 54px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '0.06em',
              color: '#FFFFFF',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}>
              WEDDING <br /> SEASON
            </h2>

            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}>
              Curated royal ensembles handcrafted for every auspicious ritual, from vibrant haldi to opulent receptions.
            </p>

            <button
              onClick={() => onSelectCollection('wedding')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-gold-light)',
                borderRadius: '4px',
                fontSize: '13px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                e.currentTarget.style.color = 'var(--bg-burgundy)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-gold-light)';
              }}
            >
              <span>Explore All Rituals</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Right Grid of 6 Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }} className="wedding-cards-grid">
            {weddingCollections.map((col) => (
              <div
                key={col.id}
                onClick={() => onSelectCollection(col.id)}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '270px',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
                }}
                className="wedding-card"
              >
                <img
                  src={col.image}
                  alt={col.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                />
                
                {/* Gradient Shadow Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(50, 3, 20, 0.95) 0%, rgba(50, 3, 20, 0.3) 50%, transparent 100%)'
                }}></div>

                {/* Card Footer Text */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px',
                  textAlign: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    letterSpacing: '0.03em',
                    marginBottom: '2px'
                  }}>
                    {col.name}
                  </h3>
                  <span style={{
                    fontSize: '11px',
                    color: 'var(--color-gold-light)',
                    letterSpacing: '0.04em',
                    fontWeight: 300
                  }}>
                    {col.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .wedding-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
        }
        .wedding-card:hover img {
          transform: scale(1.08);
        }
        @media (max-width: 1024px) {
          .wedding-section-grid {
            grid-template-columns: 1fr !important;
          }
          .wedding-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .wedding-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
