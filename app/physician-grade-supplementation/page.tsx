import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import ServicePageBySlug from "@/components/page/ServicePageBySlug";

export const metadata: Metadata = buildMetadata("/physician-grade-supplementation");

export default function Page() {
  return <ServicePageBySlug slug="physician-grade-supplementation" />;
}
