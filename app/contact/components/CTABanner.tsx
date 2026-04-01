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
        background: "var(--charcoal)",
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
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
      }} />

      <div className="section-eye" style={{ position: "relative" }}>Still Have Questions?</div>

      <h2 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "clamp(1.8rem, 3vw, 3rem)",
        fontWeight: 400,
        color: "var(--cream)",
        lineHeight: 1.2,
        maxWidth: "600px",
        position: "relative",
      }}>
        Call Us Anytime —<br />
        <span style={{ color: "var(--gold)" }}>We&apos;re Open 24 Hours</span>
      </h2>

      <p className="section-sub" style={{ position: "relative" }}>
        No waiting, no appointments needed. Just call and our team will be ready to help with samples, pricing, and project advice.
      </p>

      <div className="hero-buttons" style={{ position: "relative" }}>
        <Link href="tel:+917827134265" className="btn-primary">
          📞 +91 78271 34265
        </Link>
        <Link href="/projects" className="btn-outline">
          View Projects
        </Link>
      </div>
    </section>
  );
}
