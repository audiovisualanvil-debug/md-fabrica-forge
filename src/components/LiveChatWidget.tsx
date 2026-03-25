import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

const attendants = [
  {
    initials: "MD",
    name: "Atendimento MD Fábrica",
    role: "Atendimento Comercial",
    whatsapp: "https://wa.me/5551997859061?text=Olá,+gostaria+de+falar+com+o+atendimento+comercial",
  },
  {
    initials: "ST",
    name: "Suporte MD Fábrica",
    role: "Suporte Técnico",
    whatsapp: "https://wa.me/5551997859061?text=Olá,+preciso+de+suporte+técnico",
  },
];

const LiveChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {open && (
        <div
          className="mb-2 w-80 rounded-xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 fade-in duration-300"
          style={{ backgroundColor: "#141414", border: "2px solid #CC1414" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4" style={{ backgroundColor: "#1a1a1a" }}>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-green-400">Online Agora</span>
                <p className="text-sm font-heading font-bold text-foreground mt-0.5">Fale com a gente</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Attendants */}
          <div className="p-4 flex flex-col gap-3">
            {attendants.map((a) => (
              <a
                key={a.role}
                href={a.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-white/5"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-black text-sm shrink-0">
                  {a.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-foreground truncate">{a.name}</p>
                  <p className="text-xs text-muted-foreground">{a.role}</p>
                </div>
                <MessageSquare className="w-4 h-4 text-primary shrink-0" />
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 text-center border-t" style={{ borderColor: "#2a2a2a" }}>
            <span className="text-xs text-muted-foreground">Seg–Sex · 7h às 18h</span>
          </div>
        </div>
      )}

      {/* Float button */}
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-3 rounded-full px-5 py-3 shadow-lg transition-all duration-300 hover:scale-105"
        style={{ backgroundColor: "#CC1414" }}
      >
        {open ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageSquare className="w-5 h-5 text-white" />
        )}
        <span className="text-white font-heading font-bold text-sm uppercase tracking-wide">
          Fale com a gente
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-green-300 font-semibold uppercase">Online</span>
        </span>
      </button>
    </div>
  );
};

export default LiveChatWidget;
