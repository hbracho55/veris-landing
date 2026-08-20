"use client";
import { useEffect } from "react";
import Link from "next/link";
import DemoTrigger from "../_components/DemoTrigger";

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1E3564;--navy-mid:#243A6A;--navy-deep:#111E3C;
  --blue:#4472C4;--blue-soft:#5B8FC4;--blue-pale:#EEF3FB;
  --magenta:#C0388A;--magenta-s:#D058A0;--magenta-pale:#FAE0F2;
  --green:#1D9E75;--green-pale:#E0F5EE;--green-mid:#E3F7F0;
  --teal:#0E8FA0;--teal-pale:#E0F5F8;--teal-mid:#D0EFF3;
  --white:#FFFFFF;--ice:#F0F4FB;--ice-mid:#D8E5F5;
  --text:#1A2B4A;--muted:#5A6A8A;--faint:#8A9BB8;--border:#D0DCF0;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text);line-height:1.6;overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--green);border-radius:2px}
a{text-decoration:none}

/* HERO */
.hero{min-height:100vh;background:var(--navy-deep);display:flex;align-items:center;position:relative;overflow:hidden;padding-top:100px}
.hero-bg{position:absolute;inset:0}
.hero-mesh{position:absolute;inset:0;background:
  radial-gradient(ellipse 70% 55% at 72% 28%, rgba(29,158,117,.22) 0%, transparent 60%),
  radial-gradient(ellipse 55% 45% at 12% 75%, rgba(14,143,160,.14) 0%, transparent 58%),
  radial-gradient(ellipse 35% 30% at 50% 5%, rgba(68,114,196,.07) 0%, transparent 55%)}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:64px 64px}
.hero-glow{position:absolute;top:10%;right:5%;width:480px;height:480px;background:radial-gradient(circle,rgba(29,158,117,.14) 0%,transparent 65%);border-radius:50%;animation:gpulse 5s ease-in-out infinite}
@keyframes gpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.08);opacity:.5}}
.hero-inner{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:5rem clamp(1.25rem,4vw,3rem);display:grid;grid-template-columns:1.1fr 1fr;gap:4rem;align-items:center}
.hero-tag{display:inline-flex;align-items:center;gap:.5rem;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);color:rgba(100,220,170,.9);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .9rem;border-radius:100px;margin-bottom:1.5rem}
.hero-tag::before{content:'';width:5px;height:5px;background:rgba(100,220,170,.9);border-radius:50%;animation:bdot 2.2s ease-in-out infinite}
@keyframes bdot{0%,100%{opacity:1}50%{opacity:.2}}
.hero h1{font-family:'DM Serif Display',serif;font-size:clamp(2.4rem,4.5vw,3.6rem);line-height:1.1;color:#fff;font-weight:400;margin-bottom:1.5rem;letter-spacing:-.02em}
.hero h1 em{font-style:italic;color:var(--magenta-s)}
.hero-sub{font-size:1.05rem;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:2.5rem;font-weight:300;max-width:500px}
.hero-sub strong{color:rgba(255,255,255,.85);font-weight:500}
.hero-ctas{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.75rem}
.btn-primary{background:var(--green);color:#fff;padding:.85rem 1.75rem;border-radius:8px;font-size:.97rem;font-weight:500;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;border:none;cursor:pointer;font-family:'DM Sans',sans-serif}
.btn-primary:hover{background:#178A65;transform:translateY(-2px);box-shadow:0 10px 28px rgba(29,158,117,.4)}
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
.fi-1{background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.35)}
.fi-2{background:rgba(192,56,138,.18);border:1px solid rgba(192,56,138,.3)}
.fi-3{background:rgba(14,143,160,.2);border:1px solid rgba(14,143,160,.35)}
.fi-4{background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.35)}
.flow-title{font-size:.82rem;font-weight:500;color:rgba(255,255,255,.88);line-height:1.2}
.flow-sub{font-size:.72rem;color:rgba(255,255,255,.38);margin-top:.15rem}
.flow-arrow{text-align:center;color:rgba(255,255,255,.2);font-size:.75rem;margin:-.15rem 0 -.15rem 1.2rem}
.flow-check{width:18px;height:18px;border-radius:50%;background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.4);display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#5DD4A8;flex-shrink:0;align-self:center}
.hero-card-stats{display:grid;grid-template-columns:1fr 1fr 1fr;padding:1.25rem 1.75rem}
.stat-col{text-align:center;padding:.5rem 0}
.stat-col+.stat-col{border-left:1px solid rgba(255,255,255,.07)}
.stat-val{font-family:'DM Serif Display',serif;font-size:1.6rem;color:#fff;line-height:1}
.stat-val.green{color:#5DD4A8}
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
.s-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.75rem;color:var(--green)}
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
.prob-item:hover{border-color:var(--green);box-shadow:0 4px 16px rgba(29,158,117,.08)}
.pi-icon{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.95rem}
.pi-r{background:#FEE8E8}.pi-a{background:#FEF4E0}.pi-g{background:var(--green-mid)}.pi-t{background:var(--teal-pale)}
.pi-title{font-size:.875rem;font-weight:600;color:var(--navy);margin-bottom:.2rem}
.pi-desc{font-size:.78rem;color:var(--muted);line-height:1.55}
.prob-card{background:var(--ice);border:1px solid var(--border);border-radius:16px;padding:1.75rem;overflow:hidden;position:relative}
.prob-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--green),var(--teal))}
.prob-quote{font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--navy);line-height:1.55;font-style:italic;margin-bottom:1.25rem}
.prob-quote span{color:var(--green);font-style:normal;font-weight:700}
.prob-data{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.25rem}
.pd-item{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.9rem 1rem}
.pd-num{font-family:'DM Serif Display',serif;font-size:1.6rem;color:var(--navy);line-height:1}
.pd-num.g{color:var(--green)}.pd-num.t{color:var(--teal)}
.pd-label{font-size:.72rem;color:var(--muted);margin-top:.25rem;line-height:1.4}

/* SOLUTION */
.solution{background:var(--ice)}
.sol-header{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.sol-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;position:relative}
.sol-steps::before{content:'';position:absolute;top:28px;left:calc(12.5% + 16px);right:calc(12.5% + 16px);height:1px;background:linear-gradient(90deg,var(--green),var(--teal),var(--green));opacity:.3}
.sol-step{text-align:center;padding:1.5rem 1rem;background:#fff;border:1px solid var(--border);border-radius:14px;position:relative;z-index:1;transition:transform .2s,box-shadow .2s}
.sol-step:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.step-num{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.1rem;font-family:'DM Serif Display',serif;font-size:1.4rem;font-weight:800;color:#fff}
.sn-1{background:var(--green)}.sn-2{background:var(--magenta)}.sn-3{background:var(--teal)}.sn-4{background:var(--navy)}
.sol-step h3{font-family:'DM Serif Display',serif;font-size:.9rem;font-weight:700;color:var(--navy);margin-bottom:.5rem}
.sol-step p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* BENEFITS */
.benefits{background:#fff}
.benefits-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3rem}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.benefit-card{background:var(--ice);border:1px solid var(--border);border-radius:14px;padding:1.6rem;transition:all .22s;position:relative;overflow:hidden}
.benefit-card:hover{background:#fff;box-shadow:0 8px 26px rgba(29,158,117,.09);transform:translateY(-2px)}
.benefit-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;transform:scaleX(0);transition:transform .25s;transform-origin:left}
.benefit-card:hover::before{transform:scaleX(1)}
.bc-g::before{background:var(--green)}.bc-t::before{background:var(--teal)}.bc-m::before{background:var(--magenta)}
.benefit-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;font-size:1.1rem}
.bi-g{background:var(--green-mid)}.bi-t{background:var(--teal-pale)}.bi-m{background:var(--magenta-pale)}
.benefit-title{font-family:'DM Serif Display',serif;font-size:.95rem;font-weight:700;color:var(--navy);margin-bottom:.55rem}
.benefit-desc{font-size:.79rem;color:var(--muted);line-height:1.62}
.benefit-hl{margin-top:.85rem;padding-top:.75rem;border-top:1px solid var(--border);font-size:.72rem;font-weight:600}
.bh-g{color:var(--green)}.bh-t{color:var(--teal)}.bh-m{color:var(--magenta)}

/* DOCUMENTS */
.documents{background:var(--ice)}
.doc-header{text-align:center;max-width:640px;margin:0 auto 3rem}
.doc-tabs{display:flex;gap:.6rem;justify-content:center;margin-bottom:2.5rem;flex-wrap:wrap}
.doc-tab-btn{font-size:.78rem;font-weight:600;padding:.45rem 1.1rem;border-radius:100px;border:1px solid var(--border);background:#fff;color:var(--muted);cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif}
.doc-tab-btn.active-g{background:var(--green);color:#fff;border-color:var(--green)}
.doc-tab-btn.active-t{background:var(--teal);color:#fff;border-color:var(--teal)}
.doc-panel{display:none}.doc-panel.active{display:grid}
.doc-cards{grid-template-columns:repeat(3,1fr);gap:1.25rem}
.doc-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s}
.doc-card:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(29,158,117,.09)}
.doc-card.t:hover{box-shadow:0 6px 20px rgba(14,143,160,.09)}
.doc-num{font-family:'DM Serif Display',serif;font-size:2.5rem;line-height:1;margin-bottom:.75rem;letter-spacing:-.03em}
.doc-num.g{color:var(--green)}.doc-num.t{color:var(--teal)}
.doc-card h3{font-size:.9rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.doc-card p{font-size:.78rem;color:var(--muted);line-height:1.6}
.doc-badge{display:inline-flex;margin-top:.85rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.22rem .65rem;border-radius:100px}
.db-g{background:var(--green-mid);color:var(--green)}.db-t{background:var(--teal-pale);color:var(--teal)}
.fhir-box{background:var(--green-mid);border:1px solid rgba(29,158,117,.2);border-radius:12px;padding:1.1rem 1.4rem;display:flex;align-items:center;gap:1rem;margin-top:2rem}
.fhir-icon{font-size:1.4rem;flex-shrink:0}
.fhir-text h4{font-size:.82rem;font-weight:700;color:var(--green);margin-bottom:.2rem}
.fhir-text p{font-size:.76rem;color:var(--muted);line-height:1.55}
.fhir-badges{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.5rem}
.fhir-badge{font-size:.65rem;font-weight:600;padding:.18rem .55rem;border-radius:100px;background:rgba(29,158,117,.15);color:var(--green)}

/* SECURITY */
.security{background:var(--navy-deep);position:relative;overflow:hidden}
.security::after{content:'';position:absolute;top:-30%;right:-15%;width:700px;height:700px;background:radial-gradient(circle,rgba(29,158,117,.07) 0%,transparent 60%);border-radius:50%}
.sec-inner{position:relative;z-index:1}
.sec-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
.sec-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem}
.pillar{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:1.25rem;transition:border-color .2s}
.pillar:hover{border-color:rgba(255,255,255,.15)}
.pillar-ico{font-size:1.2rem;margin-bottom:.75rem}
.pillar-name{font-family:'DM Serif Display',serif;font-size:.88rem;font-weight:700;color:#fff;margin-bottom:.35rem}
.pillar-desc{font-size:.75rem;color:rgba(255,255,255,.4);line-height:1.55}
.pillar-badge{display:inline-block;margin-top:.6rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .6rem;border-radius:100px}
.pb-green{background:rgba(29,158,117,.15);color:rgba(29,158,117,.85)}
.pb-teal{background:rgba(14,143,160,.15);color:rgba(14,143,160,.9)}
.pb-magenta{background:rgba(192,56,138,.15);color:rgba(192,56,138,.9)}
.pb-amber{background:rgba(180,140,40,.15);color:rgba(200,160,60,.9)}
.compliance-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;margin-bottom:1.5rem}
.compliance-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.ci-items{display:flex;flex-direction:column;gap:.65rem}
.ci-item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:rgba(255,255,255,.03);border-radius:8px;border:1px solid rgba(255,255,255,.06)}
.ci-check{width:20px;height:20px;border-radius:50%;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.65rem;color:#5DD4A8}
.ci-text{font-size:.8rem;color:rgba(255,255,255,.55);flex:1}
.ci-tag{font-size:.65rem;font-weight:600;color:rgba(29,158,117,.75);letter-spacing:.04em}

/* INTEGRATION */
.integration{background:#fff}
.int-grid{display:grid;grid-template-columns:1fr 1fr;gap:4.5rem;align-items:center}
.int-list{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}
.int-item{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.25rem;background:var(--ice);border:1px solid var(--border);border-radius:10px}
.int-dot{width:8px;height:8px;border-radius:50%;background:var(--green);flex-shrink:0;margin-top:.4rem}
.int-dot.t{background:var(--teal)}.int-dot.m{background:var(--magenta)}
.int-text{font-size:.875rem;font-weight:500;color:var(--navy);margin-bottom:.15rem}
.int-sub{font-size:.78rem;color:var(--muted)}
.code-window{background:#0D1B33;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.08)}
.code-bar{display:flex;gap:.4rem;padding:.85rem 1.1rem;border-bottom:1px solid rgba(255,255,255,.06)}
.code-dot{width:9px;height:9px;border-radius:50%}
.cd1{background:#FF5F57}.cd2{background:#FEBC2E}.cd3{background:#28C840}
.code-body{padding:1.2rem 1.4rem;font-family:'SF Mono','Courier New',monospace;font-size:.74rem;line-height:1.88}
.cc{color:#5A7A8A}.ck{color:#5DD4A8}.cs{color:#90D0B8}.cv{color:#FAC775}.cp{color:#E880C0}

/* CTA */
.cta-final{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,3rem)}
.cta-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(29,158,117,.13) 0%,rgba(14,143,160,.07) 45%,transparent 70%)}
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
  .doc-tabs{gap:.4rem}
}
`;

export default function HealthcarePage() {
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

    /* Tab switcher */
    const btns = document.querySelectorAll<HTMLButtonElement>(".doc-tab-btn");
    const panels = document.querySelectorAll<HTMLElement>(".doc-panel");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.tab!;
        btns.forEach((b) => { b.classList.remove("active-g", "active-t"); });
        panels.forEach((p) => p.classList.remove("active"));
        btn.classList.add(target === "clinicas" ? "active-g" : "active-t");
        document.getElementById(`panel-${target}`)?.classList.add("active");
      });
    });

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
            <div className="hero-tag">Solución para Clínicas e Instituciones de Salud</div>
            <h1>
              Su clínica tiene la obligación de interoperar. Veris convierte esa obligación en <em>ventaja competitiva.</em>
            </h1>
            <p className="hero-sub">
              La Ley 21.668 obliga a todos los prestadores de salud a compartir datos clínicos de sus pacientes con otros prestadores autorizados. Veris permite cumplir esa ley desde el primer día — y le da al paciente control real sobre su información.
            </p>
            <div className="hero-ctas">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
              <a href="#como-funciona" className="btn-outline">Ver cómo funciona</a>
            </div>
            <div className="hero-proof">
              <div className="proof-item"><strong>Ley 21.668</strong>desde el primer día</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>&lt;2s</strong>verificación de credencial</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>6</strong>artículos cubiertos</div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-top">
                <div className="hero-card-label">Flujo de interoperabilidad clínica</div>
                <div className="flow-step">
                  <div className="flow-icon fi-1">🏥</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Su clínica emite datos al estándar internacional</div>
                    <div className="flow-sub">Sin cambios en su sistema actual</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-2">🔐</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Veris convierte los datos en credenciales del paciente</div>
                    <div className="flow-sub">El paciente las lleva en su app</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-3">📱</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Otra clínica verifica con un QR</div>
                    <div className="flow-sub">Sin conectarse a sus sistemas</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-4">✅</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Su clínica cumple la ley y el paciente controla sus datos</div>
                    <div className="flow-sub">Trazabilidad completa para MINSAL</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
              </div>
              <div className="hero-card-stats">
                <div className="stat-col">
                  <div className="stat-val green">Ley</div>
                  <div className="stat-lab">21.668</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">&lt;2s</div>
                  <div className="stat-lab">Verificación</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">6</div>
                  <div className="stat-lab">Arts. cubiertos</div>
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
            <div className="ps-pill">Clínicas y hospitales</div>
            <div className="ps-pill">Centros médicos</div>
            <div className="ps-pill">ISAPRES</div>
            <div className="ps-pill">FONASA</div>
            <div className="ps-pill">Laboratorios</div>
            <div className="ps-pill">Prestadores de salud</div>
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
                Cumplir la Ley 21.668 es complejo y costoso si lo hace sola.
              </h2>
              <p className="s-sub">
                Seis artículos clave definen qué datos deben ser portables y cómo deben estar disponibles para otros prestadores. Implementar todo eso desde cero requiere tiempo, presupuesto y expertise que la mayoría de las clínicas en Chile no tiene.
              </p>
              <div className="prob-items">
                <div className="prob-item reveal reveal-delay-1">
                  <div className="pi-icon pi-r">🖥️</div>
                  <div>
                    <div className="pi-title">Plataforma de datos clínicos activa 24/7</div>
                    <div className="pi-desc">
                      La ley exige una plataforma de datos clínicos permanentemente disponible que traduzca su base de datos propietaria al estándar internacional. Operarla desde cero es costoso.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-2">
                  <div className="pi-icon pi-a">🔑</div>
                  <div>
                    <div className="pi-title">Sistema de autorización segura del paciente</div>
                    <div className="pi-desc">
                      Debe implementar un sistema que gestione el consentimiento del paciente antes de cada acceso a sus datos — y que cumpla los estándares internacionales de autenticación.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-3">
                  <div className="pi-icon pi-g">📋</div>
                  <div>
                    <div className="pi-title">Registro en el directorio nacional MINSAL</div>
                    <div className="pi-desc">
                      Su punto de conexión debe inscribirse en el directorio nacional que operará MINSAL/FONASA. Sin ese registro, la clínica no es reconocida como habilitada.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-4">
                  <div className="pi-icon pi-t">🗂️</div>
                  <div>
                    <div className="pi-title">Auditoría y trazabilidad obligatoria</div>
                    <div className="pi-desc">
                      La ley exige registro de quién accedió a qué datos, cuándo y bajo qué autorización del paciente. Implementar esa auditoría requiere infraestructura adicional.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="prob-card">
                <div className="prob-quote">
                  &quot;La Ley 21.668 te obliga a exponer tu plataforma de datos de todas formas.{" "}
                  <span>Veris toma esa misma plataforma</span>{" "}
                  y convierte cada consulta en una credencial que el paciente lleva en su app.&quot;
                </div>
                <div className="prob-data">
                  <div className="pd-item">
                    <div className="pd-num g">Ley 21.668</div>
                    <div className="pd-label">6 artículos que su clínica debe cumplir</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">&lt;2s</div>
                    <div className="pd-label">verificación con credencial Veris</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num t">6</div>
                    <div className="pd-label">artículos cubiertos desde el primer día</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num g">0</div>
                    <div className="pd-label">cambios en su sistema clínico actual</div>
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
              Arquitectura de cumplimiento en dos capas. Su clínica no implementa <em>nada propio.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto" }}>
              Veris opera la plataforma de datos como servicio compartido y añade las credenciales verificables del paciente encima — cubriendo el 100% de los requisitos de la Ley 21.668.
            </p>
          </div>
          <div className="sol-steps">
            <div className="sol-step reveal reveal-delay-1">
              <div className="step-num sn-1">1</div>
              <h3>Veris se conecta a su sistema actual</h3>
              <p>
                Sin migración de datos ni cambios en su operación.
              </p>
            </div>
            <div className="sol-step reveal reveal-delay-2">
              <div className="step-num sn-2">2</div>
              <h3>Opera la plataforma de datos clínicos</h3>
              <p>
                Cumplimiento legal base para cualquier prestador autorizado.
              </p>
            </div>
            <div className="sol-step reveal reveal-delay-3">
              <div className="step-num sn-3">3</div>
              <h3>El paciente porta sus credenciales</h3>
              <p>
                Cada dato clínico disponible en su app, con control selectivo.
              </p>
            </div>
            <div className="sol-step reveal reveal-delay-4">
              <div className="step-num sn-4">4</div>
              <h3>Otra clínica verifica al instante</h3>
              <p>
                Sin acuerdos bilaterales ni integraciones entre sistemas.
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
              <div className="s-tag">Beneficios para el sector salud</div>
              <h2 className="s-title">
                Cumple la ley. <em>Diferénciese</em> de la competencia.
              </h2>
            </div>
            <p className="s-sub">
              Veris no solo resuelve el cumplimiento legal — añade capacidades que hoy no existen en ningún sistema clínico chileno.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card bc-g reveal reveal-delay-1">
              <div className="benefit-icon bi-g">✅</div>
              <div className="benefit-title">Cumplimiento completo de la Ley 21.668</div>
              <div className="benefit-desc">
                Los 6 artículos clave de la ley cubiertos desde el primer día. Sin infraestructura propia, sin equipo técnico dedicado, sin meses de implementación.
              </div>
              <div className="benefit-hl bh-g">6 artículos cubiertos desde el primer día</div>
            </div>
            <div className="benefit-card bc-t reveal reveal-delay-2">
              <div className="benefit-icon bi-t">🎛️</div>
              <div className="benefit-title">El paciente controla qué datos comparte</div>
              <div className="benefit-desc">
                A diferencia del cumplimiento básico que entrega el expediente completo o nada, Veris permite al paciente revelar solo los campos que autoriza campo por campo.
              </div>
              <div className="benefit-hl bh-t">Control selectivo por campo</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-3">
              <div className="benefit-icon bi-m">📲</div>
              <div className="benefit-title">Verificación sin integración entre clínicas</div>
              <div className="benefit-desc">
                Otra clínica puede verificar datos del paciente escaneando un QR — sin conectarse a sus sistemas, sin acuerdos previos, incluso sin internet.
              </div>
              <div className="benefit-hl bh-m">Funciona offline en la wallet del paciente</div>
            </div>
            <div className="benefit-card bc-g reveal reveal-delay-1">
              <div className="benefit-icon bi-g">🗂️</div>
              <div className="benefit-title">Trazabilidad completa para MINSAL</div>
              <div className="benefit-desc">
                Registro de cada acceso con fecha, hora, institución y qué datos fueron consultados. Listo para auditorías del regulador.
              </div>
              <div className="benefit-hl bh-g">Auditoría lista para MINSAL</div>
            </div>
            <div className="benefit-card bc-t reveal reveal-delay-2">
              <div className="benefit-icon bi-t">📋</div>
              <div className="benefit-title">Panel de consentimientos para su clínica</div>
              <div className="benefit-desc">
                Su clínica ve qué pacientes le han otorgado acceso, qué datos autorizaron y por cuánto tiempo. Puede solicitar acceso a nuevos pacientes desde el panel.
              </div>
              <div className="benefit-hl bh-t">Diferenciador que no existe hoy en Chile</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-3">
              <div className="benefit-icon bi-m">💸</div>
              <div className="benefit-title">Nuevo canal de ingresos para emisores</div>
              <div className="benefit-desc">
                Las clínicas e ISAPRES que emiten credenciales verificables reciben el 25% de
                cada validación exitosa realizada por farmacias, empleadores u otras
                instituciones. Emitir es gratis. El verificador paga.
              </div>
              <div className="benefit-hl bh-m">25% revenue share por validación</div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className="section documents" id="documentos">
        <div className="s-inner">
          <div className="doc-header reveal">
            <div className="s-tag">Documentos verificables</div>
            <h2 className="s-title">
              Los 6 artículos de la Ley 21.668 cubiertos por Veris.
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Selecciona el tipo de institución para ver los documentos específicos que Veris
              puede convertir en credenciales verificables.
            </p>
          </div>

          {/* Tabs */}
          <div className="doc-tabs">
            <button className="doc-tab-btn active-g" data-tab="clinicas">
              📋 Artículos de la Ley
            </button>
            <button className="doc-tab-btn" data-tab="isapres">
              🏥 Panel de Consentimientos
            </button>
          </div>

          {/* Panel Artículos de la Ley */}
          <div id="panel-clinicas" className="doc-panel active doc-cards">
            {[
              { n: "Art. 8", h: "Historia clínica completa", p: "El paciente puede autorizar a otro prestador a consultar su historia clínica completa desde su app.", b: "Interoperabilidad" },
              { n: "Art. 9", h: "Resumen de alta", p: "El resumen de alta hospitalaria disponible como credencial verificable por cualquier prestador autorizado.", b: "Alta · Continuidad" },
              { n: "Art. 10", h: "Certificados entre prestadores", p: "Diagnósticos y certificados clínicos intercambiables entre prestadores con consentimiento del paciente.", b: "Prestadores" },
              { n: "Art. 11", h: "Laboratorio e imagenología", p: "Resultados de exámenes e imágenes verificables sin duplicar estudios en cada nueva institución.", b: "Lab · Imágenes" },
              { n: "Art. 12", h: "Registro de vacunas", p: "El historial de vacunación del paciente disponible como credencial verificable en cualquier prestador.", b: "RNI · MINSAL" },
              { n: "Art. 13", h: "Receta electrónica", p: "Las recetas médicas como credenciales verificables en farmacias y otros prestadores autorizados.", b: "Farmacias · Recetas" },
            ].map((d, i) => (
              <div className="doc-card reveal" style={{ transitionDelay: `${.08 * (i % 3 + 1)}s` }} key={d.n}>
                <div className="doc-num g">{d.n}</div>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
                <span className="doc-badge db-g">{d.b}</span>
              </div>
            ))}
          </div>

          {/* Panel Panel de Consentimientos */}
          <div id="panel-isapres" className="doc-panel doc-cards">
            {[
              { n: "01", h: "Consentimientos activos", p: "Su clínica ve todos los pacientes que le han otorgado acceso activo, qué datos autorizaron y hasta cuándo.", b: "Panel · Clínica" },
              { n: "02", h: "Solicitudes pendientes", p: "Envíe solicitudes de acceso directamente al paciente desde el panel. El paciente aprueba o rechaza desde su app.", b: "Consentimiento · Digital" },
              { n: "03", h: "Control granular por dato", p: "El paciente puede autorizar vacunas pero no diagnósticos psiquiátricos. El control es campo por campo.", b: "Privacidad · Paciente" },
              { n: "04", h: "Consentimiento puntual o persistente", p: "El paciente puede autorizar una consulta específica o dar acceso por X días. Su clínica gestiona ambos tipos.", b: "Flexible · Configurable" },
              { n: "05", h: "Historial de consultas", p: "Cada consulta a datos del paciente queda registrada con médico, fecha y tipo de dato. Auditoría completa.", b: "Trazabilidad · MINSAL" },
              { n: "06", h: "Sin acuerdos bilaterales", p: "Cualquier clínica registrada en Veris puede solicitar acceso — sin que su clínica tenga que firmar convenios previos.", b: "Interoperabilidad" },
            ].map((d, i) => (
              <div className="doc-card t reveal" style={{ transitionDelay: `${.08 * (i % 3 + 1)}s` }} key={d.n}>
                <div className="doc-num t">{d.n}</div>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
                <span className="doc-badge db-t">{d.b}</span>
              </div>
            ))}
          </div>

          {/* FHIR badge */}
          <div className="fhir-box reveal">
            <div className="fhir-icon">🔬</div>
            <div className="fhir-text">
              <h4>Compatibilidad con Ley 21.668 y estándar internacional de datos clínicos</h4>
              <p>
                Todas las credenciales del sector salud se emiten como recursos FHIR R4,
                garantizando interoperabilidad con el ecosistema clínico chileno e internacional.
              </p>
              <div className="fhir-badges">
                {["Ley 21.668", "MINSAL", "HL7 FHIR R4", "Ley 21.096", "Superintendencia de Salud"].map(t => (
                  <span className="fhir-badge" key={t}>{t}</span>
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
                Construida para datos que{" "}
                <em style={{ color: "var(--magenta-s)" }}>no pueden comprometerse.</em>
              </h2>
              <p className="s-sub s-sub-white">
                La interoperabilidad de datos clínicos es la información más sensible que existe. Veris fue diseñada para cumplir la Ley 21.668 sin que su clínica asuma responsabilidad sobre los datos de terceros.
              </p>
              <div className="sec-pillars">
                <div className="pillar">
                  <div className="pillar-ico">🔐</div>
                  <div className="pillar-name">Confianza Cero</div>
                  <div className="pillar-desc">Autenticación y autorización independiente en cada operación. Ningún sistema se asume confiable por defecto.</div>
                  <span className="pillar-badge pb-green">Arquitectura</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">🛡️</div>
                  <div className="pillar-name">Privacidad por Diseño</div>
                  <div className="pillar-desc">La privacidad está incorporada desde el diseño original. Datos mínimos necesarios en cada credencial.</div>
                  <span className="pillar-badge pb-teal">Por defecto</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">🗂️</div>
                  <div className="pillar-name">Zero Data Liability</div>
                  <div className="pillar-desc">Los datos clínicos del paciente no se almacenan en Veris. Sin responsabilidad sobre brechas de datos sensibles.</div>
                  <span className="pillar-badge pb-magenta">Compliance</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">📋</div>
                  <div className="pillar-name">Consentimiento Explícito</div>
                  <div className="pillar-desc">Cada acceso requiere autorización activa del paciente. Trazabilidad completa lista para auditores de salud.</div>
                  <span className="pillar-badge pb-amber">Auditoría</span>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="compliance-box">
                <div className="compliance-title">Estándares y normativas cubiertas</div>
                <div className="ci-items">
                  {[
                    { text: "HL7 FHIR R4", tag: "Salud · Internacional" },
                    { text: "W3C Verifiable Credentials", tag: "Identidad" },
                    { text: "Ley 21.096 — Protección de Datos", tag: "Chile" },
                    { text: "MINSAL — Interoperabilidad clínica", tag: "Salud Chile" },
                    { text: "Superintendencia de Salud", tag: "Regulador" },
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
                <div className="compliance-title" style={{ marginBottom: ".75rem" }}>Integración técnica</div>
                <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.45)", lineHeight: 1.65, marginBottom: ".75rem" }}>
                  API REST + Webhooks estándar. Compatible con HIS, LIS y RIS. Sin acceso a tus
                  sistemas internos. Sandbox incluido. 5–10 días de integración estimada.
                </p>
                <div style={{ fontSize: ".78rem", color: "rgba(29,158,117,.8)", fontWeight: 500 }}>
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
                Compatible con su sistema clínico actual. <em>Sin cambios en su operación.</em>
              </h2>
              <p className="s-sub">
                Veris opera la plataforma de datos como servicio. Su clínica solo configura qué datos expone — sin tocar su base de datos ni sus flujos clínicos.
              </p>
              <div className="int-list">
                <div className="int-item">
                  <div className="int-dot"></div>
                  <div>
                    <div className="int-text">Conexión a su sistema actual sin migración</div>
                    <div className="int-sub">Sin acceso a su base de datos, sin modificar workflows</div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot t"></div>
                  <div>
                    <div className="int-text">Plataforma de datos estándar internacional</div>
                    <div className="int-sub">Compatible con HIS, LIS y RIS existentes</div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot m"></div>
                  <div>
                    <div className="int-text">Panel de consentimientos listo desde el día 1</div>
                    <div className="int-sub">Su equipo accede desde el navegador, sin instalación</div>
                  </div>
                </div>
                <div className="int-item">
                  <div className="int-dot"></div>
                  <div>
                    <div className="int-text">Sandbox con datos sintéticos incluido</div>
                    <div className="int-sub">Testing sin afectar producción desde el primer día</div>
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
                <div><span className="cc">{"// Configurar institución en Veris"}</span></div>
                <div><span className="cc">{"// Sin cambios en su sistema clínico"}</span></div>
                <div><span className="ck">POST</span> <span className="cs">/api/v1/issue</span></div>
                <div><span className="ck">{"{"}</span></div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;type&quot;</span>: <span className="cs">&quot;medical-history&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;institution&quot;</span>: <span className="cs">&quot;mi-clinica&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;articles&quot;</span>: <span className="cs">[&quot;Art.8&quot;,&quot;Art.9&quot;,&quot;Art.10&quot;,&quot;Art.11&quot;,&quot;Art.12&quot;,&quot;Art.13&quot;]</span>,</div>
                <div>&nbsp;&nbsp;<span className="ck">&quot;consent_required&quot;</span>: <span className="cv">true</span></div>
                <div><span className="ck">{"}"}</span></div>
                <div>&nbsp;</div>
                <div><span className="cc">{"// ← Panel de consentimientos activo"}</span></div>
                <div><span className="cc">{"// ← Ley 21.668 cumplida"}</span></div>
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
            Piloto de cumplimiento Ley 21.668
          </div>
          <h2>
            ¿Su clínica comienza a cumplir la ley <em>en menos de una semana?</em>
          </h2>
          <p className="cta-sub">
            Configure su plataforma de datos, active el panel de consentimientos y emita las primeras credenciales a sus pacientes. Sin infraestructura propia, sin cambios en su sistema clínico.
          </p>
          <div className="cta-btns">
            <DemoTrigger className="btn-primary" style={{ fontSize: "1rem", padding: ".9rem 2rem" }}>
              Agendar una demo →
            </DemoTrigger>
            <Link href="/" className="btn-outline">← Volver a Veris</Link>
          </div>
          <div className="cta-trust">
            <div className="ct-item"><span className="ct-icon">✓</span> Sin costo de implementación</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Sin cambios en su sistema</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Ley 21.668 cubierta</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Panel de consentimientos incluido</div>
          </div>
        </div>
      </section>
    </>
  );
}
