"use client";
import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";

export default function CTABanner() {
  const { ref: ctaRef, visible: ctaV } = useReveal();

  return (
    <section
      ref={ctaRef}
      className={`reveal ${ctaV ? "visible" : ""}`}
      style={{
        padding: "5rem 5%",
        background: "var(--dark)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "1.8rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="section-eye" style={{ position: "relative" }}>Start Your Project</div>

      <h2 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "clamp(1.8rem, 3vw, 3rem)",
        fontWeight: 400,
        color: "var(--cream)",
        lineHeight: 1.2,
        maxWidth: "600px",
        position: "relative",
      }}>
        Have a Project in Mind?<br />
        <span style={{ color: "var(--gold)" }}>Let&apos;s Make It Happen</span>
      </h2>

      <p className="section-sub" style={{ position: "relative" }}>
        Share your vision with us — from a single decorative piece to a complete building facade, we handle it all.
      </p>

      <div className="hero-buttons" style={{ position: "relative" }}>
        <Link href="#contact" className="btn-primary">Get a Quote</Link>
        <Link href="tel:+917827134265" className="btn-outline">📞 Call Us Now</Link>
      </div>
    </section>
  );
}
