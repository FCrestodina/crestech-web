export default function About() {
  return (
    <section
      id="sobre-mi"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        borderBottom: "1px solid rgba(212,175,55,0.1)",
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
        {/* Firma decorativa */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <svg width="320" height="160" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gold-firma" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5DC7B" />
                  <stop offset="40%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8B6914" />
                </linearGradient>
              </defs>
              <text
                x="160"
                y="90"
                textAnchor="middle"
                fill="url(#gold-firma)"
                fontFamily="Georgia, serif"
                fontSize="52"
                fontStyle="italic"
                fontWeight="500"
              >
                Franco
              </text>
              <text
                x="160"
                y="135"
                textAnchor="middle"
                fill="url(#gold-firma)"
                fontFamily="Georgia, serif"
                fontSize="38"
                fontStyle="italic"
                fontWeight="400"
                opacity="0.75"
              >
                Crestodina
              </text>
              <line x1="40" y1="148" x2="280" y2="148" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" />
            </svg>

            {/* Dots decorator */}
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 20 }}>
              {[-1, 0, 1].map((i) => (
                <div
                  key={i}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37", opacity: 0.7 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#D4AF37" }}>SOBRE MÍ</span>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, marginTop: 16, marginBottom: 24, color: "#ffffff", lineHeight: 1.2 }}
          >
            El estudio detrás
            <br />
            <span className="gold-gradient-text">de la marca</span>
          </h2>
          <p style={{ fontSize: 16, color: "#aaaaaa", lineHeight: 1.8, marginBottom: 16 }}>
            En Crestech Studio nos especializamos en construir presencias digitales que combinan identidad visual sólida con tecnología de primer nivel.
          </p>
          <p style={{ fontSize: 16, color: "#aaaaaa", lineHeight: 1.8, marginBottom: 32 }}>
            Trabajamos con emprendedores, startups y marcas que entienden que el diseño no es un gasto — es una inversión en cómo los percibe el mundo.
          </p>

          <div
            style={{
              display: "flex",
              gap: 32,
              borderTop: "1px solid rgba(212,175,55,0.15)",
              paddingTop: 28,
            }}
          >
            {[
              { num: "+20", label: "Proyectos entregados" },
              { num: "Full", label: "Stack — diseño y código" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-serif gold-gradient-text"
                  style={{ fontSize: 32, fontWeight: 500 }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: 12, color: "#666666", letterSpacing: "0.1em", marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
