// Configuración por rubro de las landings. Para sumar un rubro nuevo, agregá una
// entrada a `landings` con su copy y su demo — el template LandingRubro la renderiza.
// Espejo de cómo el config.yaml del Prospector suma rubros.

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

export interface LandingConfig {
  slug: string;
  eyebrow: string;
  h1: string;
  h1em: string;
  heroSub: string; // admite **negrita**
  demo: {
    appTitle: string;
    day: string;
    clock: string;
    slots: DemoSlot[];
    steps: DemoStep[];
    caption: string;
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
  proofPhotos?: ProofPhoto[]; // fotos reales del caso (negocio, equipo, sistema)
  proofCardLabel: string;
  proofCardTitle: string;
  features: Feature[];
  finalHeading: string;
  finalHeadingEm: string;
  finalLede: string;
  whatsappMessage: string; // hero + CTA final
  whatsappMessageNav: string; // CTA del header
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  homeCard: { label: string; pain: string };
}

export const WHATSAPP_NUMBER = "5491164578484";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const pilates: LandingConfig = {
  slug: "turnos-pilates",
  eyebrow: "Para estudios de pilates · AMBA",
  h1: "Tus alumnas reservan solas.",
  h1em: "Vos solo das la clase.",
  heroSub:
    "Un sistema de turnos hecho a medida para tu estudio: **reservas online, pagos y recordatorios automáticos por WhatsApp**. Sin agencia en el medio — hablás directo con quien lo programa.",
  demo: {
    appTitle: "TU ESTUDIO",
    day: "Mañana · Jueves",
    clock: "23:41",
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
        toast: "Hola Sofi 👋 Quedó confirmado tu lugar en Reformer mañana 09:00. ¡Te esperamos!",
      },
      {
        slot: 0,
        clock: "07:12",
        toast:
          "Recordatorio: tenés clase hoy 08:00. Si no llegás, cancelá desde la app y liberás el lugar 🙌",
      },
      {
        slot: 3,
        clock: "21:05",
        toast: "Hola Caro 👋 Reservaste Reformer 18:00. ¡Nos vemos!",
      },
    ],
    caption: "Son las 23:41. Una alumna acaba de reservar. Vos no contestaste nada.",
  },
  painsEyebrow: "¿Te suena?",
  painsHeading: "El cuaderno de turnos te está",
  painsHeadingEm: "robando horas",
  painsLede: "Dar clases es tu trabajo. Contestar mensajes a toda hora, no.",
  pains: [
    {
      tag: "Reservas",
      title: "Turnos por WhatsApp, uno por uno",
      body:
        'Anotás en un cuaderno o un Excel, los horarios se pisan, y contestás "¿hay lugar mañana?" veinte veces por día. **Con el sistema, cada alumna ve los lugares libres y reserva sola** — de día o a las 11 de la noche.',
    },
    {
      tag: "Ausentismo",
      title: "Camas vacías que nadie avisó",
      body:
        "La alumna se olvida, no avisa, y esa cama quedó vacía cuando otra la quería. **El recordatorio automático por WhatsApp** le avisa antes de la clase, y si cancela a tiempo, el lugar se libera para otra.",
    },
    {
      tag: "Cobros",
      title: "Transferencias sueltas, cuentas a mano",
      body:
        "¿Quién pagó el mes? ¿Quién debe dos clases? **Con Mercado Pago integrado**, los pagos quedan registrados solos y vos ves todo en un panel: quién está al día y quién no.",
    },
  ],
  proofEyebrow: "No es una promesa",
  proofHeading: "Ya está funcionando",
  proofHeadingEm: "en un negocio real",
  proofLede:
    "Mixtura es un sistema que desarrollamos para una academia deportiva: maneja sus turnos, sus pagos y sus recordatorios todos los días. Tu estudio puede tener el suyo, adaptado a cómo trabajás vos — tus horarios, tus camas, tus planes de clases.",
  proofPhotos: [
    { src: "/mixtura/sala-reformers.jpg", alt: "Sala de camas reformer en el estudio Mixtura" },
    { src: "/mixtura/clase-torre.jpg", alt: "Alumna entrenando en una clase de Mixtura" },
    { src: "/equipo/equipo-mixtura.jpg", alt: "El equipo de instructores de Mixtura en su estudio" },
  ],
  proofCardLabel: "Caso real · Mixtura",
  proofCardTitle: "Lo que incluye tu sistema",
  features: [
    { strong: "Turnos online", rest: "— tus alumnas reservan y cancelan solas, con cupos por clase." },
    { strong: "Pagos con Mercado Pago", rest: "— packs de clases o mensualidad, registrados automáticamente." },
    { strong: "Recordatorios por WhatsApp", rest: "— automáticos, para bajar las ausencias sin que persigas a nadie." },
    { strong: "Panel de gestión", rest: "— ves ocupación, pagos y alumnas desde el celular." },
    { strong: "Facturación ARCA", rest: "— opcional, si facturás electrónicamente." },
  ],
  finalHeading: "¿Lo vemos juntos en",
  finalHeadingEm: "15 minutos?",
  finalLede:
    "Te mostramos el sistema funcionando y nos contás cómo trabaja tu estudio. Si te sirve, avanzamos. Si no, te llevás ideas gratis.",
  whatsappMessage:
    "Hola Franco, tengo un estudio de pilates y quiero ver el sistema de turnos funcionando.",
  whatsappMessageNav:
    "Hola Franco, tengo un estudio de pilates y quiero saber más del sistema de turnos.",
  metaTitle: "Sistema de turnos para estudios de pilates — Crestech Studio",
  metaDescription:
    "Tus alumnas reservan solas, pagan online y reciben recordatorios por WhatsApp. Sistema de turnos a medida para estudios de pilates en AMBA. Hablás directo con quien lo programa.",
  ogTitle: "Tus alumnas reservan solas. Vos das la clase.",
  ogDescription:
    "Sistema de turnos a medida para estudios de pilates: reservas online, pagos y recordatorios automáticos por WhatsApp.",
  homeCard: {
    label: "Estudios de pilates",
    pain: "Tus alumnas reservan solas y pagan online, sin que contestes mensajes a toda hora.",
  },
};

const canchas: LandingConfig = {
  slug: "reservas-canchas",
  eyebrow: "Para canchas de pádel y fútbol · AMBA",
  h1: "Tu cancha se reserva sola.",
  h1em: "Hasta a la medianoche.",
  heroSub:
    "Sistema de reservas a medida para tu complejo: **los jugadores ven los horarios libres, reservan online y dejan la seña por Mercado Pago**. Vos dejás de atender el teléfono.",
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
          "Hola Nico 👋 Reserva confirmada: Cancha 1 · Pádel, viernes 22:00. Seña recibida por Mercado Pago ✓",
      },
    ],
    caption:
      "Son las 23:55 de un martes. Alguien acaba de reservar el viernes a la noche. Vos no atendiste ningún llamado.",
  },
  painsEyebrow: "¿Te suena?",
  painsHeading: "Atender la cancha te come",
  painsHeadingEm: "el día entero",
  painsLede: "Tu laburo es que la cancha esté impecable. Contestar el teléfono a toda hora, no.",
  pains: [
    {
      tag: "Reservas",
      title: "El teléfono no para de sonar",
      body:
        "Anotás reservas por WhatsApp y teléfono, se pisan los horarios, y el que llama cuando estás ocupado se va a otra cancha. **Con el sistema, ven los horarios libres y reservan solos.**",
    },
    {
      tag: "Señas",
      title: "Reservan y no aparecen",
      body:
        "Sin seña, el que falta no pierde nada — y vos perdés el turno entero. **Con la seña por Mercado Pago integrada al reservar**, el que reserva, viene (o por lo menos paga).",
    },
    {
      tag: "Gestión",
      title: "La planilla del mostrador",
      body:
        "¿Qué cancha está libre el sábado a las 20? ¿Quién señó y quién no? **Todo en un panel que ves desde el celular**, sin papeles ni Excel.",
    },
  ],
  proofEyebrow: "No es una promesa",
  proofHeading: "Ya está funcionando",
  proofHeadingEm: "en un negocio real",
  proofLede:
    "Mixtura es un sistema que desarrollamos para una academia deportiva: maneja sus turnos, sus pagos y sus recordatorios todos los días. Tu complejo puede tener el suyo, adaptado a tus canchas, tus horarios y tus precios por franja.",
  proofPhotos: [
    { src: "/mixtura/estudio-amplio.jpg", alt: "El estudio de Mixtura, donde el sistema funciona todos los días" },
    { src: "/equipo/equipo-mixtura.jpg", alt: "El equipo de Mixtura en su estudio" },
  ],
  proofCardLabel: "Caso real · Mixtura",
  proofCardTitle: "Lo que incluye tu sistema",
  features: [
    { strong: "Reservas online", rest: "— grilla por cancha y horario, los jugadores reservan solos." },
    { strong: "Señas y pagos con Mercado Pago", rest: "— integrados al momento de reservar." },
    { strong: "Recordatorios y confirmaciones por WhatsApp", rest: "— automáticos." },
    { strong: "Panel de ocupación", rest: "— ves todas tus canchas desde el celular." },
    { strong: "Facturación ARCA", rest: "— opcional." },
  ],
  finalHeading: "¿Lo vemos juntos en",
  finalHeadingEm: "15 minutos?",
  finalLede:
    "Te mostramos el sistema funcionando y nos contás cómo trabaja tu complejo. Si te sirve, avanzamos. Si no, te llevás ideas gratis.",
  whatsappMessage:
    "Hola Franco, tengo un complejo de canchas y quiero ver el sistema de reservas funcionando.",
  whatsappMessageNav:
    "Hola Franco, tengo un complejo de canchas y quiero saber más del sistema de reservas.",
  metaTitle: "Sistema de reservas para canchas de pádel y fútbol — Crestech Studio",
  metaDescription:
    "Los jugadores reservan online, dejan la seña por Mercado Pago y reciben confirmación por WhatsApp. Sistema de reservas a medida para canchas de pádel y fútbol en AMBA.",
  ogTitle: "Tu cancha se reserva sola. Hasta a la medianoche.",
  ogDescription:
    "Reservas online, señas por Mercado Pago y confirmaciones por WhatsApp para tu complejo de canchas.",
  homeCard: {
    label: "Canchas de pádel y fútbol",
    pain: "Los jugadores reservan online y dejan la seña, hasta a la medianoche.",
  },
};

const hoteles: LandingConfig = {
  slug: "hoteles",
  eyebrow: "Para hoteles y alojamientos",
  h1: "Que te reserven a vos,",
  h1em: "no a Booking.",
  heroSub:
    "Una web propia con motor de reservas directas: **el huésped consulta disponibilidad, reserva y paga sin intermediarios**. Cada reserva directa es una comisión que no se va afuera.",
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
          "Hola Marta 👋 Reserva confirmada: habitación doble, vie 13 al dom 15. Te esperamos — cualquier consulta respondé este mensaje.",
      },
    ],
    caption:
      "Una reserva directa, de noche, sin comisión de por medio y sin que nadie atienda el teléfono.",
  },
  painsEyebrow: "¿Te suena?",
  painsHeading: "Las comisiones y el teléfono",
  painsHeadingEm: "te comen el margen",
  painsLede:
    "Cada reserva que entra por un portal deja plata afuera. Cada llamado de noche sin contestar es una reserva perdida.",
  pains: [
    {
      tag: "Comisiones",
      title: "Cada reserva deja plata afuera",
      body:
        "Los portales te traen huéspedes, pero se quedan con una comisión de cada reserva. **Con motor propio, el huésped que ya te conoce (o te encontró en Google) reserva directo con vos.**",
    },
    {
      tag: "Consultas",
      title: "¿Tenés lugar para el finde?",
      body:
        "Responder disponibilidad por WhatsApp y teléfono todo el día, y de noche perder reservas por no contestar. **El calendario online responde solo, a cualquier hora.**",
    },
    {
      tag: "Cobros",
      title: "Señas por transferencia y a mano",
      body:
        "Señas que hay que perseguir, comprobantes sueltos. **Pago online integrado al reservar, todo registrado.**",
    },
  ],
  proofEyebrow: "No es una promesa",
  proofHeading: "Sistemas que ya funcionan",
  proofHeadingEm: "todos los días",
  proofLede:
    "Sistemas de reservas y pagos que ya funcionan todos los días en negocios reales. Mixtura — reservas, pagos con Mercado Pago y confirmaciones por WhatsApp — es la prueba de que la base ya está hecha y probada. La misma base, adaptada a habitaciones, tarifas y temporadas.",
  proofPhotos: [
    { src: "/mixtura/estudio-amplio.jpg", alt: "El estudio de Mixtura, donde el sistema funciona todos los días" },
    { src: "/equipo/equipo-mixtura.jpg", alt: "El equipo de Mixtura en su estudio" },
  ],
  proofCardLabel: "Caso real · Mixtura",
  proofCardTitle: "La misma base, adaptada a tu hotel",
  features: [
    { strong: "Motor de reservas en tu propia web", rest: "— disponibilidad en tiempo real, sin intermediarios." },
    { strong: "Pagos y señas online", rest: "— integrados al reservar." },
    { strong: "Confirmaciones y recordatorios por WhatsApp", rest: "— automáticos." },
    { strong: "Panel de ocupación y tarifas", rest: "— gestionás habitaciones y temporadas desde el celular." },
    { strong: "Web institucional incluida", rest: "— fotos, habitaciones y cómo llegar." },
  ],
  finalHeading: "¿Lo vemos juntos en",
  finalHeadingEm: "15 minutos?",
  finalLede:
    "Te mostramos el motor de reservas funcionando y nos contás cómo trabaja tu alojamiento. Si te sirve, avanzamos. Si no, te llevás ideas gratis.",
  whatsappMessage:
    "Hola Franco, tengo un hotel/alojamiento y quiero saber más del motor de reservas directas.",
  whatsappMessageNav:
    "Hola Franco, tengo un hotel/alojamiento y quiero saber más del motor de reservas directas.",
  metaTitle: "Motor de reservas directas para hoteles y alojamientos — Crestech Studio",
  metaDescription:
    "Web propia con motor de reservas directas para hoteles y alojamientos: disponibilidad online, pagos integrados y confirmaciones por WhatsApp. Menos comisiones, más reservas tuyas.",
  ogTitle: "Que te reserven a vos, no a Booking.",
  ogDescription:
    "Web propia con motor de reservas directas: disponibilidad online, pagos integrados y confirmaciones por WhatsApp.",
  homeCard: {
    label: "Hoteles y alojamientos",
    pain: "Reservas directas sin comisión de Booking, con pago online integrado.",
  },
};

const inmobiliarias: LandingConfig = {
  slug: "inmobiliarias",
  eyebrow: "Para inmobiliarias · AMBA",
  h1: "Tu cartera de propiedades,",
  h1em: "en tu propia web.",
  heroSub:
    "Un sitio propio con todas tus propiedades: **fichas completas para compartir por WhatsApp con un link, búsqueda por zona y precio, y consultas que llegan directo a vos** — no a un portal.",
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
        bookedLabel: "Consulta recibida ✓",
        toast:
          "Hola 👋 Te llegó una consulta por el PH de Ramos Mejía: 'Quisiera coordinar una visita el sábado'. Respondé desde acá.",
      },
    ],
    caption:
      "Una consulta directa por una ficha tuya, compartida con un link. Sin portal en el medio.",
  },
  painsEyebrow: "¿Te suena?",
  painsHeading: "Tu cartera trabaja para",
  painsHeadingEm: "los portales, no para vos",
  painsLede:
    "Mandás fotos por WhatsApp todo el día y tus propiedades viven en sitios ajenos. Hay una forma más prolija.",
  pains: [
    {
      tag: "Fichas",
      title: "Fotos sueltas por WhatsApp",
      body:
        "Mandás 14 fotos y un audio por cada consulta. **Con fichas web, compartís UN link con fotos, precio, mapa y características** — prolijo y profesional.",
    },
    {
      tag: "Portales",
      title: "Tu cartera vive en sitios ajenos",
      body:
        "Dependés de portales que cobran por publicar y muestran tu propiedad al lado de la competencia. **Tu web propia es tuya, con tu marca, y posiciona en Google con tu nombre.**",
    },
    {
      tag: "Consultas",
      title: "Interesados que se enfrían",
      body:
        "Consultas que llegan tarde o se pierden entre mensajes. **Cada ficha tiene su botón de consulta que te llega directo**, con la propiedad ya identificada.",
    },
  ],
  proofEyebrow: "No es una promesa",
  proofHeading: "Ya está online",
  proofHeadingEm: "y funcionando",
  proofLede:
    "Crestodina Propiedades es una plataforma inmobiliaria que desarrollamos y está online: listado de propiedades en venta y alquiler, sistema de tasaciones online y consultas integradas. Tu inmobiliaria puede tener la suya, con tu marca y tu cartera.",
  proofCardLabel: "Caso real · Crestodina Propiedades",
  proofCardTitle: "Lo que incluye tu web",
  features: [
    { strong: "Fichas de propiedades", rest: "— galería, mapa y características, listas para compartir por link." },
    { strong: "Búsqueda por operación, zona y precio", rest: "— el interesado encuentra solo lo que busca." },
    { strong: "Botón de consulta por propiedad", rest: "— las consultas te llegan directo al WhatsApp." },
    { strong: "Panel de carga", rest: "— cargás y editás propiedades vos mismo, sin depender de nadie." },
    { strong: "Tasaciones online", rest: "— opcionales." },
  ],
  finalHeading: "¿Lo vemos juntos en",
  finalHeadingEm: "15 minutos?",
  finalLede:
    "Te mostramos cómo se vería tu web con tu cartera y nos contás cómo trabajás hoy. Si te sirve, avanzamos. Si no, te llevás ideas gratis.",
  whatsappMessage:
    "Hola Franco, tengo una inmobiliaria y quiero ver cómo sería mi web con la cartera de propiedades.",
  whatsappMessageNav:
    "Hola Franco, tengo una inmobiliaria y quiero ver cómo sería mi web con la cartera de propiedades.",
  metaTitle: "Web para inmobiliarias con tu cartera de propiedades — Crestech Studio",
  metaDescription:
    "Web propia para tu inmobiliaria: fichas de propiedades para compartir por WhatsApp, búsqueda por zona y precio, y consultas directas. Caso real online: Crestodina Propiedades.",
  ogTitle: "Tu cartera de propiedades, en tu propia web.",
  ogDescription:
    "Fichas para compartir por WhatsApp, búsqueda por zona y precio, y consultas directas a vos.",
  homeCard: {
    label: "Inmobiliarias",
    pain: "Tu cartera en tu propia web, con fichas para compartir por WhatsApp.",
  },
};

export const landings: LandingConfig[] = [pilates, canchas, hoteles, inmobiliarias];

export const landingSlugs = landings.map((l) => l.slug);

export function getLanding(slug: string): LandingConfig | undefined {
  return landings.find((l) => l.slug === slug);
}
