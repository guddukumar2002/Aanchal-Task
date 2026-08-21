import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 10000;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 300,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: '440px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.2)',
        position: 'relative'
      }} className="animate-fade-in">
        
        {/* Cart Drawer Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #EFE6DA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--bg-cream)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} color="var(--bg-burgundy)" />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '22px',
              fontWeight: 600,
              color: 'var(--text-primary)'
            }}>
              Your Shopping Bag ({cartItems.length})
            </h2>
          </div>
          <button onClick={onClose} style={{ color: 'var(--text-primary)', padding: '4px' }}>
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{ backgroundColor: '#FAF5ED', padding: '12px 24px', borderBottom: '1px solid #EFE6DA' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
            {subtotal >= freeShippingThreshold ? (
              <span style={{ color: '#2A9D8F', fontWeight: 600 }}>🎉 You have unlocked Free Express Shipping!</span>
            ) : (
              <span>Add <strong>Rs. {(freeShippingThreshold - subtotal).toLocaleString('en-IN')}.00</strong> more for Free Shipping</span>
            )}
          </div>
          <div style={{ width: '100%', height: '5px', backgroundColor: '#E0D4C5', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              backgroundColor: subtotal >= freeShippingThreshold ? '#2A9D8F' : 'var(--color-gold)',
              transition: 'width 0.4s ease'
            }}></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <ShoppingBag size={48} color="#D9C8B4" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                Your Shopping Bag is Empty
              </h3>
              <p style={{ fontSize: '13px', marginBottom: '24px' }}>
                Explore our exquisite Banarasi & Kanchipuram collections to fill your bag.
              </p>
              <button
                onClick={onClose}
                style={{
                  backgroundColor: 'var(--bg-burgundy)',
                  color: '#FFF',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  letterSpacing: '0.08em'
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '14px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #F0E6DA'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '75px',
                      height: '95px',
                      objectFit: 'cover',
                      borderRadius: '6px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      lineHeight: 1.2,
                      marginBottom: '4px'
                    }}>
                      {item.name}
                    </h4>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Blouse: {item.blouse || 'Unstitched'}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--bg-burgundy)', marginBottom: '8px' }}>
                      Rs. {item.price.toLocaleString('en-IN')}.00
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #D9C8B4', borderRadius: '4px' }}>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} style={{ padding: '2px 8px' }}>-</button>
                        <span style={{ padding: '2px 8px', fontSize: '12px', fontWeight: 600 }}>{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} style={{ padding: '2px 8px' }}>+</button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id)} style={{ color: '#E63946', padding: '4px' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Subtotal & Checkout */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '20px 24px',
            borderTop: '1px solid #EFE6DA',
            backgroundColor: 'var(--bg-cream)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <span>Subtotal</span>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Rs. {subtotal.toLocaleString('en-IN')}.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '16px', fontWeight: 700, color: 'var(--bg-burgundy)' }}>
              <span>Total Amount</span>
              <span>Rs. {subtotal.toLocaleString('en-IN')}.00</span>
            </div>

            <button
              onClick={() => alert("Proceeding to Secure Checkout...")}
              style={{
                width: '100%',
                backgroundColor: 'var(--bg-burgundy)',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: '6px',
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(90, 6, 37, 0.3)'
              }}
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
