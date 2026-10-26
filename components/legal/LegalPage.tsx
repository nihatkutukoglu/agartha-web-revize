import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Cookie,
  ExternalLink,
  FileLock2,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import {
  getOfficialLegalSources,
  type LegalDocument,
} from "@/data/legal";
import type { Lang } from "@/data/dictionary";
import styles from "./LegalPage.module.css";

const documentIcons = {
  kvkk: ShieldCheck,
  privacy: FileLock2,
  cookies: Cookie,
};

type LegalPageProps = {
  lang: Lang;
  document: LegalDocument;
};

export function LegalPage({ lang, document }: LegalPageProps) {
  const DocumentIcon = documentIcons[document.kind];
  const sources = getOfficialLegalSources(lang);

  return (
    <PageTransition>
      <main className={styles.page} id="top">
        <Navbar />

        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <Link className={styles.backLink} href={`/${lang}`}>
              <ArrowLeft size={16} aria-hidden="true" />
              {lang === "en" ? "Back to homepage" : "Ana sayfaya dön"}
            </Link>

            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>{document.eyebrow}</span>
                <h1 className={styles.title}>{document.title}</h1>
                <p className={styles.summary}>{document.summary}</p>
                <div className={styles.meta}>
                  <span>
                    <CalendarDays size={15} aria-hidden="true" />
                    {lang === "en" ? "Last updated" : "Son güncelleme"}:{" "}
                    {document.lastUpdated}
                  </span>
                  <span>
                    <ShieldCheck size={15} aria-hidden="true" />
                    {lang === "en"
                      ? "Clear, accessible and purpose-specific"
                      : "Açık, erişilebilir ve amaca özel"}
                  </span>
                </div>
              </div>

              <div className={styles.documentMark} aria-hidden="true">
                <DocumentIcon />
              </div>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <aside className={styles.aside}>
            <span className={styles.asideLabel}>
              {lang === "en" ? "ON THIS PAGE" : "BU SAYFADA"}
            </span>
            <ol className={styles.toc}>
              {document.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className={styles.article}>
            {document.sections.map((section) => (
              <section className={styles.section} id={section.id} key={section.id}>
                <h2>{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className={styles.tableWrap}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")}>
                            {row.map((cell) => (
                              <td key={cell}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.id === (lang === "en" ? "application" : "basvuru") && (
                  <div className={styles.contactCard}>
                    <span>
                      {lang === "en"
                        ? "Personal data requests"
                        : "Kişisel veri başvuruları"}
                    </span>
                    <a href="mailto:bilgi@agarthateknoloji.com.tr">
                      <Mail size={16} aria-hidden="true" />
                      bilgi@agarthateknoloji.com.tr
                    </a>
                  </div>
                )}
              </section>
            ))}

            <section className={styles.sources}>
              <h2>{lang === "en" ? "Official references" : "Resmî kaynaklar"}</h2>
              <div className={styles.sourceLinks}>
                {sources.map((source) => (
                  <a
                    href={source.href}
                    key={source.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {source.label}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </section>
          </article>
        </div>

        <Footer />
      </main>
    </PageTransition>
  );
}
