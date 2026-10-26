import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { Lang } from "@/data/dictionary";
import styles from "./SocialLinks.module.css";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/agartha-teknoloji/posts/?feedView=all",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/agarthateknoloji/reels/",
    icon: FaInstagram,
  },
  {
    name: "X",
    href: "https://x.com/agarthatek",
    icon: FaXTwitter,
  },
] as const;

type SocialLinksProps = {
  lang: Lang;
  variant?: "light" | "dark" | "header";
  showTitle?: boolean;
};

export function SocialLinks({ lang, variant = "light", showTitle = true }: SocialLinksProps) {
  const tr = lang === "tr";

  return (
    <div className={`${styles.socials} ${styles[variant]}`}>
      {showTitle && <strong className={styles.title}>{tr ? "Bizi Takip Edin" : "Follow Us"}</strong>}
      <div className={styles.links}>
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={variant === "header" ? `Agartha Teknoloji ${name}` : tr ? `${name} sayfamıza git` : `Visit our ${name} page`}
            title={name}
            key={name}
          >
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
