import React from 'react';

interface InsightCardProps {
    title: string;
    description: string;
}

export const InsightCard: React.FC<InsightCardProps> = ({ title, description }) => {
    return (
        <div className="card">
            <h4 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-xs)'
            }}>
                {title}
            </h4>
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                {description}
            </p>
        </div>
    );
};
