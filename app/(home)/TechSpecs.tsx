"use client";
import { useReveal } from "@/hooks/useReveal";

const table1 = {
  headers: ["Properties", "Unit", "Premix", "Spray"],
  rows: [
    ["Fibre Contents", "% bywt", "1.5–3.5", "3–5.0"],
    ["Density (Dry)", "gms/cm²", "1.8–2.0", "1.9–2.1"],
    ["Compressive Strength", "Mpa", "40–60", "50–80"],
    ["Bending", "", "", ""],
    ["Ultimate Strength (Mor)", "Mpa", "10–14", "20–30"],
    ["Elastic Limit (Lop)", "Mpa", "5–8", "7–11"],
    ["Tensile", "", "", ""],
    ["Ultimate Strength", "Mpa", "4–7", "48–11–7"],
    ["Elastic Limit", "Mpa", "4–6", "5–7"],
    ["Shear", "", "", ""],
    ["Intertaminar Strength", "Mpa", "N/A", "3/5"],
    ["In Plane Strength", "Mpa", "4–7", "8–11"],
  ],
};

const table2 = {
  headers: ["Properties", "Unit", "Premix", "Spray"],
  rows: [
    ["Impact Strength", "KJ / M²", "10–15", "10–25"],
    ["Elastic Modulus", "Gpa", "10–20", "10–20"],
    ["Strain to Failure", "%", "0.1–0.2", "0.6–0.2"],
    ["Fire", "", "", ""],
    ["Co. eft of Thermal Expen.", "", "", ""],
    ["Accoustic Transmission Loss at 125 Hz", "PerdegOC / dB", "10–20×10² / 27", "10–20×10 / 27"],
  ],
};

const sectionRows = new Set([
  "Bending", "Tensile", "Shear", "Fire", "Co. eft of Thermal Expen.",
]);

function SpecTable({ data }: { data: typeof table1 }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontFamily: "'Raleway', sans-serif",
        fontSize: "0.82rem",
      }}>
        <thead>
          <tr>
            {data.headers.map((h, i) => (
              <th key={i} style={{
                padding: "0.9rem 1.2rem",
                textAlign: i === 0 ? "left" : "center",
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0e0d0b",
                background: "var(--gold)",
                border: "1px solid var(--gold-dim)",
                whiteSpace: "nowrap",
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => {
            const isSection = sectionRows.has(row[0]);
            return (
              <tr key={ri} style={{
                background: isSection
                  ? "rgba(201,168,76,0.08)"
                  : ri % 2 === 0
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(255,255,255,0.005)",
              }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{
                    padding: "0.75rem 1.2rem",
                    textAlign: ci === 0 ? "left" : "center",
                    color: isSection
                      ? "var(--gold)"
                      : ci === 0
                      ? "var(--cream)"
                      : ci === 1
                      ? "var(--text-muted)"
                      : "#d4c9b8",
                    fontWeight: isSection ? 600 : ci === 0 ? 500 : 400,
                    fontFamily: isSection || ci === 0 ? "'Raleway', sans-serif" : "inherit",
                    letterSpacing: isSection ? "0.15em" : "normal",
                    fontSize: isSection ? "0.7rem" : "0.82rem",
                    textTransform: isSection ? "uppercase" : "none",
                    border: "1px solid rgba(201,168,76,0.12)",
                    borderLeft: ci === 0 ? "2px solid rgba(201,168,76,0.2)" : "1px solid rgba(201,168,76,0.12)",
                  }}>
                    {cell || (isSection ? "" : "—")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function TechSpecs() {
  const { ref: hRef, visible: hv } = useReveal();
  const { ref: t1Ref, visible: t1v } = useReveal();
  const { ref: t2Ref, visible: t2v } = useReveal();

  return (
    <section id="techspecs" style={{
      padding: "7rem 8%",
      background: "var(--charcoal)",
      borderTop: "1px solid var(--border)",
    }}>
      {/* Section Header */}
      <div ref={hRef} className={`section-header reveal ${hv ? "visible" : ""}`}>
        <div className="section-eye">Technical Data</div>
        <h2 className="section-title">GRC Properties &amp; Specifications</h2>
        <p className="section-sub">
          Certified mechanical and physical performance data for both Premix and Spray GRC manufacturing methods.
        </p>
      </div>

      {/* Method badges */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        marginBottom: "3rem",
        flexWrap: "wrap",
      }}>
        {["Premix Method", "Spray Method"].map((label, i) => (
          <div key={label} style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}>
            <span style={{
              display: "inline-block",
              width: "28px",
              height: "3px",
              background: i === 0 ? "var(--gold-dim)" : "var(--gold)",
              borderRadius: "2px",
            }} />
            {label}
          </div>
        ))}
      </div>

      {/* Table 1 — Mechanical Properties */}
      <div ref={t1Ref} className={`reveal ${t1v ? "visible" : ""}`} style={{ marginBottom: "2rem" }}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold-dim)",
          marginBottom: "0.8rem",
          paddingLeft: "0.2rem",
        }}>
          01 · Mechanical Properties
        </div>
        <div style={{
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}>
          <SpecTable data={table1} />
        </div>
      </div>

      {/* Table 2 — Physical Properties */}
      <div ref={t2Ref} className={`reveal ${t2v ? "visible" : ""}`}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold-dim)",
          marginBottom: "0.8rem",
          paddingLeft: "0.2rem",
        }}>
          02 · Physical &amp; Thermal Properties
        </div>
        <div style={{
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}>
          <SpecTable data={table2} />
        </div>
      </div>

      {/* Footnote */}
      <p style={{
        marginTop: "2rem",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "0.85rem",
        fontStyle: "italic",
        color: "var(--text-muted)",
        textAlign: "center",
        borderTop: "1px solid var(--border)",
        paddingTop: "1.5rem",
      }}>
        All values are indicative. Actual properties may vary based on mix design, curing conditions, and application method.
      </p>
    </section>
  );
}