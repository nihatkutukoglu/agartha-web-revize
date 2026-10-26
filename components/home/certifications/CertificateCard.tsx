"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, FileCheck2, ShieldCheck } from "lucide-react";
import type { CertificateData } from "@/data/certifications";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

interface CertificateCardProps {
  certificate: CertificateData;
  active: boolean;
  onToggle: () => void;
  onInspect: () => void;
}

export function CertificateCard({
  certificate,
  active,
  onToggle,
  onInspect,
}: CertificateCardProps) {
  const reduceMotion = useReducedMotion();
  const scopeId = `${certificate.id}-scope`;
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";

  return (
    <article className={`certificate-card certificate-card--${certificate.id}`}>
      <div className="certificate-card__topline">
        <span>{certificate.category}</span>
        <ShieldCheck size={17} aria-hidden="true" />
      </div>

      <div className="certificate-card__document" aria-hidden="true">
        <span className="certificate-card__document-fold" />
        <FileCheck2 size={22} />
        <i />
        <i />
        <i />
        <span className="certificate-card__document-mark" />
      </div>

      <div className="certificate-card__copy">
        <h3>{certificate.title}</h3>
        <p>{certificate.summary}</p>
      </div>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            className="certificate-card__scope"
            id={scopeId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <strong>{lang === "en" ? "Demo scope view" : "Demo kapsam görünümü"}</strong>
            <p>{certificate.scope}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="certificate-card__actions">
        <button
          type="button"
          aria-expanded={active}
          aria-controls={scopeId}
          onClick={onToggle}
        >
          {lang === "en" ? "View Scope" : "Kapsamı Gör"}
          <ChevronDown
            className={active ? "is-rotated" : ""}
            size={15}
            aria-hidden="true"
          />
        </button>
        <button type="button" onClick={onInspect}>
          {lang === "en" ? "Inspect Document" : "Belgeyi İncele"}
          <ArrowUpRight size={14} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
