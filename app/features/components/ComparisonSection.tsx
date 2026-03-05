"use client";
import { useReveal } from "@/hooks/useReveal";
import { comparisons } from "../data/featuresData";

export default function ComparisonSection() {
  const { ref: compRef, visible: compV } = useReveal();

  return (
    <section style={{ padding: "7rem 5%", background: "var(--dark)" }}>
      <div ref={compRef} className={`section-header reveal ${compV ? "visible" : ""}`}>
        <div className="section-eye">Material Comparison</div>
        <h2 className="section-title">GRC vs Traditional Concrete</h2>
        <p className="section-sub">
          See why GRC outperforms traditional cast concrete for decorative architectural applications.
        </p>
      </div>

      <div className={`reveal ${compV ? "visible" : ""}`} style={{ border: "1px solid var(--border)", overflow: "auto" }}>
        {/* Table header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          background: "rgba(201,168,76,0.08)",
          borderBottom: "1px solid var(--border)",
        }}>
          {["Feature", "GRC (Piyush)", "Traditional Concrete"].map((h, i) => (
            <div key={h} style={{
              padding: "1rem 1.5rem",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: i === 1 ? "var(--gold)" : "var(--text-muted)",
              textAlign: i === 0 ? "left" : "center",
              borderRight: i < 2 ? "1px solid var(--border)" : "none",
            }}>
              {h}
            </div>
          ))}
        </div>

        {/* Rows */}
        {comparisons.map((row, ri) => (
          <div
            key={row.label}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              borderBottom: ri < comparisons.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none",
              background: ri % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.04)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = ri % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent")}
          >
            <div style={{ padding: "1rem 1.5rem", color: "var(--cream)", fontFamily: "'Raleway', sans-serif", fontSize: "0.87rem", fontWeight: 500, borderRight: "1px solid var(--border)" }}>
              {row.label}
            </div>
            <div style={{ padding: "1rem 1.5rem", textAlign: "center", color: "var(--gold)", fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", fontWeight: 600, borderRight: "1px solid var(--border)" }}>
              {row.grc}
            </div>
            <div style={{ padding: "1rem 1.5rem", textAlign: "center", color: "var(--text-muted)", fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem" }}>
              {row.traditional}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
