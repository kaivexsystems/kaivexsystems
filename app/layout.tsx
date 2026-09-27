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
    default: "Kaivex Systems | Marketing Systems & Growth Infrastructure",
    template: "%s | Kaivex Systems",
  },
  description:
    "Marketing systems that add 10+ qualified leads every month, consistently. Built for B2B founders, coaches, and consultants tired of referral dependency and erratic outbound.",
  keywords: [
    "Kaivex Systems",
    "Growth Engineering",
    "Digital Infrastructure",
    "B2B Marketing Systems",
    "Client Acquisition Engine",
    "Lead Generation Infrastructure",
    "Speed-to-Lead Automation",
    "LinkedIn Authority",
    "Dedicated SMTP Outbound",
    "Ahmad Farooq",
    "Ayaan Habib",
    "B2B Sales Pipeline",
    "Marketing Automation"
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
    title: "Kaivex Systems | Marketing Systems & Growth Infrastructure",
    description: "Marketing systems that add 10+ qualified leads every month, consistently.",
    url: "https://kaivexsystems.vercel.app",
    siteName: "Kaivex Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaivex Systems | Marketing Systems & Growth Infrastructure",
    description: "Marketing systems that add 10+ qualified leads every month, consistently.",
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
      description: "Dual-engine marketing systems and growth infrastructure studio for B2B founders and trade contractors.",
      founders: [
        {
          "@type": "Person",
          name: "Ahmad Farooq",
          jobTitle: "Co-Founder & Systems Architect"
        },
        {
          "@type": "Person",
          name: "Ayaan Habib",
          jobTitle: "Co-Founder & Growth Engineer"
        }
      ],
      sameAs: [
        "https://www.instagram.com/kaivexsystems/",
        "https://cal.com/ahmad-farooq-tuwcnw/15min"
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
        "B2B Client Acquisition Engine",
        "Outbound Marketing Systems",
        "Speed-to-Lead Automation",
        "Interactive Diagnostic Funnels",
        "Dedicated SMTP Email Infrastructure",
        "High-Performance Marketing Websites"
      ],
      areaServed: ["Global", "United States", "United Kingdom", "Canada"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Growth Infrastructure Sprints",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sprint 1: Core Growth Engine Setup",
              description: "Full setup of dedicated outbound infrastructure, C-suite positioning, and scorecards."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sprint 2: Scale & Automated Lead Capture",
              description: "Omni-channel routing, automated speed-to-lead dispatch, and qualification pipelines."
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
            text: "Kaivex Systems is a growth infrastructure studio founded by Ahmad Farooq and Ayaan Habib. We build marketing systems that consistently add 10+ qualified leads per month for B2B founders, consultants, and contractors by eliminating referral dependency."
          }
        },
        {
          "@type": "Question",
          name: "How does Kaivex Systems generate 10+ qualified leads per month?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kaivex deploys a dual-engine architecture: an interactive diagnostic scorecard funnel, C-suite authority ghostwriting, dedicated multi-domain SMTP cold email infrastructure, and automated sub-60-second speed-to-lead response pipelines."
          }
        },
        {
          "@type": "Question",
          name: "What makes Kaivex Systems different from traditional marketing agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional agencies sell temporary ad spend and vanity impressions. Kaivex builds owned, persistent assets: dedicated server infrastructure, automated qualification funnels, and dispatch systems that remain your intellectual property."
          }
        },
        {
          "@type": "Question",
          name: "How do I schedule a strategy consultation with Kaivex Systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can schedule a direct 15-minute architecture diagnostic via Cal.com at https://cal.com/ahmad-farooq-tuwcnw/15min or connect via WhatsApp at +1 (848) 400-4949."
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
