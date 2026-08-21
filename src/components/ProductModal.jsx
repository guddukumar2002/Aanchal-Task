import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart, isWishlisted, onToggleWishlist }) {
  const [selectedSize, setSelectedSize] = useState('Unstitched');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        maxWidth: '900px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        border: '1px solid var(--color-gold)'
      }} className="animate-fade-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#F5EFE6',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '30px',
          padding: '36px'
        }} className="modal-grid">
          
          {/* Image Showcase */}
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            height: '460px',
            backgroundColor: '#FAF5ED',
            position: 'relative'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Details & Customization */}
          <div>
            <div style={{ display: 'inline-block', backgroundColor: 'var(--bg-burgundy)', color: '#FFF', fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '12px', marginBottom: '8px' }}>
              {product.discount}
            </div>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '28px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '8px'
            }}>
              {product.name}
            </h2>

            {/* Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#C5A059" color="#C5A059" />
              ))}
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginLeft: '4px' }}>
                {product.rating}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                ({product.reviews} verified reviews)
              </span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--bg-burgundy)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Rs. {product.price.toLocaleString('en-IN')}.00
              </span>
              <span style={{ fontSize: '15px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                Rs. {product.originalPrice.toLocaleString('en-IN')}.00
              </span>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Handcrafted pure silk saree featuring intricate traditional zari weave, finished with authentic tassels. Includes matching unstitched blouse piece.
            </p>

            {/* Blouse Options */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', color: 'var(--text-primary)' }}>
                Blouse Option:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['Unstitched', 'Custom Tailored (+Rs.990)'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedSize(opt)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      border: selectedSize === opt ? '2px solid var(--bg-burgundy)' : '1px solid #D9C8B4',
                      backgroundColor: selectedSize === opt ? 'var(--bg-burgundy)' : '#FFF',
                      color: selectedSize === opt ? '#FFF' : 'var(--text-primary)',
                      fontWeight: selectedSize === opt ? '600' : '400',
                      transition: 'all 0.2s'
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <label style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-primary)' }}>
                Quantity:
              </label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #D9C8B4', borderRadius: '6px' }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '6px 12px', fontSize: '16px' }}>-</button>
                <span style={{ padding: '6px 14px', fontSize: '14px', fontWeight: 600 }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '6px 12px', fontSize: '16px' }}>+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              <button
                onClick={() => {
                  onAddToCart(product, quantity, selectedSize);
                  onClose();
                }}
                style={{
                  flex: 1,
                  backgroundColor: 'var(--bg-burgundy)',
                  color: '#FFF',
                  padding: '14px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 20px rgba(90, 6, 37, 0.3)'
                }}
              >
                <ShoppingBag size={18} />
                <span>ADD TO SHOPPING BAG</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product.id)}
                style={{
                  padding: '14px',
                  borderRadius: '6px',
                  border: '1px solid #D9C8B4',
                  backgroundColor: isWishlisted ? 'var(--bg-cream)' : '#FFF',
                  color: isWishlisted ? '#E63946' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Heart size={20} fill={isWishlisted ? '#E63946' : 'none'} />
              </button>
            </div>

            {/* Guarantees */}
            <div style={{ borderTop: '1px solid #EFE6DA', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--color-gold)" />
                <span>100% Authentic Silk Mark Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Truck size={16} color="var(--color-gold)" />
                <span>Free Insured Express Delivery across India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RefreshCw size={16} color="var(--color-gold)" />
                <span>Hassle-Free 7-Day Exchange Guarantee</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .modal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
