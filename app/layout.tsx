import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { Analytics } from "@/components/analytics";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaivexsystems.vercel.app"),
  title: {
    default: "Kaivex Systems | Digital Growth Company",
    template: "%s | Kaivex Systems",
  },
  description:
    "Digital infrastructure and customer acquisition systems that scale revenue. Specialized growth divisions for e-commerce brands and local service businesses.",
  keywords: [
    "Kaivex Systems",
    "Digital Growth Company",
    "E-commerce Growth",
    "Shopify Store Development",
    "Shopify Optimization",
    "Local Services Lead Generation",
    "Local SEO",
    "Google Business Profile Optimization",
    "Meta Ads Management",
    "Google Ads Management",
    "Conversion Rate Optimization",
    "Digital Marketing Infrastructure",
    "Ahmad Farooq",
    "Ayaan Habib"
  ],
  authors: [{ name: "Ahmad Farooq" }, { name: "Ayaan Habib" }],
  creator: "Kaivex Systems",
  publisher: "Kaivex Systems",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Kaivex Systems | Digital Growth Company",
    description: "Digital infrastructure and customer acquisition systems that scale revenue. E-commerce and Local Services growth divisions.",
    url: "https://kaivexsystems.vercel.app",
    siteName: "Kaivex Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaivex Systems | Digital Growth Company",
    description: "Digital infrastructure and customer acquisition systems that scale revenue. E-commerce and Local Services growth divisions.",
    creator: "@kaivexsystems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Comprehensive JSON-LD Structured Data for Google, AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kaivexsystems.vercel.app/#organization",
      name: "Kaivex Systems",
      url: "https://kaivexsystems.vercel.app",
      logo: "https://kaivexsystems.vercel.app/icon.svg",
      description: "Digital Growth Company combining digital infrastructure, technology, marketing, and customer acquisition for e-commerce brands and local services.",
      founders: [
        {
          "@type": "Person",
          name: "Ahmad Farooq",
          jobTitle: "Co-Founder & GTM, Strategy & Technology"
        },
        {
          "@type": "Person",
          name: "Ayaan Habib",
          jobTitle: "Co-Founder & Performance Marketing & Creative"
        }
      ],
      sameAs: [
        "https://www.instagram.com/kaivexsystems/",
        "https://cal.com/kaivex-systems-a9a0ud/30min"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-848-400-4949",
        contactType: "customer service",
        availableLanguage: ["English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://kaivexsystems.vercel.app/#website",
      url: "https://kaivexsystems.vercel.app",
      name: "Kaivex Systems",
      publisher: {
        "@id": "https://kaivexsystems.vercel.app/#organization"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://kaivexsystems.vercel.app/#service",
      name: "Kaivex Systems Growth Infrastructure",
      url: "https://kaivexsystems.vercel.app",
      provider: {
        "@id": "https://kaivexsystems.vercel.app/#organization"
      },
      serviceType: [
        "E-commerce Growth & Acquisition",
        "Shopify Development & Optimization",
        "Local Services Lead Generation",
        "Local SEO & Google Business Profile Management",
        "Meta & Google Ads Management",
        "Conversion Tracking & Attribution Infrastructure"
      ],
      areaServed: ["Global", "United States", "Australia", "United Kingdom"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Growth Infrastructure Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Phase 1: Digital Foundation Sprint",
              description: "Fixed-scope audit and implementation covering website/store development, conversion tracking, and campaign launch setup."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Phase 2: Monthly Growth Partnership",
              description: "Ongoing performance marketing management, creative testing, SEO/GBP optimization, and continuous storefront improvements."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://kaivexsystems.vercel.app/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Kaivex Systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kaivex Systems is a Digital Growth Company founded by Ahmad Farooq and Ayaan Habib. We combine digital infrastructure, technology, marketing, and customer acquisition to build and operate the systems required to attract customers and scale revenue."
          }
        },
        {
          "@type": "Question",
          name: "What divisions does Kaivex Systems operate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kaivex operates two dedicated divisions: E-commerce Growth & Acquisition (Shopify store development, conversion optimization, Meta/Google Ads, and creative testing) and Local Services Growth & Lead Generation (high-converting local websites, Local SEO, Google Business Profile management, and high-intent local search ads)."
          }
        },
        {
          "@type": "Question",
          name: "What makes Kaivex Systems different from traditional agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike traditional agencies that sell vanity metrics and junior account management, Kaivex delivers modular, documented systems with transparent scopes, verified conversion tracking, and direct founder accountability."
          }
        },
        {
          "@type": "Question",
          name: "How do I schedule a strategy consultation with Kaivex Systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can schedule a direct 30-minute growth diagnostic session via Cal.com at https://cal.com/kaivex-systems-a9a0ud/30min or connect via WhatsApp at +1 (848) 400-4949."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
