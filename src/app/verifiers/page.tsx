"use client";
import { useEffect } from "react";
import DemoTrigger from "../_components/DemoTrigger";

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1E3564;
  --navy-mid:#243A6A;
  --navy-deep:#111E3C;
  --navy-card:#172344;
  --blue:#4472C4;
  --blue-soft:#5B8FC4;
  --blue-pale:#EEF3FB;
  --blue-mid:#D8E5F5;
  --magenta:#C0388A;
  --magenta-s:#D058A0;
  --magenta-pale:#FAE0F2;
  --green:#1D9E75;
  --green-pale:#E0F5EE;
  --white:#FFFFFF;
  --ice:#F0F4FB;
  --text:#1A2B4A;
  --muted:#5A6A8A;
  --faint:#8A9BB8;
  --border:#D0DCF0;
}
html{scroll-behavior:smooth;font-size:16px}
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text);line-height:1.6;overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--magenta);border-radius:2px}
img,svg{display:block;max-width:100%}
a{text-decoration:none}

/* UTILITIES */
.s-wrap{max-width:1200px;margin:0 auto;padding:0 clamp(1.25rem,4vw,3rem)}
.section{padding:clamp(4.5rem,9vw,7.5rem) 0}
.s-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;margin-bottom:.85rem}
.s-tag--blue{color:var(--blue)}
.s-tag--magenta{color:var(--magenta)}
.s-tag--green{color:var(--green)}
.s-tag--pale{color:rgba(192,56,138,.85)}
.s-title{font-family:'DM Serif Display',serif;font-size:clamp(1.75rem,3.2vw,2.55rem);font-weight:800;line-height:1.08;color:var(--navy);letter-spacing:-.03em;margin-bottom:.85rem}
.s-title em{font-family:'DM Serif Display',serif;font-weight:400;font-style:italic;color:var(--magenta)}
.s-title--white{color:#fff}
.s-sub{font-size:1rem;color:var(--muted);max-width:540px;line-height:1.78;font-weight:300}
.s-sub--white{color:rgba(255,255,255,.55)}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .65s ease,transform .65s ease}
.reveal.in{opacity:1;transform:translateY(0)}
.rd1{transition-delay:.08s}.rd2{transition-delay:.18s}.rd3{transition-delay:.28s}.rd4{transition-delay:.38s}

/* HERO */
.hero{min-height:100vh;background:var(--navy-deep);display:flex;align-items:center;position:relative;overflow:hidden;padding-top:64px}
.hero__canvas{position:absolute;inset:0;pointer-events:none}
.hero__mesh{position:absolute;inset:0;background:
  radial-gradient(ellipse 80% 60% at 68% 22%, rgba(192,56,138,.2) 0%, transparent 60%),
  radial-gradient(ellipse 55% 45% at 18% 82%, rgba(68,114,196,.13) 0%, transparent 55%),
  radial-gradient(ellipse 35% 28% at 92% 78%, rgba(29,158,117,.06) 0%, transparent 50%)}
.hero__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:72px 72px}
.hero__glow{position:absolute;top:8%;right:4%;width:480px;height:480px;background:radial-gradient(circle,rgba(192,56,138,.14) 0%,transparent 65%);border-radius:50%;animation:glow-pulse 5s ease-in-out infinite}
@keyframes glow-pulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.1);opacity:.5}}
.hero__inner{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:5rem clamp(1.25rem,4vw,3rem);display:grid;grid-template-columns:1.1fr 1fr;gap:5rem;align-items:center}
.hero__eyebrow{display:inline-flex;align-items:center;gap:.55rem;margin-bottom:1.5rem}
.eyebrow__dot{width:5px;height:5px;background:var(--magenta);border-radius:50%;flex-shrink:0;animation:dot-blink 2.2s ease-in-out infinite}
@keyframes dot-blink{0%,100%{opacity:1}50%{opacity:.25}}
.eyebrow__label{font-size:.7rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(192,56,138,.85)}
.hero__h1{font-family:'DM Serif Display',serif;font-size:clamp(2.4rem,4.8vw,3.6rem);line-height:1.05;color:#fff;font-weight:800;letter-spacing:-.035em;margin-bottom:1.4rem}
.hero__h1 .accent{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;color:var(--magenta-s)}
.hero__sub{font-size:1.05rem;color:rgba(255,255,255,.58);line-height:1.78;margin-bottom:2.5rem;font-weight:300;max-width:490px}
.hero__sub strong{color:rgba(255,255,255,.82);font-weight:500}
.hero__ctas{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.75rem}
.btn-primary{background:var(--magenta);color:#fff;padding:.82rem 1.75rem;border-radius:8px;font-size:.95rem;font-weight:500;font-family:'DM Sans',sans-serif;transition:background .2s,transform .2s,box-shadow .2s;display:inline-flex;align-items:center;gap:.5rem;border:none;cursor:pointer}
.btn-primary:hover{background:#A8307A;transform:translateY(-2px);box-shadow:0 8px 28px rgba(192,56,138,.38)}
.btn-ghost{background:transparent;color:rgba(255,255,255,.75);padding:.82rem 1.5rem;border-radius:8px;font-size:.92rem;font-weight:400;font-family:'DM Sans',sans-serif;border:1px solid rgba(255,255,255,.2);transition:all .2s;display:inline-flex;align-items:center;gap:.5rem}
.btn-ghost:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.38);color:#fff}
.hero__proof{display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap}
.proof__divider{width:1px;height:22px;background:rgba(255,255,255,.12)}
.proof__item{font-size:.72rem;color:rgba(255,255,255,.35);letter-spacing:.05em;text-transform:uppercase}
.proof__item strong{display:block;font-size:1.1rem;color:rgba(255,255,255,.75);font-weight:700;letter-spacing:0;text-transform:none;margin-bottom:.1rem}

/* Hero card */
.hero__card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(8px)}
.hero__card-top{padding:1.5rem 1.75rem;border-bottom:1px solid rgba(255,255,255,.07)}
.card__label{font-size:.65rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.28);margin-bottom:1.25rem;display:flex;align-items:center;justify-content:space-between}
.card__timer{font-family:'DM Serif Display',serif;font-weight:700;color:var(--magenta-s);font-size:.7rem;letter-spacing:0;text-transform:none}
.flow-row{display:flex;align-items:center;gap:.9rem;margin-bottom:.85rem}
.flow-row:last-child{margin-bottom:0}
.flow-icon{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.95rem}
.fi-blue{background:rgba(68,114,196,.2);border:1px solid rgba(68,114,196,.32)}
.fi-magenta{background:rgba(192,56,138,.18);border:1px solid rgba(192,56,138,.28)}
.fi-navy{background:rgba(46,77,136,.3);border:1px solid rgba(46,77,136,.5)}
.fi-green{background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.28)}
.flow-body{flex:1}
.flow-title{font-size:.8rem;font-weight:500;color:rgba(255,255,255,.85);line-height:1.2}
.flow-sub{font-size:.7rem;color:rgba(255,255,255,.35);margin-top:.15rem}
.flow-check{width:18px;height:18px;border-radius:50%;flex-shrink:0;background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.35);display:flex;align-items:center;justify-content:center;font-size:.6rem;color:#5DD4A8}
.hero__card-stats{display:grid;grid-template-columns:repeat(3,1fr);padding:1.1rem 1.75rem}
.stat-col{text-align:center;padding:.4rem 0}
.stat-col+.stat-col{border-left:1px solid rgba(255,255,255,.07)}
.stat-val{font-family:'DM Serif Display',serif;font-size:1.5rem;font-weight:800;color:#fff;line-height:1;letter-spacing:-.02em}
.stat-val--pink{color:var(--magenta-s)}
.stat-lab{font-size:.62rem;color:rgba(255,255,255,.32);letter-spacing:.06em;text-transform:uppercase;margin-top:.3rem}

/* PROOF STRIP */
.strip{background:var(--navy-mid);border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);padding:.9rem clamp(1.25rem,4vw,3rem);overflow:hidden}
.strip__inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:1.75rem;flex-wrap:wrap}
.strip__label{font-size:.65rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.22);white-space:nowrap;flex-shrink:0}
.strip__items{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}
.strip__tag{font-size:.78rem;color:rgba(255,255,255,.28);padding:.3rem .85rem;border:1px solid rgba(255,255,255,.08);border-radius:100px;letter-spacing:.01em}

/* PROBLEM */
.problem{background:#fff}
.problem__grid{display:grid;grid-template-columns:1fr 1fr;gap:4.5rem;align-items:center}
.problem__items{display:flex;flex-direction:column;gap:.8rem;margin-top:1.75rem}
.pi{display:flex;gap:1rem;padding:1rem 1.2rem;border:1px solid var(--border);border-radius:12px;background:#fff;transition:border-color .2s,box-shadow .2s}
.pi:hover{border-color:var(--magenta);box-shadow:0 4px 16px rgba(192,56,138,.08)}
.pi__ico{width:34px;height:34px;border-radius:9px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.9rem}
.ico-r{background:#FEE8E8}.ico-a{background:#FEF4E0}.ico-b{background:var(--blue-pale)}.ico-p{background:#F0EEFE}
.pi__title{font-size:.875rem;font-weight:600;color:var(--navy);margin-bottom:.2rem}
.pi__desc{font-size:.78rem;color:var(--muted);line-height:1.58}
.problem__card{background:var(--ice);border:1px solid var(--border);border-radius:16px;padding:1.75rem;position:relative;overflow:hidden}
.problem__card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--magenta),var(--blue))}
.problem__quote{font-family:'DM Serif Display',serif;font-size:1.18rem;color:var(--navy);line-height:1.55;font-style:italic;margin-bottom:1.2rem}
.problem__quote mark{background:none;color:var(--magenta);font-style:normal;font-family:'DM Serif Display',serif;font-weight:800;font-size:.95rem}
.problem__body{font-size:.82rem;color:var(--muted);line-height:1.68;margin-bottom:1.4rem}
.problem__data{display:grid;grid-template-columns:1fr 1fr;gap:.7rem}
.pd{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.9rem 1rem}
.pd__num{font-family:'DM Serif Display',serif;font-size:1.55rem;font-weight:800;color:var(--navy);line-height:1;letter-spacing:-.02em}
.pd__num--m{color:var(--magenta)}
.pd__label{font-size:.7rem;color:var(--muted);margin-top:.25rem;line-height:1.45}

/* HOW IT WORKS */
.solution{background:var(--ice)}
.solution__header{text-align:center;max-width:660px;margin:0 auto 3.5rem}
.solution__header .s-sub{margin:0 auto}
.sol-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;position:relative}
.sol-steps::before{content:'';position:absolute;top:28px;left:calc(12.5% + 16px);right:calc(12.5% + 16px);height:1px;background:linear-gradient(90deg,rgba(192,56,138,.35),rgba(68,114,196,.35),rgba(29,158,117,.35))}
.sol-step{text-align:center;padding:1.5rem 1rem;background:#fff;border:1px solid var(--border);border-radius:14px;position:relative;z-index:1;transition:transform .2s,box-shadow .2s}
.sol-step:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.step-num{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.1rem;font-family:'DM Serif Display',serif;font-size:1.4rem;font-weight:800;color:#fff}
.sn1{background:var(--magenta)}.sn2{background:var(--blue)}.sn3{background:var(--green)}.sn4{background:var(--navy)}
.sol-step h3{font-family:'DM Serif Display',serif;font-size:.875rem;font-weight:700;color:var(--navy);margin-bottom:.5rem;letter-spacing:-.01em}
.sol-step p{font-size:.78rem;color:var(--muted);line-height:1.62}

/* COMPARISON */
.compare{background:#fff}
.compare__header{text-align:center;max-width:680px;margin:0 auto 3rem}
.compare__header .s-sub{margin:0 auto}
.compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}
.compare-col{border-radius:16px;padding:1.85rem;border:1px solid var(--border)}
.compare-col--old{background:#FBFBFD}
.compare-col--new{background:var(--navy-deep);border-color:transparent;position:relative;overflow:hidden}
.compare-col--new::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--magenta))}
.compare-head{display:flex;align-items:center;gap:.65rem;margin-bottom:1.4rem}
.compare-badge{font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:.3rem .8rem;border-radius:100px}
.compare-badge--old{background:#FEE8E8;color:#C0383A}
.compare-badge--new{background:rgba(192,56,138,.18);color:var(--magenta-s)}
.compare-title{font-family:'DM Serif Display',serif;font-weight:800;font-size:1.05rem}
.compare-title--old{color:var(--navy)}
.compare-title--new{color:#fff}
.compare-list{display:flex;flex-direction:column;gap:.85rem}
.compare-item{display:flex;align-items:flex-start;gap:.7rem;font-size:.85rem;line-height:1.55}
.compare-item--old{color:var(--muted)}
.compare-item--new{color:rgba(255,255,255,.65)}
.compare-icon{flex-shrink:0;font-size:.85rem;margin-top:.1rem}
.compare-icon--old{color:#C0383A}
.compare-icon--new{color:#5DD4A8}
.compare-item strong{font-weight:600}
.compare-item--old strong{color:var(--navy)}
.compare-item--new strong{color:#fff}

/* BENEFITS */
.benefits{background:var(--ice)}
.benefits__header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3rem}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.benefit-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.6rem;transition:all .22s;position:relative;overflow:hidden}
.benefit-card:hover{border-color:var(--magenta);box-shadow:0 8px 26px rgba(192,56,138,.08);transform:translateY(-2px)}
.benefit-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;transform:scaleX(0);transition:transform .25s;transform-origin:left}
.benefit-card:hover::before{transform:scaleX(1)}
.bc--m::before{background:var(--magenta)}
.bc--b::before{background:var(--blue)}
.bc--g::before{background:var(--green)}
.benefit-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;font-size:1.1rem}
.bi--m{background:var(--magenta-pale)}
.bi--b{background:var(--blue-pale)}
.bi--g{background:var(--green-pale)}
.benefit-title{font-family:'DM Serif Display',serif;font-size:.99rem;font-weight:700;color:var(--navy);margin-bottom:.55rem;letter-spacing:-.01em}
.benefit-desc{font-size:.95rem;color:var(--muted);line-height:1.62}

/* INTEGRATION */
.integration{background:var(--navy-deep);position:relative;overflow:hidden}
.integration::after{content:'';position:absolute;top:-30%;left:-15%;width:620px;height:620px;background:radial-gradient(circle,rgba(68,114,196,.09) 0%,transparent 62%);border-radius:50%;pointer-events:none}
.integration__inner{position:relative;z-index:1}
.integration__grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.int-list{display:flex;flex-direction:column;gap:.85rem;margin-top:2.25rem}
.int-item{display:flex;align-items:flex-start;gap:.75rem;padding:.85rem 1rem;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px}
.int-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;margin-top:.35rem}
.int-dot--m{background:var(--magenta)}
.int-dot--b{background:var(--blue)}
.int-dot--g{background:var(--green)}
.int-title{font-size:.85rem;font-weight:500;color:rgba(255,255,255,.85)}
.int-sub{font-size:.94rem;color:rgba(255,255,255,.38);margin-top:.15rem;line-height:1.5}
.code-window{background:#0D1B33;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.08)}
.code-bar{display:flex;gap:.4rem;padding:.9rem 1.1rem;border-bottom:1px solid rgba(255,255,255,.06)}
.code-dot{width:10px;height:10px;border-radius:50%}
.cd1{background:#FF5F57}.cd2{background:#FEBC2E}.cd3{background:#28C840}
.code-body{padding:1.25rem 1.1rem;font-family:'SF Mono','Courier New',monospace;font-size:.76rem;line-height:1.85;overflow-x:auto}
.code-comment{color:#5A7A8A}
.code-key{color:#90B8F0}
.code-str{color:#5DD4A8}
.code-val{color:#FAC775}
.code-prop{color:#E880C0}

/* CTA */
.cta-section{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5rem,11vw,9rem) 0;border-top:1px solid rgba(255,255,255,.06)}
.cta-section__orb{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 85% 65% at 50% 50%,rgba(192,56,138,.13) 0%,rgba(68,114,196,.07) 42%,transparent 68%)}
.cta-section__inner{position:relative;z-index:1;text-align:center;max-width:700px;margin:0 auto;padding:0 clamp(1.25rem,4vw,3rem)}
.cta-section h2{font-family:'DM Serif Display',serif;font-size:clamp(2rem,3.6vw,2.85rem);font-weight:800;color:#fff;margin-bottom:1.1rem;line-height:1.1;letter-spacing:-.035em}
.cta-section h2 em{font-family:'DM Serif Display',serif;font-weight:400;font-style:italic;color:var(--magenta-s)}
.cta-section p{font-size:1rem;color:rgba(255,255,255,.52);margin-bottom:2.5rem;font-weight:300;line-height:1.78}
.cta-btns{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.cta-trust{display:flex;justify-content:center;gap:2.25rem;flex-wrap:wrap}
.cta-trust__item{display:flex;align-items:center;gap:.4rem;font-size:.75rem;color:rgba(255,255,255,.32)}
.cta-trust__icon{color:var(--green);font-size:.8rem}

/* RESPONSIVE */
@media(max-width:980px){
  .hero__inner{grid-template-columns:1fr}
  .hero__right{display:none}
  .problem__grid{grid-template-columns:1fr}
  .compare-grid{grid-template-columns:1fr}
  .benefits__header{grid-template-columns:1fr}
  .benefits-grid{grid-template-columns:1fr 1fr}
  .integration__grid{grid-template-columns:1fr}
  .sol-steps::before{display:none}
}
@media(max-width:700px){
  .sol-steps{grid-template-columns:1fr 1fr}
  .benefits-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){
  .sol-steps,.benefits-grid{grid-template-columns:1fr}
  .problem__data{grid-template-columns:1fr 1fr}
}
`;

export default function VerifiersPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -24px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero__canvas" aria-hidden="true">
          <div className="hero__mesh"></div>
          <div className="hero__grid"></div>
          <div className="hero__glow"></div>
        </div>
        <div className="hero__inner">
          <div className="hero__left">
            <div className="hero__eyebrow" aria-hidden="true">
              <div className="eyebrow__dot"></div>
              <span className="eyebrow__label">Para Bancos, Aseguradoras e Inmobiliarias</span>
            </div>
            <h1 className="hero__h1">
              Aprueba en segundos.<br />
              <span className="accent">No en días.</span>
            </h1>
            <p className="hero__sub">
              Cada solicitud de crédito, póliza o arriendo depende hoy de un PDF que{" "}
              <strong>cualquier editor puede manipular</strong>. Veris te permite validar la
              información laboral y financiera directamente desde la fuente — con evidencia
              criptográfica, en menos de 2 segundos.
            </p>
            <div className="hero__ctas">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
              <a href="#como-funciona" className="btn-ghost">Ver cómo funciona</a>
            </div>
            <div className="hero__proof">
              <div className="proof__item">
                <strong>&lt;&nbsp;2s</strong>
                tiempo de validación
              </div>
              <div className="proof__divider" aria-hidden="true"></div>
              <div className="proof__item">
                <strong>0%</strong>
                fraude documental
              </div>
              <div className="proof__divider" aria-hidden="true"></div>
              <div className="proof__item">
                <strong>$0</strong>
                responsabilidad sobre datos
              </div>
            </div>
          </div>
          <div className="hero__right" aria-hidden="true">
            <div className="hero__card">
              <div className="hero__card-top">
                <div className="card__label">
                  <span>Validación de solicitud de crédito</span>
                  <span className="card__timer">1.8s</span>
                </div>
                <div className="flow-row">
                  <div className="flow-icon fi-magenta">📥</div>
                  <div className="flow-body">
                    <div className="flow-title">Solicitante presenta credencial Veris</div>
                    <div className="flow-sub">Renta líquida, antigüedad y empleador</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-row">
                  <div className="flow-icon fi-blue">🔎</div>
                  <div className="flow-body">
                    <div className="flow-title">Veris verifica la firma criptográfica</div>
                    <div className="flow-sub">Contra la fuente emisora original</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-row">
                  <div className="flow-icon fi-navy">🛡️</div>
                  <div className="flow-body">
                    <div className="flow-title">Consentimiento del titular confirmado</div>
                    <div className="flow-sub">Trazabilidad completa de acceso</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-row">
                  <div className="flow-icon fi-green">✅</div>
                  <div className="flow-body">
                    <div className="flow-title">Datos validados — listo para decisión</div>
                    <div className="flow-sub">Sin almacenar información del solicitante</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
              </div>
              <div className="hero__card-stats">
                <div className="stat-col">
                  <div className="stat-val stat-val--pink">&lt;2s</div>
                  <div className="stat-lab">Tiempo total</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">100%</div>
                  <div className="stat-lab">Verificable</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">$0</div>
                  <div className="stat-lab">Dato almacenado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="strip" aria-label="Sectores objetivo">
        <div className="strip__inner">
          <div className="strip__label">Diseñado para</div>
          <div className="strip__items">
            <span className="strip__tag">Bancos y financieras</span>
            <span className="strip__tag">Cooperativas de crédito</span>
            <span className="strip__tag">Aseguradoras</span>
            <span className="strip__tag">Inmobiliarias y corretajes</span>
            <span className="strip__tag">Fintech de scoring</span>
            <span className="strip__tag">Arriendo y proptech</span>
          </div>
        </div>
      </div>

      {/* EL PROBLEMA */}
      <section className="section problem" id="problema">
        <div className="s-wrap">
          <div className="problem__grid">
            <div className="reveal">
              <span className="s-tag s-tag--magenta">El problema</span>
              <h2 className="s-title">
                Tu equipo de riesgo confía en un archivo que{" "}
                <em>se edita en 30 segundos.</em>
              </h2>
              <p className="s-sub">
                Cada día, tu organización aprueba créditos, pólizas y arriendos basándose en
                liquidaciones de sueldo y certificados laborales en PDF. La capacidad de verificar
                esos documentos no ha avanzado al mismo ritmo que la capacidad de falsificarlos.
              </p>
              <div className="problem__items">
                <div className="pi reveal rd1">
                  <div className="pi__ico ico-r">🧾</div>
                  <div>
                    <div className="pi__title">El fraude documental es estructural</div>
                    <div className="pi__desc">
                      Liquidaciones, certificados de renta y cartas laborales se editan con
                      herramientas gratuitas. Tu equipo de riesgo no tiene forma confiable de
                      detectarlo a escala.
                    </div>
                  </div>
                </div>
                <div className="pi reveal rd2">
                  <div className="pi__ico ico-a">📞</div>
                  <div>
                    <div className="pi__title">Verificación manual = cuello de botella</div>
                    <div className="pi__desc">
                      Llamar al empleador, esperar respuestas por correo, validar contra registros
                      públicos. Cada paso agrega días al ciclo de aprobación y costo a la operación.
                    </div>
                  </div>
                </div>
                <div className="pi reveal rd3">
                  <div className="pi__ico ico-b">🗄️</div>
                  <div>
                    <div className="pi__title">Acumulas datos sensibles que no necesitas</div>
                    <div className="pi__desc">
                      Cada PDF recibido y almacenado es un activo de riesgo: una brecha de datos de
                      terceros que tu organización ahora debe responder ante la ley.
                    </div>
                  </div>
                </div>
                <div className="pi reveal rd4">
                  <div className="pi__ico ico-p">📉</div>
                  <div>
                    <div className="pi__title">La fricción cuesta conversión</div>
                    <div className="pi__desc">
                      En crédito, seguros y arriendo, cada día adicional de espera reduce la
                      probabilidad de cierre. Tus competidores con procesos más rápidos se quedan
                      con el cliente.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal rd2">
              <div className="problem__card">
                <p className="problem__quote">
                  &ldquo;El problema no son los documentos.<br />
                  Fueron diseñados para <mark>personas</mark>,<br />
                  no para validación automática.&rdquo;
                </p>
                <p className="problem__body">
                  Veris convierte el proceso de verificación en una consulta criptográfica directa
                  a la fuente emisora — sin PDFs, sin llamadas, sin almacenar el dato del
                  solicitante en tus sistemas.
                </p>
                <div className="problem__data">
                  <div className="pd">
                    <div className="pd__num pd__num--m">+80%</div>
                    <div className="pd__label">
                      de solicitudes de crédito incluyen algún documento manipulado
                    </div>
                  </div>
                  <div className="pd">
                    <div className="pd__num">48h</div>
                    <div className="pd__label">tiempo promedio de verificación manual hoy</div>
                  </div>
                  <div className="pd">
                    <div className="pd__num pd__num--m">&lt;2s</div>
                    <div className="pd__label">validación con credencial verificable Veris</div>
                  </div>
                  <div className="pd">
                    <div className="pd__num">$0</div>
                    <div className="pd__label">
                      datos de terceros almacenados en tu infraestructura
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="section solution" id="como-funciona">
        <div className="s-wrap">
          <div className="solution__header reveal">
            <span className="s-tag s-tag--blue">La solución</span>
            <h2 className="s-title">
              Validación criptográfica directa.<br />
              Sin PDFs. Sin llamadas. <em>Sin espera.</em>
            </h2>
            <p className="s-sub">
              Veris se integra a tu motor de decisión actual mediante API REST. La validación ocurre
              como una consulta más en tu flujo de scoring — no como un proceso paralelo.
            </p>
          </div>
          <div className="sol-steps">
            <div className="sol-step reveal rd1">
              <div className="step-num sn1">1</div>
              <h3>Solicitante comparte</h3>
              <p>
                El usuario presenta su credencial verificable desde su Veris Wallet, con
                consentimiento explícito para esta operación específica.
              </p>
            </div>
            <div className="sol-step reveal rd2">
              <div className="step-num sn2">2</div>
              <h3>Veris verifica</h3>
              <p>
                La firma criptográfica se valida contra la fuente emisora original — la plataforma
                de RR.HH. o el sistema que emitió el dato.
              </p>
            </div>
            <div className="sol-step reveal rd3">
              <div className="step-num sn3">3</div>
              <h3>Recibes el resultado</h3>
              <p>
                Tu sistema recibe una respuesta booleana y los datos verificados — sin almacenar el
                documento original ni datos innecesarios.
              </p>
            </div>
            <div className="sol-step reveal rd4">
              <div className="step-num sn4">4</div>
              <h3>Decides al instante</h3>
              <p>
                Tu motor de scoring incorpora el dato verificado en el mismo ciclo. Aprobación,
                cotización o asignación sin demoras adicionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANTES / DESPUÉS */}
      <section className="section compare" id="comparacion">
        <div className="s-wrap">
          <div className="compare__header reveal">
            <span className="s-tag s-tag--magenta">El cambio</span>
            <h2 className="s-title">
              De proceso manual a <em>infraestructura de decisión.</em>
            </h2>
            <p className="s-sub">
              El mismo proceso de verificación, visto desde tu operación, antes y después de Veris.
            </p>
          </div>
          <div className="compare-grid">
            <div className="compare-col compare-col--old reveal rd1">
              <div className="compare-head">
                <span className="compare-badge compare-badge--old">Hoy</span>
                <span className="compare-title compare-title--old">Verificación manual</span>
              </div>
              <div className="compare-list">
                <div className="compare-item compare-item--old">
                  <span className="compare-icon compare-icon--old">✕</span>
                  <span>
                    El solicitante <strong>envía un PDF</strong> de su liquidación o certificado
                    laboral por correo o portal.
                  </span>
                </div>
                <div className="compare-item compare-item--old">
                  <span className="compare-icon compare-icon--old">✕</span>
                  <span>
                    Un analista revisa el documento <strong>manualmente</strong>, buscando
                    inconsistencias visuales.
                  </span>
                </div>
                <div className="compare-item compare-item--old">
                  <span className="compare-icon compare-icon--old">✕</span>
                  <span>
                    Si hay dudas, se <strong>llama al empleador</strong> para confirmar — proceso
                    que toma horas o días.
                  </span>
                </div>
                <div className="compare-item compare-item--old">
                  <span className="compare-icon compare-icon--old">✕</span>
                  <span>
                    El documento se <strong>almacena</strong> en tus sistemas, generando
                    responsabilidad sobre datos de terceros.
                  </span>
                </div>
                <div className="compare-item compare-item--old">
                  <span className="compare-icon compare-icon--old">✕</span>
                  <span>
                    Tiempo total: <strong>24 a 72 horas</strong>. Riesgo de fraude:{" "}
                    <strong>no determinable</strong>.
                  </span>
                </div>
              </div>
            </div>

            <div className="compare-col compare-col--new reveal rd2">
              <div className="compare-head">
                <span className="compare-badge compare-badge--new">Con Veris</span>
                <span className="compare-title compare-title--new">Validación criptográfica</span>
              </div>
              <div className="compare-list">
                <div className="compare-item compare-item--new">
                  <span className="compare-icon compare-icon--new">✓</span>
                  <span>
                    El solicitante <strong>comparte su credencial</strong> Veris con un clic,
                    autorizando esta operación.
                  </span>
                </div>
                <div className="compare-item compare-item--new">
                  <span className="compare-icon compare-icon--new">✓</span>
                  <span>
                    Tu sistema hace una <strong>consulta API</strong> que verifica la firma
                    criptográfica contra la fuente emisora.
                  </span>
                </div>
                <div className="compare-item compare-item--new">
                  <span className="compare-icon compare-icon--new">✓</span>
                  <span>
                    La respuesta llega en <strong>menos de 2 segundos</strong> — válido o inválido,
                    sin ambigüedad.
                  </span>
                </div>
                <div className="compare-item compare-item--new">
                  <span className="compare-icon compare-icon--new">✓</span>
                  <span>
                    <strong>Cero almacenamiento</strong> de datos personales del solicitante. Cero responsabilidad de datos 
                     por diseño.
                  </span>
                </div>
                <div className="compare-item compare-item--new">
                  <span className="compare-icon compare-icon--new">✓</span>
                  <span>
                    Tiempo total: <strong>&lt; 2 segundos</strong>. Riesgo de fraude documental:{" "}
                    <strong>técnicamente cero</strong>.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section benefits" id="beneficios">
        <div className="s-wrap">
          <div className="benefits__header reveal">
            <div>
              <span className="s-tag s-tag--magenta">Beneficios para Verificadores</span>
              <h2 className="s-title">
                No solo verificas más rápido. <em>Verificas mejor.</em>
              </h2>
            </div>
            <p className="s-sub">
              Cada validación que haces a través de Veris reduce tu exposición al fraude, tu costo
              operativo y tu responsabilidad regulatoria — al mismo tiempo.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card bc--m reveal rd1">
              <div className="benefit-icon bi--m">⚡</div>
              <h3 className="benefit-title">Decisiones en segundos, no días</h3>
              <p className="benefit-desc">
                Reduce el ciclo de aprobación de crédito, póliza o arriendo de 24–72 horas a menos
                de 2 segundos. Mejora directa en conversión y experiencia del cliente.
              </p>
            </div>
            <div className="benefit-card bc--b reveal rd2">
              <div className="benefit-icon bi--b">🛑</div>
              <h3 className="benefit-title">Fraude documental cero</h3>
              <p className="benefit-desc">
                La credencial verificable no puede editarse sin invalidar su firma criptográfica.
                El vector de fraude más común en tu operación deja de existir.
              </p>
            </div>
            <div className="benefit-card bc--g reveal rd3">
              <div className="benefit-icon bi--g">🗂️</div>
              <h3 className="benefit-title">Cero responsabilidad de datos</h3>
              <p className="benefit-desc">
                No almacenas datos personales del solicitante. Reduces tu superficie de exposición
                ante brechas de datos y simplificas tus auditorías de compliance.
              </p>
            </div>
            <div className="benefit-card bc--m reveal rd1">
              <div className="benefit-icon bi--m">💰</div>
              <h3 className="benefit-title">Menor costo por operación</h3>
              <p className="benefit-desc">
                Elimina el costo de contact center, validaciones telefónicas y revisión manual.
                El ahorro escala directamente con tu volumen de solicitudes.
              </p>
            </div>
            <div className="benefit-card bc--b reveal rd2">
              <div className="benefit-icon bi--b">📋</div>
              <h3 className="benefit-title">Consentimiento auditable</h3>
              <p className="benefit-desc">
                Cada validación queda registrada con consentimiento explícito y trazable del
                titular — evidencia lista para auditorías regulatorias.
              </p>
            </div>
            <div className="benefit-card bc--g reveal rd3">
              <div className="benefit-icon bi--g">🚀</div>
              <h3 className="benefit-title">Ventaja competitiva real</h3>
              <p className="benefit-desc">
                Ser la institución que aprueba en segundos — mientras la competencia sigue pidiendo
                PDFs — se convierte en un diferenciador de adquisición.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRACIÓN TÉCNICA */}
      <section className="section integration" id="integracion">
        <div className="s-wrap integration__inner">
          <div className="integration__grid">
            <div className="reveal">
              <span className="s-tag s-tag--pale">Integración técnica</span>
              <h2 className="s-title s-title--white">
                Una consulta API más en tu <em>motor de decisión.</em>
              </h2>
              <p className="s-sub s-sub--white">
                Veris se conecta mediante API REST estándar. No requiere acceso a tus sistemas core
                ni migración de datos — se incorpora como un paso adicional de verificación en tu
                flujo existente.
              </p>
              <div className="int-list">
                <div className="int-item">
                  <div className="int-dot int-dot--m"></div>
                  <div>
                    <div className="int-title">API REST de verificación</div>
                    <div className="int-sub">
                      Respuesta en menos de 2 segundos, con SDKs para los lenguajes más usados en
                      banca y seguros.
                    </div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot int-dot--b"></div>
                  <div>
                    <div className="int-title">Webhooks de auditoría</div>
                    <div className="int-sub">
                      Recibe notificaciones de cada validación realizada, con metadatos de
                      consentimiento para tu compliance.
                    </div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot int-dot--g"></div>
                  <div>
                    <div className="int-title">Entorno Sandbox incluido</div>
                    <div className="int-sub">
                      Prueba el flujo completo de validación con datos de ejemplo, sin tocar tu
                      entorno de producción.
                    </div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot int-dot--m"></div>
                  <div>
                    <div className="int-title">Soporte técnico dedicado</div>
                    <div className="int-sub">
                      Equipo de ingeniería disponible durante la integración y el piloto — sin
                      costo adicional.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal rd2">
              <div className="code-window">
                <div className="code-bar">
                  <span className="code-dot cd1"></span>
                  <span className="code-dot cd2"></span>
                  <span className="code-dot cd3"></span>
                </div>
                <div className="code-body">
                  <span className="code-comment">{"// Verificar una credencial laboral"}</span>
                  <br />
                  <span className="code-key">POST</span>{" "}
                  <span className="code-str">/v1/credentials/verify</span>
                  <br />
                  <br />
                  {"{"}<br />
                  &nbsp;&nbsp;<span className="code-prop">&quot;credential_id&quot;</span>:{" "}
                  <span className="code-str">&quot;vc_8f2a91c...&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="code-prop">&quot;requested_fields&quot;</span>: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">&quot;renta_liquida&quot;</span>
                  ,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-str">&quot;antiguedad_meses&quot;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-str">&quot;empleador_activo&quot;</span>
                  <br />
                  &nbsp;&nbsp;]<br />
                  {"}"}<br />
                  <br />
                  <span className="code-comment">{"// Respuesta — 1.8s"}</span>
                  <br />
                  {"{"}<br />
                  &nbsp;&nbsp;<span className="code-prop">&quot;valid&quot;</span>:{" "}
                  <span className="code-val">true</span>,<br />
                  &nbsp;&nbsp;<span className="code-prop">&quot;renta_liquida&quot;</span>:{" "}
                  <span className="code-val">1850000</span>,<br />
                  &nbsp;&nbsp;<span className="code-prop">&quot;antiguedad_meses&quot;</span>:{" "}
                  <span className="code-val">34</span>,<br />
                  &nbsp;&nbsp;<span className="code-prop">&quot;empleador_activo&quot;</span>:{" "}
                  <span className="code-val">true</span>,<br />
                  &nbsp;&nbsp;<span className="code-prop">&quot;consent_id&quot;</span>:{" "}
                  <span className="code-str">&quot;cn_a31f...&quot;</span>
                  <br />
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section" id="demo">
        <div className="cta-section__orb" aria-hidden="true"></div>
        <div className="cta-section__inner reveal">
          <span className="s-tag s-tag--pale" style={{ display: "block", marginBottom: "1rem" }}>
            Programa piloto gratuito
          </span>
          <h2>
            Empieza a verificar en <em>segundos</em>, no en días.
          </h2>
          <p>
            30 días de piloto en entorno Sandbox. Conecta tu motor de decisión a Veris, valida con
            datos de prueba y mide el impacto en tu tiempo de ciclo antes de cualquier compromiso
            comercial.
          </p>
          <div className="cta-btns">
            <DemoTrigger
              className="btn-primary"
              style={{ fontSize: "1rem", padding: ".9rem 2rem" }}
            >
              Agendar una demo →
            </DemoTrigger>
          </div>
          <div className="cta-trust">
            <div className="cta-trust__item">
              <span className="cta-trust__icon">✓</span> Sin costo de implementación
            </div>
            <div className="cta-trust__item">
              <span className="cta-trust__icon">✓</span> Sin cambios en tu arquitectura
            </div>
            <div className="cta-trust__item">
              <span className="cta-trust__icon">✓</span> Soporte técnico dedicado
            </div>
            <div className="cta-trust__item">
              <span className="cta-trust__icon">✓</span> Sandbox desde el día 1
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
