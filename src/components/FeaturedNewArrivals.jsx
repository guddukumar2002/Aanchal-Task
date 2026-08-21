import React from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Aftaab Jamawar Banarasi Silk Saree',
    price: 3250,
    originalPrice: 4550,
    discount: '28% OFF',
    image: '/images/Frame 13.png'
  },
  {
    id: 2,
    name: 'Kongposh Jamawar Banarasi Silk Saree',
    price: 9850,
    originalPrice: 10550,
    discount: '7% OFF',
    image: '/images/image 57.png'
  },
  {
    id: 3,
    name: 'Satara Pure Banarasi Silk Saree',
    price: 4950,
    originalPrice: 6790,
    discount: '27% OFF',
    image: '/images/image 56.png'
  },
  {
    id: 4,
    name: 'Naila Pure Banarasi Silk Saree',
    price: 8750,
    originalPrice: 11999,
    discount: '27% OFF',
    image: '/images/image 58.png'
  }
];

export default function FeaturedNewArrivals({ wishlist, onToggleWishlist, onAddToCart, onQuickView }) {
  return (
    <section style={{
      padding: '70px 4%',
      backgroundColor: '#FFFFFF',
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
          New Arrivals
        </span>

        {/* Section Heading matching Figma Screenshot */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 3.5vw, 42px)',
          fontWeight: 500,
          color: 'var(--text-primary)',
          letterSpacing: '0.02em',
          marginBottom: '8px'
        }}>
          Explore What’s New This Season
        </h2>

        {/* Ornamental Flourish Divider */}
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

        {/* 4 Cards Row matching Figma Screenshot */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px'
        }} className="featured-cards-grid">
          {featuredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                style={{
                  textAlign: 'left',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                className="featured-card"
              >
                {/* Wishlist Button */}
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  aria-label="Wishlist"
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isWishlisted ? '#E63946' : 'var(--text-primary)',
                    zIndex: 3,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Heart size={18} fill={isWishlisted ? '#E63946' : 'none'} />
                </button>

                {/* Card Image Container */}
                <div style={{
                  width: '100%',
                  height: '420px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#F5EFE6',
                  marginBottom: '12px'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="featured-img"
                  />

                  {/* Overlay Quick Action Bar */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    display: 'flex',
                    gap: '8px',
                    opacity: 0,
                    transform: 'translateY(8px)',
                    transition: 'all 0.3s ease'
                  }}
                  className="quick-action-bar"
                  >
                    <button
                      onClick={() => onAddToCart(product)}
                      style={{
                        flex: 1,
                        backgroundColor: 'var(--bg-burgundy)',
                        color: '#FFF',
                        padding: '10px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <ShoppingBag size={14} />
                      <span>ADD TO CART</span>
                    </button>
                    <button
                      onClick={() => onQuickView(product)}
                      aria-label="Quick View"
                      style={{
                        backgroundColor: '#FFF',
                        color: 'var(--text-primary)',
                        padding: '10px',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>

                {/* Card Title & Price */}
                <div>
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '13.5px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {product.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', fontSize: '12.5px' }}>
                    <span style={{
                      color: '#8C8C8C',
                      textDecoration: 'line-through'
                    }}>
                      Rs. {product.originalPrice.toLocaleString('en-IN')}.00
                    </span>
                    <span style={{
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}>
                      Rs. {product.price.toLocaleString('en-IN')}.00
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .featured-card:hover .featured-img {
          transform: scale(1.05);
        }
        .featured-card:hover .quick-action-bar {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 992px) {
          .featured-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
          .featured-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
