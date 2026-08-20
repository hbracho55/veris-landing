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
  --amber:#B45309;
  --amber-soft:#D97706;
  --amber-pale:#FEF3C7;
  --amber-light:#FDE68A;
  --white:#FFFFFF;
  --ice:#F0F4FB;
  --text:#1A2B4A;
  --muted:#5A6A8A;
  --border:#D0DCF0;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text);line-height:1.6;overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--amber-soft);border-radius:2px}
a{text-decoration:none}

/* HERO */
.hero{min-height:100vh;background:var(--navy-deep);display:flex;align-items:center;position:relative;overflow:hidden;padding-top:100px}
.hero-bg{position:absolute;inset:0}
.hero-mesh{position:absolute;inset:0;background:
  radial-gradient(ellipse 70% 55% at 72% 28%, rgba(217,119,6,.2) 0%, transparent 60%),
  radial-gradient(ellipse 55% 45% at 12% 75%, rgba(68,114,196,.12) 0%, transparent 58%),
  radial-gradient(ellipse 35% 30% at 50% 5%, rgba(29,158,117,.07) 0%, transparent 55%)}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:64px 64px}
.hero-glow{position:absolute;top:10%;right:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(217,119,6,.12) 0%,transparent 65%);border-radius:50%;animation:gpulse 5s ease-in-out infinite}
@keyframes gpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.08);opacity:.5}}
.hero-inner{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:5rem clamp(1.25rem,4vw,3rem);display:grid;grid-template-columns:1.1fr 1fr;gap:4rem;align-items:center}
.hero-tag{display:inline-flex;align-items:center;gap:.5rem;background:rgba(217,119,6,.15);border:1px solid rgba(217,119,6,.3);color:rgba(253,211,77,.9);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .9rem;border-radius:100px;margin-bottom:1.5rem}
.hero-tag::before{content:'';width:5px;height:5px;background:rgba(253,211,77,.9);border-radius:50%;animation:bdot 2.2s ease-in-out infinite}
@keyframes bdot{0%,100%{opacity:1}50%{opacity:.2}}
.hero h1{font-family:'DM Serif Display',serif;font-size:clamp(2.4rem,4.5vw,3.6rem);line-height:1.1;color:#fff;font-weight:400;margin-bottom:1.5rem;letter-spacing:-.02em}
.hero h1 em{font-style:italic;color:var(--magenta-s)}
.hero-sub{font-size:1.05rem;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:2.5rem;font-weight:300;max-width:500px}
.hero-sub strong{color:rgba(255,255,255,.85);font-weight:500}
.hero-ctas{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.75rem}
.btn-primary{background:var(--amber-soft);color:#fff;padding:.85rem 1.75rem;border-radius:8px;font-size:.97rem;font-weight:500;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;border:none;cursor:pointer;font-family:'DM Sans',sans-serif}
.btn-primary:hover{background:var(--amber);transform:translateY(-2px);box-shadow:0 10px 28px rgba(217,119,6,.4)}
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
.fi-1{background:rgba(217,119,6,.2);border:1px solid rgba(217,119,6,.35)}
.fi-2{background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.3)}
.fi-3{background:rgba(192,56,138,.18);border:1px solid rgba(192,56,138,.3)}
.fi-4{background:rgba(68,114,196,.18);border:1px solid rgba(68,114,196,.3)}
.fi-5{background:rgba(217,119,6,.2);border:1px solid rgba(217,119,6,.35)}
.flow-title{font-size:.82rem;font-weight:500;color:rgba(255,255,255,.88);line-height:1.2}
.flow-sub{font-size:.72rem;color:rgba(255,255,255,.38);margin-top:.15rem}
.flow-arrow{text-align:center;color:rgba(255,255,255,.2);font-size:.75rem;margin:-.15rem 0 -.15rem 1.2rem}
.flow-check{width:18px;height:18px;border-radius:50%;background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.4);display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#5DD4A8;flex-shrink:0;align-self:center}
.hero-card-stats{display:grid;grid-template-columns:1fr 1fr 1fr;padding:1.25rem 1.75rem}
.stat-col{text-align:center;padding:.5rem 0}
.stat-col+.stat-col{border-left:1px solid rgba(255,255,255,.07)}
.stat-val{font-family:'DM Serif Display',serif;font-size:1.6rem;color:#fff;line-height:1}
.stat-val.am{color:#FDE68A}
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
.s-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.75rem;color:var(--amber-soft)}
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
.prob-item:hover{border-color:var(--amber-soft);box-shadow:0 4px 16px rgba(217,119,6,.08)}
.pi-icon{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.95rem}
.pi-r{background:#FEE8E8}.pi-a{background:#FEF4E0}.pi-b{background:var(--blue-pale)}.pi-p{background:#F0EEFE}.pi-g{background:var(--green-pale)}.pi-am{background:var(--amber-pale)}
.pi-title{font-size:.875rem;font-weight:600;color:var(--navy);margin-bottom:.2rem}
.pi-desc{font-size:.78rem;color:var(--muted);line-height:1.55}
.prob-card{background:var(--ice);border:1px solid var(--border);border-radius:16px;padding:1.75rem;overflow:hidden;position:relative}
.prob-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--amber-soft),var(--magenta-s))}
.prob-quote{font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--navy);line-height:1.55;font-style:italic;margin-bottom:1.25rem}
.prob-quote span{color:var(--amber-soft);font-style:normal;font-weight:700}
.prob-data{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.25rem}
.pd-item{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.9rem 1rem}
.pd-num{font-family:'DM Serif Display',serif;font-size:1.6rem;color:var(--navy);line-height:1}
.pd-num.a{color:var(--amber-soft)}
.pd-label{font-size:.72rem;color:var(--muted);margin-top:.25rem;line-height:1.4}

/* SOLUTION */
.solution{background:var(--ice)}
.sol-header{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.sol-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:1.25rem;position:relative}
.sol-steps::before{content:'';position:absolute;top:28px;left:calc(10% + 16px);right:calc(10% + 16px);height:1px;background:linear-gradient(90deg,var(--amber-soft),var(--green),var(--blue));opacity:.3}
.sol-step{text-align:center;padding:1.5rem 1rem;background:#fff;border:1px solid var(--border);border-radius:14px;position:relative;z-index:1;transition:transform .2s,box-shadow .2s}
.sol-step:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.step-num{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.1rem;font-family:'DM Serif Display',serif;font-size:1.4rem;font-weight:800;color:#fff}
.sn-1{background:var(--amber-soft)}.sn-2{background:var(--green)}.sn-3{background:var(--navy)}.sn-4{background:var(--magenta)}.sn-5{background:var(--blue)}
.sol-step h3{font-family:'DM Serif Display',serif;font-size:.9rem;font-weight:700;color:var(--navy);margin-bottom:.5rem}
.sol-step p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* BENEFITS */
.benefits{background:#fff}
.benefits-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3rem}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.benefit-card{background:var(--ice);border:1px solid var(--border);border-radius:14px;padding:1.6rem;transition:all .22s;position:relative;overflow:hidden}
.benefit-card:hover{background:#fff;box-shadow:0 8px 26px rgba(217,119,6,.08);transform:translateY(-2px)}
.benefit-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;transform:scaleX(0);transition:transform .25s;transform-origin:left}
.benefit-card:hover::before{transform:scaleX(1)}
.bc-a::before{background:var(--amber-soft)}.bc-g::before{background:var(--green)}.bc-b::before{background:var(--blue)}.bc-m::before{background:var(--magenta)}
.bc-a:hover{border-color:var(--amber-soft)}.bc-g:hover{border-color:var(--green)}.bc-b:hover{border-color:var(--blue)}.bc-m:hover{border-color:var(--magenta)}
.benefit-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;font-size:1.1rem}
.bi-a{background:var(--amber-pale)}.bi-g{background:var(--green-pale)}.bi-b{background:var(--blue-pale)}.bi-m{background:var(--magenta-pale)}
.benefit-title{font-family:'DM Serif Display',serif;font-size:.95rem;font-weight:700;color:var(--navy);margin-bottom:.55rem}
.benefit-desc{font-size:.79rem;color:var(--muted);line-height:1.62}
.benefit-hl{margin-top:.85rem;padding-top:.75rem;border-top:1px solid var(--border);font-size:.72rem;font-weight:600}
.bh-a{color:var(--amber-soft)}.bh-g{color:var(--green)}.bh-b{color:var(--blue)}.bh-m{color:var(--magenta)}

/* USE CASES */
.usecases{background:var(--ice)}
.uc-header{text-align:center;max-width:620px;margin:0 auto 3rem}
.uc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.uc-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s}
.uc-card:hover{border-color:var(--amber-soft);box-shadow:0 6px 20px rgba(217,119,6,.08);transform:translateY(-2px)}
.uc-icon{font-size:1.5rem;margin-bottom:.75rem}
.uc-card h3{font-size:.9rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.uc-card p{font-size:.78rem;color:var(--muted);line-height:1.6}
.uc-tag{display:inline-block;margin-top:.85rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.22rem .6rem;border-radius:100px;background:var(--amber-pale);color:var(--amber)}

/* SECURITY */
.security{background:var(--navy-deep);position:relative;overflow:hidden}
.security::after{content:'';position:absolute;top:-30%;right:-15%;width:700px;height:700px;background:radial-gradient(circle,rgba(217,119,6,.08) 0%,transparent 60%);border-radius:50%}
.sec-inner{position:relative;z-index:1}
.sec-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
.sec-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem}
.pillar{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:1.25rem;transition:border-color .2s}
.pillar:hover{border-color:rgba(255,255,255,.15)}
.pillar-ico{font-size:1.2rem;margin-bottom:.75rem}
.pillar-name{font-family:'DM Serif Display',serif;font-size:.88rem;font-weight:700;color:#fff;margin-bottom:.35rem}
.pillar-desc{font-size:.75rem;color:rgba(255,255,255,.4);line-height:1.55}
.pillar-badge{display:inline-block;margin-top:.6rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .6rem;border-radius:100px}
.pb-amber{background:rgba(217,119,6,.15);color:rgba(253,180,60,.9)}
.pb-green{background:rgba(29,158,117,.15);color:rgba(29,158,117,.85)}
.pb-blue{background:rgba(68,114,196,.15);color:rgba(68,114,196,.9)}
.pb-magenta{background:rgba(192,56,138,.15);color:rgba(192,56,138,.9)}
.compliance-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;margin-bottom:1.5rem}
.compliance-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.ci-items{display:flex;flex-direction:column;gap:.65rem}
.ci-item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:rgba(255,255,255,.03);border-radius:8px;border:1px solid rgba(255,255,255,.06)}
.ci-check{width:20px;height:20px;border-radius:50%;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.65rem;color:#5DD4A8}
.ci-text{font-size:.8rem;color:rgba(255,255,255,.55);flex:1}
.ci-tag{font-size:.65rem;font-weight:600;color:rgba(217,119,6,.8);letter-spacing:.04em}

/* EMPLOYEE BENEFIT */
.empbenefit{background:var(--ice)}
.empbenefit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:2.5rem}
.empbenefit-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s}
.empbenefit-card:hover{border-color:var(--amber-soft);box-shadow:0 6px 20px rgba(217,119,6,.08);transform:translateY(-2px)}
.eb-icon{font-size:1.5rem;margin-bottom:.75rem}
.empbenefit-card h3{font-size:.9rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.empbenefit-card p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* PLANS */
.plans{background:#fff}
.plans-header{text-align:center;max-width:620px;margin:0 auto 3rem}
.plans-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;max-width:1100px;margin:0 auto}
.plan-card{border:1px solid var(--border);border-radius:16px;padding:1.75rem;background:#fff;position:relative;transition:all .2s}
.plan-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.plan-card.featured{border-color:var(--amber-soft);background:var(--amber-pale)}
.plan-card.featured::before{content:'Más popular';position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--amber-soft);color:#fff;font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .8rem;border-radius:100px}
.plan-name{font-family:'DM Serif Display',serif;font-size:1.1rem;font-weight:700;color:var(--navy);margin-bottom:.4rem}
.plan-desc{font-size:.75rem;color:var(--muted);margin-bottom:1.25rem;line-height:1.5}
.plan-price{font-family:'DM Serif Display',serif;font-size:2rem;color:var(--navy);line-height:1;margin-bottom:.25rem}
.plan-price span{font-size:.85rem;color:var(--muted);font-family:'DM Sans',sans-serif;font-weight:400}
.plan-period{font-size:.72rem;color:var(--muted);margin-bottom:1.25rem}
.plan-divider{height:1px;background:var(--border);margin-bottom:1.25rem}
.plan-feature{display:flex;align-items:flex-start;gap:.5rem;font-size:.78rem;color:var(--muted);margin-bottom:.6rem;line-height:1.4}
.pf-check{color:var(--green);flex-shrink:0;font-weight:700;margin-top:.05rem}
.plan-enterprise{font-size:.78rem;color:var(--amber-soft);font-weight:500;margin-top:.75rem}

/* CTA */
.cta-final{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,3rem)}
.cta-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(217,119,6,.12) 0%,rgba(29,158,117,.06) 45%,transparent 70%)}
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
  .benefits-grid,.uc-cards,.empbenefit-grid{grid-template-columns:1fr 1fr}
  .sec-pillars,.plans-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:600px){
  .sol-steps,.benefits-grid,.uc-cards,.sec-pillars,.plans-grid,.empbenefit-grid{grid-template-columns:1fr}
  .hero-ctas,.cta-btns{flex-direction:column;align-items:stretch}
  .btn-primary,.btn-outline{width:100%;justify-content:center}
}
`;

export default function EmployerPage() {
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
            <div className="hero-tag">Solución para Instituciones Empleadoras</div>
            <h1>
              Su empresa certifica a sus colaboradores.<br />
              <em>¿Ellos pueden demostrarlo donde lo necesiten?</em>
            </h1>
            <p className="hero-sub">
              Veris permite que su empresa emita certificados digitales de empleo, renta y
              antigüedad que sus colaboradores llevan en el teléfono —
              <strong> y que cualquier institución puede verificar al instante, sin llamar
              a su empresa.</strong>
            </p>
            <div className="hero-ctas">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
              <a href="#como-funciona" className="btn-outline">Ver cómo funciona</a>
            </div>
            <div className="hero-proof">
              <div className="proof-item"><strong>0</strong>llamadas de verificación</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>&lt;2s</strong>para verificar un certificado</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>💰</strong>royalty por cada verificación</div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-top">
                <div className="hero-card-label">Flujo de certificado laboral digital</div>
                <div className="flow-step">
                  <div className="flow-icon fi-1">🏢</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Su empresa emite el certificado digital</div>
                    <div className="flow-sub">Liquidación, contrato, antigüedad — desde su sistema de RR.HH.</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-2">📱</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">El certificado llega a la app del colaborador</div>
                    <div className="flow-sub">Disponible siempre en su teléfono, sin depender de RR.HH.</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-3">📲</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">El colaborador lo presenta con un QR</div>
                    <div className="flow-sub">Banco, inmobiliaria, aseguradora — sin papeles</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-4">✅</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">El tercero verifica — su empresa cobra un royalty</div>
                    <div className="flow-sub">Sin llamadas a RR.HH. ni documentos que validar</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
              </div>
              <div className="hero-card-stats">
                <div className="stat-col">
                  <div className="stat-val am">0</div>
                  <div className="stat-lab">Llamadas verificación</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val">&lt;2s</div>
                  <div className="stat-lab">Verificación</div>
                </div>
                <div className="stat-col">
                  <div className="stat-val am">💰</div>
                  <div className="stat-lab">Royalty por uso</div>
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
            <div className="ps-pill">Empresas con equipos de RR.HH.</div>
            <div className="ps-pill">Grupos corporativos y holdings</div>
            <div className="ps-pill">Empresas de servicios y outsourcing</div>
            <div className="ps-pill">Plataformas de gestión de personas</div>
            <div className="ps-pill">Cooperativas y mutualidades</div>
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
                Su empresa pierde tiempo y dinero<br />
                <em>certificando lo que ya sabe.</em>
              </h2>
              <p className="s-sub">
                Cada certificado laboral que emite su empresa a mano, cada llamada que
                responde RR.HH. para confirmar si alguien trabaja ahí, y cada liquidación
                que un colaborador entrega a un desconocido — son costos invisibles que
                se acumulan todos los días.
              </p>
              <div className="prob-items">
                <div className="prob-item reveal reveal-delay-1">
                  <div className="pi-icon pi-am">📞</div>
                  <div>
                    <div className="pi-title">Llamadas de verificación que nadie pidió</div>
                    <div className="pi-desc">
                      Bancos, inmobiliarias y aseguradoras llaman a RR.HH. para confirmar
                      si un colaborador trabaja ahí, cuánto gana y si tiene contrato vigente.
                      Son decenas de llamadas al mes que consumen tiempo del equipo.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-2">
                  <div className="pi-icon pi-a">📄</div>
                  <div>
                    <div className="pi-title">Cartas y certificados que hay que emitir a mano</div>
                    <div className="pi-desc">
                      Cada colaborador que necesita un certificado laboral debe pedírselo a
                      RR.HH., quien lo redacta, lo firma y lo envía. Un proceso que debería
                      ser automático consume horas de trabajo administrativo.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-3">
                  <div className="pi-icon pi-r">🎭</div>
                  <div>
                    <div className="pi-title">Documentos que pueden ser falsificados</div>
                    <div className="pi-desc">
                      Las liquidaciones y cartas de trabajo en papel pueden adulterarse.
                      Cuando eso ocurre, el nombre de su empresa aparece en documentos
                      que nunca emitió — con el riesgo reputacional que eso implica.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-4">
                  <div className="pi-icon pi-b">🔓</div>
                  <div>
                    <div className="pi-title">Datos de sus colaboradores en manos de desconocidos</div>
                    <div className="pi-desc">
                      Cuando un colaborador entrega una liquidación a un arrendador o una
                      fintech, está compartiendo información sensible de su empresa con
                      terceros que no conoce. Su empresa no controla a quién llegan esos datos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="prob-card">
                <div className="prob-quote">
                  &quot;Su empresa ya genera los datos que el mercado necesita.
                  Hoy los entrega <span>en papel y gratis.</span>
                  Con Veris, los convierte en un activo digital que genera ingresos.&quot;
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.65 }}>
                  Veris no reemplaza los sistemas de RR.HH. Se conecta a ellos y convierte
                  cada certificado en una credencial digital que el colaborador porta —
                  y que genera un royalty cada vez que alguien la verifica.
                </p>
                <div className="prob-data">
                  <div className="pd-item">
                    <div className="pd-num a">0</div>
                    <div className="pd-label">llamadas de verificación que su equipo debe responder</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">48h</div>
                    <div className="pd-label">tiempo promedio de verificación manual en Chile</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num a">&lt;2s</div>
                    <div className="pd-label">para verificar un certificado con Veris</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">💰</div>
                    <div className="pd-label">royalty por cada verificación exitosa de sus certificados</div>
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
              Su empresa emite una vez.<br />
              <em>El colaborador lo usa donde quiera.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto" }}>
              Sin cambios en su sistema de RR.HH. Veris se conecta a él y convierte
              cada certificado en una credencial digital que el colaborador porta en su app.
            </p>
          </div>
          <div className="sol-steps">
            <div className="sol-step reveal reveal-delay-1">
              <div className="step-num sn-1">1</div>
              <h3>Su empresa emite el certificado</h3>
              <p>Liquidación, contrato, antigüedad — desde su sistema de RR.HH., sin cambios en el flujo actual.</p>
            </div>
            <div className="sol-step reveal reveal-delay-2">
              <div className="step-num sn-2">2</div>
              <h3>El certificado llega a la app del colaborador</h3>
              <p>Disponible siempre en su teléfono. No se pierde, no se deteriora, no requiere pedirlo a RR.HH. cada vez.</p>
            </div>
            <div className="sol-step reveal reveal-delay-3">
              <div className="step-num sn-3">3</div>
              <h3>El colaborador lo presenta con un QR</h3>
              <p>Banco, inmobiliaria, aseguradora — el colaborador muestra un código QR desde su teléfono.</p>
            </div>
            <div className="sol-step reveal reveal-delay-4">
              <div className="step-num sn-4">4</div>
              <h3>El tercero verifica en &lt;2 segundos</h3>
              <p>Sin llamar a su empresa. El certificado es auténtico, vigente e imposible de falsificar.</p>
            </div>
            <div className="sol-step reveal" style={{ transitionDelay: ".5s" }}>
              <div className="step-num sn-5">5</div>
              <h3>Su empresa recibe un royalty</h3>
              <p>Cada verificación exitosa genera un ingreso para su empresa. Sus datos ya tenían valor — Veris lo monetiza.</p>
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
              ¿Qué puede hacer su empresa<br />
              con Veris <em>desde hoy?</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Desde la emisión automática de certificados hasta el control de acceso físico —
              Veris cubre todos los procesos donde la empresa certifica a sus colaboradores.
            </p>
          </div>
          <div className="uc-cards">
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-icon">💳</div>
              <h3>Sus colaboradores acceden a crédito más rápido</h3>
              <p>Cuando un colaborador solicita un crédito, el banco verifica su renta y empleo directamente desde la app — sin que el colaborador adjunte documentos ni RR.HH. responda llamadas.</p>
              <span className="uc-tag">Beneficio colaborador</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-icon">🏠</div>
              <h3>El colaborador arrienda sin exponer sus datos</h3>
              <p>En lugar de entregar copias de sus liquidaciones a un arrendador desconocido, muestra su certificado desde la app. Solo comparte lo que ese proceso necesita — sin revelar más.</p>
              <span className="uc-tag">Privacidad · Arriendo</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-icon">📋</div>
              <h3>Emisión automática de certificados sin RR.HH.</h3>
              <p>El colaborador solicita su certificado directamente desde la app. El sistema lo genera y entrega sin que nadie en RR.HH. tenga que intervenir — liberando tiempo para tareas de mayor valor.</p>
              <span className="uc-tag">Automatización · RR.HH.</span>
            </div>
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-icon">🔐</div>
              <h3>Control de acceso físico y digital sin tarjetas</h3>
              <p>Los colaboradores acceden a oficinas y sistemas con su credencial digital en lugar de una tarjeta física. La empresa elimina el costo de emitir, reponer y gestionar credenciales físicas.</p>
              <span className="uc-tag">Seguridad · Acceso</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-icon">🤝</div>
              <h3>Incorporación más rápida de nuevos colaboradores</h3>
              <p>Cuando alguien llega de otra empresa que usa Veris, su experiencia, cargo y renta anterior ya están verificados en su app. El proceso de validación que hoy tarda días se resuelve en minutos.</p>
              <span className="uc-tag">Onboarding · Talento</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-icon">🏢</div>
              <h3>Beneficios para empleados de empresas convenio</h3>
              <p>El empleado demuestra su vínculo laboral directamente desde la app, sin que el banco lo valide con la empresa. Accede al beneficio en el acto — sin tramitaciones adicionales.</p>
              <span className="uc-tag">Convenios · Beneficios</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="section benefits" id="beneficios">
        <div className="s-inner">
          <div className="benefits-header reveal">
            <div>
              <div className="s-tag">Beneficios para su empresa</div>
              <h2 className="s-title">
                Lo que cambia para su empresa,<br />
                <em>sus colaboradores y los terceros.</em>
              </h2>
            </div>
            <p className="s-sub">
              Veris no solo elimina trabajo administrativo — convierte los certificados
              que su empresa ya emite en un activo digital que genera valor continuo.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card bc-a reveal reveal-delay-1">
              <div className="benefit-icon bi-a">📵</div>
              <div className="benefit-title">Cero llamadas de verificación</div>
              <div className="benefit-desc">
                Los bancos y terceros verifican el documento directamente desde la app del
                colaborador. RR.HH. deja de responder consultas de verificación — para siempre.
              </div>
              <div className="benefit-hl bh-a">Horas de RR.HH. recuperadas cada mes</div>
            </div>
            <div className="benefit-card bc-g reveal reveal-delay-2">
              <div className="benefit-icon bi-g">🔒</div>
              <div className="benefit-title">Documentos imposibles de falsificar</div>
              <div className="benefit-desc">
                Cada certificado está firmado digitalmente por su empresa. Cualquier
                alteración lo invalida automáticamente — nadie puede usar un documento
                falso con el nombre de su empresa.
              </div>
              <div className="benefit-hl bh-g">Protección de marca garantizada</div>
            </div>
            <div className="benefit-card bc-a reveal reveal-delay-3">
              <div className="benefit-icon bi-a">💰</div>
              <div className="benefit-title">Nueva fuente de ingresos</div>
              <div className="benefit-desc">
                Su empresa recibe un royalty cada vez que un tercero verifica exitosamente
                un certificado que ella emitió. Sus datos ya tenían valor en el mercado —
                Veris le paga por ese valor.
              </div>
              <div className="benefit-hl bh-a">Ingresos recurrentes sin esfuerzo adicional</div>
            </div>
            <div className="benefit-card bc-b reveal reveal-delay-1">
              <div className="benefit-icon bi-b">⚡</div>
              <div className="benefit-title">Emisión automática sin intervención humana</div>
              <div className="benefit-desc">
                El colaborador solicita su certificado desde la app y lo recibe al instante.
                Sin redacción, sin firma, sin envío manual. El proceso que hoy toma horas
                ocurre en segundos.
              </div>
              <div className="benefit-hl bh-b">Automatización completa del ciclo</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-2">
              <div className="benefit-icon bi-m">😊</div>
              <div className="benefit-title">Un beneficio laboral diferencial</div>
              <div className="benefit-desc">
                Sus colaboradores tienen en su teléfono certificados que facilitan su vida
                cotidiana — crédito más rápido, arriendo sin papeles, acreditación inmediata.
                Un beneficio concreto que ninguna otra empresa ofrece hoy en Chile.
              </div>
              <div className="benefit-hl bh-m">Retención y atracción de talento</div>
            </div>
            <div className="benefit-card bc-g reveal reveal-delay-3">
              <div className="benefit-icon bi-g">🔄</div>
              <div className="benefit-title">Revocación instantánea al desvincularse</div>
              <div className="benefit-desc">
                Si un colaborador deja la empresa, su certificado de empleo queda inválido
                de inmediato. Ningún documento desactualizado puede seguir circulando
                con el nombre de su empresa.
              </div>
              <div className="benefit-hl bh-g">Control total del ciclo del certificado</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACIDAD Y CONTROL ── */}
      <section className="section security" id="seguridad">
        <div className="s-inner sec-inner">
          <div className="sec-grid">
            <div className="reveal">
              <div className="s-tag" style={{ color: "rgba(253,211,77,.85)" }}>Control y privacidad</div>
              <h2 className="s-title s-title-white">
                Su empresa decide qué certifica.<br />
                <em style={{ color: "var(--magenta-s)" }}>El colaborador decide qué comparte.</em>
              </h2>
              <p className="s-sub s-sub-white">
                Veris no almacena datos de sus colaboradores. Los certificados viven en el
                teléfono de cada persona — Veris solo verifica la autenticidad cuando se presentan.
              </p>
              <div className="sec-pillars">
                <div className="pillar">
                  <div className="pillar-ico">📌</div>
                  <div className="pillar-name">Control total sobre qué certifica</div>
                  <div className="pillar-desc">
                    Su empresa define exactamente qué información incluye cada credencial.
                    Solo se certifica lo que usted autoriza.
                  </div>
                  <span className="pillar-badge pb-amber">Control emisor</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">🔄</div>
                  <div className="pillar-name">Revocación instantánea</div>
                  <div className="pillar-desc">
                    Si un colaborador deja la empresa, su credencial se invalida
                    de inmediato en todo el sistema.
                  </div>
                  <span className="pillar-badge pb-green">Vigencia garantizada</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">📊</div>
                  <div className="pillar-name">Trazabilidad de cada uso</div>
                  <div className="pillar-desc">
                    Su empresa puede ver cuántas veces se han verificado sus
                    certificados, en qué contextos y cuándo.
                  </div>
                  <span className="pillar-badge pb-blue">Auditoría</span>
                </div>
                <div className="pillar">
                  <div className="pillar-ico">🔒</div>
                  <div className="pillar-name">El colaborador controla sus datos</div>
                  <div className="pillar-desc">
                    El colaborador elige qué comparte y con quién. Sus datos no
                    salen de su app sin su autorización explícita.
                  </div>
                  <span className="pillar-badge pb-magenta">Privacidad</span>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="compliance-box">
                <div className="compliance-title">Estándares y normativas cubiertas</div>
                <div className="ci-items">
                  {[
                    { text: "Ley 21.096 — Protección de Datos Personales", tag: "Chile" },
                    { text: "Ley Fintech — Portabilidad financiera", tag: "Financiero" },
                    { text: "W3C Verifiable Credentials", tag: "Internacional" },
                    { text: "ISO 27001 aligned", tag: "Seguridad" },
                    { text: "Dirección del Trabajo — Certificación laboral", tag: "Laboral" },
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
                <div className="compliance-title" style={{ marginBottom: ".75rem" }}>Integración con su sistema actual</div>
                <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.45)", lineHeight: 1.65, marginBottom: ".75rem" }}>
                  Veris se conecta al sistema de RR.HH. que ya usa su empresa mediante
                  integración estándar. Sin cambios en su base de datos, sin migración,
                  sin rediseñar sus procesos. El plan Enterprise incluye integración
                  directa con su sistema de nómina.
                </p>
                <div style={{ fontSize: ".78rem", color: "rgba(217,119,6,.8)", fontWeight: 500 }}>
                  Consultar plan Enterprise →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIO PARA COLABORADORES ── */}
      <section className="section empbenefit" id="colaboradores">
        <div className="s-inner">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 2.5rem" }} className="reveal">
            <div className="s-tag">Veris como beneficio laboral</div>
            <h2 className="s-title">
              El beneficio que sus colaboradores<br />
              <em>usan todos los días.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Implementar Veris no solo mejora la operación interna — también le entrega
              a cada colaborador algo concreto y valioso que ninguna otra empresa ofrece hoy en Chile.
            </p>
          </div>
          <div className="empbenefit-grid">
            <div className="empbenefit-card reveal reveal-delay-1">
              <div className="eb-icon">🏦</div>
              <h3>Acceso más fácil al crédito</h3>
              <p>
                El colaborador demuestra su renta y empleo al instante ante cualquier banco
                o fintech. Sin esperar que RR.HH. emita una carta, sin adjuntar documentos,
                sin demoras. El proceso que hoy tarda días ocurre en segundos.
              </p>
            </div>
            <div className="empbenefit-card reveal reveal-delay-2">
              <div className="eb-icon">🏠</div>
              <h3>Arrendar sin exponer sus datos</h3>
              <p>
                En lugar de entregar copias de sus liquidaciones a un arrendador desconocido,
                muestra su certificado desde la app. Solo comparte lo que ese proceso necesita —
                sin revelar su sueldo exacto ni datos adicionales.
              </p>
            </div>
            <div className="empbenefit-card reveal reveal-delay-3">
              <div className="eb-icon">📱</div>
              <h3>Sus documentos, siempre disponibles</h3>
              <p>
                El colaborador no depende de RR.HH. para obtener un certificado cuando lo
                necesita. Lo tiene en su teléfono, listo para presentar en cualquier momento —
                sin filas, sin esperas, sin trámites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-final" id="demo">
        <div className="cta-mesh"></div>
        <div className="cta-inner reveal">
          <div className="s-tag" style={{ display: "block", marginBottom: "1rem", color: "rgba(253,211,77,.85)" }}>
            Piloto sin costo de implementación
          </div>
          <h2>
            ¿Comenzamos con los primeros certificados<br />
            <em>emitidos en una semana?</em>
          </h2>
          <p className="cta-sub">
            Defina el tipo de certificado con su equipo, Veris se conecta a su sistema
            de RR.HH. y los primeros certificados digitales llegan a sus colaboradores
            en menos de una semana. Sin compromisos de escala, sin cambios en su operación actual.
          </p>
          <div className="cta-btns">
            <DemoTrigger className="btn-primary" style={{ fontSize: "1rem", padding: ".9rem 2rem" }}>
              Agendar una demo →
            </DemoTrigger>
            <Link href="/" className="btn-outline">← Volver a Veris</Link>
          </div>
          <div className="cta-trust">
            <div className="ct-item"><span className="ct-icon">✓</span> Sin costo de implementación</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Sin cambios en su sistema de RR.HH.</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Operativo en menos de una semana</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Soporte técnico dedicado en el piloto</div>
          </div>
        </div>
      </section>
    </>
  );
}
