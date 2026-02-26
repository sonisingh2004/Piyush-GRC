"use client";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ── DATA ── */
const categories = ["All", "Facade", "Interior", "Commercial", "Residential"];

const projects = [
  {
    id: 1,
    title: "Name",
    category: "Facade",
    location: "location",
    year: "2025",
    tag: "tag name",
    desc: "Full exterior facade featuring custom jali screens, ornamental arches, Mughal-inspired balustrades, and GRC dome finials across a multi-storey building.",
    products: ["Jali Panels", "Dome Finials", "Balustrades", "Arched Frames"],
    image: "/img4.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Name",
    category: "Commercial",
    location: "Eastern India",
    year: "2025",
    tag: "Classical Column Facade",
    desc: "Fluted pilasters, Ionic column capitals, and ornamental cornices installed across the entrance facade of a premium banquet and event venue.",
    products: ["Fluted Pilasters", "Ionic Capitals", "Cornices", "Corbels"],
    image: "/img6.jpeg",
    featured: false,
  },
  {
    id: 3,
    title: "Name",
    category: "Residential",
    location: "Patna, Bihar",
    year: "2025",
    tag: "tag name",
    desc: "Custom GRC jali panels and window surrounds designed for a modern luxury villa, blending contemporary lines with traditional lattice motifs.",
    products: ["Jali Panels", "Window Surrounds", "Column Bases"],
    image: "/img7.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "Name",
    category: "Interior",
    location: "Deoghar, Jharkhand",
    year: "2025",
    tag: "Interior Décor Elements",
    desc: "Ornamental corbels, ceiling medallions, and classical pilasters used throughout a heritage hotel lobby to create a grand colonial aesthetic.",
    products: ["Corbels", "Ceiling Medallions", "Pilasters", "Column Capitals"],
    image: "/img3.jpeg",
    featured: false,
  },
  {
    id: 5,
    title: "Name",
    category: "Commercial",
    location: "Bhubaneswar, Odisha",
    year: "2025",
    tag: "Modern Facade System",
    desc: "Large-scale GRC panel cladding for a multi-tenant commercial complex featuring custom geometric screen panels for sun shading and aesthetics.",
    products: ["Screen Panels", "Cladding Panels", "Decorative Grilles"],
    image: "/img5.jpeg",
    featured: false,
  },
  {
    id: 6,
    title: "Name",
    category: "Commercial",
    location: "Patna, Bihar",
    year: "2025",
    tag: "Ornamental Interiors",
    desc: "Elaborate GRC decorative elements including floral motif panels, arch surrounds, and column capitals installed for a luxury wedding venue.",
    products: ["Floral Panels", "Arch Surrounds", "Column Capitals"],
    image: "/img8.jpeg",
    featured: false,
  },
];

const stats = [
  { num: "10+",  label: "Projects Completed" },
  { num: "3",    label: "States Served"       },
  { num: "100%", label: "Custom Built"        },
  { num: "24H",  label: "Support"             },
];

const processSteps = [
  { step: "01", title: "Consultation",  desc: "We discuss your project requirements, style preferences, and technical specifications in detail." },
  { step: "02", title: "Design & Mold", desc: "Custom molds are designed and fabricated in-house to your exact dimensions and design." },
  { step: "03", title: "GRC Casting",   desc: "Elements are cast using premium GRC mix, carefully cured and hand-finished to perfection." },
  { step: "04", title: "Installation",  desc: "Our team handles delivery and on-site installation across all project locations." },
];

/* ── MAIN COMPONENT ── */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const featuredProject = projects.find((p) => p.featured)!;

  const { ref: statsRef,   visible: statsV   } = useReveal();
  const { ref: featRef,    visible: featV    } = useReveal();
  const { ref: gridRef,    visible: gridV    } = useReveal();
  const { ref: processRef, visible: processV } = useReveal();
  const { ref: ctaRef,     visible: ctaV     } = useReveal();

  return (
    <div style={{ background: "var(--charcoal)", color: "var(--cream)" }}>

      {/* ══ HERO BANNER ══ */}
      <section style={{
        minHeight: "60vh",
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
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
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

        <div style={{ position: "relative", zIndex: 2, animation: "fadeUp 1s ease both" }}>
          {/* eyebrow */}
          <div className="hero-eyebrow" style={{ justifyContent: "center" }}>
            Our Portfolio
          </div>

          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "var(--cream)",
            marginBottom: "1.5rem",
            animation: "fadeUp 1s 0.15s ease both",
          }}>
            Projects That Define<br />
            <span style={{ color: "var(--gold)", fontWeight: 600 }}>Architectural Excellence</span>
          </h1>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            fontStyle: "italic",
            color: "var(--text-muted)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.7,
            animation: "fadeUp 1s 0.3s ease both",
          }}>
            From heritage-inspired facades to luxury interiors — every project tells a story in GRC.
          </p>
        </div>
      </section>

      {/* ══ STATS STRIP ══ */}
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

      {/* ══ FEATURED PROJECT ══ */}
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

      {/* ══ ALL PROJECTS GRID ══ */}
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

      {/* ══ PROCESS STRIP ══ */}
      <section
        ref={processRef}
        className={`reveal ${processV ? "visible" : ""}`}
        id="features"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {processSteps.map((item, i) => (
          <div
            key={item.step}
            className="feature-item"
            style={{ 
              borderRight: i < processSteps.length - 1 ? "1px solid var(--border)" : "none",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "2.2rem",
              fontWeight: 400,
              lineHeight: 1,
              color: "rgba(201,168,76,0.2)",
              marginBottom: "1rem",
            }}>
              {item.step}
            </div>
            <div className="feature-title">{item.title}</div>
            <div className="feature-text">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* ══ CTA BANNER ══ */}
      <section
        ref={ctaRef}
        className={`reveal ${ctaV ? "visible" : ""}`}
        style={{
          padding: "5rem 5%",
          background: "var(--dark)",
          borderTop: "1px solid var(--border)",
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
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="section-eye" style={{ position: "relative" }}>Start Your Project</div>

        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(1.8rem, 3vw, 3rem)",
          fontWeight: 400,
          color: "var(--cream)",
          lineHeight: 1.2,
          maxWidth: "600px",
          position: "relative",
        }}>
          Have a Project in Mind?<br />
          <span style={{ color: "var(--gold)" }}>Let&apos;s Make It Happen</span>
        </h2>

        <p className="section-sub" style={{ position: "relative" }}>
          Share your vision with us — from a single decorative piece to a complete building facade, we handle it all.
        </p>

        <div className="hero-buttons" style={{ position: "relative" }}>
          <Link href="#contact" className="btn-primary">Get a Quote</Link>
          <Link href="tel:+917827134265" className="btn-outline">📞 Call Us Now</Link>
        </div>
      </section>

    </div>
  );
}