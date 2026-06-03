import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import ServicePageBySlug from "@/components/page/ServicePageBySlug";

export const metadata: Metadata = buildMetadata("/functional-movement-restoration");

export default function Page() {
  return <ServicePageBySlug slug="functional-movement-restoration" />;
}
