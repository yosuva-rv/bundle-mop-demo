'use client';

import dynamic from 'next/dynamic';

// recharts is large; load it only when the dashboard actually renders the chart.
const LazyRevenueChart = dynamic(() => import('./RevenueChart'), {
  ssr: false,
  loading: () => <div style={{ height: 280 }}>Loading chart…</div>,
});

export default LazyRevenueChart;
