import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteUrl";
import BookClient from "./BookClient";

const TITLE = "Book Your Complimentary Consultation | Functional Medicine | Your Health Now";
const DESCRIPTION =
  "Reserve your complimentary 30-minute functional medicine consultation with Your Health Now in Merchantville, NJ & Chalfont, PA.";
const PATH = "/functional-medicine-special-offer/book";

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
  robots: { index: false, follow: true },
};

export default function Page() {
  return <BookClient />;
}
