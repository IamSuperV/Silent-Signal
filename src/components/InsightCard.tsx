import React, { useState } from 'react';

interface InsightCardProps {
    title: string;
    description: string;
    details?: {
        change: string;
        since: string;
        baseline: string;
    };
}

export const InsightCard: React.FC<InsightCardProps> = ({ title, description, details }) => {
    const [isExpanded, setIsExpanded] = useState(false);

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
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: isExpanded ? 'var(--spacing-sm)' : 0 }}>
                {description}
            </p>

            {details && (
                <>
                    {!isExpanded && (
                        <button
                            onClick={() => setIsExpanded(true)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-accent)',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                padding: 0,
                                marginTop: 'var(--spacing-xs)',
                                textDecoration: 'underline'
                            }}
                        >
                            View details
                        </button>
                    )}

                    {isExpanded && (
                        <div style={{
                            marginTop: 'var(--spacing-sm)',
                            paddingTop: 'var(--spacing-sm)',
                            borderTop: '1px solid var(--color-border)',
                            fontSize: '0.85rem',
                            color: 'var(--color-text-secondary)'
                        }}>
                            <div style={{ marginBottom: '4px' }}><strong>Changed:</strong> {details.change}</div>
                            <div style={{ marginBottom: '4px' }}><strong>Since:</strong> {details.since}</div>
                            <div><strong>Baseline:</strong> {details.baseline}</div>

                            <button
                                onClick={() => setIsExpanded(false)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--color-text-secondary)',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    padding: 0,
                                    marginTop: 'var(--spacing-sm)',
                                    opacity: 0.7
                                }}
                            >
                                Hide details
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
