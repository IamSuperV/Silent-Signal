import React, { type ReactNode } from 'react';

interface DashboardProps {
    children?: ReactNode;
}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
    return (
        <main className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
            <section style={{
                padding: 'var(--spacing-lg) 0',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: 'var(--spacing-sm)',
                    letterSpacing: '-0.02em'
                }}>
                    Silent Signal
                </h1>
                <p className="text-muted" style={{ fontSize: '1.25rem' }}>
                    Detect burnout before it detects you.
                </p>
            </section>

            {/* Main Content Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: 'var(--spacing-md)',
                alignItems: 'start'
            }}>
                {children}
            </div>
        </main>
    );
};
