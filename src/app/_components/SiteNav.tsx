"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import DemoTrigger from "./DemoTrigger";

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  // Cierra el menú al cambiar de ruta o al hacer click fuera
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, [open]);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <nav className="site-nav">
        <div className="nav-bg"></div>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={handleLinkClick}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-veris-oscuro.PNG"
              alt="Veris"
              style={{ width: 115, height: 75, marginLeft: 4 }}
            />
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            <Link href="/">Inicio</Link>
            <Link href="/#ecosistema">Ecosistema</Link>
            <Link href="/#seguridad">Seguridad</Link>
            <Link href="/#casos">Casos de uso</Link>
            <DemoTrigger className="nav-pill">Agendar demo</DemoTrigger>
          </div>

          {/* Hamburger button — only visible on mobile */}
          <button
            className={`nav-hamburger${open ? " is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="nav-drawer-links">
          <Link href="/" onClick={handleLinkClick}>Inicio</Link>
          <Link href="/#ecosistema" onClick={handleLinkClick}>Ecosistema</Link>
          <Link href="/#seguridad" onClick={handleLinkClick}>Seguridad</Link>
          <Link href="/#casos" onClick={handleLinkClick}>Casos de uso</Link>
          <DemoTrigger className="nav-drawer-pill" onClick={handleLinkClick}>
            Agendar demo
          </DemoTrigger>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div className="nav-backdrop" onClick={handleLinkClick} aria-hidden="true" />
      )}
    </>
  );
}
