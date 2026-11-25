import Image from "next/image";
import Link from "next/link";
import DemoTrigger from "./_components/DemoTrigger";
import LiveVerify from "./_components/LiveVerify";
import VideoFacade from "./_components/VideoFacade";
import s from "./home.module.css";

const industries = [
  { n: "01", href: "/financial", img: "/images/industria-financiero.webp", alt: "Bancos, financieras y fintechs: identidad, ingresos y empleo verificados. Apertura digital de cuentas, autorización desde la app, productos según perfil verificado y royalty por verificación." },
  { n: "02", href: "/employer", img: "/images/industria-empleadores.webp", alt: "Empresas e instituciones empleadoras: empleo, renta y antigüedad desde el teléfono. Certificados automáticos, validación sin llamadas a RR.HH., acceso físico y digital y royalty por verificación." },
  { n: "03", href: "/healthcare", img: "/images/industria-salud.webp", alt: "Clínicas, hospitales y laboratorios: documentos firmados e interoperabilidad HL7 FHIR. Recetas, exámenes de laboratorio, licencias médicas, carnets de vacunación, informes clínicos y epicrisis." },
  { n: "04", href: "/education", img: "/images/industria-educacion.webp", alt: "Universidades e instituciones educativas: credenciales académicas que se verifican en segundos. Títulos, certificados de alumno regular y egreso, diplomas de postgrado y acreditación institucional." },
  { n: "05", href: "/insurance", img: "/images/industria-seguros.webp", alt: "Aseguradoras y corredoras de seguros: pólizas y coberturas verificables. Certificados y pólizas digitales, constancias de pago de prima y credenciales de beneficiarios para siniestros." },
  { n: "06", href: "/realstate", img: "/images/industria-inmobiliarias.webp", alt: "Inmobiliarias y corredoras de propiedades: perfil y solvencia verificados desde un QR. Solvencia para arriendos y ventas, precalificación de proyectos, identidad en contratos y acceso a propiedades premium." },
  { n: "07", href: "/government", img: "/images/industria-gobierno.webp", alt: "Sector público e instituciones de gobierno: acreditaciones trazables desde el teléfono. Identidad ciudadana, beneficios y subsidios, trámites municipales digitales y acceso para funcionarios." },
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
        </div>
        <div className={s.heroMedia}>
          <Image
            src="/images/inicio-hero.webp"
            alt="Mano sosteniendo un teléfono con credenciales verificadas de identidad, educación, salud, trabajo y finanzas, sobre Santiago y la cordillera de noche"
            fill
            preload
            sizes="100vw"
          />
        </div>
        <div className={s.heroBottom}><span>Menos fricción. Más certeza.</span><a href="#como-funciona">Descubre una nueva forma de confiar <span aria-hidden="true">↓</span></a></div>
      </section>

      <div className={s.standards}><span>Confianza construida sobre estándares abiertos</span><div><strong>W3C Verifiable Credentials</strong><span>✳</span><strong>SD-JWT</strong><span>✳</span><strong>Identidad descentralizada</strong></div></div>

      <section className={`${s.section} ${s.problem}`} id="problema">
        <div className={s.sectionIntro}>
          <div><span className={s.tag}>EL PROBLEMA</span><h2>Cada día tomas decisiones críticas<br /><em>sobre documentos que cualquiera puede modificar.</em></h2></div>
          <p>Ya sea que emitas o verifiques documentos, el modelo actual tiene el mismo problema: nadie puede saber con certeza si lo que recibe es real.</p>
        </div>
        <div className={s.pains}>
          <div className={s.pain}><Image src="/images/problema-emites.webp" alt="Si emites: tu validador le traspasa el problema a quien verifica, porque cada documento se revisa a mano, sin automatización. Y tus documentos se falsifican sin que lo sepas: tu reputación sufre antes de que te enteres." width={1920} height={1200} sizes="(max-width: 760px) 100vw, 590px" /></div>
          <div className={s.pain}><Image src="/images/problema-verificas.webp" alt="Si verificas: validar es manual, documento por documento, y no escala, porque revisar el portal de cada emisor toma tiempo. Y cuando detectas el fraude, ya es tarde: la presión por responder rápido hace que decidas antes de terminar de verificar." width={1920} height={1200} sizes="(max-width: 760px) 100vw, 590px" /></div>
        </div>
      </section>

      <section className={s.section} id="como-funciona">
        <div className={s.sectionIntro}><div><span className={s.tag}>DEL DOCUMENTO A LA CERTEZA</span><h2>Menos papeles.<br /><em>Más posibilidades.</em></h2></div><p>Un PDF puede parecer auténtico. Una credencial permite comprobarlo. Veris conecta a quienes emiten información con quienes necesitan confiar en ella.</p></div>
        <figure className={s.flow}>
          <Image
            src="/images/flujo-credenciales-v2.webp"
            alt="Flujo en tres pasos. Emite con respaldo: tu organización convierte información en credenciales firmadas digitalmente. Comparte con control: las personas llevan sus credenciales y deciden qué información presentar. Verifica con certeza: comprueba el origen y la integridad de los datos, sin perseguir documentos."
            width={1920}
            height={1080}
            sizes="(max-width: 1280px) 100vw, 1180px"
          />
        </figure>
        <div className={s.videoRow}><div><span className={s.tag}>VERIS EN ACCIÓN</span><h3>La confianza, de principio a fin.</h3><p>Descubre cómo se conectan emisores, personas y verificadores.</p></div><div className={s.video}><VideoFacade videoId="1b3VEPeidkk" titulo="Veris — cómo funciona" /></div></div>
      </section>

      <div className={s.liveWrap}><LiveVerify /></div>

      <section className={`${s.section} ${s.ecosystem}`} id="ecosistema"><span className={s.tag}>UN ECOSISTEMA. CONFIANZA COMPARTIDA.</span><h2>Cada parte conecta.<br /><em>Todos avanzan.</em></h2><div className={s.roles}>{[
        ["▥", "Para organizaciones", "Emite", "Dale a cada credencial el respaldo de tu institución.", "/issuers", "Conocer emisión", "/images/ecosistema-emite-v2.webp"],
        ["◈", "Para quienes deciden", "Verifica", "Comprueba la información que necesitas para dar el siguiente paso.", "/verifiers", "Conocer verificación", "/images/ecosistema-verifica.webp"],
        ["◎", "Para las personas", "Comparte", "Tu información contigo. Compártela cuando tú lo decidas.", "/users", "Conocer la wallet", "/images/ecosistema-comparte.webp"],
      ].map(([icon, label, title, desc, href, cta, img]) => img
        ? <Link className={`${s.role} ${s.roleImage}`} href={href} key={href}><Image src={img} alt={`${label}: ${title}. ${desc}`} width={1920} height={1080} sizes="(max-width: 760px) 100vw, 400px" /><span className={s.roleCta}>{cta} →</span></Link>
        : <Link className={s.role} href={href} key={href}><span className={s.roleIcon} aria-hidden="true">{icon}</span><span className={s.roleLabel}>{label}</span><h3>{title}<span aria-hidden="true">↗</span></h3><p>{desc}</p><span className={s.roleCta}>{cta} →</span></Link>)}</div></section>

      <section className={s.security} id="seguridad"><div className={s.securityInner}><div className={s.securityMedia}><Image src="/images/seguridad.webp" alt="Credencial digital con un candado que representa la privacidad por diseño y un sello de verificación que representa la integridad verificable" width={1920} height={1080} sizes="(max-width: 760px) 100vw, 545px" /></div><div><span className={s.tag}>LA CONFIANZA ESTÁ EN EL DISEÑO</span><h2>La información es tuya.<br /><em>El control también.</em></h2><p>Comparte evidencia verificable y revela solo lo necesario. La criptografía permite comprobar los datos sin depender de la apariencia de un documento.</p><ul><li>Credenciales con firma digital del emisor</li><li>Divulgación selectiva de información</li><li>Estándares abiertos e interoperabilidad</li></ul><Link href="/docs">Explora la documentación <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className={s.section} id="sectores"><div className={s.sectionIntro}><div><span className={s.tag}>CONFIANZA QUE SE ADAPTA A TU INDUSTRIA</span><h2>El mismo desafío.<br /><em>Nuevas soluciones.</em></h2></div><p>Donde hay información que validar, hay una mejor forma de avanzar. Encuentra el punto de partida para tu organización.</p></div><div className={s.industries}>{industries.map(i => <Link className={s.industry} href={i.href} key={i.n}><Image src={i.img} alt={i.alt} width={1920} height={1080} sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 380px" /></Link>)}</div></section>

      <section className={s.cases} id="casos"><div className={s.section}><span className={s.tag}>MENOS PASOS ENTRE EL DATO Y LA DECISIÓN</span><h2>Imagina todo lo que<br /><em>puedes simplificar.</em></h2><div className={s.caseGrid}>{[
        ["FINANZAS", "Del certificado de renta a la evaluación de un crédito.", "Verifica información emitida en origen para respaldar cada evaluación.", "/financial", "/images/caso-finanzas.webp"],
        ["TALENTO", "Del título académico a una nueva oportunidad.", "Comprueba credenciales académicas y laborales durante la contratación.", "/employer", "/images/caso-talento.webp"],
        ["INMOBILIARIAS", "De una carpeta de papeles a las llaves de un hogar.", "Simplifica la validación de empleo e ingresos en una postulación.", "/realstate", "/images/caso-inmobiliarias.webp"],
      ].map(([label,title,desc,href,img]) => <Link href={href} key={label} className={s.case}><Image src={img} alt={`${label.charAt(0)}${label.slice(1).toLowerCase()}: ${title} ${desc}`} width={1920} height={1080} sizes="(max-width: 760px) 100vw, (max-width: 1050px) 33vw, 380px" /></Link>)}</div></div></section>

      <section className={s.cta} id="demo"><div className={s.ctaSymbol} aria-hidden="true">✳</div><span className={s.tag}>EL SIGUIENTE PASO EMPIEZA CON UNA CONVERSACIÓN</span><h2>Hagamos de la confianza<br /><em>tu punto de partida.</em></h2><p>Descubre cómo llevar las credenciales verificables a tu organización.</p><DemoTrigger className={s.primary}>Agendar una demo <span aria-hidden="true">↗</span></DemoTrigger><div className={s.ctaNote}>Conoce la plataforma · Explora tu caso de uso · Prueba en sandbox</div></section>
    </main>
  );
}
