import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import ModulePageBySlug from "@/components/page/ModulePageBySlug";

export const metadata: Metadata = buildMetadata("/module-3");

export default function Page() {
  return <ModulePageBySlug slug="module-3" />;
}
