import './globals.css';
import { SITE } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE),
  title: 'Dhruva Hospitals, Kadapa',
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon-32.png', type: 'image/png', sizes: '32x32' }],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Kadapa',
    'geo.position': '14.4643667;78.8227563',
    ICBM: '14.4643667, 78.8227563',
  },
};

export const viewport = { themeColor: '#123E7D' };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;600;700;800&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
