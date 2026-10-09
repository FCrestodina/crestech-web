import Image from "next/image";

interface Cliente {
  nombre: string;
  rubro: string;
  logo: string;
  fondo: string;
  ancho: number;
  alto: number;
}

const clientes: Cliente[] = [
  { nombre: "Crestodina Propiedades", rubro: "Inmobiliaria", logo: "/clientes/crestodina.png", fondo: "#ffffff", ancho: 412, alto: 106 },
  { nombre: "Mixtura", rubro: "Estudio de pilates", logo: "/clientes/mixtura.png", fondo: "#ffffff", ancho: 225, alto: 104 },
  { nombre: "Impulso Deportivo", rubro: "Asociación civil", logo: "/clientes/impulso.webp", fondo: "#1b0b20", ancho: 460, alto: 461 },
  { nombre: "Ayedg.ph", rubro: "Productora audiovisual", logo: "/clientes/ayeph.svg", fondo: "#0f0e14", ancho: 32, alto: 32 },
];

function Item({ c, copia = false }: { c: Cliente; copia?: boolean }) {
  return (
    <li className="cliente" aria-hidden={copia || undefined}>
      <span className="cliente-logo" style={{ background: c.fondo }}>
        <Image src={c.logo} alt="" width={c.ancho} height={c.alto} />
      </span>
      <span>
        <span className="cliente-nombre">{c.nombre}</span>
        <span className="cliente-rubro">{c.rubro}</span>
      </span>
    </li>
  );
}

/** Franja de logos que se desplaza sola; con movimiento reducido queda quieta y en filas. */
export default function Clientes() {
  return (
    <section aria-labelledby="clientes-titulo" style={{ padding: "56px 0", borderTop: "1px solid rgba(var(--gold-rgb),0.1)" }}>
      <p
        id="clientes-titulo"
        style={{ textAlign: "center", fontSize: 11, letterSpacing: "0.3em", color: "var(--gold-mid)", marginBottom: 28 }}
      >
        CONFÍAN EN NOSOTROS
      </p>
      <div className="clientes-marquee">
        <ul className="clientes-track">
          {clientes.map((c) => (
            <Item key={c.nombre} c={c} />
          ))}
          {/* Segunda vuelta para que el desplazamiento no tenga corte; los lectores de pantalla la saltean. */}
          {clientes.map((c) => (
            <Item key={`${c.nombre}-2`} c={c} copia />
          ))}
        </ul>
      </div>
    </section>
  );
}
