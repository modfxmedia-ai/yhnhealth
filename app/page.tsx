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
import DoctorSnippetSection from "@/components/home/DoctorSnippetSection";
import QuestionFormSection from "@/components/home/QuestionFormSection";
import { SITE_URL } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: {
    absolute:
      "Chiropractor in Chalfont, PA & Merchantville, NJ | Your Health Now",
  },
  description:
    "Your Health Now is a chiropractic and functional medicine clinic in Chalfont, PA and Merchantville, NJ. Doctor-led care for back pain, neck pain, sciatica, and root-cause health. Same-week appointments.",
  keywords: [
    "chiropractor chalfont pa",
    "chiropractor merchantville nj",
    "chiropractor bucks county",
    "functional medicine chalfont",
    "chiropractor near me",
  ],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Chiropractor in Chalfont, PA & Merchantville, NJ | Your Health Now",
    description:
      "Chiropractic and functional medicine under one roof in Chalfont, PA and Merchantville, NJ. Book a visit.",
    url: `${SITE_URL}/`,
    type: "website",
    siteName: "Your Health Now",
    images: [
      {
        url: "/images/yhn-clone/your-health-now.jpg",
        width: 1200,
        height: 630,
        alt: "Your Health Now chiropractic and functional medicine in Chalfont, PA and Merchantville, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiropractor in Chalfont, PA & Merchantville, NJ | Your Health Now",
    description:
      "Doctor-led chiropractic and functional medicine in Chalfont, PA and Merchantville, NJ.",
    images: ["/images/yhn-clone/your-health-now.jpg"],
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
      <DoctorSnippetSection />
      <MissionBanner />
      <ArticlesSection />
      <QuestionFormSection />
      <NewsletterSection />
      <HoursContactSection />
      <LocationMapSection />
    </main>
  );
}
