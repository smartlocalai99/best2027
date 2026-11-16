import { SITE, MAIN, UPDATED, A } from './site';

export const strip = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// Reuse the @ids on the advocate's own site so search engines merge the entities.
export const personId = `${MAIN}/#person`;
export const serviceId = `${MAIN}/#legalservice`;

const postal = {
  '@type': 'PostalAddress',
  streetAddress: A.street,
  addressLocality: 'Kadapa',
  addressRegion: 'Andhra Pradesh',
  postalCode: '516001',
  addressCountry: 'IN',
};

export const personSchema = {
  '@type': 'Person',
  '@id': personId,
  name: A.name,
  jobTitle: 'Advocate',
  url: MAIN + '/about',
  image: `${SITE}/images/advocate-rajesh-kumar-reddy-kadapa.webp`,
  telephone: A.phone.e164,
  email: A.email,
  knowsLanguage: ['te', 'en', 'hi'],
  memberOf: [
    { '@type': 'Organization', name: A.council },
    { '@type': 'Organization', name: 'Kadapa District Bar Association' },
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Advocate enrolment',
    identifier: A.enrolment,
    recognizedBy: { '@type': 'Organization', name: A.council },
  },
  worksFor: { '@id': serviceId },
  address: postal,
  sameAs: [MAIN + '/', ...Object.values(A.socials)],
};

export const serviceSchema = {
  '@type': ['LegalService', 'Attorney'],
  '@id': serviceId,
  name: A.office,
  url: MAIN + '/',
  image: `${SITE}/images/rajesh-kumar-reddy-advocate-office-kadapa.webp`,
  telephone: A.phone.e164,
  email: A.email,
  address: postal,
  hasMap: A.maps,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  founder: { '@id': personId },
  employee: { '@id': personId },
  areaServed: [
    { '@type': 'City', name: 'Kadapa' },
    { '@type': 'City', name: 'Proddatur' },
    { '@type': 'City', name: 'Rajampet' },
    { '@type': 'City', name: 'Badvel' },
    { '@type': 'City', name: 'Pulivendula' },
    { '@type': 'City', name: 'Rayachoti' },
    { '@type': 'AdministrativeArea', name: 'YSR Kadapa District' },
  ],
  knowsAbout: [
    'Criminal defence',
    'Bail and anticipatory bail',
    'Cheque bounce (Section 138 NI Act)',
    'Civil litigation',
    'Property and land disputes',
    'Revenue matters',
    'Divorce and family law',
    'Appeals and revisions',
  ],
  sameAs: [A.maps, ...Object.values(A.socials)],
};

export const faqSchema = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })),
});

export const breadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([href, label], i) => ({ '@type': 'ListItem', position: i + 1, name: label, item: SITE + href })),
});

export function pageGraph({ path, title, description, extra = [] }) {
  const url = SITE + (path === '/' ? '/' : path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE + '/', name: 'Best Lawyer in Kadapa: Advocate Rajesh Kumar Reddy', inLanguage: 'en-IN', about: { '@id': personId } },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': personId },
        dateModified: UPDATED,
      },
      personSchema,
      serviceSchema,
      ...extra,
    ],
  };
}

export function pageMetadata({ path, title, description }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'profile',
      locale: 'en_IN',
      siteName: 'Advocate Rajesh Kumar Reddy, Kadapa',
      title,
      description,
      url: path,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.jpg'] },
  };
}
