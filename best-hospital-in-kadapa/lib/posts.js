import Delivery, { meta as deliveryMeta } from '@/components/posts/delivery-hospital-questions';
import Newborn, { meta as newbornMeta } from '@/components/posts/newborn-first-48-hours';
import Nicu, { meta as nicuMeta } from '@/components/posts/nicu-guide';
import Night, { meta as nightMeta } from '@/components/posts/night-emergency-plan';

// Guides, newest first. Each has unique content that links to specific pages on dhruvahospitals.com.
export const posts = [
  { ...deliveryMeta, Body: Delivery },
  { ...newbornMeta, Body: Newborn },
  { ...nicuMeta, Body: Nicu },
  { ...nightMeta, Body: Night },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
