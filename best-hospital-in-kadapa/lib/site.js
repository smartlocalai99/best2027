// Verified Dhruva Hospitals facts. Mirrors lib/site.js and lib/data.js in the main Dhruva repo.
// Set NEXT_PUBLIC_SITE_URL in Vercel if the domain differs from the default below.
export const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://best2027-8uyv.vercel.app').replace(/\/$/, '');
export const MAIN = 'https://www.dhruvahospitals.com';
export const UPDATED = '2026-11-16';

export const H = {
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

export const doctors = {
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
export const docUrl = (d) => `${MAIN}/doctors/${d.slug}`;

export const departments = [
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

export const nav = [
  { href: '/best-childrens-hospital-in-kadapa', label: 'Children’s hospital' },
  { href: '/best-gynecologist-in-kadapa', label: 'Gynecologist & maternity' },
  { href: '/hospital-near-me-kadapa', label: 'Hospital near me' },
  { href: '/blog', label: 'Guides' },
  { href: MAIN + '/', label: 'Main website' },
];

// Pages listed in the sitemap.
export const pages = [
  { path: '/', priority: 1.0 },
  { path: '/best-childrens-hospital-in-kadapa', priority: 0.9 },
  { path: '/best-gynecologist-in-kadapa', priority: 0.9 },
  { path: '/hospital-near-me-kadapa', priority: 0.8 },
  { path: '/blog', priority: 0.8 },
];
