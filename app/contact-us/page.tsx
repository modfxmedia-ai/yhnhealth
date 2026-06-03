import { buildMetadata } from "@/lib/seoData";
import ContactClient from "./ContactClient";

export const metadata = buildMetadata("/contact-us");

export default function Page() {
  return <ContactClient />;
}
