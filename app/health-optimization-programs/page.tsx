import { buildMetadata } from "@/lib/seoData";
import HealthOptimizationProgramsClient from "./HealthOptimizationProgramsClient";

export const metadata = buildMetadata("/health-optimization-programs");

export default function Page() {
  return <HealthOptimizationProgramsClient />;
}
