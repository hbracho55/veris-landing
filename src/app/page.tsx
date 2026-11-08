import Link from "next/link";
import DemoTrigger from "./_components/DemoTrigger";
import LiveVerify from "./_components/LiveVerify";
import VideoFacade from "./_components/VideoFacade";
import s from "./home.module.css";

const industries = [
  { n: "01", name: "Servicios financieros", desc: "Renta e identidad verificadas para decisiones con respaldo.", href: "/financial", icon: "↗" },
  { n: "02", name: "Empleadores", desc: "Certificados laborales que hablan por tu organización.", href: "/employer", icon: "▤" },
  { n: "03", name: "Salud", desc: "Credenciales de salud con privacidad desde el origen.", href: "/healthcare", icon: "+" },
  { n: "04", name: "Educación", desc: "Títulos y certificaciones que se pueden comprobar.", href: "/education", icon: "◇" },
  { n: "05", name: "Seguros", desc: "Información verificable para simplificar cada siniestro.", href: "/insurance", icon: "◈" },
  { n: "06", name: "Inmobiliarias", desc: "Menos papeles entre una postulación y un nuevo hogar.", href: "/realstate", icon: "⌂" },
  { n: "07", name: "Gobierno", desc: "Servicios públicos conectados por confianza digital.", href: "/government", icon: "▥" },
];

export default function Home() {
  return (
    <main className={s.home}>
      <section className={s.hero} id="inicio">
        <div className={s.heroGrid} aria-hidden="true" />
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <div className={s.eyebrow}><span /> Infraestructura de confianza digital</div>
            <h1>La confianza<br />ya no se adjunta.<br /><em>Se verifica.</em></h1>
            <p>Transforma documentos en credenciales digitales. Verifica su origen, protege los datos y toma decisiones con certeza.</p>
            <div className={s.actions}>
              <DemoTrigger className={s.primary}>Conoce Veris <span aria-hidden="true">↗</span></DemoTrigger>
              <a className={s.secondary} href="#verificar">Pruébalo en vivo <span aria-hidden="true">→</span></a>
            </div>
            <div className={s.heroNotes}><span>✓ Sin compartir datos de más</span><span>✓ Verificable desde el origen</span></div>
          </div>
          <div className={s.visual} aria-label="Ejemplo ilustrativo de una credencial laboral verificable">
            <div className={s.orbit} aria-hidden="true" />
            <div className={s.origin}><span className={s.smallIcon}>▥</span><div>ORIGEN DE LA CREDENCIAL<strong>Empresa emisora</strong></div><span className={s.originCheck}>✓</span></div>
            <div className={s.credential}>
              <div className={s.cardTop}><span className={s.wordmark}>veris<span>✳</span></span><span className={s.cardPill}>CREDENCIAL DIGITAL</span></div>
              <div className={s.credentialHeading}><div className={s.documentIcon}>▤</div><div><span>EMPLEO & INGRESOS</span><h2>Certificado laboral</h2></div></div>
              <div className={s.person}><div className={s.avatar}>CM</div><div><strong>Catalina Morales</strong><span>Titular de la credencial</span></div><span className={s.personMark}>◇</span></div>
              <div className={s.cardFields}><div><span>Emisor</span><strong>Empresa Ejemplo S.A.</strong></div><div><span>Tipo de contrato</span><strong>Indefinido</strong></div><div><span>Integridad</span><strong className={s.green}>✓ Datos sin alteraciones</strong></div></div>
              <div className={s.cardBottom}><span>◈ Firmada criptográficamente</span><span>SD-JWT VC</span></div>
            </div>
            <div className={s.verified}><span className={s.verifiedIcon}>✓</span><div><strong>Confianza comprobable</strong><span>Origen · Integridad · Vigencia</span></div><span className={s.signal} aria-hidden="true">▂▅▇</span></div>
            <div className={s.exampleLabel}>Vista ilustrativa · datos ficticios</div>
          </div>
        </div>
        <div className={s.heroBottom}><span>Menos fricción. Más certeza.</span><a href="#como-funciona">Descubre una nueva forma de confiar <span aria-hidden="true">↓</span></a></div>
      </section>

      <div className={s.standards}><span>Confianza construida sobre estándares abiertos</span><div><strong>W3C Verifiable Credentials</strong><span>✳</span><strong>SD-JWT</strong><span>✳</span><strong>Identidad descentralizada</strong></div></div>

      <section className={s.section} id="como-funciona">
        <div className={s.sectionIntro}><div><span className={s.tag}>DEL DOCUMENTO A LA CERTEZA</span><h2>Menos papeles.<br /><em>Más posibilidades.</em></h2></div><p>Un PDF puede parecer auténtico. Una credencial permite comprobarlo. Veris conecta a quienes emiten información con quienes necesitan confiar en ella.</p></div>
        <div className={s.steps}>{[
          ["01", "Emite con respaldo", "Tu organización convierte información en credenciales firmadas digitalmente."],
          ["02", "Comparte con control", "Las personas llevan sus credenciales y deciden qué información presentar."],
          ["03", "Verifica con certeza", "Comprueba el origen y la integridad de los datos, sin perseguir documentos."],
        ].map(([n, title, desc]) => <article className={s.step} key={n}><div className={s.stepTop}><span>{n}</span><span aria-hidden="true">↗</span></div><h3>{title}</h3><p>{desc}</p></article>)}</div>
        <div className={s.videoRow}><div><span className={s.tag}>VERIS EN ACCIÓN</span><h3>La confianza, de principio a fin.</h3><p>Descubre cómo se conectan emisores, personas y verificadores.</p></div><div className={s.video}><VideoFacade videoId="1b3VEPeidkk" titulo="Veris — cómo funciona" /></div></div>
      </section>

      <div className={s.liveWrap}><LiveVerify /></div>

      <section className={`${s.section} ${s.ecosystem}`} id="ecosistema"><span className={s.tag}>UN ECOSISTEMA. CONFIANZA COMPARTIDA.</span><h2>Cada parte conecta.<br /><em>Todos avanzan.</em></h2><div className={s.roles}>{[
        ["▥", "Para organizaciones", "Emite", "Dale a cada credencial el respaldo de tu institución.", "/issuers", "Conocer emisión"],
        ["◈", "Para quienes deciden", "Verifica", "Comprueba la información que necesitas para dar el siguiente paso.", "/verifiers", "Conocer verificación"],
        ["◎", "Para las personas", "Comparte", "Tu información contigo. Compártela cuando tú lo decidas.", "/users", "Conocer la wallet"],
      ].map(([icon, label, title, desc, href, cta]) => <Link className={s.role} href={href} key={href}><span className={s.roleIcon} aria-hidden="true">{icon}</span><span className={s.roleLabel}>{label}</span><h3>{title}<span aria-hidden="true">↗</span></h3><p>{desc}</p><span className={s.roleCta}>{cta} →</span></Link>)}</div></section>

      <section className={s.security} id="seguridad"><div className={s.securityInner}><div className={s.securityArt} aria-hidden="true"><div className={s.securityRing}><div className={s.securityCore}>✳</div></div><span className={s.securityChip}>✓ Integridad verificable</span><span className={s.privacyChip}>◈ Privacidad por diseño</span></div><div><span className={s.tag}>LA CONFIANZA ESTÁ EN EL DISEÑO</span><h2>La información es tuya.<br /><em>El control también.</em></h2><p>Comparte evidencia verificable y revela solo lo necesario. La criptografía permite comprobar los datos sin depender de la apariencia de un documento.</p><ul><li>Credenciales con firma digital del emisor</li><li>Divulgación selectiva de información</li><li>Estándares abiertos e interoperabilidad</li></ul><Link href="/docs">Explora la documentación <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className={s.section} id="sectores"><div className={s.sectionIntro}><div><span className={s.tag}>CONFIANZA QUE SE ADAPTA A TU INDUSTRIA</span><h2>El mismo desafío.<br /><em>Nuevas soluciones.</em></h2></div><p>Donde hay información que validar, hay una mejor forma de avanzar. Encuentra el punto de partida para tu organización.</p></div><div className={s.industries}>{industries.map(i => <Link className={s.industry} href={i.href} key={i.n}><span className={s.industryIcon} aria-hidden="true">{i.icon}</span><div><h3>{i.name}</h3><p>{i.desc}</p></div><span className={s.industryArrow} aria-hidden="true">↗</span></Link>)}</div></section>

      <section className={s.cases} id="casos"><div className={s.section}><span className={s.tag}>MENOS PASOS ENTRE EL DATO Y LA DECISIÓN</span><h2>Imagina todo lo que<br /><em>puedes simplificar.</em></h2><div className={s.caseGrid}>{[
        ["FINANZAS", "Del certificado de renta a la evaluación de un crédito.", "Verifica información emitida en origen para respaldar cada evaluación.", "/financial"],
        ["TALENTO", "Del título académico a una nueva oportunidad.", "Comprueba credenciales académicas y laborales durante la contratación.", "/employer"],
        ["INMOBILIARIAS", "De una carpeta de papeles a las llaves de un hogar.", "Simplifica la validación de empleo e ingresos en una postulación.", "/realstate"],
      ].map(([label,title,desc,href]) => <Link href={href} key={label} className={s.case}><span>{label}</span><h3>{title}</h3><p>{desc}</p><span className={s.caseArrow} aria-hidden="true">↗</span></Link>)}</div></div></section>

      <section className={s.cta} id="demo"><div className={s.ctaSymbol} aria-hidden="true">✳</div><span className={s.tag}>EL SIGUIENTE PASO EMPIEZA CON UNA CONVERSACIÓN</span><h2>Hagamos de la confianza<br /><em>tu punto de partida.</em></h2><p>Descubre cómo llevar las credenciales verificables a tu organización.</p><DemoTrigger className={s.primary}>Agendar una demo <span aria-hidden="true">↗</span></DemoTrigger><div className={s.ctaNote}>Conoce la plataforma · Explora tu caso de uso · Prueba en sandbox</div></section>
    </main>
  );
}
