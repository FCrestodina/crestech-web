import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Consulta inicial",
    description:
      "Hablamos 30 minutos sin costo. Entiendo tu proyecto, tus objetivos y qué resultado esperás. Sin compromiso.",
    tag: "Gratis · 30 min",
  },
  {
    num: "02",
    title: "Propuesta & presupuesto",
    description:
      "Te envío una propuesta detallada con alcance, tiempos y precio. Sin letra chica.",
    tag: "2–3 días hábiles",
  },
  {
    num: "03",
    title: "Producción",
    description:
      "Arrancamos. Revisiones incluidas en cada etapa para que el resultado sea exactamente lo que imaginaste.",
    tag: "Según el proyecto",
  },
  {
    num: "04",
    title: "Entrega & soporte",
    description:
      "Recibís todos los archivos finales y 15 días de soporte post-entrega para ajustes menores.",
    tag: "Incluido siempre",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(212,175,55,0.1)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>
              PROCESO
            </span>
            <h2
              className="font-serif"
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
            <Reveal key={step.num} delay={i * 100}>
              <div className="process-step">
                <div
                  className="font-serif gold-gradient-text"
                  style={{ fontSize: 48, fontWeight: 500, lineHeight: 1, marginBottom: 20, opacity: 0.6 }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-serif"
                  style={{ fontSize: 20, fontWeight: 500, color: "#ffffff", marginBottom: 12 }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: "#999999", lineHeight: 1.7, marginBottom: 20 }}>
                  {step.description}
                </p>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "#D4AF37",
                    border: "1px solid rgba(212,175,55,0.25)",
                    padding: "4px 10px",
                    borderRadius: 2,
                  }}
                >
                  {step.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
