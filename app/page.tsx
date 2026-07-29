import { HeroSection } from "@/components/home/HeroSection";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <HeroSection />
    </main>
  );
}
