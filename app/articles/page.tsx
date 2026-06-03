import { buildMetadata } from "@/lib/seoData";
import ArticlesClient from "./ArticlesClient";

export const metadata = buildMetadata("/articles");

export default function Page() {
  return <ArticlesClient />;
}
