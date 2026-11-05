const team = [
  "Desarrollador web",
  "Fotógrafa",
  "Diseñadora gráfica",
  "Especialista en marketing",
  "Community manager",
];

export default function About() {
  return (
    <section
      id="nosotros"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 72,
          alignItems: "center",
        }}
      >
        {/* Equipo */}
        <div>
          <span className="eyebrow">El equipo</span>
          <ul className="team-list">
            {team.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>

        {/* Text */}
        <div>
          <span className="eyebrow">Sobre nosotros</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, marginTop: 16, marginBottom: 24, color: "#ffffff", lineHeight: 1.2 }}
          >
            Quiénes hacemos
            <br />
            <span className="gold-text">Crestech</span>
          </h2>
          <p style={{ fontSize: 16, color: "#aaaaaa", lineHeight: 1.8, marginBottom: 16 }}>
            En Crestech está quien entiende el negocio, quien arma el sistema y quien lo hace crecer: desarrollo web, marketing, diseño gráfico, fotografía y community manager. Cada parte la trabaja quien sabe del tema.
          </p>
          <p style={{ fontSize: 16, color: "#aaaaaa", lineHeight: 1.8, marginBottom: 32 }}>
            Podés arrancar por el diagnóstico, contratar solo el sistema o sumarle marca y redes. La mayor parte del trabajo es remota; cuando el proyecto incluye fotografía, vamos a tu local a producirla.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
              borderTop: "1px solid var(--hairline)",
              paddingTop: 28,
            }}
          >
            {[
              { title: "Servicios", desc: "Según lo que necesitás" },
              { title: "Equipo", desc: "Especialistas por área" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  paddingLeft: 16,
                  borderLeft: "1px solid var(--hairline)",
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 16, color: "#ffffff" }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: 13, color: "#8a8a8a", lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
