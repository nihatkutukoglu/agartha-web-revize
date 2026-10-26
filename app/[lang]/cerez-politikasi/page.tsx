import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { getLegalDocument } from "@/data/legal";
import type { Lang } from "@/data/dictionary";

type PageProps = {
  params: Promise<{ lang: string }>;
};

function normalizeLang(lang: string): Lang {
  return lang === "en" ? "en" : "tr";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: routeLang } = await params;
  const lang = normalizeLang(routeLang);

  return {
    title:
      lang === "en"
        ? "Cookie Policy | Agartha Teknoloji"
        : "Çerez Politikası | Agartha Teknoloji",
    description:
      lang === "en"
        ? "Information about cookies and similar technologies on the Agartha Teknoloji website."
        : "Agartha Teknoloji web sitesindeki çerez ve benzer teknolojilere ilişkin politika.",
  };
}

export default async function CookiePolicyPage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang = normalizeLang(routeLang);

  return <LegalPage document={getLegalDocument(lang, "cookies")} lang={lang} />;
}
