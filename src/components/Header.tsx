import React from 'react';

export const Header: React.FC = () => {
  return (
    <header style={{ 
      borderBottom: '1px solid var(--color-border)', 
      backgroundColor: 'var(--color-surface)',
      padding: 'var(--spacing-sm) 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--color-text-primary)' }}>
          Silent Signal
        </div>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          borderRadius: '50%', 
          backgroundColor: 'var(--color-border)',
          /* Abstract user avatar */
        }} />
      </div>
    </header>
  );
};
