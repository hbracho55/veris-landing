"use client";
import { useEffect } from "react";
import Link from "next/link";
import DemoTrigger from "../_components/DemoTrigger";

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1E3564;
  --navy-mid:#243A6A;
  --navy-deep:#111E3C;
  --blue:#4472C4;
  --blue-soft:#5B8FC4;
  --blue-pale:#EEF3FB;
  --blue-mid:#D8E5F5;
  --magenta:#C0388A;
  --magenta-s:#D058A0;
  --magenta-pale:#FAE0F2;
  --green:#1D9E75;
  --green-pale:#E0F5EE;
  --violet:#7C3AED;
  --violet-soft:#8B5CF6;
  --violet-pale:#EDE9FE;
  --violet-light:#C4B5FD;
  --white:#FFFFFF;
  --ice:#F0F4FB;
  --text:#1A2B4A;
  --muted:#5A6A8A;
  --border:#D0DCF0;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text);line-height:1.6;overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--violet-soft);border-radius:2px}
a{text-decoration:none}

/* HERO */
.hero{min-height:100vh;background:var(--navy-deep);display:flex;align-items:center;position:relative;overflow:hidden;padding-top:100px}
.hero-bg{position:absolute;inset:0}
.hero-mesh{position:absolute;inset:0;background:
  radial-gradient(ellipse 70% 55% at 72% 28%, rgba(124,58,237,.22) 0%, transparent 60%),
  radial-gradient(ellipse 55% 45% at 12% 75%, rgba(68,114,196,.12) 0%, transparent 58%),
  radial-gradient(ellipse 35% 30% at 50% 5%, rgba(29,158,117,.07) 0%, transparent 55%)}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:64px 64px}
.hero-glow{position:absolute;top:10%;right:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(124,58,237,.14) 0%,transparent 65%);border-radius:50%;animation:gpulse 5s ease-in-out infinite}
@keyframes gpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.08);opacity:.5}}
.hero-inner{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:5rem clamp(1.25rem,4vw,3rem);display:grid;grid-template-columns:1.1fr 1fr;gap:4rem;align-items:center}
.hero-tag{display:inline-flex;align-items:center;gap:.5rem;background:rgba(124,58,237,.15);border:1px solid rgba(124,58,237,.3);color:rgba(196,181,253,.9);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .9rem;border-radius:100px;margin-bottom:1.5rem}
.hero-tag::before{content:'';width:5px;height:5px;background:rgba(196,181,253,.9);border-radius:50%;animation:bdot 2.2s ease-in-out infinite}
@keyframes bdot{0%,100%{opacity:1}50%{opacity:.2}}
.hero h1{font-family:'DM Serif Display',serif;font-size:clamp(2.4rem,4.5vw,3.6rem);line-height:1.1;color:#fff;font-weight:400;margin-bottom:1.5rem;letter-spacing:-.02em}
.hero h1 em{font-style:italic;color:var(--magenta-s)}
.hero-sub{font-size:1.05rem;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:2.5rem;font-weight:300;max-width:500px}
.hero-sub strong{color:rgba(255,255,255,.85);font-weight:500}
.hero-ctas{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.75rem}
.btn-primary{background:var(--violet-soft);color:#fff;padding:.85rem 1.75rem;border-radius:8px;font-size:.97rem;font-weight:500;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;border:none;cursor:pointer;font-family:'DM Sans',sans-serif}
.btn-primary:hover{background:var(--violet);transform:translateY(-2px);box-shadow:0 10px 28px rgba(124,58,237,.4)}
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
.fi-1{background:rgba(124,58,237,.2);border:1px solid rgba(124,58,237,.35)}
.fi-2{background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.3)}
.fi-3{background:rgba(68,114,196,.18);border:1px solid rgba(68,114,196,.3)}
.fi-4{background:rgba(192,56,138,.18);border:1px solid rgba(192,56,138,.3)}
.fi-5{background:rgba(124,58,237,.2);border:1px solid rgba(124,58,237,.35)}
.flow-title{font-size:.82rem;font-weight:500;color:rgba(255,255,255,.88);line-height:1.2}
.flow-sub{font-size:.72rem;color:rgba(255,255,255,.38);margin-top:.15rem}
.flow-arrow{text-align:center;color:rgba(255,255,255,.2);font-size:.75rem;margin:-.15rem 0 -.15rem 1.2rem}
.flow-check{width:18px;height:18px;border-radius:50%;background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.4);display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#5DD4A8;flex-shrink:0;align-self:center}
.hero-card-stats{display:grid;grid-template-columns:1fr 1fr 1fr;padding:1.25rem 1.75rem}
.stat-col{text-align:center;padding:.5rem 0}
.stat-col+.stat-col{border-left:1px solid rgba(255,255,255,.07)}
.stat-val{font-family:'DM Serif Display',serif;font-size:1.6rem;color:#fff;line-height:1}
.stat-val.vi{color:var(--violet-light)}
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
.s-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.75rem;color:var(--violet-soft)}
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
.prob-item:hover{border-color:var(--violet-soft);box-shadow:0 4px 16px rgba(124,58,237,.08)}
.pi-icon{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.95rem}
.pi-r{background:#FEE8E8}.pi-a{background:#FEF4E0}.pi-b{background:var(--blue-pale)}.pi-p{background:#F0EEFE}.pi-g{background:var(--green-pale)}.pi-vi{background:var(--violet-pale)}
.pi-title{font-size:.875rem;font-weight:600;color:var(--navy);margin-bottom:.2rem}
.pi-desc{font-size:.78rem;color:var(--muted);line-height:1.55}
.prob-card{background:var(--ice);border:1px solid var(--border);border-radius:16px;padding:1.75rem;overflow:hidden;position:relative}
.prob-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--violet-soft),var(--magenta-s))}
.prob-quote{font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--navy);line-height:1.55;font-style:italic;margin-bottom:1.25rem}
.prob-quote span{color:var(--violet-soft);font-style:normal;font-weight:700}
.prob-data{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.25rem}
.pd-item{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.9rem 1rem}
.pd-num{font-family:'DM Serif Display',serif;font-size:1.6rem;color:var(--navy);line-height:1}
.pd-num.v{color:var(--violet-soft)}
.pd-label{font-size:.72rem;color:var(--muted);margin-top:.25rem;line-height:1.4}

/* SOLUTION */
.solution{background:var(--ice)}
.sol-header{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.sol-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:1.25rem;position:relative}
.sol-steps::before{content:'';position:absolute;top:28px;left:calc(10% + 16px);right:calc(10% + 16px);height:1px;background:linear-gradient(90deg,var(--violet-soft),var(--blue-soft),var(--green));opacity:.3}
.sol-step{text-align:center;padding:1.5rem 1rem;background:#fff;border:1px solid var(--border);border-radius:14px;position:relative;z-index:1;transition:transform .2s,box-shadow .2s}
.sol-step:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.step-num{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.1rem;font-family:'DM Serif Display',serif;font-size:1.4rem;font-weight:800;color:#fff}
.sn-1{background:var(--violet-soft)}.sn-2{background:var(--green)}.sn-3{background:var(--navy)}.sn-4{background:var(--magenta)}.sn-5{background:var(--blue)}
.sol-step h3{font-family:'DM Serif Display',serif;font-size:.9rem;font-weight:700;color:var(--navy);margin-bottom:.5rem}
.sol-step p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* BENEFITS */
.benefits{background:#fff}
.benefits-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3rem}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.benefit-card{background:var(--ice);border:1px solid var(--border);border-radius:14px;padding:1.6rem;transition:all .22s;position:relative;overflow:hidden}
.benefit-card:hover{background:#fff;box-shadow:0 8px 26px rgba(124,58,237,.08);transform:translateY(-2px)}
.benefit-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;transform:scaleX(0);transition:transform .25s;transform-origin:left}
.benefit-card:hover::before{transform:scaleX(1)}
.bc-v::before{background:var(--violet-soft)}.bc-g::before{background:var(--green)}.bc-b::before{background:var(--blue)}.bc-m::before{background:var(--magenta)}
.bc-v:hover{border-color:var(--violet-soft)}.bc-g:hover{border-color:var(--green)}.bc-b:hover{border-color:var(--blue)}.bc-m:hover{border-color:var(--magenta)}
.benefit-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;font-size:1.1rem}
.bi-v{background:var(--violet-pale)}.bi-g{background:var(--green-pale)}.bi-b{background:var(--blue-pale)}.bi-m{background:var(--magenta-pale)}
.benefit-title{font-family:'DM Serif Display',serif;font-size:.95rem;font-weight:700;color:var(--navy);margin-bottom:.55rem}
.benefit-desc{font-size:.79rem;color:var(--muted);line-height:1.62}
.benefit-hl{margin-top:.85rem;padding-top:.75rem;border-top:1px solid var(--border);font-size:.72rem;font-weight:600}
.bh-v{color:var(--violet-soft)}.bh-g{color:var(--green)}.bh-b{color:var(--blue)}.bh-m{color:var(--magenta)}

/* USE CASES */
.usecases{background:var(--ice)}
.uc-header{text-align:center;max-width:620px;margin:0 auto 3rem}
.uc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.uc-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s}
.uc-card:hover{border-color:var(--violet-soft);box-shadow:0 6px 20px rgba(124,58,237,.08);transform:translateY(-2px)}
.uc-icon{font-size:1.5rem;margin-bottom:.75rem}
.uc-card h3{font-size:.9rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.uc-card p{font-size:.78rem;color:var(--muted);line-height:1.6}
.uc-tag{display:inline-block;margin-top:.85rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.22rem .6rem;border-radius:100px;background:var(--violet-pale);color:var(--violet)}

/* SECURITY */
.security{background:var(--navy-deep);position:relative;overflow:hidden}
.security::after{content:'';position:absolute;top:-30%;right:-15%;width:700px;height:700px;background:radial-gradient(circle,rgba(124,58,237,.08) 0%,transparent 60%);border-radius:50%}
.sec-inner{position:relative;z-index:1}
.sec-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
.sec-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem}
.pillar{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:1.25rem;transition:border-color .2s}
.pillar:hover{border-color:rgba(255,255,255,.15)}
.pillar-ico{font-size:1.2rem;margin-bottom:.75rem}
.pillar-name{font-family:'DM Serif Display',serif;font-size:.88rem;font-weight:700;color:#fff;margin-bottom:.35rem}
.pillar-desc{font-size:.75rem;color:rgba(255,255,255,.4);line-height:1.55}
.pillar-badge{display:inline-block;margin-top:.6rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .6rem;border-radius:100px}
.pb-violet{background:rgba(124,58,237,.15);color:rgba(196,181,253,.9)}
.pb-green{background:rgba(29,158,117,.15);color:rgba(29,158,117,.85)}
.pb-blue{background:rgba(68,114,196,.15);color:rgba(68,114,196,.9)}
.pb-amber{background:rgba(180,140,40,.15);color:rgba(200,160,60,.9)}
.compliance-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;margin-bottom:1.5rem}
.compliance-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.ci-items{display:flex;flex-direction:column;gap:.65rem}
.ci-item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:rgba(255,255,255,.03);border-radius:8px;border:1px solid rgba(255,255,255,.06)}
.ci-check{width:20px;height:20px;border-radius:50%;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.65rem;color:#5DD4A8}
.ci-text{font-size:.8rem;color:rgba(255,255,255,.55);flex:1}
.ci-tag{font-size:.65rem;font-weight:600;color:rgba(124,58,237,.8);letter-spacing:.04em}

/* IMPACT */
.impact{background:var(--ice)}
.impact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:2.5rem}
.impact-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s}
.impact-card:hover{border-color:var(--violet-soft);box-shadow:0 6px 20px rgba(124,58,237,.08);transform:translateY(-2px)}
.impact-icon{font-size:1.5rem;margin-bottom:.75rem}
.impact-card h3{font-size:.9rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.impact-card p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* IMPLEMENTATION */
.impl{background:#fff}
.impl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;max-width:1100px;margin:2.5rem auto 0}
.impl-card{border:1px solid var(--border);border-radius:16px;padding:1.75rem;background:#fff;position:relative;transition:all .2s}
.impl-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.impl-card.featured{border-color:var(--violet-soft);background:var(--violet-pale)}
.impl-name{font-family:'DM Serif Display',serif;font-size:1.1rem;font-weight:700;color:var(--navy);margin-bottom:.4rem}
.impl-desc{font-size:.75rem;color:var(--muted);margin-bottom:1.25rem;line-height:1.5}
.impl-price{font-family:'DM Serif Display',serif;font-size:1.5rem;color:var(--violet-soft);line-height:1;margin-bottom:.25rem}
.impl-period{font-size:.72rem;color:var(--muted);margin-bottom:1.25rem}
.impl-divider{height:1px;background:var(--border);margin-bottom:1.25rem}
.impl-feature{display:flex;align-items:flex-start;gap:.5rem;font-size:.78rem;color:var(--muted);margin-bottom:.6rem;line-height:1.4}
.if-check{color:var(--green);flex-shrink:0;font-weight:700;margin-top:.05rem}

/* CTA */
.cta-final{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,3rem)}
.cta-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(124,58,237,.14) 0%,rgba(29,158,117,.06) 45%,transparent 70%)}
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
  .hero-right{display:none}
  .sol-steps{grid-template-columns:1fr 1fr}
  .sol-steps::before{display:none}
  .benefits-grid,.uc-cards,.impact-grid,.impl-grid{grid-template-columns:1fr 1fr}
  .sec-pillars{grid-template-columns:1fr 1fr}
}
@media(max-width:600px){
  .sol-steps,.benefits-grid,.uc-cards,.sec-pillars,.impact-grid,.impl-grid{grid-template-columns:1fr}
  .hero-ctas,.cta-btns{flex-direction:column;align-items:stretch}
  .btn-primary,.btn-outline{width:100%;justify-content:center}
}
`;

export default function GovernmentPage() {
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
        <div className="hero-inner">
          <div>
            <div className="hero-tag">Solución para el Sector Público</div>
            <h1>
              El Estado conoce a sus ciudadanos.<br />
              <em>¿Los ciudadanos pueden demostrarlo sin hacer filas?</em>
            </h1>
            <p className="hero-sub">
              Veris permite que las instituciones públicas entreguen a los ciudadanos sus
              documentos y acreditaciones en formato digital — para que puedan acceder a
              <strong> beneficios, trámites y servicios en segundos, desde su teléfono,
              sin desplazarse.</strong>
            </p>
            <div className="hero-ctas">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
              <a href="#como-funciona" className="btn-outline">Ver cómo funciona</a>
            </div>
            <div className="hero-proof">
              <div className="proof-item"><strong>&lt;2s</strong>para verificar identidad y condiciones</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>0</strong>documentos en papel requeridos</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>0</strong>posibilidad de acreditaciones falsificadas</div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-top">
                <div className="hero-card-label">Flujo de trámite digital ciudadano</div>
                <div className="flow-step">
                  <div className="flow-icon fi-1">🏛️</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">La institución emite la acreditación digital</div>
                    <div className="flow-sub">Carnet de beneficiario, certificado, permiso — una sola vez</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-2">📱</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">El ciudadano la lleva en su teléfono</div>
                    <div className="flow-sub">Disponible siempre, sin depender de la institución</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-3">🔍</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Presenta el QR donde lo necesite</div>
                    <div className="flow-sub">Otro servicio público, municipio, hospital, banco</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-4">✅</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">El trámite o beneficio se resuelve al instante</div>
                    <div className="flow-sub">Sin fila, sin espera, sin papeleo</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
              </div>
              <div className="hero-card-stats">
                <div className="stat-col">
                  <div className="stat-val vi">&lt;2s</div>
                  <div className="stat-lab">Verificación</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">0</div>
                  <div className="stat-lab">Filas</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">100%</div>
                  <div className="stat-lab">Digital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF STRIP ── */}
      <div className="proof-strip">
        <div className="proof-strip-inner">
          <div className="ps-label">Diseñado para</div>
          <div className="ps-items">
            <div className="ps-pill">Ministerios y servicios públicos</div>
            <div className="ps-pill">Municipios y gobiernos regionales</div>
            <div className="ps-pill">FONASA y servicios de salud</div>
            <div className="ps-pill">Registro Civil e instituciones de identidad</div>
            <div className="ps-pill">Organismos de beneficios sociales</div>
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
                Los servicios públicos digitales siguen teniendo<br />
                <em>los problemas del mundo en papel.</em>
              </h2>
              <p className="s-sub">
                A pesar de la digitalización, el ciudadano sigue enfrentando filas, formularios
                repetidos y documentos en papel para acceder a lo que el Estado ya sabe sobre él.
                El costo lo pagan todos — el ciudadano en tiempo, el Estado en recursos.
              </p>
              <div className="prob-items">
                <div className="prob-item reveal reveal-delay-1">
                  <div className="pi-icon pi-r">🎭</div>
                  <div>
                    <div className="pi-title">Fraude en el acceso a beneficios públicos</div>
                    <div className="pi-desc">
                      Personas que no califican acceden a subsidios y prestaciones usando
                      documentos falsos o información desactualizada. El Estado pierde
                      recursos destinados a quienes realmente los necesitan.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-2">
                  <div className="pi-icon pi-a">📂</div>
                  <div>
                    <div className="pi-title">El ciudadano demuestra lo mismo una y otra vez</div>
                    <div className="pi-desc">
                      Cada institución pide los mismos documentos de forma independiente.
                      El ciudadano repite el mismo proceso en cada servicio, aunque el
                      Estado ya tenga esa información.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-3">
                  <div className="pi-icon pi-vi">⏳</div>
                  <div>
                    <div className="pi-title">Trámites que toman días o semanas</div>
                    <div className="pi-desc">
                      Solicitar un beneficio, acreditar una condición o acceder a un
                      programa implica presentarse en una oficina, esperar turno, adjuntar
                      documentos y aguardar una resolución.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-4">
                  <div className="pi-icon pi-b">💸</div>
                  <div>
                    <div className="pi-title">Alto costo operativo de la atención presencial</div>
                    <div className="pi-desc">
                      Una fracción importante de la atención en ventanillas consiste en
                      verificar información que el Estado ya tiene. Ese costo operativo
                      podría eliminarse si el ciudadano pudiera acreditar su situación
                      digitalmente al instante.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="prob-card">
                <div className="prob-quote">
                  &quot;El Estado ya tiene la información del ciudadano.
                  El problema no es la <span>falta de datos</span> — es que
                  el ciudadano no puede portarlos y el Estado no puede verificarlos
                  en tiempo real entre instituciones.&quot;
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.65 }}>
                  Veris resuelve exactamente eso: convierte los datos que el Estado ya
                  tiene en credenciales digitales que el ciudadano porta en su teléfono
                  y presenta donde los necesite — al instante, sin filas ni papeleo.
                </p>
                <div className="prob-data">
                  <div className="pd-item">
                    <div className="pd-num v">&lt;2s</div>
                    <div className="pd-label">para verificar identidad y condiciones del ciudadano</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">0</div>
                    <div className="pd-label">documentos en papel requeridos</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num v">0</div>
                    <div className="pd-label">posibilidad de acreditaciones falsificadas</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">↓</div>
                    <div className="pd-label">reducción del costo operativo de atención presencial</div>
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
              El Estado emite una vez.<br />
              <em>El ciudadano accede a todo desde su teléfono.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto" }}>
              Sin filas, sin formularios repetidos, sin desplazamientos. La acreditación
              digital del ciudadano funciona en cualquier servicio público o privado que
              use Veris.
            </p>
          </div>
          <div className="sol-steps">
            <div className="sol-step reveal reveal-delay-1">
              <div className="step-num sn-1">1</div>
              <h3>La institución emite la acreditación</h3>
              <p>Carnet de beneficiario, certificado de condición, permiso. Una sola vez, al momento de registrar al ciudadano.</p>
            </div>
            <div className="sol-step reveal reveal-delay-2">
              <div className="step-num sn-2">2</div>
              <h3>El ciudadano la lleva en su app</h3>
              <p>Disponible siempre en su teléfono. No se pierde, no expira sin aviso, no requiere tramitar una copia.</p>
            </div>
            <div className="sol-step reveal reveal-delay-3">
              <div className="step-num sn-3">3</div>
              <h3>La presenta donde la necesite</h3>
              <p>Otro servicio público, municipio, hospital o banco. Muestra un código QR desde su teléfono.</p>
            </div>
            <div className="sol-step reveal reveal-delay-4">
              <div className="step-num sn-4">4</div>
              <h3>La institución verifica en &lt;2 segundos</h3>
              <p>Confirma que el documento es auténtico y vigente — sin consultar registros manuales.</p>
            </div>
            <div className="sol-step reveal" style={{ transitionDelay: ".5s" }}>
              <div className="step-num sn-5">5</div>
              <h3>El trámite se resuelve al instante</h3>
              <p>Sin fila, sin espera, sin papeleo. El ciudadano recibe lo que necesita en el acto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASOS DE USO ── */}
      <section className="section usecases" id="casos-de-uso">
        <div className="s-inner">
          <div className="uc-header reveal">
            <div className="s-tag">Casos de uso</div>
            <h2 className="s-title">
              ¿Dónde puede aplicar Veris<br />
              su institución <em>hoy?</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Desde la identidad digital hasta los trámites municipales — Veris funciona
              en cualquier proceso donde el ciudadano necesite acreditar su situación
              ante el Estado.
            </p>
          </div>
          <div className="uc-cards">
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-icon">🪪</div>
              <h3>Identidad digital ciudadana</h3>
              <p>El ciudadano lleva en su teléfono una acreditación de identidad emitida por el Estado — nombre, RUT, domicilio — que presenta ante cualquier servicio público o privado. Sin cédula física ni fotocopias.</p>
              <span className="uc-tag">Identidad · Civil</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-icon">🎁</div>
              <h3>Acceso automático a beneficios y subsidios</h3>
              <p>El ciudadano demuestra en segundos que cumple las condiciones para un beneficio — nivel de ingresos, situación laboral, composición familiar — sin adjuntar documentos ni esperar resolución.</p>
              <span className="uc-tag">Beneficios · Subsidios</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-icon">🏥</div>
              <h3>Acreditación en salud pública</h3>
              <p>El paciente acredita su condición de beneficiario FONASA, su grupo familiar o su situación de discapacidad directamente desde la app al llegar a un establecimiento de salud — sin tarjeta física.</p>
              <span className="uc-tag">FONASA · Salud</span>
            </div>
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-icon">🎓</div>
              <h3>Becas y beneficios estudiantiles</h3>
              <p>El estudiante demuestra su condición socioeconómica o matrícula vigente para acceder a becas, pases o beneficios universitarios — sin tramitar certificados en cada institución que lo solicite.</p>
              <span className="uc-tag">Educación · Becas</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-icon">🏙️</div>
              <h3>Trámites municipales sin filas</h3>
              <p>El vecino acredita su residencia o condición desde la app para solicitar permisos, patentes o beneficios municipales — sin presentarse en la oficina, sin esperar turno, sin documentos en papel.</p>
              <span className="uc-tag">Municipio · Trámites</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-icon">👮</div>
              <h3>Control de acceso a instalaciones públicas</h3>
              <p>Los funcionarios acceden a instalaciones y áreas restringidas usando su acreditación digital en lugar de credenciales físicas. Registro de accesos en tiempo real, sin tarjetas que perder o reponer.</p>
              <span className="uc-tag">Seguridad · Funcionarios</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="section benefits" id="beneficios">
        <div className="s-inner">
          <div className="benefits-header reveal">
            <div>
              <div className="s-tag">Beneficios para la institución</div>
              <h2 className="s-title">
                Lo que cambia para la institución<br />
                <em>y para el ciudadano.</em>
              </h2>
            </div>
            <p className="s-sub">
              Veris no reemplaza los sistemas del Estado — se conecta a ellos y añade la
              capa de portabilidad y verificación instantánea que hoy no existe.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card bc-v reveal reveal-delay-1">
              <div className="benefit-icon bi-v">🛡️</div>
              <div className="benefit-title">Fraude en beneficios eliminado</div>
              <div className="benefit-desc">
                Solo quienes realmente cumplen las condiciones pueden acceder al beneficio —
                de forma automática, sin revisión manual y sin posibilidad de suplantación.
                Los recursos llegan a quienes los necesitan.
              </div>
              <div className="benefit-hl bh-v">Verificación automática e imposible de falsificar</div>
            </div>
            <div className="benefit-card bc-g reveal reveal-delay-2">
              <div className="benefit-icon bi-g">💸</div>
              <div className="benefit-title">Reducción del costo operativo</div>
              <div className="benefit-desc">
                Cada atención presencial que se convierte en verificación digital automática
                representa un ahorro real en horas de funcionario, infraestructura de atención
                y gestión documental.
              </div>
              <div className="benefit-hl bh-g">Menos atención presencial innecesaria</div>
            </div>
            <div className="benefit-card bc-b reveal reveal-delay-3">
              <div className="benefit-icon bi-b">⚡</div>
              <div className="benefit-title">Trámites en segundos, no en días</div>
              <div className="benefit-desc">
                El ciudadano que hoy tarda días en obtener un beneficio, mañana lo recibe
                en el mismo momento en que demuestra que cumple las condiciones — desde
                su teléfono, sin desplazarse.
              </div>
              <div className="benefit-hl bh-b">Servicios públicos al ritmo del ciudadano</div>
            </div>
            <div className="benefit-card bc-v reveal reveal-delay-1">
              <div className="benefit-icon bi-v">🔒</div>
              <div className="benefit-title">El ciudadano controla sus datos</div>
              <div className="benefit-desc">
                El ciudadano decide qué información comparte en cada trámite. Sus datos
                no circulan entre instituciones sin su autorización — mantiene el control
                real sobre su información personal.
              </div>
              <div className="benefit-hl bh-v">Soberanía de datos del ciudadano</div>
            </div>
            <div className="benefit-card bc-g reveal reveal-delay-2">
              <div className="benefit-icon bi-g">📊</div>
              <div className="benefit-title">Trazabilidad completa para auditoría</div>
              <div className="benefit-desc">
                Cada uso de una credencial queda registrado. La institución puede auditar
                quién accedió a qué beneficio, cuándo y bajo qué condiciones — cumpliendo
                con las exigencias de transparencia del sector público.
              </div>
              <div className="benefit-hl bh-g">Transparencia y cumplimiento normativo</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-3">
              <div className="benefit-icon bi-m">🌎</div>
              <div className="benefit-title">Interoperabilidad entre instituciones</div>
              <div className="benefit-desc">
                La credencial del ciudadano funciona en cualquier servicio público que use
                Veris. El ciudadano no repite el mismo proceso en cada institución —
                el Estado habla un idioma común.
              </div>
              <div className="benefit-hl bh-m">Un Estado más conectado para el ciudadano</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACIDAD Y SOBERANÍA ── */}
      <section className="section security" id="seguridad">
        <div className="s-inner sec-inner">
          <div className="sec-grid">
            <div className="reveal">
              <div className="s-tag" style={{ color: "rgba(196,181,253,.85)" }}>Privacidad y soberanía de datos</div>
              <h2 className="s-title s-title-white">
                El Estado emite con autoridad.<br />
                <em style={{ color: "var(--magenta-s)" }}>El ciudadano controla su información.</em>
              </h2>
              <p className="s-sub s-sub-white">
                Veris no almacena datos personales de los ciudadanos. Los documentos viven
                en el teléfono de cada persona — Veris solo verifica la autenticidad cuando
                se presentan.
              </p>
              <div className="sec-pillars">
                <div className="pillar">
                  <div className="pillar-ico">📌</div>
                  <div className="pillar-name">Control sobre qué certifica</div>
                  <div className="pillar-desc">
                    La institución define exactamente qué información incluye cada
                    credencial y bajo qué condiciones se emite.
                  </div>
                  <span className="pillar-badge pb-violet">Control emisor</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">🔄</div>
                  <div className="pillar-name">Revocación instantánea</div>
                  <div className="pillar-desc">
                    Si una acreditación debe invalidarse — por cambio de condición
                    o decisión administrativa — se revoca de inmediato en todo el sistema.
                  </div>
                  <span className="pillar-badge pb-green">Vigencia garantizada</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">📋</div>
                  <div className="pillar-name">Auditoría completa</div>
                  <div className="pillar-desc">
                    Cada uso queda registrado con fecha, hora y qué información
                    se consultó. Listo para auditorías de transparencia.
                  </div>
                  <span className="pillar-badge pb-amber">Transparencia</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">👤</div>
                  <div className="pillar-name">El ciudadano decide qué comparte</div>
                  <div className="pillar-desc">
                    Si un trámite solo requiere saber si reside en cierta comuna,
                    el ciudadano comparte eso — no toda su información personal.
                  </div>
                  <span className="pillar-badge pb-blue">Privacidad</span>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="compliance-box">
                <div className="compliance-title">Estándares y normativas cubiertas</div>
                <div className="ci-items">
                  {[
                    { text: "Ley 21.096 — Protección de Datos Personales", tag: "Chile" },
                    { text: "Ley 20.730 — Transparencia Pública", tag: "Chile" },
                    { text: "W3C Verifiable Credentials", tag: "Internacional" },
                    { text: "Agenda Digital 2030 — MINDES", tag: "Gobierno" },
                    { text: "ISO 27001 aligned", tag: "Seguridad" },
                    { text: "Accesibilidad universal WCAG 2.1", tag: "Inclusión" },
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
                <div className="compliance-title" style={{ marginBottom: ".75rem" }}>Instancia privada para el Estado</div>
                <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.45)", lineHeight: 1.65, marginBottom: ".75rem" }}>
                  Para ministerios y servicios con requerimientos de soberanía de datos,
                  Veris puede desplegarse dentro de la infraestructura del Estado — sin
                  dependencia de servidores externos. Los datos de los ciudadanos nunca
                  salen de los sistemas estatales.
                </p>
                <div style={{ fontSize: ".78rem", color: "rgba(124,58,237,.8)", fontWeight: 500 }}>
                  Consultar modalidad de instancia privada →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACTO ── */}
      <section className="section impact" id="impacto">
        <div className="s-inner">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 2rem" }} className="reveal">
            <div className="s-tag">Impacto esperado</div>
            <h2 className="s-title">
              Una transformación concreta<br />
              <em>para el ciudadano y para el Estado.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Implementar Veris no es solo una mejora tecnológica — es un cambio en la
              relación entre el Estado y el ciudadano.
            </p>
          </div>
          <div className="impact-grid">
            <div className="impact-card reveal reveal-delay-1">
              <div className="impact-icon">⏱️</div>
              <h3>Trámites que duran segundos, no días</h3>
              <p>
                El ciudadano que hoy tarda días en obtener un beneficio, mañana lo recibe
                en el momento en que demuestra que cumple las condiciones — desde su
                teléfono, sin desplazarse, sin esperar resolución.
              </p>
            </div>
            <div className="impact-card reveal reveal-delay-2">
              <div className="impact-icon">💰</div>
              <h3>Ahorro real en costo operativo</h3>
              <p>
                Cada atención presencial que se convierte en verificación digital automática
                representa un ahorro en horas de funcionario, infraestructura de atención
                y gestión documental — recursos que se reinvierten en el ciudadano.
              </p>
            </div>
            <div className="impact-card reveal reveal-delay-3">
              <div className="impact-icon">🇨🇱</div>
              <h3>Liderazgo regional en identidad digital</h3>
              <p>
                Chile puede ser el primer país de América Latina con un sistema de identidad
                digital ciudadana interoperable entre instituciones públicas y privadas —
                construido sobre estándares abiertos y con el ciudadano en el centro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-final" id="demo">
        <div className="cta-mesh"></div>
        <div className="cta-inner reveal">
          <div className="s-tag" style={{ display: "block", marginBottom: "1rem", color: "rgba(196,181,253,.85)" }}>
            Piloto sin costo de implementación
          </div>
          <h2>
            El Estado ya tiene la información del ciudadano.<br />
            <em>Veris la pone donde el ciudadano la necesita.</em>
          </h2>
          <p className="cta-sub">
            Defina el caso de uso con su equipo, Veris configura los primeros certificados
            digitales y el piloto está operativo en menos de una semana. Sin compromisos
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
            <div className="ct-item"><span className="ct-icon">✓</span> Sin cambios en su infraestructura</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Operativo en menos de una semana</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Datos siempre bajo control del Estado</div>
          </div>
        </div>
      </section>
    </>
  );
}
