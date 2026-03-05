"use client";
import { useReveal } from "@/hooks/useReveal";
import { specs } from "../data/featuresData";

export default function TechnicalSpecsSection() {
  const { ref: specRef, visible: specV } = useReveal();

  return (
    <section style={{ padding: "7rem 5%", background: "var(--charcoal)" }}>
      <div ref={specRef} className={`section-header reveal ${specV ? "visible" : ""}`}>
        <div className="section-eye">Technical Data</div>
        <h2 className="section-title">GRC Performance Specifications</h2>
        <p className="section-sub">
          Certified mechanical properties comparing Premix and Spray GRC manufacturing methods.
        </p>
      </div>

      <div className={`reveal ${specV ? "visible" : ""}`} style={{ border: "1px solid var(--border)", overflow: "auto" }}>
        <table style={{ width: "100%", minWidth: "500px", borderCollapse: "collapse", fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem" }}>
          <thead>
            <tr>
              {["Property", "Unit", "Premix", "Spray"].map((h, i) => (
                <th key={h} style={{
                  padding: "1rem 1.5rem",
                  textAlign: i === 0 ? "left" : "center",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: "var(--gold)",
                  color: "var(--charcoal)",
                  border: "1px solid var(--gold-dim)",
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specs.map((row, ri) => (
              <tr
                key={row.property}
                style={{ background: ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.005)" }}
              >
                <td style={{ padding: "0.85rem 1.5rem", color: "var(--cream)", fontWeight: 500, borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                  {row.property}
                </td>
                <td style={{ padding: "0.85rem 1.5rem", textAlign: "center", color: "var(--text-muted)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                  {row.unit}
                </td>
                <td style={{ padding: "0.85rem 1.5rem", textAlign: "center", color: "#d4c9b8", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                  {row.premix}
                </td>
                <td style={{ padding: "0.85rem 1.5rem", textAlign: "center", color: "#d4c9b8", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                  {row.spray}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="section-sub" style={{ marginTop: "1.5rem", fontSize: "0.82rem" }}>
        * All values are indicative. Actual properties may vary based on mix design, curing conditions, and application method.
      </p>
    </section>
  );
}
