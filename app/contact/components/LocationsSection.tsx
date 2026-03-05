"use client";
import { useReveal } from "@/hooks/useReveal";
import { locations } from "../data/contactData";

export default function LocationsSection() {
  const { ref: locRef, visible: locV } = useReveal();

  return (
    <section style={{ padding: "7rem 5%", background: "var(--charcoal)" }}>
      <div ref={locRef} className={`section-header reveal ${locV ? "visible" : ""}`}>
        <div className="section-eye">Our Locations</div>
        <h2 className="section-title">Where to Find Us</h2>
        <p className="section-sub">
          Three manufacturing hubs across Eastern India — visit us, call us, or we&apos;ll come to you.
        </p>
      </div>

      <div
        className={`reveal ${locV ? "visible" : ""}`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5px",
          background: "rgba(201,168,76,0.12)",
        }}
      >
        {locations.map((loc) => (
          <div
            key={loc.city}
            className="about-card"
            style={{ background: "var(--dark)", padding: "3rem 2rem" }}
          >
            <div className="about-card-icon">{loc.icon}</div>

            <div style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "0.5rem",
            }}>
              {loc.role}
            </div>

            <div className="about-card-num" style={{ fontSize: "1.5rem", marginBottom: "0.2rem" }}>
              {loc.city}
            </div>
            <div className="about-card-label" style={{ marginBottom: "1.5rem" }}>
              {loc.state}
            </div>

            <div style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border)",
            }}>
              <a
                href="tel:+917827134265"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.78rem",
                  color: "var(--gold)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
              >
                📞 {loc.phone}
              </a>
              <div style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.68rem",
                color: "var(--text-muted)",
                marginTop: "0.4rem",
              }}>
                Open 24 Hours Daily
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
