import { MessageCircle, ArrowRight, Truck, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

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
        <div className="flex items-center gap-2 mt-4">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Respondemos em até 2 horas em dias úteis</span>
        </div>
      </div>

      <div className="animate-fade-up [animation-delay:200ms] opacity-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <span className="font-heading text-4xl md:text-5xl font-black text-primary">22+</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-2">Anos de Mercado</span>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <span className="font-heading text-4xl md:text-5xl font-black text-primary">12+</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-2">Marcas Atendidas</span>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <span className="font-heading text-4xl md:text-5xl font-black text-primary">100%</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-2">Fabricação Própria</span>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <Truck className="w-10 h-10 md:w-12 md:h-12 text-primary mb-1" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-2">Entrega para todo o Brasil</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
