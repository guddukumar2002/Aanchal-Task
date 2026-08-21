import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, Heart } from 'lucide-react';

export default function Header({ cartCount, wishlistCount, onOpenCart, onOpenSearch, activeCategory, setActiveCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: 'var(--bg-cream)',
      borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 20px rgba(44, 34, 30, 0.04)'
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '14px 4%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none', color: 'var(--text-primary)' }}
          className="mobile-menu-btn"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left Navigation Links */}
        <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav-left">
          {['All Sarees', 'New Arrivals', 'Premium Collection', 'Categories'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory && setActiveCategory(item)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '13.5px',
                color: activeCategory === item ? 'var(--bg-burgundy)' : 'var(--text-primary)',
                fontWeight: activeCategory === item ? '600' : '400',
                letterSpacing: '0.02em',
                transition: 'var(--transition)',
                position: 'relative',
                paddingBottom: '2px',
                textDecoration: 'none'
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Center Brand Typography Logo matching Screenshot 2 */}
        <div style={{ textAlign: 'center', margin: '0 20px' }}>
          <a href="#" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '40px',
              fontWeight: 500,
              color: '#5A0625',
              letterSpacing: '0.03em',
              lineHeight: 1,
              margin: 0
            }}>
              Aanchal
            </h1>
            {/* Center line with diamond flourish matching screenshot 2 */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#C5A059',
              marginTop: '4px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#C5A059',
                transform: 'rotate(45deg)',
                position: 'absolute'
              }}></div>
            </div>
          </a>
        </div>

        {/* Right Navigation Links & Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }} className="desktop-nav-right">
            {['Occasions', 'Shades & Colors', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '13.5px',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.02em',
                  transition: 'var(--transition)',
                  textDecoration: 'none'
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action Icons matching Screenshot 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <button 
              onClick={onOpenSearch}
              aria-label="Search" 
              style={{ color: 'var(--text-primary)', transition: 'transform 0.2s', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
              title="Search Sarees"
            >
              <Search size={20} />
            </button>

            <button 
              onClick={onOpenCart} 
              aria-label="Wishlist"
              style={{ color: 'var(--text-primary)', position: 'relative', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
              title="Wishlist"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  backgroundColor: 'var(--color-gold)',
                  color: '#FFF',
                  fontSize: '10px',
                  fontWeight: '700',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {wishlistCount}
                </span>
              )}
            </button>

            <button 
              onClick={onOpenCart}
              aria-label="Shopping Cart" 
              style={{ color: 'var(--text-primary)', position: 'relative', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
              title="View Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  backgroundColor: 'var(--bg-burgundy)',
                  color: '#FFF',
                  fontSize: '10px',
                  fontWeight: '700',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              aria-label="Account" 
              style={{ color: 'var(--text-primary)', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
              title="My Account"
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav-left, .desktop-nav-right { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
