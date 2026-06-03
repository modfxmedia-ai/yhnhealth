import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import ServicePageBySlug from "@/components/page/ServicePageBySlug";

export const metadata: Metadata = buildMetadata("/lifestyle-and-nutritional-advice");

export default function Page() {
  return <ServicePageBySlug slug="lifestyle-and-nutritional-advice" />;
}
