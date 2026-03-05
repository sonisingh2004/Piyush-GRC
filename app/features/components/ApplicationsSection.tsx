"use client";
import { useReveal } from "@/hooks/useReveal";
import { applications } from "../data/featuresData";

export default function ApplicationsSection() {
  const { ref: appRef, visible: appV } = useReveal();

  return (
    <section style={{ padding: "7rem 5%", background: "var(--charcoal)" }}>
      <div ref={appRef} className={`section-header reveal ${appV ? "visible" : ""}`}>
        <div className="section-eye">Where We Work</div>
        <h2 className="section-title">GRC Applications</h2>
        <p className="section-sub">
          From temples to hotels, GRC transforms every type of structure into a lasting architectural statement.
        </p>
      </div>

      <div
        className={`reveal ${appV ? "visible" : ""}`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5px",
          background: "rgba(201,168,76,0.12)",
        }}
      >
        {applications.map((app) => (
          <div
            key={app.title}
            style={{
              background: "var(--dark)",
              padding: "3rem 2.5rem",
              transition: "background 0.3s",
              borderLeft: "3px solid transparent",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.04)";
              (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--dark)";
              (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
            }}
          >
            <div className="feature-icon" style={{ textAlign: "left", marginBottom: "1.2rem" }}>{app.icon}</div>
            <div className="feature-title" style={{ textAlign: "left", marginBottom: "0.7rem" }}>{app.title}</div>
            <div className="feature-text" style={{ textAlign: "left" }}>{app.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
