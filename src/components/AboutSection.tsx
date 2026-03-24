import { Factory, Package, Truck, Award, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const diffs = [
  { icon: Factory, title: "Fabricação Própria", desc: "Controle total de qualidade" },
  { icon: Package, title: "Estoque Amplo", desc: "Pronta entrega dos principais modelos" },
  { icon: Truck, title: "Entrega Rápida", desc: "Para todo o Brasil" },
  { icon: Award, title: "22 Anos", desc: "Tradição e confiança no setor" },
];

const AboutSection = () => (
  <section id="sobre" className="section-padding">
    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
          Quem somos
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mt-3 mb-6 text-foreground">
          Quem é a MD Fábrica
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A MD Fábrica nasceu em 2003 em Canoas, no maior polo metalmecânico do
          Rio Grande do Sul. Em 22 anos nos tornamos referência regional na
          fabricação de peças para máquinas pesadas.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Nossa linha de produção própria garante controle total de qualidade —
          cada peça passa por testes em bancada especializada antes de chegar até
          você.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-heading font-bold uppercase tracking-wide hover:bg-primary/90 transition"
        >
          <MessageCircle className="w-4 h-4" />
          Fale com Nossa Equipe
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {diffs.map((d) => (
          <div
            key={d.title}
            className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
          >
            <d.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-heading text-lg font-bold text-foreground uppercase">
              {d.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
