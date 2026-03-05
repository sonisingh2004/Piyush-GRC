"use client";
import { useReveal } from "@/hooks/useReveal";
import { processSteps } from "../data/projectsData";

export default function ProcessStrip() {
  const { ref: processRef, visible: processV } = useReveal();

  return (
    <section
      ref={processRef}
      className={`reveal ${processV ? "visible" : ""}`}
      id="features"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      }}
    >
      {processSteps.map((item, i) => (
        <div
          key={item.step}
          className="feature-item"
          style={{ 
            borderRight: i < processSteps.length - 1 ? "1px solid var(--border)" : "none",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "2.2rem",
            fontWeight: 400,
            lineHeight: 1,
            color: "rgba(201,168,76,0.2)",
            marginBottom: "1rem",
          }}>
            {item.step}
          </div>
          <div className="feature-title">{item.title}</div>
          <div className="feature-text">{item.desc}</div>
        </div>
      ))}
    </section>
  );
}
