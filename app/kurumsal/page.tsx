import { AboutSection } from "@/components/home/AboutSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";

export default function KurumsalPage() {
  return (
    <PageTransition>
      <main className="site-shell" id="top">
        <Navbar />
        <div className="pt-24 lg:pt-32">
          <AboutSection />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
}
