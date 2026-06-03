import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seoData";
import SpineSimulatorClient from "@/components/page/SpineSimulatorClient";

export const metadata: Metadata = buildMetadata("/3d-spine-simulator");

export default function Page() {
  return <SpineSimulatorClient />;
}
