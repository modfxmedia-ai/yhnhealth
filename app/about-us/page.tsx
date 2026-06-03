import { buildMetadata } from "@/lib/seoData";
import AboutUsClient from "./AboutUsClient";

export const metadata = buildMetadata("/about-us");

export default function Page() {
  return <AboutUsClient />;
}
