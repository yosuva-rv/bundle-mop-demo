export interface Point {
  month: string;
  revenue: number;
}

export const revenue: Point[] = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5100 },
  { month: 'Mar', revenue: 4800 },
  { month: 'Apr', revenue: 6200 },
  { month: 'May', revenue: 7100 },
  { month: 'Jun', revenue: 8300 },
];

export interface Post {
  slug: string;
  title: string;
  date: string;
  body: string;
}

export const posts: Post[] = [
  { slug: 'hello', title: 'Hello, Acme', date: '2026-11-01', body: 'We are launching Acme Analytics.' },
  { slug: 'charts', title: 'Better charts', date: '2026-11-10', body: 'Our dashboard charts now update live.' },
];
