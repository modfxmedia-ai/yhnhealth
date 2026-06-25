import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteUrl";
import FunctionalMedicineLPClient from "./FunctionalMedicineLPClient";

const TITLE = "Functional Medicine Special Offer | Complimentary Consultation | Your Health Now";
const DESCRIPTION =
  "Limited-time complimentary 30-minute functional medicine consultation in Merchantville, NJ & Chalfont, PA. Get root-cause answers - book today.";
const PATH = "/functional-medicine-special-offer";

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
  robots: { index: true, follow: true },
};

export default function Page() {
  return <FunctionalMedicineLPClient />;
}
