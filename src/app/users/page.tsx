"use client";
import { useEffect, useState } from "react";

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1E3564;--navy-mid:#243A6A;--navy-deep:#111E3C;
  --blue:#4472C4;--blue-s:#5B8FC4;--blue-pale:#EEF3FB;--blue-mid:#D8E5F5;
  --magenta:#C0388A;--magenta-s:#D058A0;--magenta-pale:#FAE0F2;
  --green:#1D9E75;--green-pale:#E3F7F0;
  --violet:#6C4AB0;--violet-pale:#F0EEFE;
  --white:#FFFFFF;--ice:#F4F7FD;
  --text:#1A2B4A;--muted:#5A6A8A;--faint:#9AAAC0;--border:#DDE6F4;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:var(--white);color:var(--text);line-height:1.6;overflow-x:hidden}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:var(--magenta);border-radius:2px}
a{text-decoration:none}img,svg{display:block;max-width:100%}
.wrap{max-width:1160px;margin:0 auto;padding:0 clamp(1.25rem,5vw,3rem)}
.section{padding:clamp(5rem,10vw,8rem) 0}
.r{opacity:0;transform:translateY(24px);transition:opacity .65s ease,transform .65s ease}
.r.in{opacity:1;transform:none}
.r1{transition-delay:.07s}.r2{transition-delay:.16s}.r3{transition-delay:.26s}.r4{transition-delay:.36s}

/* HERO */
.hero{background:var(--navy-deep);display:flex;align-items:flex-start;position:relative;overflow:hidden;padding-top:100px;isolation:isolate}
.hero__canvas{position:absolute;inset:0;pointer-events:none;z-index:0}
.hero__mesh{position:absolute;inset:0;background:radial-gradient(ellipse 70% 55% at 72% 28%,rgba(192,56,138,.17) 0%,transparent 62%),radial-gradient(ellipse 50% 40% at 12% 78%,rgba(68,114,196,.12) 0%,transparent 58%),radial-gradient(ellipse 35% 30% at 50% 5%,rgba(108,74,176,.1) 0%,transparent 55%)}
.hero__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:64px 64px}
.hero__inner{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,3rem);display:grid;grid-template-columns:1.05fr 1fr;gap:5rem;align-items:center;width:100%}
.hero__pill{display:inline-flex;align-items:center;gap:.5rem;background:rgba(192,56,138,.13);border:1px solid rgba(192,56,138,.28);color:rgba(220,100,180,.9);font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .95rem;border-radius:100px;margin-bottom:1.5rem}
.hero__pill-dot{width:5px;height:5px;background:rgba(220,100,180,.9);border-radius:50%;animation:bdot 2.2s ease-in-out infinite}
@keyframes bdot{0%,100%{opacity:1}50%{opacity:.2}}
.hero__h1{font-family:'DM Serif Display',serif;font-size:clamp(2.5rem,5vw,3.8rem);line-height:1.03;color:#fff;font-weight:400;letter-spacing:-.02em;margin-bottom:1.4rem}
.hero__h1 em{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;color:var(--magenta-s)}
.hero__sub{font-size:1.05rem;color:rgba(255,255,255,.58);line-height:1.8;margin-bottom:2.5rem;font-weight:300;max-width:480px}
.hero__sub strong{color:rgba(255,255,255,.85);font-weight:500}
.hero__btns{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.btn-main{background:var(--magenta);color:#fff;padding:.85rem 1.85rem;border-radius:10px;font-size:.97rem;font-weight:600;font-family:'DM Sans',sans-serif;transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;border:none;cursor:pointer}
.btn-main:hover{background:#A8307A;transform:translateY(-2px);box-shadow:0 10px 28px rgba(192,56,138,.4)}
.btn-soft{background:rgba(255,255,255,.07);color:rgba(255,255,255,.75);padding:.85rem 1.5rem;border-radius:10px;font-size:.92rem;font-family:'DM Sans',sans-serif;border:1px solid rgba(255,255,255,.15);transition:all .2s;display:inline-flex;align-items:center;gap:.5rem}
.btn-soft:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.35);color:#fff}
.hero__trust{display:flex;flex-wrap:wrap;gap:1rem}
.trust-chip{display:inline-flex;align-items:center;gap:.4rem;font-size:.74rem;color:rgba(255, 255, 255, 0.689)}
.trust-chip__ico{width:16px;height:16px;border-radius:50%;background:rgba(29,158,117,.2);border:1px solid rgba(29,158,117,.35);display:flex;align-items:center;justify-content:center;font-size:.55rem;color:#5DD4A8}

/* WALLET DEVICE */
.hero__right{position:relative}
.id-device{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:24px;overflow:hidden;backdrop-filter:blur(12px);box-shadow:0 36px 88px rgba(0,0,0,.4)}
.id-device__bar{padding:1.1rem 1.5rem;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between}
.id-device__name{font-family:'DM Serif Display',serif;font-weight:400;font-size:.95rem;color:#fff}
.id-device__sub{font-size:.68rem;color:rgba(255,255,255,.32);margin-top:.12rem}
.id-device__badge{background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.3);color:#5DD4A8;font-size:.63rem;font-weight:700;padding:.22rem .6rem;border-radius:100px;letter-spacing:.05em;text-transform:uppercase}
.id-cats{display:flex;gap:.5rem;padding:.85rem 1.5rem;border-bottom:1px solid rgba(255,255,255,.07);overflow-x:auto;scrollbar-width:none}
.id-cats::-webkit-scrollbar{display:none}
.id-cat{font-size:.72rem;font-weight:600;padding:.3rem .75rem;border-radius:100px;cursor:pointer;white-space:nowrap;border:1px solid transparent;transition:all .2s;color:rgba(255,255,255,.32);background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.08)}
.id-cat:hover{color:rgba(255,255,255,.65);border-color:rgba(255,255,255,.18)}
.id-cat.active{color:#fff}
.id-cat.active.cat-work{background:rgba(192,56,138,.28);border-color:rgba(192,56,138,.4);color:#E880C0}
.id-cat.active.cat-edu{background:rgba(68,114,196,.28);border-color:rgba(68,114,196,.4);color:#90B8F0}
.id-cat.active.cat-health{background:rgba(29,158,117,.22);border-color:rgba(29,158,117,.36);color:#5DD4A8}
.id-cat.active.cat-id{background:rgba(108,74,176,.25);border-color:rgba(108,74,176,.4);color:#C0A8F0}
.id-device__body{padding:1.1rem 1.5rem;min-height:190px}
.cred-panel{animation:credIn .3s ease}
@keyframes credIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.cred__head{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:.9rem}
.cred__type{font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.ct-work{color:rgba(208,88,160,.9)}.ct-edu{color:rgba(100,148,220,.85)}.ct-health{color:rgba(50,175,120,.85)}.ct-id{color:rgba(168,138,240,.9)}
.cred__verified{display:flex;align-items:center;gap:.35rem;font-size:.65rem;color:#5DD4A8;font-weight:600}
.cred__verified::before{content:'';width:6px;height:6px;background:#1D9E75;border-radius:50%;animation:vpulse 2s ease-in-out infinite}
@keyframes vpulse{0%,100%{opacity:1}50%{opacity:.3}}
.cred__rows{display:flex;flex-direction:column;gap:.55rem}
.cred__row{display:flex;align-items:baseline;justify-content:space-between;gap:.5rem}
.cred__lbl{font-size:.7rem;color:rgba(255,255,255,.33);white-space:nowrap}
.cred__val{font-size:.82rem;font-weight:500;color:rgba(255,255,255,.88);text-align:right}
.cred__val--big{font-family:'DM Serif Display',serif;font-size:1.1rem;font-weight:400;color:#fff}
.cred__seal{margin-top:.9rem;padding-top:.75rem;border-top:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:.45rem}
.seal-ico{width:18px;height:18px;border-radius:50%;background:rgba(68,114,196,.2);border:1px solid rgba(68,114,196,.32);display:flex;align-items:center;justify-content:center;font-size:.56rem;color:#90B8F0;flex-shrink:0}
.seal-txt{font-size:.66rem;color:rgba(255,255,255,.32)}.seal-txt strong{color:rgba(255,255,255,.58);font-weight:500}
.id-device__foot{padding:.9rem 1.5rem;border-top:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:space-between}
.foot-meta{font-size:.68rem;color:rgba(255,255,255,.28)}
.foot-share{font-size:.74rem;font-weight:600;color:var(--magenta-s);cursor:pointer}

/* STRIP */
.strip{background:var(--navy-mid);padding:.9rem 0;border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05)}
.strip__inner{max-width:1160px;margin:0 auto;padding:0 clamp(1.25rem,5vw,3rem);display:flex;align-items:center;gap:2rem;flex-wrap:wrap}
.strip__lbl{font-size:.63rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255, 255, 255, 0.589);white-space:nowrap}
.strip__pills{display:flex;gap:.75rem;flex-wrap:wrap}
.strip__pill{font-size:.77rem;color:rgba(255, 255, 255, 0.645);padding:.28rem .8rem;border:1px solid rgba(255, 255, 255, 0.578);border-radius:100px}

/* CONTEXTS */
.contexts{background:var(--ice)}
.ctx-header{text-align:center;max-width:640px;margin:0 auto 3.5rem}
.big-title{font-family:'DM Serif Display',serif;font-size:clamp(1.8rem,3.2vw,2.55rem);font-weight:400;line-height:1.08;color:var(--navy);letter-spacing:-.02em;margin-bottom:.8rem}
.big-title em{font-family:'DM Serif Display',serif;font-weight:400;font-style:italic;color:var(--magenta)}
.big-title--white{color:#fff}.big-title--white em{color:var(--magenta-s)}
.lead{font-size:1rem;color:var(--muted);line-height:1.78;font-weight:300}
.lead--white{color:rgba(255,255,255,.52)}
.ctx-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}
.ctx-card{background:#fff;border:1px solid var(--border);border-radius:20px;padding:1.85rem;position:relative;overflow:hidden;transition:transform .22s,box-shadow .22s,border-color .22s}
.ctx-card:hover{transform:translateY(-4px);box-shadow:0 18px 48px rgba(30,53,100,.1);border-color:transparent}
.ctx-card__bar{position:absolute;top:0;left:0;right:0;height:3.5px;transform:scaleX(0);transform-origin:left;transition:transform .3s ease}
.ctx-card:hover .ctx-card__bar{transform:scaleX(1)}
.bar-work{background:linear-gradient(90deg,var(--magenta),var(--magenta-s))}
.bar-edu{background:linear-gradient(90deg,var(--blue),var(--blue-s))}
.bar-health{background:linear-gradient(90deg,var(--green),#38C890)}
.bar-id{background:linear-gradient(90deg,var(--violet),#9B7FE0)}
.ctx-card__top{display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.25rem}
.ctx-icon{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0}
.ci-work{background:var(--magenta-pale)}.ci-edu{background:var(--blue-pale)}.ci-health{background:var(--green-pale)}.ci-id{background:var(--violet-pale)}
.ctx-label{font-size:.75rem;font-weight:800;letter-spacing:.11em;text-transform:uppercase;margin-bottom:.3rem}
.cl-work{color:var(--magenta)}.cl-edu{color:var(--blue)}.cl-health{color:var(--green)}.cl-id{color:var(--violet)}
.ctx-card h3{font-family:'DM Serif Display',serif;font-size:1.05rem;font-weight:400;color:var(--navy);letter-spacing:-.01em;line-height:1.2}
.ctx-card p{font-size:.93rem;color:var(--muted);line-height:1.68;margin-bottom:1.25rem}
.ctx-examples{display:flex;flex-direction:column;gap:.5rem}
.ctx-ex{display:flex;align-items:flex-start;gap:.65rem;font-size:.88rem;color:var(--muted);line-height:1.5}
.ctx-ex__dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;margin-top:.45rem}
.dot-work{background:var(--magenta)}.dot-edu{background:var(--blue)}.dot-health{background:var(--green)}.dot-id{background:var(--violet)}
.ctx-card__cta{margin-top:1.35rem;padding-top:1.1rem;border-top:1px solid var(--border);font-size:.8rem;font-weight:500}
.cta-work{color:var(--magenta)}.cta-edu{color:var(--blue)}.cta-health{color:var(--green)}.cta-id{color:var(--violet)}

/* HOW */
.how{background:#fff}
.how__grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.sec-tag{font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.8rem;display:block}
.sec-tag--blue{color:var(--blue)}.sec-tag--magenta{color:rgba(192,56,138,.85)}.sec-tag--green{color:var(--green)}
.steps-list{display:flex;flex-direction:column;gap:0;margin-top:2.25rem}
.step{display:flex;gap:1.25rem;padding:1.4rem 0;border-bottom:1px solid var(--border)}
.step:last-child{border-bottom:none}
.step__num{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-family:'DM Serif Display',serif;font-size:1.05rem;font-weight:400;color:#fff;flex-shrink:0}
.sn-1{background:var(--magenta)}.sn-2{background:var(--blue)}.sn-3{background:var(--green)}.sn-4{background:var(--violet)}
.step h4{font-family:'DM Serif Display',serif;font-size:1.03rem;font-weight:400;color:var(--navy);margin-bottom:.35rem;letter-spacing:-.01em}
.step p{font-size:.91rem;color:var(--muted);line-height:1.62}
.phone{max-width:280px;margin:0 auto;background:var(--navy-deep);border-radius:30px;padding:1.5rem;border:1px solid rgba(255,255,255,.1);box-shadow:0 40px 80px rgba(17,30,60,.5);position:relative;overflow:hidden}
.phone::before{content:'';position:absolute;top:-30%;right:-20%;width:200px;height:200px;background:radial-gradient(circle,rgba(192,56,138,.12) 0%,transparent 65%);border-radius:50%}
.phone__notch{width:55px;height:5px;background:rgba(255,255,255,.12);border-radius:3px;margin:0 auto 1.25rem}
.phone__hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.1rem}
.phone__logo{font-family:'DM Serif Display',serif;font-weight:400;font-size:.9rem;color:#fff}
.phone__ok{background:rgba(29,158,117,.18);border:1px solid rgba(29,158,117,.3);color:#5DD4A8;font-size:.6rem;font-weight:700;padding:.18rem .5rem;border-radius:100px}
.phone__cred{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:13px;padding:.9rem 1rem;margin-bottom:.65rem}
.phone__cred-type{font-size:.6rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;margin-bottom:.4rem}
.pct-1{color:rgba(208,88,160,.85)}.pct-2{color:rgba(100,148,220,.8)}.pct-3{color:rgba(50,175,120,.8)}.pct-4{color:rgba(168,138,240,.85)}
.phone__cred-val{font-family:'DM Serif Display',serif;font-size:1rem;font-weight:400;color:#fff}
.phone__cred-meta{font-size:.66rem;color:rgba(255,255,255,.33);margin-top:.15rem}
.phone__cred-status{margin-top:.6rem;padding-top:.5rem;border-top:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:.35rem;font-size:.62rem;color:#5DD4A8;font-weight:600}
.phone__cred-status::before{content:'';width:5px;height:5px;background:#1D9E75;border-radius:50%;display:inline-block}
.phone__share{width:100%;background:var(--magenta);color:#fff;border-radius:10px;padding:.65rem;font-family:'DM Serif Display',serif;font-size:.8rem;text-align:center;margin-top:.85rem;display:block}

/* PRIVACY */
.priv{background:var(--navy-deep);position:relative;overflow:hidden}
.priv::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 55% 50% at 88% 30%,rgba(192,56,138,.09) 0%,transparent 60%),radial-gradient(ellipse 50% 45% at 8% 72%,rgba(68,114,196,.08) 0%,transparent 60%)}
.priv__inner{position:relative;z-index:1}
.priv__grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
.priv-cards{display:flex;flex-direction:column;gap:.85rem;margin-top:2rem}
.pc{display:flex;gap:1rem;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:1.1rem 1.2rem;transition:border-color .2s}
.pc:hover{border-color:rgba(255,255,255,.17)}
.pc__ico{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.95rem;flex-shrink:0}
.pi-m{background:rgba(192,56,138,.16);border:1px solid rgba(192,56,138,.25)}
.pi-b{background:rgba(68,114,196,.16);border:1px solid rgba(68,114,196,.25)}
.pi-g{background:rgba(29,158,117,.16);border:1px solid rgba(29,158,117,.25)}
.pi-v{background:rgba(108,74,176,.16);border:1px solid rgba(108,74,176,.25)}
.pc h4{font-size:.97rem;font-weight:600;color:#fff;margin-bottom:.28rem}
.pc p{font-size:.87rem;color:rgba(255,255,255,.4);line-height:1.58}
.rights-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:1.75rem}
.rights-title{font-size:.73rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255, 255, 255, 0.485);margin-bottom:1.2rem}
.rights-list{display:flex;flex-direction:column;gap:.65rem}
.right{display:flex;gap:.75rem;align-items:flex-start;padding:.72rem .9rem;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:10px}
.right__chk{width:20px;height:20px;border-radius:50%;background:rgba(29,158,117,.15);border:1px solid rgba(29,158,117,.3);display:flex;align-items:center;justify-content:center;font-size:.6rem;color:#5DD4A8;flex-shrink:0;margin-top:.08rem}
.right h5{font-size:.9rem;font-weight:600;color:rgba(255,255,255,.82);margin-bottom:.15rem}
.right p{font-size:.83rem;color:rgba(255,255,255,.36);line-height:1.5}

/* FAQ */
.faq{background:var(--ice)}
.faq__head{text-align:center;max-width:560px;margin:0 auto 3rem}
.faq-list{max-width:740px;margin:0 auto;display:flex;flex-direction:column;gap:.7rem}
.faq-item{background:#fff;border:1px solid var(--border);border-radius:14px;overflow:hidden}
.faq-q{width:100%;text-align:left;background:none;border:none;display:flex;align-items:center;justify-content:space-between;padding:1.1rem 1.4rem;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:.91rem;font-weight:600;color:var(--navy);gap:1rem;transition:background .2s}
.faq-q:hover{background:var(--ice)}
.faq-arr{width:24px;height:24px;border-radius:50%;background:var(--blue-pale);color:var(--blue);display:flex;align-items:center;justify-content:center;font-size:.72rem;flex-shrink:0;transition:transform .25s,background .2s}
.faq-open .faq-arr{transform:rotate(180deg);background:var(--magenta-pale);color:var(--magenta)}
.faq-a{overflow:hidden;transition:max-height .32s ease;font-size:.84rem;color:var(--muted);line-height:1.72;padding:0 1.4rem;max-height:0}
.faq-open .faq-a{max-height:220px;padding:0 1.4rem 1.1rem}

/* CTA */
.cta-s{background:var(--navy-deep);position:relative;overflow:hidden;padding:clamp(5.5rem,12vw,10rem) 0}
.cta-s__orb{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 80% 60% at 50% 55%,rgba(192,56,138,.14) 0%,rgba(68,114,196,.07) 45%,transparent 70%)}
.cta-s__inner{position:relative;z-index:1;text-align:center;max-width:680px;margin:0 auto;padding:0 clamp(1.25rem,5vw,3rem)}
.cta-s__eyebrow{display:inline-flex;align-items:center;gap:.45rem;font-size:.68rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(192,56,138,.85);margin-bottom:1.1rem}
.cta-s h2{font-family:'DM Serif Display',serif;font-size:clamp(2rem,3.8vw,3rem);font-weight:400;color:#fff;margin-bottom:1.1rem;line-height:1.07;letter-spacing:-.02em}
.cta-s h2 em{font-family:'DM Serif Display',serif;font-weight:400;font-style:italic;color:var(--magenta-s)}
.cta-s p{font-size:1rem;color:rgba(255,255,255,.5);margin-bottom:2.5rem;font-weight:300;line-height:1.8}
.cta-s__btns{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.25rem}
.cta-s__reassure{display:flex;justify-content:center;gap:2rem;flex-wrap:wrap}
.cta-s__reassure span{display:flex;align-items:center;gap:.4rem;font-size:.74rem;color:rgba(255,255,255,.3)}
.cta-s__reassure span::before{content:'✓';color:var(--green)}

/* RESPONSIVE */
@media(max-width:980px){
  .hero__inner{grid-template-columns:1fr}
  .hero__right{display:block;width:100%}
  .ctx-grid{grid-template-columns:1fr}
  .how__grid{grid-template-columns:1fr}.phone{display:none}
  .priv__grid{grid-template-columns:1fr}
}
@media(max-width:640px){
  .hero__h1{font-size:2.3rem}
  .ctx-grid{grid-template-columns:1fr}
  .cta-s__btns{flex-direction:column;align-items:stretch}
  .cta-s__btns .btn-main,.cta-s__btns .btn-soft{justify-content:center}
}
@media(max-width:480px){
  .hero__right{display:none}
}
`;

const CREDS = [
  {
    cat: "💼 Laboral", cls: "cat-work",
    type: "Liquidación · Ene 2026", typeCls: "ct-work",
    rows: [
      { lbl: "Sueldo líquido", val: "$1.850.000", big: true },
      { lbl: "Empleador", val: "Empresa S.A." },
      { lbl: "Contrato", val: "Indefinido" },
      { lbl: "Antigüedad", val: "2 años 10 meses" },
    ],
    seal: "Emitida por Empresa S.A.",
  },
  {
    cat: "🎓 Educación", cls: "cat-edu",
    type: "Título Profesional · 2022", typeCls: "ct-edu",
    rows: [
      { lbl: "Título", val: "Ing. Civil", big: true },
      { lbl: "Universidad", val: "U. de Santiago" },
      { lbl: "Año de egreso", val: "2022" },
      { lbl: "Acreditación", val: "Acreditado ✓" },
    ],
    seal: "Emitida por U. de Santiago",
  },
  {
    cat: "🏥 Salud", cls: "cat-health",
    type: "Receta médica · Ene 2025", typeCls: "ct-health",
    rows: [
      { lbl: "Medicamento", val: "Amoxicilina", big: true },
      { lbl: "Médico", val: "Dr. R. Soto" },
      { lbl: "Clínica", val: "Clínica Las Condes" },
      { lbl: "Válida hasta", val: "31 / 01 / 2025" },
    ],
    seal: "Emitida por Dr. R. Soto",
  },
  {
    cat: "🪪 Identidad", cls: "cat-id",
    type: "Identidad verificada · 2025", typeCls: "ct-id",
    rows: [
      { lbl: "Nombre", val: "Carlos M.", big: true },
      { lbl: "RUT", val: "12.345.678-9" },
      { lbl: "Nacionalidad", val: "Chilena" },
      { lbl: "Estado", val: "Verificado ✓" },
    ],
    seal: "Emitida por Registro Civil",
  },
];

const FAQS = [
  { q: "¿Veris es gratis para mí?", a: "Sí, completamente gratuita para personas. Sin costo, sin suscripción y sin publicidad. Las empresas, hospitales y universidades que verifican tus credenciales pagan por el servicio — tú no." },
  { q: "¿Mis documentos de salud son realmente privados?", a: "Absolutamente. Tus credenciales de salud no están almacenadas en ningún servidor de Veris. Existen sólo en tu dispositivo. Nadie puede acceder a ellas sin que tú lo autorices. Ni Veris. Ni la clínica que las emitió." },
  { q: "¿Qué pasa si la institución que necesito no usa Veris todavía?", a: "Puedes invitarlos desde la app con un clic. Mientras tanto Veris funciona con todas las instituciones ya integradas. La red crece constantemente y tu Wallet ya guarda lo que tienes — cuando la institución se sume, podrán verificarte al instante." },
  { q: "¿Pueden falsificar mis credenciales?", a: "No. Cada credencial lleva una firma criptográfica vinculada a quien la emitió. Cualquier modificación invalida esa firma automáticamente. El verificador lo detecta en el instante. Es técnicamente imposible alterar una credencial Veris." },
  { q: "¿Qué pasa si pierdo el teléfono?", a: "Nadie puede usar tu Veris Wallet sin tu autenticación biométrica. Puedes recuperar el acceso a tu cuenta Veris desde otro teléfono, tus credenciales las continuarás recibiendo como antes." },
  { q: "¿Puedo compartir solo una parte de mi información?", a: "Sí, y eso es exactamente el punto. Tú eliges qué credencial compartir, con quién y para qué. La farmacia no ve tu sueldo. El banco no ve tu historial médico. Control total, siempre." },
];

export default function UsersPage() {
  const [activeCred, setActiveCred] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
      }),
      { threshold: 0.07, rootMargin: "0px 0px -20px 0px" }
    );
    document.querySelectorAll(".r").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const cred = CREDS[activeCred];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero__canvas">
          <div className="hero__mesh"></div>
          <div className="hero__grid"></div>
        </div>
        <div className="hero__inner">
          <div className="hero__left r">
            <div className="hero__pill">
              <div className="hero__pill-dot"></div>
              Tu identidad digital
            </div>
            <h1 className="hero__h1">
              Demuestra quién eres.<br />
              <em>Sin papel. Sin fraude.</em>
            </h1>
            <p className="hero__sub">
              Tus datos —laborales, académicos, de salud o de identidad— te pertenecen. Veris los
              convierte en credenciales digitales que{" "}
              <strong>ningún tercero puede falsificar</strong> y que tú compartes con quien
              quieras, cuando quieras, en segundos.
            </p>
            <div className="hero__btns">
              <a href="#descargar" className="btn-main">Descargar gratis →</a>
              <a href="#usos" className="btn-soft">Ver para qué sirve</a>
            </div>
            <div className="hero__trust">
              <div className="trust-chip"><div className="trust-chip__ico">✓</div>Gratuito para personas</div>
              <div className="trust-chip"><div className="trust-chip__ico">✓</div>Sin almacenar tus datos</div>
              <div className="trust-chip"><div className="trust-chip__ico">✓</div>Tú decides quién ve qué</div>
              <div className="trust-chip"><div className="trust-chip__ico">✓</div>100% verificable</div>
            </div>
          </div>

          <div className="hero__right r r2">
            <div className="id-device">
              <div className="id-device__bar">
                <div>
                  <div className="id-device__name">Mi Identidad Digital</div>
                  <div className="id-device__sub">Credenciales verificadas · 4 categorías</div>
                </div>
                <div className="id-device__badge">Activo</div>
              </div>
              <div className="id-cats">
                {CREDS.map((c, i) => (
                  <div
                    key={i}
                    className={`id-cat ${c.cls}${activeCred === i ? " active" : ""}`}
                    onClick={() => setActiveCred(i)}
                  >
                    {c.cat}
                  </div>
                ))}
              </div>
              <div className="id-device__body">
                <div className="cred-panel" key={activeCred}>
                  <div className="cred__head">
                    <div className={`cred__type ${cred.typeCls}`}>{cred.type}</div>
                    <div className="cred__verified">Verificada</div>
                  </div>
                  <div className="cred__rows">
                    {cred.rows.map((r, i) => (
                      <div className="cred__row" key={i}>
                        <span className="cred__lbl">{r.lbl}</span>
                        <span className={`cred__val${r.big ? " cred__val--big" : ""}`}>{r.val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="cred__seal">
                    <div className="seal-ico">🔐</div>
                    <div className="seal-txt">{cred.seal} · <strong>Firma W3C · Inmutable</strong></div>
                  </div>
                </div>
              </div>
              <div className="id-device__foot">
                <div className="foot-meta">Actualizado hace 1 hora</div>
                <div className="foot-share">Compartir esta credencial →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <div className="strip__inner">
          <div className="strip__lbl">Sirve para</div>
          <div className="strip__pills">
            {["Pedir un crédito","Arrendar","Buscar trabajo","Retirar medicamentos","Validar tu título","AFP · FONASA","Exámenes médicos","Postular a becas","Certificar antecedentes"].map((p) => (
              <span className="strip__pill" key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* PARA QUÉ SIRVE */}
      <section className="section contexts" id="usos">
        <div className="wrap">
          <div className="ctx-header r">
            <h2 className="big-title">Todo lo que necesitas probar<br />sobre ti mismo, <em>sin papel.</em></h2>
            <p className="lead" style={{ maxWidth: "580px", margin: "0 auto" }}>
              No importa el contexto — trabajo, estudios, salud o identidad. Veris convierte
              cualquier documento oficial en una credencial digital que cualquier institución
              puede verificar al instante.
            </p>
          </div>
          <div className="ctx-grid">
            <div className="ctx-card r r1">
              <div className="ctx-card__bar bar-work"></div>
              <div className="ctx-card__top">
                <div className="ctx-icon ci-work">💼</div>
                <div><div className="ctx-label cl-work">Vida laboral</div><h3>Acredita tu situación de trabajo ante cualquier institución</h3></div>
              </div>
              <p>Ya sea para un crédito, un arriendo o un nuevo empleo, necesitas demostrar que trabajas, cuánto ganas y por cuánto tiempo. Con Veris lo haces en segundos — sin pedir papeles a tu empleador, sin esperas, sin PDFs que se pueden falsificar.</p>
              <div className="ctx-examples">
                <div className="ctx-ex"><div className="ctx-ex__dot dot-work"></div><span>Liquidaciones de sueldo para banco o inmobiliaria</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-work"></div><span>Certificado laboral con cargo, jornada y antigüedad</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-work"></div><span>Historial de cotizaciones AFP y previsión de salud</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-work"></div><span>Comprobante de renta para arrendar una propiedad</span></div>
              </div>
              <div className="ctx-card__cta cta-work">Ver credenciales laborales →</div>
            </div>

            <div className="ctx-card r r2">
              <div className="ctx-card__bar bar-edu"></div>
              <div className="ctx-card__top">
                <div className="ctx-icon ci-edu">🎓</div>
                <div><div className="ctx-label cl-edu">Educación y formación</div><h3>Tu historial académico, verificable donde lo necesites</h3></div>
              </div>
              <p>Títulos, certificados de cursos, acreditaciones y constancias de matrícula. Las instituciones educativas que usan Veris emiten credenciales que cualquier empleador o entidad puede verificar en tiempo real — sin llamar al registro académico.</p>
              <div className="ctx-examples">
                <div className="ctx-ex"><div className="ctx-ex__dot dot-edu"></div><span>Título profesional verificable ante empleadores</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-edu"></div><span>Certificado de alumno regular para becas y beneficios</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-edu"></div><span>Diplomas de cursos y programas de formación</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-edu"></div><span>Constancias de egreso para convalidaciones</span></div>
              </div>
              <div className="ctx-card__cta cta-edu">Ver credenciales académicas →</div>
            </div>

            <div className="ctx-card r r3">
              <div className="ctx-card__bar bar-health"></div>
              <div className="ctx-card__top">
                <div className="ctx-icon ci-health">🏥</div>
                <div><div className="ctx-label cl-health">Salud y antecedentes médicos</div><h3>Tus documentos de salud y seguros siempre contigo</h3></div>
              </div>
              <p>Recetas médicas, resultados de exámenes, vacunas o licencias — documentos que hoy se pierden o se falsifican. Con Veris, el médico o la farmacia verifica en segundos que el documento es auténtico y vigente, sin llamar a nadie.</p>
              <div className="ctx-examples">
                <div className="ctx-ex"><div className="ctx-ex__dot dot-health"></div><span>Recetas médicas verificables en farmacias y clínicas</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-health"></div><span>Resultados de exámenes de laboratorio autenticados</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-health"></div><span>Carnets de vacunación digitales reconocidos</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-health"></div><span>Licencias médicas para ISAPRE o empleador</span></div>
              </div>
              <div className="ctx-card__cta cta-health">Ver credenciales de salud →</div>
            </div>

            <div className="ctx-card r r4">
              <div className="ctx-card__bar bar-id"></div>
              <div className="ctx-card__top">
                <div className="ctx-icon ci-id">🪪</div>
                <div><div className="ctx-label cl-id">Identidad y antecedentes</div><h3>Verifica quién eres, donde quieras, en segundos</h3></div>
              </div>
              <p>Demostrar tu identidad, tu domicilio o que no tienes antecedentes penales son trámites que hoy exigen filas y días de espera. Veris digitaliza ese proceso: presentas tu credencial, la contraparte la verifica al instante.</p>
              <div className="ctx-examples">
                <div className="ctx-ex"><div className="ctx-ex__dot dot-id"></div><span>Certificado de antecedentes para postulaciones laborales</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-id"></div><span>Verificación de identidad para contratos y notarías</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-id"></div><span>Certificado de domicilio para trámites oficiales</span></div>
                <div className="ctx-ex"><div className="ctx-ex__dot dot-id"></div><span>Acreditación de nacionalidad para beneficios estatales</span></div>
              </div>
              <div className="ctx-card__cta cta-id">Ver credenciales de identidad →</div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="section how" id="como-funciona">
        <div className="wrap">
          <div className="how__grid">
            <div className="r">
              <span className="sec-tag sec-tag--blue">Cómo funciona</span>
              <h2 className="big-title">Tan simple como<br /><em>mostrar el teléfono.</em></h2>
              <p className="lead" style={{ maxWidth: "400px", marginBottom: 0 }}>
                No necesitas entender criptografía. Solo descarga la app y tus credenciales están
                ahí, listas para usar cuando las necesites.
              </p>
              <div className="steps-list">
                <div className="step r r1"><div className="step__num sn-1">1</div><div><h4>Descargas la app, gratis</h4><p>Disponible para iPhone y Android. Creas tu cuenta en menos de 2 minutos. Sin tarjeta, sin suscripción.</p></div></div>
                <div className="step r r2"><div className="step__num sn-2">2</div><div><h4>Tus credenciales llegan automáticamente</h4><p>Cuando tu empleador, universidad, médico o institución emite algo en Veris, aparece en tu Wallet al instante.</p></div></div>
                <div className="step r r3"><div className="step__num sn-3">3</div><div><h4>Compartes solo lo que necesitas</h4><p>La farmacia no ve tu sueldo. El banco no ve tu historial médico. Tú controlas qué compartir y con quién.</p></div></div>
                <div className="step r r4"><div className="step__num sn-4">4</div><div><h4>La institución verifica en segundos</h4><p>Sin llamadas. Sin esperas. La contraparte obtiene confirmación criptográfica de que el dato es real y actual.</p></div></div>
              </div>
            </div>
            <div className="r r2">
              <div className="phone">
                <div className="phone__notch"></div>
                <div className="phone__hdr"><div className="phone__logo">Veris</div><div className="phone__ok">Todo al día ✓</div></div>
                {[
                  { cls: "pct-1", type: "💼 Liquidación · Dic 2024", val: "$1.850.000", meta: "Empresa S.A. · Sueldo líquido" },
                  { cls: "pct-2", type: "🎓 Título Profesional · 2022", val: "Ing. Civil Industrial", meta: "U. de Santiago · Acreditado" },
                  { cls: "pct-3", type: "🏥 Receta médica · Ene 2025", val: "Amoxicilina 500mg", meta: "Dr. R. Soto · Clínica Las Condes" },
                  { cls: "pct-4", type: "🪪 Identidad · 2025", val: "Carlos M. · 12.345.678-9", meta: "Registro Civil · Sin antecedentes" },
                ].map((c, i) => (
                  <div className="phone__cred" key={i}>
                    <div className={`phone__cred-type ${c.cls}`}>{c.type}</div>
                    <div className="phone__cred-val">{c.val}</div>
                    <div className="phone__cred-meta">{c.meta}</div>
                    <div className="phone__cred-status">Verificada criptográficamente</div>
                  </div>
                ))}
                <div className="phone__share">Compartir credencial seleccionada →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACIDAD */}
      <section className="section priv" id="privacidad">
        <div className="wrap priv__inner">
          <div className="priv__grid">
            <div className="r">
              <span className="sec-tag sec-tag--magenta">Tu privacidad, primero</span>
              <h2 className="big-title big-title--white">Tus datos son tuyos.<br /><em>No nuestros.</em></h2>
              <p className="lead lead--white">
                Veris fue diseñada desde el principio para que jamás acumulemos tu información.
                Lo que guardas en tu Wallet vive en tu dispositivo — no en nuestros servidores.
              </p>
              <div className="priv-cards">
                <div className="pc r r1"><div className="pc__ico pi-m">🔐</div><div><h4>Solo tú decides quién ve qué</h4><p>Cada acceso requiere tu autorización explícita, para esa institución y ese propósito. No hay acceso permanente.</p></div></div>
                <div className="pc r r2"><div className="pc__ico pi-g">🗂️</div><div><h4>No almacenamos tus datos</h4><p>Tus credenciales existen solo en tu Wallet y en la firma criptográfica de quien las emitió. Veris no guarda nada.</p></div></div>
                <div className="pc r r3"><div className="pc__ico pi-b">🚫</div><div><h4>Revocas el acceso cuando quieras</h4><p>¿Cambiaste de idea? Con un toque dejas de compartir. Quien la tenía deja de poder verla de inmediato.</p></div></div>
                <div className="pc r r4"><div className="pc__ico pi-v">📋</div><div><h4>Ves quién accedió y cuándo</h4><p>Historial completo de todos los accesos a tu información. Transparencia total, sin sorpresas.</p></div></div>
              </div>
            </div>
            <div className="r r2">
              <div className="rights-box">
                <div className="rights-title">Tus derechos como titular de datos</div>
                <div className="rights-list">
                  <div className="right"><div className="right__chk">✓</div><div><h5>Portabilidad total</h5><p>Tus credenciales te siguen a donde vayas — cambias de trabajo, de médico o de universidad y tu historial es siempre tuyo.</p></div></div>
                  <div className="right"><div className="right__chk">✓</div><div><h5>Consentimiento explícito</h5><p>Nadie accede a tu información sin que tú lo autorices, en ese momento preciso, para ese uso específico.</p></div></div>
                  <div className="right"><div className="right__chk">✓</div><div><h5>Derecho a revocar</h5><p>Retiras el acceso cuando quieras, sin pedir permiso a nadie, directamente desde tu app.</p></div></div>
                  <div className="right"><div className="right__chk">✓</div><div><h5>Minimización de datos</h5><p>El empleador ve tu título académico; la farmacia ve tu receta. Nada más que lo necesario para cada situación.</p></div></div>
                  <div className="right"><div className="right__chk">✓</div><div><h5>Amparo Ley 21.096</h5><p>Veris cumple con la Ley de Protección de Datos de Chile. Tus derechos como titular están garantizados por ley.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq" id="preguntas">
        <div className="wrap">
          <div className="faq__head r">
            <h2 className="big-title">Lo que todo el mundo <em>pregunta.</em></h2>
            <p className="lead">Si te queda alguna duda, escríbenos. Del otro lado hay personas reales.</p>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`r r${(i % 3) + 1}`}>
                <div className={`faq-item${openFaq === i ? " faq-open" : ""}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {f.q}
                    <div className="faq-arr">▾</div>
                  </button>
                  <div className="faq-a">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-s" id="descargar">
        <div className="cta-s__orb"></div>
        <div className="cta-s__inner r">
          <div className="cta-s__eyebrow">
            <span style={{ width: "5px", height: "5px", background: "rgba(192,56,138,.85)", borderRadius: "50%", display: "inline-block" }}></span>
            Descarga gratuita
          </div>
          <h2>Tu identidad digital,<br /><em>siempre en tu bolsillo.</em></h2>
          <p>
            Millones de trámites que antes tomaban días ahora se resuelven en segundos. Descarga
            Veris — gratis, sin publicidad, sin vender tus datos — y lleva tus credenciales
            contigo desde hoy.
          </p>
          <div className="cta-s__btns">
            <a href="#" className="btn-main" style={{ fontSize: "1rem", padding: ".9rem 2.1rem" }}>⬇ Descargar para iPhone</a>
            <a href="#" className="btn-soft" style={{ fontSize: "1rem", padding: ".9rem 2.1rem" }}>⬇ Descargar para Android</a>
          </div>
          <div className="cta-s__reassure">
            <span>100% gratuita</span>
            <span>Sin publicidad</span>
            <span>Sin vender tus datos</span>
            <span>Tú decides siempre</span>
          </div>
        </div>
      </section>
    </>
  );
}
