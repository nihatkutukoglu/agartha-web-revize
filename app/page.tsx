import { CaseStudySection } from "@/components/home/CaseStudySection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ContactSection } from "@/components/home/contact/ContactSection";
import { FeaturedCtmSection } from "@/components/home/FeaturedCtmSection";
import { HeroSection } from "@/components/home/HeroSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { TechnologyVideoSection } from "@/components/home/TechnologyVideoSection";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyAgarthaSection } from "@/components/home/WhyAgarthaSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";

export default function Home() {
  return (
    <>
      <PageTransition>
        <main className="site-shell" id="top">
          <Navbar />
          <HeroSection />
          <TrustBar />
          <SolutionsSection />
          <TechnologyVideoSection />
          <FeaturedCtmSection />
          <WhyAgarthaSection />
          <CaseStudySection />
          <CertificationsSection />
          <ContactSection />
          <Footer />
        </main>
      </PageTransition>
      <ChatbotWidget />
    </>
  );
}
