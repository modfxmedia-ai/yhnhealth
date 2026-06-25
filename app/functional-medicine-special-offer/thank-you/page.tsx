import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteUrl";
import ThankYouClient from "./ThankYouClient";

const TITLE = "Thank You - Consultation Booked | Your Health Now";
const DESCRIPTION =
  "Your complimentary functional medicine consultation with Your Health Now is confirmed. Here is what to expect next.";
const PATH = "/functional-medicine-special-offer/thank-you";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    type: "website",
    siteName: "Your Health Now",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThankYouClient />;
}
