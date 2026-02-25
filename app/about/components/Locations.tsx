"use client";
import { useReveal } from "@/hooks/useReveal";
import { locations } from "../data/aboutData";
import SectionLabel from "./SectionLabel";

export default function Locations() {
  const { ref: locRef, visible: locV } = useReveal();

  return (
    <section style={{ padding: "7rem 8%", background: "var(--charcoal)" }}>
      <div
        ref={locRef}
        className={`section-header reveal ${locV ? "visible" : ""}`}
      >
        <SectionLabel>Where We Are</SectionLabel>
        <h2 className="section-title">Our Locations</h2>
        <p className="section-sub">
          Three manufacturing hubs across Eastern India, ready to serve your project wherever you are.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5px",
        background: "rgba(201,168,76,0.12)",
      }}>
        {locations.map((loc) => (
          <div
            key={loc.city}
            className={`reveal ${locV ? "visible" : ""}`}
            style={{
              background: "var(--dark)",
              padding: "3rem 2.5rem",
              textAlign: "center",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.04)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--dark)")
            }
          >
            <div style={{ fontSize: "2rem", marginBottom: "1.2rem" }}>{loc.icon}</div>
            <div style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "0.6rem",
            }}>{loc.tag}</div>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.4rem",
              fontWeight: 400,
              color: "var(--cream)",
              marginBottom: "0.3rem",
            }}>{loc.city}</h3>
            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}>{loc.state}</p>
            <div style={{
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border)",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
            }}>
              📞 +91 78271 34265
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
