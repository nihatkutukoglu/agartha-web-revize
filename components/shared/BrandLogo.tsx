"use client";

import { useState } from "react";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <span
      className={`brand-logo ${className}`}
      aria-label="Agartha Teknoloji"
    >
      {hasError ? (
        <span className="brand-logo__text-fallback">AGARTHA TEKNOLOJİ</span>
      ) : (
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
