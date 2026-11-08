/** Estilos compartidos por el índice de documentación y cada guía. */
export const docsStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1E3564;--navy-deep:#111E3C;
  --blue:#4472C4;--blue-pale:#EEF3FB;--blue-mid:#D8E5F5;
  --magenta:#C0388A;
  --green:#1D9E75;
  --ink:#24313F;--ink-2:#4A5B7A;--ink-3:#8A9BB8;
  --paper:#fff;--ground:#F7F9FC;--rule:#E3EAF3;
}
body{background:var(--ground);color:var(--ink);font-family:'DM Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased}

.dk-wrap{max-width:1160px;margin:0 auto;padding:0 1.5rem 6rem}
.dk-top{padding:2.25rem 0 1.5rem;border-bottom:1px solid var(--rule);margin-bottom:2.5rem}
.dk-back{display:inline-flex;align-items:center;gap:.4rem;font-size:.84rem;font-weight:600;color:var(--blue);text-decoration:none}
.dk-back:hover{text-decoration:underline}
.dk-eyebrow{font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--magenta);margin-bottom:.7rem}
.dk-h1{font-family:'DM Serif Display',Georgia,serif;font-size:clamp(2rem,4.5vw,2.9rem);line-height:1.08;color:var(--navy);text-wrap:balance}
.dk-lede{font-size:1.05rem;line-height:1.65;color:var(--ink-2);max-width:62ch;margin-top:.9rem}

/* ── índice ── */
.dk-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.25rem;margin-top:2.5rem}
.dk-card{display:block;background:var(--paper);border:1px solid var(--rule);border-radius:14px;padding:1.6rem;text-decoration:none;transition:border-color .2s,box-shadow .2s,transform .2s}
.dk-card:hover{border-color:var(--blue);box-shadow:0 12px 36px -22px rgba(30,53,100,.45);transform:translateY(-2px)}
.dk-card-kind{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);margin-bottom:.7rem}
.dk-card h2{font-family:'DM Sans',sans-serif;font-size:1.22rem;font-weight:700;color:var(--navy);margin-bottom:.55rem;line-height:1.25}
.dk-card p{font-size:.92rem;line-height:1.6;color:var(--ink-2)}
.dk-card-go{display:inline-block;margin-top:1rem;font-size:.84rem;font-weight:700;color:var(--blue)}

.dk-soon{margin-top:3rem;background:var(--paper);border:1px dashed var(--blue-mid);border-radius:14px;padding:1.5rem}
.dk-soon h3{font-size:1rem;font-weight:700;color:var(--navy);margin-bottom:.8rem}
.dk-soon ul{list-style:none;display:grid;gap:.5rem}
.dk-soon li{font-size:.9rem;color:var(--ink-2);padding-left:1.1rem;position:relative}
.dk-soon li::before{content:'·';position:absolute;left:.3rem;color:var(--ink-3);font-weight:700}
.dk-soon p{margin-top:1rem;font-size:.86rem;color:var(--ink-3)}
.dk-soon a{color:var(--blue);font-weight:600}

/* ── documento ── */
.dk-doc{display:grid;grid-template-columns:230px minmax(0,1fr);gap:3rem;align-items:start}
.dk-side{position:sticky;top:2rem}
.dk-side-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);margin-bottom:.85rem}
.dk-side a{display:block;font-size:.86rem;line-height:1.45;color:var(--ink-2);text-decoration:none;padding:.4rem 0 .4rem .8rem;border-left:2px solid var(--rule)}
.dk-side a:hover{color:var(--blue);border-left-color:var(--blue)}

/* ── prosa ── */
.dk-prose{min-width:0;font-size:1rem;line-height:1.72;color:var(--ink)}
.dk-prose > *:first-child{margin-top:0}
.dk-prose h1{font-family:'DM Serif Display',Georgia,serif;font-size:clamp(1.9rem,4vw,2.6rem);line-height:1.1;color:var(--navy);margin:0 0 1.2rem;text-wrap:balance}
.dk-prose h2{font-size:1.5rem;font-weight:700;color:var(--navy);margin:3rem 0 1rem;padding-bottom:.5rem;border-bottom:1px solid var(--rule);scroll-margin-top:1.5rem}
.dk-prose h3{font-size:1.12rem;font-weight:700;color:var(--navy);margin:2rem 0 .7rem;scroll-margin-top:1.5rem}
.dk-prose h4{font-size:.98rem;font-weight:700;color:var(--ink);margin:1.5rem 0 .5rem}
.dk-prose p{margin:0 0 1.1rem;max-width:72ch}
.dk-prose strong{font-weight:700;color:var(--navy)}
.dk-prose a{color:var(--blue);text-decoration:underline;text-underline-offset:2px}
.dk-prose ul,.dk-prose ol{margin:0 0 1.2rem;padding-left:1.4rem;max-width:72ch}
.dk-prose li{margin-bottom:.45rem}
.dk-prose hr{border:none;border-top:1px solid var(--rule);margin:2.5rem 0}
.dk-prose blockquote{margin:0 0 1.2rem;padding:.2rem 0 .2rem 1.1rem;border-left:3px solid var(--blue-mid);color:var(--ink-2)}

.dk-prose code{font-family:ui-monospace,'SF Mono',Menlo,monospace;font-size:.86em;background:var(--blue-pale);color:#2A4A7F;padding:.14em .4em;border-radius:5px;border:1px solid var(--blue-mid)}
.dk-prose pre{background:var(--navy-deep);border-radius:12px;padding:1.15rem 1.3rem;overflow-x:auto;margin:0 0 1.4rem;border:1px solid #223055}
.dk-prose pre code{background:none;border:none;padding:0;color:#D6E2F5;font-size:.84rem;line-height:1.65;display:block}

.dk-prose table{width:100%;border-collapse:collapse;margin:0 0 1.5rem;font-size:.92rem;background:var(--paper);border:1px solid var(--rule);border-radius:10px;overflow:hidden}
.dk-prose thead th{text-align:left;font-size:.72rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-3);padding:.75rem 1rem;background:var(--ground);border-bottom:1px solid var(--rule)}
.dk-prose td{padding:.75rem 1rem;border-bottom:1px solid var(--rule);vertical-align:top;line-height:1.55}
.dk-prose tbody tr:last-child td{border-bottom:none}
.dk-table-scroll{overflow-x:auto;margin-bottom:1.5rem}
.dk-table-scroll table{margin-bottom:0}

.dk-foot{margin-top:4rem;padding-top:1.75rem;border-top:1px solid var(--rule);font-size:.9rem;color:var(--ink-2)}
.dk-foot a{color:var(--blue);font-weight:600}

@media (max-width:900px){
  .dk-doc{grid-template-columns:1fr;gap:2rem}
  .dk-side{position:static;padding-bottom:1.25rem;border-bottom:1px solid var(--rule)}
  .dk-side a{display:inline-block;border-left:none;border-bottom:2px solid var(--rule);margin-right:1rem;padding:.3rem 0}
}
`;
