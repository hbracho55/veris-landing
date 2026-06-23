import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-veris-oscuro.PNG"
            alt="Veris"
            style={{ width: 115, height: 75, marginLeft: 4 }}
          />
        </Link>
        <div className="footer-links">
          <Link href="/issuers">Emisores</Link>
          <Link href="/verifiers">Verificadores</Link>
          <a href="#">Usuarios</a>
          <a href="#">Documentación</a>
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </div>
        <div className="footer-copy">© 2026 Veris Protocol - Infrastructura Digital de Confianza.</div>
      </div>
    </footer>
  );
}
