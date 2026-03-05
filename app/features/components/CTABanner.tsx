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

      <div className="section-eye" style={{ position: "relative" }}>Ready to Build?</div>

      <h2 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "clamp(1.8rem, 3vw, 3rem)",
        fontWeight: 400,
        color: "var(--cream)",
        lineHeight: 1.2,
        maxWidth: "600px",
        position: "relative",
      }}>
        Let GRC Elevate<br />
        <span style={{ color: "var(--gold)" }}>Your Next Project</span>
      </h2>

      <p className="section-sub" style={{ position: "relative" }}>
        Talk to our team about specifications, samples, and pricing — we&apos;re available 24 hours a day.
      </p>

      <div className="hero-buttons" style={{ position: "relative" }}>
        <Link href="/contact" className="btn-primary">Get a Quote</Link>
        <Link href="/projects" className="btn-outline">View Projects</Link>
      </div>
    </section>
  );
}
