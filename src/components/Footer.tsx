import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(var(--gold-rgb),0.15)",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
          <Logo size={24} />
          <span
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.2em",
              color: "var(--gold-mid)",
              opacity: 0.7,
            }}
          >
            CRESTECH.STUDIO
          </span>
        </div>
        <p style={{ fontSize: 11, color: "#8a8a8a", letterSpacing: "0.1em" }}>
          © {new Date().getFullYear()} Crestech Studio
        </p>
      </div>
    </footer>
  );
}
