import RevenueChart from '@/components/LazyRevenueChart';
import { revenue } from '@/lib/data';

export default function DashboardPage() {
  const total = revenue.reduce((sum, p) => sum + p.revenue, 0);
  return (
    <>
      <h1>Dashboard</h1>
      <div className="card">
        <p>Revenue, last 6 months: ${total.toLocaleString('en-US')}</p>
        <RevenueChart data={revenue} />
      </div>
    </>
  );
}
