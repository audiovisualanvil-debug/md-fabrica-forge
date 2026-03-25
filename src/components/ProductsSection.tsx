import { useState, useEffect } from "react";
import { MessageCircle, Settings, Search, X } from "lucide-react";
import product2105946 from "@/assets/product-2105946.png";
import product2105934 from "@/assets/product-2105934.png";

const products = [
  { name: "ENGRENAGEM", brand: "CATERPILLAR", code: "2105934", image: product2105934 },
  { name: "SEMI-EIXO", brand: "CATERPILLAR", code: "2105946", image: product2105946 },
  { name: "MUNHÃO", brand: "CATERPILLAR", code: "2172877", image: null },
  { name: "CUBO DE RODA", brand: "CATERPILLAR", code: "1809936", image: null },
  { name: "CRUZETA", brand: "CATERPILLAR", code: "5P8500", image: null },
  { name: "SEMI-EIXO", brand: "JCB", code: "914/60109", image: null },
  { name: "CUBO", brand: "JCB", code: "458/20501", image: null },
  { name: "ENGRENAGEM PLANETÁRIA", brand: "JCB", code: "450/10205", image: null },
  { name: "CRUZETA", brand: "JCB", code: "914/60069", image: null },
  { name: "COROA", brand: "CASE", code: "100561A1", image: null },
  { name: "SEMI-EIXO", brand: "CASE", code: "144461A1", image: null },
  { name: "CUBO DE RODA", brand: "CASE", code: "227490A1", image: null },
  { name: "ENGRENAGEM", brand: "CASE", code: "85806001", image: null },
  { name: "SEMI-EIXO", brand: "NEW HOLLAND", code: "84168764", image: null },
  { name: "CUBO", brand: "NEW HOLLAND", code: "87442262", image: null },
  { name: "ENGRENAGEM", brand: "VOLVO", code: "11103999", image: null },
  { name: "SEMI-EIXO", brand: "VOLVO", code: "11709362", image: null },
  { name: "SEMI-EIXO", brand: "KOMATSU", code: "424-22-12411", image: null },
  { name: "ENGRENAGEM", brand: "KOMATSU", code: "423-22-32521", image: null },
  { name: "CUBO", brand: "HYUNDAI", code: "XKAH-00891", image: null },
  { name: "ENGRENAGEM", brand: "DOOSAN", code: "K1028096", image: null },
  { name: "SEMI-EIXO", brand: "SANY", code: "60027244", image: null },
  { name: "CUBO", brand: "CLARK MICHIGAN", code: "4042764", image: null },
  { name: "ENGRENAGEM", brand: "BOBCAT", code: "6667336", image: null },
  { name: "SEMI-EIXO", brand: "YANMAR", code: "172441-73300", image: null },
];

interface ProductsSectionProps {
  brandFilter?: string;
  onClearFilter?: () => void;
}

const ProductsSection = ({ brandFilter, onClearFilter }: ProductsSectionProps) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (brandFilter) {
      setSearch("");
    }
  }, [brandFilter]);

  const filtered = products.filter((p) => {
    const matchesBrand = brandFilter ? p.brand === brandFilter : true;
    const matchesSearch = search
      ? p.code.toLowerCase().includes(search.toLowerCase()) ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesBrand && matchesSearch;
  });

  return (
    <section id="produtos" className="py-20 md:py-28 px-4 md:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
            Catálogo
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mt-3 text-foreground">
            Peças Mais Vendidas
          </h2>
        </div>

        {brandFilter && (
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded font-heading font-bold text-sm uppercase tracking-wide">
              Filtrando: {brandFilter}
            </span>
            <button
              onClick={onClearFilter}
              className="p-2 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Limpar filtro"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="flex gap-2 max-w-xl mx-auto mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Busque por código, nome ou marca ex: 2172877"
              className="w-full bg-secondary border border-border rounded pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <div
              key={p.code}
              className="rounded-lg flex flex-col transition-all duration-300 group hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
              style={{
                backgroundColor: "#1a1a1a",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#2a2a2a",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#CC1414"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a"; }}
            >
              <div className="w-full h-44 rounded-t-lg flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#111111" }}>
                {p.image ? (
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain p-3" />
                ) : (
                  <Settings className="w-14 h-14 text-muted-foreground/20" />
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-primary font-black uppercase tracking-wide">{p.brand}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-1 uppercase">{p.name}</h3>
                <span className="text-xs text-muted-foreground mt-1 mb-5">
                  Cód: {p.code}
                </span>
                <a
                  href={`https://wa.me/5551997859061?text=Olá,+tenho+interesse+na+peça+${p.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground px-4 py-2.5 rounded text-sm font-bold uppercase tracking-wide hover:brightness-110 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar WhatsApp
                </a>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground mb-2">
                Nenhuma peça encontrada{search ? ` para "${search}"` : ""}
              </p>
              <p className="text-sm text-muted-foreground">
                Não encontrou o que procura? <a
                  href={`https://wa.me/5551997859061?text=Olá,+estou+procurando+a+peça+${search || brandFilter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-bold"
                >Consulte pelo WhatsApp</a>
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5551997859061?text=Olá,+gostaria+de+consultar+uma+peça+que+não+encontrei+no+site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-8 py-3.5 rounded font-heading font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
          >
            <MessageCircle className="w-4 h-4" />
            Não encontrou? Consulte pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
