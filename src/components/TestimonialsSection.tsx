import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Máquina parada é prejuízo. A MD sempre resolve rápido — nunca me deixou na mão. Peça certa, preço justo e entrega no prazo.",
    author: "Ricardo M.",
    role: "Operador de Retroescavadeira",
    location: "Canoas/RS",
  },
  {
    text: "Peça chegou antes do prazo, qualidade igual à original. Melhor custo-benefício do RS.",
    author: "Carlos S.",
    role: "Mecânico de Escavadeiras",
    location: "Porto Alegre/RS",
  },
  {
    text: "20 anos comprando da MD Fábrica. Fabricação própria faz toda a diferença.",
    author: "André L.",
    role: "Empresa de Construção",
    location: "Gravataí/RS",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
          Depoimentos
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mt-3 text-foreground">
          O que Dizem Nossos Clientes
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <div>
              <span className="font-heading font-bold text-foreground">
                {t.author}
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t.role} · {t.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
