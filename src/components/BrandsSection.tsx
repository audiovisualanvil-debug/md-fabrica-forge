import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, MessageCircle } from "lucide-react";
import caterpillarLogo from "@/assets/brands/caterpillar.webp";
import jcbLogo from "@/assets/brands/jcb.png";
import caseLogo from "@/assets/brands/case.png";
import komatsuLogo from "@/assets/brands/komatsu.png";
import newHollandLogo from "@/assets/brands/new-holland.png";
import volvoLogo from "@/assets/brands/volvo.png";
import hyundaiLogo from "@/assets/brands/hyundai.png";
import doosanLogo from "@/assets/brands/doosan.png";
import sanyLogo from "@/assets/brands/sany.png";
import bobcatLogo from "@/assets/brands/bobcat.png";
import yanmarLogo from "@/assets/brands/yanmar.png";
import clarkMichiganLogo from "@/assets/brands/clark-michigan.png";

interface BrandData {
  name: string;
  logo: string;
  category: string;
  parts: { name: string; code: string }[] | null;
}

const brandsData: BrandData[] = [
  {
    name: "Case",
    logo: caseLogo,
    category: "Retroescavadeira Case 580",
    parts: [
      { name: "Coroa", code: "100561A1" },
      { name: "Engrenagem", code: "100562A1" },
      { name: "Tampa", code: "100553A1" },
      { name: "Semi-Eixo", code: "144461A1" },
      { name: "Eixo Longo", code: "144462A1" },
      { name: "Eixo Curto", code: "144463A1" },
      { name: "Engrenagem", code: "175979A1" },
      { name: "Tampa", code: "175977A1" },
    ],
  },
  {
    name: "Caterpillar",
    logo: caterpillarLogo,
    category: "Retroescavadeira CAT 416",
    parts: [
      { name: "Engrenagem", code: "2105934" },
      { name: "Semi-Eixo", code: "2105946" },
      { name: "Munhão", code: "2172877" },
      { name: "Munhão", code: "2172878" },
      { name: "Tampa", code: "2097466" },
    ],
  },
  {
    name: "JCB",
    logo: jcbLogo,
    category: "Retroescavadeira JCB 3CX / 4CX",
    parts: [
      { name: "Barra", code: "914/60102" },
      { name: "Semi-Eixo", code: "914/86200" },
      { name: "Semi-Eixo", code: "914/60109" },
      { name: "Engrenagem", code: "450/12403" },
      { name: "Cubo", code: "458/20501" },
    ],
  },
  { name: "New Holland", logo: newHollandLogo, category: "Retroescavadeira New Holland", parts: null },
  { name: "Volvo", logo: volvoLogo, category: "Escavadeira Volvo", parts: null },
  { name: "Komatsu", logo: komatsuLogo, category: "Escavadeira Komatsu", parts: null },
  { name: "Hyundai", logo: hyundaiLogo, category: "Escavadeira Hyundai", parts: null },
  { name: "Doosan", logo: doosanLogo, category: "Escavadeira Doosan", parts: null },
  { name: "Sany", logo: sanyLogo, category: "Escavadeira Sany", parts: null },
  { name: "Clark Michigan", logo: clarkMichiganLogo, category: "Pá Carregadeira Michigan", parts: null },
  { name: "Bobcat", logo: bobcatLogo, category: "Mini Escavadeira Bobcat", parts: null },
  { name: "Yanmar", logo: yanmarLogo, category: "Mini Escavadeira Yanmar", parts: null },
];

interface BrandsSectionProps {
  onBrandClick?: (brand: string) => void;
}

const BrandsSection = ({ onBrandClick }: BrandsSectionProps) => {
  const [selectedBrand, setSelectedBrand] = useState<BrandData | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const scrollPos = useRef(0);

  // Infinite scroll animation
  const animate = useCallback(() => {
    if (!scrollRef.current || isPaused) {
      animRef.current = requestAnimationFrame(animate);
      return;
    }
    scrollPos.current += 0.5;
    const container = scrollRef.current;
    const halfWidth = container.scrollWidth / 2;
    if (scrollPos.current >= halfWidth) {
      scrollPos.current = 0;
    }
    container.scrollLeft = scrollPos.current;
    animRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedBrand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedBrand]);

  // ESC to close
  useEffect(() => {
    if (!selectedBrand) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedBrand(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedBrand]);

  const scroll = (dir: number) => {
    if (!scrollRef.current) return;
    scrollPos.current += dir * 200;
    scrollRef.current.scrollTo({ left: scrollPos.current, behavior: "smooth" });
  };

  const handleBrandClick = (brand: BrandData) => {
    setSelectedBrand(brand);
    onBrandClick?.(brand.name.toUpperCase());
  };

  // Duplicate brands for infinite loop
  const loopBrands = [...brandsData, ...brandsData];

  return (
    <>
      <section id="marcas" className="py-12 md:py-16 px-4 md:px-8 bg-card">
        <div className="container mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
            Marcas que atendemos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mt-3 mb-3 text-foreground">
            Mais de 12 marcas
          </h2>
          <p className="text-sm text-muted-foreground mb-10">
            Clique em uma marca para ver as peças disponíveis
          </p>

          <div className="relative group/carousel">
            {/* Left arrow */}
            <button
              onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors backdrop-blur-sm"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Carousel */}
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-12"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {loopBrands.map((b, i) => (
                <button
                  key={`${b.name}-${i}`}
                  onClick={() => handleBrandClick(b)}
                  className="flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-lg border transition-all duration-300 cursor-pointer group hover:scale-[1.03]"
                  style={{
                    width: 160,
                    padding: 24,
                    backgroundColor: "#1a1a1a",
                    borderColor: "#2a2a2a",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#CC1414"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a"; }}
                >
                  <div className="h-12 w-full flex items-center justify-center">
                    <img
                      src={b.logo}
                      alt={`Logo ${b.name}`}
                      className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      draggable={false}
                    />
                  </div>
                  <span className="text-xs text-foreground/80 uppercase tracking-wider font-medium whitespace-nowrap">
                    {b.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors backdrop-blur-sm"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedBrand && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={() => setSelectedBrand(null)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 animate-fade-in" />

          {/* Modal content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[480px] rounded-lg p-8 animate-scale-in z-10 max-h-[90vh] overflow-y-auto"
            style={{
              backgroundColor: "#141414",
              border: "1px solid #CC1414",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedBrand(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <img
                src={selectedBrand.logo}
                alt={selectedBrand.name}
                className="h-12 w-auto object-contain mb-4"
              />
              <h3 className="font-heading text-xl font-bold text-foreground uppercase">
                {selectedBrand.name}
              </h3>
              <span className="text-sm text-primary mt-1">
                {selectedBrand.category}
              </span>
            </div>

            {/* Divider */}
            <div className="h-px w-full mb-6" style={{ backgroundColor: "#2a2a2a" }} />

            {/* Parts */}
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: "#666" }}>
                Peças Disponíveis
              </span>
              <div className="mt-3 space-y-2">
                {selectedBrand.parts ? (
                  selectedBrand.parts.map((part) => (
                    <p key={part.code} className="text-foreground text-[13px]">
                      ● {part.name.toUpperCase()} — Cód: {part.code}
                    </p>
                  ))
                ) : (
                  <p className="text-muted-foreground text-[13px] italic">
                    Consultar disponibilidade via WhatsApp
                  </p>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full mb-6" style={{ backgroundColor: "#2a2a2a" }} />

            {/* Footer */}
            <p className="text-sm text-muted-foreground text-center mb-4">
              Precisa de uma peça desta linha?
            </p>
            <a
              href={`https://wa.me/5551997859061?text=Olá,+tenho+interesse+em+peças+para+${encodeURIComponent(selectedBrand.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-whatsapp text-whatsapp-foreground py-3.5 rounded font-heading font-bold uppercase tracking-wide hover:brightness-110 transition"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandsSection;
