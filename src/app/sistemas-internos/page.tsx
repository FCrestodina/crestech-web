import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { waLink } from "@/data/landings";
import styles from "./sistemas.module.css";

export const metadata: Metadata = {
  title: "Sistemas internos a medida | Crestech",
  description:
    "Un panel propio para manejar la agenda, los clientes, los cobros, los reportes y la facturación electrónica. Mirá por dentro uno que hicimos para un estudio de pilates.",
  alternates: { canonical: "/sistemas-internos" },
  openGraph: {
    title: "Sistemas internos a medida | Crestech",
    description: "Mirá por dentro el panel que hicimos para un estudio de pilates con dos sedes.",
    url: "/sistemas-internos",
    type: "website",
    locale: "es_AR",
  },
};

const WA_MENSAJE =
  "Hola! Vi el sistema interno de ejemplo en la web de Crestech y quiero ver cómo sería uno para mi negocio.";

interface Pantalla {
  clave: string;
  etiqueta: string;
  titulo: string;
  texto: string;
  alt: string;
  // Sin captura de celular: en pantallas chicas se muestra la de escritorio.
  celular: boolean;
}

// Capturas sacadas de una copia del sistema contra una base de prueba: la marca, los nombres
// y los montos son inventados (receta en el vault, Presupuestos/kiki-vendedora.md).
const PANTALLAS: Pantalla[] = [
  {
    clave: "dashboard",
    etiqueta: "Inicio",
    titulo: "Lo que pasa hoy, apenas entrás",
    texto:
      "Alumnos activos, clases del día, lugares libres de la semana y quién debe el abono. Arriba, los avisos que piden hacer algo: abonos sin pagar y certificados médicos para revisar.",
    alt: "Inicio del panel con alumnos activos, clases de hoy, lugares libres y abonos sin pagar",
    celular: true,
  },
  {
    clave: "calendario",
    etiqueta: "Agenda",
    titulo: "La semana de todas las sedes",
    texto:
      "Cada clase con su profe y cuántos lugares le quedan. El color dice cuánto se llenó, así se ve de un vistazo qué horarios están completos y cuáles conviene mover o promocionar.",
    alt: "Calendario semanal con las clases de cada sede coloreadas según la ocupación",
    celular: true,
  },
  {
    clave: "abonos",
    etiqueta: "Planes",
    titulo: "Abonos y precios en un solo lugar",
    texto:
      "El catálogo de abonos con el precio por transferencia y en efectivo. Se edita desde acá y se le asigna a cada alumno desde su ficha.",
    alt: "Listado de tipos de abono con cantidad de clases y precios por medio de pago",
    celular: false,
  },
  {
    clave: "pagos",
    etiqueta: "Cobros",
    titulo: "Cada cobro, registrado",
    texto:
      "Transferencias y efectivo por separado, con el total del período y lo que entró en cada sede. Se filtra por fechas y se exporta a Excel.",
    alt: "Registro de pagos con totales por medio de pago y por sede",
    celular: true,
  },
  {
    clave: "reportes",
    etiqueta: "Reportes",
    titulo: "Números para decidir",
    texto:
      "Ingresos por medio de pago y por mes, y la asistencia del período: cuántos vinieron y cuántos faltaron. Se elige el rango de fechas y se exporta.",
    alt: "Reportes de ingresos por medio de pago y asistencia del período",
    celular: true,
  },
  {
    clave: "factura",
    etiqueta: "Facturación",
    titulo: "Factura electrónica sin salir del panel",
    texto:
      "Se emite contra ARCA desde el mismo sistema, con CAE y código QR. El comprobante queda listo para imprimir o para mandarle el link al alumno, y también se puede facturar todo el mes de una vez.",
    alt: "Factura B electrónica autorizada por ARCA, con CAE y código QR",
    celular: true,
  },
];

const RUBROS = [
  { rubro: "Bar o restaurante", que: "mesas, comandas, lo que se cargó a cada mesa y la caja del día." },
  { rubro: "Gimnasio o academia", que: "alumnos, cuotas, asistencia y vencimientos." },
  { rubro: "Consultorio", que: "turnos, pacientes, historial y cobros." },
  { rubro: "Taller o servicio técnico", que: "órdenes de trabajo, en qué estado está cada una y presupuestos." },
  { rubro: "Comercio", que: "stock, ventas y pedidos a proveedores." },
];

export default function SistemasInternosPage() {
  // Como /didactico y /blog: página secundaria sin Nav ni Footer (el nav de la home son anclas).
  return (
    <main>
      <section style={{ padding: "96px 24px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
              SISTEMAS INTERNOS
            </span>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(34px, 6vw, 60px)",
                fontWeight: 500,
                marginTop: 20,
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              El panel de tu negocio,
              <br />
              <span className="gold-gradient-text">hecho a tu medida</span>
            </h1>
            <p
              style={{
                marginTop: 28,
                maxWidth: 700,
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              Un sistema interno es la herramienta que usa tu equipo todos los días: la agenda, los
              clientes, lo que se cobró, lo que falta cobrar y las facturas, en un solo lugar y con tu
              forma de trabajar. Abajo está por dentro uno que hicimos para un estudio de pilates con
              dos sedes.
            </p>
            <p className={styles.rotulo}>
              Las capturas son del sistema real. La marca, los nombres y los montos son de ejemplo,
              para cuidar los datos de los alumnos del estudio.
            </p>
            <div style={{ marginTop: 36 }}>
              <a
                href={waLink(WA_MENSAJE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                QUIERO UNO PARA MI NEGOCIO
              </a>
            </div>
            <div className="gold-line" style={{ width: 200, marginTop: 56 }} />
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "24px 24px 40px" }}>
        <div className={styles.lista}>
          {PANTALLAS.map((p, i) => (
            <Reveal key={p.clave}>
              <article className={`${styles.pantalla} ${i % 2 === 1 ? styles.invertida : ""}`}>
                <div className={styles.texto}>
                  <span className={styles.etiqueta}>
                    {String(i + 1).padStart(2, "0")} · {p.etiqueta}
                  </span>
                  <h2 className="font-display">{p.titulo}</h2>
                  <p>{p.texto}</p>
                </div>
                <div className={`${styles.escena} ${p.celular ? "" : styles.sinCelular}`}>
                  <a
                    className={styles.escritorio}
                    href={`/sistemas-internos/escritorio-${p.clave}.webp`}
                    target="_blank"
                    rel="noopener"
                    title="Ver la captura en tamaño completo"
                  >
                    <Image
                      src={`/sistemas-internos/escritorio-${p.clave}.webp`}
                      alt={p.alt}
                      width={2160}
                      height={1350}
                      sizes="(max-width: 899px) 100vw, 700px"
                    />
                  </a>
                  {p.celular && (
                    <div className={styles.celular}>
                      <Image
                        src={`/sistemas-internos/celular-${p.clave}.webp`}
                        alt={`${p.alt}, en el celular`}
                        width={780}
                        height={1688}
                        sizes="(max-width: 899px) 300px, 150px"
                      />
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: "40px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)" }}>
              OTROS RUBROS
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 500,
                marginTop: 16,
                color: "#ffffff",
              }}
            >
              ¿Y si no tenés un estudio de pilates?
            </h2>
            <p
              style={{
                marginTop: 18,
                maxWidth: 700,
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--text-secondary)",
              }}
            >
              La idea sirve para cualquier negocio que hoy se maneja con planillas, cuadernos y
              WhatsApp. Primero vemos cómo trabajás hoy y después armamos solo lo que te sirve. Por
              ejemplo:
            </p>
            <ul className={styles.rubros}>
              {RUBROS.map((r) => (
                <li key={r.rubro}>
                  <strong>{r.rubro}:</strong> {r.que}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "0 24px 110px", textAlign: "center" }}>
        <Reveal>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", marginBottom: 24 }}>
            Contanos cómo trabaja tu negocio y te decimos cómo sería el tuyo.
          </p>
          <a
            href={waLink(WA_MENSAJE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            ESCRIBINOS POR WHATSAPP
          </a>
          <p style={{ marginTop: 56 }}>
            <Link href="/" style={{ color: "#8a8577", fontSize: 13 }}>
              Volver al sitio
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
