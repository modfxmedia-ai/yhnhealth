import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CITIES,
  CITY_BY_SLUG,
  SERVICES,
  SERVICE_BY_SLUG,
} from "@/lib/pseoData";
import AreaServicePage from "@/components/page/AreaServicePage";
import { SITE_URL } from "@/lib/siteUrl";

export const dynamicParams = false;

export function generateStaticParams() {
  const out: { city: string; service: string }[] = [];
  for (const c of CITIES) for (const s of SERVICES) out.push({ city: c.slug, service: s.slug });
  return out;
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string; service: string }> }
): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = CITY_BY_SLUG[citySlug];
  const service = SERVICE_BY_SLUG[serviceSlug];
  if (!city || !service) return {};

  const title = `${service.name} in ${city.name}, ${city.state} | Your Health Now`;
  const description = `${service.name} for ${city.name}, ${city.state} patients. ${service.summary.split(".")[0]}. Same-week appointments - book today.`;
  const canonical = `${SITE_URL}/areas-we-serve/${city.slug}/${service.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CityServicePage(
  { params }: { params: Promise<{ city: string; service: string }> }
) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = CITY_BY_SLUG[citySlug];
  const service = SERVICE_BY_SLUG[serviceSlug];
  if (!city || !service) notFound();
  return <AreaServicePage city={city} service={service} />;
}
