import type { Metadata } from "next";
import { Inter, Playfair_Display, Italianno } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { BookingProvider } from "@/components/BookingPopup";

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
  metadataBase: new URL("https://yhnhealth.com"),
  title: {
    default: "Your Health Now | Chiropractors in Chalfont, PA & Merchantville, NJ",
    template: "%s | Your Health Now",
  },
  description:
    "Are you seeking pain relief? Our chiropractor provides effective treatment for patients like you in Chalfont, PA & Merchantville, NJ. Call today for an appointment!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${italianno.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-cream-light text-ink antialiased">
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
              if (bareRoutes.indexOf(window.location.pathname.replace(/\\/$/, '')) !== -1) {
                return;
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
