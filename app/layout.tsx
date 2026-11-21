import type { Metadata, Viewport } from 'next';
import { Familjen_Grotesk, Manrope } from 'next/font/google';
import './globals.css';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { Analytics } from '@/components/analytics';

const heading = Familjen_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const SITE = 'https://kaivexsystems.vercel.app';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ebe3d3' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0f14' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Kaivex Systems | E-commerce growth for Shopify brands',
    template: '%s | Kaivex Systems',
  },
  description:
    'We rebuild the storefront, run the ads and test the creative as one system, so established Shopify and DTC brands turn more traffic into profit.',
  applicationName: 'Kaivex Systems',
  keywords: [
    'Shopify development agency',
    'Shopify conversion rate optimization',
    'e-commerce growth agency',
    'Meta Ads management for e-commerce',
    'Google Ads for Shopify',
    'DTC brand growth',
    'Local SEO for HVAC',
    'Local SEO for roofing',
    'Kaivex Systems',
  ],
  authors: [{ name: 'Ahmad Farooq' }, { name: 'Ayaan Habib' }],
  creator: 'Kaivex Systems',
  publisher: 'Kaivex Systems',
  alternates: { canonical: '/' },
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' },
  openGraph: {
    title: 'Kaivex Systems | E-commerce growth for Shopify brands',
    description: 'Storefront, ads and creative run as one system for established Shopify and DTC brands.',
    url: SITE,
    siteName: 'Kaivex Systems',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaivex Systems | E-commerce growth for Shopify brands',
    description: 'Storefront, ads and creative run as one system for established Shopify and DTC brands.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// Site-wide entity data (Organization, WebSite, ProfessionalService). Page-level schema lives with each page.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE}/#organization`,
      name: 'Kaivex Systems',
      url: SITE,
      logo: `${SITE}/icon.svg`,
      description:
        'Kaivex Systems is a digital growth company that builds Shopify storefronts and customer acquisition systems for established e-commerce brands, with a secondary offer for local service businesses.',
      founder: [
        { '@type': 'Person', name: 'Ahmad Farooq', jobTitle: 'Co-Founder, GTM, Strategy & Technology' },
        { '@type': 'Person', name: 'Ayaan Habib', jobTitle: 'Co-Founder, Performance Marketing & Creative' },
      ],
      sameAs: ['https://www.instagram.com/kaivexsystems/'],
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'sales', email: 'kaivexsystems@gmail.com', telephone: '+1-848-400-4949', availableLanguage: ['English'] },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'Kaivex Systems',
      inLanguage: 'en',
      publisher: { '@id': `${SITE}/#organization` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}/#service`,
      name: 'Kaivex Systems',
      url: SITE,
      provider: { '@id': `${SITE}/#organization` },
      serviceType: [
        'Shopify development and optimization',
        'Conversion rate optimization',
        'Meta Ads and Google Ads management',
        'Creative testing',
        'Local SEO and Google Business Profile optimization',
      ],
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'United Kingdom' },
      ],
      knowsAbout: ['Shopify', 'Conversion rate optimization', 'Meta Ads', 'Google Ads', 'Local SEO', 'Email marketing'],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${heading.variable} ${sans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('kaivex_theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')}catch(e){document.documentElement.setAttribute('data-theme','light')}",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="k-body min-h-screen antialiased overflow-x-hidden">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
