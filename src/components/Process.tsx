import Reveal from "./Reveal";

const steps = [
  {
    title: "Primer vistazo",
    description:
      "Una charla sin costo: nos contás cómo funciona tu negocio y te decimos qué vemos y por dónde arrancaríamos.",
  },
  {
    title: "Análisis a fondo",
    description:
      "Si hace falta, relevamos en detalle cómo trabajás y armamos un plan con prioridades, tiempos y costos. Es un servicio pago que se descuenta del presupuesto si después avanzás. Si ya sabés lo que necesitás, lo salteamos.",
  },
  {
    title: "Propuesta y desarrollo",
    description:
      "Precio cerrado antes de arrancar, 50% al inicio y 50% contra entrega, con revisiones en cada etapa.",
  },
  {
    title: "Entrega y crecimiento",
    description:
      "Te entregamos el sistema andando, con un servicio mensual que lo mantiene. Desde ahí, marca y contenido para hacerlo crecer.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      style={{
        padding: "100px 24px 110px",
        background: "linear-gradient(180deg, rgba(var(--gold-rgb),0.05), rgba(var(--gold-rgb),0) 70%)",
        borderTop: "1px solid rgba(var(--gold-rgb),0.12)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 64, display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 24px" }}>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: 500, color: "#ffffff" }}
            >
              Cómo trabajamos
            </h2>
            <span style={{ fontSize: 15, color: "#8a8a8a" }}>
              Cuatro pasos, del primer vistazo a que tu negocio crezca.
            </span>
          </div>
        </Reveal>

        <ol className="timeline">
          {steps.map((step, i) => (
            <li key={step.title} className="timeline-step">
              <Reveal delay={i * 100}>
                <span className="timeline-dot font-display" aria-hidden="true">
                  {i + 1}
                </span>
                <h3
                  className="font-display"
                  style={{ fontSize: 20, fontWeight: 500, color: "#ffffff", marginBottom: 10 }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: "#999999", lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
