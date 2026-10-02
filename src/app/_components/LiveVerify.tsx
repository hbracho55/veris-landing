"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Credencial de ejemplo

   Generada por scripts/gen-demo-credential.mjs — 2026-10-02.
   Emisor ficticio; la clave privada se descartó al generarla.

   El navegador verifica esto de verdad: firma ES256 contra la clave pública de
   abajo y digests SHA-256 de cada dato revelado contra los `_sd` que vienen
   firmados dentro del JWT. No hay backend, ni API key, ni llamada de red — y
   por eso esta sección no se puede caer.

   La convención de los digests replica la del verificador de Veris:
     digest = base64url( sha256( `${campo}:${JSON.stringify(valor)}:${salt}` ) )
   Si cambia allá, hay que regenerar esto.
   ──────────────────────────────────────────────────────────────────────────── */

const DEMO_JWT =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRlbW8taXNzdWVyLTEifQ.eyJpc3MiOiJkaWQ6d2ViOmVtaXNvci1kZW1vLnZlcmlzLmNsIiwidmN0IjoiRW1wbG95bWVudENlcnRpZmljYXRlIiwiaWF0IjoxNzkwOTExMDA5LCJleHAiOjE4MDY2MzU4MDksIl9zZCI6WyJtSnktOWVqeFozSElVUXJCZE8teVA3SnloQXlNRjlxTXVkcm1ERHdZWjlnIiwid2xGYXk1UjdidjRlM3pBTy1wYkpCT1p3T2dQWUpIRUNLYXoxYjF3UXFabyIsIklVUW55Mk1wdnltVHRyYTBadXhVazV2VFh4bV9DZTBsbGFGSi1NYXNIeGsiLCJOZmRLbkY5d2RpdDF0Zk5sZF9IQnhhRTFuckJmZGdLWFQ3RUdZWDhCTUQ4Il19.fq0tRrKaFkQcUOO061BfzJ_1pKO9UCMgBf4swmMa8qvl0Hzue55busVTCzs0PevT9fQY_ztz2XxOZ7oOnKroDQ";

const DEMO_ISSUER_JWK: JsonWebKey = {
  kty: "EC",
  crv: "P-256",
  x: "h4TJ_lu1C157HaVaoRjiKf5ElCZW41XmhzT7L0JAg0s",
  y: "-M1KPt4i2LrFVFM6uf0dVDf1O-4LgKRhFSPgZi5pBss",
};

type Disclosure = { field: string; value: string; salt: string };

const DEMO_DISCLOSURES: Disclosure[] = [
  { field: "employer", value: "Empresa Ejemplo S.A.", salt: "JFu-q3C6cQ1kJlSQqU6y8Q" },
  { field: "position", value: "Analista de operaciones", salt: "XFGwS1ws3EbGg4-W3JjqdA" },
  { field: "income", value: "1450000", salt: "-pPTyIAHfu8yc7u_ntL2ww" },
  { field: "contractType", value: "Indefinido", salt: "vRYxymCyvvCL-SkFAT8SLg" },
];

const ETIQUETAS: Record<string, string> = {
  employer: "Empleador",
  position: "Cargo",
  income: "Renta mensual",
  contractType: "Tipo de contrato",
};

/* ─── Criptografía en el navegador ──────────────────────────────────────────── */

const utf8 = (s: string) => new TextEncoder().encode(s);

function b64urlToBytes(s: string): Uint8Array {
  const base64 = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(s.length / 4) * 4, "=");
  const bin = atob(base64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function bytesToB64url(bytes: ArrayBuffer): string {
  const b = new Uint8Array(bytes);
  let bin = "";
  for (let i = 0; i < b.length; i++) bin += String.fromCharCode(b[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function digestDisclosure(d: Disclosure): Promise<string> {
  const data = `${d.field}:${JSON.stringify(d.value)}:${d.salt}`;
  return bytesToB64url(await crypto.subtle.digest("SHA-256", utf8(data)));
}

async function verificarFirma(jwt: string): Promise<boolean> {
  const [h, p, s] = jwt.split(".");
  if (!h || !p || !s) return false;
  const key = await crypto.subtle.importKey(
    "jwk",
    DEMO_ISSUER_JWK,
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["verify"],
  );
  const firma = b64urlToBytes(s);
  return crypto.subtle.verify(
    { name: "ECDSA", hash: "SHA-256" },
    key,
    firma as unknown as BufferSource,
    utf8(`${h}.${p}`) as unknown as BufferSource,
  );
}

/* ─── Pasos ─────────────────────────────────────────────────────────────────── */

type Estado = "espera" | "corriendo" | "ok" | "falla";

type Paso = {
  id: string;
  titulo: string;
  detalleOk: string;
  detalleFalla?: string;
};

const PASOS: Paso[] = [
  {
    id: "firma",
    titulo: "Firma del emisor",
    detalleOk: "La firma corresponde a la clave pública del emisor. El documento no fue rehecho.",
    detalleFalla: "La firma no valida: este documento no fue emitido por quien dice.",
  },
  {
    id: "vigencia",
    titulo: "Vigencia",
    detalleOk: "La credencial está dentro de su período de validez.",
    detalleFalla: "La credencial está vencida.",
  },
  {
    id: "datos",
    titulo: "Integridad de los datos revelados",
    detalleOk: "Cada dato coincide con el compromiso criptográfico que firmó el emisor.",
  },
  {
    id: "emisor",
    titulo: "Identidad del emisor",
    detalleOk: "El emisor queda identificado por el documento, sin consultar a ninguna base de datos.",
  },
];

const espera = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function LiveVerify() {
  const [valores, setValores] = useState<Record<string, string>>(
    () => Object.fromEntries(DEMO_DISCLOSURES.map((d) => [d.field, d.value])),
  );
  const [falsificar, setFalsificar] = useState(false);
  const [estados, setEstados] = useState<Record<string, Estado>>({});
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [corriendo, setCorriendo] = useState(false);
  const [listo, setListo] = useState(false);
  const cancelado = useRef(false);

  useEffect(() => () => { cancelado.current = true; }, []);

  const alterado = DEMO_DISCLOSURES.some((d) => valores[d.field] !== d.value) || falsificar;

  function reset() {
    setEstados({});
    setErrores({});
    setListo(false);
  }

  async function verificar() {
    if (corriendo) return;
    reset();
    setCorriendo(true);

    // Un byte distinto en la firma: es lo que haría quien rehace el documento
    // entero con sus propias claves.
    const jwt = falsificar
      ? DEMO_JWT.slice(0, -4) + (DEMO_JWT.slice(-4) === "AAAA" ? "BBBB" : "AAAA")
      : DEMO_JWT;

    const [, payloadB64] = jwt.split(".");
    const payload = JSON.parse(new TextDecoder().decode(b64urlToBytes(payloadB64)));

    const marcar = (id: string, e: Estado, err?: string) => {
      if (cancelado.current) return;
      setEstados((prev) => ({ ...prev, [id]: e }));
      if (err) setErrores((prev) => ({ ...prev, [id]: err }));
    };

    // 1 — firma
    marcar("firma", "corriendo");
    await espera(520);
    const firmaOk = await verificarFirma(jwt);
    marcar("firma", firmaOk ? "ok" : "falla");

    // 2 — vigencia
    marcar("vigencia", "corriendo");
    await espera(360);
    const vigente = typeof payload.exp === "number" && payload.exp * 1000 > Date.now();
    marcar("vigencia", vigente ? "ok" : "falla");

    // 3 — integridad de cada dato revelado
    marcar("datos", "corriendo");
    await espera(420);
    const firmados: string[] = Array.isArray(payload._sd) ? payload._sd : [];
    const noCoinciden: string[] = [];
    for (const d of DEMO_DISCLOSURES) {
      const propuesto = { ...d, value: valores[d.field] };
      const digest = await digestDisclosure(propuesto);
      if (!firmados.includes(digest)) noCoinciden.push(ETIQUETAS[d.field] ?? d.field);
    }
    if (noCoinciden.length === 0) {
      marcar("datos", "ok");
    } else {
      marcar(
        "datos",
        "falla",
        noCoinciden.length === 1
          ? `El valor de «${noCoinciden[0]}» no coincide con lo que firmó el emisor.`
          : `Estos datos no coinciden con lo que firmó el emisor: ${noCoinciden.join(", ")}.`,
      );
    }

    // 4 — identidad del emisor
    marcar("emisor", "corriendo");
    await espera(300);
    marcar("emisor", firmaOk && payload.iss ? "ok" : "falla");

    if (!cancelado.current) {
      setCorriendo(false);
      setListo(true);
    }
  }

  const algunaFalla = Object.values(estados).some((e) => e === "falla");

  return (
    <section className="section lv" id="verificar">
      <style>{styles}</style>

      <div className="lv-head">
        <div className="lv-tag">Pruébalo ahora</div>
        <h2>
          Verifica una credencial <em>en este momento</em>
        </h2>
        <p className="lv-sub">
          Abajo hay un certificado laboral firmado criptográficamente. Verifícalo, y después{" "}
          <strong>intenta cambiarle el sueldo</strong>. No necesitas instalar nada.
        </p>
      </div>

      <div className="lv-grid">
        {/* Credencial */}
        <div className="lv-card">
          <div className="lv-card-top">
            <div className="lv-card-kind">Certificado laboral</div>
            <div className="lv-card-issuer">emisor-demo.veris.cl</div>
          </div>

          <div className="lv-fields">
            {DEMO_DISCLOSURES.map((d) => {
              const cambiado = valores[d.field] !== d.value;
              return (
                <label className="lv-field" key={d.field}>
                  <span className="lv-field-label">{ETIQUETAS[d.field] ?? d.field}</span>
                  <input
                    id={`lv-${d.field}`}
                    className={`lv-input${cambiado ? " lv-input--mod" : ""}`}
                    value={valores[d.field]}
                    disabled={corriendo}
                    onChange={(e) => {
                      setValores((v) => ({ ...v, [d.field]: e.target.value }));
                      reset();
                    }}
                  />
                </label>
              );
            })}
          </div>

          <label className="lv-toggle" htmlFor="lv-forge">
            <input
              id="lv-forge"
              type="checkbox"
              checked={falsificar}
              disabled={corriendo}
              onChange={(e) => {
                setFalsificar(e.target.checked);
                reset();
              }}
            />
            <span>Simular un documento rehecho desde cero</span>
          </label>

          <p className="lv-note">
            Credencial de ejemplo · emisor ficticio · se verifica en tu navegador, sin enviar nada a
            ningún servidor
          </p>
        </div>

        {/* Verificación */}
        <div className="lv-panel">
          <div className="lv-steps">
            {PASOS.map((p) => {
              const e = estados[p.id] ?? "espera";
              return (
                <div className={`lv-step lv-step--${e}`} key={p.id}>
                  <div className="lv-step-mark" aria-hidden="true">
                    {e === "ok" ? "✓" : e === "falla" ? "✕" : e === "corriendo" ? "" : ""}
                  </div>
                  <div className="lv-step-body">
                    <div className="lv-step-title">{p.titulo}</div>
                    {e === "ok" && <div className="lv-step-detail">{p.detalleOk}</div>}
                    {e === "falla" && (
                      <div className="lv-step-detail lv-step-detail--bad">
                        {errores[p.id] ?? p.detalleFalla ?? "No se pudo comprobar."}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="lv-btn"
            onClick={verificar}
            disabled={corriendo}
            aria-live="polite"
          >
            {corriendo ? "Verificando…" : listo ? "Verificar de nuevo →" : "Verificar esta credencial →"}
          </button>

          {listo && !algunaFalla && !alterado && (
            <div className="lv-verdict lv-verdict--ok">
              Credencial válida. La verificación ocurrió entera en tu navegador, sin consultar a la
              empresa que la emitió y sin que ningún dato saliera de tu equipo.
            </div>
          )}
          {listo && algunaFalla && (
            <div className="lv-verdict lv-verdict--bad">
              Documento rechazado. Esto es lo que vería un banco o una inmobiliaria en el instante en
              que alguien presenta un dato alterado — sin llamar a nadie y sin esperar.
            </div>
          )}
          {listo && !algunaFalla && alterado && (
            <div className="lv-verdict lv-verdict--ok">
              Válida: el valor volvió a coincidir con lo que firmó el emisor.
            </div>
          )}

          {!listo && !corriendo && (
            <p className="lv-hint">
              Cuatro comprobaciones, ninguna consulta a un servidor. Después cambia un valor y vuelve
              a verificar.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

const styles = `
.lv{background:linear-gradient(180deg,#F7F9FC 0%,#EEF3FB 100%);padding-top:5rem;padding-bottom:5rem}
.lv-head{max-width:720px;margin:0 auto 2.75rem;text-align:center}
.lv-tag{display:inline-block;font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#C0388A;margin-bottom:.9rem}
.lv-head h2{font-family:'DM Serif Display',Georgia,serif;font-size:clamp(1.9rem,4vw,2.7rem);line-height:1.1;color:#1E3564;margin-bottom:.9rem;text-wrap:balance}
.lv-head h2 em{font-style:italic;color:#4472C4}
.lv-sub{font-size:1.02rem;line-height:1.65;color:#4A5B7A;max-width:60ch;margin:0 auto}

.lv-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;max-width:1020px;margin:0 auto;align-items:start}

.lv-card{background:#fff;border:1px solid #D8E5F5;border-radius:16px;padding:1.5rem;box-shadow:0 10px 40px -24px rgba(30,53,100,.35)}
.lv-card-top{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;padding-bottom:1rem;margin-bottom:1.15rem;border-bottom:1px solid #EEF3FB}
.lv-card-kind{font-size:1rem;font-weight:700;color:#1E3564}
.lv-card-issuer{font-family:ui-monospace,Menlo,monospace;font-size:.72rem;color:#8A9BB8}

.lv-fields{display:grid;gap:.85rem}
.lv-field{display:block}
.lv-field-label{display:block;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#8A9BB8;margin-bottom:.3rem}
.lv-input{width:100%;font-family:inherit;font-size:.95rem;font-weight:600;color:#1E3564;background:#F7F9FC;border:1px solid #D8E5F5;border-radius:9px;padding:.6rem .75rem;transition:border-color .2s,background .2s}
.lv-input:focus{outline:2px solid #4472C4;outline-offset:1px;background:#fff}
.lv-input--mod{border-color:#C0388A;background:#FDF2F8;color:#A02A72}
.lv-input:disabled{opacity:.6}

.lv-toggle{display:flex;align-items:center;gap:.55rem;margin-top:1.15rem;font-size:.84rem;color:#4A5B7A;cursor:pointer}
.lv-toggle input{width:1rem;height:1rem;accent-color:#C0388A;cursor:pointer}
.lv-note{margin-top:1.1rem;padding-top:.9rem;border-top:1px solid #EEF3FB;font-size:.72rem;line-height:1.55;color:#8A9BB8}

.lv-panel{background:#1E3564;border-radius:16px;padding:1.5rem;box-shadow:0 10px 40px -20px rgba(30,53,100,.5)}
.lv-steps{display:grid;gap:.1rem;margin-bottom:1.4rem}
.lv-step{display:grid;grid-template-columns:28px 1fr;gap:.75rem;padding:.8rem 0;border-bottom:1px solid rgba(255,255,255,.08)}
.lv-step:last-child{border-bottom:none}
.lv-step-mark{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;background:rgba(255,255,255,.08);color:rgba(255,255,255,.3);border:1px solid rgba(255,255,255,.14)}
.lv-step--corriendo .lv-step-mark{border-color:#5B8FC4;border-top-color:transparent;animation:lv-spin .7s linear infinite}
.lv-step--ok .lv-step-mark{background:#1D9E75;color:#fff;border-color:#1D9E75}
.lv-step--falla .lv-step-mark{background:#C0388A;color:#fff;border-color:#C0388A}
.lv-step-title{font-size:.92rem;font-weight:600;color:rgba(255,255,255,.55);transition:color .2s}
.lv-step--ok .lv-step-title,.lv-step--falla .lv-step-title,.lv-step--corriendo .lv-step-title{color:#fff}
.lv-step-detail{font-size:.8rem;line-height:1.5;color:rgba(255,255,255,.6);margin-top:.25rem}
.lv-step-detail--bad{color:#F0A8CE}

@keyframes lv-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.lv-step--corriendo .lv-step-mark{animation:none}}

.lv-btn{width:100%;font-family:inherit;font-size:.95rem;font-weight:700;color:#1E3564;background:#fff;border:none;border-radius:11px;padding:.85rem 1.2rem;cursor:pointer;transition:transform .2s,box-shadow .2s}
.lv-btn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 8px 24px rgba(0,0,0,.25)}
.lv-btn:focus-visible{outline:2px solid #5B8FC4;outline-offset:2px}
.lv-btn:disabled{opacity:.65;cursor:default}

.lv-verdict{margin-top:1.1rem;font-size:.86rem;line-height:1.6;padding:.85rem 1rem;border-radius:10px}
.lv-verdict--ok{background:rgba(29,158,117,.16);color:#A8E6CE;border:1px solid rgba(29,158,117,.4)}
.lv-verdict--bad{background:rgba(192,56,138,.16);color:#F5C2DF;border:1px solid rgba(192,56,138,.45)}
.lv-hint{margin-top:1.1rem;font-size:.78rem;line-height:1.55;color:rgba(255,255,255,.45)}

@media (max-width:860px){
  .lv-grid{grid-template-columns:1fr}
  .lv{padding-top:3.5rem;padding-bottom:3.5rem}
}
`;
