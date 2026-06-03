import { buildMetadata } from "@/lib/seoData";
import MeetTheDoctorClient from "./MeetTheDoctorClient";

export const metadata = buildMetadata("/meet-the-doctor");

export default function Page() {
  return <MeetTheDoctorClient />;
}
