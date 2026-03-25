import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Wrench } from "lucide-react";

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div
          className="mb-3 w-[280px] rounded-lg overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200"
          style={{
            backgroundColor: "#141414",
            border: "1px solid #CC1414",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
          }}
        >
          <div className="px-4 py-3" style={{ backgroundColor: "#CC1414" }}>
            <p className="text-white font-bold text-sm uppercase tracking-wide">Fale com a gente</p>
            <span className="flex items-center gap-1.5 mt-0.5">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[11px] text-white/80">Online agora</span>
            </span>
          </div>

          <div className="p-3 flex flex-col gap-2">
            <a
              href="https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+atendimento"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md p-3 border border-transparent transition-colors hover:border-[#CC1414] cursor-pointer"
              style={{ backgroundColor: "#1c1c1c" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                style={{ backgroundColor: "#CC1414" }}
              >
                MD
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate">MD Fábrica</p>
                <p className="text-xs text-gray-400">Atendimento Comercial</p>
              </div>
            </a>

            <a
              href="https://wa.me/5551997859061?text=Olá,+preciso+de+suporte+técnico+sobre+uma+peça"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md p-3 border border-transparent transition-colors hover:border-[#CC1414] cursor-pointer"
              style={{ backgroundColor: "#1c1c1c" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#333" }}
              >
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate">Suporte Técnico</p>
                <p className="text-xs text-gray-400">Dúvidas sobre peças</p>
              </div>
            </a>
          </div>

          <div className="px-4 py-2 text-center" style={{ borderTop: "1px solid #2a2a2a" }}>
            <span className="text-[11px] text-gray-500">Seg–Sex · 7h às 18h</span>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp"
        className="relative flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 whatsapp-pulse"
        style={{
          width: 58,
          height: 58,
          backgroundColor: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        }}
      >
        {open ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppFloat;
