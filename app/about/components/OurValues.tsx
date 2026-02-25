"use client";
import { useReveal } from "@/hooks/useReveal";
import { values } from "../data/aboutData";
import SectionLabel from "./SectionLabel";

export default function OurValues() {
  const { ref: valRef, visible: valV } = useReveal();

  return (
    <section style={{ padding: "7rem 8%", background: "var(--charcoal)" }}>
      <div
        ref={valRef}
        className={`section-header reveal ${valV ? "visible" : ""}`}
      >
        <SectionLabel>What Drives Us</SectionLabel>
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-sub">
          The principles that guide every product we make and every project we take on.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5px",
        background: "rgba(201,168,76,0.12)",
        marginTop: "1rem",
      }}>
        {values.map((v, i) => (
          <div
            key={v.title}
            className={`reveal ${valV ? "visible" : ""}`}
            style={{
              background: "var(--dark)",
              padding: "3rem",
              borderLeft: i % 2 === 0 ? "3px solid transparent" : "none",
              transition: "border-color 0.3s, background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.03)";
              (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--dark)";
              (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1.2rem" }}>{v.icon}</div>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1rem",
              fontWeight: 400,
              color: "var(--cream)",
              marginBottom: "0.8rem",
              letterSpacing: "0.05em",
            }}>
              {v.title}
            </h3>
            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.85,
              color: "#a09888",
            }}>
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
