import type { Metadata } from "next";
import { DevelopmentsPage } from "@/components/developments/DevelopmentsPage";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import type { Lang } from "@/data/dictionary";
import { developments } from "@/data/developments";

type PageProps = { params: Promise<{ lang: Lang }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const tr = lang === "tr";
  const title = tr ? "Gelişmeler | Agartha Teknoloji" : "Developments | Agartha Technology";
  const description = tr ? "Agartha Teknoloji'nin etkinlik, iş birliği ve teknoloji yolculuğundan güncel gelişmeler." : "Current developments from Agartha Technology's events, collaborations, and technology journey.";
  return { title, description, alternates: { canonical: `https://agartha-web-revize.kutukoglunihat1.workers.dev/${lang}/gelismeler` }, openGraph: { title, description, type: "website" } };
}

export default async function GelismelerPage({ params }: PageProps) {
  const { lang } = await params;
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: lang === "tr" ? "Gelişmeler" : "Developments", hasPart: developments.map((item) => ({ "@type": "NewsArticle", headline: item.title[lang], datePublished: item.date, image: item.images.map((image) => image.src) })) };
  return <PageTransition><main className="site-shell" id="top"><Navbar /><DevelopmentsPage lang={lang} /><Footer /></main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }} /></PageTransition>;
}
