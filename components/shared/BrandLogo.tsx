"use client";

import { useEffect, useState } from "react";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  const [imageAvailable, setImageAvailable] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const logoImage = new window.Image();
    logoImage.onload = () => {
      if (isMounted) setImageAvailable(true);
    };
    logoImage.src = "/agartha-logo.png";

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <span
      className={`brand-logo ${className}`}
      aria-label="Agartha Teknoloji"
    >
      <span className="brand-logo__fallback" aria-hidden="true">
        <span>A</span>
        <small>AGARTHA TEKNOLOJİ</small>
      </span>
      {imageAvailable && (
        // The logo is user-supplied at runtime, so a native image lets the
        // branded fallback remain available until the file is added.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="brand-logo__image"
          src="/agartha-logo.png"
          alt="Agartha Teknoloji logosu"
        />
      )}
    </span>
  );
}
