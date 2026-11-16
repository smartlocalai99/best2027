// Builds the static SEO site into ./public. Run: node build.mjs
// Set SITE_URL if the Vercel domain differs: SITE_URL=https://example.vercel.app node build.mjs
import { writeFileSync } from 'node:fs';

const SITE = (process.env.SITE_URL || 'https://best-lawyer-in-kadapa.vercel.app').replace(/\/$/, '');
const MAIN = 'https://www.rajeshkumarreddyadvocatekadapa.com';
const UPDATED = '2026-11-16';

// ---------- Facts, all taken from the advocate's own website and Google Business Profile ----------
const A = {
  name: 'Rajesh Kumar Reddy',
  office: 'Rajesh Kumar Reddy Advocate Office',
  enrolment: 'AP/104/1990',
  council: 'Bar Council of Andhra Pradesh',
  since: 1990,
  years: 36,
  street: 'Beside District Court, Near Nagarjuna Model School, Sarajupeta',
  address: 'Beside District Court, Near Nagarjuna Model School, Sarajupeta, Kadapa - 516001, Andhra Pradesh',
  phone: { display: '+91 93463 62201', tel: 'tel:+919346362201', e164: '+919346362201' },
  email: 'rajeshpalagiri104@gmail.com',
  whatsapp: 'https://wa.me/919346362201?text=' + encodeURIComponent('Hello, I would like to consult Advocate Rajesh Kumar Reddy.'),
  hours: 'Monday to Saturday, 9 AM – 7 PM',
  hoursShort: 'Mon–Sat, 9 AM – 7 PM',
  languages: 'Telugu, English, Hindi',
  maps: 'https://maps.google.com/?cid=17415992486200348865',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.380849157174!2d78.8251302751496!3d14.462807086007373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3738bb66f8611%3A0xf1b208e46ed810c1!2sRajesh%20kumar%20reddy%20Advocate%20office!5e0!3m2!1sen!2sin!4v1768065191853!5m2!1sen!2sin',
  socials: {
    instagram: 'https://www.instagram.com/rajeshpalagiri104/',
    facebook: 'https://www.facebook.com/profile.php?id=61585921914550',
    youtube: 'https://www.youtube.com/channel/UCbg5nXNvJTKN33TehtDz7aQ',
    x: 'https://x.com/RajeshPala31233',
    linkedin: 'https://www.linkedin.com/in/rajesh-kumar-reddy-p-aa87363a4/',
  },
};

const practice = [
  { matter: 'Criminal defence', covers: 'Sessions trials, offences under the IPC and BNS, NDPS cases, cross-examination and final arguments', href: '/criminal-lawyer-kadapa' },
  { matter: 'Bail and anticipatory bail', covers: 'Regular bail and anticipatory bail before the Kadapa courts and the High Court', href: '/bail-lawyer-kadapa' },
  { matter: 'Cheque bounce cases', covers: 'Legal notice, complaint and trial under Section 138 of the Negotiable Instruments Act', href: '/cheque-bounce-lawyer-kadapa' },
  { matter: 'Civil suits', covers: 'Recovery suits, injunction and declaration suits, execution petitions, rent control', href: '/civil-suits-kadapa' },
  { matter: 'Property and land disputes', covers: 'Partition suits, possession, boundary and title disputes', href: '/property-disputes-kadapa' },
  { matter: 'Title checks and documents', covers: 'Title verification before buying, sale deeds, succession and inheritance', href: '/title-verification-kadapa' },
  { matter: 'Revenue matters', covers: 'Corrections to land and revenue records, revenue court cases', href: '/revenue-cases-kadapa' },
  { matter: 'Divorce and family court', covers: 'Mutual and contested divorce, maintenance, child custody, domestic violence cases', href: '/divorce-lawyer-kadapa' },
  { matter: 'Appeals and revisions', covers: 'Civil and criminal appeals, revisions and High Court of Andhra Pradesh matters', href: '/appeals-lawyer-kadapa' },
  { matter: 'Legal advice and notary', covers: 'Advice before you file, legal notices, notary attestation', href: '/legal-advisory-kadapa' },
];

const courts = [
  ['Kadapa District Court', 'Chambers are beside this court'],
  ['Family Court, Kadapa', 'Divorce, maintenance, custody'],
  ['High Court of Andhra Pradesh', 'Appeals, revisions, writs, anticipatory bail'],
  ['Proddatur Court', ''],
  ['Rajampet Court', ''],
  ['Badvel Court', ''],
  ['Rayachoty Court', 'Annamayya District headquarters'],
  ['Pulivendula Junior Civil Judge Court', ''],
  ['Jammalamadugu Junior Civil Judge Court', ''],
  ['Mydukur Junior Civil Judge Court', ''],
  ['Kamalapuram Junior Civil Judge Court', ''],
  ['Lakkireddipalli Junior Civil Judge Court', ''],
  ['Sidhout Junior Civil Judge Court', ''],
  ['Nandalur Junior Civil Judge Court', ''],
  ['Railway Kodur Junior Civil Judge Court', ''],
];

// ---------- Helpers ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const link = (path) => (path.startsWith('http') ? path : MAIN + path);

const icons = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
};

// Security-print style background, like Indian non-judicial stamp paper.
const guilloche = `
<svg class="guilloche" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <pattern id="g" width="48" height="16" patternUnits="userSpaceOnUse">
      <path d="M0 8 Q12 -4 24 8 T48 8" fill="none" stroke="#9DC2AA" stroke-width="0.9"/>
      <path d="M0 8 Q12 20 24 8 T48 8" fill="none" stroke="#9DC2AA" stroke-width="0.9"/>
    </pattern>
  </defs>
  <rect width="400" height="500" fill="url(#g)" opacity="0.55"/>
  <rect x="10" y="10" width="380" height="480" fill="none" stroke="#2F6B4F" stroke-width="2"/>
  <rect x="17" y="17" width="366" height="466" fill="none" stroke="#9DC2AA" stroke-width="1"/>
</svg>`;

const callBtn = (label = `Call ${A.phone.display}`) => `<a class="btn btn-call" href="${A.phone.tel}">${icons.phone}<span>${label}</span></a>`;
const siteBtn = (path = '/', label = 'Visit his website') => `<a class="btn btn-line" href="${link(path)}">${icons.web}<span>${label}</span></a>`;

const nav = [
  { href: '/best-criminal-lawyer-in-kadapa', label: 'Criminal & bail' },
  { href: '/best-property-lawyer-in-kadapa', label: 'Property & civil' },
  { href: '/best-divorce-lawyer-in-kadapa', label: 'Divorce & family' },
  { href: MAIN + '/', label: 'Official website' },
];

// ---------- Schema: reuse the @ids on the advocate's own site so search engines merge the entities ----------
const personId = `${MAIN}/#person`;
const serviceId = `${MAIN}/#legalservice`;
const postal = {
  '@type': 'PostalAddress',
  streetAddress: A.street,
  addressLocality: 'Kadapa',
  addressRegion: 'Andhra Pradesh',
  postalCode: '516001',
  addressCountry: 'IN',
};
const personSchema = {
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
const serviceSchema = {
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
  knowsAbout: ['Criminal defence', 'Bail and anticipatory bail', 'Cheque bounce (Section 138 NI Act)', 'Civil litigation', 'Property and land disputes', 'Revenue matters', 'Divorce and family law', 'Appeals and revisions'],
  sameAs: [A.maps, ...Object.values(A.socials)],
};
const faqSchema = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })),
});
const breadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([href, label], i) => ({ '@type': 'ListItem', position: i + 1, name: label, item: SITE + href })),
});

// ---------- Shared blocks ----------
const header = (path) => `
<a class="skip" href="#main">Skip to content</a>
<header class="topbar">
  <div class="wrap">
    <a class="brand" href="/"><b>Rajesh Kumar Reddy</b><span>Advocate, Kadapa</span></a>
    <nav class="nav" aria-label="Main">
      ${nav.map((n) => `<a href="${n.href}"${n.href === path ? ' aria-current="page"' : ''}>${n.label}</a>`).join('\n      ')}
    </nav>
    <a class="btn btn-call btn-sm" href="${A.phone.tel}">${icons.phone}<span>Call<span class="long"> ${A.phone.display}</span></span></a>
  </div>
</header>`;

const footer = () => `
<footer class="footer">
  <div class="wrap">
    <div class="cols4">
      <div>
        <h2>${A.office}</h2>
        <address>${esc(A.address)}</address>
        <p style="margin-top:12px"><a href="${A.phone.tel}">${A.phone.display}</a><br><a href="mailto:${A.email}">${A.email}</a><br>${A.hoursShort}</p>
      </div>
      <div>
        <h2>On this site</h2>
        <ul>
          <li><a href="/">Best lawyer in Kadapa</a></li>
          <li><a href="/best-criminal-lawyer-in-kadapa">Best criminal lawyer in Kadapa</a></li>
          <li><a href="/best-property-lawyer-in-kadapa">Best property lawyer in Kadapa</a></li>
          <li><a href="/best-divorce-lawyer-in-kadapa">Best divorce lawyer in Kadapa</a></li>
        </ul>
      </div>
      <div>
        <h2>Official website</h2>
        <ul>
          <li><a href="${MAIN}/">rajeshkumarreddyadvocatekadapa.com</a></li>
          <li><a href="${MAIN}/about">About the advocate</a></li>
          <li><a href="${MAIN}/services">Legal services</a></li>
          <li><a href="${MAIN}/blog">Legal guides</a></li>
          <li><a href="${MAIN}/contact">Contact the office</a></li>
        </ul>
      </div>
      <div>
        <h2>Follow</h2>
        <ul>
          <li><a href="${A.socials.youtube}" rel="noopener">YouTube</a></li>
          <li><a href="${A.socials.instagram}" rel="noopener">Instagram</a></li>
          <li><a href="${A.socials.facebook}" rel="noopener">Facebook</a></li>
          <li><a href="${A.socials.linkedin}" rel="noopener">LinkedIn</a></li>
          <li><a href="${A.maps}" rel="noopener">Google Maps</a></li>
        </ul>
      </div>
    </div>
    <div class="legal">
      <p>Under the Bar Council of India Rules, advocates may not solicit work or advertise. This site gives information about ${A.name}, Advocate (enrolment ${A.enrolment}, ${A.council}), his practice areas and how to reach his office, for people who are looking for it. It is not legal advice and does not create an advocate–client relationship. For advice about your own case, consult an advocate.</p>
      <p>© 2026 ${A.office}</p>
    </div>
  </div>
</footer>
<nav class="callbar" aria-label="Contact the office">
  <a class="call" href="${A.phone.tel}">${icons.phone}Call</a>
  <a href="${A.whatsapp}" rel="noopener">${icons.chat}WhatsApp</a>
  <a href="${A.maps}" rel="noopener">${icons.pin}Office</a>
</nav>`;

const facts = (items) => `
<section class="facts" aria-label="Key facts">
  <div class="wrap">
    <dl>
      ${items.map(([dt, dd]) => `<div class="fact"><dt>${dt}</dt><dd>${dd}</dd></div>`).join('\n      ')}
    </dl>
  </div>
</section>`;

const stamp = `
<figure style="margin:0">
  <div class="stamp">
    ${guilloche}
    <div class="denom"><small>Enrolment no., ${A.council}</small><strong>${A.enrolment}</strong></div>
    <img src="/images/advocate-rajesh-kumar-reddy-kadapa.webp" width="640" height="982" alt="Advocate Rajesh Kumar Reddy in his court gown and bands" fetchpriority="high">
  </div>
  <figcaption class="stamp-caption">Every advocate in India is enrolled with a State Bar Council. You can ask for the enrolment number before you hire.</figcaption>
</figure>`;

const register = (items) => `
<ul class="register">
  ${items.map((p) => `<li><a href="${link(p.href)}"><span class="matter">${p.matter}</span><span class="covers">${p.covers}</span></a></li>`).join('\n  ')}
</ul>`;

const profile = (intro) => `
<div class="profile">
  <figure class="photo">
    <img src="/images/rajesh-kumar-reddy-advocate-office-kadapa.webp" width="900" height="1200" alt="Advocate Rajesh Kumar Reddy reading case papers at his desk in his chambers in Kadapa, with court gowns hanging behind" loading="lazy">
    <figcaption>In his chambers beside Kadapa District Court.</figcaption>
  </figure>
  <div>
    <h2>About Advocate Rajesh Kumar Reddy</h2>
    ${intro}
    <dl>
      <div><dt>Enrolment</dt><dd>${A.enrolment}, ${A.council} (enrolled ${A.since})</dd></div>
      <div><dt>Bar Association</dt><dd>Former President, Kadapa District Bar Association</dd></div>
      <div><dt>Chambers</dt><dd>Beside Kadapa District Court, Sarajupeta</dd></div>
      <div><dt>Languages</dt><dd>${A.languages}</dd></div>
    </dl>
    <p style="margin-top:20px"><a href="${MAIN}/about">Read the full profile of Advocate Rajesh Kumar Reddy</a></p>
  </div>
</div>`;

const faqBlock = (faqs, heading = 'Questions people ask') => `
<section class="section" aria-labelledby="faq-h">
  <div class="wrap">
    <div class="section-head"><h2 id="faq-h">${heading}</h2></div>
    <div class="faq">
      ${faqs.map((f) => `<details><summary>${f.q}</summary><div class="answer">${f.a}</div></details>`).join('\n      ')}
    </div>
  </div>
</section>`;

const readingBlock = (items, heading = 'Legal guides on his website') => `
<section class="section section-tint" aria-labelledby="read-h">
  <div class="wrap">
    <div class="section-head"><h2 id="read-h">${heading}</h2></div>
    <ul class="reading">
      ${items.map(([href, label]) => `<li><a href="${link(href)}">${label}</a></li>`).join('\n      ')}
    </ul>
  </div>
</section>`;

const findUs = (heading = 'Advocate office beside Kadapa District Court') => `
<section class="section" aria-labelledby="find-h" id="office">
  <div class="wrap findus">
    <div>
      <h2 id="find-h">${heading}</h2>
      <address class="address">${esc(A.address)}</address>
      <ul class="contact-list">
        <li><span>Office hours</span><b>${A.hoursShort}</b></li>
        <li><span>Phone</span><a href="${A.phone.tel}">${A.phone.display}</a></li>
        <li><span>WhatsApp</span><a href="${A.whatsapp}" rel="noopener">Message the office</a></li>
        <li><span>Email</span><a href="mailto:${A.email}">${A.email}</a></li>
      </ul>
      <div class="actions"><a class="btn btn-line" href="${A.maps}" rel="noopener">${icons.pin}<span>Open in Google Maps</span></a></div>
    </div>
    <iframe class="map" src="${A.mapEmbed}" title="Map showing Rajesh Kumar Reddy Advocate Office beside Kadapa District Court" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
  </div>
</section>`;

const closing = (heading, text) => `
<section class="closing" aria-label="Contact the advocate">
  <div class="wrap">
    <div><h2>${heading}</h2><p>${text}</p></div>
    <div class="actions">${callBtn()}<a class="btn btn-line" href="${A.whatsapp}" rel="noopener">${icons.chat}<span>WhatsApp</span></a></div>
  </div>
</section>`;

const crumbs = (items) => `
<nav class="crumbs wrap" aria-label="Breadcrumb"><ol>${items
  .map(([href, label], i) => (i === items.length - 1 ? `<li aria-current="page">${label}</li>` : `<li><a href="${href}">${label}</a></li>`))
  .join('')}</ol></nav>`;

// ---------- Page shell ----------
function page({ path, title, description, preload, schema, body, robots = 'index, follow, max-image-preview:large' }) {
  const url = SITE + (path === '/' ? '/' : path);
  const graph = {
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
      ...schema,
    ],
  };
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${robots}">
<meta name="theme-color" content="#1F5A40">
<meta name="geo.region" content="IN-AP">
<meta name="geo.placename" content="Kadapa">
<meta property="og:type" content="profile">
<meta property="og:locale" content="en_IN">
<meta property="og:site_name" content="Advocate Rajesh Kumar Reddy, Kadapa">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/images/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu:wght@400;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400&display=swap">
<link rel="stylesheet" href="/styles.css">${preload ? `\n<link rel="preload" as="image" href="${preload}">` : ''}
<script type="application/ld+json">${JSON.stringify(graph)}</script>
</head>
<body>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
</body>
</html>
`;
}

// =====================================================================
// HOME: best lawyer in Kadapa
// =====================================================================
const homeFaqs = [
  {
    q: 'Who is the best lawyer in Kadapa?',
    a: `<p>The right lawyer depends on your case. Look for an advocate enrolled with the Bar Council, with years of practice in the court where your case will be heard and in your type of matter. ${A.name} was enrolled in ${A.since} (${A.enrolment}), is a former President of the Kadapa District Bar Association, and handles civil, criminal, property and family cases from chambers beside Kadapa District Court.</p>`,
  },
  {
    q: 'How do I check that a lawyer is genuine?',
    a: `<p>Every advocate who practises in India must be enrolled with a State Bar Council and has an enrolment number. Ask for it before you hire. ${A.name}’s enrolment number is ${A.enrolment} with the ${A.council}.</p>`,
  },
  {
    q: 'Where is the office of Advocate Rajesh Kumar Reddy?',
    a: `<p>${esc(A.address)}. <a href="${A.maps}" rel="noopener">Open it in Google Maps</a>.</p>`,
  },
  {
    q: 'What are the office hours?',
    a: `<p>${A.hours}. Call ${A.phone.display} first so the advocate is not in court when you arrive.</p>`,
  },
  {
    q: 'What should I bring to the first meeting?',
    a: `<p>Bring any notices, agreements, FIR or court papers you have, and an ID. For a property matter, also bring the title deeds, encumbrance certificate, survey details and tax receipts.</p>`,
  },
  {
    q: 'Which courts does he appear in?',
    a: `<p>Kadapa District Court and the Family Court in Kadapa, courts across YSR Kadapa and Annamayya districts including Proddatur, Rajampet, Badvel and Rayachoty, and the High Court of Andhra Pradesh for appeals and revisions.</p>`,
  },
  {
    q: 'Can I get free legal aid in Kadapa?',
    a: `<p>If you cannot afford a lawyer, you may qualify for free legal aid from the District Legal Services Authority at the district court, under the Legal Services Authorities Act, 1987. The national legal aid helpline is <a href="tel:15100">15100</a>. <a href="${MAIN}/free-legal-aid-kadapa">More on free legal aid in Kadapa</a>.</p>`,
  },
];

const home = page({
  path: '/',
  title: 'Best Lawyer in Kadapa | Advocate Rajesh Kumar Reddy (Since 1990)',
  description:
    'Advocate Rajesh Kumar Reddy, Kadapa: enrolled 1990 (AP/104/1990), former President of the Kadapa District Bar Association. Civil, criminal, bail, cheque bounce, property and divorce cases, beside Kadapa District Court.',
  preload: '/images/advocate-rajesh-kumar-reddy-kadapa.webp',
  schema: [faqSchema(homeFaqs)],
  body: `
<section class="hero">
  <div class="wrap">
    <div>
      <h1>Best lawyer in Kadapa: Advocate Rajesh Kumar Reddy</h1>
      <p class="lede">Rajesh Kumar Reddy has practised law in Kadapa for ${A.years} years, since his enrolment in ${A.since}. A former President of the Kadapa District Bar Association, he handles civil, criminal, property and family cases from chambers beside Kadapa District Court.</p>
      <div class="actions">${callBtn()}${siteBtn()}</div>
      <p class="verify">Enrolment ${A.enrolment}, ${A.council}. Speaks ${A.languages}.</p>
    </div>
    ${stamp}
  </div>
</section>
${facts([
  ['Practising since', String(A.since)],
  ['Bar Association', 'Former President'],
  ['Chambers', 'Beside District Court'],
  ['Office hours', A.hoursShort],
])}
<section class="section" aria-labelledby="practice-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="practice-h">Cases he handles</h2>
      <p class="section-intro">Each matter below has its own page on the advocate’s official website, explaining how that kind of case is prepared and argued in Kadapa.</p>
    </div>
    ${register(practice)}
    <p class="source-note"><a href="${MAIN}/services">See every legal service on rajeshkumarreddyadvocatekadapa.com</a></p>
  </div>
</section>
<section class="section section-tint" aria-label="About the advocate">
  <div class="wrap">
    ${profile(
      `<p>Rajesh Kumar Reddy was enrolled with the ${A.council} in ${A.since} and has practised before Kadapa District Court ever since. He served as President of the Kadapa District Bar Association and was instrumental in setting up the State Bank of India branch inside the Kadapa District Court complex, used daily by advocates and litigants.</p><p>Clients come to his office from Kadapa town and from across the district, including Proddatur, Badvel, Pulivendula and Rajampet. Fees are discussed after he has reviewed your documents.</p>`
    )}
  </div>
</section>
<section class="section" aria-labelledby="choose-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="choose-h">How to choose the best lawyer in Kadapa</h2>
      <p class="section-intro">Questions worth asking any advocate before you hand over your case, and how ${A.name} answers them.</p>
    </div>
    <ul class="asklist">
      <li><span class="q">Are you enrolled with the Bar Council, and what is your enrolment number?</span><span class="a"><strong>${A.enrolment}</strong>, ${A.council}, enrolled in ${A.since}.</span></li>
      <li><span class="q">Do you regularly appear in the court where my case will be heard?</span><span class="a">His chambers are <strong>beside Kadapa District Court</strong>, and he appears in courts across the district and in the High Court of Andhra Pradesh.</span></li>
      <li><span class="q">Have you handled cases like mine?</span><span class="a">His practice covers criminal defence and bail, cheque bounce, civil and property suits, revenue matters, and divorce and family cases. Ask about your specific matter when you call.</span></li>
      <li><span class="q">How will fees be decided?</span><span class="a">Fees are <strong>explained after a first review of your documents</strong>, based on the work your case needs.</span></li>
      <li><span class="q">Can I speak to you in Telugu?</span><span class="a"><strong>Yes.</strong> He speaks ${A.languages}.</span></li>
    </ul>
  </div>
</section>
<section class="section section-tint" aria-labelledby="courts-h">
  <div class="wrap">
    <div class="section-head"><h2 id="courts-h">Courts he practises in</h2></div>
    <ul class="courts">
      ${courts.map(([c, n]) => `<li><b>${c}</b>${n ? `<span>${n}</span>` : ''}</li>`).join('\n      ')}
    </ul>
  </div>
</section>
<section class="section" lang="te" aria-labelledby="te-h">
  <div class="wrap telugu">
    <h2 id="te-h">కడపలో ఉత్తమ న్యాయవాది కోసం చూస్తున్నారా?</h2>
    <p>న్యాయవాది రాజేష్ కుమార్ రెడ్డి 1990 నుండి కడప కోర్టులో ప్రాక్టీస్ చేస్తున్నారు (ఎన్‌రోల్‌మెంట్ నంబర్ ${A.enrolment}, బార్ కౌన్సిల్ ఆఫ్ ఆంధ్రప్రదేశ్). ఆయన కడప జిల్లా బార్ అసోసియేషన్ మాజీ అధ్యక్షులు. సివిల్, క్రిమినల్, బెయిల్, చెక్ బౌన్స్, భూమి మరియు ఆస్తి వివాదాలు, విడాకులు మరియు కుటుంబ కేసులు చూస్తారు.</p>
    <p>ఆఫీసు కడప జిల్లా కోర్టు పక్కన ఉంది. ఫోన్: <a href="${A.phone.tel}">93463 62201</a> (సోమవారం నుండి శనివారం, ఉదయం 9 నుండి సాయంత్రం 7 వరకు).</p>
  </div>
</section>
${findUs()}
${faqBlock(homeFaqs)}
${readingBlock([
  ['/blog/how-to-choose-lawyer-kadapa', 'How to choose a lawyer in Kadapa'],
  ['/blog/best-advocate-kadapa-hiring-checklist', 'Checklist for hiring an advocate in Kadapa'],
  ['/blog/kadapa-first-hearing-guide', 'Your first hearing at Kadapa court'],
  ['/blog/kadapa-legal-notice-guide', 'Sending or answering a legal notice'],
  ['/blog/kadapa-court-timeline-expectations', 'How long cases take in Kadapa courts'],
  ['/blog/kadapa-legal-document-checklist', 'Documents to keep ready for a court case'],
])}
${closing('Speak to Advocate Rajesh Kumar Reddy', `Call or WhatsApp ${A.phone.display}. Office hours are ${A.hours}.`)}
`,
});

// =====================================================================
// CRIMINAL: best criminal lawyer in Kadapa
// =====================================================================
const crimFaqs = [
  {
    q: 'Who is the best criminal lawyer in Kadapa?',
    a: `<p>For a criminal case, look for an advocate who appears regularly in the Sessions and Magistrate courts where your case is listed and who can move quickly on bail. ${A.name} has defended criminal cases in Kadapa since ${A.since} and has chambers beside the District Court.</p>`,
  },
  {
    q: 'Can I get anticipatory bail in Kadapa?',
    a: `<p>If you fear arrest for a non-bailable offence, you can apply for anticipatory bail before the Sessions Court or the High Court under Section 482 of the BNSS (Section 438 of the old CrPC). Whether it is granted depends on the facts of the case. <a href="${MAIN}/bail-lawyer-kadapa">Bail and anticipatory bail in Kadapa</a>.</p>`,
  },
  {
    q: 'Is a cheque bounce a criminal case?',
    a: `<p>Yes. Dishonour of a cheque for a debt is an offence under Section 138 of the Negotiable Instruments Act, punishable with imprisonment of up to two years, a fine of up to twice the cheque amount, or both. Strict time limits apply to the notice and the complaint.</p>`,
  },
  {
    q: 'Do you handle NDPS cases?',
    a: `<p>Yes. NDPS cases, sessions trials and offences such as those under Sections 498A, 307 and 376 of the IPC (and their BNS equivalents) are part of his criminal practice. <a href="${MAIN}/ndps-lawyer-kadapa">NDPS cases in Kadapa</a>.</p>`,
  },
  {
    q: 'Can a conviction be appealed?',
    a: `<p>Yes. Convictions and orders can be challenged by appeal or revision before the higher court, up to the High Court of Andhra Pradesh. Appeals have time limits, so act quickly. <a href="${MAIN}/criminal-appeals-kadapa">Criminal appeals in Kadapa</a>.</p>`,
  },
];

const crim = page({
  path: '/best-criminal-lawyer-in-kadapa',
  title: 'Best Criminal Lawyer in Kadapa | Bail & Cheque Bounce | Rajesh Kumar Reddy',
  description:
    'Criminal defence, bail, anticipatory bail, NDPS and cheque bounce cases in Kadapa with Advocate Rajesh Kumar Reddy, practising beside Kadapa District Court since 1990.',
  preload: '/images/advocate-rajesh-kumar-reddy-kadapa.webp',
  schema: [faqSchema(crimFaqs), breadcrumbSchema([['/', 'Best lawyer in Kadapa'], ['/best-criminal-lawyer-in-kadapa', 'Best criminal lawyer in Kadapa']])],
  body: `
${crumbs([['/', 'Best lawyer in Kadapa'], ['', 'Criminal lawyer']])}
<section class="hero wide">
  <div class="wrap">
    <div>
      <h1>Best criminal lawyer in Kadapa for bail, trials and cheque bounce cases</h1>
      <p class="lede">Advocate Rajesh Kumar Reddy has defended criminal cases in the Kadapa courts since ${A.since}: bail and anticipatory bail, sessions trials, NDPS cases, cheque bounce complaints, and appeals to the High Court.</p>
      <div class="actions">${callBtn()}${siteBtn('/criminal-lawyer-kadapa', 'Criminal law on his website')}</div>
    </div>
    ${stamp}
  </div>
</section>
${facts([
  ['Bail', 'Regular and anticipatory'],
  ['Trials', 'Sessions and magistrate courts'],
  ['Cheque bounce', 'Section 138 NI Act'],
  ['Appeals', 'Up to the High Court'],
])}
<section class="section" aria-labelledby="practice-h">
  <div class="wrap">
    <div class="section-head"><h2 id="practice-h">Criminal matters he handles</h2></div>
    ${register([
      { matter: 'Bail and anticipatory bail', covers: 'Applications before the Magistrate, Sessions Court and High Court', href: '/bail-lawyer-kadapa' },
      { matter: 'Sessions trials', covers: 'Defence in serious offences, cross-examination and final arguments', href: '/sessions-trials-kadapa' },
      { matter: 'IPC and BNS offences', covers: 'Including cases under Sections 498A, 307 and 376 and their BNS equivalents', href: '/ipc-offences-kadapa' },
      { matter: 'NDPS cases', covers: 'Narcotics cases, including bail and trial', href: '/ndps-lawyer-kadapa' },
      { matter: 'Cheque bounce', covers: 'Legal notice, complaint and defence under Section 138 NI Act', href: '/cheque-bounce-lawyer-kadapa' },
      { matter: 'Criminal appeals', covers: 'Appeals against conviction or acquittal', href: '/criminal-appeals-kadapa' },
      { matter: 'Criminal revisions', covers: 'Challenging orders of the lower court', href: '/criminal-revisions-kadapa' },
    ])}
  </div>
</section>
<section class="section section-tint" aria-labelledby="fir-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="fir-h">If a police case (FIR) has been registered against you</h2>
      <p class="section-intro">General steps people in Kadapa usually take. Your own situation may need a different approach, so speak to an advocate early.</p>
    </div>
    <ol class="steps">
      <li><b>Collect the papers.</b> Get a copy of the FIR and keep every notice or document the police give you.</li>
      <li><b>Check the sections.</b> The sections in the FIR decide whether the offence is bailable and which court will hear it.</li>
      <li><b>Speak to an advocate before you are arrested, if you can.</b> Anticipatory bail is applied for before arrest, in the Sessions Court or High Court.</li>
      <li><b>Answer notices and attend when called.</b> Keep copies of everything you sign or submit.</li>
    </ol>
    <p class="law-note">Since 1 July 2024, the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA) have replaced the IPC, CrPC and Evidence Act. Cases registered earlier may still refer to the old section numbers. <a href="${MAIN}/blog/kadapa-new-criminal-laws-bns-bnss-bsa-2025">What the new criminal laws change</a>.</p>
  </div>
</section>
<section class="section" aria-labelledby="cheque-h">
  <div class="wrap">
    <div class="section-head"><h2 id="cheque-h">Cheque bounce cases: the time limits</h2></div>
    <ol class="steps">
      <li><b>Present the cheque</b> within its validity, which is three months from the date on it.</li>
      <li><b>The bank returns it unpaid</b> and gives you a return memo.</li>
      <li><b>Send a legal notice within 30 days</b> of receiving the memo, demanding payment.</li>
      <li><b>The drawer has 15 days</b> from receiving the notice to pay.</li>
      <li><b>File the complaint within one month</b> after those 15 days end, if payment is not made.</li>
    </ol>
    <p class="law-note">Under Sections 138 and 142 of the Negotiable Instruments Act, 1881. <a href="${MAIN}/blog/kadapa-cheque-bounce-case-process">The cheque bounce process in Kadapa, step by step</a>.</p>
  </div>
</section>
<section class="section section-tint" aria-label="About the advocate">
  <div class="wrap">
    ${profile(`<p>Rajesh Kumar Reddy has practised before Kadapa District Court since ${A.since}, including the Sessions Court, and takes appeals and revisions to the High Court of Andhra Pradesh. He is a former President of the Kadapa District Bar Association.</p>`)}
  </div>
</section>
${faqBlock(crimFaqs)}
${readingBlock([
  ['/blog/criminal-lawyer-kadapa-fir-response', 'What to do after an FIR in Kadapa'],
  ['/blog/kadapa-bail-anticipatory-bail-guide', 'Bail and anticipatory bail in Kadapa'],
  ['/blog/kadapa-sessions-trial-preparation', 'Preparing for a sessions trial'],
  ['/blog/kadapa-cheque-bounce-case-process', 'The cheque bounce case process'],
  ['/blog/kadapa-new-criminal-laws-bns-bnss-bsa-2025', 'The new criminal laws: BNS, BNSS and BSA'],
  ['/blog/kadapa-cyber-fraud-legal-steps', 'Legal steps after a cyber fraud'],
])}
${findUs('Criminal lawyer office beside Kadapa District Court')}
${closing('Facing a criminal case?', `Call or WhatsApp ${A.phone.display}. Bring the FIR and any notices you have received.`)}
`,
});

// =====================================================================
// PROPERTY / CIVIL: best property lawyer in Kadapa
// =====================================================================
const propFaqs = [
  {
    q: 'Who is the best property lawyer in Kadapa?',
    a: `<p>For a land or property dispute, look for an advocate who knows both the civil courts and the revenue side, because many Kadapa disputes involve records as well as title. ${A.name} has handled civil, property and revenue matters in Kadapa since ${A.since}.</p>`,
  },
  {
    q: 'What is an injunction?',
    a: `<p>An injunction is a court order stopping someone from doing something, such as interfering with your possession of land. A temporary injunction can be granted while the suit is pending; a permanent injunction is granted in the final decree. <a href="${MAIN}/injunction-cases-kadapa">Injunction suits in Kadapa</a>.</p>`,
  },
  {
    q: 'Can a mistake in the land records (Adangal / 1-B) be corrected?',
    a: `<p>Yes. Errors in revenue records can be corrected by applying to the revenue authorities, with appeals available if the application is refused. Where the dispute is about who owns the land, a civil suit may also be needed. <a href="${MAIN}/revenue-cases-kadapa">Revenue matters in Kadapa</a>.</p>`,
  },
  {
    q: 'Should I get the title checked before buying land?',
    a: `<p>Yes. A title check traces ownership through earlier deeds and the encumbrance certificate, and confirms the seller has the right to sell before you pay. <a href="${MAIN}/title-verification-kadapa">Title verification in Kadapa</a>.</p>`,
  },
  {
    q: 'How is family property divided?',
    a: `<p>Co-owners can divide property by agreement, through a registered partition deed. If they cannot agree, any co-owner can file a partition suit in the civil court. <a href="${MAIN}/partition-suits-kadapa">Partition suits in Kadapa</a>.</p>`,
  },
];

const prop = page({
  path: '/best-property-lawyer-in-kadapa',
  title: 'Best Property & Civil Lawyer in Kadapa | Land Disputes | Rajesh Kumar Reddy',
  description:
    'Land and property disputes, partition and injunction suits, title verification and revenue record matters in Kadapa with Advocate Rajesh Kumar Reddy, practising since 1990.',
  preload: '/images/advocate-rajesh-kumar-reddy-kadapa.webp',
  schema: [faqSchema(propFaqs), breadcrumbSchema([['/', 'Best lawyer in Kadapa'], ['/best-property-lawyer-in-kadapa', 'Best property lawyer in Kadapa']])],
  body: `
${crumbs([['/', 'Best lawyer in Kadapa'], ['', 'Property and civil lawyer']])}
<section class="hero wide">
  <div class="wrap">
    <div>
      <h1>Best property and civil lawyer in Kadapa</h1>
      <p class="lede">Land and property disputes, partition and injunction suits, title checks before you buy, and corrections to revenue records, handled by Advocate Rajesh Kumar Reddy in the Kadapa civil and revenue courts since ${A.since}.</p>
      <div class="actions">${callBtn()}${siteBtn('/property-disputes-kadapa', 'Property law on his website')}</div>
    </div>
    ${stamp}
  </div>
</section>
${facts([
  ['Suits', 'Partition and injunction'],
  ['Before buying', 'Title verification'],
  ['Records', 'Revenue corrections'],
  ['Appeals', 'Up to the High Court'],
])}
<section class="section" aria-labelledby="practice-h">
  <div class="wrap">
    <div class="section-head"><h2 id="practice-h">Civil and property matters he handles</h2></div>
    ${register([
      { matter: 'Property disputes', covers: 'Possession, boundary and ownership disputes', href: '/property-disputes-kadapa' },
      { matter: 'Land disputes', covers: 'Agricultural and urban land, encroachment', href: '/land-disputes-kadapa' },
      { matter: 'Partition suits', covers: 'Dividing family or jointly owned property', href: '/partition-suits-kadapa' },
      { matter: 'Injunction and declaration suits', covers: 'Stopping interference, declaring rights', href: '/injunction-cases-kadapa' },
      { matter: 'Title verification', covers: 'Checking ownership before you buy', href: '/title-verification-kadapa' },
      { matter: 'Sale deeds', covers: 'Drafting and checking sale deeds and registration papers', href: '/sale-deed-kadapa' },
      { matter: 'Succession and inheritance', covers: 'Succession certificates, wills and family settlements', href: '/succession-kadapa' },
      { matter: 'Revenue court matters', covers: 'Land record corrections and revenue disputes', href: '/revenue-cases-kadapa' },
      { matter: 'Civil suits and recovery', covers: 'Money recovery and other civil suits', href: '/civil-suits-kadapa' },
      { matter: 'Rent control and execution', covers: 'Eviction, rent disputes and enforcing decrees', href: '/rent-control-kadapa' },
    ])}
  </div>
</section>
<section class="section section-tint" aria-labelledby="docs-h">
  <div class="wrap cols">
    <div>
      <h2 id="docs-h">Documents to gather for a land or property case</h2>
      <p class="section-intro">Bring whatever you have to the first meeting. Copies are fine to start with.</p>
    </div>
    <ul class="ticks">
      <li>Sale deed, gift deed or partition deed for the property</li>
      <li>Earlier (link) documents showing how ownership passed</li>
      <li>Encumbrance certificate (EC)</li>
      <li>Pattadar passbook and title deed</li>
      <li>Adangal and 1-B (ROR) extracts</li>
      <li>Survey number details and FMB sketch</li>
      <li>Property or house tax receipts</li>
      <li>Any legal notice, police complaint or court papers</li>
    </ul>
  </div>
</section>
<section class="section" aria-label="About the advocate">
  <div class="wrap">
    ${profile(`<p>Rajesh Kumar Reddy has handled civil suits, property and revenue matters before Kadapa District Court and the junior civil judge courts across the district since ${A.since}, and takes appeals to the High Court of Andhra Pradesh.</p>`)}
  </div>
</section>
${faqBlock(propFaqs)}
${readingBlock([
  ['/blog/property-dispute-lawyer-kadapa-possession', 'Possession disputes over property'],
  ['/blog/kadapa-partition-suit-guide', 'Partition suits explained'],
  ['/blog/kadapa-injunction-order-guide', 'Getting an injunction order'],
  ['/blog/kadapa-property-title-verification', 'Property title verification'],
  ['/blog/kadapa-boundary-dispute-survey', 'Boundary disputes and land surveys'],
  ['/blog/kadapa-revenue-record-corrections', 'Correcting revenue records'],
  ['/blog/kadapa-sale-deed-registration', 'Sale deed registration'],
  ['/blog/kadapa-will-vs-family-settlement', 'Will or family settlement?'],
])}
${findUs('Property lawyer office beside Kadapa District Court')}
${closing('Have a land or property problem?', `Call or WhatsApp ${A.phone.display} and bring your property documents to the first meeting.`)}
`,
});

// =====================================================================
// FAMILY: best divorce lawyer in Kadapa
// =====================================================================
const famFaqs = [
  {
    q: 'Who is the best divorce lawyer in Kadapa?',
    a: `<p>Look for an advocate who appears regularly in the Family Court in Kadapa, explains your options clearly, including settlement, and keeps your matter confidential. ${A.name} handles divorce, maintenance, custody and domestic violence cases from chambers beside Kadapa District Court.</p>`,
  },
  {
    q: 'How long does a mutual consent divorce take?',
    a: `<p>After the joint petition is filed, the law sets a six-month waiting period before the second motion. The court can waive this in suitable cases, and the Supreme Court has held that the waiting period is not mandatory.</p>`,
  },
  {
    q: 'Can I get maintenance while the case is going on?',
    a: `<p>Yes. A spouse without enough income can ask for interim maintenance and litigation expenses while the case is pending, for example under Section 24 of the Hindu Marriage Act. Separate maintenance claims can be made under Section 144 of the BNSS. <a href="${MAIN}/maintenance-kadapa">Maintenance cases in Kadapa</a>.</p>`,
  },
  {
    q: 'Who gets custody of the children?',
    a: `<p>The court decides custody on the welfare of the child, considering age, schooling, care and stability. The other parent is usually given visitation. <a href="${MAIN}/child-custody-kadapa">Child custody in Kadapa</a>.</p>`,
  },
  {
    q: 'Are family court cases kept private?',
    a: `<p>Under the Family Courts Act, 1984, the court can hold proceedings in private (in camera) if it wishes or if either party asks. Your consultation with the advocate is confidential.</p>`,
  },
];

const fam = page({
  path: '/best-divorce-lawyer-in-kadapa',
  title: 'Best Divorce & Family Lawyer in Kadapa | Rajesh Kumar Reddy',
  description:
    'Divorce, maintenance, child custody and domestic violence cases at the Family Court, Kadapa, with Advocate Rajesh Kumar Reddy, practising beside Kadapa District Court since 1990.',
  preload: '/images/advocate-rajesh-kumar-reddy-kadapa.webp',
  schema: [faqSchema(famFaqs), breadcrumbSchema([['/', 'Best lawyer in Kadapa'], ['/best-divorce-lawyer-in-kadapa', 'Best divorce lawyer in Kadapa']])],
  body: `
${crumbs([['/', 'Best lawyer in Kadapa'], ['', 'Divorce and family lawyer']])}
<section class="hero wide">
  <div class="wrap">
    <div>
      <h1>Best divorce and family lawyer in Kadapa</h1>
      <p class="lede">Mutual and contested divorce, maintenance, child custody and domestic violence cases at the Family Court in Kadapa, handled confidentially by Advocate Rajesh Kumar Reddy, in practice since ${A.since}.</p>
      <div class="actions">${callBtn()}${siteBtn('/family-court-kadapa', 'Family law on his website')}</div>
    </div>
    ${stamp}
  </div>
</section>
${facts([
  ['Divorce', 'Mutual and contested'],
  ['Maintenance', 'Spouse, children, parents'],
  ['Custody', 'Custody and visitation'],
  ['Protection', 'Domestic violence cases'],
])}
<section class="section" aria-labelledby="practice-h">
  <div class="wrap">
    <div class="section-head"><h2 id="practice-h">Family matters he handles</h2></div>
    ${register([
      { matter: 'Divorce', covers: 'Mutual consent and contested divorce', href: '/divorce-lawyer-kadapa' },
      { matter: 'Maintenance and alimony', covers: 'Interim and permanent maintenance for spouse and children', href: '/maintenance-kadapa' },
      { matter: 'Child custody', covers: 'Custody, guardianship and visitation', href: '/child-custody-kadapa' },
      { matter: 'Domestic violence', covers: 'Protection, residence and monetary relief under the 2005 Act', href: '/domestic-violence-kadapa' },
      { matter: 'Restitution of conjugal rights', covers: 'Petitions to resume married life', href: '/rcr-kadapa' },
      { matter: 'Family Court, Kadapa', covers: 'All matters before the Family Court', href: '/family-court-kadapa' },
    ])}
  </div>
</section>
<section class="section section-tint" aria-labelledby="mutual-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="mutual-h">Mutual consent divorce: how it works</h2>
      <p class="section-intro">Under Section 13B of the Hindu Marriage Act, 1955. Marriages under the Special Marriage Act follow a similar process under Section 28.</p>
    </div>
    <ol class="steps">
      <li><b>Live separately for at least a year</b> and agree to divorce, including on maintenance, custody and property.</li>
      <li><b>File a joint petition</b> in the Family Court (the first motion).</li>
      <li><b>Wait six months.</b> The court can waive this waiting period in suitable cases.</li>
      <li><b>Confirm at the second motion</b>, and the court grants the divorce decree.</li>
    </ol>
    <p class="law-note"><a href="${MAIN}/blog/kadapa-family-court-divorce-maintenance">Divorce and maintenance at the Kadapa Family Court</a> explains contested divorce as well.</p>
  </div>
</section>
<section class="section" aria-label="About the advocate">
  <div class="wrap">
    ${profile(`<p>Rajesh Kumar Reddy appears before the Family Court in Kadapa in divorce, maintenance, custody and domestic violence cases, and helps families reach settlements where that is possible. He has practised in Kadapa since ${A.since}.</p>`)}
  </div>
</section>
${faqBlock(famFaqs)}
${readingBlock([
  ['/blog/kadapa-family-court-divorce-maintenance', 'Divorce and maintenance in Kadapa'],
  ['/blog/kadapa-child-custody-visitation', 'Child custody and visitation'],
  ['/blog/kadapa-domestic-violence-protection', 'Protection from domestic violence'],
  ['/blog/kadapa-family-court-mediation', 'Mediation at the Family Court'],
  ['/blog/kadapa-family-court-digital-evidence', 'WhatsApp and digital evidence in family cases'],
])}
${findUs('Family lawyer office beside Kadapa District Court')}
${closing('Talk it through in confidence', `Call or WhatsApp ${A.phone.display}. Office hours are ${A.hours}.`)}
`,
});

// =====================================================================
// 404, sitemap, robots
// =====================================================================
const notFound = page({
  path: '/404',
  title: 'Page not found | Advocate Rajesh Kumar Reddy, Kadapa',
  description: 'This page does not exist.',
  robots: 'noindex',
  schema: [],
  body: `
<section class="hero wide">
  <div class="wrap">
    <div>
      <h1>This page doesn’t exist</h1>
      <p class="lede">The link may be old or mistyped. Go to the <a href="/">Advocate Rajesh Kumar Reddy page</a> or call the office on ${A.phone.display}.</p>
      <div class="actions">${callBtn()}${siteBtn()}</div>
    </div>
  </div>
</section>`,
});

const pages = [
  ['index.html', home, '/', '1.0'],
  ['best-criminal-lawyer-in-kadapa.html', crim, '/best-criminal-lawyer-in-kadapa', '0.9'],
  ['best-property-lawyer-in-kadapa.html', prop, '/best-property-lawyer-in-kadapa', '0.9'],
  ['best-divorce-lawyer-in-kadapa.html', fam, '/best-divorce-lawyer-in-kadapa', '0.9'],
];
for (const [file, html] of pages) writeFileSync(`public/${file}`, html);
writeFileSync('public/404.html', notFound);
writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([, , p, pr]) => `  <url><loc>${SITE}${p}</loc><lastmod>${UPDATED}</lastmod><priority>${pr}</priority></url>`).join('\n')}
</urlset>
`
);
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages + 404, sitemap, robots for ${SITE}`);
