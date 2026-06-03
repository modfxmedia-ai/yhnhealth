"use client";

import { SERVICE_CONTENT } from "@/lib/serviceContent";
import ServicePage from "@/components/page/ServicePage";

export default function ServicePageBySlug({ slug }: { slug: string }) {
  return <ServicePage config={SERVICE_CONTENT[slug]} />;
}
