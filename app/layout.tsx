import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import DisclaimerModal from "@/components/DisclaimerModal/DisclaimerModal";
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
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
    "legal counsel"
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
        <GoogleAnalytics gaId="G-R1DEEDF2CT" />
        <DisclaimerModal />
        {children}
      </body>
    </html>
  );
}
