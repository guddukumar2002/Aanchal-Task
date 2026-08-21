import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSearchSubmit }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularSearches = [
    'Banarasi Silk', 'Kanchipuram Zari', 'Haldi Yellow Saree', 'Bridal Red', 'Organza Weave', 'Pink Chanderi'
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 350,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '80px',
      paddingLeft: '20px',
      paddingRight: '20px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        maxWidth: '680px',
        width: '100%',
        padding: '30px',
        position: 'relative',
        boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
        border: '1px solid var(--color-gold)'
      }} className="animate-fade-in">
        
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: 'var(--text-muted)'
          }}
        >
          <X size={20} />
        </button>

        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '24px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Search Aanchal Heritage Collections
        </h3>

        <form onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) {
            onSearchSubmit(query);
            onClose();
          }
        }} style={{ position: 'relative', marginBottom: '24px' }}>
          <Search size={22} color="var(--color-gold)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by silk type, color, occasion (e.g. Banarasi, Haldi, Red)..."
            autoFocus
            style={{
              width: '100%',
              padding: '16px 50px 16px 48px',
              borderRadius: '8px',
              border: '2px solid var(--color-gold-light)',
              fontSize: '15px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              outline: 'none',
              backgroundColor: '#FAF5ED'
            }}
          />
          <button
            type="submit"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--bg-burgundy)',
              color: '#FFF',
              padding: '8px 12px',
              borderRadius: '6px'
            }}
          >
            <ArrowRight size={16} />
          </button>
        </form>

        <div>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '10px' }}>
            Popular Search Keywords:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  onSearchSubmit(term);
                  onClose();
                }}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  backgroundColor: '#F5EFE6',
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-burgundy)';
                  e.currentTarget.style.color = '#FFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F5EFE6';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
