import { quickStats } from "../data/featuresData";

export default function QuickStatsStrip() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      background: "var(--dark)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      {quickStats.map((s, i) => (
        <div
          key={s.label}
          className="about-card"
          style={{ borderRight: i < quickStats.length - 1 ? "1px solid var(--border)" : "none" }}
        >
          <div className="about-card-num">{s.num}</div>
          <div className="about-card-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
