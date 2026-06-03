import { buildMetadata } from "@/lib/seoData";
import FunctionalMedicineClient from "./FunctionalMedicineClient";

export const metadata = buildMetadata("/functional-medicine");

export default function Page() {
  return <FunctionalMedicineClient />;
}
