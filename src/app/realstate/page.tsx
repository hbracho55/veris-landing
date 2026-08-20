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
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text);line-height:1.6;overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--blue);border-radius:2px}
a{text-decoration:none}

/* HERO */
.hero{min-height:100vh;background:var(--navy-deep);display:flex;align-items:center;position:relative;overflow:hidden;padding-top:100px}
.hero-bg{position:absolute;inset:0}
.hero-mesh{position:absolute;inset:0;background:
  radial-gradient(ellipse 70% 55% at 72% 28%, rgba(68,114,196,.25) 0%, transparent 60%),
  radial-gradient(ellipse 55% 45% at 12% 75%, rgba(29,158,117,.12) 0%, transparent 58%),
  radial-gradient(ellipse 35% 30% at 50% 5%, rgba(68,114,196,.07) 0%, transparent 55%)}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:64px 64px}
.hero-glow{position:absolute;top:10%;right:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(29,158,117,.12) 0%,transparent 65%);border-radius:50%;animation:gpulse 5s ease-in-out infinite}
@keyframes gpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.08);opacity:.5}}
.hero-inner{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:5rem clamp(1.25rem,4vw,3rem);display:grid;grid-template-columns:1.1fr 1fr;gap:4rem;align-items:center}
.hero-tag{display:inline-flex;align-items:center;gap:.5rem;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);color:rgba(80,210,160,.9);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .9rem;border-radius:100px;margin-bottom:1.5rem}
.hero-tag::before{content:'';width:5px;height:5px;background:rgba(80,210,160,.9);border-radius:50%;animation:bdot 2.2s ease-in-out infinite}
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
.fi-2{background:rgba(68,114,196,.18);border:1px solid rgba(68,114,196,.3)}
.fi-3{background:rgba(192,56,138,.18);border:1px solid rgba(192,56,138,.3)}
.fi-4{background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.35)}
.fi-5{background:rgba(68,114,196,.18);border:1px solid rgba(68,114,196,.3)}
.flow-title{font-size:.82rem;font-weight:500;color:rgba(255,255,255,.88);line-height:1.2}
.flow-sub{font-size:.72rem;color:rgba(255,255,255,.38);margin-top:.15rem}
.flow-arrow{text-align:center;color:rgba(255,255,255,.2);font-size:.75rem;margin:-.15rem 0 -.15rem 1.2rem}
.flow-check{width:18px;height:18px;border-radius:50%;background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.4);display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#5DD4A8;flex-shrink:0;align-self:center}
.hero-card-stats{display:grid;grid-template-columns:1fr 1fr 1fr;padding:1.25rem 1.75rem}
.stat-col{text-align:center;padding:.5rem 0}
.stat-col+.stat-col{border-left:1px solid rgba(255,255,255,.07)}
.stat-val{font-family:'DM Serif Display',serif;font-size:1.6rem;color:#fff;line-height:1}
.stat-val.gr{color:#5DD4A8}
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
.pi-r{background:#FEE8E8}.pi-a{background:#FEF4E0}.pi-b{background:var(--blue-pale)}.pi-p{background:#F0EEFE}.pi-g{background:var(--green-pale)}.pi-m{background:var(--magenta-pale)}
.pi-title{font-size:.875rem;font-weight:600;color:var(--navy);margin-bottom:.2rem}
.pi-desc{font-size:.78rem;color:var(--muted);line-height:1.55}
.prob-card{background:var(--ice);border:1px solid var(--border);border-radius:16px;padding:1.75rem;overflow:hidden;position:relative}
.prob-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--green),var(--blue-soft))}
.prob-quote{font-family:'DM Serif Display',serif;font-size:1.15rem;color:var(--navy);line-height:1.55;font-style:italic;margin-bottom:1.25rem}
.prob-quote span{color:var(--green);font-style:normal;font-weight:700}
.prob-data{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.25rem}
.pd-item{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.9rem 1rem}
.pd-num{font-family:'DM Serif Display',serif;font-size:1.6rem;color:var(--navy);line-height:1}
.pd-num.g{color:var(--green)}
.pd-label{font-size:.72rem;color:var(--muted);margin-top:.25rem;line-height:1.4}

/* SOLUTION */
.solution{background:var(--ice)}
.sol-header{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.sol-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:1.25rem;position:relative}
.sol-steps::before{content:'';position:absolute;top:28px;left:calc(10% + 16px);right:calc(10% + 16px);height:1px;background:linear-gradient(90deg,var(--green),var(--blue-soft),var(--magenta));opacity:.3}
.sol-step{text-align:center;padding:1.5rem 1rem;background:#fff;border:1px solid var(--border);border-radius:14px;position:relative;z-index:1;transition:transform .2s,box-shadow .2s}
.sol-step:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.step-num{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.1rem;font-family:'DM Serif Display',serif;font-size:1.4rem;font-weight:800;color:#fff}
.sn-1{background:var(--green)}.sn-2{background:var(--blue)}.sn-3{background:var(--navy)}.sn-4{background:var(--magenta)}.sn-5{background:var(--green)}
.sol-step h3{font-family:'DM Serif Display',serif;font-size:.9rem;font-weight:700;color:var(--navy);margin-bottom:.5rem}
.sol-step p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* BENEFITS */
.benefits{background:#fff}
.benefits-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3rem}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.benefit-card{background:var(--ice);border:1px solid var(--border);border-radius:14px;padding:1.6rem;transition:all .22s;position:relative;overflow:hidden}
.benefit-card:hover{border-color:var(--green);background:#fff;box-shadow:0 8px 26px rgba(29,158,117,.09);transform:translateY(-2px)}
.benefit-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;transform:scaleX(0);transition:transform .25s;transform-origin:left}
.benefit-card:hover::before{transform:scaleX(1)}
.bc-g::before{background:var(--green)}.bc-b::before{background:var(--blue)}.bc-m::before{background:var(--magenta)}
.benefit-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;font-size:1.1rem}
.bi-g{background:var(--green-pale)}.bi-b{background:var(--blue-pale)}.bi-m{background:var(--magenta-pale)}
.benefit-title{font-family:'DM Serif Display',serif;font-size:.95rem;font-weight:700;color:var(--navy);margin-bottom:.55rem}
.benefit-desc{font-size:.79rem;color:var(--muted);line-height:1.62}
.benefit-hl{margin-top:.85rem;padding-top:.75rem;border-top:1px solid var(--border);font-size:.72rem;font-weight:600}
.bh-g{color:var(--green)}.bh-b{color:var(--blue)}.bh-m{color:var(--magenta)}

/* USE CASES */
.usecases{background:var(--ice)}
.uc-header{text-align:center;max-width:620px;margin:0 auto 3rem}
.uc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.uc-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s}
.uc-card:hover{border-color:var(--green);box-shadow:0 6px 20px rgba(29,158,117,.09);transform:translateY(-2px)}
.uc-icon{font-size:1.5rem;margin-bottom:.75rem}
.uc-card h3{font-size:.9rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}
.uc-card p{font-size:.78rem;color:var(--muted);line-height:1.6}
.uc-tag{display:inline-block;margin-top:.85rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.22rem .6rem;border-radius:100px;background:var(--green-pale);color:var(--green)}

/* SECURITY */
.security{background:var(--navy-deep);position:relative;overflow:hidden}
.security::after{content:'';position:absolute;top:-30%;right:-15%;width:700px;height:700px;background:radial-gradient(circle,rgba(29,158,117,.08) 0%,transparent 60%);border-radius:50%}
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
.pb-blue{background:rgba(68,114,196,.15);color:rgba(68,114,196,.9)}
.pb-magenta{background:rgba(192,56,138,.15);color:rgba(192,56,138,.9)}
.pb-amber{background:rgba(180,140,40,.15);color:rgba(200,160,60,.9)}
.compliance-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;margin-bottom:1.5rem}
.compliance-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.ci-items{display:flex;flex-direction:column;gap:.65rem}
.ci-item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:rgba(255,255,255,.03);border-radius:8px;border:1px solid rgba(255,255,255,.06)}
.ci-check{width:20px;height:20px;border-radius:50%;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.65rem;color:#5DD4A8}
.ci-text{font-size:.8rem;color:rgba(255,255,255,.55);flex:1}
.ci-tag{font-size:.65rem;font-weight:600;color:rgba(29,158,117,.7);letter-spacing:.04em}

/* PLANS */
.plans{background:#fff}
.plans-header{text-align:center;max-width:620px;margin:0 auto 3rem}
.plans-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;max-width:1100px;margin:0 auto}
.plan-card{border:1px solid var(--border);border-radius:16px;padding:1.75rem;background:#fff;position:relative;transition:all .2s}
.plan-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.plan-card.featured{border-color:var(--green);background:var(--green-pale)}
.plan-card.featured::before{content:'Más popular';position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--green);color:#fff;font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .8rem;border-radius:100px}
.plan-name{font-family:'DM Serif Display',serif;font-size:1.1rem;font-weight:700;color:var(--navy);margin-bottom:.4rem}
.plan-desc{font-size:.75rem;color:var(--muted);margin-bottom:1.25rem;line-height:1.5}
.plan-price{font-family:'DM Serif Display',serif;font-size:2rem;color:var(--navy);line-height:1;margin-bottom:.25rem}
.plan-price span{font-size:.85rem;color:var(--muted);font-family:'DM Sans',sans-serif;font-weight:400}
.plan-period{font-size:.72rem;color:var(--muted);margin-bottom:1.25rem}
.plan-divider{height:1px;background:var(--border);margin-bottom:1.25rem}
.plan-feature{display:flex;align-items:flex-start;gap:.5rem;font-size:.78rem;color:var(--muted);margin-bottom:.6rem;line-height:1.4}
.pf-check{color:var(--green);flex-shrink:0;font-weight:700;margin-top:.05rem}
.plan-enterprise{font-size:.78rem;color:var(--green);font-weight:500;margin-top:.75rem}

/* CTA */
.cta-final{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,3rem)}
.cta-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 50%,rgba(29,158,117,.14) 0%,rgba(68,114,196,.06) 45%,transparent 70%)}
.cta-inner{position:relative;z-index:1;text-align:center;max-width:720px;margin:0 auto}
.cta-inner h2{font-family:'DM Serif Display',serif;font-size:clamp(1.9rem,3.5vw,2.8rem);font-weight:400;color:#fff;margin-bottom:1.1rem;line-height:1.1;letter-spacing:-.02em}
.cta-inner h2 em{font-style:italic;color:var(--magenta-s)}
.cta-sub{font-size:1rem;color:rgba(255,255,255,.55);margin-bottom:2.5rem;font-weight:300;line-height:1.75}
.cta-btns{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.cta-trust{display:flex;justify-content:center;gap:2.5rem;flex-wrap:wrap}
.ct-item{display:flex;align-items:center;gap:.4rem;font-size:.75rem;color:rgba(255,255,255,.35)}
.ct-icon{color:var(--green)}

/* ADVANTAGE */
.advantage{background:var(--navy-deep);position:relative;overflow:hidden}
.advantage::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 30% 50%,rgba(29,158,117,.1) 0%,transparent 65%)}
.adv-inner{position:relative;z-index:1;max-width:1160px;margin:0 auto}
.adv-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.25rem;margin-top:2.5rem}
.adv-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:1.5rem;transition:border-color .2s}
.adv-card:hover{border-color:rgba(29,158,117,.3)}
.adv-icon{font-size:1.4rem;margin-bottom:.75rem}
.adv-title{font-family:'DM Serif Display',serif;font-size:.95rem;font-weight:700;color:#fff;margin-bottom:.5rem}
.adv-desc{font-size:.78rem;color:rgba(255,255,255,.45);line-height:1.62}

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
  .benefits-grid,.uc-cards,.adv-grid{grid-template-columns:1fr 1fr}
  .sec-pillars,.plans-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:600px){
  .sol-steps,.benefits-grid,.uc-cards,.sec-pillars,.plans-grid,.adv-grid{grid-template-columns:1fr}
  .hero-ctas,.cta-btns{flex-direction:column;align-items:stretch}
  .btn-primary,.btn-outline{width:100%;justify-content:center}
}
`;

export default function RealStatePage() {
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
            <div className="hero-tag">Solución para el Sector Inmobiliario</div>
            <h1>
              Publicar una propiedad es fácil.<br />
              <em>¿Saber quién puede pagarla también debería serlo.</em>
            </h1>
            <p className="hero-sub">
              Veris permite verificar la solvencia de un postulante en segundos —
              <strong> sin pedirle liquidaciones, sin llamar a su empleador</strong>, y sin
              que entregue documentos sensibles a desconocidos.
            </p>
            <div className="hero-ctas">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
              <a href="#como-funciona" className="btn-outline">Ver cómo funciona</a>
            </div>
            <div className="hero-proof">
              <div className="proof-item"><strong>&lt;2s</strong>verificación de solvencia</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>0</strong>documentos en papel</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>0</strong>posibilidad de fraude documental</div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-top">
                <div className="hero-card-label">Flujo de verificación inmobiliaria</div>
                <div className="flow-step">
                  <div className="flow-icon fi-1">🏠</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Postulante llega al proceso de arriendo</div>
                    <div className="flow-sub">Presencial o desde el portal en línea</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-2">📱</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Escanea el QR con la app Veris</div>
                    <div className="flow-sub">Igual de simple que escanear para pagar</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-3">🔒</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Autoriza compartir solo lo necesario</div>
                    <div className="flow-sub">Solvencia, empleo, identidad — sin documentos</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">
                  <div className="flow-icon fi-4">✅</div>
                  <div style={{ flex: 1 }}>
                    <div className="flow-title">Su empresa recibe perfil verificado al instante</div>
                    <div className="flow-sub">Respaldado por el empleador — imposible de falsificar</div>
                  </div>
                  <div className="flow-check">✓</div>
                </div>
              </div>
              <div className="hero-card-stats">
                <div className="stat-col">
                  <div className="stat-val gr">&lt;2s</div>
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
            <div className="ps-pill">Corredoras de propiedades</div>
            <div className="ps-pill">Inmobiliarias y constructoras</div>
            <div className="ps-pill">Portales de arriendo</div>
            <div className="ps-pill">Administradoras de activos</div>
            <div className="ps-pill">Grupos inmobiliarios</div>
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
                Arrendar o vender hoy implica riesgos<br />
                <em>que no deberían existir.</em>
              </h2>
              <p className="s-sub">
                Cada proceso de postulación expone a su empresa a documentos que pueden estar
                adulterados, a llamadas que nadie responde bien y a revisiones manuales que
                consumen tiempo valioso de su equipo comercial.
              </p>
              <div className="prob-items">
                <div className="prob-item reveal reveal-delay-1">
                  <div className="pi-icon pi-r">📄</div>
                  <div>
                    <div className="pi-title">Liquidaciones que pueden ser falsas</div>
                    <div className="pi-desc">
                      Cualquier persona puede presentar una liquidación adulterada. Sin verificación
                      en tiempo real, su empresa asume ese riesgo en cada postulación.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-2">
                  <div className="pi-icon pi-a">📞</div>
                  <div>
                    <div className="pi-title">Llamadas al empleador que nadie responde bien</div>
                    <div className="pi-desc">
                      Confirmar si alguien trabaja en una empresa es lento, poco confiable y
                      depende de que quien atienda tenga la información correcta disponible
                      en ese momento.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-3">
                  <div className="pi-icon pi-b">⏳</div>
                  <div>
                    <div className="pi-title">Buenos postulantes que se van con la competencia</div>
                    <div className="pi-desc">
                      Un postulante solvente que tiene que reunir, escanear y enviar documentos
                      puede desistir o aceptar una oferta más rápida antes de que su proceso
                      termine.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-4">
                  <div className="pi-icon pi-p">📋</div>
                  <div>
                    <div className="pi-title">Gestión manual de carpetas que consume tiempo</div>
                    <div className="pi-desc">
                      El equipo comercial revisa manualmente decenas de carpetas por propiedad.
                      Tiempo que podría invertirse en cerrar más negocios se gasta validando
                      papeles.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div className="prob-card">
                <div className="prob-quote">
                  &quot;No necesitamos más documentos — necesitamos saber que
                  los documentos que recibimos son <span>reales.</span>
                  Eso es exactamente lo que Veris garantiza.&quot;
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.65 }}>
                  Veris no reemplaza el proceso de postulación. Lo hace más rápido,
                  más seguro y más simple para todos — para su empresa y para el postulante.
                </p>
                <div className="prob-data">
                  <div className="pd-item">
                    <div className="pd-num g">&lt;2s</div>
                    <div className="pd-label">para verificar solvencia con Veris</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">48h</div>
                    <div className="pd-label">tiempo promedio de validación manual en Chile</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num g">0</div>
                    <div className="pd-label">documentos en papel requeridos</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">0</div>
                    <div className="pd-label">posibilidad de documentos falsificados</div>
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
              El postulante demuestra su solvencia<br />
              en <em>menos de 2 segundos.</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto" }}>
              Sin carpetas, sin llamadas, sin esperas. La verificación ocurre automáticamente
              en el momento de la postulación — respaldada por la institución que emitió los datos.
            </p>
          </div>
          <div className="sol-steps">
            <div className="sol-step reveal reveal-delay-1">
              <div className="step-num sn-1">1</div>
              <h3>Postulante llega al proceso</h3>
              <p>Presencial en oficina o desde el portal. Sin formularios previos, sin preparación de documentos.</p>
            </div>
            <div className="sol-step reveal reveal-delay-2">
              <div className="step-num sn-2">2</div>
              <h3>Se muestra un QR de verificación</h3>
              <p>Su empresa define el criterio: renta mínima, empleo vigente. El QR aparece en pantalla o en el portal.</p>
            </div>
            <div className="sol-step reveal reveal-delay-3">
              <div className="step-num sn-3">3</div>
              <h3>El postulante escanea con Veris</h3>
              <p>Igual que escanear para pagar. Aprueba compartir solo lo que el proceso necesita.</p>
            </div>
            <div className="sol-step reveal reveal-delay-4">
              <div className="step-num sn-4">4</div>
              <h3>Su empresa recibe el resultado</h3>
              <p>"Cumple" o "no cumple" en menos de 2 segundos. Sin revisar nada manualmente.</p>
            </div>
            <div className="sol-step reveal" style={{ transitionDelay: ".5s" }}>
              <div className="step-num sn-5">5</div>
              <h3>El equipo avanza con quien califica</h3>
              <p>Solo los postulantes verificados llegan al equipo comercial. Sin tiempo perdido en perfiles que no califican.</p>
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
              ¿Dónde puede usar Veris<br />
              su empresa <em>hoy?</em>
            </h2>
            <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
              Desde el arriendo de una habitación hasta un proyecto en blanco —
              Veris funciona en cualquier proceso donde necesite conocer el perfil real
              del postulante.
            </p>
          </div>
          <div className="uc-cards">
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-icon">🏠</div>
              <h3>Verificación de solvencia para arriendos</h3>
              <p>Antes de mostrar una propiedad o avanzar con un postulante, su empresa confirma en segundos que tiene la renta necesaria y el empleo vigente. Sin liquidaciones en papel ni llamadas al empleador.</p>
              <span className="uc-tag">Arriendo residencial</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-icon">🏢</div>
              <h3>Arriendos de locales y oficinas</h3>
              <p>Para arriendos comerciales, el postulante acredita la actividad formal de su empresa — razón social, antigüedad, representante legal — directamente desde la app, sin trámites adicionales.</p>
              <span className="uc-tag">Comercial · Oficinas</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-icon">🏗️</div>
              <h3>Precalificación para proyectos en verde</h3>
              <p>Antes de que un interesado reserve un proyecto, su empresa verifica que tiene la capacidad financiera para el crédito hipotecario — sin pedirle que lleve documentos a la sala de ventas.</p>
              <span className="uc-tag">Venta · Proyectos</span>
            </div>
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-icon">💎</div>
              <h3>Acceso exclusivo a propiedades premium</h3>
              <p>Reserve las visitas a propiedades de alto valor solo para postulantes que acrediten el perfil requerido. Se elimina el tiempo perdido con personas que no tienen la capacidad de concretar.</p>
              <span className="uc-tag">Premium · Alta gama</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-icon">📱</div>
              <h3>Postulación 100% digital</h3>
              <p>El interesado completa todo el proceso desde su teléfono — sin visitar la oficina, sin imprimir nada, sin enviar archivos adjuntos. Mejor experiencia y menor carga para su equipo.</p>
              <span className="uc-tag">Digital · Online</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-icon">🤝</div>
              <h3>Verificación de identidad en contratos</h3>
              <p>Al firmar el contrato, el arrendatario acredita su identidad verificada desde la app — confirmando que quien firma es quien dice ser, sin revisar documentos físicos manualmente.</p>
              <span className="uc-tag">Contratos · Legal</span>
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
                <em>sus clientes y sus propietarios.</em>
              </h2>
            </div>
            <p className="s-sub">
              Veris no solo hace más eficiente la verificación — también cambia la percepción
              que los postulantes tienen de su empresa y los atrae activamente.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card bc-g reveal reveal-delay-1">
              <div className="benefit-icon bi-g">🛡️</div>
              <div className="benefit-title">Fraude documental eliminado</div>
              <div className="benefit-desc">
                Los datos vienen directamente del empleador del postulante — no de un
                documento que él mismo adjuntó. Cualquier alteración los invalida
                automáticamente. Imposible de falsificar.
              </div>
              <div className="benefit-hl bh-g">Cero liquidaciones adulteradas posibles</div>
            </div>
            <div className="benefit-card bc-b reveal reveal-delay-2">
              <div className="benefit-icon bi-b">⚡</div>
              <div className="benefit-title">Verificación en segundos, no en días</div>
              <div className="benefit-desc">
                Lo que hoy toma 48 horas de llamadas y revisiones manuales ocurre en
                menos de 2 segundos. Su equipo comercial solo trata con postulantes que
                ya califican.
              </div>
              <div className="benefit-hl bh-b">Más operaciones cerradas en menos tiempo</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-3">
              <div className="benefit-icon bi-m">🏆</div>
              <div className="benefit-title">Los mejores postulantes eligen a su empresa</div>
              <div className="benefit-desc">
                Un postulante solvente con opciones no perderá tiempo reuniendo documentos.
                Si su empresa ofrece verificación instantánea, tiene una ventaja real frente
                a la competencia que sigue pidiendo carpetas.
              </div>
              <div className="benefit-hl bh-m">Primera inmobiliaria sin papeles en Chile</div>
            </div>
            <div className="benefit-card bc-g reveal reveal-delay-1">
              <div className="benefit-icon bi-g">😊</div>
              <div className="benefit-title">El postulante protege su información</div>
              <div className="benefit-desc">
                En lugar de entregar copias de sus liquidaciones a un arrendador desconocido,
                el postulante comparte solo la confirmación de solvencia que el proceso
                requiere. Eso genera confianza y reduce el abandono.
              </div>
              <div className="benefit-hl bh-g">Mayor conversión en el proceso</div>
            </div>
            <div className="benefit-card bc-b reveal reveal-delay-2">
              <div className="benefit-icon bi-b">🏘️</div>
              <div className="benefit-title">Sus propietarios confían más en el proceso</div>
              <div className="benefit-desc">
                Un propietario que sabe que su inmobiliaria verifica la solvencia de forma
                objetiva y con respaldo real tiene más confianza en el arrendatario
                seleccionado — y en su empresa.
              </div>
              <div className="benefit-hl bh-b">Mayor fidelización de propietarios</div>
            </div>
            <div className="benefit-card bc-m reveal reveal-delay-3">
              <div className="benefit-icon bi-m">📊</div>
              <div className="benefit-title">Registro completo para auditoría</div>
              <div className="benefit-desc">
                Cada verificación queda registrada con fecha, hora y qué información se
                consultó. Su empresa tiene evidencia completa del proceso de selección —
                objetiva, trazable y lista para cualquier reclamación posterior.
              </div>
              <div className="benefit-hl bh-m">Trazabilidad y cumplimiento normativo</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VENTAJA COMPETITIVA ── */}
      <section className="section advantage" id="ventaja">
        <div className="s-inner adv-inner">
          <div className="reveal" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 2rem" }}>
            <div className="s-tag" style={{ color: "rgba(80,210,160,.85)" }}>Ventaja competitiva</div>
            <h2 className="s-title s-title-white">
              La inmobiliaria que usa Veris<br />
              <em style={{ color: "var(--magenta-s)" }}>atrae a los mejores postulantes.</em>
            </h2>
            <p className="s-sub s-sub-white" style={{ margin: "0 auto" }}>
              Veris no es solo una mejora operativa — cambia cómo los postulantes perciben
              su empresa y cómo los propietarios evalúan su servicio.
            </p>
          </div>
          <div className="adv-grid">
            <div className="adv-card reveal reveal-delay-1">
              <div className="adv-icon">🏆</div>
              <div className="adv-title">Los mejores eligen donde el proceso es simple</div>
              <div className="adv-desc">
                Un postulante solvente con opciones no va a perder tiempo reuniendo documentos.
                Si su empresa ofrece verificación instantánea y sin papeles, tiene una ventaja
                real frente a quien sigue pidiendo carpetas.
              </div>
            </div>
            <div className="adv-card reveal reveal-delay-2">
              <div className="adv-icon">🛡️</div>
              <div className="adv-title">Sus propietarios confían en su proceso de selección</div>
              <div className="adv-desc">
                Cuando un propietario sabe que la solvencia del arrendatario fue verificada
                de forma objetiva — no solo revisando papeles — tiene más confianza en
                el resultado y en su empresa.
              </div>
            </div>
            <div className="adv-card reveal reveal-delay-3">
              <div className="adv-icon">📈</div>
              <div className="adv-title">Más operaciones cerradas en menos tiempo</div>
              <div className="adv-desc">
                Cuando la verificación tarda segundos en lugar de días, su equipo puede
                gestionar más postulaciones simultáneas y cerrar operaciones antes que
                la competencia.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACIDAD ── */}
      <section className="section" style={{ background: "#fff" }} id="privacidad">
        <div className="s-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div className="reveal">
              <div className="s-tag">Privacidad y confianza</div>
              <h2 className="s-title">
                Su empresa obtiene lo que necesita.<br />
                <em>El postulante protege lo que es suyo.</em>
              </h2>
              <p className="s-sub">
                Veris no almacena los datos del postulante. La información viaja directamente
                desde su app a su empresa — Veris solo verifica la autenticidad.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: ".9rem", marginTop: "2rem" }}>
                {[
                  { icon: "📌", title: "Solo recibe lo que necesita", desc: "Si solo necesita saber si la renta supera tres veces el arriendo, el sistema responde eso — sin revelar el monto exacto ni datos innecesarios." },
                  { icon: "🔒", title: "Información imposible de alterar", desc: "Los datos vienen firmados por el empleador del postulante. Cualquier alteración los invalida automáticamente — su empresa no necesita validar la autenticidad." },
                  { icon: "📋", title: "Registro de cada verificación", desc: "Cada consulta queda registrada con fecha, hora y qué información se revisó — útil para auditorías internas y para demostrar que el proceso fue objetivo." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "1rem", padding: "1.1rem 1.25rem", border: "1px solid var(--border)", borderRadius: "12px", background: "#fff", transition: "border-color .2s" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: "var(--green-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: ".95rem" }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: ".875rem", fontWeight: 600, color: "var(--navy)", marginBottom: ".2rem" }}>{item.title}</div>
                      <div style={{ fontSize: ".78rem", color: "var(--muted)", lineHeight: 1.55 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: ".2s" }}>
              <div style={{ background: "var(--ice)", border: "1px solid var(--border)", borderRadius: 16, padding: "1.75rem", position: "relative", overflow: "hidden" }}>
                <div style={{ content: "''", position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--green), var(--blue-soft))" }}></div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.15rem", color: "var(--navy)", lineHeight: 1.55, fontStyle: "italic", marginBottom: "1.25rem" }}>
                  &quot;El postulante comparte solo lo que el proceso necesita — sin entregar
                  copias de sus liquidaciones a <span style={{ color: "var(--green)", fontStyle: "normal", fontWeight: 700 }}>personas que no conoce.</span>&quot;
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  El postulante ve en su app un historial de cada empresa que consultó su
                  información — cuándo y qué revisó. Un nivel de transparencia que genera
                  confianza en el proceso y reduce el abandono.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
                  {[
                    { num: "✓", label: "El postulante decide qué comparte", g: true },
                    { num: "✓", label: "Sus datos no quedan en servidores de Veris", g: true },
                    { num: "✓", label: "Historial completo de accesos en su app", g: true },
                    { num: "✓", label: "Revocación de acceso en cualquier momento", g: true },
                  ].map((item) => (
                    <div key={item.label} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 10, padding: ".9rem 1rem" }}>
                      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem", color: "var(--green)", lineHeight: 1 }}>{item.num}</div>
                      <div style={{ fontSize: ".72rem", color: "var(--muted)", marginTop: ".25rem", lineHeight: 1.4 }}>{item.label}</div>
                    </div>
                  ))}
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
          <div className="s-tag" style={{ display: "block", marginBottom: "1rem", color: "rgba(80,210,160,.85)" }}>
            Piloto sin costo
          </div>
          <h2>
            ¿Comenzamos con el proceso de verificación<br />
            <em>activo en una semana?</em>
          </h2>
          <p className="cta-sub">
            Defina el tipo de propiedad o proceso con su equipo, Veris configura los
            criterios de solvencia y el proceso está operativo en menos de una semana.
            Sin compromisos de escala, sin cambios en su infraestructura actual.
          </p>
          <div className="cta-btns">
            <DemoTrigger className="btn-primary" style={{ fontSize: "1rem", padding: ".9rem 2rem" }}>
              Agendar una demo →
            </DemoTrigger>
            <Link href="/" className="btn-outline">← Volver a Veris</Link>
          </div>
          <div className="cta-trust">
            <div className="ct-item"><span className="ct-icon">✓</span> Sin costo de implementación</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Sin cambios en su operación actual</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Configuración en menos de una semana</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Soporte técnico dedicado en el piloto</div>
          </div>
        </div>
      </section>
    </>
  );
}
