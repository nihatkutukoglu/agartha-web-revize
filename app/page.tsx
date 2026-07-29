import { CaseStudySection } from "@/components/home/CaseStudySection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { FeaturedCtmSection } from "@/components/home/FeaturedCtmSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { TechnologyVideoSection } from "@/components/home/TechnologyVideoSection";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyAgarthaSection } from "@/components/home/WhyAgarthaSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <SolutionsSection />
      <TechnologyVideoSection />
      <FeaturedCtmSection />
      <WhyAgarthaSection />
      <CaseStudySection />
      <MetricsSection />
      <CertificationsSection />
      <ContactCtaSection />
      <Footer />
    </main>
  );
}
