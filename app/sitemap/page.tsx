import type { Metadata } from "next";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Sitemap | Your Health Now",
  description:
    "Browse every page on yhnhealth.com — chiropractic care, functional medicine, physiotherapy services, locations, and 1,081 local service pages across NJ & PA.",
  alternates: { canonical: "https://yhnhealth.com/sitemap" },
};

export default function SitemapPage() {
  return <SitemapClient />;
}
