"use client";
import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";

/* ── DATA ── */
const coreFeatures = [
  {
    icon: "🏗️",
    title: "Lightweight & Strong",
    desc: "GRC is up to 75% lighter than traditional concrete while delivering superior compressive and tensile strength — making it the ideal choice for detailed architectural cladding without adding structural load.",
  },
  {
    icon: "🎨",
    title: "Fully Custom Designs",
    desc: "Every product we make is designed and moulded to specification. From classical Mughal jali patterns to modern geometric screens — if you can envision it, we can cast it.",
  },
  {
    icon: "☀️",
    title: "Weather Resistant",
    desc: "Engineered to withstand India's extreme climate — intense heat, monsoon rains, humidity, and UV exposure — our GRC elements retain their form and finish for decades.",
  },
  {
    icon: "🚚",
    title: "Pan-India Supply",
    desc: "With manufacturing units in Odisha, Bihar, and Jharkhand, we supply and install GRC products across all of India — on time, every time.",
  },
  {
    icon: "🔬",
    title: "Certified Quality",
    desc: "All our GRC products are produced using tested raw materials and quality-controlled mixes. Each batch meets internationally recognised standards for fibre content, density, and strength.",
  },
  {
    icon: "♻️",
    title: "Sustainable Material",
    desc: "GRC uses less raw material than solid concrete, produces minimal waste during casting, and lasts significantly longer — making it one of the more environmentally responsible choices in architectural finishes.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Our in-house mold fabrication and casting workflow means shorter lead times. For standard products, we can deliver within days — custom designs within a few weeks.",
  },
  {
    icon: "🛠️",
    title: "Full Installation Support",
    desc: "We don't just manufacture — we install. Our team of trained applicators handles on-site fitting, jointing, and finishing so your project is complete from end to end.",
  },
];

const specs = [
  { property: "Fibre Content",         unit: "% bywt",    premix: "1.5 – 3.5",  spray: "3.0 – 5.0"   },
  { property: "Density (Dry)",          unit: "gms/cm²",   premix: "1.8 – 2.0",  spray: "1.9 – 2.1"   },
  { property: "Compressive Strength",   unit: "Mpa",       premix: "40 – 60",    spray: "50 – 80"      },
  { property: "Bending Strength (MOR)", unit: "Mpa",       premix: "10 – 14",    spray: "20 – 30"      },
  { property: "Elastic Limit (LOP)",    unit: "Mpa",       premix: "5 – 8",      spray: "7 – 11"       },
  { property: "Tensile Strength",       unit: "Mpa",       premix: "4 – 7",      spray: "8 – 11"       },
  { property: "Impact Strength",        unit: "KJ/M²",     premix: "10 – 15",    spray: "10 – 25"      },
  { property: "Elastic Modulus",        unit: "Gpa",       premix: "10 – 20",    spray: "10 – 20"      },
];

const comparisons = [
  { label: "Weight vs Traditional Concrete", grc: "75% Lighter",     traditional: "Heavy" },
  { label: "Intricate Detailing",            grc: "✓ Excellent",     traditional: "Limited" },
  { label: "Weather Durability",             grc: "✓ Decades",       traditional: "Moderate" },
  { label: "Installation Speed",            grc: "✓ Fast",           traditional: "Slow" },
  { label: "Custom Moulds",                  grc: "✓ In-House",      traditional: "✗ Not Feasible" },
  { label: "Maintenance Required",          grc: "Minimal",          traditional: "Regular" },
];

const applications = [
  { icon: "🏛️", title: "Building Facades",    desc: "Jali screens, cladding panels, cornices, arches, and full facade systems." },
  { icon: "🏠", title: "Residential Homes",   desc: "Window surrounds, column capitals, entrance pillars, and balustrades." },
  { icon: "🏨", title: "Hotels & Resorts",    desc: "Heritage-inspired interiors, lobby pillars, ceiling details, and ornamental panels." },
  { icon: "💒", title: "Wedding & Event Venues", desc: "Decorative arches, floral panels, column cladding, and stage backdrops." },
  { icon: "🕌", title: "Religious Structures", desc: "Domes, minarets, jaali screens, decorative friezes, and pillar capitals." },
  { icon: "🏢", title: "Commercial Spaces",   desc: "Reception features, screen partitions, signage surrounds, and exterior cladding." },
];

/* ── MAIN COMPONENT ── */
export default function FeaturesPage() {
  const { ref: featRef,  visible: featV  } = useReveal();
  const { ref: specRef,  visible: specV  } = useReveal();
  const { ref: compRef,  visible: compV  } = useReveal();
  const { ref: appRef,   visible: appV   } = useReveal();
  const { ref: ctaRef,   visible: ctaV   } = useReveal();

  return (
    <div style={{ background: "var(--charcoal)", color: "var(--cream)" }}>

      {/* ══ HERO BANNER ══ */}
      <section style={{
        minHeight: "58vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "8rem 5% 5rem",
        textAlign: "center",
        background: "linear-gradient(135deg, #0e0d0b 0%, #1a1814 50%, #0e0d0b 100%)",
      }}>
        {/* radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)",
        }} />
        {/* decorative lines */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: "1px",
          top: "calc(50% - 80px)",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.18), transparent)",
        }} />
        <div style={{
          position: "absolute", left: 0, right: 0, height: "1px",
          top: "calc(50% + 80px)",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.18), transparent)",
        }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-eyebrow" style={{ justifyContent: "center", animation: "fadeUp 1s ease both" }}>
            Why Choose GRC
          </div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}>
            Built to Last.<br />
            <span className="accent">Crafted to Impress.</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: "560px", margin: "0 auto 0" }}>
            Discover what makes Glass Fiber Reinforced Concrete the material of choice for India&apos;s finest architectural projects.
          </p>
        </div>
      </section>

      {/* ══ CORE FEATURES GRID ══ */}
      <section style={{ padding: "7rem 5%", background: "var(--dark)" }}>
        <div ref={featRef} className={`section-header reveal ${featV ? "visible" : ""}`}>
          <div className="section-eye">Core Advantages</div>
          <h2 className="section-title">Why GRC Stands Apart</h2>
          <p className="section-sub">
            Eight reasons why architects, builders, and homeowners across Eastern India choose Piyush GRC.
          </p>
        </div>

        {/* 4-col features grid — reusing feature-item styles */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5px",
          background: "rgba(201,168,76,0.12)",
        }}>
          {coreFeatures.map((f, i) => (
            <div
              key={f.title}
              className={`reveal ${featV ? "visible" : ""}`}
              style={{
                background: "var(--charcoal)",
                padding: "2.8rem 2rem",
                textAlign: "center",
                borderBottom: "1.5px solid rgba(201,168,76,0.12)",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.04)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--charcoal)")}
            >
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-text">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TECHNICAL SPECS TABLE ══ */}
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
            {/* header */}
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

      {/* ══ GRC vs TRADITIONAL COMPARISON ══ */}
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

      {/* ══ APPLICATIONS ══ */}
      <section style={{ padding: "7rem 5%", background: "var(--charcoal)" }}>
        <div ref={appRef} className={`section-header reveal ${appV ? "visible" : ""}`}>
          <div className="section-eye">Where We Work</div>
          <h2 className="section-title">GRC Applications</h2>
          <p className="section-sub">
            From temples to hotels, GRC transforms every type of structure into a lasting architectural statement.
          </p>
        </div>

        <div
          className={`reveal ${appV ? "visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5px",
            background: "rgba(201,168,76,0.12)",
          }}
        >
          {applications.map((app) => (
            <div
              key={app.title}
              style={{
                background: "var(--dark)",
                padding: "3rem 2.5rem",
                transition: "background 0.3s",
                borderLeft: "3px solid transparent",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.04)";
                (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--dark)";
                (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
              }}
            >
              <div className="feature-icon" style={{ textAlign: "left", marginBottom: "1.2rem" }}>{app.icon}</div>
              <div className="feature-title" style={{ textAlign: "left", marginBottom: "0.7rem" }}>{app.title}</div>
              <div className="feature-text" style={{ textAlign: "left" }}>{app.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ QUICK STATS STRIP ══ */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        background: "var(--dark)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        {[
          { num: "75%",  label: "Lighter Than Concrete" },
          { num: "3×",   label: "Stronger in Tension"   },
          { num: "30+",  label: "Years Durability"       },
          { num: "100%", label: "Custom Made"            },
        ].map((s, i) => (
          <div
            key={s.label}
            className="about-card"
            style={{ borderRight: i < 3 ? "1px solid var(--border)" : "none" }}
          >
            <div className="about-card-num">{s.num}</div>
            <div className="about-card-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ══ CTA BANNER ══ */}
      <section
        ref={ctaRef}
        className={`reveal ${ctaV ? "visible" : ""}`}
        style={{
          padding: "5rem 5%",
          background: "var(--charcoal)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.8rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }} />

        <div className="section-eye" style={{ position: "relative" }}>Ready to Build?</div>

        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(1.8rem, 3vw, 3rem)",
          fontWeight: 400,
          color: "var(--cream)",
          lineHeight: 1.2,
          maxWidth: "600px",
          position: "relative",
        }}>
          Let GRC Elevate<br />
          <span style={{ color: "var(--gold)" }}>Your Next Project</span>
        </h2>

        <p className="section-sub" style={{ position: "relative" }}>
          Talk to our team about specifications, samples, and pricing — we&apos;re available 24 hours a day.
        </p>

        <div className="hero-buttons" style={{ position: "relative" }}>
          <Link href="/contact" className="btn-primary">Get a Quote</Link>
          <Link href="/projects" className="btn-outline">View Projects</Link>
        </div>
      </section>

    </div>
  );
}