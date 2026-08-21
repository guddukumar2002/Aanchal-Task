import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Are the saree colors exactly the same as shown?', a: 'We try our best to display accurate colors, though slight variations may occur due to lighting and screen settings.' },
  { q: 'Are the saree colors exactly the same as shown?', a: 'We try our best to display accurate colors, though slight variations may occur due to lighting and screen settings.' },
  { q: 'Do you offer Cash on Delivery?', a: 'Yes, we offer Cash on Delivery for orders within India. COD charges may apply based on your location.' },
  { q: 'How can I contact customer support?', a: 'You can reach us at support@aanchal.com or call +91 98765 43210 during business hours (Mon–Sat, 10am–6pm).' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ padding: '80px 4%', backgroundColor: '#FFF' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '60px', alignItems: 'center' }} className="faq-grid">

        {/* LEFT: question mark image */}
        <div>
          <img src="/Frame 13.png" alt="FAQ" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
        </div>

        {/* RIGHT: heading + accordion */}
        <div>
          {/* Section heading on the right */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: '30px', color: '#8B6914', display: 'block', marginBottom: '4px' }}>FAQs</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, color: '#1A1A1A', letterSpacing: '0.01em', marginBottom: '10px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C5A059)' }}></div>
              <img src="/Group 7.png" alt="" style={{ height: '16px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
              <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C5A059, transparent)' }}></div>
            </div>
          </div>

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: '1px solid #EBEBEB', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  style={{ width: '100%', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', backgroundColor: '#FFF' }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', fontWeight: 500, color: '#1A1A1A', paddingRight: '16px' }}>{faq.q}</span>
                  <div style={{
                    flexShrink: 0, width: '30px', height: '30px', borderRadius: '50%',
                    backgroundColor: openIndex === i ? '#8B6914' : '#F0F0F0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s'
                  }}>
                    {openIndex === i
                      ? <ChevronDown size={15} color="#FFF" />
                      : <ChevronRight size={15} color="#888" />}
                  </div>
                </button>
                {openIndex === i && (
                  <div style={{ padding: '0 20px 18px', fontSize: '13px', color: '#666', lineHeight: 1.75 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .faq-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
