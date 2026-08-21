import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';

const fullCatalog = [
  // Row 1 (From Figma Screenshot 3)
  {
    id: 201,
    name: 'Pramodutha Tissue Silk Saree',
    price: 3250,
    originalPrice: 4550,
    discount: '28% OFF',
    rating: 4.9,
    reviews: 38,
    image: '/images/image 52.png',
    category: 'kanjivaram',
    fabric: 'soft-silks'
  },
  {
    id: 202,
    name: 'Vibhava Tissue Silk Saree',
    price: 9850,
    originalPrice: 10550,
    discount: '7% OFF',
    rating: 4.8,
    reviews: 24,
    image: '/images/image 54.png',
    category: 'daily',
    fabric: 'organza'
  },
  {
    id: 203,
    name: 'Journey of Soul Silver Zari Tissue Saree',
    price: 4950,
    originalPrice: 6790,
    discount: '27% OFF',
    rating: 4.9,
    reviews: 46,
    image: '/images/image 53.jpg',
    category: 'daily',
    fabric: 'silk-cotton'
  },
  {
    id: 204,
    name: 'Joy of Life Silk Tissue Saree',
    price: 8750,
    originalPrice: 11999,
    discount: '27% OFF',
    rating: 5.0,
    reviews: 19,
    image: '/images/image 50.png',
    category: 'bengoli',
    fabric: 'chanderi'
  },
  // Row 2 (From Figma Screenshot 4)
  {
    id: 1,
    name: 'Aftaab Jamawar Banarasi Silk Saree',
    price: 3250,
    originalPrice: 4550,
    discount: '28% OFF',
    rating: 4.9,
    reviews: 42,
    image: '/images/Frame 13.png',
    category: 'banarasi',
    fabric: 'banarasi-silk'
  },
  {
    id: 2,
    name: 'Kongposh Jamawar Banarasi Silk Saree',
    price: 9850,
    originalPrice: 10550,
    discount: '7% OFF',
    rating: 5.0,
    reviews: 28,
    image: '/images/image 57.png',
    category: 'banarasi',
    fabric: 'pure-zari-kanchipuram'
  },
  {
    id: 3,
    name: 'Satara Pure Banarasi Silk Saree',
    price: 4950,
    originalPrice: 6790,
    discount: '27% OFF',
    rating: 4.8,
    reviews: 35,
    image: '/images/image 56.png',
    category: 'banarasi',
    fabric: 'paithani'
  },
  {
    id: 4,
    name: 'Naila Pure Banarasi Silk Saree',
    price: 8750,
    originalPrice: 11999,
    discount: '27% OFF',
    rating: 5.0,
    reviews: 54,
    image: '/images/image 58.png',
    category: 'bridal',
    fabric: 'banarasi-katan-silk'
  },
  // Row 3 (From Figma Screenshot 4 lower half)
  {
    id: 301,
    name: 'Spring Blossom Mashru Banarasi Silk Saree',
    price: 3250,
    originalPrice: 4550,
    discount: '28% OFF',
    rating: 4.9,
    reviews: 31,
    image: '/images/image 17.png',
    category: 'bridal',
    fabric: 'kanchipuram-tissue-silk'
  },
  {
    id: 302,
    name: 'Sky Kiss Mashru Banarasi Silk Saree',
    price: 9850,
    originalPrice: 10550,
    discount: '7% OFF',
    rating: 5.0,
    reviews: 29,
    image: '/images/image 19.png',
    category: 'kanjivaram',
    fabric: 'pure-zari-kanchipuram'
  },
  {
    id: 303,
    name: 'Towards Temple Mashru Banarasi Silk Saree',
    price: 4950,
    originalPrice: 6790,
    discount: '27% OFF',
    rating: 4.8,
    reviews: 21,
    image: '/images/image 18.png',
    category: 'bridal',
    fabric: 'brocade-kanchipuram'
  },
  {
    id: 304,
    name: 'Wedding Wild Mashru Banarasi Silk Saree',
    price: 8750,
    originalPrice: 11999,
    discount: '27% OFF',
    rating: 4.9,
    reviews: 17,
    image: '/images/image 21.png',
    category: 'sambalpuri',
    fabric: 'bangalore-silk'
  }
];

export default function NewArrivals({
  selectedCategory,
  selectedFabric,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProducts = fullCatalog.filter(item => {
    if (selectedCategory && selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (selectedFabric && selectedFabric !== 'all' && item.fabric !== selectedFabric) return false;
    return true;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="new-arrivals" style={{
      padding: '80px 4%',
      backgroundColor: '#FFFFFF',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* Section Badge */}
        <span style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '34px',
          color: 'var(--color-gold-dark)',
          display: 'block',
          marginBottom: '4px'
        }}>
          Trending Sarees
        </span>

        {/* Section Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 3.5vw, 42px)',
          fontWeight: 500,
          color: 'var(--text-primary)',
          letterSpacing: '0.02em',
          marginBottom: '8px'
        }}>
          Timeless Elegance in Every Drape
        </h2>

        {/* Ornamental Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          margin: '0 auto 48px'
        }}>
          <div style={{ height: '1px', width: '70px', background: 'linear-gradient(90deg, transparent, var(--color-gold))' }}></div>
          <div style={{ color: 'var(--color-gold)', fontSize: '14px' }}>♦ ✦ ♦</div>
          <div style={{ height: '1px', width: '70px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }}></div>
        </div>

        {/* Product Cards Grid (4 columns) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '28px',
          marginBottom: '48px'
        }} className="product-grid">
          {displayedProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                style={{
                  textAlign: 'left',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(44, 34, 30, 0.04)',
                  border: '1px solid rgba(197, 160, 89, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  position: 'relative'
                }}
                className="product-card"
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
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Heart size={18} fill={isWishlisted ? '#E63946' : 'none'} />
                </button>

                {/* Image Container */}
                <div style={{
                  width: '100%',
                  height: '420px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#F5EFE6',
                  borderRadius: '16px 16px 0 0'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                    className="product-img"
                  />

                  {/* Overlay Quick Action Bar */}
                  <div style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    right: '14px',
                    display: 'flex',
                    gap: '10px',
                    opacity: 0,
                    transform: 'translateY(10px)',
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
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '0.08em',
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
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div style={{ padding: '16px 12px 18px' }}>
                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {product.name}
                  </h3>

                  {/* Price */}
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

        {/* Explore More + Button matching Screenshot 4 */}
        <button
          onClick={() => alert("Loading more handcrafted saree designs...")}
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            padding: '12px 48px',
            borderRadius: '2px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '13px',
            letterSpacing: '0.04em',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-burgundy)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
          }}
        >
          Explore More +
        </button>

      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(44, 34, 30, 0.1) !important;
          border-color: var(--color-gold) !important;
        }
        .product-card:hover .product-img {
          transform: scale(1.06);
        }
        .product-card:hover .quick-action-bar {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 1200px) {
          .product-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .product-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .product-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
