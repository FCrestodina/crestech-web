import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhoneDemo from "./PhoneDemo";
import { type LandingConfig, cupioLink, landings, waLink } from "@/data/landings";
import { landingFontVars } from "@/lib/landingFonts";
import styles from "./landing.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://crestech.com.ar";

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
  const otros = landings.filter((l) => l.slug !== config.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.eyebrow,
    serviceType: config.eyebrow,
    description: config.metaDescription,
    url: `${siteUrl}/${config.slug}`,
    areaServed: { "@type": "Country", name: "Argentina" },
    provider: { "@type": "ProfessionalService", name: "Crestech Studio", url: siteUrl },
  };

  return (
    <div className={`${styles.landing} ${landingFontVars(config.theme)}`} data-theme={config.theme}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
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
            data-umami-event="landing-whatsapp-nav"
          >
            Hablar con el equipo
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div>
              <h1 className={styles.eyebrow}>{config.eyebrow}</h1>
              <p className={styles.headline}>
                {config.h1} <em>{config.h1em}</em>
              </p>
              <p className={styles.heroSub}>{rich(config.heroSub)}</p>
              <div className={styles.ctaRow}>
                <a
                  className={styles.btnWa}
                  href={waLink(config.whatsappMessage)}
                  target="_blank"
                  rel="noopener"
                  data-umami-event="landing-whatsapp-hero"
                >
                  <WaIcon />
                  Quiero verlo funcionando
                </a>
                {config.heroSecondary ? (
                  <a
                    className={styles.btnGhost}
                    href={config.heroSecondary.href}
                    target="_blank"
                    rel="noopener"
                    data-umami-event="landing-cupio-hero"
                  >
                    {config.heroSecondary.label}
                  </a>
                ) : (
                  <a className={styles.btnGhost} href="#demo">
                    Ver qué incluye ↓
                  </a>
                )}
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
                {config.proofCta && (
                  <a
                    className={`${styles.btnGhost} ${styles.proofCta}`}
                    href={config.proofCta.href}
                    target="_blank"
                    rel="noopener"
                    data-umami-event="landing-cupio-proof"
                  >
                    {config.proofCta.label}
                  </a>
                )}
                {config.proofPhotos && config.proofPhotosPhone && (
                  <div className={styles.proofPhones}>
                    {config.proofPhotos.map((photo) => (
                      <div className={styles.phone} key={photo.src}>
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={390}
                          height={844}
                          sizes="(max-width: 900px) 45vw, 180px"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {config.proofPhotos && !config.proofPhotosPhone && (
                  <div className={styles.proofPhotos}>
                    {config.proofPhotos.map((photo) => (
                      <Image
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        width={480}
                        height={600}
                        sizes="(max-width: 900px) 45vw, 260px"
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

        {/* PANEL DE GESTIÓN */}
        {config.adminPhotos && (
          <section id="panel">
            <div className={styles.wrap}>
              <Reveal>
                <p className={styles.eyebrow}>{config.adminEyebrow}</p>
                <h2>
                  {config.adminHeading} <em>{config.adminHeadingEm}</em>
                </h2>
                {config.adminLede && <p className={styles.lede}>{config.adminLede}</p>}
              </Reveal>
              <Reveal delay={120}>
                <div className={styles.proofPhones}>
                  {config.adminPhotos.map((photo) => (
                    <div className={styles.phone} key={photo.src}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={390}
                        height={844}
                        sizes="(max-width: 900px) 45vw, 180px"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

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
                  {config.pricing ? (
                    <>
                      <h3>{config.pricing.heading}</h3>
                      {config.pricing.body.map((p) => (
                        <p key={p}>{rich(p)}</p>
                      ))}
                    </>
                  ) : (
                    <>
                      <h3>De startup, no de agencia</h3>
                      <p>
                        Somos un estudio chico y eso se nota en el precio:{" "}
                        <strong>presupuesto cerrado, pensado para tu negocio, no para corporaciones</strong>.
                      </p>
                      <p>
                        Pagás una vez por el desarrollo y, si querés, un mantenimiento mensual opcional para que
                        nos ocupemos de que todo siga funcionando.
                      </p>
                    </>
                  )}
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className={styles.panel}>
                  <p className={styles.eyebrow}>Quién está del otro lado</p>
                  <h3>Un equipo de especialistas, no un intermediario.</h3>
                  <p>
                    En <strong>Crestech</strong> cada parte la trabaja quien sabe del tema: diseño,
                    fotografía, redes, marketing y desarrollo. Armamos lo que tu negocio necesita —
                    solo la web, web y fotos, o todo junto— y nos adaptamos a tu caso.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section id="preguntas">
          <div className={styles.wrap}>
            <Reveal>
              <p className={styles.eyebrow}>Preguntas frecuentes</p>
              <h2>
                Lo que nos preguntan <em>antes de arrancar</em>
              </h2>
            </Reveal>
            <div className={styles.faqList}>
              {config.faq.map((f) => (
                <div className={styles.faqItem} key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
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
                  data-umami-event="landing-whatsapp-final"
                >
                  <WaIcon />
                  Escribinos
                </a>
                <p className={styles.ctaNote}>
                  Te respondemos a la brevedad. Sin compromiso, sin bot, sin spam después.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <nav className={styles.related} aria-label="Otras soluciones">
            <span>También hacemos:</span>
            {otros.map((l) => (
              <Link key={l.slug} href={`/${l.slug}`}>
                {l.shortLabel}
              </Link>
            ))}
            <a href={cupioLink("/", config.slug)} target="_blank" rel="noopener">
              Cupio · turnos online
            </a>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
        <div className={`${styles.wrap} ${styles.foot}`}>
          <span>© {year} Crestech Studio</span>
          <a href="https://instagram.com/crestech.studio" target="_blank" rel="noopener">
            @CRESTECH.STUDIO
          </a>
        </div>
      </footer>
    </div>
  );
}
