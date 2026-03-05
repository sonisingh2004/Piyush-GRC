export default function HeroSection() {
  return (
    <section style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "8rem 5% 5rem",
      textAlign: "center",
      background: "linear-gradient(135deg, #0e0d0b 0%, #1a1814 50%, #0e0d0b 100%)",
    }}>
      {/* radial glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* decorative lines */}
      <div style={{
        position: "absolute", left: 0, right: 0, height: "1px",
        top: "calc(50% - 80px)",
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.18), transparent)",
      }} />
      <div style={{
        position: "absolute", left: 0, right: 0, height: "1px",
        top: "calc(50% + 80px)",
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.18), transparent)",
      }} />

      <div style={{ position: "relative", zIndex: 2, animation: "fadeUp 1s ease both" }}>
        {/* eyebrow */}
        <div className="hero-eyebrow" style={{ justifyContent: "center" }}>
          Our Portfolio
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
          Projects That Define<br />
          <span style={{ color: "var(--gold)", fontWeight: 600 }}>Architectural Excellence</span>
        </h1>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.2rem",
          fontStyle: "italic",
          color: "var(--text-muted)",
          maxWidth: "560px",
          margin: "0 auto",
          lineHeight: 1.7,
          animation: "fadeUp 1s 0.3s ease both",
        }}>
          From heritage-inspired facades to luxury interiors — every project tells a story in GRC.
        </p>
      </div>
    </section>
  );
}
