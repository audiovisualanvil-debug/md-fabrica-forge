import { useState } from "react";
import { MessageCircle, Settings, Search } from "lucide-react";
import product2105946 from "@/assets/product-2105946.png";

const products = [
  { name: "ENGRENAGEM", brand: "CATERPILLAR", code: "2105934", image: null },
  { name: "SEMI-EIXO", brand: "CATERPILLAR", code: "2105946", image: product2105946 },
  { name: "SEMI-EIXO", brand: "JCB", code: "914/60109" },
  { name: "CUBO", brand: "JCB", code: "458/20501" },
  { name: "COROA", brand: "CASE", code: "100561A1" },
  { name: "SEMI-EIXO", brand: "CASE", code: "144461A1" },
];

const ProductsSection = () => {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="produtos" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
            Catálogo
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mt-3 text-foreground">
            Peças Mais Vendidas
          </h2>
        </div>

        <div className="flex gap-2 max-w-xl mx-auto mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Digite o código da peça ex: 914/60109"
              className="w-full bg-secondary border border-border rounded pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded font-heading font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors text-sm">
            Buscar
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <div
              key={p.code}
              className="rounded-lg flex flex-col transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              style={{
                backgroundColor: "#1a1a1a",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#2a2a2a",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#CC1414"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a"; }}
            >
              <div className="w-full h-36 rounded-t-lg flex items-center justify-center" style={{ backgroundColor: "#111111" }}>
                <Settings className="w-14 h-14 text-muted-foreground/20" />
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
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Nenhuma peça encontrada com o código "<span className="text-foreground">{search}</span>"
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.mdfabrica.com.br/produtos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-8 py-3.5 rounded font-heading font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
