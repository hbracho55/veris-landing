"use client";
import { useEffect } from "react";
import DemoTrigger from "../_components/DemoTrigger";

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1E3564;
  --navy-mid:#243A6A;
  --navy-light:#2E4D88;
  --blue:#4472C4;
  --blue-soft:#5B8FC4;
  --magenta:#C0388A;
  --magenta-soft:#D058A0;
  --ice:#EEF3FB;
  --ice-mid:#D8E5F5;
  --white:#FFFFFF;
  --text-body:#2A3650;
  --text-muted:#5A6A8A;
  --text-light:#8A9BB8;
  --border:#D0DCF0;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text-body);line-height:1.6;overflow-x:hidden}

/* HERO */
.hero{min-height:100vh;background:var(--navy);position:relative;display:flex;align-items:center;overflow:hidden;padding-top:62px}
.hero-bg{position:absolute;inset:0;overflow:hidden}
.hero-orb1{position:absolute;top:-15%;right:-8%;width:680px;height:680px;background:radial-gradient(circle at 40% 40%, rgba(192,56,138,.25) 0%, rgba(68,114,196,.12) 50%, transparent 70%);border-radius:50%}
.hero-orb2{position:absolute;bottom:-20%;left:-10%;width:520px;height:520px;background:radial-gradient(circle at 60% 60%, rgba(68,114,196,.2) 0%, transparent 65%);border-radius:50%}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)}
.hero-inner{max-width:1140px;margin:0 auto;padding:5rem 2rem;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;position:relative;z-index:2}
.hero-tag{display:inline-flex;align-items:center;gap:.5rem;background:rgba(192,56,138,.15);border:1px solid rgba(192,56,138,.35);color:#E880C0;font-size:.78rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;padding:.35rem .85rem;border-radius:100px;margin-bottom:1.5rem}
.hero-tag::before{content:'';width:6px;height:6px;background:#E880C0;border-radius:50%;animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
.hero h1{font-family:'DM Serif Display',serif;font-size:3.2rem;line-height:1.1;color:#fff;font-weight:400;margin-bottom:1.5rem;letter-spacing:-.02em}
.hero h1 em{font-style:italic;color:#E880C0}
.hero-sub{font-size:1.1rem;color:rgba(255,255,255,.65);line-height:1.7;margin-bottom:2.5rem;max-width:480px;font-weight:300}
.hero-actions{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}
.btn-primary{background:var(--magenta);color:#fff;padding:.85rem 1.75rem;border-radius:8px;font-size:1rem;font-weight:500;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;border:none;cursor:pointer}
.btn-primary:hover{background:#A8307A;transform:translateY(-1px)}
.btn-ghost{background:transparent;color:rgba(255,255,255,.8);padding:.85rem 1.5rem;border-radius:8px;font-size:1rem;font-weight:400;text-decoration:none;transition:all .2s;border:1px solid rgba(255,255,255,.2);display:inline-flex;align-items:center;gap:.5rem}
.btn-ghost:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4);color:#fff}
.hero-right{position:relative}
.hero-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:2rem;backdrop-filter:blur(4px)}
.hero-card-title{font-size:.75rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:1.25rem}
.flow-step{display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.25rem}
.flow-step:last-child{margin-bottom:0}
.step-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem}
.step-icon.s1{background:rgba(68,114,196,.25);border:1px solid rgba(68,114,196,.4)}
.step-icon.s2{background:rgba(192,56,138,.2);border:1px solid rgba(192,56,138,.35)}
.step-icon.s3{background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.35)}
.step-icon.s4{background:rgba(192,56,138,.2);border:1px solid rgba(192,56,138,.35)}
.step-content .step-title{font-size:.875rem;font-weight:500;color:#fff;line-height:1.3}
.step-content .step-desc{font-size:.78rem;color:rgba(255,255,255,.45);margin-top:.2rem}
.step-arrow{text-align:center;color:rgba(255,255,255,.2);font-size:.8rem;margin:-.2rem 0 -.2rem 1.1rem}
.hero-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.08)}
.stat-item{text-align:center}
.stat-num{font-family:'DM Serif Display',serif;font-size:1.8rem;color:#fff;line-height:1}
.stat-label{font-size:.7rem;color:rgba(255,255,255,.4);margin-top:.25rem;text-transform:uppercase;letter-spacing:.06em}
.stat-accent{color:var(--magenta-soft)}

/* SOCIAL PROOF BAND */
.proof-band{background:var(--navy-mid);border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);padding:1.5rem 2rem}
.proof-inner{max-width:1140px;margin:0 auto;display:flex;align-items:center;gap:2.5rem;flex-wrap:wrap}
.proof-label{font-size:.75rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);white-space:nowrap}
.proof-logos{display:flex;align-items:center;gap:2.5rem;flex-wrap:wrap}
.proof-logo{font-size:.95rem;font-weight:500;color:rgba(255,255,255,.35);letter-spacing:-.01em}

/* SECTIONS */
.section{padding:6rem 2rem}
.section-inner{max-width:1140px;margin:0 auto}
.section-tag{display:inline-block;font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--magenta);margin-bottom:.75rem}
.section-title{font-family:'DM Serif Display',serif;font-size:2.4rem;line-height:1.15;color:var(--navy);font-weight:400;margin-bottom:1rem;letter-spacing:-.02em}
.section-sub{font-size:1.05rem;color:var(--text-muted);max-width:560px;line-height:1.7;font-weight:300}

/* PROBLEM */
.problem-section{background:#fff}
.problem-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.problem-visual{position:relative}
.problem-card{background:var(--ice);border:1px solid var(--border);border-radius:14px;padding:1.75rem;position:relative;overflow:hidden}
.problem-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--magenta))}
.problem-items{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}
.problem-item{display:flex;align-items:flex-start;gap:1rem;padding:1.25rem;background:#fff;border:1px solid var(--border);border-radius:10px}
.problem-item-icon{width:38px;height:38px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem}
.p-red{background:#FEE8E8;color:#C0383A}
.p-amber{background:#FEF4E0;color:#B07020}
.p-blue{background:var(--ice-mid);color:var(--blue)}
.p-purple{background:#F0EEFE;color:#5C4AB0}
.problem-item-title{font-size:.875rem;font-weight:500;color:var(--navy);margin-bottom:.2rem}
.problem-item-desc{font-size:.78rem;color:var(--text-muted);line-height:1.5}
.problem-cost{background:var(--navy);border-radius:14px;padding:1.75rem;margin-top:1.5rem;display:flex;align-items:center;justify-content:space-between}
.cost-label{font-size:.8rem;color:rgba(255,255,255,.5)}
.cost-val{font-family:'DM Serif Display',serif;font-size:2.5rem;color:#fff;line-height:1}
.cost-note{font-size:.7rem;color:rgba(255,255,255,.35);margin-top:.25rem}

/* SOLUTION */
.solution-section{background:var(--ice)}
.how-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-top:3rem;position:relative}
.how-grid::before{content:'';position:absolute;top:32px;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,var(--border),var(--border),transparent);z-index:0}
.how-step{text-align:center;position:relative;z-index:1}
.how-num{width:64px;height:64px;border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;font-family:'DM Serif Display',serif;font-size:1.5rem;font-weight:400}
.hn1{background:var(--blue);color:#fff}
.hn2{background:var(--magenta);color:#fff}
.hn3{background:var(--navy-light);color:#fff}
.hn4{background:#1D9E75;color:#fff}
.how-step h3{font-size:.95rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.how-step p{font-size:.82rem;color:var(--text-muted);line-height:1.5}

/* BENEFITS */
.benefits-section{background:#fff}
.benefits-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3.5rem}
.benefit-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.benefit-card{border-radius:14px;padding:1.75rem;border:1px solid var(--border);background:#fff;position:relative;overflow:hidden;transition:box-shadow .2s,transform .2s}
.benefit-card:hover{box-shadow:0 8px 32px rgba(30,53,100,.08);transform:translateY(-3px)}
.benefit-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;opacity:0;transition:opacity .2s}
.benefit-card:hover::after{opacity:1}
.bc-blue::after{background:var(--blue)}
.bc-magenta::after{background:var(--magenta)}
.bc-green::after{background:#1D9E75}
.benefit-icon{width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem;font-size:1.2rem}
.bi-blue{background:var(--ice-mid);color:var(--blue)}
.bi-magenta{background:#FAE0F2;color:var(--magenta)}
.bi-green{background:#E0F5EE;color:#1D9E75}
.benefit-card h3{font-size:1rem;font-weight:600;color:var(--navy);margin-bottom:.6rem}
.benefit-card p{font-size:.84rem;color:var(--text-muted);line-height:1.6}
.benefit-highlight{margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border);font-size:.78rem;font-weight:500;color:var(--blue)}
.benefit-highlight.m{color:var(--magenta)}
.benefit-highlight.g{color:#1D9E75}

/* SECURITY */
.security-section{background:var(--navy);position:relative;overflow:hidden}
.security-section::before{content:'';position:absolute;top:-50%;right:-20%;width:600px;height:600px;background:radial-gradient(circle, rgba(192,56,138,.15) 0%, transparent 65%);border-radius:50%}
.security-inner{position:relative;z-index:1}
.security-title{font-family:'DM Serif Display',serif;font-size:2.4rem;color:#fff;font-weight:400;margin-bottom:.75rem;letter-spacing:-.02em}
.security-sub{font-size:1.05rem;color:rgba(255,255,255,.55);max-width:520px;font-weight:300;margin-bottom:3rem}
.security-pillars{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}
.pillar{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:1.5rem}
.pillar-icon{font-size:1.4rem;margin-bottom:1rem}
.pillar h3{font-size:.9rem;font-weight:600;color:#fff;margin-bottom:.5rem}
.pillar p{font-size:.78rem;color:rgba(255,255,255,.45);line-height:1.6}
.pillar-tag{display:inline-block;margin-top:.75rem;font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.25rem .65rem;border-radius:100px}
.pt-blue{background:rgba(68,114,196,.2);color:#90B8F0}
.pt-green{background:rgba(29,158,117,.2);color:#5DD4A8}
.pt-magenta{background:rgba(192,56,138,.2);color:#E880C0}
.pt-amber{background:rgba(180,120,20,.2);color:#E8A840}

/* USE CASES */
.usecases-section{background:var(--ice)}
.cases-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.case-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.75rem;transition:all .2s}
.case-card:hover{border-color:var(--blue);box-shadow:0 4px 20px rgba(68,114,196,.1)}
.case-num{font-family:'DM Serif Display',serif;font-size:3rem;line-height:1;color:var(--ice-mid);margin-bottom:.75rem}
.case-card h3{font-size:.95rem;font-weight:600;color:var(--navy);margin-bottom:.6rem}
.case-card p{font-size:.82rem;color:var(--text-muted);line-height:1.6}

/* INTEGRATION */
.integration-section{background:#fff}
.int-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.int-list{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}
.int-item{display:flex;align-items:center;gap:1rem;padding:1rem 1.25rem;background:var(--ice);border:1px solid var(--border);border-radius:10px}
.int-dot{width:8px;height:8px;border-radius:50%;background:var(--blue);flex-shrink:0}
.int-dot.m{background:var(--magenta)}
.int-dot.g{background:#1D9E75}
.int-text{font-size:.875rem;font-weight:500;color:var(--navy)}
.int-sub{font-size:.78rem;color:var(--text-muted)}
.int-code{background:var(--navy);border-radius:14px;padding:1.75rem;font-family:'Courier New',monospace;font-size:.78rem;overflow:hidden}
.code-bar{display:flex;gap:.4rem;margin-bottom:1.25rem}
.code-bar span{width:10px;height:10px;border-radius:50%}
.cb1{background:#FF5F57}
.cb2{background:#FEBC2E}
.cb3{background:#28C840}
.code-comment{color:rgba(255,255,255,.3)}
.code-key{color:#90B8F0}
.code-val{color:#E880C0}
.code-str{color:#5DD4A8}
.code-line{margin:2px 0;line-height:1.8}

/* CTA */
.cta-section{background:var(--navy);position:relative;overflow:hidden;padding:7rem 2rem}
.cta-orb{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:900px;height:500px;background:radial-gradient(ellipse, rgba(192,56,138,.2) 0%, rgba(68,114,196,.1) 40%, transparent 70%);border-radius:50%}
.cta-inner{position:relative;z-index:1;text-align:center;max-width:680px;margin:0 auto}
.cta-inner h2{font-family:'DM Serif Display',serif;font-size:2.8rem;color:#fff;font-weight:400;margin-bottom:1.25rem;line-height:1.15;letter-spacing:-.02em}
.cta-inner h2 em{font-style:italic;color:#E880C0}
.cta-inner p{font-size:1.05rem;color:rgba(255,255,255,.6);margin-bottom:2.5rem;font-weight:300;line-height:1.7}
.cta-buttons{display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap}
.cta-trust{display:flex;align-items:center;justify-content:center;gap:2rem;margin-top:2.5rem;flex-wrap:wrap}
.trust-item{display:flex;align-items:center;gap:.5rem;font-size:.78rem;color:rgba(255,255,255,.4)}
.trust-icon{font-size:.9rem}


/* ANIMATIONS */
.fade-in{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}
.fade-in.visible{opacity:1;transform:translateY(0)}

@media(max-width:900px){
  .hero-inner,.problem-grid,.benefits-header,.int-grid{grid-template-columns:1fr}
  .how-grid,.benefit-cards,.security-pillars,.cases-grid{grid-template-columns:1fr 1fr}
  .hero-right{display:none}
  .hero h1{font-size:2.4rem}
  .how-grid::before{display:none}
}
@media(max-width:600px){
  .how-grid,.benefit-cards,.security-pillars,.cases-grid{grid-template-columns:1fr}
  .section{padding:4rem 1.25rem}
  .nav-links{display:none}
}
`;

export default function IssuersPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb1"></div>
          <div className="hero-orb2"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">Para Organizaciones Emisoras</div>
            <h1>
              Transforma los documentos que emites en credenciales que{" "}
              <em>nadie puede falsificar</em>
            </h1>
            <p className="hero-sub">
              Tu organización ya genera los datos más valiosos de tus usuarios — laborales, clínicos, académicos o de identidad. Veris te da la
              infraestructura para convertirlos en <strong>credenciales digitales verificables</strong> que cualquier institución valida en segundos, crear un nuevo canal
              de ingresos y cumplir con la normativa vigente — sin tocar tu arquitectura core.
            </p>
            <div className="hero-actions">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
              <a href="#como-funciona" className="btn-ghost">Ver cómo funciona</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-title">Flujo de credencial verificable</div>
              <div className="flow-step">
                <div className="step-icon s1">🏢</div>
                <div className="step-content">
                  <div className="step-title">Tu plataforma emite el documento</div>
                  <div className="step-desc">Liquidación, certificado laboral, antigüedad</div>
                </div>
              </div>
              <div className="step-arrow">↓</div>
              <div className="flow-step">
                <div className="step-icon s2">🔐</div>
                <div className="step-content">
                  <div className="step-title">Veris firma y cifra criptográficamente</div>
                  <div className="step-desc">Sin almacenar datos personales</div>
                </div>
              </div>
              <div className="step-arrow">↓</div>
              <div className="flow-step">
                <div className="step-icon s3">📱</div>
                <div className="step-content">
                  <div className="step-title">El trabajador la guarda en su billetera digital</div>
                  <div className="step-desc">Control total sobre sus propios datos</div>
                </div>
              </div>
              <div className="step-arrow">↓</div>
              <div className="flow-step">
                <div className="step-icon s4">✅</div>
                <div className="step-content">
                  <div className="step-title">Validación instantánea sin intermediarios</div>
                  <div className="step-desc">Banco, aseguradora, inmobiliaria — en segundos</div>
                </div>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-num stat-accent">25%</div>
                  <div className="stat-label">Revenue share</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">&lt;2s</div>
                  <div className="stat-label">Tiempo validación</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">$0</div>
                  <div className="stat-label">Costo datos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAND */}
      <div className="proof-band">
        <div className="proof-inner">
          <div className="proof-label">Diseñado para plataformas como</div>
          <div className="proof-logos">
            <div className="proof-logo">Gestión de nómina</div>
            <div className="proof-logo">·</div>
            <div className="proof-logo">Plataformas HCM</div>
            <div className="proof-logo">·</div>
            <div className="proof-logo">ERP con módulo RRHH</div>
            <div className="proof-logo">·</div>
            <div className="proof-logo">Sistemas de liquidaciones</div>
          </div>
        </div>
      </div>

      {/* PROBLEMA */}
      <section className="section problem-section" id="problema">
        <div className="section-inner">
          <div className="problem-grid">
            <div className="problem-content fade-in">
              <div className="section-tag">El problema</div>
              <h2 className="section-title">
                Los documentos ya no son suficientes para un mundo digital. Cualquiera los puede <em style={{color:'#E880C0'}}>falsificar</em>.
              </h2>
              <p className="section-sub">
                Tu organización invierte tiempo y recursos en generar documentos que son la base de decisiones críticas para tus usuarios. 
                El problema es que un PDF, una hoja firmada o un certificado en papel se pueden editar con herramientas gratuitas en menos de 5 minutos.
              </p>
              <p className="section-sub" style={{ marginTop: "1rem" }}>
                Cada solicitud de crédito, arriendo o seguro desencadena un proceso manual que
                involucra a tu equipo de soporte, expone a tus clientes y deteriora la experiencia
                de tu producto.
              </p>
            </div>
            <div className="problem-visual fade-in" style={{ transitionDelay: ".15s" }}>
              <div className="problem-card">
                <div
                  style={{
                    fontSize: ".75rem",
                    fontWeight: 600,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  Lo que tu equipo enfrenta hoy
                </div>
                <div className="problem-items">
                  <div className="problem-item">
                    <div className="problem-item-icon p-red">⚠️</div>
                    <div>
                      <div className="problem-item-title">El fraude daña tu reputación</div>
                      <div className="problem-item-desc">
                        Cuando alguien falsifica un documento tuyo, tu marca es la víctima. 
                        Las instituciones verificadoras dejan de confiar en lo que emites..
                      </div>
                    </div>
                  </div>
                  <div className="problem-item">
                    <div className="problem-item-icon p-amber">📞</div>
                    <div>
                      <div className="problem-item-title">Las verificaciones saturan tu operación</div>
                      <div className="problem-item-desc">
                        Llamadas de verificación, reenvíos de documentos, validaciones manuales.
                        Costos que escalan con tu base de usuarios.
                      </div>
                    </div>
                  </div>
                  <div className="problem-item">
                    <div className="problem-item-icon p-blue">⚖️</div>
                    <div>
                      <div className="problem-item-title">La normativa ya cambió</div>
                      <div className="problem-item-desc">
                        Ley de Protección de Datos, Ley Fintech, regulaciones sanitarias. 
                        El modelo de papel y PDF no cumple con los requisitos de portabilidad y consentimiento.
                      </div>
                    </div>
                  </div>
                  <div className="problem-item">
                    <div className="problem-item-icon p-purple">💸</div>
                    <div>
                      <div className="problem-item-title">Emites valor que otros monetizan sin pagarte</div>
                      <div className="problem-item-desc">
                        Bancos, aseguradoras y empleadores consultan tus documentos miles de veces al año para tomar decisiones. 
                        Hoy lo hacen sin compensarte. Con Veris, cada validación genera un ingreso directo para tu organización.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="section solution-section" id="como-funciona">
        <div className="section-inner">
          <div
            style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
            className="fade-in"
          >
            <div className="section-tag">La solución</div>
            <h2 className="section-title">
              Tu sistema emite. Veris lo hace <em>verificable.</em>
            </h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              Veris no reemplaza tus procesos. Se conecta a tu arquitectura actual mediante APIs / Webhooks y 
              transforma cada documento emitido en una credencial criptográficamente segura.
            </p>
          </div>
          <div className="how-grid">
            <div className="how-step fade-in" style={{ transitionDelay: ".1s" }}>
              <div className="how-num hn1">1</div>
              <h3>Tu sistema emite como siempre</h3>
              <p>
                Liquidación, receta, título o constancia. El Veris Adapter recibe el dato sin modificar tu flujo operativo ni tu arquitectura core.
              </p>
            </div>
            <div className="how-step fade-in" style={{ transitionDelay: ".2s" }}>
              <div className="how-num hn2">2</div>
              <h3>Veris firma criptográficamente y entrega</h3>
              <p>
                El documento se convierte en una credencial con firma W3C Verifiable Credentials y lo envía a la
                billetera digital del usuario.
              </p>
            </div>
            <div className="how-step fade-in" style={{ transitionDelay: ".3s" }}>
              <div className="how-num hn3">3</div>
              <h3>El usuario comparte</h3>
              <p>
                La persona tiene su credencial en su billetera digital. Posee control total sobre
                cuales datos quiere compartir y a quién se los muestra. Consentimiento explícito en cada uso.
              </p>
            </div>
            <div className="how-step fade-in" style={{ transitionDelay: ".4s" }}>
              <div className="how-num hn4">4</div>
              <h3>Validación instantánea</h3>
              <p>
                El verificador (banco, aseguradora, farmacia, empleador) confirma la autenticidad en segundos contra
                la fuente original. Tú recibes la regalía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section benefits-section" id="beneficios">
        <div className="section-inner">
          <div className="benefits-header fade-in">
            <div>
              <div className="section-tag">Beneficios para emisores</div>
              <h2 className="section-title">
                No solo proteges tu marca.<br/><em style={{color:'#E880C0'}}>También abres un nuevo negocio.</em>
              </h2>
            </div>
            <p className="section-sub">
              Cada credencial que emites a través de Veris trabaja para ti: reduce costos
              operativos, protege tu marca y genera ingresos cada vez que un tercero la valida
              satisfactoriamente.
            </p>
          </div>
          <div className="benefit-cards">
            <div className="benefit-card bc-blue fade-in" style={{ transitionDelay: ".1s" }}>
              <div className="benefit-icon bi-blue">💸</div>
              <h3>Gratis para ti. El verificador paga.</h3>
              <p>
                Emitir credenciales no tiene ningún costo para tu organización. 
                Es el banco, la aseguradora o la farmacia quien paga por acceder a datos verificados — y tú recibes el 25% de cada transacción.
              </p>
              <div className="benefit-highlight">Nuevo flujo de ingresos sin desarrollo adicional</div>
            </div>
            <div className="benefit-card bc-magenta fade-in" style={{ transitionDelay: ".2s" }}>
              <div className="benefit-icon bi-magenta">🔒</div>
              <h3>Protección de marca garantizada</h3>
              <p>
                Las credenciales emitidas con Veris son criptográficamente inmutables. El fraude
                documental que hoy daña tu reputación deja de ser posible.
              </p>
              <div className="benefit-highlight m">Firma W3C Verifiable Credentials estándar</div>
            </div>
            <div className="benefit-card bc-green fade-in" style={{ transitionDelay: ".3s" }}>
              <div className="benefit-icon bi-green">⚙️</div>
              <h3>Cero carga operativa adicional</h3>
              <p>
                Sin almacenamiento de datos personales. Sin responsabilidad sobre brechas. Sin
                llamadas de verificación. Tu equipo de soporte deja de ser parte del flujo de validación.
              </p>
              <div className="benefit-highlight g">Cero fuga de datos desde el diseño</div>
            </div>
            <div className="benefit-card bc-blue fade-in" style={{ transitionDelay: ".4s" }}>
              <div className="benefit-icon bi-blue">📊</div>
              <h3>Visibilidad total con el Veris Control Center</h3>
              <p>
                Dashboard en tiempo real con métricas de credenciales emitidas, validaciones
                realizadas, ingresos generados y auditoría completa de cada operación.
              </p>
              <div className="benefit-highlight">Reportería lista para compliance regulatorio</div>
            </div>
            <div className="benefit-card bc-magenta fade-in" style={{ transitionDelay: ".5s" }}>
              <div className="benefit-icon bi-magenta">✅</div>
              <h3>Cumplimiento normativo automático</h3>
              <p>
                Portabilidad, consentimiento explícito y minimización de datos incorporados en el
                flujo. Cumples con la Ley de Protección de Datos y normativas sectoriales sin rediseñar tu arquitectura.
              </p>
              <div className="benefit-highlight m">
                Compatible con Regulaciones Chilenas e Internacionales
              </div>
            </div>
            <div className="benefit-card bc-green fade-in" style={{ transitionDelay: ".6s" }}>
              <div className="benefit-icon bi-green">🚀</div>
              <h3>Diferenciación competitiva real</h3>
              <p>
                Ser el emisor de credenciales verificables en tu mercado no es una funcionalidad
                más — es posicionarte como la fuente de verdad de tu sector, antes que lo haga otro.
              </p>
              <div className="benefit-highlight g">Ventaja de primer movimiento en LATAM</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section className="section security-section" id="seguridad">
        <div className="section-inner security-inner">
          <div className="fade-in" style={{ maxWidth: "580px" }}>
            <div className="section-tag" style={{ color: "#E880C0" }}>
              Seguridad y privacidad
            </div>
            <h2 className="security-title">Construido para equipos que no pueden equivocarse</h2>
            <p className="security-sub">
              Veris fue diseñado por defecto con los principios de seguridad que los equipos de
              tecnología y compliance exigen antes de firmar cualquier integración.
            </p>
          </div>
          <div className="security-pillars fade-in" style={{ transitionDelay: ".2s" }}>
            <div className="pillar">
              <div className="pillar-icon">🔐</div>
              <h3>Zero Trust</h3>
              <p>
                Ninguna entidad se asume confiable por defecto. Cada operación es autenticada y
                autorizada de forma independiente.
              </p>
              <div className="pillar-tag pt-blue">Arquitectura</div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🛡️</div>
              <h3>Privacy by Design</h3>
              <p>
                La privacidad no es una capa adicional — está incorporada en cada componente del
                sistema desde su diseño original.
              </p>
              <div className="pillar-tag pt-green">Normativa</div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🗂️</div>
              <h3>Zero Data Liability</h3>
              <p>
                Los datos personales no se almacenan en Veris. El emisor nunca acumula
                responsabilidad sobre información sensible de terceros.
              </p>
              <div className="pillar-tag pt-magenta">Compliance</div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">📋</div>
              <h3>Consentimiento explícito</h3>
              <p>
                Cada validación requiere autorización activa del titular. Trazabilidad completa
                de quién accedió a qué y cuándo.
              </p>
              <div className="pillar-tag pt-amber">Auditoría</div>
            </div>
          </div>
          <div
            className="fade-in"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "2rem",
              transitionDelay: ".35s",
            }}
          >
            {[
              "W3C Verifiable Credentials",
              "OpenID Connect",
              "Ley 21.096 — Protección de Datos",
              "Ley Fintech",
              "ISO 27001 aligned",
            ].map((label) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: "8px",
                  padding: ".6rem 1.1rem",
                  fontSize: ".78rem",
                  color: "rgba(255,255,255,.55)",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="section usecases-section" id="casos">
        <div className="section-inner">
          <div
            className="fade-in"
            style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto" }}
          >
            <div className="section-tag">Casos de uso</div>
            <h2 className="section-title">
              Todo lo que tu plataforma ya emite puede convertirse en una credencial verificable
            </h2>
          </div>
          <div className="cases-grid">
            <div className="case-card fade-in" style={{ transitionDelay: ".1s" }}>
              <div className="case-num">01</div>
              <h3>Liquidaciones de sueldo</h3>
              <p>
                El caso de mayor volumen. Cada liquidación que emites puede convertirse en una
                credencial de renta verificable para créditos, arriendos y seguros.
              </p>
            </div>
            <div className="case-card fade-in" style={{ transitionDelay: ".15s" }}>
              <div className="case-num">02</div>
              <h3>Certificados laborales</h3>
              <p>
                Antigüedad, cargo, jornada y estado contractual. Verificables en segundos, sin
                que el empleador tenga que responder correos o llamadas.
              </p>
            </div>
            <div className="case-card fade-in" style={{ transitionDelay: ".2s" }}>
              <div className="case-num">03</div>
              <h3>Comprobantes de renta</h3>
              <p>
                El documento más solicitado en procesos financieros. Con Veris, tu plataforma deja
                de ser la que reenvía el PDF y pasa a ser la fuente de verdad.
              </p>
            </div>
            <div className="case-card fade-in" style={{ transitionDelay: ".25s" }}>
              <div className="case-num">04</div>
              <h3>Historial de cotizaciones</h3>
              <p>
                Credenciales de continuidad previsional para trámites AFP, FONASA y Cajas de
                Compensación, directamente desde la fuente emisora.
              </p>
            </div>
            <div className="case-card fade-in" style={{ transitionDelay: ".3s" }}>
              <div className="case-num">05</div>
              <h3>Certificaciones internas</h3>
              <p>
                Capacitaciones, cursos internos, competencias y habilidades verificadas. Tu
                plataforma como emisor de reputación profesional.
              </p>
            </div>
            <div className="case-card fade-in" style={{ transitionDelay: ".35s" }}>
              <div className="case-num">06</div>
              <h3>Finiquitos y desvinculaciones</h3>
              <p>
                Documentación de término laboral verificable, útil para procesos de
                indemnización, OMIL, seguros de cesantía y recontrataciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRACIÓN */}
      <section className="section integration-section" id="integracion">
        <div className="section-inner">
          <div className="int-grid">
            <div className="fade-in">
              <div className="section-tag">Integración técnica</div>
              <h2 className="section-title">
                5 a 10 días de integración. Sin tocar tu arquitectura core.
              </h2>
              <p className="section-sub">
                Veris se conecta a tu sistema mediante API REST y Webhooks estándar. No requiere
                migración de datos, no modifica tus bases de datos y no necesita acceso a tus
                sistemas internos.
              </p>
              <div className="int-list">
                <div className="int-item">
                  <div className="int-dot"></div>
                  <div>
                    <div className="int-text">API REST documentada</div>
                    <div className="int-sub">SDK disponible para los principales lenguajes</div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot m"></div>
                  <div>
                    <div className="int-text">Webhooks para notificaciones en tiempo real</div>
                    <div className="int-sub">
                      Tu sistema sabe al instante cuando se valida una credencial
                    </div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot g"></div>
                  <div>
                    <div className="int-text">Entorno Sandbox incluido</div>
                    <div className="int-sub">Testing completo sin afectar producción</div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot"></div>
                  <div>
                    <div className="int-text">Soporte técnico dedicado durante el piloto</div>
                    <div className="int-sub">
                      Equipo de ingeniería disponible en todo el proceso
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="int-code fade-in" style={{ transitionDelay: ".2s" }}>
              <div className="code-bar">
                <span className="cb1"></span>
                <span className="cb2"></span>
                <span className="cb3"></span>
              </div>
              <div className="code-line">
                <span className="code-comment">{"// Emitir una credencial verificable"}</span>
              </div>
              <div className="code-line">
                <span className="code-key">POST</span>{" "}
                <span className="code-str">/api/issue</span>
              </div>
              <div className="code-line">
                <span className="code-key">{"{"}</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-key">&quot;type&quot;</span>:{" "}
                <span className="code-str">&quot;LiquidacionSueldo&quot;</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-key">&quot;rut&quot;</span>:{" "}
                <span className="code-str">&quot;12345678-9&quot;</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-key">&quot;periodo&quot;</span>:{" "}
                <span className="code-str">&quot;2025-12&quot;</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-key">&quot;renta_liquida&quot;</span>:{" "}
                <span className="code-val">1850000</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-key">&quot;consent&quot;</span>:{" "}
                <span className="code-val">true</span>
              </div>
              <div className="code-line">
                <span className="code-key">{"}"}</span>
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="code-comment">
                  {"// Response: credencial firmada lista"}
                </span>
              </div>
              <div className="code-line">
                <span className="code-comment">
                  {"// para entregar a la billetera del trabajador"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="cta-orb"></div>
        <div className="cta-inner fade-in">
          <div
            className="section-tag"
            style={{ color: "#E880C0", display: "block", marginBottom: "1rem" }}
          >
            Programa piloto gratuito
          </div>
          <h2>
            ¿Comenzamos con <em>500 credenciales</em>, sin costo de implementación?
          </h2>
          <p>
            30 días de piloto en entorno Sandbox. Tu equipo de tecnología integra, prueba y valida
            antes de cualquier compromiso. Sin presión. Sin riesgos.
          </p>
          <div className="cta-buttons">
            <DemoTrigger
              className="btn-primary"
              style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}
            >
              Agendar una demo →
            </DemoTrigger>
            <a href="#" className="btn-ghost">Ver documentación técnica</a>
          </div>
          <div className="cta-trust">
            <div className="trust-item">
              <span className="trust-icon">✓</span> Sin costo de implementación
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span> Sin cambios en tu arquitectura
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span> Soporte técnico incluido
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span> Entorno Sandbox desde el día 1
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
