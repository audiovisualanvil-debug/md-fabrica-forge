import { Cog, Wrench, Truck, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const services = [
  {
    icon: Cog,
    title: "Fabricação de Peças",
    desc: "Produção própria com controle de qualidade total em cada etapa do processo.",
  },
  {
    icon: Wrench,
    title: "Peças de Reposição",
    desc: "Estoque amplo para as principais marcas do mercado com pronta entrega.",
  },
  {
    icon: Truck,
    title: "Entrega Nacional",
    desc: "Enviamos para todo o Brasil por transportes convencionais com rastreamento.",
  },
];

const ServicesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
          Soluções
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mt-3 text-foreground">
          Conheça Nossos Serviços
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground uppercase mb-3">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {s.desc}
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded text-sm font-bold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Consultar
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
