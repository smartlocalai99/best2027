// Facts about Advocate Rajesh Kumar Reddy, all taken from his own website and Google Business Profile.
// Set NEXT_PUBLIC_SITE_URL in Vercel if the domain differs from the default below.
export const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://best-lawyer-in-kadapa.vercel.app').replace(/\/$/, '');
export const MAIN = 'https://www.rajeshkumarreddyadvocatekadapa.com';
export const UPDATED = '2026-11-16';

export const A = {
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

export const link = (path) => (path.startsWith('http') ? path : MAIN + path);

export const practice = [
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

export const courts = [
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

export const nav = [
  { href: '/best-criminal-lawyer-in-kadapa', label: 'Criminal & bail' },
  { href: '/best-property-lawyer-in-kadapa', label: 'Property & civil' },
  { href: '/best-divorce-lawyer-in-kadapa', label: 'Divorce & family' },
  { href: MAIN + '/', label: 'Official website' },
];

export const pages = [
  { path: '/', priority: 1.0 },
  { path: '/best-criminal-lawyer-in-kadapa', priority: 0.9 },
  { path: '/best-property-lawyer-in-kadapa', priority: 0.9 },
  { path: '/best-divorce-lawyer-in-kadapa', priority: 0.9 },
];
