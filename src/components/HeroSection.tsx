import { MessageCircle, ArrowRight, Factory, Globe, Award, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const stats = [
  { icon: Award, label: "Anos de Mercado", value: "22+" },
  { icon: Wrench, label: "Marcas Atendidas", value: "12+" },
  { icon: Globe, label: "Entrega Nacional", value: "Brasil" },
  { icon: Factory, label: "Fabricação", value: "Própria" },
];

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-[90vh] flex items-center overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-background/85" />
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, hsl(0 0% 100% / 0.03) 40px, hsl(0 0% 100% / 0.03) 41px),
        repeating-linear-gradient(90deg, transparent, transparent 40px, hsl(0 0% 100% / 0.03) 40px, hsl(0 0% 100% / 0.03) 41px)`
    }} />

    <div className="relative container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-up">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] mb-6">
          Fábrica de Peças para{" "}
          <span className="text-primary">Máquinas Pesadas</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          22 anos fabricando peças de reposição para retroescavadeiras,
          escavadeiras e pás carregadeiras. Canoas/RS — entregamos para todo o Brasil.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3.5 rounded font-heading font-bold uppercase tracking-wide hover:brightness-110 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <a
            href="https://www.mdfabrica.com.br/produtos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-6 py-3.5 rounded font-heading font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
          >
            Ver Catálogo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="animate-fade-up [animation-delay:200ms] opacity-0">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card border border-border rounded-lg p-5 flex flex-col items-center text-center hover:border-primary/50 transition-colors"
            >
              <s.icon className="w-7 h-7 text-primary mb-2" />
              <span className="font-heading text-2xl md:text-3xl font-black text-foreground">
                {s.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
