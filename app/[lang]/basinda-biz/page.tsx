import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { PressPage } from "@/components/press/PressPage";
import type { Lang } from "@/data/dictionary";
import { pressItems } from "@/data/press";

type PageProps = { params: Promise<{ lang: Lang }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const tr = lang === "tr";
  const title = tr ? "Basında Biz | Agartha Teknoloji" : "Press | Agartha Technology";
  const description = tr ? "Agartha Teknoloji'nin projeleri, sektörel etkinlikleri, uluslararası çalışmaları ve kurumsal gelişmelerinden öne çıkanları keşfedin." : "Explore highlights from Agartha Technology's projects, industry events, international work, and corporate developments.";
  return { title, description, alternates: { canonical: `https://agartha-web-revize.kutukoglunihat1.workers.dev/${lang}/basinda-biz` }, openGraph: { title, description, type: "website" } };
}

export default async function BasindaBizPage({ params }: PageProps) {
  const { lang } = await params;
  const tr = lang === "tr";
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: tr ? "Basında Biz" : "Press", description: tr ? "Agartha Teknoloji'nin doğrulanmış projeleri, etkinlikleri ve kurumsal gelişmeleri." : "Verified projects, events, and corporate developments from Agartha Technology.", hasPart: pressItems.map((item) => ({ "@type": "CreativeWork", name: item.title[lang], datePublished: item.date, url: item.source.url })) };
  return <PageTransition><main className="site-shell" id="top"><Navbar /><PressPage lang={lang} /><Footer /></main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }} /></PageTransition>;
}
