export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "'Raleway', sans-serif",
      fontSize: "0.65rem",
      fontWeight: 500,
      letterSpacing: "0.4em",
      textTransform: "uppercase" as const,
      color: "var(--gold)",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    }}>
      <span style={{ display: "block", width: "30px", height: "1px", background: "var(--gold-dim)" }} />
      {children}
      <span style={{ display: "block", width: "30px", height: "1px", background: "var(--gold-dim)" }} />
    </div>
  );
}
