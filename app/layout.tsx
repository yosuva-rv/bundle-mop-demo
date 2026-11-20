import type { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Acme Analytics: Bundle Mop demo',
  description: 'A small Next.js app used to demo Bundle Mop on pull requests.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <strong>Acme Analytics</strong>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/blog">Blog</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
