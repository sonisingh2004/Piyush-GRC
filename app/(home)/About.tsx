"use client";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const { ref: leftRef, visible: lv } = useReveal();
  const { ref: rightRef, visible: rv } = useReveal();

  return (
    <section id="about">
      {/* Left */}
      <div ref={leftRef} className={`reveal ${lv ? "visible" : ""}`}>
        <div className="about-tag">Who We Are</div>
        <h2 className="about-title">India&apos;s Architectural Concrete Specialists</h2>
        <p className="about-body">
          Piyush GRC is a leading Indian manufacturer and supplier, specializing in Glass Fiber
          Reinforced Concrete (GRC) products. Established in 2025, we are recognized for delivering
          exceptional architectural and decorative concrete solutions across India.
        </p>
        <p className="about-body">
          Our craftsmen combine ancient decorative traditions with modern GRC technology, producing
          elements that are lighter, stronger, and more durable than traditional concrete — without
          compromising on artistic detail.
        </p>
        <div className="about-locations">
          <div className="location-chip">📍 Bhubaneswar, Odisha</div>
          <div className="location-chip">📍 Patna, Bihar</div>
          <div className="location-chip">📍 Deoghar, Jharkhand</div>
        </div>
      </div>

      {/* Right - stat cards */}
      <div ref={rightRef} className={`about-right reveal ${rv ? "visible" : ""}`}>
        {[
          { icon: "🏛️", num: "GRC", label: "Technology" },
          { icon: "🗺️", num: "3", label: "State Presence" },
          { icon: "⚒️", num: "100%", label: "Custom Made" },
          { icon: "⭐", num: "24H", label: "Available Daily" },
        ].map((c) => (
          <div key={c.label} className="about-card">
            <div className="about-card-icon">{c.icon}</div>
            <div className="about-card-num">{c.num}</div>
            <div className="about-card-label">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
