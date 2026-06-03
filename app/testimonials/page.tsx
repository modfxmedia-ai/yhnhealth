import { buildMetadata } from "@/lib/seoData";
import TestimonialsClient from "./TestimonialsClient";

export const metadata = buildMetadata("/testimonials");

export default function Page() {
  return <TestimonialsClient />;
}
