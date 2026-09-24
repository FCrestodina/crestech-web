import * as Sentry from "@sentry/nextjs";
import type { Breadcrumb, ErrorEvent } from "@sentry/nextjs";

// Sentry avisa por mail cada issue nuevo, así que lo que llega tiene que ser algo que hay que
// arreglar: los errores no controlados de un request (onRequestError, en instrumentation.ts) y los
// console.error del server (captureConsoleIntegration: un lead que Resend no pudo mandar). Sin
// SENTRY_DSN queda apagado: dev y CI.
//
// Datos personales: el SDK por defecto junta cookies, headers, cuerpos, query params, datos de
// consultas y variables locales. Todo eso se apaga en `dataCollection`. Lo que igual viaja (el
// texto de los mensajes, el valor de las excepciones, la URL del request y los breadcrumbs) se
// tacha en los hooks de salida: mails (el formulario de leads recibe el del visitante) y la query
// de las URLs.

export function tachar(texto: string): string;
export function tachar(texto: string | undefined): string | undefined;
export function tachar(texto: string | undefined): string | undefined {
  if (!texto) return texto;
  return texto
    .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, "[email]")
    .replace(/\?[^\s"'<>]+/g, "?[query]");
}

// El usuario cerró la pestaña o se le cortó la conexión a mitad del request: no hay nada roto
// del lado del server. Un timeout de fetch contra un servicio externo NO es ruido (TimeoutError).
export function esRuido(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const codigo = (error as { code?: string }).code;
  return (
    error.name === "AbortError" ||
    codigo === "ECONNRESET" ||
    codigo === "EPIPE" ||
    // Next responde 404 cuando piden una página dinámica que no existe (dynamicParams = false) y
    // lo hace tirando esta excepción interna, que además loguea con console.error. Es un link
    // roto o un bot (en Crestech, /favicon.ico caía en /[rubro]), nunca algo para arreglar.
    error.message === "Internal: NoFallbackError"
  );
}

// Agrupación: sin source maps, el stack es del bundle compilado y funciones distintas comparten
// nombre minificado ("t"), así que Sentry juntaba errores distintos en un mismo issue, y un error
// nuevo que cae en un issue existente NO manda mail. Se agrupa por tipo + mensaje, con números e
// ids normalizados para que el mismo error con otro id siga siendo un solo issue.
export function huella(tipo: string | undefined, mensaje: string | undefined): string[] {
  // Solo ids (letras y dígitos mezclados, 8+) y números de 4+ cifras. Un status (403 vs 500) es un
  // error distinto y tiene que abrir su issue y avisar.
  const normalizado = (mensaje ?? "")
    .replace(/\b(?=[a-z0-9]*\d)(?=[a-z0-9]*[a-z])[a-z0-9]{8,}\b/gi, "<id>")
    .replace(/\b\d{4,}\b/g, "<n>");
  return [tipo ?? "Error", normalizado];
}

// Recorre TODO el evento: el SDK agrega campos por su cuenta (contexts.nextjs.request_path con la
// URL entera, extra.arguments con los argumentos crudos de console.error) y tachar campo por campo
// siempre deja alguno afuera. El stacktrace se saltea: son nombres de archivo y código, y el
// patrón de query rompería el código de contexto (`a?.b`).
export function tacharProfundo<T>(valor: T, profundidad = 0): T {
  if (profundidad > 10) return valor;
  if (typeof valor === "string") return tachar(valor) as T;
  if (Array.isArray(valor)) return valor.map((v) => tacharProfundo(v, profundidad + 1)) as T;
  if (valor && typeof valor === "object") {
    const obj = valor as Record<string, unknown>;
    for (const k of Object.keys(obj)) {
      if (k === "stacktrace") continue;
      obj[k] = tacharProfundo(obj[k], profundidad + 1);
    }
  }
  return valor;
}

// Cuota: el plan gratis es de 5.000 eventos por mes, compartidos por todos los proyectos. Un error
// que se repite en cada request (un servicio caído, alguien golpeando un endpoint que falla) la
// agotaría en horas y dejaría sin avisos a todo lo demás. El mismo error (misma huella) se manda
// una vez cada 10 minutos por proceso: el mail ya salió con el primero.
const VENTANA_MS = 10 * 60 * 1000;
const ultimoEnvio = new Map<string, number>();

export function yaSeMandoHace(huellaEvento: string[], ahora = Date.now()): boolean {
  const clave = huellaEvento.join("|");
  const previo = ultimoEnvio.get(clave);
  if (previo !== undefined && ahora - previo < VENTANA_MS) return true;
  if (ultimoEnvio.size > 500) ultimoEnvio.clear();
  ultimoEnvio.set(clave, ahora);
  return false;
}

// El optimizador de imágenes de Next loguea con console.error cuando le piden un archivo de
// /_next/static/media que no existe. Esos archivos llevan el hash del build y los del build actual
// siempre existen: el pedido es de una página cacheada de un build anterior o de un bot probando
// rutas (en Crestodina, 2026-09-23, un logo que el sitio nunca tuvo). Una imagen rota del propio
// sitio (en /public o externa) sigue avisando: el filtro mira solo /_next/static/media/.
export function esImagenInexistenteDelBuild(evento: ErrorEvent): boolean {
  const textos = [evento.message, ...(evento.exception?.values ?? []).map((v) => v.value)];
  return textos.some(
    (t) => typeof t === "string" && t.includes("isn't a valid image for /_next/static/media/"),
  );
}

export function antesDeEnviar(evento: ErrorEvent, hint: { originalException?: unknown }): ErrorEvent | null {
  if (esRuido(hint.originalException)) return null;
  if (esImagenInexistenteDelBuild(evento)) return null;

  if (evento.request) {
    delete evento.request.query_string;
    delete evento.request.cookies;
    delete evento.request.data;
  }
  tacharProfundo(evento);
  // Un console.error con solo texto (sin un Error) llega como excepción "sintética" sin tipo, y
  // Sentry la titula con el nombre de una función interna ("n.triggerHandlers"): ese título es el
  // asunto del mail. Con tipo y sin la marca de sintética, el título es el mensaje.
  for (const ex of evento.exception?.values ?? []) {
    if (!ex.type) {
      ex.type = "console.error";
      if (ex.mechanism) ex.mechanism.synthetic = false;
    }
  }
  const ultima = evento.exception?.values?.at(-1);
  evento.fingerprint = huella(ultima?.type, ultima?.value ?? evento.message);
  if (yaSeMandoHace(evento.fingerprint)) return null;
  return evento;
}

// Los breadcrumbs de consola traen en data.arguments lo que se pasó a console.* tal cual. El
// mensaje ya lo resume.
export function antesDeBreadcrumb(b: Breadcrumb): Breadcrumb {
  if (b.category === "console") delete b.data;
  return tacharProfundo(b);
}

export function iniciarSentry(): void {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    // "production" / "test" en Railway.
    environment: process.env.RAILWAY_ENVIRONMENT_NAME || process.env.NODE_ENV,
    release: process.env.RAILWAY_GIT_COMMIT_SHA || undefined,
    // Sin tracing: solo errores (el plan gratis y el pedido son eso).
    dataCollection: {
      userInfo: false,
      cookies: false,
      httpHeaders: false,
      httpBodies: [],
      urlQueryParams: false,
      databaseQueryData: false,
      queues: false,
      stackFrameVariables: false,
      graphQL: { document: false, variables: false },
      genAI: { inputs: false, outputs: false },
    },
    integrations: [Sentry.captureConsoleIntegration({ levels: ["error"] })],
    beforeSend: antesDeEnviar,
    beforeBreadcrumb: antesDeBreadcrumb,
  });
}
