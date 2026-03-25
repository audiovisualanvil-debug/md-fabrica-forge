import { useState, useRef } from "react";
import { Search, MessageCircle, Factory, Zap, Cog, Truck } from "lucide-react";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const trustItems = [
  { icon: Factory, label: "Fabricação própria" },
  { icon: Truck, label: "Envio para todo o Brasil" },
  { icon: Zap, label: "Atendimento rápido" },
  { icon: Cog, label: "Peças para linha pesada" },
];

const catalogCards = [
  { label: "Redutor de Tração", type: "category" },
  { label: "Roda Guia", type: "category" },
  { label: "Rolete Inferior", type: "category" },
  { label: "Peças JCB", type: "brand" },
  { label: "Peças Case", type: "brand" },
  { label: "Peças Hyundai", type: "brand" },
  { label: "Fabricação Própria", type: "highlight" },
  { label: "Linha de Giro", type: "category" },
  { label: "Peças CAT", type: "brand" },
  { label: "Semi-Eixo", type: "category" },
  { label: "Engrenagem", type: "category" },
  { label: "Peças Volvo", type: "brand" },
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  // Split cards into left and right columns for desktop
  const leftCards = catalogCards.filter((_, i) => i % 2 === 0);
  const rightCards = catalogCards.filter((_, i) => i % 2 === 1);

  const renderCard = (card: typeof catalogCards[0], index: number, side: "left" | "right") => {
    const isHighlight = card.type === "highlight";
    const isBrand = card.type === "brand";

    return (
      <div
        key={card.label}
        className={`
          rounded-lg border px-4 py-3 text-left transition-all duration-500
          ${isHighlight
            ? "bg-primary/10 border-primary/30"
            : isBrand
              ? "bg-card/80 border-border"
              : "bg-card/60 border-border/60"
          }
        `}
        style={{
          animationDelay: `${index * 120 + 300}ms`,
          transform: `rotate(${side === "left" ? -2 + index * 0.5 : 1.5 - index * 0.4}deg)`,
        }}
      >
        <span className={`text-[11px] font-heading font-bold uppercase tracking-wider ${
          isHighlight ? "text-primary" : isBrand ? "text-foreground/70" : "text-foreground/50"
        }`}>
          {card.label}
        </span>
      </div>
    );
  };

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-[82vh] md:min-h-[88vh] flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 0.5px, transparent 0)`,
          backgroundSize: "24px 24px",
        }} />

        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.05] blur-[100px] pointer-events-none"
          style={{ background: "hsl(var(--primary))" }}
        />

        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,560px)_1fr] gap-6 items-center">

            {/* Left floating cards — desktop only */}
            <div className="hidden lg:flex flex-col gap-3 items-end pr-4 animate-fade-up [animation-delay:400ms] opacity-0">
              {leftCards.map((card, i) => renderCard(card, i, "left"))}
            </div>

            {/* Center — Main content */}
            <div className="text-center z-10">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black uppercase leading-[1] mb-4 animate-fade-up text-foreground">
                Encontre a peça certa
                <span className="block text-primary mt-1">para sua máquina</span>
              </h1>

              <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed animate-fade-up [animation-delay:100ms] opacity-0">
                Pesquise por código, marca ou modelo. Se preferir, nossa equipe localiza para você.
              </p>

              {/* Search bar */}
              <div className="animate-fade-up [animation-delay:200ms] opacity-0 max-w-lg mx-auto mb-4">
                <div
                  className={`relative flex items-center rounded-lg border-2 transition-all duration-300 bg-card ${
                    isFocused
                      ? "border-primary shadow-[0_0_24px_-4px_hsl(var(--primary)/0.4)]"
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
                    className="w-full h-14 md:h-16 pl-12 pr-28 md:pr-36 bg-transparent text-foreground text-sm md:text-base placeholder:text-muted-foreground/50 focus:outline-none"
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 h-10 md:h-12 px-4 md:px-6 rounded-md bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wide text-xs md:text-sm hover:brightness-110 active:scale-[0.97] transition-all flex items-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span className="hidden sm:inline">Buscar</span>
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
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

              {/* Mobile catalog chips */}
              <div className="flex flex-wrap justify-center gap-2 lg:hidden animate-fade-up [animation-delay:400ms] opacity-0">
                {catalogCards.slice(0, 8).map((card) => (
                  <span
                    key={card.label}
                    className={`text-[10px] font-heading font-bold uppercase tracking-wider px-3 py-1.5 rounded border ${
                      card.type === "highlight"
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : card.type === "brand"
                          ? "bg-card border-border text-foreground/60"
                          : "bg-card/60 border-border/50 text-foreground/40"
                    }`}
                  >
                    {card.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right floating cards — desktop only */}
            <div className="hidden lg:flex flex-col gap-3 items-start pl-4 animate-fade-up [animation-delay:500ms] opacity-0">
              {rightCards.map((card, i) => renderCard(card, i, "right"))}
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
