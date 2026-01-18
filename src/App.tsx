import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TrendChart } from './components/TrendChart';
import { InsightCard } from './components/InsightCard';

type TimeRange = '7' | '14' | '30';

function App() {
  const [range, setRange] = useState<TimeRange>('14');

  // Mock Data - Multi-range support
  // "Burnout doesn’t show up in a day. It shows up across weeks."
  const dataMap = {
    '7': {
      focus: [3.8, 3.5, 3.2, 3.0, 3.5, 3.8, 4.0],
      routine: [80, 75, 70, 68, 70, 72, 74]
    },
    '14': {
      focus: [4.2, 4.5, 4.8, 4.6, 4.0, 3.5, 3.2, 3.0, 3.5, 3.8, 4.0, 4.1, 4.1, 4.2],
      routine: [80, 82, 85, 84, 80, 75, 70, 68, 70, 72, 74, 75, 76, 76]
    },
    '30': {
      focus: [5.0, 5.2, 5.1, 4.8, 4.5, 4.6, 4.2, 4.5, 4.8, 4.6, 4.0, 3.5, 3.2, 3.0, 3.5, 3.8, 4.0, 4.1, 4.1, 4.2, 4.3, 4.2, 4.0, 3.8, 3.5, 3.2, 3.0, 2.8, 2.5, 2.8],
      routine: [88, 87, 86, 85, 82, 84, 80, 82, 85, 84, 80, 75, 70, 68, 70, 72, 74, 75, 76, 76, 75, 74, 72, 70, 65, 60, 58, 55, 58, 60]
    }
  };

  const currentData = dataMap[range];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Dashboard>
        <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>

          {/* Time Range Toggle */}
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
            {(['7', '14', '30'] as TimeRange[]).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                style={{
                  background: range === r ? 'var(--color-text-primary)' : 'transparent',
                  color: range === r ? 'var(--color-surface)' : 'var(--color-text-secondary)',
                  border: range === r ? 'none' : '1px solid var(--color-border)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease'
                }}
              >
                Last {r} days
              </button>
            ))}
          </div>

          <TrendChart
            title="Daily Focus Duration (Hours)"
            data={currentData.focus}
            color="var(--color-text-primary)"
          />
          <TrendChart
            title="Routine Consistency Index"
            data={currentData.routine}
            color="var(--color-text-secondary)"
          />
        </div>

        <div style={{ gridColumn: 'span 4' }}>
          <div style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: '8px',
            padding: 'var(--spacing-md)',
            border: '1px solid var(--color-border)',
            height: '100%'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>Insights</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <InsightCard
                title="Focus Trends"
                description="Focus periods have shortened slightly over the last 10 days, with a recovery pattern emerging in the last 48 hours."
                details={{
                  change: "-15% avg duration",
                  since: "Jan 08, 2026",
                  baseline: "4.5h daily avg"
                }}
              />
              <InsightCard
                title="Routine Stability"
                description="Morning start times have fluctuated by approximately 45 minutes this week compared to your baseline."
                details={{
                  change: "+/- 45 mins variance",
                  since: "Last Monday",
                  baseline: "9:00 AM +/- 10m"
                }}
              />
              <InsightCard
                title="Work/Rest Balance"
                description="Activity has extended into late evening hours (post-9 PM) on 3 of the last 7 days."
                details={{
                  change: "Late activity detected",
                  since: "Last Wednesday",
                  baseline: "No activity post-8 PM"
                }}
              />
            </div>
          </div>
        </div>

        {/* How this works Footer */}
        <div style={{
          gridColumn: 'span 12',
          marginTop: 'var(--spacing-lg)',
          paddingTop: 'var(--spacing-md)',
          borderTop: '1px solid var(--color-border)',
          color: 'var(--color-text-secondary)',
          fontSize: '0.875rem',
          maxWidth: '700px'
        }}>
          <h5 style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: 'var(--spacing-xs)',
            color: 'var(--color-text-primary)'
          }}>
            How this works
          </h5>
          <p style={{ lineHeight: '1.6' }}>
            Silent Signal observes long-term behavioral patterns and compares them to a personal baseline.
            It does not access messages, content, or personal data.
          </p>
        </div>
      </Dashboard>
    </div>
  );
}

export default App;
