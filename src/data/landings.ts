// Configuración por rubro de las landings. Para sumar un rubro nuevo, agregá una
// entrada a `landings` con su copy y su demo — el template LandingRubro la renderiza.
// Espejo de cómo el config.yaml del Prospector suma rubros.
//
// Todo lo que la sección de prueba afirma tiene que ser cierto HOY del sistema que
// se cita. Pilates vende Cupio (SaaS propio): Cupio no manda WhatsApp, los avisos
// van por notificación push. Cobrar al alumno y facturar existen en Cupio (niveles
// Cobro y Facturación) pero no están abiertos a todos (PLAN_COBRO_PUBLICO y
// PLAN_FACTURACION_PUBLICO en Cupio): cuando se abran, cambiar la FAQ y el precio de
// pilates. Cupio todavía no tiene clientes: no decir "en uso". El resto de los rubros
// venden desarrollo a medida y citan a Cupio como la base que ya está online.

export interface DemoSlot {
  time?: string;
  name: string;
  spots: string;
  variant?: "full";
}

export interface DemoStep {
  slot: number; // índice del slot que se resalta en este paso
  clock: string;
  toast: string;
  bookedLabel?: string; // si está, reemplaza el texto del slot al reservarse (sin tilde de check aparte)
}

export interface Pain {
  tag: string;
  title: string;
  body: string; // admite **negrita**
}

export interface Feature {
  strong: string;
  rest: string;
}

export interface ProofPhoto {
  src: string;
  alt: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface CtaLink {
  href: string;
  label: string;
}

// Identidad visual de la landing: paleta, tipografía y layout (ver landing.module.css).
export type LandingTheme = "calma" | "cancha" | "hotel" | "inmo";

export interface LandingConfig {
  slug: string;
  theme: LandingTheme;
  shortLabel: string; // etiqueta corta para los links entre rubros
  eyebrow: string; // es el <h1> de la página: la búsqueda que queremos rankear
  h1: string; // titular grande (visual); se renderiza como <p>
  h1em: string;
  heroSub: string; // admite **negrita**
  heroSecondary?: CtaLink; // reemplaza el botón "Ver qué incluye" del hero
  demo: {
    appTitle: string;
    day: string;
    clock: string;
    slots: DemoSlot[];
    steps: DemoStep[];
    caption: string;
    toastLabel?: string; // encabezado del aviso del teléfono; default "WHATSAPP · AUTOMÁTICO"
  };
  painsEyebrow: string;
  painsHeading: string;
  painsHeadingEm: string;
  painsLede: string;
  pains: Pain[];
  proofEyebrow: string;
  proofHeading: string;
  proofHeadingEm: string;
  proofLede: string;
  proofCta?: CtaLink; // botón debajo del texto de la prueba
  proofPhotos?: ProofPhoto[]; // fotos reales del caso (negocio, equipo, sistema)
  proofPhotosPhone?: boolean; // si true, las proofPhotos son capturas de celular (390x844) y se muestran en marco de teléfono, completas
  adminPhotos?: ProofPhoto[]; // capturas del panel de gestión (390x844, marco de teléfono); sin datos personales
  adminEyebrow?: string;
  adminHeading?: string;
  adminHeadingEm?: string;
  adminLede?: string;
  proofCardLabel: string;
  proofCardTitle: string;
  features: Feature[];
  pricing?: { heading: string; body: string[] }; // reemplaza el panel "Precio" genérico (a medida); admite **negrita**
  faq: Faq[];
  finalHeading: string;
  finalHeadingEm: string;
  finalLede: string;
  whatsappMessage: string; // hero + CTA final
  whatsappMessageNav: string; // CTA del header
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
}

export const WHATSAPP_NUMBER = "5491164578484";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CUPIO_URL = "https://cupio.com.ar";

// Links a Cupio con UTM, para distinguir lo que llega desde crestech.com.ar.
export function cupioLink(path: string, campaign: string): string {
  return `${CUPIO_URL}${path}?utm_source=crestech&utm_medium=web&utm_campaign=${encodeURIComponent(campaign)}`;
}

const PRECIO_A_MEDIDA =
  "Presupuesto cerrado según lo que necesites: el desarrollo se paga en dos partes, la mitad al arrancar y la mitad en la entrega, y después queda un servicio mensual que cubre el servidor, los ajustes chicos y que todo siga funcionando.";

const pilates: LandingConfig = {
  slug: "turnos-pilates",
  theme: "calma",
  shortLabel: "Turnos para estudios de pilates",
  eyebrow: "Sistema de turnos para estudios de pilates",
  h1: "Tus alumnas reservan solas.",
  h1em: "Vos solo das la clase.",
  heroSub:
    "Cupio, nuestro sistema de turnos online: tus alumnas ven los lugares libres, reservan desde el celular y reciben un recordatorio antes de la clase. Lo configuramos con vos y lo dejamos andando.",
  heroSecondary: { href: cupioLink("/registro", "turnos-pilates"), label: "Probar gratis 7 días" },
  demo: {
    appTitle: "TU ESTUDIO",
    day: "Mañana · Jueves",
    clock: "23:41",
    toastLabel: "CUPIO · NOTIFICACIÓN",
    slots: [
      { time: "08:00", name: "Reformer", spots: "2 lugares" },
      { time: "09:00", name: "Reformer", spots: "1 lugar" },
      { time: "10:00", name: "Mat · Intermedio", spots: "Completo", variant: "full" },
      { time: "18:00", name: "Reformer", spots: "3 lugares" },
    ],
    steps: [
      {
        slot: 1,
        clock: "23:41",
        toast: "Reserva confirmada: Reformer, mañana 09:00. Te esperamos, Sofi.",
      },
      {
        slot: 0,
        clock: "09:15",
        toast:
          "Recordatorio: mañana tenés Reformer 08:00. Si no podés venir, cancelá desde Cupio y liberás el lugar.",
      },
      {
        slot: 2,
        clock: "08:31",
        bookedLabel: "Lugar liberado",
        toast: "Se liberó un lugar en Mat 10:00 y estabas primera en la lista de espera. Reservalo.",
      },
    ],
    caption: "Son las 23:41. Una alumna acaba de reservar. Vos no contestaste nada.",
  },
  painsEyebrow: "Problemas de todos los días",
  painsHeading: "El cuaderno de turnos te está",
  painsHeadingEm: "robando horas",
  painsLede: "Dar clases es tu trabajo. Contestar mensajes a toda hora, no.",
  pains: [
    {
      tag: "Reservas",
      title: "Turnos por WhatsApp, uno por uno",
      body:
        'Anotás en un cuaderno o un Excel, los horarios se pisan, y contestás "¿hay lugar mañana?" veinte veces por día. Con Cupio, cada alumna ve los lugares libres y reserva sola, de día o a las 11 de la noche.',
    },
    {
      tag: "Ausentismo",
      title: "Camas vacías que nadie avisó",
      body:
        "La alumna se olvida, no avisa, y esa cama quedó vacía cuando otra la quería. Cupio le manda un recordatorio al celular antes de la clase. Si cancela a tiempo, el lugar se libera y le avisa a la primera de la lista de espera.",
    },
    {
      tag: "Fijas",
      title: "Las fijas y los abonos, anotados a mano",
      body:
        "La que viene siempre martes y jueves, el abono de 8 clases, quién ya usó las suyas. Con Cupio cada alumna deja su lugar fijo reservado todas las semanas, y cada reserva descuenta una clase de su abono: si cancela a tiempo, la clase vuelve.",
    },
  ],
  proofEyebrow: "Cupio ya está online",
  proofHeading: "Ya está online:",
  proofHeadingEm: "probalo hoy",
  proofLede:
    "Cupio es el sistema de turnos que desarrollamos y mantenemos nosotros. Está funcionando en cupio.com.ar: podés crear la agenda de tu estudio y probarlo gratis 7 días, o escribirnos y lo armamos juntos con tus horarios. (Las capturas son de una sala de ejemplo.)",
  proofCta: { href: cupioLink("/turnos/pilates", "turnos-pilates"), label: "Ver Cupio para estudios de pilates" },
  proofPhotos: [
    { src: "/cupio/app-sala.png", alt: "Vista de la alumna en Cupio: su próxima clase y su lugar fijo semanal" },
    { src: "/cupio/app-reservar.png", alt: "Clases del día en Cupio con los lugares libres, una clase completa y la lista de espera" },
  ],
  proofPhotosPhone: true,
  adminEyebrow: "Del lado del estudio",
  adminHeading: "Y vos ves",
  adminHeadingEm: "cómo viene cada clase",
  adminLede:
    "La agenda del mes con la ocupación de cada clase y, en cada día, quién viene. Desde la compu o el celular.",
  adminPhotos: [
    { src: "/cupio/admin-agenda.png", alt: "Agenda del mes en Cupio con la ocupación de cada clase por color" },
    { src: "/cupio/admin-dia.png", alt: "Clases de un día en Cupio con las alumnas anotadas en cada una" },
  ],
  proofCardLabel: "Cupio · sistema de turnos",
  proofCardTitle: "Lo que incluye",
  features: [
    { strong: "Clases con cupo", rest: "definís cuántas camas o reformers tiene cada clase." },
    { strong: "Lugar fijo semanal", rest: "la alumna que viene todos los martes deja su lugar reservado para todas las semanas, sin tener que reservarlo cada vez." },
    { strong: "Lista de espera", rest: "si la clase está llena, se anota. Cuando alguien cancela, la primera de la lista recibe un aviso." },
    { strong: "Recordatorios en el celular", rest: "automáticos, antes de cada clase, para bajar las ausencias." },
    { strong: "Abonos por alumna", rest: "cargás su abono (por ejemplo, 8 clases en 30 días), cada reserva descuenta una y ella ve cuántas le quedan." },
    { strong: "Varios profes", rest: "cada clase con el nombre de quien la da, y cada profe puede entrar a ver sus clases del día." },
    { strong: "Agenda y lista de asistencia", rest: "ves quién viene a cada clase y marcás quién faltó." },
  ],
  pricing: {
    heading: "Una suscripción, sin desarrollo",
    body: [
      "Cupio se paga por mes según cuántas alumnas tengas, con débito automático de Mercado Pago. Los primeros 7 días son gratis.",
      "Cobrar los abonos por Mercado Pago y facturar desde Cupio todavía no está abierto a todos los estudios: si lo necesitás, escribinos.",
    ],
  },
  faq: [
    {
      q: "¿Qué es Cupio?",
      a: "Es el sistema de turnos online que desarrollamos y mantenemos en Crestech. Tu estudio tiene su propia agenda y tus alumnas reservan desde el celular, sin descargar nada.",
    },
    {
      q: "¿Sirve para pilates reformer, con pocos lugares por clase?",
      a: "Sí. Cada clase tiene su cupo (por ejemplo, 4 reformers) y cuando se llena, las demás se anotan en la lista de espera. Si se libera un lugar, la primera de la lista recibe un aviso.",
    },
    {
      q: "¿Puedo cobrar las clases por el sistema?",
      a: "Todavía no para todos los estudios: cobrar los abonos por Mercado Pago y facturar desde Cupio está armado, pero no abierto a todos. Mientras tanto, lo que les cobrás a tus alumnas lo seguís manejando como hoy. Si lo necesitás, escribinos.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Una suscripción mensual según cuántas alumnas tengas, con débito automático de Mercado Pago, y los primeros 7 días son gratis. Si querés, te ayudamos a configurarlo.",
    },
  ],
  finalHeading: "Conocé Cupio",
  finalHeadingEm: "en 15 minutos",
  finalLede:
    "Te mostramos Cupio funcionando y lo configuramos con los horarios de tu estudio. Si te sirve, arrancás con 7 días gratis. Si no, te llevás ideas gratis.",
  whatsappMessage:
    "Hola, tengo un estudio de pilates y quiero ver Cupio, el sistema de turnos, funcionando.",
  whatsappMessageNav:
    "Hola, tengo un estudio de pilates y quiero saber más de Cupio, el sistema de turnos.",
  metaTitle: "Sistema de turnos para estudios de pilates | Crestech",
  metaDescription:
    "Tus alumnas reservan solas desde el celular, con cupo por clase, lugar fijo y recordatorios. Cupio, el sistema de turnos para pilates: 7 días gratis.",
  ogTitle: "Tus alumnas reservan solas. Vos das la clase.",
  ogDescription:
    "Cupio: turnos online con cupo por clase, lugar fijo semanal y recordatorios para tu estudio de pilates.",
};

const canchas: LandingConfig = {
  slug: "reservas-canchas",
  theme: "cancha",
  shortLabel: "Reservas para canchas",
  eyebrow: "Sistema de reservas para canchas de pádel y fútbol 5",
  h1: "Tu cancha se reserva sola.",
  h1em: "Hasta a la medianoche.",
  heroSub:
    "Sistema de reservas a medida para tu complejo: los jugadores ven los horarios libres, reservan online y dejan la seña por Mercado Pago. Vos dejás de atender el teléfono.",
  demo: {
    appTitle: "TU COMPLEJO",
    day: "Viernes",
    clock: "23:55",
    slots: [
      { time: "19:00", name: "Cancha 1 · Pádel", spots: "Libre" },
      { time: "20:00", name: "Cancha 1 · Pádel", spots: "Libre" },
      { time: "21:00", name: "Cancha 2 · F5", spots: "Reservada", variant: "full" },
      { time: "22:00", name: "Cancha 1 · Pádel", spots: "Libre" },
    ],
    steps: [
      {
        slot: 3,
        clock: "23:55",
        toast:
          "Hola Nico. Reserva confirmada: Cancha 1 · Pádel, viernes 22:00. Seña recibida por Mercado Pago.",
      },
    ],
    caption:
      "Son las 23:55 de un martes. Alguien acaba de reservar el viernes a la noche. Vos no atendiste ningún llamado.",
  },
  painsEyebrow: "Reservas que se complican",
  painsHeading: "Atender la cancha te come",
  painsHeadingEm: "el día entero",
  painsLede: "Tu laburo es que la cancha esté impecable. Contestar el teléfono a toda hora, no.",
  pains: [
    {
      tag: "Reservas",
      title: "El teléfono no para de sonar",
      body:
        "Anotás reservas por WhatsApp y teléfono, se pisan los horarios, y el que llama cuando estás ocupado se va a otra cancha. Con el sistema, ven los horarios libres y reservan solos.",
    },
    {
      tag: "Señas",
      title: "Reservan y no aparecen",
      body:
        "Sin seña, el que falta no pierde nada y vos perdés el turno entero. Con la seña por Mercado Pago integrada al reservar, el que reserva viene o por lo menos paga.",
    },
    {
      tag: "Gestión",
      title: "La planilla del mostrador",
      body:
        "Desde el celular ves qué cancha está libre el sábado a las 20 y quién dejó la seña, sin papeles ni Excel.",
    },
  ],
  proofEyebrow: "Una base que ya funciona",
  proofHeading: "La base ya está",
  proofHeadingEm: "funcionando",
  proofLede:
    "Cupio, el sistema de turnos que desarrollamos, ya está online: grilla de horarios, reservas las 24 horas, cupos, recordatorios y avisos de cancelación. Para tu complejo lo adaptamos a canchas, franjas horarias y señas con Mercado Pago.",
  proofCta: { href: cupioLink("/", "reservas-canchas"), label: "Ver Cupio funcionando" },
  proofCardLabel: "A medida para tu complejo",
  proofCardTitle: "Lo que incluye tu sistema",
  features: [
    { strong: "Reservas online", rest: "grilla por cancha y horario, los jugadores reservan solos." },
    { strong: "Señas y pagos con Mercado Pago", rest: "integrados al momento de reservar." },
    { strong: "Recordatorios y confirmaciones", rest: "automáticos." },
    { strong: "Panel de ocupación", rest: "ves todas tus canchas desde el celular." },
    { strong: "Facturación ARCA", rest: "opcional." },
  ],
  faq: [
    {
      q: "¿Los jugadores tienen que descargar una app?",
      a: "No. Reservan desde el navegador, con el link de tu complejo que compartís por WhatsApp o Instagram.",
    },
    {
      q: "¿Se puede cobrar distinto según el horario?",
      a: "Sí. Como lo armamos a medida, los precios por franja (mañana, noche, fin de semana) y el monto de la seña se configuran como trabaja tu complejo.",
    },
    { q: "¿Cuánto cuesta?", a: PRECIO_A_MEDIDA },
  ],
  finalHeading: "Sistema de reservas",
  finalHeadingEm: "para tu complejo",
  finalLede:
    "Te mostramos el sistema funcionando y nos contás cómo trabaja tu complejo. Si te sirve, avanzamos. Si no, te llevás ideas gratis.",
  whatsappMessage:
    "Hola, tengo un complejo de canchas y quiero ver el sistema de reservas funcionando.",
  whatsappMessageNav:
    "Hola, tengo un complejo de canchas y quiero saber más del sistema de reservas.",
  metaTitle: "Reservas online para canchas de pádel y fútbol 5 | Crestech",
  metaDescription:
    "Los jugadores reservan online, dejan la seña por Mercado Pago y reciben la confirmación. Sistema de reservas a medida para canchas de pádel y fútbol 5.",
  ogTitle: "Tu cancha se reserva sola. Hasta a la medianoche.",
  ogDescription:
    "Reservas online, señas por Mercado Pago y confirmaciones automáticas para tu complejo de canchas.",
};

const hoteles: LandingConfig = {
  slug: "hoteles",
  theme: "hotel",
  shortLabel: "Motor de reservas para hoteles",
  eyebrow: "Motor de reservas directas para hoteles y alojamientos",
  h1: "Reservas directas",
  h1em: "en tu propia web.",
  heroSub:
    "Una web propia con motor de reservas directas: el huésped consulta disponibilidad, reserva y paga sin intermediarios. Cada reserva directa es una comisión que no se va afuera.",
  demo: {
    appTitle: "TU HOTEL",
    day: "Disponibilidad · Marzo",
    clock: "22:18",
    slots: [
      { time: "Vie 13 – Dom 15", name: "Habitación doble", spots: "Disponible" },
      { time: "Vie 13 – Dom 15", name: "Suite", spots: "Disponible" },
      { time: "Sáb 14 – Dom 15", name: "Triple", spots: "Ocupada", variant: "full" },
      { time: "Vie 20 – Dom 22", name: "Doble", spots: "Disponible" },
    ],
    steps: [
      {
        slot: 0,
        clock: "22:18",
        toast:
          "Hola Marta. Reserva confirmada: habitación doble, vie 13 al dom 15. Te esperamos. Cualquier consulta, respondé este mensaje.",
      },
    ],
    caption:
      "Una reserva directa, de noche, sin comisión de por medio y sin que nadie atienda el teléfono.",
  },
  painsEyebrow: "Reservas y cobros",
  painsHeading: "Las comisiones y el teléfono",
  painsHeadingEm: "te comen el margen",
  painsLede:
    "Cada reserva que entra por un portal deja plata afuera. Cada llamado de noche sin contestar es una reserva perdida.",
  pains: [
    {
      tag: "Comisiones",
      title: "Cada reserva deja plata afuera",
      body:
        "Los portales te traen huéspedes, pero se quedan con una comisión de cada reserva. Con motor propio, el huésped que ya te conoce o te encontró en Google reserva directo con vos.",
    },
    {
      tag: "Consultas",
      title: "Consultas de disponibilidad",
      body:
        "Responder disponibilidad por WhatsApp y teléfono todo el día, y de noche perder reservas por no contestar. El calendario online responde solo, a cualquier hora.",
    },
    {
      tag: "Cobros",
      title: "Señas por transferencia y a mano",
      body:
        "Señas que hay que perseguir, comprobantes sueltos. El pago online se integra al reservar y queda registrado.",
    },
  ],
  proofEyebrow: "Sistemas que ya funcionan",
  proofHeading: "Sistemas de reservas",
  proofHeadingEm: "que ya funcionan",
  proofLede:
    "Desarrollamos y mantenemos Cupio, un sistema de reservas online que ya está funcionando: disponibilidad en tiempo real, reservas las 24 horas y avisos automáticos. Para tu alojamiento lo llevamos a habitaciones, tarifas y temporadas, dentro de tu propia web.",
  proofCta: { href: cupioLink("/", "hoteles"), label: "Ver Cupio funcionando" },
  proofCardLabel: "A medida para tu alojamiento",
  proofCardTitle: "Lo que incluye tu motor de reservas",
  features: [
    { strong: "Motor de reservas en tu propia web", rest: "disponibilidad en tiempo real, sin intermediarios." },
    { strong: "Pagos y señas online", rest: "integrados al reservar." },
    { strong: "Confirmaciones y recordatorios", rest: "automáticos." },
    { strong: "Panel de ocupación y tarifas", rest: "gestionás habitaciones y temporadas desde el celular." },
    { strong: "Web institucional incluida", rest: "fotos, habitaciones y cómo llegar." },
  ],
  faq: [
    {
      q: "¿Tengo que dejar de publicar en Booking?",
      a: "No. El motor suma tu canal directo: los huéspedes que te encuentran en Google o ya te conocen reservan con vos, sin comisión.",
    },
    {
      q: "¿Necesito tener una web?",
      a: "No, la hacemos nosotros: la web institucional con fotos, habitaciones y cómo llegar viene incluida.",
    },
    { q: "¿Cuánto cuesta?", a: PRECIO_A_MEDIDA },
  ],
  finalHeading: "La próxima reserva,",
  finalHeadingEm: "que sea directa.",
  finalLede:
    "Te mostramos el motor de reservas funcionando y nos contás cómo trabaja tu alojamiento. Si te sirve, avanzamos. Si no, te llevás ideas gratis.",
  whatsappMessage:
    "Hola, tengo un hotel/alojamiento y quiero saber más del motor de reservas directas.",
  whatsappMessageNav:
    "Hola, tengo un hotel/alojamiento y quiero saber más del motor de reservas directas.",
  metaTitle: "Motor de reservas directas para hoteles | Crestech",
  metaDescription:
    "Web propia con motor de reservas directas: disponibilidad online, pagos integrados y confirmaciones automáticas. Menos comisiones, más reservas tuyas.",
  ogTitle: "Reservas directas en tu propia web.",
  ogDescription:
    "Web propia con motor de reservas directas: disponibilidad online, pagos integrados y confirmaciones automáticas.",
};

const inmobiliarias: LandingConfig = {
  slug: "inmobiliarias",
  theme: "inmo",
  shortLabel: "Web para inmobiliarias",
  eyebrow: "Crestech House · Sistema para inmobiliarias",
  h1: "Cargás cada propiedad una vez,",
  h1em: "sale en todos lados.",
  heroSub:
    "Tu web con tu marca y un panel desde el que publicás en Zonaprop, Argenprop, MercadoLibre e Instagram. Las consultas te llegan por WhatsApp con la propiedad ya identificada.",
  demo: {
    appTitle: "TU INMOBILIARIA",
    day: "Venta · Zona Oeste",
    clock: "21:37",
    slots: [
      { name: "PH 3 amb · Ramos Mejía", spots: "USD 95.000" },
      { name: "Depto 2 amb · Haedo", spots: "USD 68.000" },
      { name: "Casa 4 amb · Castelar", spots: "Reservada", variant: "full" },
      { name: "Lote 300 m² · Ituzaingó", spots: "USD 45.000" },
    ],
    steps: [
      {
        slot: 0,
        clock: "21:37",
        bookedLabel: "Consulta recibida",
        toast:
          "Hola. Te llegó una consulta por el PH de Ramos Mejía: 'Quisiera coordinar una visita el sábado'. Respondé desde acá.",
      },
    ],
    caption:
      "Una consulta por una ficha tuya, con la propiedad ya identificada.",
  },
  painsEyebrow: "Problemas de gestión",
  painsHeading: "Cargar propiedades",
  painsHeadingEm: "te come el día",
  painsLede:
    "Mandás fotos por WhatsApp todo el día y cargás la misma propiedad en cada portal. Hay una forma más prolija.",
  pains: [
    {
      tag: "Fichas",
      title: "Fotos sueltas por WhatsApp",
      body:
        "Mandás 14 fotos y un audio por cada consulta. Con fichas web, compartís un link con fotos, precio, mapa y características.",
    },
    {
      tag: "Portales",
      title: "La misma propiedad, cargada cinco veces",
      body:
        "Tu web, Zonaprop, Argenprop, MercadoLibre e Instagram: cada uno con su formulario. Y cuando se vende o cambia el precio, hay que tocar los cinco. Con el panel la cargás una vez y se actualiza en todos.",
    },
    {
      tag: "Consultas",
      title: "Interesados que se enfrían",
      body:
        "Consultas que llegan tarde o se pierden entre mensajes. Cada ficha tiene un botón de consulta que te llega directo, con la propiedad ya identificada.",
    },
  ],
  proofEyebrow: "Un caso real",
  proofHeading: "Ya la hicimos",
  proofHeadingEm: "para una inmobiliaria real",
  proofLede:
    "Crestodina Propiedades, una inmobiliaria familiar de Caballito con más de 40 años, trabaja con Crestech House: carga sus propiedades desde el panel, publica en los portales y recibe las consultas por WhatsApp. Tu inmobiliaria puede tener lo mismo, con tu marca y tu diseño. Mirá la demo en crestech-house-production.up.railway.app.",
  proofPhotos: [
    { src: "/crestodina/home.jpg", alt: "Home de Crestodina Propiedades con buscador de propiedades" },
    { src: "/crestodina/detalle.jpg", alt: "Ficha de una propiedad en Crestodina Propiedades" },
  ],
  adminEyebrow: "Del lado de la gestión",
  adminHeading: "Cargás tu cartera",
  adminHeadingEm: "vos mismo",
  adminLede:
    "Subís, editás y publicás propiedades desde un panel con fotos, precio, descripción y estado. Y si preferís, le escribís al asistente como por WhatsApp: \"bajale 5% al PH de Gorriti\" y lo hace, con historial para deshacer.",
  adminPhotos: [
    { src: "/crestodina/admin-cartera.png", alt: "Listado de propiedades en el panel de Crestodina" },
    { src: "/crestodina/admin-carga.png", alt: "Carga y edición de una propiedad con fotos y datos" },
  ],
  proofCardLabel: "Caso real · Crestodina Propiedades",
  proofCardTitle: "Lo que incluye Crestech House",
  features: [
    { strong: "Publicación en portales", rest: "Zonaprop, Argenprop, MercadoLibre e Instagram desde el mismo panel." },
    { strong: "Fichas de propiedades", rest: "galería, mapa y características, listas para compartir por link." },
    { strong: "Botón de consulta por propiedad", rest: "las consultas te llegan al WhatsApp con la propiedad identificada." },
    { strong: "Asistente en el panel", rest: "le pedís los cambios en palabras comunes y los hace." },
    { strong: "Diseño propio", rest: "colores, tipografías y secciones elegidas para tu marca." },
  ],
  faq: [
    {
      q: "¿Puedo cargar las propiedades yo mismo?",
      a: "Sí. Tenés un panel para subir, editar y publicar propiedades con fotos, precio, descripción y estado.",
    },
    {
      q: "¿Tengo que dejar de publicar en los portales?",
      a: "No. Conectás tus cuentas una vez y publicás en Zonaprop, Argenprop, MercadoLibre e Instagram desde el panel. Los avisos pagos de cada portal se contratan con el portal, como siempre.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Hay tres planes mensuales en pesos: Inicial $28.000 (hasta 25 propiedades y un portal), Profesional $52.000 (hasta 80 propiedades, todos los portales y el asistente) y Premium $88.000 (hasta 250 propiedades, diseño propio de cada sección y dominio incluido). La instalación es sin cargo para las primeras 5 inmobiliarias.",
    },
  ],
  finalHeading: "Toda tu cartera",
  finalHeadingEm: "en un solo panel",
  finalLede:
    "Te mostramos cómo se vería tu web con tu cartera y nos contás cómo trabajás hoy. Si te sirve, avanzamos. Si no, te llevás ideas gratis.",
  whatsappMessage:
    "Hola, tengo una inmobiliaria y quiero ver Crestech House funcionando.",
  whatsappMessageNav:
    "Hola, tengo una inmobiliaria y quiero ver Crestech House funcionando.",
  metaTitle: "Sistema para inmobiliarias: web propia y publicación en portales | Crestech House",
  metaDescription:
    "Web con tu marca y un panel para cargar cada propiedad una vez y publicarla en Zonaprop, Argenprop, MercadoLibre e Instagram. Planes desde $28.000 por mes.",
  ogTitle: "Cargás cada propiedad una vez, sale en todos lados.",
  ogDescription:
    "Web con tu marca, publicación en Zonaprop, Argenprop, MercadoLibre e Instagram, y consultas por WhatsApp.",
};

export const landings: LandingConfig[] = [pilates, canchas, hoteles, inmobiliarias];

export const landingSlugs = landings.map((l) => l.slug);

export function getLanding(slug: string): LandingConfig | undefined {
  return landings.find((l) => l.slug === slug);
}
