import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhoneDemo from "./PhoneDemo";
import { type LandingConfig, waLink } from "@/data/landings";
import { landingFontVars } from "@/lib/landingFonts";
import styles from "./landing.module.css";

function rich(text: string): ReactNode {
  return text
    .split("**")
    .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>));
}

function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.3 3.9 1.6.7 2.2.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.2-.2-.2-.4-.3Z" />
    </svg>
  );
}

const PROCESS_STEPS = [
  {
    title: "Hablamos 15 minutos",
    body: "Por WhatsApp o llamada. Nos contás cómo lo manejás hoy y qué te gustaría sacarte de encima. Sin compromiso.",
  },
  {
    title: "Te pasamos precio cerrado",
    body: "Propuesta clara con alcance, tiempos y precio final antes de arrancar. Sin letra chica ni sorpresas a mitad de camino.",
  },
  {
    title: "Lo dejamos andando",
    body: "Lo programamos, lo cargamos con tus datos y te enseñamos a usarlo. Quedás con soporte directo para ajustes.",
  },
];

export default function LandingRubro({ config }: { config: LandingConfig }) {
  const year = new Date().getFullYear();

  return (
    <div className={`${styles.landing} ${landingFontVars}`}>
      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.nav}`}>
          <Link className={styles.wordmark} href="/">
            CRES<span>TECH</span>
          </Link>
          <a
            className={styles.navCta}
            href={waLink(config.whatsappMessageNav)}
            target="_blank"
            rel="noopener"
          >
            Hablar con Franco
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div>
              <p className={styles.eyebrow}>{config.eyebrow}</p>
              <h1>
                {config.h1} <em>{config.h1em}</em>
              </h1>
              <p className={styles.heroSub}>{rich(config.heroSub)}</p>
              <div className={styles.ctaRow}>
                <a
                  className={styles.btnWa}
                  href={waLink(config.whatsappMessage)}
                  target="_blank"
                  rel="noopener"
                >
                  <WaIcon />
                  Quiero verlo funcionando
                </a>
                <a className={styles.btnGhost} href="#demo">
                  Ver qué incluye ↓
                </a>
              </div>
              <p className={styles.ctaNote}>Respuesta de una persona, no de un bot. Sin compromiso.</p>
            </div>

            <PhoneDemo demo={config.demo} />
          </div>
        </div>

        {/* DOLORES */}
        <section id="dolores">
          <div className={styles.wrap}>
            <Reveal>
              <p className={styles.eyebrow}>{config.painsEyebrow}</p>
              <h2>
                {config.painsHeading} <em>{config.painsHeadingEm}</em>
              </h2>
              <p className={styles.lede}>{config.painsLede}</p>
            </Reveal>
            <div className={styles.painGrid}>
              {config.pains.map((pain, i) => (
                <Reveal key={pain.title} delay={i * 80}>
                  <article className={styles.pain}>
                    <span className={styles.tag}>{pain.tag}</span>
                    <h3>{pain.title}</h3>
                    <p>{rich(pain.body)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRUEBA */}
        <section id="demo">
          <div className={styles.wrap}>
            <div className={styles.proofGrid}>
              <Reveal>
                <p className={styles.eyebrow}>{config.proofEyebrow}</p>
                <h2>
                  {config.proofHeading} <em>{config.proofHeadingEm}</em>
                </h2>
                <p className={styles.lede}>{config.proofLede}</p>
                {config.proofPhotos && (
                  <div className={styles.proofPhotos}>
                    {config.proofPhotos.map((photo) => (
                      <Image
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        width={480}
                        height={600}
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </Reveal>
              <Reveal delay={120}>
                <div className={styles.proofCard}>
                  <span className={styles.proj}>{config.proofCardLabel}</span>
                  <h3>{config.proofCardTitle}</h3>
                  <ul className={styles.featList}>
                    {config.features.map((f) => (
                      <li key={f.strong}>
                        <div>
                          <strong>{f.strong}</strong> <span>{f.rest}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section id="proceso">
          <div className={styles.wrap}>
            <Reveal>
              <p className={styles.eyebrow}>Cómo trabajamos</p>
              <h2>
                Sin vueltas, <em>de principio a fin</em>
              </h2>
            </Reveal>
            <div className={styles.steps}>
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 80}>
                  <div className={styles.step}>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRECIO + QUIÉN */}
        <section id="precio">
          <div className={styles.wrap}>
            <div className={styles.duo}>
              <Reveal>
                <div className={styles.panel}>
                  <p className={styles.eyebrow}>Precio</p>
                  <h3>De startup, no de agencia</h3>
                  <p>
                    Somos un estudio chico y eso se nota en el precio:{" "}
                    <strong>presupuesto cerrado, pensado para tu negocio, no para corporaciones</strong>.
                  </p>
                  <p>
                    Pagás una vez por el desarrollo y, si querés, un mantenimiento mensual opcional para que
                    nos ocupemos de que todo siga funcionando.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className={styles.panel}>
                  <p className={styles.eyebrow}>Quién está del otro lado</p>
                  <h3>Hablás con Franco. El mismo que lo programa.</h3>
                  <p>
                    Crestech la fundó <strong>Franco Crestodina</strong>, y hoy es él quien te responde y
                    escribe el código. No hay vendedor, ni intermediario, ni &quot;déjeme consultarlo con el
                    equipo técnico&quot; — la persona que te contesta el WhatsApp es la que hace el sistema.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className={styles.final}>
          <div className={styles.wrap}>
            <Reveal>
              <p className={styles.eyebrow}>El siguiente paso</p>
              <h2>
                {config.finalHeading} <em>{config.finalHeadingEm}</em>
              </h2>
              <p className={styles.lede}>{config.finalLede}</p>
              <div>
                <a
                  className={styles.btnWa}
                  href={waLink(config.whatsappMessage)}
                  target="_blank"
                  rel="noopener"
                >
                  <WaIcon />
                  Escribirle a Franco
                </a>
                <p className={styles.ctaNote}>
                  Te responde Franco. Sin compromiso, sin bot, sin spam después.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.foot}`}>
          <span>© {year} Crestech Studio — Franco Crestodina</span>
          <a href="https://instagram.com/crestech.studio" target="_blank" rel="noopener">
            @CRESTECH.STUDIO
          </a>
        </div>
      </footer>
    </div>
  );
}
