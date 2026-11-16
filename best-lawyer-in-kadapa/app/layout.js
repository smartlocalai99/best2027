import './globals.css';
import { SITE } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE),
  title: 'Advocate Rajesh Kumar Reddy, Kadapa',
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  other: { 'geo.region': 'IN-AP', 'geo.placename': 'Kadapa' },
};

export const viewport = { themeColor: '#1F5A40' };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu:wght@400;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
