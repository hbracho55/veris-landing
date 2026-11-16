"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DemoTrigger from "../_components/DemoTrigger";

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1E3564;
  --navy-mid:#243A6A;
  --navy-deep:#111E3C;
  --navy-light:#2E4D88;
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
  --ice-mid:#D8E5F5;
  --text:#1A2B4A;
  --muted:#5A6A8A;
  --faint:#8A9BB8;
  --border:#D0DCF0;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text);line-height:1.6;overflow-x:clip}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--blue);border-radius:2px}
a{text-decoration:none}

/* HERO */
.hero{min-height:100vh;background:var(--navy-deep);display:flex;align-items:center;position:relative;overflow:hidden;padding-top:100px}
.hero-bg{position:absolute;inset:0}
.hero-mesh{position:absolute;inset:0;background:
  radial-gradient(ellipse 70% 55% at 72% 28%, rgba(68,114,196,.25) 0%, transparent 60%),
  radial-gradient(ellipse 55% 45% at 12% 75%, rgba(68,114,196,.12) 0%, transparent 58%),
  radial-gradient(ellipse 35% 30% at 50% 5%, rgba(29,158,117,.07) 0%, transparent 55%)}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:64px 64px}
.hero-glow{position:absolute;top:10%;right:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(68,114,196,.15) 0%,transparent 65%);border-radius:50%;animation:gpulse 5s ease-in-out infinite}
@keyframes gpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.08);opacity:.5}}
.hero-inner{position:relative;z-index:2;width:100%;max-width:calc(1160px + 2 * clamp(1.25rem,4vw,3rem));margin:0 auto;padding:5rem clamp(1.25rem,4vw,3rem);display:grid;grid-template-columns:minmax(0,580px);align-items:center}
.hero-tag{display:inline-flex;align-items:center;gap:.5rem;background:rgba(68,114,196,.15);border:1px solid rgba(68,114,196,.3);color:rgba(140,180,240,.9);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .9rem;border-radius:100px;margin-bottom:1.5rem}
.hero-tag::before{content:'';width:5px;height:5px;background:rgba(140,180,240,.9);border-radius:50%;animation:bdot 2.2s ease-in-out infinite}
@keyframes bdot{0%,100%{opacity:1}50%{opacity:.2}}
.hero h1{font-family:'DM Serif Display',serif;font-size:clamp(2.4rem,4.5vw,3.6rem);line-height:1.1;color:#fff;font-weight:400;margin-bottom:1.5rem;letter-spacing:-.02em}
.hero h1 em{font-style:italic;color:var(--magenta-s)}
.hero-sub{font-size:1.05rem;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:2.5rem;font-weight:300;max-width:500px}
.hero-sub strong{color:rgba(255,255,255,.85);font-weight:500}
.hero-ctas{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.75rem}
.btn-primary{background:var(--blue);color:#fff;padding:.85rem 1.75rem;border-radius:8px;font-size:.97rem;font-weight:500;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;border:none;cursor:pointer;font-family:'DM Sans',sans-serif}
.btn-primary:hover{background:#3360B0;transform:translateY(-2px);box-shadow:0 10px 28px rgba(68,114,196,.4)}
.btn-outline{background:transparent;color:rgba(255,255,255,.75);padding:.85rem 1.5rem;border-radius:8px;font-size:.92rem;font-weight:400;text-decoration:none;transition:all .2s;border:1px solid rgba(255,255,255,.2);display:inline-flex;align-items:center;gap:.5rem;font-family:'DM Sans',sans-serif}
.btn-outline:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4);color:#fff}
.hero-proof{display:flex;flex-wrap:wrap;gap:.5rem 1.5rem}
.proof-item{font-size:.75rem;color:rgba(255,255,255,.35);letter-spacing:.06em;text-transform:uppercase}
.proof-item strong{color:rgba(255,255,255,.7);font-weight:600;display:block;font-size:1.1rem;letter-spacing:0;text-transform:none}
.proof-divider{width:1px;height:14px;background:rgba(255,255,255,.12);align-self:center}

/* Hero image */
.hero{--hm:max((100% - 1160px) / 2, clamp(1.25rem,4vw,3rem))}
.hero-photo{position:absolute;z-index:1;pointer-events:none;right:var(--hm);top:50%;transform:translateY(-50%);width:min(1400px,calc((100% - 2 * var(--hm) - 600px) * 2));aspect-ratio:16/9}
.hero-photo img{object-fit:cover;object-position:right center}
.hero-photo{-webkit-mask-image:radial-gradient(ellipse 11% 13% at 42% 79%,transparent 0,transparent 62%,#000 100%),linear-gradient(90deg,transparent 0,transparent 33%,#000 52%,#000 95%,transparent 100%),linear-gradient(180deg,transparent 0,#000 16%,#000 84%,transparent 100%);-webkit-mask-composite:source-in,source-in;mask-image:radial-gradient(ellipse 11% 13% at 42% 79%,transparent 0,transparent 62%,#000 100%),linear-gradient(90deg,transparent 0,transparent 33%,#000 52%,#000 95%,transparent 100%),linear-gradient(180deg,transparent 0,#000 16%,#000 84%,transparent 100%);mask-composite:intersect,intersect}
.hero-photo::after{content:'';position:absolute;inset:0;background:none}


/* PROOF STRIP */
.proof-strip{background:var(--navy-mid);border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);padding:1.1rem clamp(1.25rem,4vw,3rem)}
.proof-strip-inner{max-width:1160px;margin:0 auto;display:flex;align-items:center;gap:2rem;flex-wrap:wrap}
.ps-label{font-size:.65rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.22);white-space:nowrap;flex-shrink:0}
.ps-items{display:flex;gap:.75rem;flex-wrap:wrap}
.ps-pill{font-size:.77rem;color:rgba(255,255,255,.3);padding:.28rem .8rem;border:1px solid rgba(255,255,255,.09);border-radius:100px}

/* SECTIONS */
.section{padding:clamp(4rem,8vw,7rem) clamp(1.5rem,4vw,3rem)}
.s-inner{max-width:1160px;margin:0 auto}
.s-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.75rem;color:var(--blue)}
.s-title{font-family:'DM Serif Display',serif;font-size:clamp(1.7rem,3vw,2.4rem);font-weight:400;line-height:1.1;color:var(--navy);letter-spacing:-.02em;margin-bottom:.75rem}
.s-title em{font-style:italic;color:var(--magenta)}
.s-sub{font-size:1rem;color:var(--muted);max-width:560px;line-height:1.75;font-weight:300}
.s-title-white{color:#fff}
.s-sub-white{color:rgba(255,255,255,.55)}

/* PROBLEM */
.problem{background:#fff}
.prob-grid{display:grid;grid-template-columns:1fr 1fr;gap:4.5rem;align-items:center}
.prob-items{display:grid;grid-template-columns:1fr 1fr;gap:.9rem;margin-top:2rem}
.prob-item{border:1px solid #cdd5dd;border-radius:14px;background:#fff;overflow:hidden;box-shadow:0 1px 3px rgba(20,39,67,.08),0 8px 22px rgba(20,39,67,.07);transition:border-color .2s,box-shadow .2s}
.prob-item img{display:block;width:100%;height:auto}
.prob-item:hover{border-color:var(--blue);box-shadow:0 4px 16px rgba(68,114,196,.08)}
.prob-card{background:var(--ice);border:1px solid var(--border);border-radius:16px;padding:1.75rem;overflow:hidden;position:relative}
.prob-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--blue-soft))}
.prob-quote{font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--navy);line-height:1.55;font-style:italic;margin-bottom:1.25rem}
.prob-quote span{color:var(--blue);font-style:normal;font-weight:700}
.prob-data{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.25rem}
.pd-item{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.9rem 1rem}
.pd-num{font-family:'DM Serif Display',serif;font-size:1.6rem;color:var(--navy);line-height:1}
.pd-num.b{color:var(--blue)}
.pd-label{font-size:.72rem;color:var(--muted);margin-top:.25rem;line-height:1.4}

/* SOLUTION */
.solution{background:var(--ice)}
.sol-header{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.sol-flow{margin:0;mix-blend-mode:multiply}
.sol-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(5,1fr);gap:.5rem}
.sol-steps li{margin:0}
.sol-steps img{display:block;width:100%;height:auto;aspect-ratio:462/1110;object-fit:cover}

/* BENEFITS */
.benefits{background:#fff}
.benefits-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3rem}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.benefit-card{background:var(--ice);border:1px solid var(--border);border-radius:14px;padding:1.6rem;transition:all .22s;position:relative;overflow:hidden}
.benefit-card:hover{border-color:var(--blue);background:#fff;box-shadow:0 8px 26px rgba(68,114,196,.09);transform:translateY(-2px)}
.benefit-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;transform:scaleX(0);transition:transform .25s;transform-origin:left}
.benefit-card:hover::before{transform:scaleX(1)}
.bc-b::before{background:var(--blue)}.bc-m::before{background:var(--magenta)}.bc-g::before{background:var(--green)}
.benefit-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;font-size:1.1rem}
.bi-b{background:var(--blue-pale)}.bi-m{background:var(--magenta-pale)}.bi-g{background:var(--green-pale)}
.benefit-title{font-family:'DM Serif Display',serif;font-size:.95rem;font-weight:700;color:var(--navy);margin-bottom:.55rem}
.benefit-desc{font-size:.79rem;color:var(--muted);line-height:1.62}
.benefit-hl{margin-top:.85rem;padding-top:.75rem;border-top:1px solid var(--border);font-size:.72rem;font-weight:600}
.bh-b{color:var(--blue)}.bh-m{color:var(--magenta)}.bh-g{color:var(--green)}

/* USE CASES */
.usecases{background:var(--ice)}
.uc-header{text-align:center;max-width:620px;margin:0 auto 3rem}
.uc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.uc-card{background:#fff;border:1px solid #cdd5dd;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(20,39,67,.08),0 8px 22px rgba(20,39,67,.07);transition:all .2s}
.uc-card img{display:block;width:100%;height:auto}
.uc-card:hover{border-color:var(--blue);box-shadow:0 6px 20px rgba(68,114,196,.09);transform:translateY(-2px)}

/* SECURITY */
.security{background:var(--navy-deep);position:relative;overflow:hidden}
.security::after{content:'';position:absolute;top:-30%;right:-15%;width:700px;height:700px;background:radial-gradient(circle,rgba(68,114,196,.08) 0%,transparent 60%);border-radius:50%}
.sec-inner{position:relative;z-index:1}
.sec-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
.sec-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem}
.pillar{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:1.25rem;transition:border-color .2s}
.pillar:hover{border-color:rgba(255,255,255,.15)}
.pillar-ico{font-size:1.2rem;margin-bottom:.75rem}
.pillar-name{font-family:'DM Serif Display',serif;font-size:.88rem;font-weight:700;color:#fff;margin-bottom:.35rem}
.pillar-desc{font-size:.75rem;color:rgba(255,255,255,.4);line-height:1.55}
.pillar-badge{display:inline-block;margin-top:.6rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .6rem;border-radius:100px}
.pb-blue{background:rgba(68,114,196,.15);color:rgba(68,114,196,.9)}
.pb-green{background:rgba(29,158,117,.15);color:rgba(29,158,117,.85)}
.pb-magenta{background:rgba(192,56,138,.15);color:rgba(192,56,138,.9)}
.pb-amber{background:rgba(180,140,40,.15);color:rgba(200,160,60,.9)}
.compliance-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;margin-bottom:1.5rem}
.compliance-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.ci-items{display:flex;flex-direction:column;gap:.65rem}
.ci-item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:rgba(255,255,255,.03);border-radius:8px;border:1px solid rgba(255,255,255,.06)}
.ci-check{width:20px;height:20px;border-radius:50%;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.65rem;color:#5DD4A8}
.ci-text{font-size:.8rem;color:rgba(255,255,255,.55);flex:1}
.ci-tag{font-size:.65rem;font-weight:600;color:rgba(68,114,196,.7);letter-spacing:.04em}

/* PLANS */
.plans{background:#fff}
.plans-header{text-align:center;max-width:620px;margin:0 auto 3rem}
.plans-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;max-width:1100px;margin:0 auto}
.plan-card{border:1px solid var(--border);border-radius:16px;padding:1.75rem;background:#fff;position:relative;transition:all .2s}
.plan-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.plan-card.featured{border-color:var(--blue);background:var(--blue-pale)}
.plan-card.featured::before{content:'Recomendado';position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--blue);color:#fff;font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .8rem;border-radius:100px}
.plan-name{font-family:'DM Serif Display',serif;font-size:1.1rem;font-weight:700;color:var(--navy);margin-bottom:.4rem}
.plan-desc{font-size:.75rem;color:var(--muted);margin-bottom:1.25rem;line-height:1.5}
.plan-price{font-family:'DM Serif Display',serif;font-size:2rem;color:var(--navy);line-height:1;margin-bottom:.25rem}
.plan-price span{font-size:.85rem;color:var(--muted);font-family:'DM Sans',sans-serif;font-weight:400}
.plan-period{font-size:.72rem;color:var(--muted);margin-bottom:1.25rem}
.plan-divider{height:1px;background:var(--border);margin-bottom:1.25rem}
.plan-feature{display:flex;align-items:flex-start;gap:.5rem;font-size:.78rem;color:var(--muted);margin-bottom:.6rem;line-height:1.4}
.pf-check{color:var(--green);flex-shrink:0;font-weight:700;margin-top:.05rem}
.plan-enterprise{font-size:.78rem;color:var(--blue);font-weight:500;margin-top:.75rem}

/* CTA */
.cta-final{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,3rem)}
.cta-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(68,114,196,.14) 0%,rgba(29,158,117,.06) 45%,transparent 70%)}
.cta-inner{position:relative;z-index:1;text-align:center;max-width:720px;margin:0 auto}
.cta-inner h2{font-family:'DM Serif Display',serif;font-size:clamp(1.9rem,3.5vw,2.8rem);font-weight:400;color:#fff;margin-bottom:1.1rem;line-height:1.1;letter-spacing:-.02em}
.cta-inner h2 em{font-style:italic;color:var(--magenta-s)}
.cta-sub{font-size:1rem;color:rgba(255,255,255,.55);margin-bottom:2.5rem;font-weight:300;line-height:1.75}
.cta-btns{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.cta-trust{display:flex;justify-content:center;gap:2.5rem;flex-wrap:wrap}
.ct-item{display:flex;align-items:center;gap:.4rem;font-size:.75rem;color:rgba(255,255,255,.35)}
.ct-icon{color:var(--green)}

/* ANIMATIONS */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
.reveal.up{opacity:1;transform:translateY(0)}
.reveal-delay-1{transition-delay:.1s}
.reveal-delay-2{transition-delay:.2s}
.reveal-delay-3{transition-delay:.3s}
.reveal-delay-4{transition-delay:.4s}

@media(max-width:900px){
  .hero-inner,.prob-grid,.sec-grid,.benefits-header{grid-template-columns:1fr}
  .hero-photo{inset:0;top:0;transform:none;width:auto;aspect-ratio:auto;-webkit-mask-image:none;mask-image:none}
  .hero-photo img{object-position:72% center}
  .hero-photo::after{background:linear-gradient(90deg,rgba(17,30,60,.95) 0,rgba(17,30,60,.85) 50%,rgba(17,30,60,.5) 100%),linear-gradient(0deg,#111E3C 0,rgba(17,30,60,0) 22%)}
  .benefits-grid,.uc-cards{grid-template-columns:1fr 1fr}
  .sec-pillars,.plans-grid{grid-template-columns:1fr 1fr}
  .sol-steps{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;margin:0 calc(-1 * clamp(1.5rem,4vw,3rem));padding:0 clamp(1.5rem,4vw,3rem) .75rem;scroll-padding:0 clamp(1.5rem,4vw,3rem);gap:.75rem;scrollbar-width:thin;scrollbar-color:rgba(68,114,196,.35) transparent}
  .sol-steps li{flex:0 0 34vw;scroll-snap-align:start}
}
@media(max-width:600px){
  .benefits-grid,.uc-cards,.sec-pillars,.plans-grid,.prob-items{grid-template-columns:1fr}
  .hero-ctas,.cta-btns{flex-direction:column;align-items:stretch}
  .btn-primary,.btn-outline{width:100%;justify-content:center}
  .hero-photo img{object-position:72% center}
  .hero-photo::after{background:linear-gradient(180deg,rgba(17,30,60,.9) 0,rgba(17,30,60,.86) 55%,rgba(17,30,60,.96) 100%)}
  .hero-sub{color:rgba(255,255,255,.75)}
  .sol-steps li{flex-basis:64vw}
}
`;

export default function FinancialPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO ── */}
      <section className="hero" id="inicio">
        <div className="hero-bg">
          <div className="hero-mesh"></div>
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="hero-photo">
          <Image
            src="/images/financial-hero.webp"
            alt="Cliente frente a un banco mostrando en su teléfono credenciales verificadas de identidad, ingresos y situación financiera; el banco recibe una verificación exitosa en segundos."
            fill
            preload
            sizes="100vw"
          />
        </div>
        <div className="hero-inner">
          <div>
            <div className="hero-tag">Solución para el Sector Financiero</div>
            <h1>
              Su banco conoce a sus clientes.<br />
              <em>¿Sus clientes pueden demostrarlo?</em>
            </h1>
            <p className="hero-sub">
              Veris permite que los clientes de su banco acrediten su identidad, sus ingresos y
              su situación financiera en segundos — <strong>sin formularios, sin documentos en
              papel y sin riesgo de fraude.</strong>
            </p>
            <div className="hero-ctas">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
              <a href="#como-funciona" className="btn-outline">Ver cómo funciona</a>
            </div>
            <div className="hero-proof">
              <div className="proof-item">verificación completa en 2 seg</div>
              <div className="proof-divider"></div>
              <div className="proof-item">Sin PDF y sin papel</div>
              <div className="proof-divider"></div>
              <div className="proof-item">Sin frincción para el cliente
              </div>
              <div className="proof-divider"></div>
              <div className="proof-item">Flujos 100% automáticos</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF STRIP ── */}
      <div className="proof-strip">
        <div className="proof-strip-inner">
          <div className="ps-label">Diseñado para</div>
          <div className="ps-items">
            <div className="ps-pill">Bancos e instituciones financieras</div>
            <div className="ps-pill">Fintech y neobancos</div>
            <div className="ps-pill">Cajas de compensación</div>
            <div className="ps-pill">Cooperativas de ahorro</div>
            <div className="ps-pill">Plataformas de crédito</div>
          </div>
        </div>
      </div>

      {/* ── PROBLEMA ── */}
      <section className="section problem" id="problema">
        <div className="s-inner">
          <div className="prob-grid">
            <div className="reveal">
              <div className="s-tag">El problema</div>
              <h2 className="s-title">
                Los bancos operan con información que<br />
                los clientes declaran. <em>Pero que no siempre es real.</em>
              </h2>
              <p className="s-sub">
                Desde la solicitud de un crédito hasta la apertura de una cuenta, el banco
                depende de datos que el cliente adjunta en documentos que pueden estar
                desactualizados, adulterados o directamente falsificados.
              </p>
              <div className="prob-items">
                <div className="prob-item reveal reveal-delay-1">
                  <Image src="/images/financial-problema-fraude-v3.webp" alt="Fraude de identidad y documentos adulterados: liquidaciones falsas, contratos inventados e identidades suplantadas. Sin verificación online, hay mucho riesgo." width={1920} height={1200} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 270px" />
                </div>
                <div className="prob-item reveal reveal-delay-2">
                  <Image src="/images/financial-problema-procesos-v3.webp" alt="Procesos de validación lentos y costosos: pedir documentos y revisarlos uno a uno de forma manual no es escalable." width={1920} height={1200} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 270px" />
                </div>
                <div className="prob-item reveal reveal-delay-3">
                  <Image src="/images/financial-problema-abandono-v3.webp" alt="Abandono de los mejores perfiles: cada paso adicional aumenta la fricción para los clientes más solventes." width={1920} height={1200} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 270px" />
                </div>
                <div className="prob-item reveal reveal-delay-4">
                  <Image src="/images/financial-problema-contrasenas-v2.webp" alt="Contraseñas comprometidas como vector de fraude: las credenciales robadas o reutilizadas ponen en riesgo la banca digital." width={1920} height={1200} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 270px" />
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="prob-card">
                <div className="prob-quote">
                  &quot;El banco no necesita <span>más documentos</span> — necesita
                  saber que los documentos que recibe son reales. Eso es exactamente
                  lo que Veris garantiza.&quot;
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.65 }}>
                  Veris no reemplaza los sistemas del banco. Se conecta a ellos y convierte
                  cada proceso de verificación en una confirmación en tiempo real,
                  respaldada criptográficamente por la institución que emitió los datos.
                </p>
                <div className="prob-data">
                  <div className="pd-item">
                    <div className="pd-num b">81%</div>
                    <div className="pd-label">de ataques digitales vía credenciales comprometidas</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">48h</div>
                    <div className="pd-label">tiempo promedio de validación manual en Chile</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num b">&lt;2s</div>
                    <div className="pd-label">verificación con credencial Veris</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">0</div>
                    <div className="pd-label">documentos en papel requeridos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="section solution" id="como-funciona">
        <div className="s-inner">
          <div className="sol-header reveal">
            <div className="s-tag">La solución</div>
            <h2 className="s-title">
              Su cliente demuestra su perfil real<br />
              en <em>menos de 2 segundos.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto" }}>
              Sin formularios, sin documentos, sin esperas. El cliente presenta su información
              verificada directamente desde su teléfono — respaldada por la institución que
              la emitió. 
            </p>
          </div>
          <figure className="sol-flow reveal">
            <ol className="sol-steps" aria-label="Flujo en cinco pasos">
              <li><Image src="/images/financial-paso-1.png" alt="Paso 1, Ingresa al portal: inicia sesión o abre una cuenta." width={462} height={1110} sizes="(max-width: 600px) 64vw, (max-width: 900px) 34vw, 232px" /></li>
              <li><Image src="/images/financial-paso-2.webp" alt="Paso 2, Escanea el QR: usa tu Veris Wallet." width={462} height={1110} sizes="(max-width: 600px) 64vw, (max-width: 900px) 34vw, 232px" /></li>
              <li><Image src="/images/financial-paso-3.webp" alt="Paso 3, Autoriza lo necesario: tú decides qué datos compartir." width={462} height={1110} sizes="(max-width: 600px) 64vw, (max-width: 900px) 34vw, 232px" /></li>
              <li><Image src="/images/financial-paso-4.webp" alt="Paso 4, Perfil verificado: el emisor confirma identidad, ingresos y empleo." width={462} height={1110} sizes="(max-width: 600px) 64vw, (max-width: 900px) 34vw, 232px" /></li>
              <li><Image src="/images/financial-paso-5.webp" alt="Paso 5, Entrega al instante: si calificas según el criterio del banco." width={462} height={1110} sizes="(max-width: 600px) 64vw, (max-width: 900px) 34vw, 232px" /></li>
            </ol>
          </figure>
        </div>
      </section>

      {/* ── CASOS DE USO ── */}
      <section className="section usecases" id="casos-de-uso">
        <div className="s-inner">
          <div className="uc-header reveal">
            <div className="s-tag">Casos de uso</div>
            <h2 className="s-title">
              ¿Dónde puede aplicarlo su banco <em>hoy?</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Veris se integra a los procesos existentes del banco sin reemplazar
              sistemas — agrega la capa de verificación que faltaba.
            </p>
          </div>
          <div className="uc-cards">
            <div className="uc-card reveal reveal-delay-1">
              <Image src="/images/financial-caso-credito.webp" alt="Solicitud de crédito sin papeles: ingresos y empleo verificados al instante; el sistema evalúa la solicitud con los criterios del banco. Crédito · Hipotecario." width={1920} height={1080} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px" />
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <Image src="/images/financial-caso-apertura.webp" alt="Apertura de cuenta 100% digital en segundos: nombre, RUT y domicilio verificados desde la app, sin biometría externa ni lectura de documentos. Onboarding · KYC." width={1920} height={1080} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px" />
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <Image src="/images/financial-caso-acceso.webp" alt="Acceso seguro sin contraseña: ingresa a la banca digital con tu identidad verificada y reduce el riesgo asociado a contraseñas robadas o compartidas. Autenticación · Seguridad." width={1920} height={1080} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px" />
            </div>
            <div className="uc-card reveal reveal-delay-1">
              <Image src="/images/financial-caso-productos.webp" alt="Acceso a productos según perfil real: el banco ofrece productos según condiciones verificadas, generando inteligencia de negocio en línea. Segmentación · Productos." width={1920} height={1080} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px" />
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <Image src="/images/financial-caso-autorizacion.webp" alt="Autorización de operaciones críticas: aprueba transferencias de alto monto y cambios sensibles desde la app; sin tu aprobación, la operación no procede. Seguridad · Antifraude." width={1920} height={1080} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px" />
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <Image src="/images/financial-caso-acceso-fisico.webp" alt="Control de acceso físico a instalaciones: ingresa a oficinas y áreas restringidas con tu credencial digital; el banco obtiene un registro de accesos en tiempo real. Seguridad física · RR.HH." width={1920} height={1080} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="section benefits" id="beneficios">
        <div className="s-inner">
          <div className="benefits-header reveal">
            <div>
              <div className="s-tag">Beneficios para el banco</div>
              <h2 className="s-title">
                No es solo autenticación.<br />
                <em>Es conocimiento verificado del cliente.</em>
              </h2>
            </div>
            <p className="s-sub">
              La diferencia entre saber que alguien entró al sistema y saber quién es
              realmente esa persona — y si califica para lo que está solicitando.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card bc-b reveal reveal-delay-1">
              <div className="benefit-icon bi-b">🛡️</div>
              <div className="benefit-title">Fraude eliminado desde el origen</div>
              <div className="benefit-desc">
                Las credenciales son emitidas y firmadas por la institución de origen.
                Ningún documento puede alterarse sin invalidarse automáticamente.
                El banco no necesita validar la autenticidad — ya está garantizada.
              </div>
              <div className="benefit-hl bh-b">Cero documentos falsificados posibles</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-2">
              <div className="benefit-icon bi-m">⚡</div>
              <div className="benefit-title">Procesos que pasan de días a segundos</div>
              <div className="benefit-desc">
                Lo que hoy toma días de validación manual ocurre en menos de 2 segundos.
                El banco puede emitir un crédito, abrir una cuenta o activar un producto
                en el mismo momento en que el cliente demuestra que califica.
              </div>
              <div className="benefit-hl bh-m">Conversión inmediata, sin abandonos</div>
            </div>
            <div className="benefit-card bc-g reveal reveal-delay-3">
              <div className="benefit-icon bi-g">💸</div>
              <div className="benefit-title">El banco también puede ser emisor</div>
              <div className="benefit-desc">
                El banco puede emitir sus propias credenciales — certificados de ingresos,
                historial crediticio, credencial de cliente preferente. Cada vez que un
                tercero las verifica, el banco recibe un royalty.
              </div>
              <div className="benefit-hl bh-g">Nueva fuente de ingresos recurrentes</div>
            </div>
            <div className="benefit-card bc-b reveal reveal-delay-1">
              <div className="benefit-icon bi-b">😊</div>
              <div className="benefit-title">Experiencia del cliente sin fricción</div>
              <div className="benefit-desc">
                Un escaneo de QR reemplaza formularios, documentos adjuntos y llamadas
                de confirmación. Los mejores perfiles — los que más le interesan al banco —
                son los primeros en apreciar esa diferencia.
              </div>
              <div className="benefit-hl bh-b">Mayor tasa de conversión y retención</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-2">
              <div className="benefit-icon bi-m">📊</div>
              <div className="benefit-title">Trazabilidad completa para reguladores</div>
              <div className="benefit-desc">
                Cada verificación queda registrada con fecha, hora y qué información
                se consultó. El banco tiene evidencia completa para auditorías KYC,
                AML y cumplimiento normativo — sin trabajo adicional.
              </div>
              <div className="benefit-hl bh-m">Compliance automatizado</div>
            </div>
            <div className="benefit-card bc-g reveal reveal-delay-3">
              <div className="benefit-icon bi-g">🏆</div>
              <div className="benefit-title">Diferenciación real en el mercado</div>
              <div className="benefit-desc">
                El primer banco en Chile en ofrecer verificación instantánea y sin papeles
                tiene una ventaja competitiva concreta — no una mejora incremental.
                Los clientes lo notan y lo recomiendan.
              </div>
              <div className="benefit-hl bh-g">Ventaja de primer movimiento</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEGURIDAD Y PRIVACIDAD ── */}
      <section className="section security" id="seguridad">
        <div className="s-inner sec-inner">
          <div className="sec-grid">
            <div className="reveal">
              <div className="s-tag" style={{ color: "rgba(192,56,138,.85)" }}>Privacidad y seguridad</div>
              <h2 className="s-title s-title-white">
                El banco obtiene lo que necesita.<br />
                <em style={{ color: "var(--magenta-s)" }}>El cliente protege lo que es suyo.</em>
              </h2>
              <p className="s-sub s-sub-white">
                Veris no almacena datos personales. La información viaja directamente
                desde la app del cliente al banco — Veris solo verifica la autenticidad.
              </p>
              <div className="sec-pillars">
                <div className="pillar">
                  <div className="pillar-ico">📌</div>
                  <div className="pillar-name">Solo lo necesario</div>
                  <div className="pillar-desc">
                    Si el banco necesita saber si la renta supera un umbral, recibe eso —
                    no el monto exacto. Sin datos sensibles innecesarios.
                  </div>
                  <span className="pillar-badge pb-blue">Minimización</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">🔒</div>
                  <div className="pillar-name">Imposible de falsificar</div>
                  <div className="pillar-desc">
                    Cada credencial está firmada por la institución emisora.
                    Cualquier alteración la invalida automáticamente.
                  </div>
                  <span className="pillar-badge pb-green">Integridad</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">📋</div>
                  <div className="pillar-name">Auditoría completa</div>
                  <div className="pillar-desc">
                    Registro de cada verificación con fecha, hora y qué
                    información se consultó. Listo para reguladores.
                  </div>
                  <span className="pillar-badge pb-amber">Trazabilidad</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">👤</div>
                  <div className="pillar-name">Control del cliente</div>
                  <div className="pillar-desc">
                    El cliente aprueba cada solicitud y ve en su app quién
                    accedió a su información y cuándo.
                  </div>
                  <span className="pillar-badge pb-magenta">Transparencia</span>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="compliance-box">
                <div className="compliance-title">Estándares y normativas cubiertas</div>
                <div className="ci-items">
                  {[
                    { text: "KYC — Know Your Customer", tag: "Banca" },
                    { text: "AML — Prevención lavado de activos", tag: "Regulatorio" },
                    { text: "W3C Verifiable Credentials", tag: "Internacional" },
                    { text: "Ley 21.096 — Protección de Datos", tag: "Chile" },
                    { text: "Ley Fintech", tag: "Financiero" },
                    { text: "ISO 27001 aligned", tag: "Seguridad" },
                  ].map((item) => (
                    <div className="ci-item" key={item.text}>
                      <div className="ci-check">✓</div>
                      <div className="ci-text">{item.text}</div>
                      <div className="ci-tag">{item.tag}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "12px", padding: "1.25rem" }}>
                <div className="compliance-title" style={{ marginBottom: ".75rem" }}>Instancia privada disponible</div>
                <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.45)", lineHeight: 1.65, marginBottom: ".75rem" }}>
                  Para bancos con requerimientos de soberanía de datos, Veris puede
                  desplegarse en la infraestructura del banco — sin dependencia de
                  servidores externos. Licencia anual, sin costo por verificación.
                </p>
                <div style={{ fontSize: ".78rem", color: "rgba(68,114,196,.8)", fontWeight: 500 }}>
                  Consultar plan Enterprise →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-final" id="demo">
        <div className="cta-mesh"></div>
        <div className="cta-inner reveal">
          <div className="s-tag" style={{ display: "block", marginBottom: "1rem", color: "rgba(192,56,138,.85)" }}>
            Programa piloto
          </div>
          <h2>
            ¿Comenzamos con un piloto<br />
            <em>operativo en una semana?</em>
          </h2>
          <p className="cta-sub">
            Defina el caso de uso con su equipo, Veris entrega acceso al entorno de pruebas
            en 24 horas y el piloto está operativo en menos de una semana. Sin compromisos
            de escala, sin cambios en su infraestructura actual.
          </p>
          <div className="cta-btns">
            <DemoTrigger className="btn-primary" style={{ fontSize: "1rem", padding: ".9rem 2rem" }}>
              Agendar una demo →
            </DemoTrigger>
            <Link href="/" className="btn-outline">← Volver a Veris</Link>
          </div>
          <div className="cta-trust">
            <div className="ct-item"><span className="ct-icon">✓</span> Sin costo de implementación</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Sin cambios en su arquitectura</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Soporte técnico dedicado</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Sandbox desde el día 1</div>
          </div>
        </div>
      </section>
    </>
  );
}
