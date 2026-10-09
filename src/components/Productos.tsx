import ProductoPanel from "./ProductoPanel";
import { cupioLink } from "@/data/landings";

/** Los dos productos propios, cada uno con las partes que lo hacen útil. */
export default function Productos() {
  return (
    <div id="productos" style={{ paddingTop: 60 }}>
      <ProductoPanel
        id="cupio"
        eyebrow="PRODUCTO PROPIO · TURNOS ONLINE"
        titulo="Cupio"
        bajada="Nuestro sistema de turnos para quien da clases o atiende con turno: tus clientes reservan solos desde el celular y vos tenés la agenda al día. Suscripción mensual con 7 días de prueba gratis."
        cta={{ href: cupioLink("/", "home-producto"), label: "Probalo gratis", externo: true, umami: "home-cupio" }}
        acento="#f07a55"
        cards={[
          {
            titulo: "Reservan solos",
            texto: "Ven los horarios con lugares libres y reservan desde el celular, a cualquier hora, sin escribirte.",
            imagen: "/cupio/card-reservar.jpg",
            alt: "Pantalla de Cupio donde la alumna elige un horario con lugares libres y reserva",
          },
          {
            titulo: "Tu agenda, de un vistazo",
            texto: "El mes entero con la ocupación de cada clase: cuáles están llenas y dónde quedan lugares.",            imagen: "/cupio/card-agenda.jpg",
            alt: "Agenda mensual de Cupio con la ocupación de cada clase",
          },
          {
            titulo: "Lugar fijo y lista de espera",
            texto: "Quien viene siempre deja su lugar reservado todas las semanas. Si la clase está llena, se anota y le avisamos cuando se libera.",
            imagen: "/cupio/card-espera.jpg",
            alt: "Turnos de una alumna en Cupio con un lugar fijo semanal y una clase en lista de espera",
          },
          {
            titulo: "Tus alumnos en orden",
            texto: "Quién está al día y quién debe, cuántas clases le quedan del abono y su WhatsApp a un toque, sin planillas ni cuadernos.",
            imagen: "/cupio/card-alumnos.jpg",
            alt: "Pantalla del profesional en Cupio con su lista de alumnos",
          },
        ]}
      />
      <ProductoPanel
        id="crestech-house"
        eyebrow="PRODUCTO PROPIO · INMOBILIARIAS"
        titulo="Crestech House"
        bajada="El sistema para inmobiliarias: tu web con tu marca y un panel donde cargás cada propiedad una vez y sale en los portales. Planes mensuales desde $28.000."
        cta={{ href: "/inmobiliarias", label: "Ver Crestech House", umami: "home-crestech-house" }}
        acento="#4f9c82"
        cards={[
          {
            titulo: "Tu web, con tu marca",
            texto: "Tus colores, tu logo y tus secciones, con buscador por tipo y barrio y fichas con galería y mapa.",
            imagen: "/crestech-house/card-web.jpg",
            alt: "Home de la inmobiliaria demo de Crestech House con su buscador de propiedades",
          },
          {
            titulo: "Un panel, todos los portales",
            texto: "Cargás la propiedad una vez y la publicás en Zonaprop, Argenprop, MercadoLibre e Instagram desde el mismo lugar.",
            imagen: "/crestech-house/card-portales.jpg",
            alt: "Panel de Crestech House en el celular con los portales conectados",
          },
          {
            titulo: "Un asistente que hace los cambios",
            texto: "Le escribís como por WhatsApp, \"bajale 5% al PH\", y te muestra el cambio para que lo confirmes.",
            imagen: "/crestech-house/card-asistente.jpg",
            alt: "Asistente del panel proponiendo bajar un 5% el precio de una propiedad",
          },
          {
            titulo: "Todas las consultas juntas",
            texto: "Lo que entra por la web, por WhatsApp o por MercadoLibre, en un solo lugar y por etapa: nueva, contactada, visita, negociación.",
            imagen: "/crestech-house/card-consultas.jpg",
            alt: "Panel de consultas de Crestech House ordenadas por etapa",
          },
        ]}
      />
    </div>
  );
}
