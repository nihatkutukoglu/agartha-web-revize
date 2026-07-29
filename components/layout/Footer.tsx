import { ArrowUpRight, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";

const solutionLinks = ["CTM-ERP", "BossEYE", "Yalın EBMS", "A-Charge"];
const corporateLinks = ["Hakkımızda", "Başarı Hikâyeleri", "Kariyer", "İletişim"];

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <BrandLogo />
          <p>
            Kamu, sivil havacılık ve kurumsal operasyonlar için güvenli yazılım
            çözümleri.
          </p>
        </div>

        <div className="footer__column">
          <strong>Çözümler</strong>
          {solutionLinks.map((link) => (
            <a href="#cozumler" key={link}>
              {link}
            </a>
          ))}
        </div>

        <div className="footer__column">
          <strong>Kurumsal</strong>
          {corporateLinks.map((link) => (
            <a
              href={link === "İletişim" ? "#iletisim" : link === "Başarı Hikâyeleri" ? "#basari-hikayesi" : "#kurumsal"}
              key={link}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="footer__column footer__contact">
          <strong>İletişim</strong>
          <span>
            <MapPin size={14} aria-hidden="true" />
            Ankara Teknokent
          </span>
          <span>Telefon bilgisi eklenecek</span>
          <span>E-posta bilgisi eklenecek</span>
          <a href="#iletisim">
            İletişim
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Agartha Teknoloji A.Ş.</span>
        <nav aria-label="Yasal bağlantılar">
          <a href="#footer">Gizlilik Politikası</a>
          <a href="#footer">KVKK</a>
          <a href="#footer">Çerez Politikası</a>
        </nav>
      </div>
    </footer>
  );
}
