import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import CpscClient from "@/components/page/CpscClient";

export const metadata: Metadata = buildMetadata("/cpsc");

export default function Page() {
  return <CpscClient />;
}
