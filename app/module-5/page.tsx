import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import ModulePageBySlug from "@/components/page/ModulePageBySlug";

export const metadata: Metadata = buildMetadata("/module-5");

export default function Page() {
  return <ModulePageBySlug slug="module-5" />;
}
