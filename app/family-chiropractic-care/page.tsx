import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import ServicePageBySlug from "@/components/page/ServicePageBySlug";

export const metadata: Metadata = buildMetadata("/family-chiropractic-care");

export default function Page() {
  return <ServicePageBySlug slug="family-chiropractic-care" />;
}
