@AGENTS.md

## Avisos de errores y caídas (2026-09-23)

- **Sentry** (`src/instrumentation.ts` + `src/lib/sentry.ts`, `SENTRY_DSN` solo en production): un mail por issue nuevo, con los errores no controlados de cualquier request y todo `console.error` del server. **Un `console.error` nuevo es un aviso por mail**: solo para lo que requiere acción (hoy, un lead que Resend no pudo mandar, en `src/app/api/lead/route.ts`). Apaga la recolección automática de datos y tacha mails y queries: el formulario de leads recibe datos del visitante.
- **UptimeRobot** mira la home cada 5 min (con HEAD). Convive con `.github/workflows/uptime.yml` (cada 30 min, además chequea que siga el header CSP).
