import React from 'react';

interface TrendChartProps {
    title: string;
    data: number[];
    color: string;
}

export const TrendChart: React.FC<TrendChartProps> = ({ title, data, color }) => {
    // Simple internal logic to scale data to SVG viewbox
    const width = 600;
    const height = 200;
    const max = Math.max(...data) * 1.2; // Add some headroom
    const min = 0;

    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((d - min) / (max - min)) * height;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{
                fontSize: '1rem',
                fontWeight: 500,
                marginBottom: 'var(--spacing-md)',
                color: 'var(--color-text-secondary)'
            }}>
                {title}
            </h3>
            <div style={{ flexGrow: 1, position: 'relative' }}>
                <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    {/* Grid lines (optional, keep minimal) */}
                    <line x1="0" y1={height} x2={width} y2={height} stroke="var(--color-border)" strokeWidth="1" />

                    {/* Trend Line using Catmull-Rom or similar smoothing could be better, but polyline is simple and honest for now. 
                For "smooth" look requested, we can use a simple cubic bezier approximation if needed, 
                but let's stick to clean straight lines or valid svg path smoothing. */}
                    <polyline
                        fill="none"
                        stroke={color}
                        strokeWidth="3"
                        points={points}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Area fill (optional, maybe too heavy? "Clean line charts" requested. Let's keep it line only for now.) */}
                </svg>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 'var(--spacing-sm)',
                color: 'var(--color-text-secondary)',
                fontSize: '0.875rem'
            }}>
                <span>14 Days Ago</span>
                <span>Today</span>
            </div>
        </div>
    );
};
