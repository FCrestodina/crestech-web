interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

const services: Service[] = [
  {
    featured: true,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 3 L22 13 L33 14 L24.5 21 L27 32 L18 26 L9 32 L11.5 21 L3 14 L14 13 Z" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </svg>
    ),
    title: "Pack Completo",
    description:
      "Tu negocio online, de punta a punta: web + fotografía + identidad + contenido y redes, todo bajo una misma marca. Nos encargamos de todo para que vos te ocupes de tu negocio.",
    tags: ["Web", "Fotografía", "Redes", "Identidad"],
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
    title: "Diseño & Desarrollo Web",
    description:
      "Sitios web y sistemas a medida — turnos, reservas, catálogos. Rápidos, bien diseñados y pensados para convertir. Con mantenimiento opcional.",
    tags: ["Sitio web", "Sistemas a medida", "Responsive", "Mantenimiento"],
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="9" width="28" height="20" rx="2" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="18" cy="19" r="5.5" stroke="#D4AF37" strokeWidth="1.5" />
        <rect x="11" y="5" width="9" height="4" rx="1" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="27" cy="14" r="1.4" fill="#D4AF37" />
      </svg>
    ),
    title: "Fotografía",
    description:
      "Producción de fotos profesionales de tu local, productos o equipo. Vamos presencialmente a capturar el material que tu marca necesita.",
    tags: ["Producto", "Local", "Equipo", "Edición"],
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 9 h24 a2 2 0 0 1 2 2 v11 a2 2 0 0 1 -2 2 H15 l-6 6 v-6 H6 a2 2 0 0 1 -2 -2 V11 a2 2 0 0 1 2 -2 z" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        <circle cx="13" cy="16.5" r="1.3" fill="#D4AF37" />
        <circle cx="18" cy="16.5" r="1.3" fill="#D4AF37" />
        <circle cx="23" cy="16.5" r="1.3" fill="#D4AF37" />
      </svg>
    ),
    title: "Contenido & Redes Sociales",
    description:
      "Manejo integral de tus redes con una community manager: planificación, posteos, reels y stories con identidad consistente, pensados para hacer crecer tu comunidad.",
    tags: ["Instagram", "Community", "Reels", "Calendario"],
  },
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
      "Diseño de marca que comunica quién sos desde el primer vistazo: logo, paleta, tipografía y sistema visual coherente.",
    tags: ["Logo", "Paleta", "Tipografía", "Manual de marca"],
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <line x1="5" y1="30" x2="31" y2="30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="7,25 14,17 20,21 29,9" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="23,9 29,9 29,15" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Marketing & Estrategia",
    description:
      "Estrategia para que todo lo anterior tenga sentido: posicionamiento, campañas y acciones que conectan tu marca con los clientes correctos.",
    tags: ["Estrategia", "Campañas", "Posicionamiento", "Análisis"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
          SERVICIOS
        </span>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, marginTop: 16, color: "#ffffff" }}
        >
          Lo que hacemos
        </h2>
        <div className="gold-line" style={{ width: 160, margin: "24px auto 0" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))",
          gap: 24,
        }}
      >
        {services.map((s) => (
          <div
            key={s.title}
            className="service-card"
            style={
              s.featured
                ? {
                    position: "relative",
                    border: "1px solid rgba(var(--gold-rgb),0.55)",
                    background:
                      "linear-gradient(150deg, rgba(var(--gold-rgb),0.10), rgba(var(--gold-rgb),0.02) 70%)",
                  }
                : undefined
            }
          >
            {s.featured && (
              <span
                style={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: "#0a0a0a",
                  background: "linear-gradient(135deg, #F5DC7B, var(--gold-mid))",
                  padding: "4px 10px",
                  borderRadius: 2,
                  fontWeight: 700,
                }}
              >
                RECOMENDADO
              </span>
            )}
            <div style={{ marginBottom: 20 }}>{s.icon}</div>
            <h3
              className="font-display"
              style={{ fontSize: 20, fontWeight: 500, color: "#ffffff", marginBottom: 12, lineHeight: 1.3 }}
            >
              {s.title}
            </h3>
            <p style={{ fontSize: 14, color: s.featured ? "#bbbbbb" : "#999999", lineHeight: 1.7, marginBottom: 20 }}>
              {s.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {s.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "var(--gold-mid)",
                    border: "1px solid rgba(var(--gold-rgb),0.25)",
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

      <p
        style={{
          textAlign: "center",
          maxWidth: 680,
          margin: "48px auto 0",
          fontSize: 15,
          color: "#aaaaaa",
          lineHeight: 1.8,
        }}
      >
        Una sola marca, un solo equipo, una sola conversación. Empezá por la web, sumá
        las fotos, o llevate todo: vos elegís hasta dónde.
      </p>
    </section>
  );
}
