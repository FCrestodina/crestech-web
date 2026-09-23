import * as Sentry from "@sentry/nextjs";

// Next llama a register() una vez por runtime al arrancar. La configuración y el porqué de cada
// opción están en lib/sentry.ts.
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" || process.env.NEXT_RUNTIME === "edge") {
    const { iniciarSentry } = await import("./lib/sentry");
    iniciarSentry();
  }
}

// Errores no controlados de cualquier request (páginas, route handlers, server actions).
export const onRequestError = Sentry.captureRequestError;
