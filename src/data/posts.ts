// Blog mínimo para SEO orgánico: recicla los ángulos del banco de contenido del auto-poster
// en artículos que rankean en Google (al revés de Instagram, que es efímero). Data-driven,
// sin MDX: cada post es una lista de bloques. Para sumar uno, agregá una entrada acá.
// Los párrafos admiten links con sintaxis markdown: [texto](/ruta) o [texto](https://…).
// Cada post tiene que linkear a la landing o al producto que le corresponde: es la
// forma en que el blog le pasa relevancia a las páginas que venden.

export interface PostBlock {
  type: "p" | "h2";
  text: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO YYYY-MM-DD
  body: PostBlock[];
}

const CUPIO = "https://cupio.com.ar?utm_source=crestech&utm_medium=blog";
const cupio = (path: string) => `https://cupio.com.ar${path}?utm_source=crestech&utm_medium=blog`;

export const posts: Post[] = [
  {
    slug: "abonos-de-clases-sin-planilla",
    title: "Cómo llevar los abonos de clases sin planilla",
    description:
      "Qué definir de un abono, por qué la planilla aparte se rompe y cómo hacer que cada reserva descuente la clase sola.",
    date: "2026-10-05",
    body: [
      { type: "p", text: "Si das clases con abono (8 clases al mes, 12 en 30 días, el pack que uses), seguro conocés la escena: una alumna dice que le quedan dos clases, tu planilla dice una, y nadie sabe quién tiene razón. El problema casi nunca es la planilla en sí. Es que las reservas van por un lado y la cuenta del abono por otro." },
      { type: "h2", text: "Definí qué es un abono en tu estudio" },
      { type: "p", text: "Antes de elegir una herramienta, poné en claro cuatro cosas: cuántas clases tiene, en cuántos días se usan, para qué clases vale (todas o solo algunas, por ejemplo reformer sí y mat no) y qué pasa cuando alguien cancela. Lo más común, y lo que menos reclamos genera, es que la clase vuelva al abono si se cancela con la anticipación que vos pediste." },
      { type: "h2", text: "Por qué la planilla aparte se rompe" },
      { type: "p", text: "Cada reserva por WhatsApp es un dato que después hay que pasar a mano a otro lado. Un olvido alcanza para que la cuenta quede mal, y los errores aparecen justo cuando la alumna quiere reservar y vos tenés que revisar el historial para darle una respuesta. Con dos o tres alumnas se sostiene; con cuarenta, no." },
      { type: "h2", text: "Que la reserva descuente la clase" },
      { type: "p", text: `La solución es que la cuenta la lleve el mismo lugar donde se reserva. Es lo que hace [Cupio](${CUPIO}), el sistema de turnos que desarrollamos: cargás el abono de cada alumna, cada reserva descuenta una clase, si cancela a tiempo la clase vuelve y ella ve en su celular cuántas le quedan. Si querés, podés pedir que solo reserve quien tiene un abono con clases disponibles.` },
      { type: "p", text: `Funciona igual para [estudios de pilates](${cupio("/turnos/pilates")}), [clases de yoga](${cupio("/turnos/yoga")}), [funcional y crossfit](${cupio("/turnos/funcional")}) y [escuelas de danza](${cupio("/turnos/danza")}).` },
      { type: "h2", text: "Y el cobro" },
      { type: "p", text: "Mientras cobres por fuera (transferencia, efectivo o Mercado Pago), alcanza con marcar el abono como pagado cuando te llega la plata. Lo importante es que la cuenta de clases ya no dependa de tu memoria." },
      { type: "p", text: "Si tenés un estudio de pilates y querés verlo con tus horarios, mirá [turnos para estudios de pilates](/turnos-pilates) o escribinos: te lo mostramos funcionando en 15 minutos." },
    ],
  },
  {
    slug: "como-bajar-los-faltazos",
    title: "Cómo bajar los faltazos en tu negocio de turnos",
    description:
      "Tres formas concretas de que menos clientes falten al turno: seña, confirmación y recordatorios automáticos.",
    date: "2026-07-02",
    body: [
      { type: "p", text: "Un turno que se cae a último momento es plata que no vuelve: esa franja ya no la ocupa nadie. La buena noticia es que la mayoría de los faltazos no son mala intención, son olvidos. Y los olvidos se resuelven con sistema, no con retos." },
      { type: "h2", text: "1. Pedí una seña" },
      { type: "p", text: "Cobrar una seña al reservar filtra a los que no van en serio y compromete al resto. No hace falta que sea el total: alcanza con que duela un poco perderla. Si el cliente la paga desde el celular con Mercado Pago al momento de reservar, el turno queda confirmado de verdad." },
      { type: "h2", text: "2. Confirmá el día anterior" },
      { type: "p", text: "Un mensaje el día previo baja los faltazos de forma notable. El problema es que hacerlo a mano, uno por uno, es imposible de sostener. Ahí entra la automatización." },
      { type: "h2", text: "3. Automatizá el recordatorio" },
      { type: "p", text: `Es la que más cambia el mes. Un recordatorio automático antes de cada turno le avisa al cliente sin que vos muevas un dedo, y si tiene que cancelar, lo hace a tiempo y liberás el lugar para otro. Es lo que hace [Cupio, nuestro sistema de turnos online](${CUPIO}): cada cliente recibe una notificación en el celular antes de su turno.` },
      { type: "p", text: "Si tenés un estudio, mirá cómo funciona en [turnos para estudios de pilates](/turnos-pilates); si tenés un complejo, en [reservas online para canchas](/reservas-canchas). Y si querés verlo en tu negocio, escribinos: te lo mostramos funcionando en 15 minutos." },
    ],
  },
  {
    slug: "cuanto-cuesta-un-turno-vacio",
    title: "¿Cuánto te cuesta un turno vacío? (y cómo recuperarlo)",
    description:
      "Hacé la cuenta real de lo que perdés por cada turno que se cae, y qué podés hacer para que no vuelva a pasar.",
    date: "2026-07-02",
    body: [
      { type: "p", text: "Sumá lo que cobrás por un turno y multiplicalo por cuántos se te caen al mes. Ese número suele sorprender: muchos negocios de turnos pierden el equivalente a varios días de trabajo sin darse cuenta, en huecos que nadie ocupó." },
      { type: "h2", text: "El costo real no es solo el turno" },
      { type: "p", text: "Cuando alguien falta sin avisar, no perdés solo esa franja: perdés la chance de que otra persona la hubiera reservado. Si el aviso llega a tiempo, ese lugar se libera y lo toma alguien más." },
      { type: "h2", text: "Cómo recuperar la mayor parte" },
      { type: "p", text: "No hace falta eliminar el 100% de los faltazos para que valga la pena: bajar aunque sea la mitad ya se paga solo. Una agenda online con reservas las 24 horas y recordatorios automáticos ataca las causas más comunes a la vez; la seña, si tu rubro la admite, cierra el resto." },
      { type: "p", text: `[Cupio](${CUPIO}) hace la parte de la agenda, la lista de espera y los recordatorios, y lo podés probar gratis 7 días. Para cobrar señas online, desarrollamos sistemas a medida: mirá cómo funciona en [reservas online para canchas](/reservas-canchas).` },
    ],
  },
];

export const postSlugs = posts.map((p) => p.slug);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
