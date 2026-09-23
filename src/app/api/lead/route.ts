// Captura de leads por email vía Resend. Es el plan B para quien no quiere abrir WhatsApp.
// Gated: sin RESEND_API_KEY responde { ok:false, error:"no_configurado" } (200) y el front
// cae de vuelta a WhatsApp, sin romper nada.

export async function POST(request: Request) {
  let data: { nombre?: string; email?: string; mensaje?: string };
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const nombre = (data.nombre ?? "").trim().slice(0, 120);
  const email = (data.email ?? "").trim().slice(0, 160);
  const mensaje = (data.mensaje ?? "").trim().slice(0, 4000);
  if (!nombre || !mensaje) {
    return Response.json({ ok: false, error: "faltan_datos" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return Response.json({ ok: false, error: "no_configurado" }, { status: 200 });
  }

  const to = process.env.LEAD_EMAIL_TO ?? "devfrancocrestodina@gmail.com";
  const from = process.env.LEAD_EMAIL_FROM ?? "Crestech Web <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email || undefined,
        subject: `Nuevo lead del sitio: ${nombre}`,
        text: `Nombre: ${nombre}\nEmail: ${email || "(no dejó)"}\n\nMensaje:\n${mensaje}`,
      }),
    });
    // Un lead que no salió es un cliente perdido: va a Sentry (console.error manda aviso por mail).
    // Sin el nombre ni el mail del visitante en el mensaje.
    if (!res.ok) {
      console.error(`[lead] Resend respondió HTTP ${res.status}: el lead no se mandó`);
      return Response.json({ ok: false, error: "envio_fallo" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (e) {
    console.error("[lead] no se pudo llamar a Resend: el lead no se mandó", e);
    return Response.json({ ok: false, error: "envio_fallo" }, { status: 502 });
  }
}
