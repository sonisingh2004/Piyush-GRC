"use client";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";
import { projects } from "../data/projectsData";

export default function FeaturedProjectSection() {
  const { ref: featRef, visible: featV } = useReveal();
  const featuredProject = projects.find((p) => p.featured)!;

  return (
    <section style={{ padding: "7rem 5%", background: "var(--dark)" }}>
      <div ref={featRef} className={`reveal ${featV ? "visible" : ""}`}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold-dim)",
          marginBottom: "1.5rem",
        }}>
          01 · Featured Project
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5px",
          background: "rgba(201,168,76,0.15)",
        }}>
          {/* Image */}
          <div style={{ position: "relative", minHeight: "400px", height: "500px", overflow: "hidden" }}
            className="group"
          >
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              fill
              className="hero-img"
              style={{
                objectFit: "cover",
                filter: "brightness(0.75) contrast(1.05) saturate(0.85)",
                transition: "transform 0.7s ease",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(201,168,76,0.07), transparent)",
            }} />
            {/* category badge */}
            <div style={{
              position: "absolute", top: "1.5rem", left: "1.5rem",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              background: "var(--gold)",
              color: "var(--charcoal)",
              padding: "0.35rem 0.9rem",
            }}>
              {featuredProject.category}
            </div>
          </div>

          {/* Details */}
          <div style={{
            background: "var(--dark)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem 2rem",
          }}>
            <div className="product-cat" style={{ marginBottom: "0.8rem" }}>
              {featuredProject.tag}
            </div>
            <h2 className="about-title" style={{ marginBottom: "0.5rem" }}>
              {featuredProject.title}
            </h2>

            {/* meta */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              marginBottom: "1.8rem",
            }}>
              <span className="about-body" style={{ margin: 0, fontSize: "0.78rem" }}>
                📍 {featuredProject.location}
              </span>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold-dim)" }} />
              <span className="about-body" style={{ margin: 0, fontSize: "0.78rem" }}>
                {featuredProject.year}
              </span>
            </div>

            <div style={{ width: "40px", height: "1px", background: "var(--gold-dim)", marginBottom: "1.8rem" }} />

            <p className="about-body">{featuredProject.desc}</p>

            {/* products used */}
            <div style={{ marginTop: "2rem" }}>
              <div style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold-dim)",
                marginBottom: "0.8rem",
              }}>
                GRC Elements Used
              </div>
              <div className="about-locations">
                {featuredProject.products.map((prod) => (
                  <span key={prod} className="location-chip">{prod}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
