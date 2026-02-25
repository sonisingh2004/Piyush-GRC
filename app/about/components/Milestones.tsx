"use client";
import { useReveal } from "@/hooks/useReveal";
import { milestones } from "../data/aboutData";
import SectionLabel from "./SectionLabel";

export default function Milestones() {
  const { ref: milRef, visible: milV } = useReveal();

  return (
    <section style={{ padding: "7rem 8%", background: "var(--dark)" }}>
      <div
        ref={milRef}
        className={`section-header reveal ${milV ? "visible" : ""}`}
      >
        <SectionLabel>Our Journey</SectionLabel>
        <h2 className="section-title">Company Milestones</h2>
        <p className="section-sub">
          From a single workshop to a three-state operation — built one project at a time.
        </p>
      </div>

      <div style={{
        position: "relative",
        maxWidth: "800px",
        margin: "0 auto",
        paddingTop: "1rem",
      }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "1px",
          background: "var(--border)",
          transform: "translateX(-50%)",
        }} />

        {milestones.map((m, i) => (
          <div
            key={i}
            className={`reveal ${milV ? "visible" : ""}`}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              marginBottom: "3.5rem",
              alignItems: "center",
            }}
          >
            {/* Left side */}
            {i % 2 === 0 ? (
              <>
                <div style={{ textAlign: "right", paddingRight: "1.5rem" }}>
                  <div style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "2rem",
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}>{m.year}</div>
                  <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: "var(--cream)",
                    marginBottom: "0.5rem",
                  }}>{m.title}</h3>
                  <p style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.75,
                    color: "#a09888",
                  }}>{m.desc}</p>
                </div>
                <div style={{ paddingLeft: "1.5rem" }}>
                  {/* dot */}
                  <div style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--gold)",
                    marginLeft: "-6px",
                    boxShadow: "0 0 0 4px rgba(201,168,76,0.15)",
                  }} />
                </div>
              </>
            ) : (
              <>
                <div style={{ paddingRight: "1.5rem", textAlign: "right" }}>
                  <div style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--gold)",
                    marginLeft: "auto",
                    marginRight: "-6px",
                    boxShadow: "0 0 0 4px rgba(201,168,76,0.15)",
                  }} />
                </div>
                <div style={{ paddingLeft: "1.5rem" }}>
                  <div style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "2rem",
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}>{m.year}</div>
                  <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: "var(--cream)",
                    marginBottom: "0.5rem",
                  }}>{m.title}</h3>
                  <p style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.75,
                    color: "#a09888",
                  }}>{m.desc}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
