"use client";
import { stats } from "../data/aboutData";

export default function HeroAbout() {
  return (
    <section className="about-hero-section" style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "8rem 8% 5rem",
      textAlign: "center",
      background: "linear-gradient(135deg, #0e0d0b 0%, #1a1814 50%, #0e0d0b 100%)",
    }}>
      {/* Radial glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Decorative horizontal lines */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        height: "1px",
        background: "linear-gradient(to right, transparent, var(--border), transparent)",
        transform: "translateY(-60px)",
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        height: "1px",
        background: "linear-gradient(to right, transparent, var(--border), transparent)",
        transform: "translateY(60px)",
      }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "0.68rem",
          fontWeight: 500,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "1.5rem",
          animation: "fadeUp 1s ease both",
        }}>
          Est. 2025 · Bhubaneswar, Odisha
        </div>

        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
          fontWeight: 400,
          lineHeight: 1.15,
          color: "var(--cream)",
          marginBottom: "1.5rem",
          animation: "fadeUp 1s 0.15s ease both",
        }}>
          Crafting India&apos;s<br />
          <span style={{ color: "var(--gold)", fontWeight: 600 }}>Architectural Legacy</span><br />
          in GRC
        </h1>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.2rem",
          fontStyle: "italic",
          color: "var(--text-muted)",
          maxWidth: "560px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
          animation: "fadeUp 1s 0.3s ease both",
        }}>
          A manufacturer born from the belief that buildings deserve beauty — and beauty deserves to last.
        </p>

        {/* Stats row */}
        <div className="about-hero-stats" style={{
          display: "flex",
          justifyContent: "center",
          gap: "0px",
          flexWrap: "wrap",
          marginTop: "3rem",
          animation: "fadeUp 1s 0.45s ease both",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} className="about-hero-stat" style={{
              padding: "1.2rem 2.5rem",
              borderLeft: i === 0 ? "1px solid var(--border)" : "none",
              borderRight: "1px solid var(--border)",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
            }}>
              <div style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.8rem",
                color: "var(--gold)",
                lineHeight: 1,
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginTop: "0.4rem",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
