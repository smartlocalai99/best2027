import { notFound } from 'next/navigation';
import { SITE } from '@/lib/site';
import { posts, getPost } from '@/lib/posts';
import { pageGraph, pageMetadata, breadcrumbSchema, serviceId, personId } from '@/lib/schema';
import { Shell } from '@/components/ui';
import { PostLayout } from '@/components/blog';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const meta = pageMetadata({ path: `/blog/${post.slug}`, title: post.seoTitle, description: post.description });
  return { ...meta, openGraph: { ...meta.openGraph, type: 'article', publishedTime: post.date, modifiedTime: post.date } };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const graph = pageGraph({
    path,
    title: post.seoTitle,
    description: post.description,
    extra: [
      {
        '@type': 'BlogPosting',
        '@id': `${SITE}${path}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'en-IN',
        mainEntityOfPage: { '@id': `${SITE}${path}#webpage` },
        image: `${SITE}/images/og-image.jpg`,
        author: { '@id': serviceId },
        publisher: { '@id': serviceId },
        about: { '@id': personId },
      },
      breadcrumbSchema([['/', 'Best lawyer in Kadapa'], ['/blog', 'Guides'], [path, post.short]]),
    ],
  });
  const Body = post.Body;
  return (
    <Shell path="/blog" graph={graph}>
      <PostLayout post={post}>
        <Body />
      </PostLayout>
    </Shell>
  );
}
