"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import {
  getCertificates,
  type CertificateId,
} from "@/data/certifications";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

export function TrustArchitecture() {
  const [activeNode, setActiveNode] = useState<CertificateId | null>(null);
  const reduceMotion = useReducedMotion();
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const certificatesData = getCertificates(lang);

  return (
    <div className="trust-architecture">
      <div className="trust-architecture__label">
        <span />
        {lang === "en" ? "Agartha Trust Architecture" : "Agartha Güven Mimarisi"}
      </div>

      <div className="trust-architecture__canvas">
        <div className="trust-architecture__core">
          <BrandLogo />
          <small>{lang === "en" ? "Trust center" : "Güven merkezi"}</small>
        </div>

        {certificatesData.map((certificate, index) => (
          <motion.span
            aria-hidden="true"
            className={`trust-architecture__line trust-architecture__line--${index + 1}${
              activeNode === certificate.id ? " is-active" : ""
            }`}
            initial={{ scaleX: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{
              duration: reduceMotion ? 0 : 0.58,
              delay: reduceMotion ? 0 : 0.16 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            key={`${certificate.id}-line`}
          />
        ))}

        {certificatesData.map((certificate, index) => (
          <button
            className={`trust-architecture__node trust-architecture__node--${index + 1}${
              activeNode === certificate.id ? " is-active" : ""
            }`}
            type="button"
            onFocus={() => setActiveNode(certificate.id)}
            onBlur={() => setActiveNode(null)}
            onPointerEnter={() => setActiveNode(certificate.id)}
            onPointerLeave={() => setActiveNode(null)}
            key={certificate.id}
            aria-label={`${certificate.title}: ${certificate.trustArea}`}
          >
            <strong>{certificate.title}</strong>
            <small>{certificate.trustArea}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
