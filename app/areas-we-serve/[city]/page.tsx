import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, CITY_BY_SLUG, SERVICES } from "@/lib/pseoData";
import AreaCityPage from "@/components/page/AreaCityPage";
import { SITE_URL } from "@/lib/siteUrl";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = CITY_BY_SLUG[citySlug];
  if (!city) return {};
  const title = `Chiropractor in ${city.name}, ${city.state} | Your Health Now`;
  const description = `Patient-specific chiropractic, functional medicine, and rehab serving ${city.name}, ${city.state} and ${city.county} County. ${SERVICES.length} services available - book today.`;
  const canonical = `${SITE_URL}/areas-we-serve/${city.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city: citySlug } = await params;
  const city = CITY_BY_SLUG[citySlug];
  if (!city) notFound();
  return <AreaCityPage city={city} />;
}
