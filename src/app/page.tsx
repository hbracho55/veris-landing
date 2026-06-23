"use client";
import { useEffect } from "react";
import Link from "next/link";
import DemoTrigger from "./_components/DemoTrigger";

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1E3564;--navy-mid:#243A6A;--navy-deep:#111E3C;
  --blue:#4472C4;--blue-soft:#5B8FC4;--blue-pale:#EEF3FB;
  --magenta:#C0388A;--magenta-s:#D058A0;--magenta-pale:#FAE0F2;
  --green:#1D9E75;--green-pale:#E0F5EE;
  --white:#FFFFFF;--ice:#F0F4FB;--ice-mid:#D8E5F5;
  --text:#1A2B4A;--muted:#5A6A8A;--faint:#8A9BB8;--border:#D0DCF0;
  --grid: rgba(68,114,196,0.06);
}
html{scroll-behavior:smooth;font-size:16px}
body{font-family:'DM Sans',sans-serif;background:#F5F8FF;color:var(--text);line-height:1.6;overflow-x:hidden}

/* SCROLLBAR */
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--blue);border-radius:2px}

/* HERO */
.hero{background:var(--navy-deep);display:flex;align-items:flex-start;position:relative;overflow:hidden;padding-top:62px}
.hero-canvas{position:absolute;inset:0}
.hero-mesh{position:absolute;inset:0;background:
  radial-gradient(ellipse 80% 60% at 70% 20%, rgba(192,56,138,.18) 0%, transparent 60%),
  radial-gradient(ellipse 60% 50% at 20% 80%, rgba(68,114,196,.15) 0%, transparent 55%),
  radial-gradient(ellipse 40% 30% at 90% 80%, rgba(29,158,117,.08) 0%, transparent 50%)}
.hero-grid-lines{position:absolute;inset:0;background-image:
  linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
  background-size:72px 72px}
.hero-glow{position:absolute;top:15%;right:8%;width:clamp(200px,40vw,500px);height:clamp(200px,40vw,500px);background:radial-gradient(circle, rgba(192,56,138,.12) 0%, transparent 65%);border-radius:50%;animation:pulse-glow 4s ease-in-out infinite}
@keyframes pulse-glow{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.08);opacity:.7}}

.hero-inner{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,3rem);display:grid;grid-template-columns:1.1fr 1fr;gap:clamp(2rem,4vw,5rem);align-items:center}
.hero-eyebrow{display:inline-flex;align-items:center;gap:.5rem;margin-bottom:1.5rem}
.eyebrow-dot{width:5px;height:5px;background:var(--magenta);border-radius:50%;animation:blink 2s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.eyebrow-text{font-size:.72rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(192,56,138,.9)}
.hero h1{font-family:'DM Serif Display',serif;font-size:clamp(2.4rem,4.5vw,3.6rem);line-height:1.1;color:#fff;font-weight:400;margin-bottom:1.5rem;letter-spacing:-.02em}
.hero h1 .accent{color:var(--magenta-s);font-style:italic;font-family:'DM Serif Display',serif;font-weight:400}
.hero-sub{font-size:1.05rem;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:2.5rem;font-weight:300;max-width:500px}
.hero-sub strong{color:rgba(255,255,255,.85);font-weight:500}
.hero-ctas{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:3rem}
.btn-primary{background:var(--magenta);color:#fff;padding:.8rem 1.75rem;border-radius:8px;font-size:.95rem;font-weight:500;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;border:2px solid transparent;font-family:'DM Sans',sans-serif}
.btn-primary:hover{background:#A8307A;transform:translateY(-2px);box-shadow:0 8px 24px rgba(192,56,138,.35)}
.btn-outline{background:transparent;color:rgba(255,255,255,.8);padding:.8rem 1.5rem;border-radius:8px;font-size:.92rem;font-weight:400;text-decoration:none;transition:all .2s;border:1px solid rgba(255,255,255,.2);display:inline-flex;align-items:center;gap:.5rem;font-family:'DM Sans',sans-serif}
.btn-outline:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4);color:#fff}
.hero-proof{display:flex;align-items:center;gap:1.5rem}
.proof-divider{width:1px;height:24px;background:rgba(255,255,255,.12)}
.proof-item{font-size:.75rem;color:rgba(255,255,255,.35);letter-spacing:.06em;text-transform:uppercase}
.proof-item strong{color:rgba(255,255,255,.7);font-weight:600;display:block;font-size:1.1rem;letter-spacing:0;text-transform:none}

/* Hero right: trust card */
.hero-right{position:relative}
.trust-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(8px)}
.trust-card-top{padding:1.5rem 1.75rem;border-bottom:1px solid rgba(255,255,255,.07)}
.trust-card-label{font-size:.68rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.flow-item{display:flex;align-items:center;gap:1rem;margin-bottom:.9rem}
.flow-item:last-child{margin-bottom:0}
.flow-badge{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.95rem}
.fb-blue{background:rgba(68,114,196,.2);border:1px solid rgba(68,114,196,.35)}
.fb-magenta{background:rgba(192,56,138,.18);border:1px solid rgba(192,56,138,.3)}
.fb-navy{background:rgba(46,77,136,.3);border:1px solid rgba(46,77,136,.5)}
.fb-green{background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.3)}
.flow-text{flex:1}
.flow-title{font-size:.82rem;font-weight:500;color:rgba(255,255,255,.88);line-height:1.2}
.flow-sub{font-size:.72rem;color:rgba(255,255,255,.38);margin-top:.15rem}
.flow-check{width:18px;height:18px;border-radius:50%;background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.4);display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#5DD4A8}
.trust-card-stats{display:grid;grid-template-columns:1fr 1fr 1fr;padding:1.25rem 1.75rem;gap:0}
.stat-col{text-align:center;padding:.5rem 0}
.stat-col+.stat-col{border-left:1px solid rgba(255,255,255,.07)}
.stat-val{font-family:'DM Serif Display',serif;font-size:1.6rem;font-weight:700;color:#fff;line-height:1}
.stat-val.pink{color:var(--magenta-s)}
.stat-lab{font-size:.65rem;color:rgba(255,255,255,.35);letter-spacing:.06em;text-transform:uppercase;margin-top:.3rem}

/* PROOF STRIP */
.proof-strip{background:var(--navy-mid);border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);padding:1.25rem clamp(1.5rem,4vw,3rem)}
.proof-strip-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:2rem;flex-wrap:wrap}
.proof-strip-label{font-size:.68rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(255, 255, 255, 0.478);white-space:nowrap;flex-shrink:0}
.proof-strip-items{display:flex;align-items:center;gap:2rem;flex-wrap:wrap}
.ps-item{font-size:.82rem;font-weight:400;color:rgba(255, 255, 255, 0.491);padding:.35rem .9rem;border:1px solid rgba(255, 255, 255, 0.485);border-radius:100px;letter-spacing:.01em}

/* SECTIONS COMMON */
.section{padding:clamp(4rem,8vw,7rem) clamp(1.5rem,4vw,3rem)}
.s-inner{max-width:1200px;margin:0 auto}
.s-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.75rem}
.s-tag.blue{color:var(--blue)}
.s-tag.magenta{color:var(--magenta)}
.s-tag.green{color:var(--green)}
.s-title{font-family:'DM Serif Display',serif;font-size:clamp(1.7rem,3vw,2.4rem);font-weight:400;line-height:1.1;color:var(--navy);letter-spacing:-.02em;margin-bottom:.75rem}
.s-title em{font-family:'DM Serif Display',serif;font-weight:400;font-style:italic;color:var(--magenta)}
.s-sub{font-size:1rem;color:var(--muted);max-width:540px;line-height:1.75;font-weight:300}
.s-title-white{color:#fff}
.s-sub-white{color:rgba(255,255,255,.55)}

/* PROBLEM */
.problem{background:#fff}
.prob-grid{display:grid;grid-template-columns:1fr 1fr;gap:4.5rem;align-items:center}
.prob-items{display:flex;flex-direction:column;gap:.9rem;margin-top:2rem}
.prob-item{display:flex;gap:1rem;padding:1.1rem 1.25rem;border:1px solid var(--border);border-radius:12px;background:#fff;transition:border-color .2s,box-shadow .2s}
.prob-item:hover{border-color:var(--blue);box-shadow:0 4px 16px rgba(68,114,196,.08)}
.pi-icon{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.95rem}
.pi-r{background:#FEE8E8}.pi-a{background:#FEF4E0}.pi-b{background:var(--blue-pale)}.pi-p{background:#F0EEFE}
.pi-title{font-size:.875rem;font-weight:600;color:var(--navy);margin-bottom:.2rem}
.pi-desc{font-size:.78rem;color:var(--muted);line-height:1.55}
.prob-visual{position:relative}
.prob-card{background:var(--ice);border:1px solid var(--border);border-radius:16px;padding:1.75rem;overflow:hidden;position:relative}
.prob-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--magenta))}
.prob-quote{font-family:'DM Serif Display',serif;font-size:1.2rem;color:var(--navy);line-height:1.5;font-style:italic;margin-bottom:1.25rem}
.prob-quote span{color:var(--magenta);font-style:normal;font-family:'DM Serif Display',serif;font-weight:800;font-size:.95rem}
.prob-data{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.25rem}
.pd-item{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.9rem 1rem}
.pd-num{font-family:'DM Serif Display',serif;font-size:1.6rem;font-weight:800;color:var(--navy);line-height:1}
.pd-num.m{color:var(--magenta)}
.pd-label{font-size:.72rem;color:var(--muted);margin-top:.25rem;line-height:1.4}

/* SOLUTION */
.solution{background:var(--ice)}
.sol-header{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.sol-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;position:relative}
.sol-steps::before{content:'';position:absolute;top:28px;left:calc(12.5% + 16px);right:calc(12.5% + 16px);height:1px;background:linear-gradient(90deg,var(--blue),var(--magenta),var(--green));opacity:.3}
.sol-step{text-align:center;padding:1.5rem 1rem;background:#fff;border:1px solid var(--border);border-radius:14px;position:relative;z-index:1;transition:transform .2s,box-shadow .2s}
.sol-step:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(30,53,100,.1)}
.step-num{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.1rem;font-family:'DM Serif Display',serif;font-size:1.4rem;font-weight:800;color:#fff}
.sn-1{background:var(--blue)}.sn-2{background:var(--magenta)}.sn-3{background:var(--navy)}.sn-4{background:var(--green)}
.sol-step h3{font-family:'DM Serif Display',serif;font-size:.875rem;font-weight:700;color:var(--navy);margin-bottom:.5rem;letter-spacing:-.01em}
.sol-step p{font-size:.78rem;color:var(--muted);line-height:1.6}

/* 3 SEGMENTS */
.segments{background:var(--navy-deep);position:relative;overflow:hidden}
.segments::before{content:'';position:absolute;inset:0;background:
  radial-gradient(ellipse 70% 50% at 20% 50%, rgba(68,114,196,.1) 0%, transparent 60%),
  radial-gradient(ellipse 50% 50% at 80% 50%, rgba(192,56,138,.08) 0%, transparent 60%)}
.seg-header{text-align:center;margin-bottom:3.5rem;position:relative;z-index:1}
.seg-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;position:relative;z-index:1}

.seg-card{border-radius:20px;overflow:hidden;position:relative;cursor:pointer;transition:transform .25s,box-shadow .25s;text-decoration:none;display:block}
.seg-card:hover{transform:translateY(-6px)}
.seg-card-inner{padding:2rem 1.75rem 1.75rem;height:100%;display:flex;flex-direction:column;position:relative}
.seg-card.emisor .seg-card-inner{background:linear-gradient(145deg, rgba(68,114,196,.15) 0%, rgba(36,58,106,.8) 100%);border:1px solid rgba(68,114,196,.25)}
.seg-card.verificador .seg-card-inner{background:linear-gradient(145deg, rgba(192,56,138,.12) 0%, rgba(36,58,106,.8) 100%);border:1px solid rgba(192,56,138,.22)}
.seg-card.usuario .seg-card-inner{background:linear-gradient(145deg, rgba(29,158,117,.12) 0%, rgba(36,58,106,.8) 100%);border:1px solid rgba(29,158,117,.22)}
.seg-card:hover .seg-card-inner{box-shadow:0 20px 60px rgba(0,0,0,.3)}

.seg-icon-wrap{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem;font-size:1.3rem}
.emisor .seg-icon-wrap{background:rgba(68,114,196,.2);border:1px solid rgba(68,114,196,.3)}
.verificador .seg-icon-wrap{background:rgba(192,56,138,.18);border:1px solid rgba(192,56,138,.28)}
.usuario .seg-icon-wrap{background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.28)}

.seg-role{font-size:.95rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.35rem}
.emisor .seg-role{color:#90B8F8}
.verificador .seg-role{color:#E880CC}
.usuario .seg-role{color:#4DD8A8}

.seg-title{font-family:'DM Serif Display',serif;font-size:1.2rem;font-weight:800;color:#fff;margin-bottom:.75rem;line-height:1.15;letter-spacing:-.02em}
.seg-desc{font-size:.94rem;color:rgba(255,255,255,.55);line-height:1.7;font-weight:300;flex:1;margin-bottom:1.5rem}
.seg-bullets{list-style:none;margin-bottom:1.75rem;display:flex;flex-direction:column;gap:.5rem}
.seg-bullets li{font-size:.90rem;color:rgba(255,255,255,.45);padding-left:1.1rem;position:relative;line-height:1.5}
.seg-bullets li::before{content:'→';position:absolute;left:0;font-size:.7rem}
.emisor .seg-bullets li::before{color:rgba(68,114,196,.7)}
.verificador .seg-bullets li::before{color:rgba(192,56,138,.7)}
.usuario .seg-bullets li::before{color:rgba(29,158,117,.7)}

.seg-cta{display:inline-flex;align-items:center;gap:.6rem;font-size:.85rem;font-weight:700;padding:.75rem 1.4rem;border-radius:10px;transition:all .25s;text-decoration:none;font-family:'DM Sans',sans-serif;letter-spacing:.02em;box-shadow:0 2px 12px rgba(0,0,0,.2)}
.emisor .seg-cta{background:linear-gradient(135deg,rgba(68,114,196,.55),rgba(68,114,196,.35));color:#D0E6FF;border:1px solid rgba(68,114,196,.75);box-shadow:0 2px 16px rgba(68,114,196,.25)}
.emisor .seg-cta:hover{background:linear-gradient(135deg,rgba(68,114,196,.8),rgba(68,114,196,.6));color:#fff;border-color:#4472C4;box-shadow:0 4px 24px rgba(68,114,196,.45);transform:translateY(-1px)}
.verificador .seg-cta{background:linear-gradient(135deg,rgba(192,56,138,.52),rgba(192,56,138,.32));color:#FAC0E8;border:1px solid rgba(192,56,138,.72);box-shadow:0 2px 16px rgba(192,56,138,.25)}
.verificador .seg-cta:hover{background:linear-gradient(135deg,rgba(192,56,138,.78),rgba(192,56,138,.58));color:#fff;border-color:#C0388A;box-shadow:0 4px 24px rgba(192,56,138,.45);transform:translateY(-1px)}
.usuario .seg-cta{background:linear-gradient(135deg,rgba(29,158,117,.52),rgba(29,158,117,.32));color:#A0F0D8;border:1px solid rgba(29,158,117,.72);box-shadow:0 2px 16px rgba(29,158,117,.25)}
.usuario .seg-cta:hover{background:linear-gradient(135deg,rgba(29,158,117,.78),rgba(29,158,117,.58));color:#fff;border-color:#1D9E75;box-shadow:0 4px 24px rgba(29,158,117,.45);transform:translateY(-1px)}

.seg-glow{position:absolute;bottom:0;left:0;right:0;height:2px;opacity:0;transition:opacity .25s}
.emisor .seg-glow{background:linear-gradient(90deg, transparent, var(--blue), transparent)}
.verificador .seg-glow{background:linear-gradient(90deg, transparent, var(--magenta), transparent)}
.usuario .seg-glow{background:linear-gradient(90deg, transparent, var(--green), transparent)}
.seg-card:hover .seg-glow{opacity:1}

/* SECURITY */
.security{background:var(--navy-deep);border-top:1px solid rgba(255,255,255,.06);position:relative;overflow:hidden}
.security::after{content:'';position:absolute;top:-30%;right:-15%;width:700px;height:700px;background:radial-gradient(circle, rgba(192,56,138,.07) 0%, transparent 60%);border-radius:50%}
.sec-inner{position:relative;z-index:1}
.sec-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.sec-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem}
.sec-pillar{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:1.25rem;transition:border-color .2s}
.sec-pillar:hover{border-color:rgba(255,255,255,.15)}
.pillar-ico{font-size:1.2rem;margin-bottom:.75rem}
.pillar-name{font-family:'DM Serif Display',serif;font-size:.88rem;font-weight:700;color:#fff;margin-bottom:.35rem}
.pillar-desc{font-size:.75rem;color:rgba(255,255,255,.4);line-height:1.55}
.pillar-badge{display:inline-block;margin-top:.6rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .6rem;border-radius:100px}
.pb-blue{background:rgba(68,114,196,.15);color:rgba(68,114,196,.9)}
.pb-green{background:rgba(29,158,117,.15);color:rgba(29,158,117,.85)}
.pb-magenta{background:rgba(192,56,138,.15);color:rgba(192,56,138,.9)}
.pb-amber{background:rgba(180,140,40,.15);color:rgba(200,160,60,.9)}
.sec-right{position:relative}
.compliance-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;margin-bottom:1.5rem}
.compliance-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:1.25rem}
.compliance-items{display:flex;flex-direction:column;gap:.65rem}
.ci-item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:rgba(255,255,255,.03);border-radius:8px;border:1px solid rgba(255,255,255,.06)}
.ci-check{width:20px;height:20px;border-radius:50%;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.65rem;color:#5DD4A8}
.ci-text{font-size:.8rem;color:rgba(255,255,255,.55);flex:1}
.ci-tag{font-size:.65rem;font-weight:600;color:rgba(68,114,196,.7);letter-spacing:.04em}

/* USE CASES */
.usecases{background:#fff}
.uc-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:3rem}
.uc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
.uc-card{background:var(--ice);border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:all .2s;cursor:default}
.uc-card:hover{border-color:var(--blue);background:#fff;box-shadow:0 8px 24px rgba(68,114,196,.08);transform:translateY(-2px)}
.uc-num{font-family:'DM Serif Display',serif;font-size:2.2rem;font-weight:800;color:var(--ice-mid);line-height:1;margin-bottom:.75rem;letter-spacing:-.03em}
.uc-title{font-family:'DM Serif Display',serif;font-size:.9rem;font-weight:700;color:var(--navy);margin-bottom:.5rem;letter-spacing:-.01em}
.uc-desc{font-size:.78rem;color:var(--muted);line-height:1.6}
.uc-tag{display:inline-block;margin-top:.85rem;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .6rem;border-radius:100px;background:var(--blue-pale);color:var(--blue)}
.uc-tag.m{background:var(--magenta-pale);color:var(--magenta)}
.uc-tag.g{background:var(--green-pale);color:var(--green)}

/* CTA FINAL */
.cta-final{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,3rem)}
.cta-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 50%, rgba(192,56,138,.12) 0%, rgba(68,114,196,.08) 40%, transparent 70%)}
.cta-inner{position:relative;z-index:1;text-align:center;max-width:720px;margin:0 auto}
.cta-inner h2{font-family:'DM Serif Display',serif;font-size:clamp(1.9rem,3.5vw,2.8rem);font-weight:400;color:#fff;margin-bottom:1.1rem;line-height:1.1;letter-spacing:-.02em}
.cta-inner h2 em{font-family:'DM Serif Display',serif;font-weight:400;font-style:italic;color:var(--magenta-s)}
.cta-sub{font-size:1rem;color:rgba(255,255,255,.55);margin-bottom:2.5rem;font-weight:300;line-height:1.75}
.cta-btns{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.cta-trust{display:flex;justify-content:center;gap:2.5rem;flex-wrap:wrap}
.ct-item{display:flex;align-items:center;gap:.4rem;font-size:.75rem;color:rgba(255,255,255,.35)}
.ct-icon{color:var(--green);font-size:.8rem}


/* ANIMATIONS */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
.reveal.up{opacity:1;transform:translateY(0)}
.reveal-delay-1{transition-delay:.1s}
.reveal-delay-2{transition-delay:.2s}
.reveal-delay-3{transition-delay:.3s}
.reveal-delay-4{transition-delay:.4s}

/* ── TABLET (≤900px) ─────────────────────────── */
@media(max-width:900px){
  .prob-grid,.seg-cards,.sec-grid,.uc-header{grid-template-columns:1fr}
  .sec-right{display:none}
  .sol-steps,.uc-grid{grid-template-columns:1fr 1fr}
  .sec-pillars{grid-template-columns:1fr 1fr}
  .sec-grid{gap:3rem}
  .prob-grid{gap:2.5rem}
  .uc-header{gap:1.5rem;margin-bottom:2rem}
  .seg-cards{gap:1.25rem}
}

/* ── TABLET PEQUEÑO / MÓVIL (≤768px) ────────── */
@media(max-width:768px){
  .hero-inner{grid-template-columns:1fr;gap:2rem}
  .hero-right{display:block;width:100%}
  .hero-right>div{transform:none!important;border-radius:12px}
}

/* ── MOBILE (≤600px) ─────────────────────────── */
@media(max-width:600px){
  .sol-steps,.uc-grid,.sec-pillars,.seg-cards{grid-template-columns:1fr}
  .hero-ctas{flex-direction:column;align-items:stretch}
  .btn-primary,.btn-outline{justify-content:center;width:100%}
  .hero h1{font-size:clamp(2rem,8vw,2.6rem)}
  .hero-sub{font-size:.95rem}
  .hero-proof{gap:1rem;flex-wrap:wrap}
  .proof-divider{display:none}
  .proof-item{font-size:.7rem}
  .proof-strip-inner{flex-direction:column;align-items:flex-start;gap:.75rem}
  .proof-strip-items{gap:.5rem}
  .ps-item{font-size:.75rem;padding:.25rem .7rem}
  .seg-card-inner{padding:1.5rem 1.25rem 1.25rem}
  .seg-desc{font-size:.86rem}
  .seg-bullets li{font-size:.84rem}
  .sec-pillars{gap:.75rem}
  .uc-grid{gap:1rem}
  .uc-card{padding:1.25rem}
  .cta-btns{flex-direction:column;align-items:stretch}
  .cta-btns .btn-primary,.cta-btns .btn-outline{width:100%;justify-content:center}
  .cta-trust{gap:1rem}
  .sol-steps{gap:1rem}
  .section{padding:clamp(3rem,7vw,5rem) clamp(1rem,4vw,1.5rem)}
}

/* ── SMALL MOBILE (≤400px) ───────────────────── */
@media(max-width:400px){
  .hero h1{font-size:1.9rem}
  .s-title{font-size:1.5rem}
  .seg-role{font-size:.8rem;letter-spacing:.1em}
  .seg-title{font-size:1.05rem}
  .seg-cta{font-size:.8rem;padding:.65rem 1rem}
  .hero-eyebrow{margin-bottom:1rem}
  .hero-ctas{margin-bottom:2rem}
}
`;

export default function Home() {
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

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-canvas">
          <div className="hero-mesh"></div>
          <div className="hero-grid-lines"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <div className="eyebrow-dot"></div>
              <span className="eyebrow-text">Infrastructura de Interoperabilidad para Latinoamérica</span>
            </div>
            <h1>
              Verifica pruebas.<br />
              <span className="accent">No documentos.</span>
            </h1>
            <p className="hero-sub">
              Las organizaciones siguen tomando decisiones críticas basadas en{" "}
              <strong>documentos manipulables</strong>. Veris reemplaza el PDF por evidencia
              criptográfica — verificable en segundos, sin almacenar datos sensibles.
            </p>
            <div className="hero-ctas">
              <DemoTrigger className="btn-primary">Agendar una demo →</DemoTrigger>
            </div>
            <div className="hero-proof">
              <div className="proof-item"><strong>&lt; 2s</strong>tiempo de validación</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>25%</strong>ingresos para emisores</div>
              <div className="proof-divider"></div>
              <div className="proof-item"><strong>$0</strong>costo de datos</div>
            </div>
          </div>
          <div className="hero-right">
            <div style={{position:'relative',width:'100%',paddingBottom:'56.25%',borderRadius:'16px',overflow:'hidden',boxShadow:'0 8px 32px rgba(0,0,0,0.3)',transform:'scale(1.12)',transformOrigin:'center center'}}>
              <iframe
                src="https://www.youtube.com/embed/1b3VEPeidkk"
                title="Veris"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:'none'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="proof-strip">
        <div className="proof-strip-inner">
          <div className="proof-strip-label">Diseñado para</div>
          <div className="proof-strip-items">
            <div className="ps-item">Empleadores</div>
            <div className="ps-item">Instituciones Financieras</div>
            <div className="ps-item">Aseguradoras</div>
            <div className="ps-item">Inmobiliarias</div>
            <div className="ps-item">Instituciones de Salud</div>
            <div className="ps-item">Instituciones Educativas</div>
            <div className="ps-item">Gobierno</div>
          </div>
        </div>
      </div>

      {/* PROBLEMA */}
      <section className="section problem" id="problema">
        <div className="s-inner">
          <div className="prob-grid">
            <div className="reveal">
              <div className="s-tag magenta">El problema</div>
              <h2 className="s-title">
                Un PDF no es un dato.<br />Es una <em>imagen</em> de un dato.
              </h2>
              <p className="s-sub">
                Las organizaciones toman decisiones de millones de dólares sobre documentos que
                cualquier herramienta gratuita puede editar. El costo invisible de esa fricción
                erosiona tu operación, tu marca y tu exposición regulatoria.
              </p>
              <div className="prob-items">
                <div className="prob-item reveal reveal-delay-1">
                  <div className="pi-icon pi-r">⚠️</div>
                  <div className="pi-body">
                    <div className="pi-title">Fraude documental creciente</div>
                    <div className="pi-desc">
                      Los PDFs editables son el vector de fraude más común en solicitudes de
                      crédito, arriendo y seguros. Tu marca asume el costo reputacional.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-2">
                  <div className="pi-icon pi-a">📞</div>
                  <div className="pi-body">
                    <div className="pi-title">Costo operativo que no escala</div>
                    <div className="pi-desc">
                      Cada verificación manual — llamada, correo, validación — multiplica el costo
                      con la base de usuarios. Un modelo que limita el crecimiento.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-3">
                  <div className="pi-icon pi-b">⚖️</div>
                  <div className="pi-body">
                    <div className="pi-title">Riesgo regulatorio inminente</div>
                    <div className="pi-desc">
                      La Ley de Protección de Datos exige portabilidad y consentimiento explícito.
                      El modelo documental actual no cumple — y las multas son reales.
                    </div>
                  </div>
                </div>
                <div className="prob-item reveal reveal-delay-4">
                  <div className="pi-icon pi-p">📉</div>
                  <div className="pi-body">
                    <div className="pi-title">Experiencia que daña la retención</div>
                    <div className="pi-desc">
                      En mercados donde la velocidad define la preferencia, esperar 48 horas para
                      validar una liquidación es una ventana abierta para la competencia.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prob-visual reveal" style={{ transitionDelay: ".2s" }}>
              <div className="prob-card">
                <div className="prob-quote">
                  &quot;El problema no son los documentos.<br />
                  Fueron diseñados para <span>personas</span>,<br />
                  no para validación automática.&quot;
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.65 }}>
                  Veris no reemplaza tus documentos — los convierte en datos con evidencia
                  criptográfica verificable en tiempo real, directamente desde la fuente emisora.
                </p>
                <div className="prob-data">
                  <div className="pd-item">
                    <div className="pd-num m">+80%</div>
                    <div className="pd-label">de solicitudes de crédito incluyen algún documento manipulado</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">48h</div>
                    <div className="pd-label">tiempo promedio de verificación manual en Chile</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num">$0</div>
                    <div className="pd-label">costo de datos almacenados en Veris</div>
                  </div>
                  <div className="pd-item">
                    <div className="pd-num m">&lt;2s</div>
                    <div className="pd-label">validación con credencial verificable Veris</div>
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
            <div className="s-tag blue">La solución</div>
            <h2 className="s-title">
              Verificación directa desde la fuente.<br />Sin PDFs. Sin correos. Sin espera.
            </h2>
            <p className="s-sub" style={{ margin: "0 auto" }}>
              Veris se integra a tu arquitectura actual mediante APIs estándar y transforma los
              datos que ya emites en credenciales criptográficamente verificables.
            </p>
          </div>
          <div className="sol-steps">
            <div className="sol-step reveal reveal-delay-1">
              <div className="step-num sn-1">1</div>
              <h3>Emisor emite</h3>
              <p>
                Tu plataforma genera la credencial como siempre. El Veris Adapter la intercepta sin
                modificar tu arquitectura core.
              </p>
            </div>
            <div className="sol-step reveal reveal-delay-2">
              <div className="step-num sn-2">2</div>
              <h3>Veris firma</h3>
              <p>
                La credencial se firma criptográficamente con estándar W3C. Sin almacenamiento de
                datos personales. Zero Data Liability.
              </p>
            </div>
            <div className="sol-step reveal reveal-delay-3">
              <div className="step-num sn-3">3</div>
              <h3>Usuario controla</h3>
              <p>
                El trabajador recibe su credencial en el Wallet Veris. Decide con quién compartir,
                cuándo y para qué. Consentimiento explícito.
              </p>
            </div>
            <div className="sol-step reveal reveal-delay-4">
              <div className="step-num sn-4">4</div>
              <h3>Verificador valida</h3>
              <p>
                Banco, aseguradora o empresa comprueba la autenticidad en segundos contra la
                fuente original. Sin intermediarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ECOSISTEMA */}
      <section className="section segments" id="ecosistema">
        <div className="s-inner">
          <div className="seg-header reveal">
            <div className="s-tag magenta" style={{ color: "rgba(192,56,138,.85)" }}>
              Ecosistema Veris
            </div>
            <h2 className="s-title s-title-white">
              Una infraestructura.<br />Tres roles.{" "}
              <em style={{ color: "var(--magenta-s)" }}>Un estándar.</em>
            </h2>
            <p className="s-sub s-sub-white" style={{ margin: "0 auto", maxWidth: "560px" }}>
              Veris crea valor en cada nodo del ecosistema de confianza digital. Cada actor
              resuelve un problema distinto con la misma infraestructura.
            </p>
          </div>
          <div className="seg-cards">
            {/* EMISOR */}
            <Link href="/issuers" className="seg-card emisor reveal reveal-delay-1">
              <div className="seg-card-inner">
                <div className="seg-icon-wrap">🏢</div>
                <div className="seg-role">Emisores</div>
                <div className="seg-title">Plataformas de RR.HH., Clínicas, Educativas, Gobierno </div>
                <div className="seg-desc">
                  Conviertes lo que ya emites en activos digitales verificables. Sin cambiar tu
                  arquitectura. Con un nuevo canal de ingresos.
                </div>
                <ul className="seg-bullets">
                  <li>Pago del 25% por cada validación exitosa</li>
                  <li>Eliminación de soporte por verificaciones</li>
                  <li>Protección de marca ante fraude documental</li>
                  <li>Cumplimiento Ley de Protección de datos sin cambios en plataformas</li>
                </ul>
                <span className="seg-cta">Ver solución para Emisores →</span>
                <div className="seg-glow"></div>
              </div>
            </Link>

            {/* VERIFICADOR */}
            <a href="/verifiers" className="seg-card verificador reveal reveal-delay-2">
              <div className="seg-card-inner">
                <div className="seg-icon-wrap">🔍</div>
                <div className="seg-role">Verificadores</div>
                <div className="seg-title">Instituciones Financieras, Salud, Inmobiliarias, Aseguradoras</div>
                <div className="seg-desc">
                  Eliminas el fraude y reduces el tiempo de verificación de días a segundos. Sin
                  contact center, sin procesos manuales.
                </div>
                <ul className="seg-bullets">
                  <li>Validación criptográfica en &lt; 2 segundos</li>
                  <li>Reducción del fraude documental a cero</li>
                  <li>Menor costo por operación de crédito o seguro</li>
                  <li>Experiencia superior para tus solicitantes</li>
                </ul>
                <span className="seg-cta">Ver solución para Verificadores →</span>
                <div className="seg-glow"></div>
              </div>
            </a>

            {/* USUARIO */}
            <a href="/users" className="seg-card usuario reveal reveal-delay-3">
              <div className="seg-card-inner">
                <div className="seg-icon-wrap">👤</div>
                <div className="seg-role">Usuarios</div>
                <div className="seg-title">Ciudadanos dueños de sus datos</div>
                <div className="seg-desc">
                  Tus datos te pertenecen. Guárdalos en tu Billetera Digital, compártelos cuando
                  quieras para realizar tus trámites en cualquier momento.
                </div>
                <ul className="seg-bullets">
                  <li>Billetera digital con tus credenciales verificables</li>
                  <li>Portabilidad total entre instituciones</li>
                  <li>Consentimiento explícito en cada uso</li>
                  <li>Sin dependencia del empleador para validar</li>
                </ul>
                <span className="seg-cta">Ver solución para Usuarios →</span>
                <div className="seg-glow"></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section className="section security" id="seguridad">
        <div className="s-inner sec-inner">
          <div className="sec-grid">
            <div className="reveal">
              <div
                className="s-tag"
                style={{
                  color: "rgba(192,56,138,.85)",
                  fontSize: ".68rem",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: ".75rem",
                }}
              >
                Seguridad por diseño
              </div>
              <h2 className="s-title s-title-white">
                Construida para equipos que{" "}
                <em style={{ color: "var(--magenta-s)" }}>no pueden equivocarse.</em>
              </h2>
              <p className="s-sub s-sub-white">
                Cada decisión de arquitectura en Veris fue tomada pensando en los equipos de
                seguridad y compliance que deben aprobar la integración antes de que nadie más lo
                vea.
              </p>
              <div className="sec-pillars">
                <div className="sec-pillar">
                  <div className="pillar-ico">🔐</div>
                  <div className="pillar-name">Confianza Cero</div>
                  <div className="pillar-desc">
                    Ninguna entidad se asume confiable. Autenticación y autorización independiente
                    en cada operación.
                  </div>
                  <span className="pillar-badge pb-blue">Arquitectura</span>
                </div>
                <div className="sec-pillar">
                  <div className="pillar-ico">🛡️</div>
                  <div className="pillar-name">Privacidad por Diseño</div>
                  <div className="pillar-desc">
                    La privacidad no es una capa adicional — está incorporada desde el diseño
                    original de cada componente.
                  </div>
                  <span className="pillar-badge pb-green">Por defecto</span>
                </div>
                <div className="sec-pillar">
                  <div className="pillar-ico">🗂️</div>
                  <div className="pillar-name">Responsabilidad Cero por Datos</div>
                  <div className="pillar-desc">
                    Los datos personales no se almacenan en Veris. Sin responsabilidad sobre
                    brechas de datos sensibles.
                  </div>
                  <span className="pillar-badge pb-magenta">Compliance</span>
                </div>
                <div className="sec-pillar">
                  <div className="pillar-ico">📋</div>
                  <div className="pillar-name">Consentimiento explícito</div>
                  <div className="pillar-desc">
                    Trazabilidad completa de quién accedió a qué y cuándo. Auditoría lista para
                    reguladores.
                  </div>
                  <span className="pillar-badge pb-amber">Auditoría</span>
                </div>
              </div>
            </div>
            <div className="sec-right reveal" style={{ transitionDelay: ".2s" }}>
              <div className="compliance-box">
                <div className="compliance-title">Estándares y normativas cubiertas</div>
                <div className="compliance-items">
                  <div className="ci-item">
                    <div className="ci-check">✓</div>
                    <div className="ci-text">W3C Verifiable Credentials</div>
                    <div className="ci-tag">Internacional</div>
                  </div>
                  <div className="ci-item">
                    <div className="ci-check">✓</div>
                    <div className="ci-text">OpenID Connect</div>
                    <div className="ci-tag">Identidad</div>
                  </div>
                  <div className="ci-item">
                    <div className="ci-check">✓</div>
                    <div className="ci-text">Ley 21.096 — Protección de Datos</div>
                    <div className="ci-tag">Chile</div>
                  </div>
                  <div className="ci-item">
                    <div className="ci-check">✓</div>
                    <div className="ci-text">Ley Fintech</div>
                    <div className="ci-tag">Financiero</div>
                  </div>
                  <div className="ci-item">
                    <div className="ci-check">✓</div>
                    <div className="ci-text">ISO 27001 aligned</div>
                    <div className="ci-tag">Seguridad</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                }}
              >
                <div className="compliance-title" style={{ marginBottom: ".75rem" }}>
                  Integración técnica
                </div>
                <p
                  style={{
                    fontSize: ".8rem",
                    color: "rgba(255,255,255,.45)",
                    lineHeight: 1.65,
                    marginBottom: ".75rem",
                  }}
                >
                  API REST + Webhooks estándar. Sin acceso a tus sistemas internos. Sin migración
                  de datos. Entorno Sandbox incluido.
                </p>
                <div style={{ fontSize: ".78rem", color: "rgba(68,114,196,.8)", fontWeight: 500 }}>
                  2–5 días de integración estimada →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="section usecases" id="casos">
        <div className="s-inner">
          <div className="uc-header reveal">
            <div>
              <div className="s-tag magenta">Casos de uso</div>
              <h2 className="s-title">
                Todo lo que ya emites puede volverse{" "}
                <em>imposible de falsificar.</em>
              </h2>
            </div>
            <p className="s-sub">
              RR.HH., Banca, Salud, Educación, Seguros y Gobierno. Si existe un documento que
              alguien necesita verificar, Veris puede convertirlo en una credencial confiable.
            </p>
          </div>
          <div className="uc-grid">
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-num">01</div>
              <div className="uc-title">Liquidaciones de sueldo</div>
              <div className="uc-desc">
                El caso de mayor volumen. Cada liquidación se convierte en credencial de renta
                verificable para créditos, arriendos y seguros.
              </div>
              <span className="uc-tag">RR.HH. · Banca</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-num">02</div>
              <div className="uc-title">Certificados laborales</div>
              <div className="uc-desc">
                Antigüedad, cargo y jornada verificados en segundos. Sin que el empleador responda
                llamadas ni reenvíe correos.
              </div>
              <span className="uc-tag">RR.HH. · Seguros</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-num">03</div>
              <div className="uc-title">Solicitudes de crédito</div>
              <div className="uc-desc">
                Caso práctico: banco recibe credencial verificable, valida en &lt;2s y aprueba sin
                llamar al empleador. Conversión mejorada, fraude eliminado.
              </div>
              <span className="uc-tag m">Banca · Fintech</span>
            </div>
            <div className="uc-card reveal reveal-delay-1">
              <div className="uc-num">04</div>
              <div className="uc-title">Historial de cotizaciones</div>
              <div className="uc-desc">
                Continuidad previsional verificable para trámites AFP, FONASA y Cajas de
                Compensación directamente desde la fuente emisora.
              </div>
              <span className="uc-tag g">Gobierno · Salud</span>
            </div>
            <div className="uc-card reveal reveal-delay-2">
              <div className="uc-num">05</div>
              <div className="uc-title">Títulos y certificaciones</div>
              <div className="uc-desc">
                Universidades e instituciones emiten credenciales académicas verificables.
                Empleadores confirman sin llamar al registro civil.
              </div>
              <span className="uc-tag g">Educación</span>
            </div>
            <div className="uc-card reveal reveal-delay-3">
              <div className="uc-num">06</div>
              <div className="uc-title">Pólizas y siniestros</div>
              <div className="uc-desc">
                Aseguradoras verifican renta, empleo y datos de salud en el momento del siniestro.
                Menos fraude. Liquidación más rápida.
              </div>
              <span className="uc-tag m">Seguros</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final" id="demo">
        <div className="cta-mesh"></div>
        <div className="cta-inner reveal">
          <div
            className="s-tag magenta"
            style={{ display: "block", marginBottom: "1rem", color: "rgba(192,56,138,.85)" }}
          >
            Programa piloto gratuito
          </div>
          <h2>
            Construyamos juntos la infraestructura de{" "}
            <em>confianza digital</em> para Latinoamérica.
          </h2>
          <p className="cta-sub">
            30 días de piloto. 500 credenciales. Entorno Sandbox incluido. Costo de implementación
            cero. Tu equipo técnico integra, prueba y valida antes de cualquier compromiso
            comercial.
          </p>
          <div className="cta-btns">
            <DemoTrigger className="btn-primary" style={{ fontSize: "1rem", padding: ".9rem 2rem" }}>
              Agendar una demo →
            </DemoTrigger>
          </div>
          <div className="cta-trust">
            <div className="ct-item"><span className="ct-icon">✓</span> Sin costo de implementación</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Sin cambios en tu arquitectura</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Soporte técnico dedicado</div>
            <div className="ct-item"><span className="ct-icon">✓</span> Sandbox desde el día 1</div>
          </div>
        </div>
      </section>

    </>
  );
}
