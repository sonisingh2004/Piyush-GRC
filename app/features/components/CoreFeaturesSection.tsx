"use client";
import { useReveal } from "@/hooks/useReveal";
import { coreFeatures } from "../data/featuresData";

export default function CoreFeaturesSection() {
  const { ref: featRef, visible: featV } = useReveal();

  return (
    <section style={{ padding: "7rem 5%", background: "var(--dark)" }}>
      <div ref={featRef} className={`section-header reveal ${featV ? "visible" : ""}`}>
        <div className="section-eye">Core Advantages</div>
        <h2 className="section-title">Why GRC Stands Apart</h2>
        <p className="section-sub">
          Eight reasons why architects, builders, and homeowners across Eastern India choose Piyush GRC.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1.5px",
        background: "rgba(201,168,76,0.12)",
      }}>
        {coreFeatures.map((f) => (
          <div
            key={f.title}
            className={`reveal ${featV ? "visible" : ""}`}
            style={{
              background: "var(--charcoal)",
              padding: "2.8rem 2rem",
              textAlign: "center",
              borderBottom: "1.5px solid rgba(201,168,76,0.12)",
              transition: "background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.04)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--charcoal)")}
          >
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-text">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
