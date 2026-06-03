import type { Metadata } from "next";
import { Inter, Playfair_Display, Italianno } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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
        <ScrollToTop />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
