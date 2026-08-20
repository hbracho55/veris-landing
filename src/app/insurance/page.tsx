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
  --rose:#E11D48;
  --rose-soft:#F43F5E;
  --rose-pale:#FFE4E6;
  --orange:#EA580C;
  --orange-pale:#FFF3ED;
  --white:#FFFFFF;
  --ice:#F0F4FB;
  --text:#1A2B4A;
  --muted:#5A6A8A;
  --border:#D0DCF0;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text);line-height:1.6;overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--rose-soft);border-radius:2px}
a{text-decoration:none}

/* HERO */
.hero{min-height:100vh;background:var(--navy-deep);display:flex;align-items:center;position:relative;overflow:hidden;padding-top:100px}
.hero-bg{position:absolute;inset:0}
.hero-mesh{position:absolute;inset:0;background:
  radial-gradient(ellipse 70% 55% at 72% 28%, rgba(225,29,72,.2) 0%, transparent 60%),
  radial-gradient(ellipse 55% 45% at 12% 75%, rgba(68,114,196,.12) 0%, transparent 58%),
  radial-gradient(ellipse 35% 30% at 50% 5%, rgba(29,158,117,.07) 0%, transparent 55%)}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:64px 64px}
.hero-glow{position:absolute;top:10%;right:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(225,29,72,.12) 0%,transparent 65%);border-radius:50%;animation:gpulse 5s ease-in-out infinite}
@keyframes gpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.08);opacity:.5}}
.hero-inner{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:5rem clamp(1.25rem,4vw,3rem);display:grid;grid-template-columns:1.1fr 1fr;gap:4rem;align-items:center}
.hero-tag{display:inline-flex;align-items:center;gap:.5rem;background:rgba(225,29,72,.15);border:1px solid rgba(225,29,72,.3);color:rgba(250,150,165,.9);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .9rem;border-radius:100px;margin-bottom:1.5rem}
.hero-tag::before{content:'';width:5px;height:5px;background:rgba(250,150,165,.9);border-radius:50%;animation:bdot 2.2s ease-in-out infinite}
@keyframes bdot{0%,100%{opacity:1}50%{opacity:.2}}
.hero h1{font-family:'DM Serif Display',serif;font-size:clamp(2.4rem,4.5vw,3.6rem);line-height:1.1;color:#fff;font-weight:400;margin-bottom:1.5rem;letter-spacing:-.02em}
.hero h1 em{font-style:italic;color:var(--magenta-s)}
.hero-sub{font-size:1.05rem;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:2.5rem;font-weight:300;max-width:500px}
.hero-sub strong{color:rgba(255,255,255,.85);font-weight:500}
.hero-ctas{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.75rem}
.btn-primary{background:var(--rose);color:#fff;padding:.85rem 1.75rem;border-radius:8px;font-size:.97rem;font-weight:500;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;border:none;cursor:pointer;font-family:'DM Sans',sans-serif}
.btn-primary:hover{background:#BE123C;transform:translateY(-2px);box-shadow:0 10px 28px rgba(225,29,72,.4)}
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
.fi-1{background:rgba(225,29,72,.2);border:1px solid rgba(225,29,72,.35)}
.fi-2{background:rgba(68,114,196,.18);border:1px solid rgba(68,114,196,.3)}
.fi-3{background:rgba(192,56,138,.18);border:1px solid rgba(192,56,138,.3)}
.fi-4{background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.3)}
.fi-5{background:rgba(225,29,72,.2);border:1px solid rgba(225,29,72,.35)}
.flow-title{font-size:.82rem;font-weight:500;color:rgba(255,255,255,.88);line-height:1.2}
.flow-sub{font-size:.72rem;color:rgba(255,255,255,.38);margin-top:.15rem}
.flow-arrow{text-align:center;color:rgba(255,255,255,.2);font-size:.75rem;margin:-.15rem 0 -.15rem 1.2rem}
.flow-check{width:18px;height:18px;border-radius:50%;background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.4);display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#5DD4A8;flex-shrink:0;align-self:center}
.hero-card-stats{display:grid;grid-template-columns:1fr 1fr 1fr;padding:1.25rem 1.75rem}
.stat-col{text-align:center;padding:.5rem 0}
.stat-col+.stat-col{border-left:1px solid rgba(255,255,255,.07)}
.stat-val{font-family:'DM Serif Display',serif;font-size:1.6rem;color:#fff;line-height:1}
.stat-val.rs{color:#FDA4AF}
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
.s-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.75rem;color:var(--rose)}
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
.prob-item:hover{border-color:var(--rose-soft);box-shadow:0 4px 16px rgba(225,29,72,.08)}
.pi-icon{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.95rem}
.pi-r{background:#FEE8E8}.pi-a{background:#FEF4E0}.pi-b{background:var(--blue-pale)}.pi-p{background:#F0EEFE}.pi-g{background:var(--green-pale)}.pi-ro{background:var(--rose-pale)}
.pi-title{font-size:.875rem;font-weight:600;color:var(--navy);margin-bottom:.2rem}
.pi-desc{font-size:.78rem;color:var(--muted);line-height:1.55}
.prob-card{background:var(--ice);border:1px solid var(--border);border-radius:16px;padding:1.75rem;overflow:hidden;position:relative}
.prob-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--rose),var(--magenta-s))}
.prob-quote{font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--navy);line-height:1.55;font-style:italic;margin-bottom:1.25rem}
.prob-quote span{color:var(--rose);font-style:normal;font-weight:700}
.prob-data{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.25rem}
.pd-item{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.9rem 1rem}
.pd-num{font-family:'DM Serif Display',serif;font-size:1.6rem;color:var(--navy);line-height:1}
.pd-num.r{color:var(--rose)}
.pd-label{font-size:.72rem;color:var(--muted);margin-top:.25rem;line-height:1.4}

/* SOLUTION */
.solution{background:var(--ice)}
.sol-header{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.sol-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:1.25rem;position:relative}
.sol-steps::before{content:'';position:absolute;top:28px;left:calc(10% + 16px);right:calc(10% + 16px);height:1px;background:linear-gradient(90deg,var(--rose),var(--magenta-s),var(--green));opacity:.3}
.sol-step{text-align:center;padding:1.5rem 1rem;background:#fff;border:1px solid var(--border);border-radius:14px;position:relative;z-index:1;transition:transform .2s,box-shadow .2s}
.sol-step:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.step-num{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.1rem;font-family:'DM Serif Display',serif;font-size:1.4rem;font-weight:800;color:#fff}
.sn-1{background:var(--rose)}.sn-2{background:var(--blue)}.sn-3{background:var(--navy)}.sn-4{background:var(--magenta)}.sn-5{background:var(--green)}
.sol-step h3{font-family:'DM Serif Display',serif;font-size:.9rem;font-weight:700;color:var(--navy);margin-bottom:.5rem}
.sol-step p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* BENEFITS */
.benefits{background:#fff}
.benefits-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3rem}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.benefit-card{background:var(--ice);border:1px solid var(--border);border-radius:14px;padding:1.6rem;transition:all .22s;position:relative;overflow:hidden}
.benefit-card:hover{background:#fff;box-shadow:0 8px 26px rgba(225,29,72,.08);transform:translateY(-2px)}
.benefit-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;transform:scaleX(0);transition:transform .25s;transform-origin:left}
.benefit-card:hover::before{transform:scaleX(1)}
.bc-r::before{background:var(--rose)}.bc-b::before{background:var(--blue)}.bc-g::before{background:var(--green)}.bc-m::before{background:var(--magenta)}
.bc-r:hover{border-color:var(--rose-soft)}.bc-b:hover{border-color:var(--blue)}.bc-g:hover{border-color:var(--green)}.bc-m:hover{border-color:var(--magenta)}
.benefit-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;font-size:1.1rem}
.bi-r{background:var(--rose-pale)}.bi-b{background:var(--blue-pale)}.bi-g{background:var(--green-pale)}.bi-m{background:var(--magenta-pale)}
.benefit-title{font-family:'DM Serif Display',serif;font-size:.95rem;font-weight:700;color:var(--navy);margin-bottom:.55rem}
.benefit-desc{font-size:.79rem;color:var(--muted);line-height:1.62}
.benefit-hl{margin-top:.85rem;padding-top:.75rem;border-top:1px solid var(--border);font-size:.72rem;font-weight:600}
.bh-r{color:var(--rose)}.bh-b{color:var(--blue)}.bh-g{color:var(--green)}.bh-m{color:var(--magenta)}

/* USE CASES */
.usecases{background:var(--ice)}
.uc-header{text-align:center;max-width:620px;margin:0 auto 3rem}
.uc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.uc-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s}
.uc-card:hover{border-color:var(--rose-soft);box-shadow:0 6px 20px rgba(225,29,72,.08);transform:translateY(-2px)}
.uc-icon{font-size:1.5rem;margin-bottom:.75rem}
.uc-card h3{font-size:.9rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.uc-card p{font-size:.78rem;color:var(--muted);line-height:1.6}
.uc-tag{display:inline-block;margin-top:.85rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.22rem .6rem;border-radius:100px;background:var(--rose-pale);color:var(--rose)}

/* SECURITY */
.security{background:var(--navy-deep);position:relative;overflow:hidden}
.security::after{content:'';position:absolute;top:-30%;right:-15%;width:700px;height:700px;background:radial-gradient(circle,rgba(225,29,72,.08) 0%,transparent 60%);border-radius:50%}
.sec-inner{position:relative;z-index:1}
.sec-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
.sec-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem}
.pillar{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:1.25rem;transition:border-color .2s}
.pillar:hover{border-color:rgba(255,255,255,.15)}
.pillar-ico{font-size:1.2rem;margin-bottom:.75rem}
.pillar-name{font-family:'DM Serif Display',serif;font-size:.88rem;font-weight:700;color:#fff;margin-bottom:.35rem}
.pillar-desc{font-size:.75rem;color:rgba(255,255,255,.4);line-height:1.55}
.pillar-badge{display:inline-block;margin-top:.6rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .6rem;border-radius:100px}
.pb-rose{background:rgba(225,29,72,.15);color:rgba(225,29,72,.9)}
.pb-green{background:rgba(29,158,117,.15);color:rgba(29,158,117,.85)}
.pb-blue{background:rgba(68,114,196,.15);color:rgba(68,114,196,.9)}
.pb-amber{background:rgba(180,140,40,.15);color:rgba(200,160,60,.9)}
.compliance-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;margin-bottom:1.5rem}
.compliance-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.ci-items{display:flex;flex-direction:column;gap:.65rem}
.ci-item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:rgba(255,255,255,.03);border-radius:8px;border:1px solid rgba(255,255,255,.06)}
.ci-check{width:20px;height:20px;border-radius:50%;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.65rem;color:#5DD4A8}
.ci-text{font-size:.8rem;color:rgba(255,255,255,.55);flex:1}
.ci-tag{font-size:.65rem;font-weight:600;color:rgba(225,29,72,.7);letter-spacing:.04em}

/* ISSUER */
.issuer{background:var(--ice)}
.issuer-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.25rem;margin-top:2.5rem}
.issuer-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s}
.issuer-card:hover{border-color:var(--rose-soft);box-shadow:0 6px 20px rgba(225,29,72,.08);transform:translateY(-2px)}
.issuer-icon{font-size:1.5rem;margin-bottom:.75rem}
.issuer-card h3{font-size:.9rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.issuer-card p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* PLANS */
.plans{background:#fff}
.plans-header{text-align:center;max-width:620px;margin:0 auto 3rem}
.plans-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;max-width:1100px;margin:0 auto}
.plan-card{border:1px solid var(--border);border-radius:16px;padding:1.75rem;background:#fff;position:relative;transition:all .2s}
.plan-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.plan-card.featured{border-color:var(--rose);background:var(--rose-pale)}
.plan-card.featured::before{content:'Más popular';position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--rose);color:#fff;font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .8rem;border-radius:100px}
.plan-name{font-family:'DM Serif Display',serif;font-size:1.1rem;font-weight:700;color:var(--navy);margin-bottom:.4rem}
.plan-desc{font-size:.75rem;color:var(--muted);margin-bottom:1.25rem;line-height:1.5}
.plan-price{font-family:'DM Serif Display',serif;font-size:2rem;color:var(--navy);line-height:1;margin-bottom:.25rem}
.plan-price span{font-size:.85rem;color:var(--muted);font-family:'DM Sans',sans-serif;font-weight:400}
.plan-period{font-size:.72rem;color:var(--muted);margin-bottom:1.25rem}
.plan-divider{height:1px;background:var(--border);margin-bottom:1.25rem}
.plan-feature{display:flex;align-items:flex-start;gap:.5rem;font-size:.78rem;color:var(--muted);margin-bottom:.6rem;line-height:1.4}
.pf-check{color:var(--green);flex-shrink:0;font-weight:700;margin-top:.05rem}
.plan-enterprise{font-size:.78rem;color:var(--rose);font-weight:500;margin-top:.75rem}

/* CTA */
.cta-final{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,3rem)}
.cta-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(225,29,72,.12) 0%,rgba(68,114,196,.06) 45%,transparent 70%)}
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
  .benefits-grid,.uc-cards,.issuer-grid{grid-template-columns:1fr 1fr}
  .sec-pillars,.plans-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:600px){
  .sol-steps,.benefits-grid,.uc-cards,.sec-pillars,.plans-grid,.issuer-grid{grid-template-columns:1fr}
  .hero-ctas,.cta-btns{flex-direction:column;align-items:stretch}
  .btn-primary,.btn-outline{width:100%;justify-content:center}
}
`;

export default function InsurancePage() {
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
            <div className="hero-tag">Solución para el Sector Asegurador</div>
            <h1>
              Contratar un seguro debería tardar minutos.<br />
              <em>No días validando documentos que podrían ser falsos.</em>
            </h1>
            <p className="hero-sub">
              Veris permite conocer el perfil real del asegurado en segundos —
              <strong> ingresos, empleo, historial de salud</strong> — sin pedir documentos
              en papel ni esperar verificaciones manuales que abren la puerta al fraude.
            </p>
            <div className="hero-ctas">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
              <a href="#como-funciona" className="btn-outline">Ver cómo funciona</a>
            </div>
            <div className="hero-proof">
              <div className="proof-item"><strong>&lt;2s</strong>perfil verificado del asegurado</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>0</strong>documentos en papel</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>0</strong>posibilidad de datos falsificados</div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-top">
                <div className="hero-card-label">Flujo de contratación verificada</div>
                <div className="flow-step">
                  <div className="flow-icon fi-1">🏥</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Cliente inicia la cotización o contratación</div>
                    <div className="flow-sub">Presencial, por teléfono o en línea</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-2">📱</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Escanea el QR con la app Veris</div>
                    <div className="flow-sub">Autoriza compartir su perfil real</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-3">🔒</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">La aseguradora recibe el perfil verificado</div>
                    <div className="flow-sub">Ingresos, empleo, historial — respaldados por la institución emisora</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-4">✅</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Prima calculada y póliza emitida al instante</div>
                    <div className="flow-sub">Sin revisión manual, con perfil de riesgo real</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
              </div>
              <div className="hero-card-stats">
                <div className="stat-col">
                  <div className="stat-val rs">&lt;2s</div>
                  <div className="stat-lab">Verificación</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">0</div>
                  <div className="stat-lab">Documentos</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">100%</div>
                  <div className="stat-lab">Automático</div>
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
            <div className="ps-pill">Aseguradoras de vida y salud</div>
            <div className="ps-pill">Seguros generales y de hogar</div>
            <div className="ps-pill">Seguros colectivos empresariales</div>
            <div className="ps-pill">Corredores de seguros</div>
            <div className="ps-pill">Insurtech y plataformas digitales</div>
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
                El fraude y la información inexacta<br />
                <em>cuestan millones a las aseguradoras cada año.</em>
              </h2>
              <p className="s-sub">
                Desde la contratación hasta el siniestro, la aseguradora depende de datos
                que el cliente declara — pero que no siempre corresponden a la realidad.
                Sin verificación en tiempo real, ese riesgo se traslada a las primas de todos.
              </p>
              <div className="prob-items">
                <div className="prob-item reveal reveal-delay-1">
                  <div className="pi-icon pi-ro">🎭</div>
                  <div>
                    <div className="pi-title">Información falsa al contratar</div>
                    <div className="pi-desc">
                      El cliente declara ingresos, empleo o condición de salud que no
                      corresponden a la realidad. Sin verificación, la aseguradora fija
                      la prima sobre datos que pueden estar adulterados.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-2">
                  <div className="pi-icon pi-r">📋</div>
                  <div>
                    <div className="pi-title">Siniestros fraudulentos difíciles de detectar</div>
                    <div className="pi-desc">
                      Accidentes simulados, enfermedades preexistentes no declaradas, daños
                      exagerados. El fraude en siniestros representa una pérdida que se
                      traslada al costo de las primas para todos los asegurados.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-3">
                  <div className="pi-icon pi-a">⏳</div>
                  <div>
                    <div className="pi-title">Cotización y contratación que tarda demasiado</div>
                    <div className="pi-desc">
                      Pedir documentos, esperar validación interna y procesar la solicitud
                      puede tomar días. En ese tiempo, el cliente puede contratar con
                      la competencia.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-4">
                  <div className="pi-icon pi-b">🔁</div>
                  <div>
                    <div className="pi-title">Perfil del asegurado desactualizado</div>
                    <div className="pi-desc">
                      La situación del cliente cambia durante la vigencia de la póliza.
                      Sin mecanismo de actualización, la aseguradora opera con un perfil
                      de riesgo que ya no corresponde a la realidad.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="prob-card">
                <div className="prob-quote">
                  &quot;La aseguradora no necesita más declaraciones — necesita saber que
                  la información que recibe es <span>real y verificada.</span> Eso es
                  exactamente lo que Veris garantiza.&quot;
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.65 }}>
                  Con Veris, el perfil de riesgo del asegurado viene respaldado por la
                  institución que emitió los datos — no por lo que el cliente escribió
                  en el formulario. Imposible de falsificar.
                </p>
                <div className="prob-data">
                  <div className="pd-item">
                    <div className="pd-num r">&lt;2s</div>
                    <div className="pd-label">para verificar el perfil completo del asegurado</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">48h</div>
                    <div className="pd-label">tiempo promedio de validación manual en Chile</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num r">0</div>
                    <div className="pd-label">documentos en papel requeridos</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">0</div>
                    <div className="pd-label">posibilidad de datos falsificados</div>
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
              El cliente demuestra su perfil real<br />
              en <em>menos de 2 segundos.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto" }}>
              Sin formularios, sin documentos, sin esperas. La aseguradora recibe el perfil
              verificado directamente desde la institución que emitió los datos.
            </p>
          </div>
          <div className="sol-steps">
            <div className="sol-step reveal reveal-delay-1">
              <div className="step-num sn-1">1</div>
              <h3>Cliente inicia la cotización</h3>
              <p>Presencial, por teléfono o en línea. Sin formularios extensos ni documentos que preparar.</p>
            </div>
            <div className="sol-step reveal reveal-delay-2">
              <div className="step-num sn-2">2</div>
              <h3>Escanea el QR con Veris</h3>
              <p>La aseguradora muestra un QR. El cliente lo escanea con su app y autoriza compartir su perfil.</p>
            </div>
            <div className="sol-step reveal reveal-delay-3">
              <div className="step-num sn-3">3</div>
              <h3>La aseguradora recibe el perfil</h3>
              <p>Ingresos, empleo, historial — respaldados por la institución emisora. Imposible de falsificar.</p>
            </div>
            <div className="sol-step reveal reveal-delay-4">
              <div className="step-num sn-4">4</div>
              <h3>Prima calculada al instante</h3>
              <p>Con el perfil real disponible, la aseguradora calcula la prima correcta sin revisión manual.</p>
            </div>
            <div className="sol-step reveal" style={{ transitionDelay: ".5s" }}>
              <div className="step-num sn-5">5</div>
              <h3>Póliza emitida en el acto</h3>
              <p>El cliente recibe su póliza antes de salir de la reunión. Sin esperas, sin llamadas, sin papel.</p>
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
              su aseguradora <em>hoy?</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Desde la cotización hasta la presentación de un siniestro —
              Veris agrega verificación en tiempo real en cada etapa crítica.
            </p>
          </div>
          <div className="uc-cards">
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-icon">🏥</div>
              <h3>Seguro de salud con historial médico verificado</h3>
              <p>El cliente comparte su historial directamente desde su institución médica — diagnósticos previos, condiciones preexistentes. La aseguradora calcula la prima con información real.</p>
              <span className="uc-tag">Salud · Vida</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-icon">🚗</div>
              <h3>Seguro de vida o accidentes con ingresos verificados</h3>
              <p>El cliente demuestra su nivel de ingresos y situación laboral al contratar — directamente desde su app, sin adjuntar liquidaciones. La aseguradora fija coberturas sobre un perfil real.</p>
              <span className="uc-tag">Vida · Accidentes</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-icon">🏠</div>
              <h3>Seguro de hogar con identidad verificada</h3>
              <p>El cliente acredita su identidad y domicilio de forma instantánea. Sin formularios extensos, sin esperar validación de documentos, sin riesgo de suplantación al contratar.</p>
              <span className="uc-tag">Hogar · Arriendo</span>
            </div>
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-icon">💼</div>
              <h3>Seguro colectivo empresarial sin burocracia</h3>
              <p>La empresa acredita su nómina vigente, cargos y contratos activos directamente desde Veris. Sin planillas manuales ni documentos que revisar uno por uno.</p>
              <span className="uc-tag">Colectivo · Empresas</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-icon">🔄</div>
              <h3>Actualización del perfil durante la vigencia</h3>
              <p>Cuando la situación del asegurado cambia, la aseguradora puede solicitar una actualización verificada directamente desde la app del cliente. Sin trámites ni llamadas.</p>
              <span className="uc-tag">Renovación · Actualización</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-icon">📋</div>
              <h3>Verificación de identidad en siniestros</h3>
              <p>Al presentar un siniestro, el asegurado acredita su identidad verificada desde la app. La aseguradora confirma en segundos que quien reclama es el titular — eliminando la suplantación.</p>
              <span className="uc-tag">Siniestros · Antifraude</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="section benefits" id="beneficios">
        <div className="s-inner">
          <div className="benefits-header reveal">
            <div>
              <div className="s-tag">Beneficios para la aseguradora</div>
              <h2 className="s-title">
                Lo que cambia para su aseguradora<br />
                <em>y para sus clientes.</em>
              </h2>
            </div>
            <p className="s-sub">
              Veris no reemplaza sus sistemas actuales — agrega la capa de verificación
              que convierte cada proceso en más seguro, más rápido y más rentable.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card bc-r reveal reveal-delay-1">
              <div className="benefit-icon bi-r">🛡️</div>
              <div className="benefit-title">Perfil de riesgo real desde el primer día</div>
              <div className="benefit-desc">
                Los datos vienen respaldados por la institución que los emitió — no por lo
                que el cliente escribió. Imposible de falsificar. La prima se fija sobre
                información verificada, no declarada.
              </div>
              <div className="benefit-hl bh-r">Fraude eliminado en el origen</div>
            </div>
            <div className="benefit-card bc-b reveal reveal-delay-2">
              <div className="benefit-icon bi-b">⚡</div>
              <div className="benefit-title">Cotización y emisión en el acto</div>
              <div className="benefit-desc">
                Con el perfil verificado disponible al instante, la aseguradora calcula la
                prima y emite la póliza sin esperar validaciones manuales. Lo que hoy tarda
                días ocurre en el mismo momento de la entrevista.
              </div>
              <div className="benefit-hl bh-b">Conversión inmediata, sin abandonos</div>
            </div>
            <div className="benefit-card bc-g reveal reveal-delay-3">
              <div className="benefit-icon bi-g">💸</div>
              <div className="benefit-title">La aseguradora también puede ser emisora</div>
              <div className="benefit-desc">
                La aseguradora puede emitir credenciales de cobertura vigente que el
                asegurado lleva en su app — para presentar ante hospitales, empleadores
                o terceros. Cada verificación genera un royalty.
              </div>
              <div className="benefit-hl bh-g">Nueva fuente de ingresos recurrentes</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-1">
              <div className="benefit-icon bi-m">😊</div>
              <div className="benefit-title">Experiencia del cliente sin fricción</div>
              <div className="benefit-desc">
                Un escaneo de QR reemplaza formularios extensos y documentos adjuntos.
                Los mejores perfiles son los que menos toleran la fricción — y los primeros
                en apreciar la diferencia.
              </div>
              <div className="benefit-hl bh-m">Mayor tasa de cierre y retención</div>
            </div>
            <div className="benefit-card bc-r reveal reveal-delay-2">
              <div className="benefit-icon bi-r">📊</div>
              <div className="benefit-title">Trazabilidad completa para reguladores</div>
              <div className="benefit-desc">
                Cada verificación queda registrada con fecha, hora y qué información
                se consultó. La aseguradora tiene evidencia completa del proceso de
                contratación y de cada siniestro atendido — lista para auditorías.
              </div>
              <div className="benefit-hl bh-r">Compliance automatizado</div>
            </div>
            <div className="benefit-card bc-b reveal reveal-delay-3">
              <div className="benefit-icon bi-b">🔄</div>
              <div className="benefit-title">Perfil siempre actualizado durante la vigencia</div>
              <div className="benefit-desc">
                La aseguradora puede solicitar actualización verificada directamente al
                cliente cuando su situación cambia. Sin trámites, sin llamadas — con
                información siempre vigente y sin ambigüedades.
              </div>
              <div className="benefit-hl bh-b">Riesgo gestionado en tiempo real</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACIDAD Y SEGURIDAD ── */}
      <section className="section security" id="seguridad">
        <div className="s-inner sec-inner">
          <div className="sec-grid">
            <div className="reveal">
              <div className="s-tag" style={{ color: "rgba(250,150,165,.85)" }}>Privacidad y seguridad</div>
              <h2 className="s-title s-title-white">
                La aseguradora obtiene lo que necesita.<br />
                <em style={{ color: "var(--magenta-s)" }}>El cliente protege lo que es suyo.</em>
              </h2>
              <p className="s-sub s-sub-white">
                Veris no almacena los datos del asegurado. La información viaja directamente
                desde su app a la aseguradora — Veris solo verifica la autenticidad.
              </p>
              <div className="sec-pillars">
                <div className="pillar">
                  <div className="pillar-ico">📌</div>
                  <div className="pillar-name">Solo lo necesario</div>
                  <div className="pillar-desc">
                    Si solo necesita saber si los ingresos superan un umbral, recibe eso —
                    sin el monto exacto. Sin datos sensibles innecesarios.
                  </div>
                  <span className="pillar-badge pb-rose">Minimización</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">🔒</div>
                  <div className="pillar-name">Imposible de alterar</div>
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
                    Registro de cada verificación con fecha, hora y qué se consultó.
                    Listo para reguladores y auditorías.
                  </div>
                  <span className="pillar-badge pb-amber">Trazabilidad</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">👤</div>
                  <div className="pillar-name">Control del cliente</div>
                  <div className="pillar-desc">
                    El cliente aprueba cada solicitud y ve en su app quién accedió
                    a su información y cuándo.
                  </div>
                  <span className="pillar-badge pb-blue">Transparencia</span>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="compliance-box">
                <div className="compliance-title">Estándares y normativas cubiertas</div>
                <div className="ci-items">
                  {[
                    { text: "CMF — Comisión para el Mercado Financiero", tag: "Chile" },
                    { text: "Ley 21.096 — Protección de Datos", tag: "Chile" },
                    { text: "W3C Verifiable Credentials", tag: "Internacional" },
                    { text: "Anti-fraude en siniestros", tag: "Seguros" },
                    { text: "KYC — Verificación de asegurados", tag: "Regulatorio" },
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
                  Para aseguradoras con requerimientos de soberanía de datos, Veris puede
                  desplegarse en la infraestructura de la aseguradora — sin dependencia
                  de servidores externos. Licencia anual, sin costo por verificación.
                </p>
                <div style={{ fontSize: ".78rem", color: "rgba(225,29,72,.7)", fontWeight: 500 }}>
                  Consultar plan Enterprise →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA ASEGURADORA COMO EMISORA ── */}
      <section className="section issuer" id="emisora">
        <div className="s-inner">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 2.5rem" }} className="reveal">
            <div className="s-tag">La aseguradora como emisora de confianza</div>
            <h2 className="s-title">
              Su aseguradora también puede emitir<br />
              <em>credenciales a sus asegurados.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Veris no solo permite verificar información de terceros — también permite
              emitir sus propias credenciales que el asegurado lleva en su app y
              presenta donde las necesite.
            </p>
          </div>
          <div className="issuer-grid">
            <div className="issuer-card reveal reveal-delay-1">
              <div className="issuer-icon">📄</div>
              <h3>Acreditación de cobertura vigente</h3>
              <p>
                El asegurado lleva en su app la credencial que certifica que tiene
                cobertura activa. La presenta ante hospitales, empleadores o terceros
                sin necesitar una carta de la aseguradora.
              </p>
            </div>
            <div className="issuer-card reveal reveal-delay-2">
              <div className="issuer-icon">🏥</div>
              <h3>Acceso a prestadores en red</h3>
              <p>
                Al llegar a una clínica o médico en red, el asegurado presenta su
                cobertura desde la app. El prestador verifica en segundos qué incluye
                su cobertura — sin llamar a la aseguradora.
              </p>
            </div>
            <div className="issuer-card reveal reveal-delay-3">
              <div className="issuer-icon">💰</div>
              <h3>Ingresos adicionales por verificación</h3>
              <p>
                Cada vez que un tercero verifica una credencial emitida por su aseguradora,
                <strong> la aseguradora recibe un royalty</strong>. Sus certificaciones
                generan ingresos adicionales más allá de las primas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-final" id="demo">
        <div className="cta-mesh"></div>
        <div className="cta-inner reveal">
          <div className="s-tag" style={{ display: "block", marginBottom: "1rem", color: "rgba(250,150,165,.85)" }}>
            Piloto sin costo de implementación
          </div>
          <h2>
            ¿Comenzamos con la verificación activa<br />
            <em>en su proceso de contratación?</em>
          </h2>
          <p className="cta-sub">
            Defina el ramo o producto con su equipo, Veris configura los criterios de
            verificación y el proceso está operativo en menos de una semana. Sin
            compromisos de escala, sin cambios en su infraestructura actual.
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
            <div className="ct-item"><span className="ct-icon">✓</span> Operativo en menos de una semana</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Soporte técnico dedicado en el piloto</div>
          </div>
        </div>
      </section>
    </>
  );
}
