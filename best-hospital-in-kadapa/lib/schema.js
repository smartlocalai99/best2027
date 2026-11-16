import { SITE, MAIN, UPDATED, H, doctors, docUrl } from './site';

export const strip = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export const hospitalId = `${MAIN}/#hospital`;

// Same @id as the main site, so search engines treat both as one hospital.
export const hospitalSchema = {
  '@type': ['Hospital', 'MedicalOrganization'],
  '@id': hospitalId,
  name: H.name,
  url: MAIN + '/',
  logo: `${SITE}/images/dhruva-hospitals-logo.png`,
  image: `${SITE}/images/dhruva-hospitals-kadapa-building.webp`,
  telephone: H.phone.e164,
  email: H.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: H.address.street,
    addressLocality: H.address.city,
    addressRegion: H.address.region,
    postalCode: H.address.postalCode,
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: H.geo.lat, longitude: H.geo.lng },
  hasMap: H.maps,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  foundingDate: '2026-05-01',
  founder: { '@id': `${docUrl(doctors.sudarshan)}#physician`, '@type': 'Physician', name: doctors.sudarshan.name },
  medicalSpecialty: ['Obstetric', 'Gynecologic', 'Pediatric', 'Surgical', 'Emergency', 'Musculoskeletal'],
  areaServed: { '@type': 'City', name: 'Kadapa', containedInPlace: { '@type': 'State', name: 'Andhra Pradesh' } },
  sameAs: [H.maps, H.socials.instagram, H.socials.facebook, H.socials.youtube],
};

export const physicianSchema = (d) => ({
  '@type': 'Physician',
  '@id': `${docUrl(d)}#physician`,
  name: d.name,
  url: docUrl(d),
  image: SITE + d.img,
  medicalSpecialty: d.specialty,
  description: `${d.role}. ${d.creds}`,
  knowsLanguage: d.langs.split(', '),
  worksFor: { '@id': hospitalId },
  address: hospitalSchema.address,
  telephone: H.phone.e164,
});

export const faqSchema = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: strip(f.a) },
  })),
});

export const breadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([href, label], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: label,
    item: SITE + href,
  })),
});

export function pageGraph({ path, title, description, extra = [] }) {
  const url = SITE + (path === '/' ? '/' : path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE + '/', name: 'Best Hospital in Kadapa: Dhruva Hospitals', inLanguage: 'en-IN', publisher: { '@id': hospitalId } },
      {
        '@type': 'MedicalWebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': hospitalId },
        publisher: { '@id': hospitalId },
        dateModified: UPDATED,
      },
      hospitalSchema,
      ...extra,
    ],
  };
}

// Builds Next.js metadata for a page with consistent canonical and social tags.
export function pageMetadata({ path, title, description }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: 'Dhruva Hospitals, Kadapa',
      title,
      description,
      url: path,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.jpg'] },
  };
}
