import { SITE, UPDATED, pages } from '@/lib/site';
import { posts } from '@/lib/posts';

export default function sitemap() {
  return [
    ...pages.map((p) => ({ url: SITE + p.path, lastModified: UPDATED, priority: p.priority })),
    ...posts.map((p) => ({ url: `${SITE}/blog/${p.slug}`, lastModified: p.date, priority: 0.7 })),
  ];
}
