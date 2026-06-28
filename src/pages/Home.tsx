import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import PlatformOverview from "@/components/home/PlatformOverview";
import BrandWall from "@/components/home/BrandWall";
import CaseHighlights from "@/components/home/CaseHighlights";
import PublisherTypes from "@/components/home/PublisherTypes";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <PlatformOverview />
      <BrandWall />
      <PublisherTypes />
      <CaseHighlights />
      <CTASection />
    </>
  );
}
