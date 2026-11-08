import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import { docsStyles } from "../docsStyles";

/** Las guías publicadas. El `slug` es el nombre del archivo en src/content/docs. */
const GUIAS = {
  emisores: {
    titulo: "Emitir credenciales verificables",
    descripcion:
      "Guía de integración de Veris para instituciones que emiten credenciales: flujos pull y push, ciclo de vida y firma de webhooks.",
  },
  verificacion: {
    titulo: "Verificar una credencial",
    descripcion:
      "Guía de integración de Veris para verificadores: los seis pasos de la verificación, endpoints, niveles de confianza y pruebas de rango.",
  },
} as const;

type Slug = keyof typeof GUIAS;

const esSlug = (s: string): s is Slug => s in GUIAS;

export function generateStaticParams() {
  return Object.keys(GUIAS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!esSlug(slug)) return { title: "Documentación — Veris" };
  return {
    title: `${GUIAS[slug].titulo} — Documentación de Veris`,
    description: GUIAS[slug].descripcion,
  };
}

/** Un ancla estable por encabezado, para el índice lateral. */
function slugificar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default async function Guia({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!esSlug(slug)) notFound();

  const ruta = path.join(process.cwd(), "src/content/docs", `${slug}.md`);
  const markdown = await readFile(ruta, "utf8");

  // Índice lateral: los encabezados de segundo nivel del documento.
  const secciones = Array.from(markdown.matchAll(/^##\s+(.+)$/gm)).map((m) => {
    const texto = m[1].replace(/`/g, "").trim();
    return { texto, id: slugificar(texto) };
  });

  const renderer = new marked.Renderer();
  // Mismos id que calcula el índice, para que los enlaces apunten bien.
  renderer.heading = ({ tokens, depth }) => {
    const texto = tokens.map((t) => ("raw" in t ? t.raw : "")).join("");
    const limpio = texto.replace(/`/g, "").trim();
    return `<h${depth} id="${slugificar(limpio)}">${marked.parseInline(texto)}</h${depth}>`;
  };
  // Las tablas anchas se desplazan en su propio contenedor; la página nunca
  // se desplaza en horizontal.
  renderer.table = (token) => {
    const base = new marked.Renderer();
    return `<div class="dk-table-scroll">${base.table.call(renderer, token)}</div>`;
  };

  const html = await marked.parse(markdown, { renderer, gfm: true, breaks: false });

  return (
    <>
      <style>{docsStyles}</style>
      <div className="dk-wrap">
        <div className="dk-top">
          <Link href="/docs" className="dk-back">← Documentación</Link>
        </div>

        <div className="dk-doc">
          <nav className="dk-side" aria-label="Contenido de la guía">
            <div className="dk-side-title">En esta guía</div>
            {secciones.map((s) => (
              <a href={`#${s.id}`} key={s.id}>
                {s.texto}
              </a>
            ))}
          </nav>

          <article className="dk-prose" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="dk-foot">
          ¿Algo no queda claro o falta un caso? Escríbenos a{" "}
          <a href="mailto:verisprotocol@gmail.com">verisprotocol@gmail.com</a> — las guías se
          corrigen con lo que preguntan quienes integran.
        </div>
      </div>
    </>
  );
}
