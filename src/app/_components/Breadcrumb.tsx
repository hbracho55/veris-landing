"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

/* ── Mapa de rutas → etiquetas ── */
const ROUTE_LABELS: Record<string, string> = {
  issuers:    "Emisores",
  verifiers:  "Verificadores",
  users:      "Usuarios",
  healthcare: "Salud & Previsión",
  education:  "Educación",
  financial:  "Financieras",
  realstate:  "Inmobiliarias",
  insurance:  "Aseguradoras",
  employer:   "Empleadores",
  government: "Gobierno",
};

/* Segmentos que pertenecen a una categoría padre */
const PARENT: Record<string, { href: string; label: string }> = {
  rrhh:       { href: "/#sectores", label: "Industrias" },
  healthcare: { href: "/#sectores", label: "Industrias" },
  education:  { href: "/#sectores", label: "Industrias" },
  financial:  { href: "/#sectores", label: "Industrias" },
  realstate:  { href: "/#sectores", label: "Industrias" },
  insurance:  { href: "/#sectores", label: "Industrias" },
  employer:   { href: "/#sectores", label: "Industrias" },
  government: { href: "/#sectores", label: "Industrias" },
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // No mostrar en la homepage
  if (!pathname || pathname === "/") return null;

  // Construir crumbs
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: { href: string; label: string; current?: boolean }[] = [
    { href: "/", label: "Inicio" },
  ];

  segments.forEach((seg, i) => {
    // Si tiene padre lógico, insertarlo
    if (i === 0 && PARENT[seg]) {
      crumbs.push(PARENT[seg]);
    }
    crumbs.push({
      href: "/" + segments.slice(0, i + 1).join("/"),
      label: ROUTE_LABELS[seg] ?? seg,
      current: i === segments.length - 1,
    });
  });

  const prev = crumbs[crumbs.length - 2]; // destino del botón "volver"

  return (
    <div className="breadcrumb-bar">
      <div className="breadcrumb-inner">
        {/* Botón volver */}
        <Link href={prev.href} className="breadcrumb-back">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver
        </Link>

        <span className="breadcrumb-divider" aria-hidden="true"></span>

        {/* Trail */}
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb-list">
            {crumbs.map((c, i) => (
              <li key={c.href} className="breadcrumb-item">
                {i > 0 && (
                  <span className="breadcrumb-sep" aria-hidden="true">›</span>
                )}
                {c.current ? (
                  <span className="breadcrumb-current" aria-current="page">{c.label}</span>
                ) : (
                  <Link href={c.href} className="breadcrumb-link">{c.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
