import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      backgroundColor: 'var(--bg-dark-bar)',
      color: '#E0E0E0',
      fontSize: '12px',
      padding: '7px 4%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D1D1D1', transition: 'color 0.2s' }}>
          <Phone size={13} color="#C5A059" />
          <span>+91 98765 43210</span>
        </a>
        <a href="mailto:support@aanchal.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D1D1D1', transition: 'color 0.2s' }}>
          <Mail size={13} color="#C5A059" />
          <span>support@aanchal.com</span>
        </a>
      </div>
      <div style={{ letterSpacing: '0.02em', fontWeight: 300, color: '#C8C8C8' }}>
        At Aanchal, every saree reflects the beauty of culture, luxury, and timeless fashion.
      </div>
    </div>
  );
}
