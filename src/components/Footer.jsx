import React from 'react';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#FAF4EA',
      color: 'var(--text-primary)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Scalloped White Lace Top Border Pattern matching Screenshot 1 */}
      <div style={{
        height: '24px',
        width: '100%',
        backgroundColor: '#FFFFFF',
        backgroundImage: `radial-gradient(circle at 12px 0, #FAF4EA 12px, transparent 13px)`,
        backgroundSize: '24px 24px',
        backgroundRepeat: 'repeat-x'
      }}></div>

      {/* Warm Gold Mandala Background Watermark matching Image 1 */}
      <div style={{
        position: 'absolute',
        bottom: '-60px',
        left: '46%',
        transform: 'translateX(-50%)',
        width: '620px',
        height: '620px',
        opacity: 0.12,
        filter: 'invert(0.65) sepia(1) saturate(3) hue-rotate(15deg)',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <img
          src="/images/mandala.png"
          alt="Gold Mandala Watermark Pattern"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '50px 4% 30px', position: 'relative', zIndex: 1 }}>
        
        {/* Top Header Row in Footer: Brand Emblem Logo Left, Stay Connected Right */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '50px',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          
          {/* Ornate Emblem Logo Image matching Screenshot 1 */}
          <div>
            <a href="#" style={{ display: 'inline-block' }}>
              <img 
                src="/images/logo.png" 
                alt="Aanchal Sarees That Tell Stories" 
                style={{ height: '140px', width: 'auto', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextSibling) e.currentTarget.nextSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', color: 'var(--bg-burgundy)', fontWeight: 600 }}>
                  Aanchal
                </h2>
                <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-dark)' }}>
                  SAREES THAT TELL STORIES
                </span>
              </div>
            </a>
          </div>

          {/* Stay Connected Newsletter Box matching Screenshot 1 */}
          <div style={{ maxWidth: '440px', width: '100%' }}>
            <h3 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '6px'
            }}>
              Stay Connected
            </h3>

            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
              Subscribe to get notified about product launches, special offers and company news.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '30px',
              padding: '6px 8px 6px 20px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              border: '1px solid #EAEAEF'
            }}>
              <input
                type="email"
                placeholder="Enter you email address..."
                required
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '13px',
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)'
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                style={{
                  backgroundColor: 'transparent',
                  color: '#161311',
                  border: 'none',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* 5 Column Footer Navigation Menu */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '30px',
          paddingTop: '36px',
          borderTop: '1px solid rgba(197, 160, 89, 0.25)',
          marginBottom: '40px'
        }} className="footer-links-grid">

          {/* Col 1: Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
              {['All Sarees', 'New Arrivals', 'Premium Collection', 'Occasions', 'Shades & Colors'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: 'inherit', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-burgundy)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: All Categories */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              All Categories
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
              {['Banarasi Sarees', 'Kanjivaram Sarees', 'Bengoli Sarees', 'Sambalpuri Sarees', 'Bridal Sarees', 'Daily Wear Sarees'].map((item, idx) => (
                <li key={idx}>
                  <a href="#categories" style={{ color: 'inherit', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-burgundy)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: About Aanchal */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              About Aanchal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
              {['Home', 'About Aanchal', 'Blogs by Aanchal', 'FAQs', 'Contact us', 'Support'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" style={{ color: 'inherit', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-burgundy)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Support Links */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              Support Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
              {['Privacy Policy', 'Shipping Policy', 'Refund Policy', 'Return Policy', 'Terms & Conditions'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" style={{ color: 'inherit', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--bg-burgundy)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              <div>+91 98765 43210</div>
              <div>support@aanchal.com</div>
              <div>13b Shcheme 78, Vijay Nagar, Indore, India - 452010</div>
            </div>
          </div>

        </div>

        {/* Social Media Circular Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          {[
            { icon: 'f', label: 'Facebook' },
            { icon: '📷', label: 'Instagram' },
            { icon: '📌', label: 'Pinterest' },
            { icon: '▶', label: 'YouTube' },
            { icon: '💬', label: 'WhatsApp' },
            { icon: '✉', label: 'Mail' }
          ].map((social, i) => (
            <a
              key={i}
              href="#"
              aria-label={social.label}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                color: '#A81C51',
                border: '1px solid #F0D0DC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Bottom Copyright & Payment Method Bar */}
      <div style={{
        borderTop: '1px solid rgba(197, 160, 89, 0.25)',
        padding: '18px 4%',
        fontSize: '12px',
        color: 'var(--text-muted)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1440px',
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: '12px',
        position: 'relative',
        zIndex: 1
      }}>
        <div>
          © 2026 Aanchal Company Limited. All Rights Reserved.
        </div>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <span style={{ fontWeight: 800, color: '#1A1F71', fontSize: '13px' }}>VISA</span>
          <span style={{ fontWeight: 700, color: '#EB001B', fontSize: '12px' }}>mastercard</span>
          <span style={{ fontWeight: 700, color: '#008325', fontSize: '12px' }}>RuPay▶</span>
          <span style={{ fontWeight: 600, color: '#3A9D6D', fontSize: '12px' }}>snapmint</span>
          <span style={{ fontWeight: 700, color: '#003087', fontSize: '12px' }}>PayPal</span>
        </div>
      </div>
    </footer>
  );
}
