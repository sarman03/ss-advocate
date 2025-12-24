import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import DisclaimerModal from "@/components/DisclaimerModal/DisclaimerModal";
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ssadvocatesnoida.com'),
  title: "S.S. Advocates Law Firm | Expert Legal Services & Consultation",
  description: "Dedicated legal advocate with 30 years of experience providing strategic counsel. We offer property registration, family law, legal drafting, dispute resolution, and consultation services.",
  keywords: [
    "legal services",
    "law firm",
    "advocates",
    "legal consultation",
    "property registration",
    "family law",
    "legal drafting",
    "dispute resolution",
    "legal advice",
    "attorney",
    "lawyer",
    "S.S. Advocates",
    "legal counsel",
    "lawyer in Noida",
    "advocates in Noida",
    "legal services Noida",
    "property lawyer Noida",
    "property registration Noida",
    "family lawyer Noida",
    "legal consultation Noida",
    "dispute resolution Noida",
    "best lawyer in Noida",
    "law firm Noida",
    "advocate Noida",
    "legal advisor Noida",
    "property consultant Noida"
  ],
  authors: [{ name: "S.S. Advocates" }],
  creator: "S.S. Advocates",
  publisher: "S.S. Advocates",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logos/logo (1).png',
    apple: '/logos/logo (1).png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ssadvocatesnoida.com/',
    siteName: 'S.S. Advocates Law Firm',
    title: 'S.S. Advocates Law Firm | Expert Legal Services & Consultation',
    description: 'Dedicated legal advocate with 30 years of experience providing strategic counsel. We offer property registration, family law, legal drafting, dispute resolution, and consultation services.',
    images: [
      {
        url: '/logos/logo (1).png',
        width: 1200,
        height: 630,
        alt: 'S.S. Advocates Law Firm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S.S. Advocates Law Firm | Expert Legal Services & Consultation',
    description: 'Dedicated legal advocate with 30 years of experience providing strategic counsel. We offer property registration, family law, legal drafting, dispute resolution, and consultation services.',
    images: ['/logos/logo (1).png']
  },
  alternates: {
    canonical: 'https://www.ssadvocatesnoida.com/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "S.S. Advocates",
              "image": "https://www.ssadvocatesnoida.com/logos/logo (1).png",
              "url": "https://www.ssadvocatesnoida.com",
              "telephone": "+91-9310722384",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chamber No. 69, Sub-Registrar Compound, Block A, Sector 33",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201307",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5880219,
                "longitude": 77.3525916
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Monday",
                  "opens": "10:30",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.ssadvocatesnoida.com"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Noida"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Registration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Family Legal Support"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Legal Drafting"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dispute Resolution"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Advisory & Consultation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Compliance & Verification"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "4"
              }
            })
          }}
        />
        <GoogleAnalytics gaId="G-R1DEEDF2CT" />
        <DisclaimerModal />
        {children}
      </body>
    </html>
  );
}
