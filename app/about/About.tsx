import CTABanner from "./components/CTABanner";
import HeroAbout from "./components/HeroAbout";
import Locations from "./components/Locations";
import Milestones from "./components/Milestones";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";

export default function About() {
  return (
    <div style={{ background: "var(--charcoal)", color: "var(--cream)" }}>
      <HeroAbout />
      <OurStory />
      <OurValues />
      <Milestones />
      <Locations />
      <CTABanner />
    </div>
  );
}