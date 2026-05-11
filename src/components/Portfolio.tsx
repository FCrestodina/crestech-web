import Reveal from "./Reveal";

const projects = [
  {
    category: "Branding",
    title: "Nómade Store",
    description: "Identidad visual completa para tienda de indumentaria lifestyle. Logo, paleta, tipografía y manual de marca.",
    tags: ["Logo", "Manual de marca", "Packaging"],
    color: "rgba(212,175,55,0.08)",
    accent: "#D4AF37",
  },
  {
    category: "Diseño Web",
    title: "Lumina Studio",
    description: "Landing page de alta conversión para estudio de fotografía. Animaciones sutiles, galería y formulario integrado.",
    tags: ["Next.js", "Landing page", "SEO"],
    color: "rgba(212,175,55,0.05)",
    accent: "#D4AF37",
  },
  {
    category: "Branding + Redes",
    title: "Delta Capital",
    description: "Rebranding y estrategia de contenido mensual para consultora financiera B2B. LinkedIn y materiales corporativos.",
    tags: ["Rebranding", "LinkedIn", "Contenido"],
    color: "rgba(212,175,55,0.08)",
    accent: "#D4AF37",
  },
  {
    category: "Automatización",
    title: "EcoFlow Agro",
    description: "Bot de reportes automáticos que procesa datos de campo y genera PDFs semanales para el equipo directivo.",
    tags: ["Python", "PDF", "Automatización"],
    color: "rgba(212,175,55,0.05)",
    accent: "#D4AF37",
  },
  {
    category: "Redes Sociales",
    title: "Vitae Wellness",
    description: "Gestión mensual de Instagram y diseño de feed para centro de bienestar. +3.2K seguidores en 4 meses.",
    tags: ["Instagram", "Reels", "Feed"],
    color: "rgba(212,175,55,0.08)",
    accent: "#D4AF37",
  },
  {
    category: "Diseño Web",
    title: "Arquitecta Vera",
    description: "Portfolio web minimalista para estudio de arquitectura. Galería de proyectos, blog y contacto.",
    tags: ["Portfolio", "Responsive", "CMS"],
    color: "rgba(212,175,55,0.05)",
    accent: "#D4AF37",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(212,175,55,0.1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>
              TRABAJOS
            </span>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, marginTop: 16, color: "#ffffff" }}
            >
              Proyectos seleccionados
            </h2>
            <div className="gold-line" style={{ width: 160, margin: "24px auto 0" }} />
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="portfolio-card">
                {/* Image placeholder */}
                <div
                  style={{
                    height: 200,
                    background: p.color,
                    border: "1px solid rgba(212,175,55,0.15)",
                    borderRadius: "2px 2px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <span
                    className="font-serif gold-gradient-text"
                    style={{ fontSize: 13, letterSpacing: "0.2em", opacity: 0.6, position: "relative" }}
                  >
                    {p.title.toUpperCase()}
                  </span>
                </div>

                <div className="portfolio-card-body">
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: "#D4AF37",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    {p.category.toUpperCase()}
                  </span>
                  <h3
                    className="font-serif"
                    style={{ fontSize: 22, fontWeight: 500, color: "#ffffff", marginBottom: 10 }}
                  >
                    {p.title}
                  </h3>
                  <p className="portfolio-card-desc" style={{ fontSize: 14, color: "#888888", lineHeight: 1.7, marginBottom: 18 }}>
                    {p.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.tags.map((t) => (
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
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a href="#contacto" className="btn-outline">
              HABLEMOS DE TU PROYECTO
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
