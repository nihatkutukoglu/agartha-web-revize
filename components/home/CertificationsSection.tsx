"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  getAwards,
  getCertificates,
  type CertificateId,
} from "@/data/certifications";
import { SectionReveal } from "./SectionReveal";
import { MiniDemoToast } from "./solutions/MiniDemoToast";
import { AwardCard } from "./certifications/AwardCard";
import { CertificateCard } from "./certifications/CertificateCard";
import { TrustArchitecture } from "./certifications/TrustArchitecture";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

export function CertificationsSection() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const certificatesData = getCertificates(lang);
  const awardsData = getAwards(lang);
  const [activeCertificate, setActiveCertificate] =
    useState<CertificateId | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  }, []);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    [],
  );

  const inspectCertificate = (certificateId: CertificateId) => {
    const certificate = certificatesData.find((item) => item.id === certificateId);
    if (certificate?.documentUrl) {
      window.open(certificate.documentUrl, "_blank", "noopener,noreferrer");
      return;
    }
    showToast(lang === "en" ? "Document file will be added after demo." : "Belge dosyası demo sonrasında eklenecektir.");
  };

  return (
    <section className="section certifications-section" id="kurumsal">
      <div className="section__inner">
        <div className="certifications-intro">
          <SectionReveal className="certifications-intro__copy">
            <span className="section-kicker">
              {lang === "en" ? "CERTIFICATIONS AND AWARDS" : "SERTİFİKALAR VE ÖDÜLLER"}
            </span>
            <h2>
              {lang === "en"
                ? "Technology secured by standards."
                : "Standartlarla güvence altına alınan teknoloji."}
            </h2>
            <p>
              {lang === "en"
                ? "We make our quality, information security, service management, and software processes sustainable with international standards."
                : "Kalite, bilgi güvenliği, hizmet yönetimi ve yazılım süreçlerimizi uluslararası standartlarla sürdürülebilir hâle getiriyoruz."}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <TrustArchitecture />
          </SectionReveal>
        </div>

        <div className="certificate-cards">
          {certificatesData.map((certificate, index) => (
            <SectionReveal delay={index * 0.05} key={certificate.id}>
              <CertificateCard
                certificate={certificate}
                active={activeCertificate === certificate.id}
                onToggle={() =>
                  setActiveCertificate((current) =>
                    current === certificate.id ? null : certificate.id,
                  )
                }
                onInspect={() => inspectCertificate(certificate.id)}
              />
            </SectionReveal>
          ))}
        </div>

        <div className="award-cards">
          {awardsData.map((award, index) => (
            <SectionReveal delay={index * 0.07} key={award.id}>
              <AwardCard
                award={award}
                onInspect={() =>
                  showToast(
                    lang === "en" ? "Verified award details will be added after demo." : "Doğrulanmış ödül detayları demo sonrasında eklenecektir.",
                  )
                }
              />
            </SectionReveal>
          ))}
        </div>
      </div>
      <MiniDemoToast
        message={toast}
        onClose={() => {
          if (toastTimer.current) clearTimeout(toastTimer.current);
          setToast(null);
        }}
      />
    </section>
  );
}
