import type { Metadata } from "next";
import Link from "next/link";
import { docsStyles } from "./docsStyles";

export const metadata: Metadata = {
  title: "Documentación — Veris",
  description:
    "Guías de integración de Veris para instituciones que emiten credenciales verificables y para quienes las verifican.",
};

const GUIAS = [
  {
    slug: "emisores",
    kind: "Para emisores",
    titulo: "Emitir credenciales verificables",
    texto:
      "Cómo una institución convierte lo que ya emite —una liquidación, un certificado, un título— en una credencial que la persona lleva en el teléfono. Incluye los dos modos de emisión, el ciclo de vida completo y la firma de webhooks.",
  },
  {
    slug: "verificacion",
    kind: "Para verificadores",
    titulo: "Verificar una credencial",
    texto:
      "Los seis pasos de una verificación, los endpoints, los niveles de confianza y cómo expresar reglas de negocio sin escribir código. Incluye pruebas de rango: comprobar un umbral sin recibir el dato.",
  },
];

export default function DocsIndex() {
  return (
    <>
      <style>{docsStyles}</style>
      <div className="dk-wrap">
        <div className="dk-top">
          <Link href="/" className="dk-back">← Volver a Veris</Link>
        </div>

        <p className="dk-eyebrow">Documentación</p>
        <h1 className="dk-h1">Integrar Veris</h1>
        <p className="dk-lede">
          Veris se integra por API sobre los sistemas que ya tienes: no reemplaza tu plataforma de
          gestión ni migra datos. Estas guías cubren los dos lados del ecosistema — emitir y
          verificar.
        </p>

        <div className="dk-cards">
          {GUIAS.map((g) => (
            <Link href={`/docs/${g.slug}`} className="dk-card" key={g.slug}>
              <div className="dk-card-kind">{g.kind}</div>
              <h2>{g.titulo}</h2>
              <p>{g.texto}</p>
              <span className="dk-card-go">Leer la guía →</span>
            </Link>
          ))}
        </div>

        <div className="dk-soon">
          <h3>En preparación</h3>
          <ul>
            <li>Formato del código QR de presentación</li>
            <li>Login sin contraseña con OpenID Connect</li>
            <li>Políticas de verificación y control de acceso por atributos</li>
            <li>Estado, sincronización y revocación de credenciales</li>
          </ul>
        </div>
      </div>
    </>
  );
}
