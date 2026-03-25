import { useState, useRef, useEffect, useCallback } from "react";
import { Search, MessageCircle, Factory, Zap, Cog, Truck } from "lucide-react";
import imgRedutor from "@/assets/catalog/redutor.jpg";
import imgRodaGuia from "@/assets/catalog/roda-guia.jpg";
import imgRolete from "@/assets/catalog/rolete.jpg";
import imgLinhaGiro from "@/assets/catalog/linha-giro.jpg";
import imgEngrenagem from "@/assets/catalog/engrenagem.jpg";
import imgSemiEixo from "@/assets/catalog/semi-eixo.jpg";

const WA_LINK = "https://wa.me/5551997859061?text=Olá!+Quero+cotar+uma+peça.+Pode+confirmar+compatibilidade+e+prazo?";

const trustItems = [
  { icon: Factory, label: "Fabricação própria" },
  { icon: Truck, label: "Envio para todo o Brasil" },
  { icon: Zap, label: "Atendimento rápido" },
  { icon: Cog, label: "Peças para linha pesada" },
];

const catalogCards = [
  { image: imgRedutor, name: "Redutor de Tração", code: "Linha pesada", tag: "Fabricação Própria" },
  { image: imgRodaGuia, name: "Roda Guia", code: "Escavadeiras", tag: null },
  { image: imgRolete, name: "Rolete Inferior", code: "Esteiras", tag: null },
  { image: imgLinhaGiro, name: "Linha de Giro", code: "Rolamento", tag: "Fabricação Própria" },
  { image: imgEngrenagem, name: "Engrenagem", code: "Cód: 2105934", tag: null },
  { image: imgSemiEixo, name: "Semi-Eixo", code: "Cód: 144461A1", tag: null },
];

// Card positions: [left, top, rotate°, scale, zIndex] — using viewport-aware values
const leftPositions = [
  ["-10%", "5%", -14, 0.92, 1],
  ["-5%", "50%", -8, 0.85, 2],
  ["4%", "20%", -4, 0.78, 3],
];
const rightPositions = [
  ["88%", "3%", 13, 0.92, 1],
  ["82%", "48%", 7, 0.85, 2],
  ["74%", "18%", 3, 0.78, 3],
];

const CatalogCard = ({
  card,
  style,
  className = "",
}: {
  card: typeof catalogCards[0];
  style: React.CSSProperties;
  className?: string;
}) => (
  <div
    className={`absolute ${className}`}
    style={{
      width: "200px",
      ...style,
    }}
  >
    <div className="rounded-xl overflow-hidden border border-border/60 shadow-2xl shadow-black/60 select-none transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.3)] hover:border-primary/40 hover:z-50 pointer-events-auto">
      <div className="relative aspect-[3/4] bg-card">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
          width={200}
          height={267}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        {card.tag && (
          <span className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-[9px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            {card.tag}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-foreground font-heading font-bold text-sm uppercase leading-tight">{card.name}</p>
          <p className="text-muted-foreground text-[10px] font-heading uppercase tracking-wider mt-0.5">{card.code}</p>
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setScrollY(window.scrollY);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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

  const leftCards = catalogCards.slice(0, 3);
  const rightCards = catalogCards.slice(3, 6);

  return (
    <>
      <section
        ref={sectionRef}
        id="inicio"
        className="relative min-h-[auto] lg:min-h-[88vh] flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 0.5px, transparent 0)`,
          backgroundSize: "20px 20px",
        }} />

        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none" style={{ background: "hsl(var(--primary))" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full opacity-[0.04] blur-[100px] pointer-events-none" style={{ background: "hsl(var(--primary))" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full opacity-[0.04] blur-[100px] pointer-events-none" style={{ background: "hsl(var(--primary))" }} />

        <div className="relative container mx-auto px-4 py-12 md:py-16 w-full">
          {/* Floating catalog cards — desktop only */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="relative w-full h-full flex items-center justify-center">
              {leftCards.map((card, i) => {
                const speed = [0.08, 0.12, 0.06][i];
                const parallaxY = scrollY * speed;
                return (
                  <CatalogCard
                    key={card.name}
                    card={card}
                    className="animate-fade-up opacity-0 transition-none"
                    style={{
                      left: leftPositions[i][0] as string,
                      top: leftPositions[i][1] as string,
                      transform: `rotate(${leftPositions[i][2]}deg) scale(${leftPositions[i][3]}) translateY(${parallaxY}px)`,
                      zIndex: leftPositions[i][4] as number,
                      animationDelay: `${400 + i * 150}ms`,
                    }}
                  />
                );
              })}
              {rightCards.map((card, i) => {
                const speed = [0.1, 0.05, 0.14][i];
                const parallaxY = scrollY * speed;
                return (
                  <CatalogCard
                    key={card.name}
                    card={card}
                    className="animate-fade-up opacity-0 transition-none"
                    style={{
                      left: rightPositions[i][0] as string,
                      top: rightPositions[i][1] as string,
                      transform: `rotate(${rightPositions[i][2]}deg) scale(${rightPositions[i][3]}) translateY(${parallaxY}px)`,
                      zIndex: rightPositions[i][4] as number,
                      animationDelay: `${500 + i * 150}ms`,
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Center content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black uppercase leading-[0.95] mb-5 animate-fade-up text-foreground">
              Encontre a peça certa
              <span className="block text-primary mt-1">para sua máquina</span>
            </h1>

            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-up [animation-delay:100ms] opacity-0">
              Pesquise por código, marca ou modelo. Se preferir, nossa equipe localiza para você.
            </p>

            {/* Search bar */}
            <div className="animate-fade-up [animation-delay:200ms] opacity-0 max-w-xl mx-auto mb-4">
              <div
                className={`relative flex flex-col sm:flex-row items-stretch sm:items-center rounded-xl border-2 transition-all duration-300 bg-card ${
                  isFocused
                    ? "border-primary shadow-[0_0_30px_-4px_hsl(var(--primary)/0.5),0_0_60px_-8px_hsl(var(--primary)/0.2)]"
                    : "border-border/80 hover:border-muted-foreground/40 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]"
                }`}
              >
                <Search className={`absolute left-4 sm:left-5 top-[18px] sm:top-1/2 sm:-translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 pointer-events-none transition-colors ${isFocused ? "text-primary" : "text-muted-foreground"}`} />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ex: 84254289, JCB 3C, redutor de tração"
                  className="w-full h-14 sm:h-16 md:h-[72px] pl-12 sm:pl-14 pr-4 sm:pr-32 md:pr-40 bg-transparent text-foreground text-[15px] sm:text-base md:text-lg placeholder:text-foreground/30 focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="sm:absolute sm:right-2.5 h-12 sm:h-11 md:h-[52px] px-6 md:px-8 mx-2 mb-2 sm:m-0 rounded-lg bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wide text-sm md:text-base hover:brightness-110 active:scale-[0.97] transition-all flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Buscar peça
                </button>
              </div>
              <p className="text-[11px] text-muted-foreground mt-2 text-center animate-fade-up [animation-delay:250ms] opacity-0">
                Não tem o código?{" "}
                <a
                  href="https://wa.me/5551997859061?text=Olá!+Quero+enviar+a+foto+de+uma+peça+para+identificação.+Pode+me+ajudar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whatsapp hover:underline font-bold"
                >
                  Envie uma foto no WhatsApp
                </a>
              </p>
            </div>

            {/* WhatsApp */}
            <div className="animate-fade-up [animation-delay:300ms] opacity-0 mb-8 md:mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-whatsapp/10 border border-whatsapp/20 text-whatsapp font-heading font-bold uppercase tracking-wide text-xs hover:bg-whatsapp/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>

            {/* Mobile: catalog carousel */}
            <div className="lg:hidden animate-fade-up [animation-delay:400ms] opacity-0">
              <p className="text-[10px] font-heading font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3 text-left pl-1">
                Peças mais buscadas
              </p>
              <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
                {catalogCards.map((card) => (
                  <button
                    key={card.name}
                    type="button"
                    onClick={() => {
                      const section = document.getElementById("produtos");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        setTimeout(() => {
                          window.dispatchEvent(new CustomEvent("hero-search", { detail: card.name }));
                        }, 600);
                      }
                    }}
                    className="snap-start shrink-0 w-[42vw] max-w-[180px] rounded-lg overflow-hidden border border-border/60 bg-card shadow-lg text-left active:scale-[0.97] transition-transform"
                  >
                    <div className="relative aspect-[3/4]">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-cover opacity-80"
                        loading="lazy"
                        width={180}
                        height={240}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      {card.tag && (
                        <span className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-[8px] font-heading font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                          {card.tag}
                        </span>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-foreground font-heading font-bold text-[13px] uppercase leading-tight">{card.name}</p>
                        <p className="text-foreground/50 text-[10px] font-heading uppercase tracking-wider mt-0.5">{card.code}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
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
