import CTABanner from "./components/CTABanner";
import FeaturedProjectSection from "./components/FeaturedProjectSection";
import HeroSection from "./components/HeroSection";
import ProcessStrip from "./components/ProcessStrip";
import ProjectsGrid from "./components/ProjectsGrid";
import StatsStrip from "./components/StatsStrip";

export default function ProjectsPage() {
  return (
    <div style={{ background: "var(--charcoal)", color: "var(--cream)" }}>
      <HeroSection />
      <StatsStrip />
      <FeaturedProjectSection />
      <ProjectsGrid />
      <ProcessStrip />
      <CTABanner />
    </div>
  );
}