import type { Metadata } from "next";
import { Inter, Playfair_Display, Italianno } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { BookingProvider } from "@/components/BookingPopup";
import { SITE_URL } from "@/lib/siteUrl";

const DEFAULT_OG_IMAGE = "/images/yhn-clone/your-health-now.jpg";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const italianno = Italianno({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Your Health Now | Chiropractors in Chalfont, PA & Merchantville, NJ",
    template: "%s | Your Health Now",
  },
  description:
    "Are you seeking pain relief? Our chiropractor provides effective treatment for patients like you in Chalfont, PA & Merchantville, NJ. Call today for an appointment!",
  openGraph: {
    siteName: "Your Health Now",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Your Health Now - Chiropractic & Functional Medicine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Your Health Now",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.webp`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  medicalSpecialty: ["Chiropractic", "Functional Medicine"],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/yhnhealth/",
    "https://www.instagram.com/p/DQrd5dHE7_b/",
    "https://www.linkedin.com/company/your-health-now-llc",
  ],
  location: [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/locations#merchantville`,
      name: "Your Health Now - Merchantville",
      telephone: "+1-856-532-2063",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5 W Chestnut Ave",
        addressLocality: "Merchantville",
        addressRegion: "NJ",
        postalCode: "08109",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:30",
          closes: "20:00",
        },
      ],
    },
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/locations#chalfont`,
      name: "Your Health Now - Chalfont",
      telephone: "+1-609-651-7436",
      address: {
        "@type": "PostalAddress",
        streetAddress: "350 N Main St #201",
        addressLocality: "Chalfont",
        addressRegion: "PA",
        postalCode: "18914",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:30",
          closes: "20:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${italianno.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-cream-light text-ink antialiased">
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <Script
          id="ga4-loader"
          src="https://www.googletagmanager.com/gtag/js?id=G-GX8PHZR3EG"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GX8PHZR3EG');
          `}
        </Script>
        <BookingProvider>
          <ScrollToTop />
          <Header />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </BookingProvider>

        {/* Knock Knock chatbot widget - loaded on every page except bare landing pages */}
        <Script id="knock-knock-widget" strategy="afterInteractive">
          {`
            (function () {
              var bareRoutes = ['/functional-medicine-special-offer'];
              var path = window.location.pathname.replace(/\\/$/, '');
              for (var i = 0; i < bareRoutes.length; i++) {
                if (path === bareRoutes[i] || path.indexOf(bareRoutes[i] + '/') === 0) {
                  return;
                }
              }
              window.company_id = '6a355eb46b7af26290ba9224';
              var newScript = document.createElement('script');
              newScript.src = 'https://api.knock-knockapp.com/widget/widget.js';
              document.getElementsByTagName('HEAD')[0].appendChild(newScript);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
