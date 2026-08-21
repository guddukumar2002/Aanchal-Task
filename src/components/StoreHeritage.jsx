import React from 'react';

export default function StoreHeritage() {
  return (
    <section style={{
      padding: '80px 4%',
      backgroundColor: '#FFFFFF',
      color: 'var(--text-primary)'
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }} className="heritage-grid">

          {/* Left Showroom Interior Image */}
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(44, 34, 30, 0.08)',
            position: 'relative',
            height: '440px'
          }}>
            <img
              src="/images/image 50.png"
              alt="Aanchal Luxury Saree Showroom Interior"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Right Text Story Content */}
          <div style={{ paddingLeft: '10px' }}>
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '32px',
              color: 'var(--color-gold-dark)',
              display: 'block',
              marginBottom: '4px'
            }}>
              About Us
            </span>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(30px, 3.8vw, 44px)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '20px'
            }}>
              Weaving Tradition with Elegance
            </h2>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '14px',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: '18px'
            }}>
              At Aanchal, we celebrate the timeless beauty of Indian tradition through exquisitely crafted sarees. Our collections are thoughtfully curated to blend heritage craftsmanship with modern elegance, offering styles perfect for every occasion. From luxurious silks to graceful handloom weaves, every saree tells a story of culture, artistry, and sophistication.
            </p>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '14px',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: '32px'
            }}>
              Aanchal brings together tradition, elegance, and contemporary fashion through premium saree collections crafted with love and authenticity. We believe every woman deserves to feel graceful, confident, and beautifully connected to her roots.
            </p>

            {/* Dual Action Buttons */}
            <div style={{ display: 'flex', gap: '18px' }}>
              <button
                onClick={() => alert("Know More about Aanchal Heritage")}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-primary)',
                  border: '1px solid #161311',
                  padding: '12px 32px',
                  borderRadius: '2px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Know More
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('new-arrivals');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  border: '1px solid #000000',
                  padding: '12px 32px',
                  borderRadius: '2px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Explore Products +
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .heritage-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
