"use client";

import { useState } from "react";

/**
 * Miniatura con botón de play que inserta el reproductor de YouTube solo al
 * hacer clic.
 *
 * El `<iframe>` de YouTube trae alrededor de un megabyte de JavaScript de
 * terceros y sus cookies, y cargarlo en el héroe significa pagarlo en la
 * primera pintura aunque nadie vea el video. Con la fachada se carga una
 * imagen, y el reproductor aparece cuando el visitante lo pide.
 *
 * Visualmente no cambia nada: YouTube muestra igualmente una miniatura hasta
 * que se le da play.
 */

type Props = {
  videoId: string;
  titulo: string;
};

// maxresdefault no existe para todos los videos; hqdefault siempre existe,
// aunque es 4:3 y el contenedor la recorta.
const MINIATURA = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const MINIATURA_ALT = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export default function VideoFacade({ videoId, titulo }: Props) {
  const [activo, setActivo] = useState(false);
  const [miniatura, setMiniatura] = useState(() => MINIATURA(videoId));

  if (activo) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
      />
    );
  }

  return (
    <button
      type="button"
      className="vf-facade"
      onClick={() => setActivo(true)}
      aria-label={`Reproducir video: ${titulo}`}
    >
      <style>{styles}</style>
      <img
        src={miniatura}
        alt=""
        className="vf-thumb"
        loading="eager"
        onError={() => setMiniatura(MINIATURA_ALT(videoId))}
      />
      <span className="vf-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}

const styles = `
.vf-facade{position:absolute;top:0;left:0;width:100%;height:100%;padding:0;border:none;background:#111E3C;cursor:pointer;display:block;overflow:hidden}
.vf-facade:focus-visible{outline:3px solid #5B8FC4;outline-offset:-3px}
.vf-thumb{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block}
.vf-play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:68px;height:68px;border-radius:50%;background:rgba(192,56,138,.92);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 28px rgba(0,0,0,.4);transition:transform .22s,background .22s}
.vf-facade:hover .vf-play{transform:translate(-50%,-50%) scale(1.07);background:#C0388A}
.vf-play svg{margin-left:3px}
@media (prefers-reduced-motion:reduce){.vf-play{transition:none}.vf-facade:hover .vf-play{transform:translate(-50%,-50%)}}
`;
