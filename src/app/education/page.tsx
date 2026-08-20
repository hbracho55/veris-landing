"use client";
import { useEffect } from "react";
import Link from "next/link";
import DemoTrigger from "../_components/DemoTrigger";

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1E3564;--navy-mid:#243A6A;--navy-deep:#111E3C;
  --blue:#4472C4;--blue-pale:#EEF3FB;
  --magenta:#C0388A;--magenta-s:#D058A0;--magenta-pale:#FAE0F2;
  --violet:#6C4AB0;--violet-s:#8B6FD0;--violet-pale:#F0EEFE;--violet-mid:#E4DEFF;
  --white:#FFFFFF;--ice:#F0F4FB;--ice-mid:#D8E5F5;
  --text:#1A2B4A;--muted:#5A6A8A;--faint:#8A9BB8;--border:#D0DCF0;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text);line-height:1.6;overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--violet);border-radius:2px}
a{text-decoration:none}

/* HERO */
.hero{min-height:100vh;background:var(--navy-deep);display:flex;align-items:center;position:relative;overflow:hidden;padding-top:100px}
.hero-bg{position:absolute;inset:0}
.hero-mesh{position:absolute;inset:0;background:
  radial-gradient(ellipse 70% 55% at 72% 28%, rgba(108,74,176,.22) 0%, transparent 60%),
  radial-gradient(ellipse 55% 45% at 12% 75%, rgba(108,74,176,.1) 0%, transparent 58%),
  radial-gradient(ellipse 35% 30% at 50% 5%, rgba(68,114,196,.07) 0%, transparent 55%)}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:64px 64px}
.hero-glow{position:absolute;top:10%;right:5%;width:480px;height:480px;background:radial-gradient(circle,rgba(108,74,176,.16) 0%,transparent 65%);border-radius:50%;animation:gpulse 5s ease-in-out infinite}
@keyframes gpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.08);opacity:.5}}
.hero-inner{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:5rem clamp(1.25rem,4vw,3rem);display:grid;grid-template-columns:1.1fr 1fr;gap:4rem;align-items:center}
.hero-tag{display:inline-flex;align-items:center;gap:.5rem;background:rgba(108,74,176,.15);border:1px solid rgba(108,74,176,.3);color:rgba(180,150,240,.9);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .9rem;border-radius:100px;margin-bottom:1.5rem}
.hero-tag::before{content:'';width:5px;height:5px;background:rgba(180,150,240,.9);border-radius:50%;animation:bdot 2.2s ease-in-out infinite}
@keyframes bdot{0%,100%{opacity:1}50%{opacity:.2}}
.hero h1{font-family:'DM Serif Display',serif;font-size:clamp(2.4rem,4.5vw,3.6rem);line-height:1.1;color:#fff;font-weight:400;margin-bottom:1.5rem;letter-spacing:-.02em}
.hero h1 em{font-style:italic;color:var(--magenta-s)}
.hero-sub{font-size:1.05rem;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:2.5rem;font-weight:300;max-width:500px}
.hero-sub strong{color:rgba(255,255,255,.85);font-weight:500}
.hero-ctas{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.75rem}
.btn-primary{background:var(--violet);color:#fff;padding:.85rem 1.75rem;border-radius:8px;font-size:.97rem;font-weight:500;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;border:none;cursor:pointer;font-family:'DM Sans',sans-serif}
.btn-primary:hover{background:#5A3A9A;transform:translateY(-2px);box-shadow:0 10px 28px rgba(108,74,176,.4)}
.btn-outline{background:transparent;color:rgba(255,255,255,.75);padding:.85rem 1.5rem;border-radius:8px;font-size:.92rem;font-weight:400;text-decoration:none;transition:all .2s;border:1px solid rgba(255,255,255,.2);display:inline-flex;align-items:center;gap:.5rem;font-family:'DM Sans',sans-serif}
.btn-outline:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4);color:#fff}
.hero-proof{display:flex;flex-wrap:wrap;gap:1.5rem}
.proof-item{font-size:.75rem;color:rgba(255,255,255,.35);letter-spacing:.06em;text-transform:uppercase}
.proof-item strong{color:rgba(255,255,255,.7);font-weight:600;display:block;font-size:1.1rem;letter-spacing:0;text-transform:none}
.proof-divider{width:1px;height:24px;background:rgba(255,255,255,.12);align-self:center}

/* Hero card */
.hero-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(8px)}
.hero-card-top{padding:1.4rem 1.75rem;border-bottom:1px solid rgba(255,255,255,.07)}
.hero-card-label{font-size:.68rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.flow-step{display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.1rem}
.flow-step:last-child{margin-bottom:0}
.flow-icon{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem}
.fi-1{background:rgba(108,74,176,.22);border:1px solid rgba(108,74,176,.38)}
.fi-2{background:rgba(192,56,138,.18);border:1px solid rgba(192,56,138,.3)}
.fi-3{background:rgba(108,74,176,.18);border:1px solid rgba(108,74,176,.32)}
.fi-4{background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.3)}
.flow-title{font-size:.82rem;font-weight:500;color:rgba(255,255,255,.88);line-height:1.2}
.flow-sub{font-size:.72rem;color:rgba(255,255,255,.38);margin-top:.15rem}
.flow-arrow{text-align:center;color:rgba(255,255,255,.2);font-size:.75rem;margin:-.15rem 0 -.15rem 1.2rem}
.flow-check{width:18px;height:18px;border-radius:50%;background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.4);display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#5DD4A8;flex-shrink:0;align-self:center}
.hero-card-stats{display:grid;grid-template-columns:1fr 1fr 1fr;padding:1.25rem 1.75rem}
.stat-col{text-align:center;padding:.5rem 0}
.stat-col+.stat-col{border-left:1px solid rgba(255,255,255,.07)}
.stat-val{font-family:'DM Serif Display',serif;font-size:1.6rem;color:#fff;line-height:1}
.stat-val.violet{color:#C4A8FF}
.stat-lab{font-size:.62rem;color:rgba(255,255,255,.35);letter-spacing:.06em;text-transform:uppercase;margin-top:.3rem}

/* PROOF STRIP */
.proof-strip{background:var(--navy-mid);border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);padding:1.1rem clamp(1.25rem,4vw,3rem)}
.proof-strip-inner{max-width:1160px;margin:0 auto;display:flex;align-items:center;gap:2rem;flex-wrap:wrap}
.ps-label{font-size:.65rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.22);white-space:nowrap;flex-shrink:0}
.ps-items{display:flex;gap:.75rem;flex-wrap:wrap}
.ps-pill{font-size:.77rem;color:rgba(255,255,255,.3);padding:.28rem .8rem;border:1px solid rgba(255,255,255,.09);border-radius:100px}

/* SECTIONS */
.section{padding:clamp(4rem,8vw,7rem) clamp(1.5rem,4vw,3rem)}
.s-inner{max-width:1160px;margin:0 auto}
.s-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.75rem;color:var(--violet)}
.s-title{font-family:'DM Serif Display',serif;font-size:clamp(1.7rem,3vw,2.4rem);font-weight:400;line-height:1.1;color:var(--navy);letter-spacing:-.02em;margin-bottom:.75rem}
.s-title em{font-style:italic;color:var(--magenta)}
.s-sub{font-size:1rem;color:var(--muted);max-width:560px;line-height:1.75;font-weight:300}
.s-title-white{color:#fff}
.s-sub-white{color:rgba(255,255,255,.55)}

/* PROBLEM */
.problem{background:#fff}
.prob-grid{display:grid;grid-template-columns:1fr 1fr;gap:4.5rem;align-items:center}
.prob-items{display:flex;flex-direction:column;gap:.9rem;margin-top:2rem}
.prob-item{display:flex;gap:1rem;padding:1.1rem 1.25rem;border:1px solid var(--border);border-radius:12px;background:#fff;transition:border-color .2s,box-shadow .2s}
.prob-item:hover{border-color:var(--violet);box-shadow:0 4px 16px rgba(108,74,176,.08)}
.pi-icon{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.95rem}
.pi-r{background:#FEE8E8}.pi-a{background:#FEF4E0}.pi-v{background:var(--violet-pale)}.pi-b{background:var(--blue-pale)}
.pi-title{font-size:.875rem;font-weight:600;color:var(--navy);margin-bottom:.2rem}
.pi-desc{font-size:.78rem;color:var(--muted);line-height:1.55}
.prob-card{background:var(--ice);border:1px solid var(--border);border-radius:16px;padding:1.75rem;overflow:hidden;position:relative}
.prob-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--violet),var(--magenta))}
.prob-quote{font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--navy);line-height:1.55;font-style:italic;margin-bottom:1.25rem}
.prob-quote span{color:var(--violet);font-style:normal;font-weight:700}
.prob-data{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.25rem}
.pd-item{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.9rem 1rem}
.pd-num{font-family:'DM Serif Display',serif;font-size:1.6rem;color:var(--navy);line-height:1}
.pd-num.v{color:var(--violet)}.pd-num.m{color:var(--magenta)}
.pd-label{font-size:.72rem;color:var(--muted);margin-top:.25rem;line-height:1.4}

/* SOLUTION */
.solution{background:var(--ice)}
.sol-header{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.sol-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;position:relative}
.sol-steps::before{content:'';position:absolute;top:28px;left:calc(12.5% + 16px);right:calc(12.5% + 16px);height:1px;background:linear-gradient(90deg,var(--violet),var(--magenta),var(--violet));opacity:.3}
.sol-step{text-align:center;padding:1.5rem 1rem;background:#fff;border:1px solid var(--border);border-radius:14px;position:relative;z-index:1;transition:transform .2s,box-shadow .2s}
.sol-step:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.step-num{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.1rem;font-family:'DM Serif Display',serif;font-size:1.4rem;font-weight:800;color:#fff}
.sn-1{background:var(--violet)}.sn-2{background:var(--magenta)}.sn-3{background:var(--navy)}.sn-4{background:#1D9E75}
.sol-step h3{font-family:'DM Serif Display',serif;font-size:.9rem;font-weight:700;color:var(--navy);margin-bottom:.5rem}
.sol-step p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* BENEFITS */
.benefits{background:#fff}
.benefits-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3rem}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.benefit-card{background:var(--ice);border:1px solid var(--border);border-radius:14px;padding:1.6rem;transition:all .22s;position:relative;overflow:hidden}
.benefit-card:hover{background:#fff;box-shadow:0 8px 26px rgba(108,74,176,.09);transform:translateY(-2px)}
.benefit-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;transform:scaleX(0);transition:transform .25s;transform-origin:left}
.benefit-card:hover::before{transform:scaleX(1)}
.bc-v::before{background:var(--violet)}.bc-m::before{background:var(--magenta)}.bc-b::before{background:var(--blue)}
.benefit-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;font-size:1.1rem}
.bi-v{background:var(--violet-pale)}.bi-m{background:var(--magenta-pale)}.bi-b{background:var(--blue-pale)}
.benefit-title{font-family:'DM Serif Display',serif;font-size:.95rem;font-weight:700;color:var(--navy);margin-bottom:.55rem}
.benefit-desc{font-size:.79rem;color:var(--muted);line-height:1.62}
.benefit-hl{margin-top:.85rem;padding-top:.75rem;border-top:1px solid var(--border);font-size:.72rem;font-weight:600}
.bh-v{color:var(--violet)}.bh-m{color:var(--magenta)}.bh-b{color:var(--blue)}

/* DOCUMENTS */
.documents{background:var(--ice)}
.doc-header{text-align:center;max-width:640px;margin:0 auto 3rem}
.doc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.doc-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s}
.doc-card:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(108,74,176,.1)}
.doc-num{font-family:'DM Serif Display',serif;font-size:2.5rem;color:var(--violet-mid);line-height:1;margin-bottom:.75rem;letter-spacing:-.03em}
.doc-card h3{font-size:.9rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.doc-card p{font-size:.78rem;color:var(--muted);line-height:1.6}
.doc-badge{display:inline-flex;margin-top:.85rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.22rem .65rem;border-radius:100px;background:var(--violet-pale);color:var(--violet)}

/* VERIFY BOX */
.verify-box{background:var(--violet-pale);border:1px solid rgba(108,74,176,.2);border-radius:12px;padding:1.25rem 1.5rem;display:flex;align-items:flex-start;gap:1rem;margin-top:2rem}
.verify-icon{font-size:1.4rem;flex-shrink:0}
.verify-text h4{font-size:.82rem;font-weight:700;color:var(--violet);margin-bottom:.2rem}
.verify-text p{font-size:.76rem;color:var(--muted);line-height:1.55}
.verify-badges{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.5rem}
.verify-badge{font-size:.65rem;font-weight:600;padding:.18rem .55rem;border-radius:100px;background:rgba(108,74,176,.12);color:var(--violet)}

/* SECURITY */
.security{background:var(--navy-deep);position:relative;overflow:hidden}
.security::after{content:'';position:absolute;top:-30%;right:-15%;width:700px;height:700px;background:radial-gradient(circle,rgba(108,74,176,.08) 0%,transparent 60%);border-radius:50%}
.sec-inner{position:relative;z-index:1}
.sec-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
.sec-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem}
.pillar{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:1.25rem;transition:border-color .2s}
.pillar:hover{border-color:rgba(255,255,255,.15)}
.pillar-ico{font-size:1.2rem;margin-bottom:.75rem}
.pillar-name{font-family:'DM Serif Display',serif;font-size:.88rem;font-weight:700;color:#fff;margin-bottom:.35rem}
.pillar-desc{font-size:.75rem;color:rgba(255,255,255,.4);line-height:1.55}
.pillar-badge{display:inline-block;margin-top:.6rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .6rem;border-radius:100px}
.pb-violet{background:rgba(108,74,176,.2);color:rgba(155,127,224,.9)}
.pb-green{background:rgba(29,158,117,.15);color:rgba(29,158,117,.85)}
.pb-magenta{background:rgba(192,56,138,.15);color:rgba(192,56,138,.9)}
.pb-amber{background:rgba(180,140,40,.15);color:rgba(200,160,60,.9)}
.compliance-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;margin-bottom:1.5rem}
.compliance-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.ci-items{display:flex;flex-direction:column;gap:.65rem}
.ci-item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:rgba(255,255,255,.03);border-radius:8px;border:1px solid rgba(255,255,255,.06)}
.ci-check{width:20px;height:20px;border-radius:50%;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.65rem;color:#5DD4A8}
.ci-text{font-size:.8rem;color:rgba(255,255,255,.55);flex:1}
.ci-tag{font-size:.65rem;font-weight:600;color:rgba(155,127,224,.8);letter-spacing:.04em}

/* INTEGRATION */
.integration{background:#fff}
.int-grid{display:grid;grid-template-columns:1fr 1fr;gap:4.5rem;align-items:center}
.int-list{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}
.int-item{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.25rem;background:var(--ice);border:1px solid var(--border);border-radius:10px}
.int-dot{width:8px;height:8px;border-radius:50%;background:var(--violet);flex-shrink:0;margin-top:.4rem}
.int-dot.m{background:var(--magenta)}.int-dot.b{background:var(--blue)}
.int-text{font-size:.875rem;font-weight:500;color:var(--navy);margin-bottom:.15rem}
.int-sub{font-size:.78rem;color:var(--muted)}
.code-window{background:#0D1B33;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.08)}
.code-bar{display:flex;gap:.4rem;padding:.85rem 1.1rem;border-bottom:1px solid rgba(255,255,255,.06)}
.code-dot{width:9px;height:9px;border-radius:50%}
.cd1{background:#FF5F57}.cd2{background:#FEBC2E}.cd3{background:#28C840}
.code-body{padding:1.2rem 1.4rem;font-family:'SF Mono','Courier New',monospace;font-size:.74rem;line-height:1.88}
.cc{color:#5A7A8A}.ck{color:#C4A8FF}.cs{color:#B89EE8}.cv{color:#FAC775}.cp{color:#E880C0}

/* CTA */
.cta-final{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,3rem)}
.cta-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(108,74,176,.14) 0%,rgba(192,56,138,.07) 45%,transparent 70%)}
.cta-inner{position:relative;z-index:1;text-align:center;max-width:720px;margin:0 auto}
.cta-inner h2{font-family:'DM Serif Display',serif;font-size:clamp(1.9rem,3.5vw,2.8rem);font-weight:400;color:#fff;margin-bottom:1.1rem;line-height:1.1;letter-spacing:-.02em}
.cta-inner h2 em{font-style:italic;color:var(--magenta-s)}
.cta-sub{font-size:1rem;color:rgba(255,255,255,.55);margin-bottom:2.5rem;font-weight:300;line-height:1.75}
.cta-btns{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.cta-trust{display:flex;justify-content:center;gap:2.5rem;flex-wrap:wrap}
.ct-item{display:flex;align-items:center;gap:.4rem;font-size:.75rem;color:rgba(255,255,255,.35)}
.ct-icon{color:#5DD4A8}

/* ANIMATIONS */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
.reveal.up{opacity:1;transform:translateY(0)}
.reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}
.reveal-delay-3{transition-delay:.3s}.reveal-delay-4{transition-delay:.4s}

@media(max-width:900px){
  .hero-inner,.prob-grid,.sec-grid,.int-grid,.benefits-header{grid-template-columns:1fr}
  .hero-right{display:none}
  .sol-steps,.benefits-grid,.doc-cards{grid-template-columns:1fr 1fr}
  .sec-pillars{grid-template-columns:1fr 1fr}
  .sol-steps::before{display:none}
}
@media(max-width:600px){
  .sol-steps,.benefits-grid,.doc-cards,.sec-pillars{grid-template-columns:1fr}
  .hero-ctas{flex-direction:column;align-items:stretch}
  .btn-primary,.btn-outline{width:100%;justify-content:center}
  .nav__links{display:none}
  .cta-btns{flex-direction:column;align-items:stretch}
}
`;

export default function EducationPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); }
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

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-bg">
          <div className="hero-mesh"></div>
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="hero-inner">
          <div>
            <div className="hero-tag">Solución para Instituciones Educativas</div>
            <h1>
              Su institución forma a miles de personas.<br />
              <em>¿Ellas pueden acreditarlo donde lo necesiten?</em>
            </h1>
            <p className="hero-sub">
              Veris permite que su institución emita títulos, diplomas y certificados académicos en formato digital — que los egresados llevan en su teléfono y <strong>cualquier empresa puede verificar en segundos, sin llamar a su secretaría.</strong>
            </p>
            <div className="hero-ctas">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
              <a href="#como-funciona" className="btn-outline">Ver cómo funciona</a>
            </div>
            <div className="hero-proof">
              <div className="proof-item"><strong>&lt;2s</strong>para verificar un título o certificado</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>0</strong>llamadas de verificación</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>💰</strong>royalty por cada verificación</div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-top">
                <div className="hero-card-label">Flujo de título digital académico</div>
                <div className="flow-step">
                  <div className="flow-icon fi-1">🎓</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Su institución emite el título digital</div>
                    <div className="flow-sub">Al momento de titularse — una sola vez</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-2">📱</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">El título llega a la app del egresado</div>
                    <div className="flow-sub">Disponible siempre — no se pierde ni deteriora</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-3">🌎</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">El egresado lo presenta donde lo necesite</div>
                    <div className="flow-sub">En un proceso de selección, en otro país — muestra un QR</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-4">✅</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">La empresa verifica en menos de 2 segundos</div>
                    <div className="flow-sub">Sin llamar a la secretaría. Auténtico e imposible de falsificar.</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
              </div>
              <div className="hero-card-stats">
                <div className="stat-col">
                  <div className="stat-val violet">0</div>
                  <div className="stat-lab">Llamadas</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">&lt;2s</div>
                  <div className="stat-lab">Verificación</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">💰</div>
                  <div className="stat-lab">Royalty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="proof-strip">
        <div className="proof-strip-inner">
          <div className="ps-label">Diseñado para</div>
          <div className="ps-items">
            <div className="ps-pill">Universidades</div>
            <div className="ps-pill">Institutos profesionales</div>
            <div className="ps-pill">CFT</div>
            <div className="ps-pill">Programas de postgrado</div>
            <div className="ps-pill">Educación ejecutiva</div>
            <div className="ps-pill">Instituciones acreditadas</div>
          </div>
        </div>
      </div>

      {/* PROBLEMA */}
      <section className="section problem" id="problema">
        <div className="s-inner">
          <div className="prob-grid">
            <div className="reveal">
              <div className="s-tag">El problema</div>
              <h2 className="s-title">
                La institución invierte años en formar a sus egresados.<br />
                <em>Acreditarlo hoy es lento, costoso y frágil.</em>
              </h2>
              <p className="s-sub">
                Cada proceso de verificación de un título expone a su institución a problemas que consumen tiempo, dañan su reputación y le cuestan dinero — sin que reciba nada a cambio por el valor que genera.
              </p>
              <div className="prob-items">
                <div className="prob-item reveal reveal-delay-1">
                  <div className="pi-icon pi-r">📞</div>
                  <div>
                    <div className="pi-title">Llamadas y correos de verificación sin fin</div>
                    <div className="pi-desc">
                      Empresas, organismos públicos y otras instituciones contactan a la secretaría para confirmar si alguien realmente obtuvo un título. Son decenas de consultas al mes que nadie tiene tiempo de gestionar bien.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-2">
                  <div className="pi-icon pi-a">🎭</div>
                  <div>
                    <div className="pi-title">Títulos y certificados falsificados</div>
                    <div className="pi-desc">
                      El fraude con títulos universitarios falsos es un problema real en Chile y el mundo. Cuando alguien usa un título apócrifo que menciona a su institución, el daño reputacional recae sobre ustedes.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-3">
                  <div className="pi-icon pi-v">📄</div>
                  <div>
                    <div className="pi-title">El egresado depende de un papel que puede perder</div>
                    <div className="pi-desc">
                      El título físico es único, difícil de reponer y fácil de perder. Cuando el egresado lo necesita años después, el proceso de obtener una copia es lento y engorroso para él y para su institución.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-4">
                  <div className="pi-icon pi-b">💰</div>
                  <div>
                    <div className="pi-title">Valor que la institución genera y no monetiza</div>
                    <div className="pi-desc">
                      El título emitido por su institución vale — empresas y personas dependen de él para tomar decisiones importantes. Hoy esa verificación ocurre sin que su institución reciba nada a cambio.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="prob-card">
                <div className="prob-quote">
                  &quot;Su institución forma profesionales de valor. Lo que hace Veris es convertir ese valor en{" "}
                  <span>algo verificable en todo el mundo</span>
                  {" "}— de forma instantánea y sin intermediarios.&quot;
                </div>
                <div className="prob-data">
                  <div className="pd-item">
                    <div className="pd-num v">0</div>
                    <div className="pd-label">llamadas de verificación que su secretaría debe responder</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">&lt;2s</div>
                    <div className="pd-label">para verificar un título con Veris</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num m">💰</div>
                    <div className="pd-label">royalty por cada verificación exitosa de un título suyo</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num v">$0</div>
                    <div className="pd-label">costo de implementación para su institución</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="section solution" id="como-funciona">
        <div className="s-inner">
          <div className="sol-header reveal">
            <div className="s-tag">La solución</div>
            <h2 className="s-title">
              Su institución emite una vez.<br />
              <em>El egresado lo usa toda su vida.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto" }}>
              Sin cambios en su sistema académico. Veris se conecta a él y convierte cada título en una credencial digital que el egresado porta — verificable en cualquier país, en cualquier momento.
            </p>
          </div>
          <div className="sol-steps">
            <div className="sol-step reveal reveal-delay-1">
              <div className="step-num sn-1">1</div>
              <h3>Su institución emite el título digital</h3>
              <p>
                Al momento de titularse, el egresado recibe su credencial digital en la app. Una sola vez, para siempre.
              </p>
            </div>
            <div className="sol-step reveal reveal-delay-2">
              <div className="step-num sn-2">2</div>
              <h3>El egresado lo lleva en su teléfono</h3>
              <p>
                Como un documento siempre disponible. No se pierde, no se deteriora, no requiere copias ni legalizaciones.
              </p>
            </div>
            <div className="sol-step reveal reveal-delay-3">
              <div className="step-num sn-3">3</div>
              <h3>Lo presenta donde lo necesite</h3>
              <p>
                En un proceso de selección, para estudiar en el extranjero, ante cualquier institución. Muestra un código QR.
              </p>
            </div>
            <div className="sol-step reveal reveal-delay-4">
              <div className="step-num sn-4">4</div>
              <h3>La empresa verifica en &lt;2 segundos — su institución cobra</h3>
              <p>
                Sin llamar a la secretaría. Su institución recibe un royalty por cada verificación exitosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section benefits" id="beneficios">
        <div className="s-inner">
          <div className="benefits-header reveal">
            <div>
              <div className="s-tag">Beneficios para instituciones educativas</div>
              <h2 className="s-title">
                Su institución forma profesionales de valor.<br />
                <em>Con Veris, ese valor es verificable en todo el mundo.</em>
              </h2>
            </div>
            <p className="s-sub">
              Cada título que emite con Veris trabaja para su institución: protege su reputación, elimina la carga operativa de verificación, mantiene el vínculo con sus egresados y genera ingresos recurrentes.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card bc-v reveal reveal-delay-1">
              <div className="benefit-icon bi-v">🛡️</div>
              <div className="benefit-title">Títulos imposibles de falsificar</div>
              <div className="benefit-desc">
                Cada título está firmado digitalmente por su institución. Cualquier alteración lo invalida de inmediato — nadie puede usar un título falso con su nombre.
              </div>
              <div className="benefit-hl bh-v">Protección de marca garantizada</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-2">
              <div className="benefit-icon bi-m">💰</div>
              <div className="benefit-title">Nueva fuente de ingresos recurrentes</div>
              <div className="benefit-desc">
                Emitir credenciales no tiene costo. El empleador que verifica paga la transacción — y su institución recibe un royalty. Cuantos más egresados activos, mayor el ingreso.
              </div>
              <div className="benefit-hl bh-m">Ingresos por cada verificación exitosa</div>
            </div>
            <div className="benefit-card bc-b reveal reveal-delay-3">
              <div className="benefit-icon bi-b">🌎</div>
              <div className="benefit-title">Verificación internacional sin burocracia</div>
              <div className="benefit-desc">
                Un egresado que busca trabajo en el extranjero puede acreditar su título al instante, sin apostilla ni trámites consulares para la verificación básica. La empresa contratante verifica en segundos desde cualquier país.
              </div>
              <div className="benefit-hl bh-b">Verificable en cualquier país</div>
            </div>
            <div className="benefit-card bc-v reveal reveal-delay-1">
              <div className="benefit-icon bi-v">⚙️</div>
              <div className="benefit-title">Cero llamadas de verificación</div>
              <div className="benefit-desc">
                Sin llamadas de verificación al registro. Sin correos de empleadores pidiendo confirmación. Sin responsabilidad sobre brechas de datos. Su secretaría deja de ser parte del flujo de validación.
              </div>
              <div className="benefit-hl bh-v">Secretaría liberada de verificaciones</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-2">
              <div className="benefit-icon bi-m">🤝</div>
              <div className="benefit-title">Vínculo permanente con sus egresados</div>
              <div className="benefit-desc">
                La app Veris mantiene una conexión activa entre su institución y sus egresados. Puede actualizar certificaciones, notificar sobre programas de educación continua y ofrecer nuevos beneficios directamente.
              </div>
              <div className="benefit-hl bh-m">Canal activo de por vida</div>
            </div>
            <div className="benefit-card bc-b reveal reveal-delay-3">
              <div className="benefit-icon bi-b">✅</div>
              <div className="benefit-title">Cumplimiento normativo automático</div>
              <div className="benefit-desc">
                Portabilidad y consentimiento explícito incorporados. Compatible con Ley 21.096, Ley Fintech e ISO 27001. Cumple con los requisitos de protección de datos de egresados sin cambiar su sistema.
              </div>
              <div className="benefit-hl bh-b">Compliance sin tocar su SGA</div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className="section documents" id="documentos">
        <div className="s-inner">
          <div className="doc-header reveal">
            <div className="s-tag">Credenciales verificables</div>
            <h2 className="s-title">
              Todo lo que su institución emite puede volverse <em>imposible de falsificar.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Desde títulos profesionales hasta certificados de cursos cortos. Si existe un documento que un egresado necesita presentar ante terceros, Veris puede convertirlo en una credencial verificable.
            </p>
          </div>
          <div className="doc-cards">
            {[
              {
                n: "01", h: "Títulos profesionales",
                p: "La credencial más demandada por empleadores. Verificable globalmente en segundos contra tu institución como fuente de verdad. Elimina definitivamente los títulos falsificados.",
                b: "Empleadores · Postgrados"
              },
              {
                n: "02", h: "Diplomas de postgrado",
                p: "Magíster, doctorado, MBA y programas ejecutivos. Verificables para admisiones internacionales, habilitaciones profesionales y procesos de contratación especializada.",
                b: "Empleadores · Universidades"
              },
              {
                n: "03", h: "Certificados de egreso",
                p: "Constancia de egreso y cierre de malla antes del proceso de titulación. Útil para postulaciones a empleos, becas y programas de continuidad de estudios.",
                b: "Empleadores · Becas"
              },
              {
                n: "04", h: "Certificados de alumno regular y matrícula",
                p: "Acreditación de matrícula vigente para becas, transporte estudiantil, FONASA y beneficios. Verificables en tiempo real — el egresado no necesita pedirle el certificado a la secretaría cada vez.",
                b: "Gobierno · Servicios"
              },
              {
                n: "05", h: "Acreditaciones institucionales",
                p: "Constancias de acreditación de la institución o de carreras específicas, verificables por empleadores que requieren certificar la calidad del programa cursado.",
                b: "CNA · Empleadores"
              },
              {
                n: "06", h: "Certificados de competencias y cursos",
                p: "Diplomados, cursos de extensión, certificaciones técnicas y programas de formación continua. Tu institución como emisor de reputación profesional a lo largo de toda la vida.",
                b: "Formación continua"
              },
            ].map((d, i) => (
              <div className="doc-card reveal" style={{ transitionDelay: `${.08 * (i % 3 + 1)}s` }} key={d.n}>
                <div className="doc-num">{d.n}</div>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
                <span className="doc-badge">{d.b}</span>
              </div>
            ))}
          </div>

          <div className="verify-box reveal">
            <div className="verify-icon">🌍</div>
            <div className="verify-text">
              <h4>Verificable en todo el mundo, para siempre</h4>
              <p>
                Las credenciales Veris son verificables por cualquier empleador, institución educativa o entidad gubernamental del mundo — sin apostillas, sin intermediarios, en cualquier país. El egresado lleva su título en el teléfono de por vida.
              </p>
              <div className="verify-badges">
                {["W3C Verifiable Credentials", "OpenID Connect", "Ley 21.096", "ISO 27001", "Portable globalmente"].map(t => (
                  <span className="verify-badge" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section className="section security" id="seguridad">
        <div className="s-inner sec-inner">
          <div className="sec-grid">
            <div className="reveal">
              <div className="s-tag" style={{ color: "rgba(192,56,138,.85)" }}>
                Seguridad por diseño
              </div>
              <h2 className="s-title s-title-white">
                Construida para que tu reputación{" "}
                <em style={{ color: "var(--magenta-s)" }}>no pueda ser comprometida.</em>
              </h2>
              <p className="s-sub s-sub-white">
                Los datos académicos de sus egresados son su responsabilidad. Veris fue diseñada para que su institución emita credenciales verificables sin asumir responsabilidad adicional sobre datos de terceros.
              </p>
              <div className="sec-pillars">
                <div className="pillar">
                  <div className="pillar-ico">🔐</div>
                  <div className="pillar-name">Confianza Cero</div>
                  <div className="pillar-desc">Autenticación y autorización independiente en cada operación. Ningún sistema se asume confiable por defecto.</div>
                  <span className="pillar-badge pb-violet">Arquitectura</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">🛡️</div>
                  <div className="pillar-name">Privacidad por Diseño</div>
                  <div className="pillar-desc">Solo los datos necesarios en cada credencial. La privacidad del egresado está incorporada en el diseño original del sistema.</div>
                  <span className="pillar-badge pb-green">Por defecto</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">🗂️</div>
                  <div className="pillar-name">Zero Data Liability</div>
                  <div className="pillar-desc">Los datos académicos del egresado no se almacenan en Veris. Tu institución no acumula responsabilidad sobre datos de terceros.</div>
                  <span className="pillar-badge pb-magenta">Compliance</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">📋</div>
                  <div className="pillar-name">Consentimiento Explícito</div>
                  <div className="pillar-desc">El egresado autoriza cada uso de su credencial. Trazabilidad completa de quién accedió a qué y cuándo.</div>
                  <span className="pillar-badge pb-amber">Auditoría</span>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="compliance-box">
                <div className="compliance-title">Estándares y normativas cubiertas</div>
                <div className="ci-items">
                  {[
                    { text: "W3C Verifiable Credentials", tag: "Internacional" },
                    { text: "OpenID Connect", tag: "Identidad" },
                    { text: "Ley 21.096 — Protección de Datos", tag: "Chile" },
                    { text: "Ley Fintech", tag: "Financiero" },
                    { text: "ISO 27001 aligned", tag: "Seguridad" },
                    { text: "Portable globalmente (sin apostilla)", tag: "Global" },
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
                <div className="compliance-title" style={{ marginBottom: ".75rem" }}>Integración técnica</div>
                <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.45)", lineHeight: 1.65, marginBottom: ".75rem" }}>
                  API REST + Webhooks estándar. Compatible con los principales SGA del mercado.
                  Sin acceso a tus sistemas internos. Sandbox incluido. 5–10 días de integración.
                </p>
                <div style={{ fontSize: ".78rem", color: "rgba(155,127,224,.85)", fontWeight: 500 }}>
                  Ver documentación técnica →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRACIÓN */}
      <section className="section integration" id="integracion">
        <div className="s-inner">
          <div className="int-grid">
            <div className="reveal">
              <div className="s-tag">Integración técnica</div>
              <h2 className="s-title">
                Compatible con su sistema académico.<br />
                <em>Sin tocar su arquitectura actual.</em>
              </h2>
              <p className="s-sub">
                Veris se conecta a su sistema de gestión académica mediante integración estándar. No requiere migración de datos ni acceso a sistemas internos. En 5 a 10 días tiene sus primeras credenciales verificables en producción.
              </p>
              <div className="int-list">
                <div className="int-item">
                  <div className="int-dot"></div>
                  <div>
                    <div className="int-text">Integración con su SGA en 5–10 días</div>
                    <div className="int-sub">Compatible con los principales sistemas académicos del mercado chileno</div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot m"></div>
                  <div>
                    <div className="int-text">Emisión automática al titularse</div>
                    <div className="int-sub">El egresado recibe su credencial digital sin trámites adicionales</div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot b"></div>
                  <div>
                    <div className="int-text">Sandbox con credenciales sintéticas incluido</div>
                    <div className="int-sub">Testing sin afectar producción desde el primer día</div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot"></div>
                  <div>
                    <div className="int-text">Soporte técnico dedicado en el piloto</div>
                    <div className="int-sub">Equipo de ingeniería disponible en todo el proceso</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="code-window reveal" style={{ transitionDelay: ".2s" }}>
              <div className="code-bar">
                <div className="code-dot cd1"></div>
                <div className="code-dot cd2"></div>
                <div className="code-dot cd3"></div>
              </div>
              <div className="code-body">
                <div><span className="cc">{"// Emitir credencial de título profesional"}</span></div>
                <div><span className="ck">POST</span> <span className="cs">/api/v1/issue</span></div>
                <div><span className="ck">{"{"}</span></div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;type&quot;</span>: <span className="cs">&quot;TituloProfesional&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;subject_rut&quot;</span>: <span className="cs">&quot;12.345.678-9&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;carrera&quot;</span>: <span className="cs">&quot;Ingeniería Civil Informática&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;institucion&quot;</span>: <span className="cs">&quot;Universidad de Chile&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;fecha_titulacion&quot;</span>: <span className="cs">&quot;2026-07-15&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;folio&quot;</span>: <span className="cs">&quot;TIT-2026-004821&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;consent_granted&quot;</span>: <span className="cv">true</span></div>
                <div><span className="ck">{"}"}</span></div>
                <div>&nbsp;</div>
                <div><span className="cc">{"// ← credential_id + QR para egresado"}</span></div>
                <div><span className="cc">{"// ← verificable globalmente en <2s"}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final" id="demo">
        <div className="cta-mesh"></div>
        <div className="cta-inner reveal">
          <div className="s-tag" style={{ display: "block", marginBottom: "1rem", color: "rgba(192,56,138,.85)" }}>
            Piloto gratuito
          </div>
          <h2>
            ¿Comenzamos con los primeros títulos digitales<br /><em>emitidos en una semana?</em>
          </h2>
          <p className="cta-sub">
            Defina el programa con su equipo, Veris se conecta a su sistema académico y los primeros títulos digitales llegan a sus egresados en menos de una semana. Sin compromisos de escala, sin cambios en su operación actual.
          </p>
          <div className="cta-btns">
            <DemoTrigger className="btn-primary" style={{ fontSize: "1rem", padding: ".9rem 2rem" }}>
              Agendar una demo →
            </DemoTrigger>
            <Link href="/" className="btn-outline">← Volver a Veris</Link>
          </div>
          <div className="cta-trust">
            <div className="ct-item"><span className="ct-icon">✓</span> Sin costo de implementación</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Sin cambios en su SGA actual</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Verificable en cualquier país</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Royalty por cada verificación</div>
          </div>
        </div>
      </section>
    </>
  );
}
