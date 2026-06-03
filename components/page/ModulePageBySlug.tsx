"use client";

import { MODULES } from "@/lib/moduleContent";
import ModulePage from "@/components/page/ModulePage";

export default function ModulePageBySlug({ slug }: { slug: string }) {
  return <ModulePage config={MODULES[slug]} />;
}
