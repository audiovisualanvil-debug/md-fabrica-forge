import { useState } from "react";
import { Search, MessageCircle, Factory, Zap, Cog, Truck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const trustItems = [
  { icon: Factory, label: "Fabricação própria" },
  { icon: Zap, label: "Atendimento rápido" },
  { icon: Cog, label: "Peças para linha pesada" },
  { icon: Truck, label: "Envio para todo o Brasil" },
];

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    const section = document.getElementById("produtos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Dispatch custom event so ProductsSection picks up the query
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("hero-search", { detail: searchTerm.trim() })
        );
      }, 600);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, hsl(0 0% 100% / 0.06) 60px, hsl(0 0% 100% / 0.06) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, hsl(0 0% 100% / 0.06) 60px, hsl(0 0% 100% / 0.06) 61px)`
        }} />

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] mb-4">
              Encontre a peça certa{" "}
              <span className="block text-primary">para sua máquina.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
              Pesquise por código, marca ou modelo e encontre com mais rapidez.
              Se preferir, nossa equipe ajuda você a localizar a peça ideal.
            </p>

            {/* Search bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Digite o código, a marca ou o modelo da máquina"
                    className="w-full h-14 md:h-16 pl-12 pr-4 rounded-lg bg-card border-2 border-border text-foreground text-sm md:text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="h-14 md:h-16 px-8 rounded-lg bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wide text-sm md:text-base hover:brightness-110 transition flex items-center justify-center gap-2 shrink-0"
                >
                  <Search className="w-5 h-5" />
                  Buscar peça
                </button>
              </div>
            </div>

            {/* WhatsApp secondary CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-wide text-foreground/70 hover:text-whatsapp transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-whatsapp" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center gap-3 py-4 md:py-5 px-2"
              >
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs md:text-sm font-heading font-bold uppercase tracking-wide text-foreground/80">
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
