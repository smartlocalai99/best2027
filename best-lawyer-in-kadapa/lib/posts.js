import Ecourts, { meta as ecourtsMeta } from '@/components/posts/ecourts-case-status';
import LegalAid, { meta as legalAidMeta } from '@/components/posts/free-legal-aid';
import Land, { meta as landMeta } from '@/components/posts/land-records-ap';
import Police, { meta as policeMeta } from '@/components/posts/police-station-rights';

// Guides, newest first. Each has unique content that links to specific pages on rajeshkumarreddyadvocatekadapa.com.
export const posts = [
  { ...ecourtsMeta, Body: Ecourts },
  { ...policeMeta, Body: Police },
  { ...landMeta, Body: Land },
  { ...legalAidMeta, Body: LegalAid },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
