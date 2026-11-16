import { SITE } from '@/lib/site';
import { posts } from '@/lib/posts';
import { pageGraph, pageMetadata, breadcrumbSchema, hospitalId } from '@/lib/schema';
import { Shell, Crumbs } from '@/components/ui';
import { PostList } from '@/components/blog';

const path = '/blog';
const title = 'Family Health Guides for Kadapa | Dhruva Hospitals';
const description =
  'Practical guides for families in Kadapa: choosing a hospital for delivery, your newborn’s first days, the NICU, and planning for night-time emergencies.';

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
      name: 'Family health guides from Dhruva Hospitals, Kadapa',
      publisher: { '@id': hospitalId },
      blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE}/blog/${p.slug}`, datePublished: p.date })),
    },
    breadcrumbSchema([['/', 'Best hospital in Kadapa'], [path, 'Guides']]),
  ],
});

export default function Blog() {
  return (
    <Shell path={path} graph={graph}>
      <Crumbs items={[['/', 'Best hospital in Kadapa'], [path, 'Guides']]} />
      <header className="post-head wrap">
        <h1>Family health guides for Kadapa</h1>
        <p className="standfirst">
          Practical, plain-language guides from Dhruva Hospitals for the decisions families face around pregnancy, birth and children’s health.
        </p>
      </header>
      <section className="wrap" style={{ paddingBottom: 'clamp(48px, 8vw, 96px)' }} aria-label="All guides">
        <PostList posts={posts} />
      </section>
    </Shell>
  );
}
