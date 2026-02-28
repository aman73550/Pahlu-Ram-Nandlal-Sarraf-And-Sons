import Header from "@/components/Header";
import GoldTicker from "@/components/GoldTicker";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeritageTimeline from "@/components/HeritageTimeline";
import CertificationBadges from "@/components/CertificationBadges";
import PhilosophySection from "@/components/PhilosophySection";
import QuotesBanner from "@/components/QuotesBanner";
import RoyalTrioNav from "@/components/RoyalTrioNav";
import Footer from "@/components/Footer";
import DeveloperCredit from "@/components/DeveloperCredit";
import LuxuryCursor from "@/components/LuxuryCursor";

export default function Home() {
  return (
    <div className="noise-texture luxury-cursor-area min-h-screen" style={{ background: "#050505" }}>
      <LuxuryCursor />
      <Header />
      <GoldTicker />
      <HeroSection />
      <CertificationBadges />
      <PhilosophySection />
      <GallerySection />
      <QuotesBanner />
      <TestimonialsSection />
      <HeritageTimeline />
      <Footer />
      <DeveloperCredit />
      <RoyalTrioNav />
    </div>
  );
}
