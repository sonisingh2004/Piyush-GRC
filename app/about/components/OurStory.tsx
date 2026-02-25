"use client";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";

export default function OurStory() {
  const { ref: storyRef, visible: storyV } = useReveal();

  return (
    <section style={{
      padding: "7rem 8%",
      background: "var(--dark)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "6rem",
      alignItems: "center",
    }}>
      {/* Left — image */}
      <div
        ref={storyRef}
        className={`reveal ${storyV ? "visible" : ""}`}
        style={{ position: "relative" }}
      >
        {/* Main image */}
        <div style={{
          position: "relative",
          height: "480px",
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}>
          <Image
            src="/img7.jpeg"
            alt="Our Work"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.75) contrast(1.05) saturate(0.85)" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(201,168,76,0.08), transparent)",
          }} />
        </div>

        {/* Floating accent card */}
        <div style={{
          position: "absolute",
          bottom: "-2rem",
          right: "-2rem",
          background: "var(--charcoal)",
          border: "1px solid var(--border)",
          padding: "1.5rem 2rem",
          minWidth: "180px",
        }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "2.2rem",
            color: "var(--gold)",
            lineHeight: 1,
          }}>GRC</div>
          <div style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginTop: "0.4rem",
          }}>Glass Fiber<br />Reinforced Concrete</div>
        </div>

        {/* Gold line accent */}
        <div style={{
          position: "absolute",
          top: "-1.5rem",
          left: "-1.5rem",
          width: "60px",
          height: "60px",
          borderTop: "2px solid var(--gold)",
          borderLeft: "2px solid var(--gold)",
        }} />
      </div>

      {/* Right — text */}
      <div className={`reveal ${storyV ? "visible" : ""}`}>
        <div className="about-tag">Our Story</div>
        <h2 className="about-title">
          Born From a Passion<br />for Architectural Beauty
        </h2>
        <p className="about-body">
          Piyush GRC was founded in 2025 in Bhubaneswar, Odisha, with a singular mission — to make
          premium architectural concrete elements accessible to builders and architects across Eastern India.
        </p>
        <p className="about-body">
          What started as a small manufacturing workshop quickly grew into a multi-state operation,
          driven by the quality of our craft and the trust of our clients. Today, we operate from
          three locations across Odisha, Bihar, and Jharkhand, serving projects ranging from residential
          villas to large commercial and hospitality venues.
        </p>
        <p className="about-body">
          Every GRC element we produce — whether a delicate jali screen, a classical column capital,
          or a full building facade — carries the same commitment to precision, durability, and
          aesthetic excellence that defines our brand.
        </p>

        <div style={{
          marginTop: "2.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}>
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(201,168,76,0.1)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
          }}>👤</div>
          <div>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.9rem",
              color: "var(--cream)",
            }}>Piyush GRC Founders</div>
            <div style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.68rem",
              color: "var(--gold)",
              letterSpacing: "0.12em",
              marginTop: "0.2rem",
            }}>+91 78271 34265</div>
          </div>
        </div>
      </div>
    </section>
  );
}
