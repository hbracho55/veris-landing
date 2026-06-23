import { Resend } from "resend";

export const runtime = "nodejs";

type DemoRequest = {
  fullName: string;
  email: string;
  position: string;
  company: string;
  interest: "emisor" | "verificador" | "hibrida";
};

const INTEREST_LABEL: Record<DemoRequest["interest"], string> = {
  emisor: "Quiero emitir credenciales",
  verificador: "Quiero verificar credenciales",
  hibrida: "Quiero una solución híbrida / Enterprise",
};

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "yahoo.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
]);

function isCorporateEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at < 1) return false;
  const domain = email.slice(at + 1).toLowerCase().trim();
  return domain.length > 0 && !FREE_EMAIL_DOMAINS.has(domain);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Partial<DemoRequest>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = body.fullName?.trim();
  const email = body.email?.trim();
  const position = body.position?.trim();
  const company = body.company?.trim();
  const interest = body.interest;

  if (!fullName || !email || !position || !company || !interest) {
    return Response.json(
      { error: "Faltan campos requeridos." },
      { status: 400 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json(
      { error: "Correo electrónico inválido." },
      { status: 400 }
    );
  }
  if (!isCorporateEmail(email)) {
    return Response.json(
      { error: "Por favor utilice un correo corporativo (no gmail/hotmail)." },
      { status: 400 }
    );
  }
  if (!(interest in INTEREST_LABEL)) {
    return Response.json(
      { error: "Tipo de interés inválido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[demo-request] RESEND_API_KEY no está configurada.");
    return Response.json(
      { error: "Servicio de envío no configurado." },
      { status: 500 }
    );
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const toAddress = process.env.RESEND_TO_EMAIL ?? "verisprotocol@gmail.com";

  const interestLabel = INTEREST_LABEL[interest];
  const subject = `Nueva solicitud de demo — ${company}`;

  const htmlBody = `
    <h2 style="font-family:Arial,sans-serif;color:#1E3564">Nueva solicitud de demo Veris</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:6px 12px 6px 0;color:#5A6A8A">Nombre</td><td><strong>${escapeHtml(fullName)}</strong></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#5A6A8A">Correo</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#5A6A8A">Cargo</td><td>${escapeHtml(position)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#5A6A8A">Institución / Empresa</td><td>${escapeHtml(company)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#5A6A8A">Tipo de interés</td><td>${escapeHtml(interestLabel)}</td></tr>
    </table>
  `;

  const textBody = [
    "Nueva solicitud de demo Veris",
    "",
    `Nombre: ${fullName}`,
    `Correo: ${email}`,
    `Cargo: ${position}`,
    `Institución / Empresa: ${company}`,
    `Tipo de interés: ${interestLabel}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject,
      html: htmlBody,
      text: textBody,
    });
    if (error) {
      console.error("[demo-request] Resend error:", error);
      return Response.json(
        { error: "No se pudo enviar la solicitud. Intente nuevamente." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[demo-request] Unexpected error:", err);
    return Response.json(
      { error: "Error inesperado al enviar la solicitud." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
