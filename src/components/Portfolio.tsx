import Image from "next/image";
import Reveal from "./Reveal";

interface Project {
  category: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  url?: string;
}

const projects: Project[] = [
  {
    category: "Software a medida",
    title: "Mixtura",
    description: "Sistema hecho a medida para un estudio de pilates, adaptado a su forma de trabajar: turnos online, pagos con MercadoPago, facturación electrónica ARCA, bot de WhatsApp con recordatorios y un panel de administración propio para gestionar clases, abonos y reportes.",
    tags: ["A medida", "Panel de admin", "Facturación ARCA", "Bot de WhatsApp"],
    color: "rgba(var(--gold-rgb),0.08)",
    accent: "var(--gold-mid)",
    url: "https://mixturapilates.com.ar",
  },
  {
    category: "Producto propio · SaaS",
    title: "Cupio",
    description: "Nuestra plataforma de gestión de turnos en formato SaaS: cualquier proveedor crea su sala, publica su agenda y sus clientes reservan online. Suscripción mensual con Mercado Pago, multi-cliente y lista para usar — la base probada que adaptamos cuando un negocio necesita algo a medida, como Mixtura.",
    tags: ["SaaS multi-tenant", "Turnos online", "Suscripción Mercado Pago", "PWA instalable"],
    color: "rgba(var(--gold-rgb),0.08)",
    accent: "var(--gold-mid)",
    url: "https://cupio.com.ar",
  },
  {
    category: "Diseño Web",
    title: "Crestodina Propiedades",
    description: "Plataforma inmobiliaria con listado de propiedades en venta y alquiler, buscador por barrio, sistema de tasaciones online y consultas integradas.",
    tags: ["Búsqueda por zona", "Fichas para compartir", "Tasaciones online", "Consultas directas"],
    color: "rgba(var(--gold-rgb),0.05)",
    accent: "var(--gold-mid)",
  },
  {
    category: "Diseño Web",
    title: "Portfolio Fotografía & Audiovisual",
    description: "Landing interactiva (scrollytelling) para una fotógrafa y filmmaker: portfolio de proyectos con experiencia inmersiva, estética de cine analógico nocturno y un panel propio para gestionar fotos, proyectos y textos.",
    tags: ["Scrollytelling", "Portfolio", "Animaciones GSAP", "Panel de admin"],
    color: "rgba(var(--gold-rgb),0.05)",
    accent: "var(--gold-mid)",
  },
  {
    category: "Desarrollo Web",
    title: "Billetera Virtual Educativa",
    description: "Simulador de billetera digital para alumnos de primaria del programa Buenos Aires Aprende. Pagos con QR, historial de transacciones y panel docente.",
    tags: ["Pagos con QR", "Panel docente", "Historial de pagos", "Educación"],
    color: "rgba(var(--gold-rgb),0.05)",
    accent: "var(--gold-mid)",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(var(--gold-rgb),0.1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
              TRABAJOS
            </span>
            <h2
              className="font-display"
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p, i) => {
            const CardTag = p.url ? "a" : "div";
            const cardProps = p.url
              ? {
                  href: p.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `Ver ${p.title} (abre en una pestaña nueva)`,
                }
              : {};
            return (
            <Reveal key={p.title} delay={i * 80}>
              <CardTag
                {...cardProps}
                className={`portfolio-card${p.url ? " portfolio-card-link" : ""}`}
                style={{ textDecoration: "none", color: "inherit", cursor: p.url ? "pointer" : undefined }}
              >
                <div
                  style={{
                    height: 200,
                    background: p.color,
                    border: "1px solid rgba(var(--gold-rgb),0.15)",
                    borderRadius: "2px 2px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.imageAlt ?? p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage:
                            "linear-gradient(rgba(var(--gold-rgb),0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--gold-rgb),0.03) 1px, transparent 1px)",
                          backgroundSize: "40px 40px",
                        }}
                      />
                      {/* Placeholder tipo "browser chrome" mientras no haya mockup/captura real */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 28,
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "0 12px",
                          borderBottom: "1px solid rgba(var(--gold-rgb),0.15)",
                          background: "rgba(var(--gold-rgb),0.04)",
                        }}
                      >
                        {[0, 1, 2].map((d) => (
                          <span
                            key={d}
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "rgba(var(--gold-rgb),0.3)",
                            }}
                          />
                        ))}
                      </div>
                      <span
                        className="font-display"
                        style={{
                          fontSize: 13,
                          letterSpacing: "0.2em",
                          color: "var(--gold-light)",
                          position: "relative",
                          textAlign: "center",
                          padding: "0 16px",
                        }}
                      >
                        {p.title.toUpperCase()}
                      </span>
                    </>
                  )}
                </div>

                <div className="portfolio-card-body">
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      color: "var(--gold-mid)",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    {p.category.toUpperCase()}
                  </span>
                  <h3
                    className="font-display"
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
              </CardTag>
            </Reveal>
            );
          })}
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
