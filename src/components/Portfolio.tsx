import Image from "next/image";
import Reveal from "./Reveal";

interface Project {
  category: string;
  title: string;
  challenge: string;
  description: string;
  result: string;
  tags: string[];
  color: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  url?: string;
}

const projects: Project[] = [
  {
    category: "Producto propio · SaaS",
    title: "Cupio",
    challenge: "Quien da clases o atiende con turno pierde horas coordinando por WhatsApp, y los huecos que deja una cancelación no se llenan.",
    description: "Nuestro sistema de turnos online: cada profesional crea su agenda y sus clientes reservan solos desde el celular, con cupo por clase, turnos fijos, lista de espera y recordatorios. Suscripción mensual con Mercado Pago y 7 días de prueba gratis.",
    result: "Está online y cualquier profesional lo prueba gratis, sin hablar con nadie.",
    tags: ["SaaS multi-tenant", "Turnos online", "Suscripción Mercado Pago", "PWA instalable"],
    color: "rgba(var(--gold-rgb),0.08)",
    accent: "var(--gold-mid)",
    url: "https://cupio.com.ar?utm_source=crestech&utm_medium=web&utm_campaign=portfolio",
  },
  {
    category: "Software a medida",
    title: "Mixtura",
    challenge: "Un estudio de pilates con dos sedes necesitaba tener abonos, recuperaciones, cobros y facturación en un solo lugar.",
    description: "Sistema hecho a medida para un estudio de pilates con dos sedes, adaptado a su forma de trabajar: las alumnas ven sus clases y su abono, cancelan y recuperan solas; el estudio maneja horarios, abonos, cobros, reportes y facturación electrónica ARCA desde su propio panel.",
    result: "En producción, con las dos sedes y la facturación electrónica saliendo desde el mismo panel.",
    tags: ["A medida", "Panel de admin", "Facturación ARCA", "Recuperaciones"],
    color: "rgba(var(--gold-rgb),0.08)",
    accent: "var(--gold-mid)",
    url: "https://mixturapilates.com.ar",
  },
  {
    category: "Diseño Web",
    title: "Crestodina Propiedades",
    challenge: "Una inmobiliaria con más de 40 años en Caballito necesitaba mostrar su cartera en su propia web, sin depender de los portales.",
    description: "Plataforma inmobiliaria con listado de propiedades en venta y alquiler, buscador por barrio, sistema de tasaciones online y consultas integradas.",
    result: "Cargan y ordenan las propiedades desde su propio panel, y cada consulta llega directo por WhatsApp.",
    tags: ["Búsqueda por zona", "Fichas para compartir", "Tasaciones online", "Consultas directas"],
    color: "rgba(var(--gold-rgb),0.05)",
    accent: "var(--gold-mid)",
  },
  {
    category: "Diseño Web",
    title: "Portfolio Fotografía & Audiovisual",
    challenge: "Una fotógrafa y filmmaker necesitaba un portfolio que se pareciera a su trabajo, no a una plantilla.",
    description: "Landing interactiva (scrollytelling) para una fotógrafa y filmmaker: portfolio de proyectos con experiencia inmersiva, estética de cine analógico nocturno y un panel propio para gestionar fotos, proyectos y textos.",
    result: "Actualiza fotos, proyectos y textos sola, sin depender de nosotros para cada cambio.",
    tags: ["Scrollytelling", "Portfolio", "Animaciones GSAP", "Panel de admin"],
    color: "rgba(var(--gold-rgb),0.05)",
    accent: "var(--gold-mid)",
  },
  {
    category: "Desarrollo Web",
    title: "Billetera Virtual Educativa",
    challenge: "Enseñar a usar dinero digital en 6° y 7° grado, sin plata real y sin pedirles datos personales a los chicos.",
    description: "Simulador de billetera digital para alumnos de primaria del programa Buenos Aires Aprende. Pagos con QR, historial de transacciones y panel docente.",
    result: "Funciona en vivo en el aula: la docente proyecta los QR y los chicos pagan desde el celular.",
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
              CASOS
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
                  <p style={{ fontSize: 14, color: "#bbbbbb", lineHeight: 1.7, marginBottom: 12 }}>
                    <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--gold-mid)", fontWeight: 600 }}>DESAFÍO </span>
                    {p.challenge}
                  </p>
                  <p className="portfolio-card-desc" style={{ fontSize: 14, color: "#888888", lineHeight: 1.7, marginBottom: 12 }}>
                    {p.description}
                  </p>
                  <p style={{ fontSize: 14, color: "#bbbbbb", lineHeight: 1.7, marginBottom: 18 }}>
                    <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--gold-mid)", fontWeight: 600 }}>RESULTADO </span>
                    {p.result}
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
