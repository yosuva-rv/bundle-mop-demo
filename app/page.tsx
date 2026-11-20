import LastUpdated from '@/components/LastUpdated';

export default function HomePage() {
  return (
    <>
      <h1>Acme Analytics</h1>
      <p>Revenue dashboards for small teams.</p>
      <LastUpdated at="2026-11-20T08:00:00Z" />
      <div className="card">
        <h2>Why Acme?</h2>
        <ul>
          <li>Live revenue charts</li>
          <li>Weekly email digests</li>
          <li>Works with Stripe and Razorpay</li>
        </ul>
      </div>
    </>
  );
}
