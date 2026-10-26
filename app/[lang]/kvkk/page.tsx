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
        ? "KVKK Privacy Notice | Agartha Teknoloji"
        : "KVKK Aydınlatma Metni | Agartha Teknoloji",
    description:
      lang === "en"
        ? "Information about how Agartha Teknoloji processes personal data under Turkish Personal Data Protection Law No. 6698."
        : "Agartha Teknoloji tarafından kişisel verilerin 6698 sayılı KVKK kapsamında işlenmesine ilişkin aydınlatma metni.",
  };
}

export default async function KvkkPage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang = normalizeLang(routeLang);

  return <LegalPage document={getLegalDocument(lang, "kvkk")} lang={lang} />;
}
