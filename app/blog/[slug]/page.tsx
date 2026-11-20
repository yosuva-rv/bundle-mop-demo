import { notFound } from 'next/navigation';
import { posts } from '@/lib/data';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <article>
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <p>{post.body}</p>
    </article>
  );
}
