import type { Metadata } from "next";
import SitemapClient from "./SitemapClient";
import { SITE_URL } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Sitemap | Your Health Now",
  description:
    "Browse every page on yhnhealth.com - chiropractic care, functional medicine, physiotherapy services, locations, and 1,081 local service pages across NJ & PA.",
  alternates: { canonical: `${SITE_URL}/sitemap` },
};

export default function SitemapPage() {
  return <SitemapClient />;
}
