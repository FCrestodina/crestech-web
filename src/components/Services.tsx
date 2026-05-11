const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="16" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M11 18 L18 10 L25 18 L18 26 Z" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="18" r="3" fill="#D4AF37" />
      </svg>
    ),
    title: "Branding & Identidad Visual",
    description:
      "Diseño de marca que comunica quién sos desde el primer vistazo — logo, paleta, tipografía y sistema visual coherente.",
    tags: ["Logo", "Paleta", "Tipografía", "Manual de marca"],
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="2" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="5" stroke="#D4AF37" strokeWidth="1.5" />
        <rect x="10" y="5" width="8" height="4" rx="1" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    ),
    title: "Contenido para Redes Sociales",
    description:
      "Posts, reels y stories con identidad visual consistente. Contenido que genera autoridad y crece tu comunidad.",
    tags: ["Instagram", "LinkedIn", "Posts", "Reels"],
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="6" width="28" height="20" rx="2" stroke="#D4AF37" strokeWidth="1.5" />
        <line x1="4" y1="12" x2="32" y2="12" stroke="#D4AF37" strokeWidth="1" />
        <path d="M14 30 L22 30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="26" x2="18" y2="30" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    ),
    title: "Diseño Web",
    description:
      "Landing pages y sitios web con foco en conversión — rápidos, bien diseñados y que comunican tu propuesta de valor.",
    tags: ["Landing page", "Next.js", "Responsive", "SEO"],
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M10 14 L4 18 L10 22" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 14 L32 18 L26 22" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="15" y1="10" x2="21" y2="26" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Automatización & Desarrollo",
    description:
      "Scripts, bots y herramientas que ahorran tiempo — desde generación de contenido hasta flujos automáticos con Python o JavaScript.",
    tags: ["Python", "JavaScript", "Bots", "Workflows"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>
          SERVICIOS
        </span>
        <h2
          className="font-serif"
          style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, marginTop: 16, color: "#ffffff" }}
        >
          Qué puedo hacer por vos
        </h2>
        <div className="gold-line" style={{ width: 160, margin: "24px auto 0" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(500px, 100%), 1fr))",
          gap: 24,
        }}
      >
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div style={{ marginBottom: 20 }}>{s.icon}</div>
            <h3
              className="font-serif"
              style={{ fontSize: 20, fontWeight: 500, color: "#ffffff", marginBottom: 12, lineHeight: 1.3 }}
            >
              {s.title}
            </h3>
            <p style={{ fontSize: 14, color: "#999999", lineHeight: 1.7, marginBottom: 20 }}>
              {s.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {s.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "#D4AF37",
                    border: "1px solid rgba(212,175,55,0.25)",
                    padding: "3px 8px",
                    borderRadius: 2,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
