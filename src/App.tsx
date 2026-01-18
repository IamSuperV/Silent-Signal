import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TrendChart } from './components/TrendChart';
import { InsightCard } from './components/InsightCard';

function App() {
  // Mock Data - Realistic, observational
  const focusData = [4.2, 4.5, 4.8, 4.6, 4.0, 3.5, 3.2, 3.0, 3.5, 3.8, 4.0];
  const routineData = [80, 82, 85, 84, 80, 75, 70, 68, 70, 72, 74]; // Scale 0-100 abstract

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Dashboard>
        <div style={{ gridColumn: 'span 8', display: 'grid', gap: 'var(--spacing-md)' }}>
          <TrendChart
            title="Daily Focus Duration (Hours)"
            data={focusData}
            color="var(--color-text-primary)"
          />
          <TrendChart
            title="Routine Consistency Index"
            data={routineData}
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
              />
              <InsightCard
                title="Routine Stability"
                description="Morning start times have fluctuated by approximately 45 minutes this week compared to your baseline."
              />
              <InsightCard
                title="Work/Rest Balance"
                description="Activity has extended into late evening hours (post-9 PM) on 3 of the last 7 days."
              />
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export default App;
