import Reveal from "./Reveal";

const steps = [
  {
    title: "Consulta inicial",
    description:
      "Hablamos sin costo. Entendemos tu proyecto, tus objetivos y qué resultado esperás. Sin compromiso.",
  },
  {
    title: "Propuesta & presupuesto",
    description:
      "Preparamos una propuesta detallada con alcance, tiempos y precio. Sin letra chica.",
  },
  {
    title: "Producción",
    description:
      "Arrancamos. Revisiones incluidas en cada etapa para que el resultado sea exactamente lo que imaginaste.",
  },
  {
    title: "Entrega & soporte",
    description:
      "Recibís todos los archivos finales con soporte post-entrega incluido para ajustes menores.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(var(--gold-rgb),0.1)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
              PROCESO
            </span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, marginTop: 16, color: "#ffffff" }}
            >
              Cómo trabajamos
            </h2>
            <div className="gold-line" style={{ width: 160, margin: "24px auto 0" }} />
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="process-step">
                <div
                  className="gold-line"
                  style={{ width: 32, marginBottom: 24 }}
                />
                <h3
                  className="font-display"
                  style={{ fontSize: 20, fontWeight: 500, color: "#ffffff", marginBottom: 12 }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: "#999999", lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
