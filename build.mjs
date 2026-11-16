// Builds the static SEO site into ./public. Run: node build.mjs
// Set SITE_URL if the Vercel domain differs, e.g. SITE_URL=https://example.vercel.app node build.mjs
import { writeFileSync } from 'node:fs';

const SITE = (process.env.SITE_URL || 'https://best-hospital-in-kadapa.vercel.app').replace(/\/$/, '');
const MAIN = 'https://www.dhruvahospitals.com';
const UPDATED = '2026-11-16';

// ---------- Verified facts (mirrors lib/site.js and lib/data.js in the main Dhruva repo) ----------
const H = {
  name: 'Dhruva Hospitals',
  address: {
    street: 'Venu Gopal House, S Reddy Hospital, 1/705-1, Beside Raithu Bazar, Dwaraka Nagar, Old',
    city: 'Kadapa',
    region: 'Andhra Pradesh',
    postalCode: '516001',
    full: 'Venu Gopal House, S Reddy Hospital, 1/705-1, Beside Raithu Bazar, Dwaraka Nagar, Old, Kadapa, Andhra Pradesh 516001',
  },
  phone: { display: '+91 99599 59694', tel: 'tel:+919959959694', e164: '+919959959694' },
  phone2: { display: '+91 99599 59693', tel: 'tel:+919959959693' },
  landline: { display: '+91 8562 318419', tel: 'tel:+918562318419' },
  email: 'dhruvahospital2020@gmail.com',
  whatsapp: 'https://wa.me/919959959694?text=' + encodeURIComponent('Hello, I would like to book an appointment at Dhruva Hospitals.'),
  maps: 'https://maps.google.com/?cid=11172955950772335244',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=14.4643667,78.8227563',
  mapEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Dhruva Hospitals, Kadapa, Dwaraka Nagar, Sandhya Circle, Kadapa, Andhra Pradesh 516001') +
    '&output=embed',
  geo: { lat: 14.4643667, lng: 78.8227563 },
  plusCode: 'FR7F+P4 Kadapa',
  opd: '9 AM – 8 PM',
  registration: { file: '01-325', validUntil: '16 June 2031', beds: 20 },
  opened: '1 May 2026',
  socials: {
    instagram: 'https://www.instagram.com/dhruva_hospitals_kadapa/',
    facebook: 'https://www.facebook.com/p/Dhruva-Hospital-61588717175038/',
    youtube: 'https://www.youtube.com/@DhruvaHospitals-r1z',
  },
  familyGuide: 'https://doi.org/10.5281/zenodo.24152174',
};

const doctors = {
  sudarshan: {
    slug: 'dr-sudarshan-reddy',
    name: 'Dr. Sudarshan Reddy K',
    role: 'Paediatrician and neonatologist, Founder and Chairman',
    creds: 'MBBS, DNB Paediatrics (Apollo Hospitals, Mysore). IAP Fellowship in Neonatology (Ankura Hospital, Hyderabad).',
    langs: 'Telugu, English, Kannada',
    img: '/images/dr-sudarshan-reddy-paediatrician-kadapa.webp',
    w: 600, h: 400, pos: '62% 22%',
    specialty: 'Pediatric',
  },
  mounika: {
    slug: 'dr-mounika-reddy',
    name: 'Dr. S Mounika Reddy',
    role: 'Gynaecologist, fertility specialist and laparoscopic surgeon',
    creds: 'MBBS, MS (Obstetrics & Gynaecology), FRM, FMAS, FIRM.',
    langs: 'Telugu, English, Hindi',
    img: '/images/dr-mounika-reddy-gynecologist-kadapa.webp',
    w: 480, h: 600, pos: 'center 15%',
    specialty: ['Obstetric', 'Gynecologic'],
  },
  surya: {
    slug: 'dr-b-surya',
    name: 'Dr. B Surya',
    role: 'Physician, diabetologist and critical care',
    creds: 'MBBS, MD General Medicine (JIPMER).',
    langs: 'Telugu, English, Tamil',
    img: '/images/dr-b-surya-physician-kadapa.webp',
    w: 412, h: 552, pos: 'center 15%',
    specialty: 'PrimaryCare',
  },
  vinay: {
    slug: 'dr-m-vinay-kumar',
    name: 'Dr. M Vinay Kumar',
    role: 'General, laser and laparoscopic surgeon',
    creds: 'MBBS, MS (General Surgery), FMAS.',
    langs: 'Telugu, English',
    img: '/images/dr-m-vinay-kumar-surgeon-kadapa.webp',
    w: 480, h: 600, pos: 'center 15%',
    specialty: 'Surgical',
  },
};
const docUrl = (d) => `${MAIN}/doctors/${d.slug}`;

const departments = [
  { dept: 'Pregnancy and delivery', covers: 'Antenatal check-ups, pregnancy scans, normal delivery, painless labour options, caesarean section, high-risk pregnancy', who: 'Dr. S Mounika Reddy', href: '/services/pregnancy' },
  { dept: 'Gynaecology', covers: 'PCOD / PCOS, period problems, fibroids, ovarian cysts, laparoscopic hysterectomy, family planning', who: 'Dr. S Mounika Reddy', href: '/services/gynaecology' },
  { dept: 'Fertility treatment', covers: 'Semen analysis, ovulation study, IUI, IVF and ICSI', who: 'Dr. S Mounika Reddy', href: '/services/fertility' },
  { dept: 'Children’s care', covers: 'Check-ups, vaccination, growth monitoring, children’s ward, 24-hour paediatric emergency', who: 'Dr. Sudarshan Reddy K', href: '/services/paediatrics' },
  { dept: 'Newborn care and NICU', covers: 'Preterm baby care, CPAP and HFNC breathing support, ventilator support, jaundice phototherapy', who: 'Dr. Sudarshan Reddy K', href: '/services/neonatal' },
  { dept: 'General medicine', covers: 'Fever and infections, diabetes, ICU and ventilator support, preventive health check-ups', who: 'Dr. B Surya', href: '/services/general-medicine' },
  { dept: 'General and laparoscopic surgery', covers: 'Keyhole and laser surgery, planned and emergency operations, care after surgery', who: 'Dr. M Vinay Kumar', href: '/services/surgery' },
  { dept: 'Orthopaedics', covers: 'Fractures and injuries, joint pain, back and neck pain', who: 'Dr. B Someshwar Reddy', href: '/services/orthopaedics' },
  { dept: 'Eye care', covers: 'Eye check-ups, common eye problems, eye checks for people with diabetes or high BP', who: 'Ophthalmologist', href: '/services/ophthalmology' },
  { dept: 'Lab and scans', covers: 'Blood and hormone tests, digital X-ray, ultrasound and Doppler, ECG', who: 'In-house diagnostics', href: '/services/diagnostics' },
];

// ---------- Small helpers ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const icons = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  star: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 2 37.2 26.8 62 32 37.2 37.2 32 62 26.8 37.2 2 32 26.8 26.8Z" fill="#F5B700"/></svg>',
};

const callBtn = (label = `Call ${H.phone.display}`) =>
  `<a class="btn btn-call" href="${H.phone.tel}">${icons.phone}<span>${label}</span></a>`;
const directionsBtn = (label = 'Get directions') =>
  `<a class="btn btn-line" href="${H.directions}" rel="noopener">${icons.pin}<span>${label}</span></a>`;

const nav = [
  { href: '/best-childrens-hospital-in-kadapa', label: 'Children’s hospital' },
  { href: '/best-gynecologist-in-kadapa', label: 'Gynecologist & maternity' },
  { href: '/hospital-near-me-kadapa', label: 'Hospital near me' },
  { href: MAIN + '/', label: 'Main website' },
];

// ---------- Schema ----------
const hospitalId = `${MAIN}/#hospital`;
const hospitalSchema = {
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

const physicianSchema = (d) => ({
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

const faqSchema = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: strip(f.a) },
  })),
});

// ---------- Shared blocks ----------
const header = (path) => `
<a class="skip" href="#main">Skip to content</a>
<header class="topbar">
  <div class="wrap">
    <a class="brand" href="/" aria-label="Dhruva Hospitals, Kadapa: home"><img src="/images/dhruva-hospitals-logo.png" width="800" height="230" alt="Dhruva Hospitals logo"></a>
    <nav class="nav" aria-label="Main">
      ${nav.map((n) => `<a href="${n.href}"${n.href === path ? ' aria-current="page"' : ''}>${n.label}</a>`).join('\n      ')}
    </nav>
    <a class="btn btn-call btn-sm" href="${H.phone.tel}">${icons.phone}<span>Call<span class="long"> ${H.phone.display}</span></span></a>
  </div>
</header>`;

const footer = () => `
<footer class="footer">
  <div class="wrap">
    <div class="cols">
      <div>
        <h2>${icons.star.replace('<svg ', '<svg class="star" ')}Dhruva Hospitals, Kadapa</h2>
        <address>${esc(H.address.full)}</address>
        <p style="margin-top:12px"><a href="${H.phone.tel}">${H.phone.display}</a><br><a href="${H.phone2.tel}">${H.phone2.display}</a><br><a href="${H.landline.tel}">${H.landline.display}</a><br><a href="mailto:${H.email}">${H.email}</a></p>
      </div>
      <div>
        <h2>On this site</h2>
        <ul>
          <li><a href="/">Best hospital in Kadapa</a></li>
          <li><a href="/best-childrens-hospital-in-kadapa">Best children’s hospital in Kadapa</a></li>
          <li><a href="/best-gynecologist-in-kadapa">Best gynecologist in Kadapa</a></li>
          <li><a href="/hospital-near-me-kadapa">Hospital near me in Kadapa</a></li>
        </ul>
      </div>
      <div>
        <h2>dhruvahospitals.com</h2>
        <ul>
          <li><a href="${MAIN}/">Dhruva Hospitals home</a></li>
          <li><a href="${MAIN}/doctors">Our doctors</a></li>
          <li><a href="${MAIN}/services">All departments</a></li>
          <li><a href="${MAIN}/blog">Health blog</a></li>
          <li><a href="${MAIN}/nri">Care for NRI families</a></li>
          <li><a href="${MAIN}/contact">Contact the hospital</a></li>
        </ul>
      </div>
      <div>
        <h2>Follow</h2>
        <ul>
          <li><a href="${H.socials.instagram}" rel="noopener">Instagram</a></li>
          <li><a href="${H.socials.facebook}" rel="noopener">Facebook</a></li>
          <li><a href="${H.socials.youtube}" rel="noopener">YouTube</a></li>
          <li><a href="${H.maps}" rel="noopener">Google Maps</a></li>
        </ul>
      </div>
    </div>
    <div class="legal">
      <p>This site is published by Dhruva Hospitals, Kadapa. Registered under the A.P. Allopathic Private Medical Care Establishments (Registration and Regulation) Act, 2002, file no. ${H.registration.file}. Health information here is general. For advice about your own situation, see a doctor.</p>
      <p>© 2026 Dhruva Hospitals</p>
    </div>
  </div>
</footer>
<nav class="callbar" aria-label="Contact the hospital">
  <a class="call" href="${H.phone.tel}">${icons.phone}Call</a>
  <a href="${H.whatsapp}" rel="noopener">${icons.chat}WhatsApp</a>
  <a href="${H.directions}" rel="noopener">${icons.pin}Directions</a>
</nav>`;

const signband = (facts) => `
<section class="signband on-sign" aria-label="Key facts">
  <div class="wrap">
    <dl>
      ${facts.map(([dt, dd]) => `<div class="fact"><dt>${dt}</dt><dd>${dd}</dd></div>`).join('\n      ')}
    </dl>
  </div>
</section>`;

const buildingSpot = (caption) => `
<figure class="spot">
  <div class="spot-frame">
    <img src="/images/dhruva-hospitals-kadapa-building.webp" width="753" height="1024" alt="Dhruva Hospitals building in Kadapa, a corner building with blue Dhruva Hospitals signs in Telugu and English on the roof" fetchpriority="high">
    <span class="spot-ring" aria-hidden="true"></span>
  </div>
  <figcaption>${caption}</figcaption>
</figure>`;

const doctorCard = (d) => `
<figure class="doctor">
  <img src="${d.img}" width="${d.w}" height="${d.h}" alt="${esc(d.name)}" loading="lazy" style="object-position:${d.pos}">
  <figcaption>
    <h3><a href="${docUrl(d)}">${d.name}</a></h3>
    <p class="role">${d.role}</p>
    <p class="creds">${d.creds} Speaks ${d.langs}.</p>
  </figcaption>
</figure>`;

const featureDoctor = (d, intro) => `
<div class="feature">
  <img src="${d.img}" width="${d.w}" height="${d.h}" alt="${esc(d.name)}" loading="lazy" style="object-position:${d.pos}">
  <div>
    <h2>${d.name}</h2>
    <p class="role">${d.role}</p>
    ${intro}
    <dl>
      <div><dt>Qualifications</dt><dd>${d.creds}</dd></div>
      <div><dt>Languages</dt><dd>${d.langs}</dd></div>
    </dl>
    <p style="margin-top:20px"><a href="${docUrl(d)}">Read ${d.name}’s full profile on dhruvahospitals.com</a></p>
  </div>
</div>`;

const faqBlock = (faqs, heading = 'Questions families ask') => `
<section class="section" aria-labelledby="faq-h">
  <div class="wrap">
    <div class="section-head"><h2 id="faq-h">${heading}</h2></div>
    <div class="faq">
      ${faqs.map((f) => `<details><summary>${f.q}</summary><div class="answer">${f.a}</div></details>`).join('\n      ')}
    </div>
  </div>
</section>`;

const readingBlock = (items, heading = 'Read more on dhruvahospitals.com') => `
<section class="section section-tint" aria-labelledby="read-h">
  <div class="wrap">
    <div class="section-head"><h2 id="read-h">${heading}</h2></div>
    <ul class="reading">
      ${items.map(([href, label, note]) => `<li><a href="${href.startsWith('http') ? href : MAIN + href}">${label}</a>${note ? `<small>${note}</small>` : ''}</li>`).join('\n      ')}
    </ul>
  </div>
</section>`;

const findUs = (heading = 'Find Dhruva Hospitals near Sandhya Circle') => `
<section class="section" aria-labelledby="find-h" id="find-us">
  <div class="wrap findus">
    <div>
      <h2 id="find-h">${heading}</h2>
      <address class="address">${esc(H.address.full)}</address>
      <ul class="contact-list">
        <li><span>Landmarks</span><b>Beside Raithu Bazar, near Sandhya Circle</b></li>
        <li><span>Emergency</span><b>Open 24 hours</b></li>
        <li><span>Outpatient (OPD)</span><b>${H.opd}</b></li>
        <li><span>Appointments</span><a href="${H.phone.tel}">${H.phone.display}</a></li>
        <li><span>WhatsApp</span><a href="${H.whatsapp}" rel="noopener">Message the hospital</a></li>
      </ul>
      <div class="actions">${directionsBtn()}<a class="btn btn-line" href="/hospital-near-me-kadapa">How to find the building</a></div>
    </div>
    <iframe class="map" src="${H.mapEmbed}" title="Map showing Dhruva Hospitals beside Raithu Bazar, Kadapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
  </div>
</section>`;

const closing = (heading, text) => `
<section class="closing on-sign" aria-label="Book an appointment">
  <div class="wrap">
    <div><h2>${heading}</h2><p>${text}</p></div>
    <div class="actions">${callBtn()}<a class="btn btn-line" href="${H.whatsapp}" rel="noopener">${icons.chat}<span>WhatsApp</span></a></div>
  </div>
</section>`;

const crumbs = (items) => `
<nav class="crumbs wrap" aria-label="Breadcrumb"><ol>${items
  .map(([href, label], i) => (i === items.length - 1 ? `<li aria-current="page">${label}</li>` : `<li><a href="${href}">${label}</a></li>`))
  .join('')}</ol></nav>`;

const breadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([href, label], i) => ({ '@type': 'ListItem', position: i + 1, name: label, item: SITE + (href === '/' ? '/' : href) })),
});

// ---------- Page shell ----------
function page({ path, title, description, ogImage = '/images/og-image.jpg', preload, schema, body }) {
  const url = SITE + (path === '/' ? '/' : path);
  const graph = {
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
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#123E7D">
<meta name="geo.region" content="IN-AP">
<meta name="geo.placename" content="Kadapa">
<meta name="geo.position" content="${H.geo.lat};${H.geo.lng}">
<meta name="ICBM" content="${H.geo.lat}, ${H.geo.lng}">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_IN">
<meta property="og:site_name" content="Dhruva Hospitals, Kadapa">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;600;700;800&display=swap">
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
// HOME: best hospital in Kadapa
// =====================================================================
const homeFaqs = [
  {
    q: 'Which is the best hospital in Kadapa for delivery?',
    a: `<p>Look for a hospital where an obstetrician, an operation theatre for caesarean section and a NICU are all in the same building, so neither mother nor baby has to be moved in an emergency. Dhruva Hospitals has all three. <a href="${docUrl(doctors.mounika)}">Dr. S Mounika Reddy</a> leads pregnancy care and <a href="${docUrl(doctors.sudarshan)}">Dr. Sudarshan Reddy K</a> leads newborn care.</p>`,
  },
  {
    q: 'Is there a children’s hospital near me in Kadapa?',
    a: `<p>Dhruva Hospitals, beside Raithu Bazar near Sandhya Circle, has a paediatrician-led children’s department, a children’s ward and a NICU. Paediatric emergency care is open 24 hours. See <a href="/best-childrens-hospital-in-kadapa">children’s care at Dhruva Hospitals</a>.</p>`,
  },
  {
    q: 'What are the OPD timings at Dhruva Hospitals?',
    a: `<p>Outpatient consultations run ${H.opd}. Emergency care is open 24 hours, every day. Call ${H.phone.display} to check when a particular doctor is available.</p>`,
  },
  {
    q: 'How do I book an appointment?',
    a: `<p>Call <a href="${H.phone.tel}">${H.phone.display}</a> or <a href="${H.phone2.tel}">${H.phone2.display}</a>, or <a href="${H.whatsapp}" rel="noopener">send a WhatsApp message</a>. There is no online form; the front desk books you in over the phone.</p>`,
  },
  {
    q: 'Where exactly is Dhruva Hospitals in Kadapa?',
    a: `<p>${esc(H.address.full)}. It is the corner building beside Raithu Bazar, near Sandhya Circle (shown as Pylon Circle on Google Maps). <a href="/hospital-near-me-kadapa">Directions and landmarks</a>.</p>`,
  },
  {
    q: 'Is Dhruva Hospitals a registered hospital?',
    a: `<p>Yes. It is registered under the A.P. Allopathic Private Medical Care Establishments (Registration and Regulation) Act, 2002, file no. ${H.registration.file}, valid until ${H.registration.validUntil}, for ${H.registration.beds} beds.</p>`,
  },
];

const home = page({
  path: '/',
  title: 'Best Hospital in Kadapa for Mother & Child | Dhruva Hospitals',
  description:
    'Dhruva Hospitals, Kadapa: pregnancy and delivery, children’s care with a NICU, fertility, general medicine, surgery and 24-hour emergency care, beside Raithu Bazar near Sandhya Circle.',
  preload: '/images/dhruva-hospitals-kadapa-building.webp',
  schema: [faqSchema(homeFaqs), ...Object.values(doctors).map(physicianSchema)],
  body: `
<section class="hero">
  <div class="wrap">
    <div>
      <h1>Best hospital in Kadapa for mothers and children</h1>
      <p class="lede">Dhruva Hospitals is a ${H.registration.beds}-bed hospital beside Raithu Bazar, near Sandhya Circle. Pregnancy and delivery, children’s care with a NICU, fertility treatment, general medicine, surgery, eye care and orthopaedics are all under one roof, and emergency care is open 24 hours.</p>
      <div class="actions">${callBtn()}${directionsBtn()}</div>
      <p class="rating"><strong>Rated 4.9 on Google</strong> by more than 100 patients. <a href="${H.maps}" rel="noopener">Read the reviews on Google Maps</a></p>
    </div>
    ${buildingSpot('Look for the blue Dhruva Hospitals sign on the roof of the corner building, beside Raithu Bazar.')}
  </div>
</section>
${signband([
  ['Emergency', 'Open 24 hours'],
  ['Outpatient (OPD)', H.opd],
  ['Beds', String(H.registration.beds)],
  ['A.P. registration', `File no. ${H.registration.file}`],
])}
<section class="section" aria-labelledby="dept-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="dept-h">Departments at Dhruva Hospitals, Kadapa</h2>
      <p class="section-intro">Every department below has a full page on the hospital’s main website, with the treatments it offers and the doctor who leads it.</p>
    </div>
    <ul class="directory on-sign">
      ${departments
        .map(
          (d) => `<li><a href="${MAIN}${d.href}"><span class="dept">${d.dept}</span><span class="covers">${d.covers}</span><span class="who">${d.who}</span></a></li>`
        )
        .join('\n      ')}
    </ul>
  </div>
</section>
<section class="section section-tint" aria-labelledby="doc-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="doc-h">Senior doctors</h2>
      <p class="section-intro">Between them, the doctors speak Telugu, English, Hindi, Kannada and Tamil.</p>
    </div>
    <div class="doctors">
      ${[doctors.sudarshan, doctors.mounika, doctors.surya, doctors.vinay].map(doctorCard).join('')}
    </div>
    <p class="source-note"><a href="${MAIN}/doctors">See every doctor at Dhruva Hospitals</a></p>
  </div>
</section>
<section class="section" aria-labelledby="choose-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="choose-h">How to choose the best hospital in Kadapa</h2>
      <p class="section-intro">The best hospital is the one that fits what your family needs. These are the questions worth asking any hospital before you need it, and how Dhruva Hospitals answers them.</p>
    </div>
    <ul class="asklist">
      <li><span class="q">Is emergency care open at night?</span><span class="a"><strong>Yes.</strong> Emergency care at Dhruva Hospitals is open 24 hours, every day, including for children and newborns.</span></li>
      <li><span class="q">If my newborn needs special care, will we have to move hospitals?</span><span class="a">The <strong>NICU is in the same building</strong> as the delivery rooms, with CPAP, HFNC and ventilator support, so a newborn who needs help can be cared for on site.</span></li>
      <li><span class="q">Who are the specialists, and what are their qualifications?</span><span class="a">Each senior doctor’s qualifications are listed above and on <a href="${MAIN}/doctors">the doctors page</a>, including DNB Paediatrics, MS (OBG) and MD General Medicine from JIPMER.</span></li>
      <li><span class="q">Is the hospital registered with the state?</span><span class="a"><strong>Yes.</strong> Registered under the A.P. Allopathic Private Medical Care Establishments Act, 2002, file no. ${H.registration.file}, valid until ${H.registration.validUntil}.</span></li>
      <li><span class="q">Are tests, scans and medicines available inside?</span><span class="a"><strong>Yes.</strong> There is an in-house lab, digital X-ray, ultrasound and Doppler, ECG and a pharmacy.</span></li>
      <li><span class="q">Can I book without travelling first?</span><span class="a"><strong>Yes.</strong> Call <a href="${H.phone.tel}">${H.phone.display}</a> or WhatsApp the same number.</span></li>
    </ul>
  </div>
</section>
<section class="section section-tint" aria-label="About the name Dhruva">
  <div class="wrap">
    <div class="meaning">
      ${icons.star}
      <p>Dhruva is the pole star: the one star that stays fixed while the others turn, which travellers have long used to find their way. Paediatrician Dr. Sudarshan Reddy K opened Dhruva Hospitals in Kadapa on ${H.opened}.</p>
    </div>
  </div>
</section>
${findUs()}
${faqBlock(homeFaqs)}
${readingBlock([
  ['/blog/choosing-a-paediatrician-kadapa', 'How to choose a paediatrician in Kadapa'],
  ['/blog/choosing-a-gynaecologist-kadapa', 'How to choose a gynaecologist in Kadapa'],
  ['/blog/test-tube-baby-ivf-kadapa', 'Test tube baby (IVF) treatment in Kadapa'],
  ['/blog/general-physician-kadapa-when-to-see', 'When to see a general physician in Kadapa'],
  ['/guides/delivering-in-kadapa-from-dubai', 'Coming home from the Gulf to deliver in Kadapa', 'A guide for NRI families'],
  [H.familyGuide, 'Hospital in Kadapa for child care, pregnancy and fertility: a family guide', 'Open-access guide published by Dhruva Hospitals'],
])}
${closing('Book an appointment at Dhruva Hospitals', `Call or WhatsApp ${H.phone.display}. Outpatient hours are ${H.opd}; emergency care is open 24 hours.`)}
`,
});

// =====================================================================
// CHILDREN: best children's hospital / pediatrician in Kadapa
// =====================================================================
const kidsFaqs = [
  {
    q: 'Who is the best pediatrician in Kadapa?',
    a: `<p>The right paediatrician for your family is qualified in paediatrics, reachable when your child is unwell, and backed by a hospital that can admit children and newborns. At Dhruva Hospitals that is <a href="${docUrl(doctors.sudarshan)}">Dr. Sudarshan Reddy K</a> (MBBS, DNB Paediatrics, IAP Fellowship in Neonatology), formerly a consultant at RIMS Kadapa.</p>`,
  },
  {
    q: 'Is there a NICU in Kadapa for premature babies?',
    a: `<p>Yes. Dhruva Hospitals has a NICU with CPAP, HFNC and ventilator support, phototherapy for jaundice and care for babies born before 37 weeks. It is in the same building as the delivery rooms.</p>`,
  },
  {
    q: 'Is a children’s doctor available at night?',
    a: `<p>The hospital’s neonatal and paediatric emergency team is on duty day and night. If your child is seriously unwell, come straight in.</p>`,
  },
  {
    q: 'Do you give baby vaccinations?',
    a: `<p>Yes. Vaccinations follow the Indian Academy of Paediatrics (IAP) schedule. Bring your child’s vaccination card to each visit. <a href="${MAIN}/blog/baby-vaccination-schedule-india">See the vaccination schedule</a>.</p>`,
  },
  {
    q: 'Can my child be admitted at Dhruva Hospitals?',
    a: `<p>Yes. There is a children’s ward with round-the-clock nursing, and intensive care with ventilator support for children who are critically ill.</p>`,
  },
];

const kids = page({
  path: '/best-childrens-hospital-in-kadapa',
  title: 'Best Pediatrician & Children’s Hospital in Kadapa | Dhruva',
  description:
    'Children’s care in Kadapa led by paediatrician and neonatologist Dr. Sudarshan Reddy K: check-ups, vaccination, children’s ward, NICU and 24-hour paediatric emergency near Sandhya Circle.',
  preload: '/images/paediatrician-kadapa-checking-baby.webp',
  schema: [
    faqSchema(kidsFaqs),
    physicianSchema(doctors.sudarshan),
    breadcrumbSchema([['/', 'Best hospital in Kadapa'], ['/best-childrens-hospital-in-kadapa', 'Best children’s hospital in Kadapa']]),
  ],
  body: `
${crumbs([['/', 'Best hospital in Kadapa'], ['', 'Children’s hospital']])}
<section class="hero wide">
  <div class="wrap">
    <div>
      <h1>Best children’s hospital and pediatrician in Kadapa</h1>
      <p class="lede">Children’s care at Dhruva Hospitals is led by paediatrician and neonatologist Dr. Sudarshan Reddy K. Check-ups, vaccinations, a children’s ward and a NICU for newborns are in one building near Sandhya Circle, and the paediatric emergency team is on duty day and night.</p>
      <div class="actions">${callBtn()}${directionsBtn()}</div>
    </div>
    <figure class="photo"><img src="/images/paediatrician-kadapa-checking-baby.webp" width="960" height="640" alt="Paediatrician listening to a baby’s chest with a stethoscope while the mother holds the baby" fetchpriority="high"></figure>
  </div>
</section>
${signband([
  ['Paediatric emergency', 'Day and night'],
  ['Newborn care', 'NICU on site'],
  ['Vaccination', 'IAP schedule'],
  ['Doctor speaks', 'Telugu, English, Kannada'],
])}
<section class="section" aria-labelledby="cover-h">
  <div class="wrap">
    <div class="section-head"><h2 id="cover-h">What the children’s department covers</h2></div>
    <div class="covers-grid">
      <div>
        <h3>Children</h3>
        <ul class="ticks">
          <li>Check-ups and illness visits for babies and children</li>
          <li>Vaccination as per the IAP schedule</li>
          <li>Growth and development monitoring</li>
          <li>Children’s ward with round-the-clock nursing</li>
          <li>Intensive care with ventilator support</li>
          <li>24-hour paediatric emergency</li>
        </ul>
        <a href="${MAIN}/services/paediatrics">Paediatrics in Kadapa: full department page</a>
      </div>
      <div>
        <h3>Newborns and the NICU</h3>
        <ul class="ticks">
          <li>Care for babies born before 37 weeks</li>
          <li>Continuous monitoring of oxygen, heart rate and temperature</li>
          <li>CPAP and HFNC breathing support</li>
          <li>Ventilator support</li>
          <li>Phototherapy for newborn jaundice</li>
          <li>24-hour neonatal emergency</li>
        </ul>
        <a href="${MAIN}/services/neonatal">NICU in Kadapa: full department page</a>
      </div>
    </div>
  </div>
</section>
<section class="section section-tint" aria-label="The paediatrician">
  <div class="wrap">
    ${featureDoctor(
      doctors.sudarshan,
      `<p>Dr. Sudarshan Reddy K founded Dhruva Hospitals and opened it in Kadapa on ${H.opened}. He trained at Apollo Hospitals, Mysore and Ankura Hospital, Hyderabad, and was formerly a consultant at RIMS Kadapa and PES Medical College, Kuppam.</p>`
    )}
  </div>
</section>
<section class="section" aria-labelledby="danger-h">
  <div class="wrap">
    <div class="alert">
      <h2 id="danger-h">Bring your child to hospital straight away if they</h2>
      <ul>
        <li>cannot drink or breastfeed</li>
        <li>vomit everything they take</li>
        <li>have had a fit (convulsion)</li>
        <li>are unusually sleepy or hard to wake</li>
        <li>are breathing fast or with difficulty, or the chest pulls in with each breath</li>
        <li>are younger than 2 months and have a fever, feel cold, or are not feeding well</li>
      </ul>
      <p class="small">Based on the World Health Organization’s danger signs for children. Emergency care at Dhruva Hospitals is open 24 hours. <a href="${MAIN}/blog/newborn-danger-signs">Newborn danger signs</a> and <a href="${MAIN}/blog/when-to-take-child-to-hospital">when to take a child to hospital</a> explain more.</p>
    </div>
  </div>
</section>
<section class="section section-tint" aria-labelledby="choose-h">
  <div class="wrap">
    <div class="section-head"><h2 id="choose-h">Choosing a pediatrician in Kadapa: what to ask</h2></div>
    <ul class="asklist">
      <li><span class="q">Is the paediatrician trained in newborn care?</span><span class="a">Dr. Sudarshan Reddy K holds an <strong>IAP Fellowship in Neonatology</strong> on top of DNB Paediatrics.</span></li>
      <li><span class="q">Can the hospital admit my child if needed?</span><span class="a"><strong>Yes.</strong> There is a children’s ward and intensive care with ventilator support.</span></li>
      <li><span class="q">If my baby is born early, is there a NICU on site?</span><span class="a"><strong>Yes</strong>, in the same building as the delivery rooms.</span></li>
      <li><span class="q">Which vaccination schedule do you follow?</span><span class="a">The <strong>IAP schedule</strong>, recorded on your child’s card at every visit.</span></li>
    </ul>
  </div>
</section>
${faqBlock(kidsFaqs)}
${readingBlock([
  ['/blog/choosing-a-paediatrician-kadapa', 'How to choose a paediatrician in Kadapa'],
  ['/guides/paediatrician-appointment-kadapa', 'Booking a paediatrician appointment in Kadapa'],
  ['/blog/baby-vaccination-schedule-india', 'Baby vaccination schedule in India'],
  ['/blog/fever-in-children', 'Fever in children: what to do at home'],
  ['/blog/newborn-jaundice', 'Newborn jaundice'],
  ['/blog/premature-baby-nicu-care', 'Premature babies and NICU care'],
  ['/guides/nicu-levels-of-care', 'NICU levels of care explained'],
  ['/blog/child-development-milestones', 'Child development milestones'],
])}
${findUs('Children’s hospital near Sandhya Circle, Kadapa')}
${closing('Book a visit with the paediatrician', `Call or WhatsApp ${H.phone.display}. If your child is seriously unwell, come straight in: emergency care is open 24 hours.`)}
`,
});

// =====================================================================
// GYNAECOLOGY / MATERNITY: best gynecologist in Kadapa
// =====================================================================
const gyneFaqs = [
  {
    q: 'Who is the best gynecologist in Kadapa?',
    a: `<p>Look for a gynaecologist with a postgraduate qualification in obstetrics and gynaecology who works in a hospital with an operation theatre and a NICU. At Dhruva Hospitals that is <a href="${docUrl(doctors.mounika)}">Dr. S Mounika Reddy</a> (MBBS, MS OBG), with further fellowships in reproductive medicine, minimal access surgery and fetal scans.</p>`,
  },
  {
    q: 'Which is the best maternity hospital in Kadapa?',
    a: `<p>For delivery, the hospital should have a gynaecologist, an operation theatre for caesarean section and a NICU in the same building. Dhruva Hospitals has all three, with painless labour options for normal delivery.</p>`,
  },
  {
    q: 'Do you offer painless normal delivery?',
    a: `<p>Yes, painless labour options are available for normal delivery. Your gynaecologist will discuss whether they suit you during your antenatal visits. <a href="${MAIN}/blog/painless-delivery-epidural">Read about painless delivery</a>.</p>`,
  },
  {
    q: 'Is there a fertility centre in Kadapa?',
    a: `<p>Dhruva Hospitals offers fertility tests and treatment, including semen analysis, ovulation study, IUI, IVF and ICSI, led by Dr. S Mounika Reddy. <a href="${MAIN}/services/fertility">Fertility treatment in Kadapa</a>.</p>`,
  },
  {
    q: 'Do you treat PCOD and irregular periods?',
    a: `<p>Yes. PCOD / PCOS, heavy, painful, irregular or missed periods, fibroids and ovarian cysts are all treated in the gynaecology department.</p>`,
  },
];

const gyne = page({
  path: '/best-gynecologist-in-kadapa',
  title: 'Best Gynecologist & Maternity Hospital in Kadapa | Dhruva',
  description:
    'Pregnancy care, normal and caesarean delivery, gynaecology and fertility treatment in Kadapa with Dr. S Mounika Reddy (MBBS, MS OBG) at Dhruva Hospitals, with a NICU in the same building.',
  preload: '/images/gynecologist-kadapa-pregnancy-consultation.webp',
  schema: [
    faqSchema(gyneFaqs),
    physicianSchema(doctors.mounika),
    breadcrumbSchema([['/', 'Best hospital in Kadapa'], ['/best-gynecologist-in-kadapa', 'Best gynecologist in Kadapa']]),
  ],
  body: `
${crumbs([['/', 'Best hospital in Kadapa'], ['', 'Gynecologist and maternity']])}
<section class="hero wide">
  <div class="wrap">
    <div>
      <h1>Best gynecologist and maternity hospital in Kadapa</h1>
      <p class="lede">Pregnancy care, delivery, gynaecology and fertility treatment at Dhruva Hospitals are led by Dr. S Mounika Reddy, MBBS, MS (OBG). The operation theatre and the NICU are in the same building, so mother and baby are cared for under one roof.</p>
      <div class="actions">${callBtn()}${directionsBtn()}</div>
    </div>
    <figure class="photo"><img src="/images/gynecologist-kadapa-pregnancy-consultation.webp" width="960" height="677" alt="Gynaecologist in a consultation with a pregnant woman" fetchpriority="high"></figure>
  </div>
</section>
${signband([
  ['Delivery', 'Normal and caesarean'],
  ['Labour', 'Painless options'],
  ['Newborn care', 'NICU on site'],
  ['Fertility', 'IUI, IVF, ICSI'],
])}
<section class="section" aria-labelledby="cover-h">
  <div class="wrap">
    <div class="section-head"><h2 id="cover-h">Pregnancy, gynaecology and fertility care</h2></div>
    <div class="covers-grid three">
      <div>
        <h3>Pregnancy and delivery</h3>
        <ul class="ticks">
          <li>Pregnancy confirmation and antenatal check-ups</li>
          <li>Pregnancy scans</li>
          <li>Normal delivery, with painless labour options</li>
          <li>Planned and emergency caesarean section</li>
          <li>High-risk pregnancy, including high BP and diabetes in pregnancy</li>
          <li>Ectopic pregnancy treatment</li>
        </ul>
        <a href="${MAIN}/services/pregnancy">Pregnancy care in Kadapa</a>
      </div>
      <div>
        <h3>Gynaecology</h3>
        <ul class="ticks">
          <li>PCOD / PCOS</li>
          <li>Heavy, painful, irregular or missed periods</li>
          <li>Fibroids and ovarian cysts</li>
          <li>Hysteroscopy</li>
          <li>Open and laparoscopic hysterectomy</li>
          <li>Family planning and adolescent gynaecology</li>
        </ul>
        <a href="${MAIN}/services/gynaecology">Gynaecology in Kadapa</a>
      </div>
      <div>
        <h3>Fertility centre in Kadapa</h3>
        <ul class="ticks">
          <li>Semen analysis</li>
          <li>Ovulation study (follicular monitoring)</li>
          <li>IUI</li>
          <li>IVF and ICSI</li>
          <li>Treatment for male infertility</li>
        </ul>
        <a href="${MAIN}/services/fertility">Fertility and IVF in Kadapa</a>
      </div>
    </div>
    <p class="pcpndt">Sex determination of the fetus is prohibited under the PC-PNDT Act, 1994. Dhruva Hospitals does not disclose the sex of the baby.</p>
  </div>
</section>
<section class="section section-tint" aria-label="The gynaecologist">
  <div class="wrap">
    ${featureDoctor(
      doctors.mounika,
      `<p>Dr. S Mounika Reddy treats pregnancy, gynaecological conditions and infertility, and performs laparoscopic gynaecological surgery. Training includes reproductive medicine at Hegde Hospitals, minimal access surgery at KIMS and fertility medicine at Ferty9 in Hyderabad, and a fellowship in fetal scans. Families living abroad can book a video consultation before travelling, through the <a href="${MAIN}/nri">NRI desk</a>.</p>`
    )}
  </div>
</section>
<section class="section" aria-labelledby="danger-h">
  <div class="wrap">
    <div class="alert">
      <h2 id="danger-h">In pregnancy, go to hospital straight away if you have</h2>
      <ul>
        <li>bleeding from the vagina</li>
        <li>a fit (convulsion)</li>
        <li>a severe headache with blurred vision</li>
        <li>a fever and feel too weak to get out of bed</li>
        <li>severe pain in the belly</li>
        <li>fast or difficult breathing</li>
        <li>noticed your baby moving less than usual</li>
      </ul>
      <p class="small">Based on the World Health Organization’s danger signs in pregnancy and NHS advice on baby movements. Emergency care at Dhruva Hospitals is open 24 hours. <a href="${MAIN}/blog/bleeding-in-early-pregnancy">Bleeding in early pregnancy</a> and <a href="${MAIN}/blog/high-bp-in-pregnancy-pre-eclampsia">high BP in pregnancy</a> explain more.</p>
    </div>
  </div>
</section>
<section class="section section-tint" aria-labelledby="choose-h">
  <div class="wrap">
    <div class="section-head"><h2 id="choose-h">Choosing a gynecologist in Kadapa: what to ask</h2></div>
    <ul class="asklist">
      <li><span class="q">Does the gynaecologist have a postgraduate degree?</span><span class="a">Dr. S Mounika Reddy holds an <strong>MS in Obstetrics and Gynaecology</strong>, plus fellowships in reproductive medicine and minimal access surgery.</span></li>
      <li><span class="q">Can the hospital do an emergency caesarean at any hour?</span><span class="a">Planned and emergency caesarean sections are done in the hospital’s <strong>operation theatres, 24 hours a day</strong>.</span></li>
      <li><span class="q">If the baby needs help after birth, is there a NICU?</span><span class="a"><strong>Yes</strong>, in the same building, led by neonatologist Dr. Sudarshan Reddy K.</span></li>
      <li><span class="q">Are scans and lab tests done in the hospital?</span><span class="a"><strong>Yes.</strong> Ultrasound, Doppler, blood and hormone tests are done in-house.</span></li>
    </ul>
  </div>
</section>
${faqBlock(gyneFaqs)}
${readingBlock([
  ['/blog/choosing-a-gynaecologist-kadapa', 'How to choose a gynaecologist in Kadapa'],
  ['/guides/gynaecology-appointment-kadapa', 'Booking a gynaecology appointment in Kadapa'],
  ['/blog/antenatal-check-up-schedule', 'Antenatal check-up schedule'],
  ['/blog/pregnancy-scans-guide', 'Pregnancy scans: which and when'],
  ['/blog/normal-delivery-vs-c-section', 'Normal delivery or C-section'],
  ['/blog/pcod-pcos-symptoms-treatment', 'PCOD / PCOS symptoms and treatment'],
  ['/blog/when-to-see-fertility-specialist', 'When to see a fertility specialist'],
  ['/blog/ivf-vs-icsi', 'IVF or ICSI: the difference'],
])}
${findUs('Maternity hospital near Sandhya Circle, Kadapa')}
${closing('Book a visit with the gynaecologist', `Call or WhatsApp ${H.phone.display}. In an emergency in pregnancy, come straight in: emergency care is open 24 hours.`)}
`,
});

// =====================================================================
// NEAR ME: hospital near me in Kadapa
// =====================================================================
const nearFaqs = [
  {
    q: 'Is there a 24-hour hospital near me in Kadapa?',
    a: `<p>Dhruva Hospitals, beside Raithu Bazar near Sandhya Circle, has emergency care open 24 hours, every day, for adults, children and newborns.</p>`,
  },
  {
    q: 'Which hospital is beside Raithu Bazar in Kadapa?',
    a: `<p>Dhruva Hospitals is the corner building beside Raithu Bazar in Dwaraka Nagar, with blue Dhruva Hospitals signs in Telugu and English on the roof.</p>`,
  },
  {
    q: 'Which hospital is near Sandhya Circle, Kadapa?',
    a: `<p>Dhruva Hospitals is a short distance from Sandhya Circle, which Google Maps labels Pylon Circle. Search “Dhruva Hospitals Kadapa” in Google Maps or use <a href="${H.directions}" rel="noopener">these directions</a>.</p>`,
  },
  {
    q: 'What should I bring to my first visit?',
    a: `<p>Bring any earlier prescriptions and test reports, a list of the medicines you take and an ID such as Aadhaar. For pregnancy, bring your antenatal card and scan reports; for a child, bring the vaccination card.</p>`,
  },
];

const near = page({
  path: '/hospital-near-me-kadapa',
  title: 'Hospital Near Me in Kadapa: Directions to Dhruva Hospitals',
  description:
    'How to reach Dhruva Hospitals in Kadapa: beside Raithu Bazar, near Sandhya Circle, Dwaraka Nagar. Address, landmarks, Google Maps directions, OPD hours and 24-hour emergency care.',
  preload: '/images/dhruva-hospitals-kadapa-building.webp',
  schema: [faqSchema(nearFaqs), breadcrumbSchema([['/', 'Best hospital in Kadapa'], ['/hospital-near-me-kadapa', 'Hospital near me in Kadapa']])],
  body: `
${crumbs([['/', 'Best hospital in Kadapa'], ['', 'Hospital near me']])}
<section class="hero wide">
  <div class="wrap">
    <div>
      <h1>Hospital near me in Kadapa: how to reach Dhruva Hospitals</h1>
      <p class="lede">Dhruva Hospitals is the corner building beside Raithu Bazar in Dwaraka Nagar, a short way from Sandhya Circle. Emergency care is open 24 hours; outpatient consultations run ${H.opd}.</p>
      <div class="actions">${directionsBtn('Directions from where you are')}${callBtn()}</div>
    </div>
    ${buildingSpot('This is what you will see when you arrive: the blue Dhruva Hospitals sign on the roof of the corner building.')}
  </div>
</section>
${signband([
  ['Emergency', 'Open 24 hours'],
  ['Outpatient (OPD)', H.opd],
  ['Landmark', 'Beside Raithu Bazar'],
  ['Plus code', H.plusCode],
])}
<section class="section" aria-labelledby="addr-h">
  <div class="wrap findus">
    <div>
      <h2 id="addr-h">Address and landmarks</h2>
      <address class="address">${esc(H.address.full)}</address>
      <ul class="ticks">
        <li>Beside Raithu Bazar, Dwaraka Nagar</li>
        <li>Near Sandhya Circle, which Google Maps labels Pylon Circle</li>
        <li>Next to Yerramukkapalli on Google Maps</li>
        <li>Map pin: ${H.geo.lat}, ${H.geo.lng}</li>
      </ul>
      <div class="actions"><a class="btn btn-line" href="${H.maps}" rel="noopener">${icons.pin}<span>Open in Google Maps</span></a></div>
    </div>
    <iframe class="map" src="${H.mapEmbed}" title="Map showing Dhruva Hospitals beside Raithu Bazar, Kadapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
  </div>
</section>
<section class="section section-tint" aria-labelledby="come-h">
  <div class="wrap">
    <div class="section-head"><h2 id="come-h">Before you set out</h2></div>
    <ul class="asklist">
      <li><span class="q">In an emergency</span><span class="a">Come straight in: <strong>emergency care is open 24 hours</strong>. For an ambulance anywhere in Andhra Pradesh, dial <a href="tel:108">108</a>.</span></li>
      <li><span class="q">For a doctor’s appointment</span><span class="a">Call <a href="${H.phone.tel}">${H.phone.display}</a> or <a href="${H.whatsapp}" rel="noopener">WhatsApp</a> to check the doctor you need is in and book a time.</span></li>
      <li><span class="q">Travelling from outside Kadapa town</span><span class="a">If you are coming from Proddatur, Rajampet, Rayachoti, Pulivendula, Badvel or Mydukur, call before you leave so your visit is booked when you arrive.</span></li>
      <li><span class="q">What to bring</span><span class="a">Earlier prescriptions and reports, your list of medicines and an ID. For pregnancy, your antenatal card; for a child, the vaccination card.</span></li>
    </ul>
  </div>
</section>
<section class="section" aria-labelledby="which-h">
  <div class="wrap">
    <div class="section-head">
      <h2 id="which-h">Which care do you need?</h2>
      <p class="section-intro">Dhruva Hospitals is closest to hand for families near Sandhya Circle, Dwaraka Nagar and the Raithu Bazar area. These pages explain each kind of care.</p>
    </div>
    <ul class="directory on-sign">
      <li><a href="/best-childrens-hospital-in-kadapa"><span class="dept">Children’s hospital</span><span class="covers">Paediatrician, vaccination, children’s ward, NICU, paediatric emergency</span><span class="who">Dr. Sudarshan Reddy K</span></a></li>
      <li><a href="/best-gynecologist-in-kadapa"><span class="dept">Gynecologist and maternity</span><span class="covers">Pregnancy, delivery, gynaecology and fertility treatment</span><span class="who">Dr. S Mounika Reddy</span></a></li>
      <li><a href="${MAIN}/services/general-medicine"><span class="dept">General physician</span><span class="covers">Fever, diabetes, BP, ICU care and health check-ups</span><span class="who">Dr. B Surya</span></a></li>
      <li><a href="${MAIN}/services/surgery"><span class="dept">Surgeon</span><span class="covers">General, laser and laparoscopic surgery</span><span class="who">Dr. M Vinay Kumar</span></a></li>
    </ul>
  </div>
</section>
${faqBlock(nearFaqs)}
${closing('Call before you come', `${H.phone.display} for appointments. Emergency care is open 24 hours.`)}
`,
});

// =====================================================================
// 404, sitemap, robots
// =====================================================================
const notFound = page({
  path: '/404',
  title: 'Page not found | Dhruva Hospitals, Kadapa',
  description: 'This page does not exist. Find Dhruva Hospitals, Kadapa, or call the hospital.',
  schema: [],
  body: `
<section class="hero wide">
  <div class="wrap">
    <div>
      <h1>This page doesn’t exist</h1>
      <p class="lede">The link may be old or mistyped. You can go to the <a href="/">Dhruva Hospitals Kadapa page</a> or call the hospital on ${H.phone.display}.</p>
      <div class="actions">${callBtn()}${directionsBtn()}</div>
    </div>
  </div>
</section>`,
}).replace('<meta name="robots" content="index, follow, max-image-preview:large">', '<meta name="robots" content="noindex">');

const pages = [
  ['index.html', home, '/', '1.0'],
  ['best-childrens-hospital-in-kadapa.html', kids, '/best-childrens-hospital-in-kadapa', '0.9'],
  ['best-gynecologist-in-kadapa.html', gyne, '/best-gynecologist-in-kadapa', '0.9'],
  ['hospital-near-me-kadapa.html', near, '/hospital-near-me-kadapa', '0.8'],
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
