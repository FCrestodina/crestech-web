interface Service {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

// Las tres etapas de "socio digital de la pyme" (DEC-008): entender el
// negocio, armar el sistema y hacerlo crecer. El orden es el del trabajo.
const services: Service[] = [
  {
    step: "ENTENDER",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="15" cy="15" r="10" stroke="#D4AF37" strokeWidth="1.5" />
        <line x1="22.5" y1="22.5" x2="32" y2="32" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="10,17 14,13 17,16 21,11" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Diagnóstico",
    description:
      "Miramos cómo trabajás hoy: cómo te llegan los clientes, cómo manejás turnos, cobros y consultas, y dónde se te va el tiempo o la plata. El primer vistazo es gratis. Si hace falta ir a fondo, hacemos un análisis pago que termina en un plan concreto.",
    tags: ["Primer vistazo gratis", "Análisis a fondo", "Plan de acción"],
  },
  {
    step: "ARMAR",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="6" width="28" height="20" rx="2" stroke="#D4AF37" strokeWidth="1.5" />
        <line x1="4" y1="12" x2="32" y2="12" stroke="#D4AF37" strokeWidth="1" />
        <path d="M14 30 L22 30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="26" x2="18" y2="30" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    ),
    title: "Sistemas",
    description:
      "Turnos, reservas, catálogos, paneles de gestión y sitios web, hechos para cómo trabaja tu negocio. Si ya existe algo que sirve, como Cupio para turnos, arrancamos por ahí, y después de la entrega queda un servicio mensual que lo mantiene andando.",
    tags: ["Turnos y reservas", "Sistemas a medida", "Sitio web", "Servicio mensual"],
  },
  {
    step: "CRECER",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <line x1="5" y1="30" x2="31" y2="30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="7,25 14,17 20,21 29,9" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="23,9 29,9 29,15" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Marca y contenido",
    description:
      "Para que el sistema se llene de clientes: identidad visual, fotos de tu local y tus productos, manejo de redes con una community manager y campañas.",
    tags: ["Identidad visual", "Fotografía", "Redes", "Campañas"],
  },
];

export default function Services() {
  return (
    <section id="servicios" style={{ padding: "110px 24px" }}>
      <div className="split-layout" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Columna fija: el encabezado acompaña mientras se leen las tres etapas */}
        <div className="split-aside">
          <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
            SERVICIOS
          </span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 500, marginTop: 16, color: "#ffffff", lineHeight: 1.05 }}
          >
            Lo que
            <br />
            <span className="gold-gradient-text">hacemos</span>
          </h2>
          <p style={{ fontSize: 16, color: "#aaaaaa", lineHeight: 1.8, marginTop: 24, maxWidth: 360 }}>
            Tres etapas, en el orden en que se trabaja. Podés arrancar por cualquiera de las tres. Si ya sabés lo que necesitás, vamos directo a la propuesta.
          </p>
        </div>

        <ol className="service-list">
          {services.map((s, i) => (
            <li key={s.title} className="service-row">
              <span className="service-num font-display" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  {s.icon}
                  <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--gold-mid)", fontWeight: 600 }}>
                    {s.step}
                  </span>
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: 26, fontWeight: 500, color: "#ffffff", marginBottom: 12, lineHeight: 1.2 }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: "#999999", lineHeight: 1.75, marginBottom: 18 }}>
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
