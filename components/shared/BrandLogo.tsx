"use client";

import { useState } from "react";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <span
      className={`brand-logo ${compact ? "brand-logo--compact" : ""} ${className}`}
      aria-label="Agartha Teknoloji"
    >
      <span className="brand-logo__fallback" aria-hidden="true">
        <span>A</span>
        {!compact && <small>AGARTHA</small>}
      </span>
      {!hasError && (
        // The logo is user-supplied at runtime, so a native image lets the
        // branded fallback remain available until the file is added.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="brand-logo__image"
          src="/agartha-logo.png"
          alt="Agartha Teknoloji logosu"
          onError={() => setHasError(true)}
        />
      )}
    </span>
  );
}
