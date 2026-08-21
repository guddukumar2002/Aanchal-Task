import React from 'react';
import { ShieldCheck, Truck, Sparkles, Award } from 'lucide-react';

export default function CraftsmanshipStory() {
  const perks = [
    {
      icon: <Award size={28} color="var(--color-gold)" />,
      title: "100% Authentic Silk Mark",
      desc: "Every drape comes certified with pure zari and genuine Silk Mark guarantee."
    },
    {
      icon: <Sparkles size={28} color="var(--color-gold)" />,
      title: "Master Weaver Heritage",
      desc: "Handcrafted over 120 hours by 4th-generation artisan weavers in Varanasi & Kanchipuram."
    },
    {
      icon: <ShieldCheck size={28} color="var(--color-gold)" />,
      title: "Custom Blouse Stitching",
      desc: "Bespoke tailoring with perfect fits delivered straight to your doorstep."
    },
    {
      icon: <Truck size={28} color="var(--color-gold)" />,
      title: "Insured Global Shipping",
      desc: "Complimentary worldwide express shipping with real-time tracking."
    }
  ];

  return (
    <section style={{
      padding: '70px 4%',
      backgroundColor: '#FAF4EB',
      borderTop: '1px solid rgba(197, 160, 89, 0.25)',
      borderBottom: '1px solid rgba(197, 160, 89, 0.25)'
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px'
        }} className="perks-grid">
          {perks.map((perk, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '24px 16px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid rgba(197, 160, 89, 0.2)',
              boxShadow: '0 4px 16px rgba(44, 34, 30, 0.04)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(197, 160, 89, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                {perk.icon}
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '8px'
              }}>
                {perk.title}
              </h3>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: 1.5
              }}>
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .perks-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
          .perks-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
