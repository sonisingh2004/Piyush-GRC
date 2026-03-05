"use client";
import { useReveal } from "@/hooks/useReveal";
import { stats } from "../data/projectsData";

export default function StatsStrip() {
  const { ref: statsRef, visible: statsV } = useReveal();

  return (
    <section
      ref={statsRef}
      className={`reveal ${statsV ? "visible" : ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        background: "var(--dark)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="about-card"
          style={{ borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none" }}
        >
          <div className="about-card-num">{s.num}</div>
          <div className="about-card-label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
