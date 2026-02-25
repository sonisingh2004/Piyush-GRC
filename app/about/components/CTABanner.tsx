"use client";
import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";

export default function CTABanner() {
  const { ref: ctaRef, visible: ctaV } = useReveal();

  return (
    <section
      ref={ctaRef}
      className={`about-section-padding reveal ${ctaV ? "visible" : ""}`}
      style={{
        padding: "6rem 8%",
        background: "var(--dark)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* background glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        fontFamily: "'Raleway', sans-serif",
        fontSize: "0.65rem",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color: "var(--gold)",
        position: "relative",
      }}>
        Ready to Build?
      </div>

      <h2 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "clamp(1.8rem, 3vw, 3rem)",
        fontWeight: 400,
        color: "var(--cream)",
        lineHeight: 1.2,
        maxWidth: "600px",
        position: "relative",
      }}>
        Let&apos;s Transform Your<br />
        <span style={{ color: "var(--gold)" }}>Next Project</span> Together
      </h2>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.1rem",
        fontStyle: "italic",
        color: "var(--text-muted)",
        maxWidth: "480px",
        lineHeight: 1.7,
        position: "relative",
      }}>
        Reach out to our team to discuss your requirements — from a single decorative element to a complete building facade.
      </p>

      <div style={{
        display: "flex",
        gap: "1.2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "relative",
      }}>
        <Link href="#contact" className="btn-primary">
          Get a Quote
        </Link>
        <Link href="#products" className="btn-outline">
          View Projects
        </Link>
      </div>
    </section>
  );
}
