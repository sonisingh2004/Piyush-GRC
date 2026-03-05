export default function HeroSection() {
  return (
    <section style={{
      minHeight: "52vh",
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
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)",
      }} />
      {/* decorative lines */}
      <div style={{
        position: "absolute", left: 0, right: 0, height: "1px",
        top: "calc(50% - 70px)",
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.18), transparent)",
      }} />
      <div style={{
        position: "absolute", left: 0, right: 0, height: "1px",
        top: "calc(50% + 70px)",
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.18), transparent)",
      }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-eyebrow" style={{ justifyContent: "center", animation: "fadeUp 1s ease both" }}>
          Get In Touch
        </div>
        <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", animation: "fadeUp 1s 0.15s ease both" }}>
          Let&apos;s Build<br />
          <span className="accent">Something Timeless</span>
        </h1>
        <p className="hero-subtitle" style={{ maxWidth: "520px", margin: "0 auto", animation: "fadeUp 1s 0.3s ease both" }}>
          Reach out to our team — we are available 24 hours a day to discuss your project.
        </p>
      </div>
    </section>
  );
}
