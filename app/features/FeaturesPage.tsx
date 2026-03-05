import ApplicationsSection from "./components/ApplicationsSection";
import ComparisonSection from "./components/ComparisonSection";
import CoreFeaturesSection from "./components/CoreFeaturesSection";
import CTABanner from "./components/CTABanner";
import HeroSection from "./components/HeroSection";
import QuickStatsStrip from "./components/QuickStatsStrip";
import TechnicalSpecsSection from "./components/TechnicalSpecsSection";

export default function FeaturesPage() {
  return (
    <div style={{ background: "var(--charcoal)", color: "var(--cream)" }}>
      <HeroSection />
      <CoreFeaturesSection />
      <TechnicalSpecsSection />
      <ComparisonSection />
      <ApplicationsSection />
      <QuickStatsStrip />
      <CTABanner />
    </div>
  );
}