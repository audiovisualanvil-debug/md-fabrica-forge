import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const products = [
  { name: "Coroa Planetária", brand: "Caterpillar", code: "156-1930" },
  { name: "Eixo Curto 3C", brand: "JCB", code: "914/88101" },
  { name: "Semi-Eixo Completo", brand: "JCB", code: "914/60109" },
  { name: "Tampa CAT", brand: "Caterpillar", code: "1307027" },
  { name: "Garfo Longo", brand: "JCB", code: "914/86301" },
  { name: "Eixo Longo 960mm", brand: "JCB", code: "914/86204" },
  { name: "Articulador", brand: "JCB", code: "914/86203" },
  { name: "Eixo Curto", brand: "JCB", code: "914/86201" },
];

const ProductsSection = () => (
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <div
            key={p.code}
            className="bg-background border border-border rounded-lg p-5 flex flex-col hover:border-primary/50 transition-colors group"
          >
            <div className="w-full h-28 bg-secondary rounded flex items-center justify-center mb-4">
              <span className="font-heading text-3xl font-black text-muted-foreground/30 uppercase">
                {p.brand.slice(0, 3)}
              </span>
            </div>
            <span className="text-xs text-primary font-bold uppercase">{p.brand}</span>
            <h3 className="font-heading text-lg font-bold text-foreground mt-1">{p.name}</h3>
            <span className="text-xs text-muted-foreground mt-1 mb-4">
              Cód: {p.code}
            </span>
            <a
              href={`${WA_LINK}+—+Peça:+${p.name}+(${p.code})`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded text-sm font-bold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Consultar
            </a>
          </div>
        ))}
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

export default ProductsSection;
