import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES, ARTICLE_BY_SLUG, getArticleAuthor } from "@/lib/articlesData";
import ArticlePostClient from "./ArticlePostClient";
import { SITE_URL } from "@/lib/siteUrl";
import JsonLd from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) return { title: "Article Not Found | Your Health Now" };
  const title = a.title;
  const description = a.excerpt;
  const url = `${SITE_URL}/articles/${a.slug}`;
  return {
    title: { absolute: `${title} | Your Health Now` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: a.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [a.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLE_BY_SLUG[slug];
  if (!article) notFound();
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.excerpt,
          url: `${SITE_URL}/articles/${article.slug}`,
          image: article.image,
          datePublished: article.date,
          author: getArticleAuthor(article),
        })}
      />
      <ArticlePostClient slug={slug} />
    </>
  );
}
