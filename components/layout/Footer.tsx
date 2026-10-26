"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";
import { SocialLinks } from "@/components/shared/SocialLinks";

const getSolutionLinks = () => ["CTM-ERP", "BossEYE", "Yalın EBMS"];
const getCorporateLinks = (lang: string) => 
  lang === "en" ? ["About Us", "Case Studies", "Developments", "Press", "Careers", "Contact"] 
                : ["Hakkımızda", "Başarı Hikâyeleri", "Gelişmeler", "Basında Biz", "Kariyer", "İletişim"];

export function Footer() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const solutionLinks = getSolutionLinks();
  const corporateLinks = getCorporateLinks(lang);
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <BrandLogo />
          <p>
            {lang === "en" 
              ? "Secure software solutions for public, civil aviation, and corporate operations."
              : "Kamu, sivil havacılık ve kurumsal operasyonlar için güvenli yazılım çözümleri."}
          </p>
          <SocialLinks lang={lang} />
        </div>

        <div className="footer__column">
          <strong>{lang === "en" ? "Solutions" : "Çözümler"}</strong>
          {solutionLinks.map((link) => (
            <a href={`/${lang}#cozumler`} key={link}>
              {link}
            </a>
          ))}
        </div>

        <div className="footer__column">
          <strong>{lang === "en" ? "Corporate" : "Kurumsal"}</strong>
          {corporateLinks.map((link) => (
            <a
              href={
                link === "İletişim" || link === "Contact"
                  ? `/${lang}#iletisim`
                  : link === "Basında Biz" || link === "Press"
                    ? `/${lang}/basinda-biz`
                  : link === "Gelişmeler" || link === "Developments"
                    ? `/${lang}/gelismeler`
                  : link === "Başarı Hikâyeleri" || link === "Case Studies"
                    ? `/${lang}#basari-hikayesi`
                    : `/${lang}/kurumsal`
              }
              key={link}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="footer__column footer__contact">
          <strong>{lang === "en" ? "Contact" : "İletişim"}</strong>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Teknopark+Ankara+2224.+Cad.+No%3A1+C+Blok+Yenimahalle+Ankara"
            rel="noreferrer"
            target="_blank"
          >
            <MapPin size={14} aria-hidden="true" />
            Teknopark Ankara, C Blok Kat:8
          </a>
          <a href="tel:+908504204202">+90 (850) 420 42 02</a>
          <a href="mailto:bilgi@agarthateknoloji.com.tr">
            bilgi@agarthateknoloji.com.tr
          </a>
          <a href={`/${lang}#iletisim`}>
            {lang === "en" ? "Contact" : "İletişim"}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Agartha Teknoloji A.Ş.</span>
        <nav aria-label={lang === "en" ? "Legal links" : "Yasal bağlantılar"}>
          <Link href={`/${lang}/gizlilik`}>
            {lang === "en" ? "Privacy Policy" : "Gizlilik Politikası"}
          </Link>
          <Link href={`/${lang}/kvkk`}>KVKK</Link>
          <Link href={`/${lang}/cerez-politikasi`}>
            {lang === "en" ? "Cookie Policy" : "Çerez Politikası"}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
