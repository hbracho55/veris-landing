"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type DemoModalContextValue = {
  open: () => void;
  close: () => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal(): DemoModalContextValue {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error("useDemoModal must be used inside <DemoModalProvider>");
  }
  return ctx;
}

type Status = "idle" | "submitting" | "success" | "error";

const MODAL_STYLES = `
.demo-modal-backdrop{position:fixed;inset:0;z-index:1000;background:rgba(17,30,60,.72);backdrop-filter:blur(6px);display:flex;align-items:flex-start;justify-content:center;padding:2rem 1rem;overflow-y:auto;animation:demo-fade .2s ease-out}
.demo-modal{background:#fff;border-radius:16px;max-width:520px;width:100%;margin:auto;padding:2rem 2rem 1.75rem;position:relative;box-shadow:0 24px 60px rgba(17,30,60,.35);font-family:'DM Sans',sans-serif;color:#1A2B4A;animation:demo-rise .25s ease-out}
.demo-modal-close{position:absolute;top:.85rem;right:1rem;background:transparent;border:none;font-size:1.6rem;line-height:1;color:#5A6A8A;cursor:pointer;padding:.25rem .5rem;border-radius:6px;transition:background .15s,color .15s}
.demo-modal-close:hover{background:#F0F4FB;color:#1A2B4A}
.demo-modal h2{font-family:'DM Serif Display',serif;font-weight:400;font-size:1.6rem;line-height:1.2;color:#1E3564;margin-bottom:.4rem;letter-spacing:-.01em}
.demo-modal .demo-modal-sub{font-size:.9rem;color:#5A6A8A;margin-bottom:1.5rem;line-height:1.55}
.demo-field{display:flex;flex-direction:column;margin-bottom:1rem}
.demo-field label{font-size:.78rem;font-weight:600;color:#1E3564;margin-bottom:.35rem;letter-spacing:.01em}
.demo-field label .demo-hint{font-weight:400;color:#8A9BB8;margin-left:.3rem;font-size:.72rem}
.demo-field input,.demo-field select{font-family:inherit;font-size:.92rem;color:#1A2B4A;background:#F5F8FF;border:1px solid #D0DCF0;border-radius:8px;padding:.65rem .85rem;transition:border-color .15s,background .15s;width:100%}
.demo-field input:focus,.demo-field select:focus{outline:none;border-color:#4472C4;background:#fff;box-shadow:0 0 0 3px rgba(68,114,196,.18)}
.demo-field input:invalid:not(:placeholder-shown){border-color:#C0383A}
.demo-disclaimer{font-size:.74rem;color:#5A6A8A;line-height:1.55;background:#F0F4FB;border:1px solid #D0DCF0;border-radius:8px;padding:.75rem .9rem;margin:.5rem 0 1.1rem}
.demo-submit{background:#C0388A;color:#fff;border:none;border-radius:8px;font-family:inherit;font-size:.95rem;font-weight:500;padding:.8rem 1.5rem;cursor:pointer;width:100%;transition:background .15s,transform .15s}
.demo-submit:hover:not(:disabled){background:#A8307A;transform:translateY(-1px)}
.demo-submit:disabled{opacity:.65;cursor:not-allowed}
.demo-message{font-size:.85rem;line-height:1.5;border-radius:8px;padding:.7rem .9rem;margin-bottom:1rem}
.demo-message.error{background:#FEE8E8;color:#9A2C2E;border:1px solid #F5BFC0}
.demo-message.success{background:#E0F5EE;color:#1D6E55;border:1px solid #B3E0CE}
@keyframes demo-fade{from{opacity:0}to{opacity:1}}
@keyframes demo-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
`;

const EMAIL_PATTERN = "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  position: "",
  company: "",
  interest: "",
};

export default function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState(INITIAL_FORM);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    // Reset shortly after close to allow exit animation.
    setTimeout(() => {
      setStatus("idle");
      setErrorMsg(null);
      setForm(INITIAL_FORM);
    }, 200);
  }, []);

  // Close with Escape; lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setErrorMsg(data?.error ?? "No se pudo enviar la solicitud.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Error de red. Verifique su conexión e intente nuevamente.");
      setStatus("error");
    }
  };

  return (
    <DemoModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen && (
        <>
          <style dangerouslySetInnerHTML={{ __html: MODAL_STYLES }} />
          <div
            className="demo-modal-backdrop"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
          >
            <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="demo-modal-close"
                onClick={close}
                aria-label="Cerrar"
              >
                ×
              </button>
              <h2 id="demo-modal-title">Agendar una demo</h2>
              <p className="demo-modal-sub">
                Cuéntenos sobre su organización. Un experto se contactará con usted.
              </p>

              {status === "success" ? (
                <>
                  <div className="demo-message success">
                    ¡Solicitud enviada! Nos pondremos en contacto a la brevedad.
                  </div>
                  <button
                    type="button"
                    className="demo-submit"
                    onClick={close}
                  >
                    Cerrar
                  </button>
                </>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  {status === "error" && errorMsg && (
                    <div className="demo-message error">{errorMsg}</div>
                  )}

                  <div className="demo-field">
                    <label htmlFor="demo-fullName">Nombre y Apellido</label>
                    <input
                      id="demo-fullName"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder=" "
                    />
                  </div>

                  <div className="demo-field">
                    <label htmlFor="demo-email">
                      Correo Corporativo
                      <span className="demo-hint">(No gmail/hotmail)</span>
                    </label>
                    <input
                      id="demo-email"
                      type="email"
                      required
                      autoComplete="email"
                      pattern={EMAIL_PATTERN}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder=" "
                    />
                  </div>

                  <div className="demo-field">
                    <label htmlFor="demo-position">Cargo</label>
                    <input
                      id="demo-position"
                      type="text"
                      required
                      autoComplete="organization-title"
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      placeholder=" "
                    />
                  </div>

                  <div className="demo-field">
                    <label htmlFor="demo-company">Institución / Empresa</label>
                    <input
                      id="demo-company"
                      type="text"
                      required
                      autoComplete="organization"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder=" "
                    />
                  </div>

                  <div className="demo-field">
                    <label htmlFor="demo-interest">Tipo de interés</label>
                    <select
                      id="demo-interest"
                      required
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    >
                      <option value="" disabled>
                        Seleccione una opción
                      </option>
                      <option value="emisor">Quiero emitir credenciales</option>
                      <option value="verificador">Quiero verificar credenciales</option>
                      <option value="hibrida">Quiero una solución híbrida / Enterprise</option>
                    </select>
                  </div>

                  <div className="demo-disclaimer">
                    Sus datos están protegidos bajo nuestra política de Privacidad.
                  </div>

                  <button
                    type="submit"
                    className="demo-submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Enviando..." : "Enviar"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </>
      )}
    </DemoModalContext.Provider>
  );
}
