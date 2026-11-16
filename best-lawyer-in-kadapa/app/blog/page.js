import { SITE } from '@/lib/site';
import { posts } from '@/lib/posts';
import { pageGraph, pageMetadata, breadcrumbSchema, serviceId } from '@/lib/schema';
import { Shell, Crumbs } from '@/components/ui';
import { PostList } from '@/components/blog';

const path = '/blog';
const title = 'Legal Guides for Kadapa | Advocate Rajesh Kumar Reddy';
const description =
  'Plain-language legal guides for people in Kadapa: checking case status online, your rights at a police station, land records in Andhra Pradesh, and free legal aid.';

export const metadata = pageMetadata({ path, title, description });

const graph = pageGraph({
  path,
  title,
  description,
  extra: [
    {
      '@type': 'Blog',
      '@id': `${SITE}/blog#blog`,
      url: `${SITE}/blog`,
      name: 'Legal guides from the Rajesh Kumar Reddy Advocate Office, Kadapa',
      publisher: { '@id': serviceId },
      blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE}/blog/${p.slug}`, datePublished: p.date })),
    },
    breadcrumbSchema([['/', 'Best lawyer in Kadapa'], [path, 'Guides']]),
  ],
});

export default function Blog() {
  return (
    <Shell path={path} graph={graph}>
      <Crumbs items={[['/', 'Best lawyer in Kadapa'], [path, 'Guides']]} />
      <header className="post-head wrap">
        <h1>Legal guides for Kadapa</h1>
        <p className="standfirst">
          Plain-language guides to the courts, records and rights people in Kadapa most often ask about. General information, not legal advice.
        </p>
      </header>
      <section className="wrap" style={{ paddingBottom: 'clamp(48px, 8vw, 96px)' }} aria-label="All guides">
        <PostList posts={posts} />
      </section>
    </Shell>
  );
}
