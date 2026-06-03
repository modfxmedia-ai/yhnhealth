import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import ServicePageBySlug from "@/components/page/ServicePageBySlug";

export const metadata: Metadata = buildMetadata("/decompression-therapy");

export default function Page() {
  return <ServicePageBySlug slug="decompression-therapy" />;
}
