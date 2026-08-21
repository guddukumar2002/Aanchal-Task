import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const faqs = [
  {
    q: 'Are the saree colors exactly the same as shown?',
    a: 'We try our best to display accurate colors, though slight variations may occur due to lighting and screen settings.'
  },
  {
    q: 'Do you offer Cash on Delivery?',
    a: 'Yes, Cash on Delivery is available across most pincodes in India for orders up to Rs. 15,000.'
  },
  {
    q: 'How can I contact customer support?',
    a: 'You can reach our dedicated support team via WhatsApp at +91 98765 43210 or email us at support@aanchal.com.'
  },
  {
    q: 'What is your return and exchange policy?',
    a: 'We offer an easy 7-day return and exchange policy on all unstitched sarees with original tags intact.'
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section style={{
      padding: '70px 4%',
      backgroundColor: '#FFFFFF'
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '460px 1fr',
          gap: '60px',
          alignItems: 'center'
        }} className="faq-grid">

          {/* Left Decorative 3D Question Image */}
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/image 48.png"
              alt="FAQ Question Marks"
              style={{
                width: '100%',
                maxHeight: '340px',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>

          {/* Right FAQ Accordion */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: '32px',
                color: 'var(--color-gold-dark)',
                display: 'block',
                marginBottom: '4px'
              }}>
                FAQ's
              </span>

              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '0.02em',
                marginBottom: '8px'
              }}>
                Frequently Asked Questions
              </h2>

              {/* Ornamental Divider */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                margin: '0 auto'
              }}>
                <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, var(--color-gold))' }}></div>
                <div style={{ color: 'var(--color-gold)', fontSize: '13px' }}>♦ ✦ ♦</div>
                <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, index) => {
                const isOpen = openIdx === index;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid #EAEAEF',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : index)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '15px',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        cursor: 'pointer'
                      }}
                    >
                      <span>{faq.q}</span>
                      
                      {/* Circle button icon matching Figma Screenshot 1 */}
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? '#986B30' : '#EBF0F5',
                        color: isOpen ? '#FFFFFF' : '#7D8C99',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease'
                      }}>
                        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 24px 22px',
                        fontSize: '13.5px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.65,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
