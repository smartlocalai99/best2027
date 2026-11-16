import { SITE, UPDATED, pages } from '@/lib/site';

export default function sitemap() {
  return pages.map((p) => ({
    url: SITE + p.path,
    lastModified: UPDATED,
    priority: p.priority,
  }));
}
