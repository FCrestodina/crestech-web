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

export const posts: Post[] = [
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
