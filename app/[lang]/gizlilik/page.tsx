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
        ? "Privacy Policy | Agartha Teknoloji"
        : "Gizlilik Politikası | Agartha Teknoloji",
    description:
      lang === "en"
        ? "How Agartha Teknoloji handles information and protects privacy on its website."
        : "Agartha Teknoloji web sitesinde bilgilerin nasıl ele alındığını açıklayan gizlilik politikası.",
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang = normalizeLang(routeLang);

  return <LegalPage document={getLegalDocument(lang, "privacy")} lang={lang} />;
}
