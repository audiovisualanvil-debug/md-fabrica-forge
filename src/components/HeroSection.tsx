import { useState, useRef, useEffect } from "react";
import { Search, MessageCircle, Factory, Zap, Cog, Truck, Hash, Settings, Tag, Camera } from "lucide-react";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const trustItems = [
  { icon: Factory, label: "Fabricação própria" },
  { icon: Truck, label: "Envio para todo o Brasil" },
  { icon: Zap, label: "Atendimento rápido" },
  { icon: Cog, label: "Peças para linha pesada" },
];

const shortcuts = [
  { icon: Hash, label: "Buscar por código" },
  { icon: Settings, label: "Buscar por máquina" },
  { icon: Tag, label: "Buscar por marca" },
  { icon: Camera, label: "Enviar foto da peça" },
];

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      inputRef.current?.focus();
      return;
    }
    const section = document.getElementById("produtos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("hero-search", { detail: searchTerm.trim() }));
      }, 600);
    }
  };

  const handleShortcut = (label: string) => {
    if (label === "Enviar foto da peça") {
      window.open(
        "https://wa.me/5551997859061?text=Olá,+gostaria+de+enviar+a+foto+de+uma+peça+para+identificação",
        "_blank"
      );
      return;
    }
    inputRef.current?.focus();
    const placeholders: Record<string, string> = {
      "Buscar por código": "84254289",
      "Buscar por máquina": "JCB 3CX",
      "Buscar por marca": "CATERPILLAR",
    };
    setSearchTerm(placeholders[label] || "");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
        {/* Subtle red glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: "hsl(var(--primary))" }} />

        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase leading-[1] mb-4 animate-fade-up text-foreground">
              Encontre a peça certa
              <span className="block text-primary mt-1">para sua máquina.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-up [animation-delay:100ms] opacity-0">
              Pesquise por código, marca ou modelo. Se preferir, envie no WhatsApp e nossa equipe localiza para você.
            </p>

            {/* Search bar */}
            <div className="animate-fade-up [animation-delay:200ms] opacity-0 max-w-xl mx-auto mb-5">
              <div
                className={`relative flex items-center rounded-lg border-2 transition-all duration-300 bg-card ${
                  isFocused
                    ? "border-primary shadow-[0_0_20px_-4px_hsl(var(--primary)/0.35)]"
                    : "border-border hover:border-muted-foreground/30"
                }`}
              >
                <Search className="absolute left-4 w-5 h-5 text-muted-foreground pointer-events-none" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ex: 84254289, JCB 3C, redutor de tração"
                  className="w-full h-14 md:h-16 pl-12 pr-32 md:pr-36 bg-transparent text-foreground text-sm md:text-base placeholder:text-muted-foreground/60 focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 h-10 md:h-12 px-5 md:px-6 rounded-md bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wide text-xs md:text-sm hover:brightness-110 active:scale-[0.97] transition-all flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Buscar</span>
                </button>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="animate-fade-up [animation-delay:300ms] opacity-0 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-whatsapp/10 border border-whatsapp/20 text-whatsapp font-heading font-bold uppercase tracking-wide text-xs hover:bg-whatsapp/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>

            {/* Shortcut chips */}
            <div className="animate-fade-up [animation-delay:400ms] opacity-0 flex flex-wrap justify-center gap-2 md:gap-3">
              {shortcuts.map((s) => (
                <button
                  key={s.label}
                  onClick={() => handleShortcut(s.label)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-card text-muted-foreground text-[11px] md:text-xs font-heading font-bold uppercase tracking-wide hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <s.icon className="w-3.5 h-3.5" />
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5 py-4 md:py-5 px-2">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-wider text-foreground/70">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
