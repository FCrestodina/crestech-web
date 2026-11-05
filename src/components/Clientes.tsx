import Image from "next/image";

interface Cliente {
  nombre: string;
  rubro: string;
  logo: string;
  fondo: string;
  ancho: number;
  alto: number;
  foto?: boolean; // foto en vez de logo: llena la caja de borde a borde
}

const clientes: Cliente[] = [
  { nombre: "Crestodina Propiedades", rubro: "Inmobiliaria", logo: "/clientes/crestodina.png", fondo: "#ffffff", ancho: 412, alto: 106 },
  { nombre: "Mixtura", rubro: "Estudio de pilates", logo: "/clientes/mixtura.png", fondo: "#ffffff", ancho: 225, alto: 104 },
  { nombre: "Impulso Deportivo", rubro: "Asociación civil", logo: "/clientes/impulso.webp", fondo: "#1b0b20", ancho: 460, alto: 461 },
  { nombre: "Ayedg.ph", rubro: "Productora audiovisual", logo: "/clientes/ayeph.jpg", fondo: "#0f0e14", ancho: 360, alto: 216, foto: true },
  { nombre: "La Casona de Susana", rubro: "Hostería", logo: "/clientes/casona-susana.webp", fondo: "#f5eee1", ancho: 320, alto: 320 },
];

function Item({ c }: { c: Cliente }) {
  return (
    <li className="cliente">
      <span className={c.foto ? "cliente-logo cliente-logo-foto" : "cliente-logo"} style={{ background: c.fondo }}>
        <Image src={c.logo} alt="" width={c.ancho} height={c.alto} />
      </span>
      <span>
        <span className="cliente-nombre">{c.nombre}</span>
        <span className="cliente-rubro">{c.rubro}</span>
      </span>
    </li>
  );
}

/** Fila quieta de logos de clientes; si no entran en una línea, siguen en la de abajo. */
export default function Clientes() {
  return (
    <section aria-labelledby="clientes-titulo" style={{ padding: "56px 0", borderTop: "1px solid var(--hairline)" }}>
      <p id="clientes-titulo" className="eyebrow" style={{ textAlign: "center", marginBottom: 28 }}>
        Confían en nosotros
      </p>
      <ul className="clientes-track">
        {clientes.map((c) => (
          <Item key={c.nombre} c={c} />
        ))}
      </ul>
    </section>
  );
}
