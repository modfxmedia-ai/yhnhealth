import { buildMetadata } from "@/lib/seoData";
import LocationsClient from "./LocationsClient";

export const metadata = buildMetadata("/locations");

export default function Page() {
  return <LocationsClient />;
}
