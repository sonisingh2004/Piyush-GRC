import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import CTABanner from "./components/CTABanner";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import LocationsSection from "./components/LocationsSection";

export default function ContactPage() {
  return (
    <div style={{ background: "var(--charcoal)", color: "var(--cream)" }}>
      <HeroSection />

      {/* Contact Form + Info Section */}
      <section className="contact-form-section" style={{
        padding: "7rem 5%",
        background: "var(--dark)",
        alignItems: "start",
      }}>
        <ContactInfo />
        <ContactForm />
      </section>

      <LocationsSection />
      <FAQSection />
      <CTABanner />
    </div>
  );
}