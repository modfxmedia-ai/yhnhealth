import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import ServicePageBySlug from "@/components/page/ServicePageBySlug";

export const metadata: Metadata = buildMetadata("/athletic-care");

export default function Page() {
  return <ServicePageBySlug slug="athletic-care" />;
}
