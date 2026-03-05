"use client";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";
import { useState } from "react";
import { categories, projects } from "../data/projectsData";

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref: gridRef, visible: gridV } = useReveal();

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section style={{ padding: "7rem 5%", background: "var(--charcoal)" }}>
      {/* Section header */}
      <div className="section-header">
        <div className="section-eye">All Projects</div>
        <h2 className="section-title">Complete Portfolio</h2>
        <p className="section-sub">
          Browse our full range of completed GRC installations across Eastern India.
        </p>
      </div>

      {/* Filter tabs */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0.6rem",
        marginBottom: "3.5rem",
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "0.6rem 1.4rem",
              border: "1px solid",
              cursor: "pointer",
              transition: "all 0.3s",
              borderColor: activeCategory === cat ? "var(--gold)" : "var(--border)",
              background:  activeCategory === cat ? "var(--gold)"  : "transparent",
              color:       activeCategory === cat ? "var(--charcoal)" : "var(--text-muted)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className={`products-grid reveal ${gridV ? "visible" : ""}`}
      >
        {filtered.map((p) => (
          <div key={p.id} className="product-card">
            <Image
              src={p.image}
              alt={p.title}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="product-card-overlay">
              {/* top badge */}
              <div style={{
                position: "absolute",
                top: "1.2rem",
                right: "1.2rem",
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                background: "var(--gold)",
                color: "var(--charcoal)",
                padding: "0.3rem 0.8rem",
                opacity: 0,
                transition: "opacity 0.3s",
              }}
                className="badge"
              >
                {p.category}
              </div>

              <div className="product-cat">{p.tag}</div>
              <div className="product-name">{p.title}</div>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}>
                <span style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>📍 {p.location}</span>
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--gold-dim)" }} />
                <span style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>{p.year}</span>
              </div>

              <div className="product-desc">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "5rem 0" }}>
          <p className="section-sub">No projects found in this category.</p>
        </div>
      )}
    </section>
  );
}
