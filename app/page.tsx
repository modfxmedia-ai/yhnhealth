import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import FunctionalMedicineTelehealthBanner from "@/components/home/FunctionalMedicineTelehealthBanner";
import LocationCTABanner from "@/components/home/LocationCTABanner";
import BetterCareSection from "@/components/home/BetterCareSection";
import ConsultationCallBanner from "@/components/home/ConsultationCallBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import MeetTeamSection from "@/components/home/MeetTeamSection";
import MissionBanner from "@/components/home/MissionBanner";
import ArticlesSection from "@/components/home/ArticlesSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import HoursContactSection from "@/components/home/HoursContactSection";
import LocationMapSection from "@/components/home/LocationMapSection";

export const metadata: Metadata = {
  title: "Your Health Now | Functional Medicine & Chiropractic in Chalfont, PA & Merchantville, NJ",
  description:
    "Functional medicine and chiropractic care under one roof - root-cause investigation, advanced labs, and precise hands-on care in Chalfont, PA and Merchantville, NJ. Call today for an appointment.",
  keywords: [
    "Functional Medicine",
    "Chiropractor",
    "Chiropractic Care",
    "Root-Cause Care",
    "Integrative Nutrition",
    "Merchantville NJ",
    "Chalfont PA",
  ],
  alternates: { canonical: "https://yhnhealth.com/" },
  openGraph: {
    title: "Your Health Now | Functional Medicine & Chiropractic in Chalfont, PA & Merchantville, NJ",
    description:
      "Functional medicine and chiropractic care under one roof - root-cause investigation, advanced labs, and precise hands-on care in Chalfont, PA and Merchantville, NJ.",
    url: "https://yhnhealth.com/",
    type: "website",
    siteName: "Your Health Now",
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <FunctionalMedicineTelehealthBanner />
      <LocationCTABanner />
      <BetterCareSection />
      <ConsultationCallBanner />
      <TestimonialsSection />
      <ServicesGrid />
      <MeetTeamSection />
      <MissionBanner />
      <ArticlesSection />
      <NewsletterSection />
      <HoursContactSection />
      <LocationMapSection />
    </main>
  );
}
