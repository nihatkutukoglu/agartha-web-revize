"use client";

import Image from "next/image";
import { Database, FileCheck2, Network } from "lucide-react";
import { useState } from "react";

const visualAlt =
  "Sivil havacılık denetim süreçlerinin manuel yapıdan merkezi dijital yönetime dönüşümünü anlatan Agartha Teknoloji görseli";

export function CaseStudyVisual() {
  const [visualFailed, setVisualFailed] = useState(false);

  return (
    <div className="case-study-visual">
      {!visualFailed ? (
        <Image
          fill
          className="case-study-visual__image"
          src="/case-study-transformation.png"
          alt={visualAlt}
          sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 44px), 1400px"
          quality={95}
          unoptimized
          onError={() => setVisualFailed(true)}
        />
      ) : (
        <div className="case-study-visual__fallback" role="img" aria-label={visualAlt}>
          <span><FileCheck2 size={28} aria-hidden="true" /></span>
          <i />
          <span><Database size={28} aria-hidden="true" /></span>
          <i />
          <span><Network size={28} aria-hidden="true" /></span>
        </div>
      )}
      <div className="case-study-visual__edge-wash" aria-hidden="true" />
    </div>
  );
}
