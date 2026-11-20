import Link from 'next/link';
import { posts } from '@/lib/data';

export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
      {posts.map((p) => (
        <div className="card" key={p.slug}>
          <Link href={`/blog/${p.slug}`}>
            <h2>{p.title}</h2>
          </Link>
          <small>{p.date}</small>
        </div>
      ))}
    </>
  );
}
