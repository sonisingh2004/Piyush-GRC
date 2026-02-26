import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />

      <div className="hero-content">
        <div className="hero-eyebrow">Est. 2025 · Bhubaneswar, Odisha</div>

        <h1 className="hero-title">
          Crafting<br />
          Architectural<br />
          <span className="accent">Grandeur</span>
        </h1>

        <p className="hero-subtitle">in Glass Fiber Reinforced Concrete</p>

        <p className="hero-desc">
          India&apos;s premier GRC manufacturer delivering timeless decorative
          concrete elements — from ornate column capitals and jali panels to
          classical corbels and fluted pilasters. Transforming structures into
          landmarks.
        </p>

        <div className="hero-buttons">
          <Link href="/projects" className="btn-primary">View Projects</Link>
          <Link href="/contact" className="btn-outline">Request Quote</Link>
        </div>
      </div>

      {/* Right image stack */}
      <div className="hero-image-stack">
        <div className="hero-img tall">
          <Image
            src="/img1.jpeg"
            alt="Column Capital"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.85) contrast(1.05)" }}
          />
        </div>
        <div className="hero-img short">
          <Image
            src="/img2.jpeg"
            alt="Jali Panel"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.85) contrast(1.05)" }}
          />
        </div>
        <div className="hero-img short">
          <Image
            src="/img3.jpeg"
            alt="GRC Capital"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.85) contrast(1.05)" }}
          />
        </div>
        <div className="hero-img short">
          <Image
            src="/img4.jpeg"
            alt="Column Capital"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.85) contrast(1.05)" }}
          />
        </div>
                <div className="hero-img short">
          <Image
            src="/img5.jpeg"
            alt="Column Capital"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.85) contrast(1.05)" }}
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats">
        {[
          { num: "3", label: "States" },
          { num: "24H", label: "Open Daily" },
          { num: "GRC", label: "Specialists" },
          { num: "100%", label: "Custom Made" },
        ].map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
