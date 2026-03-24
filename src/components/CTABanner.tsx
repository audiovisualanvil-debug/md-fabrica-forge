import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const CTABanner = () => (
  <section className="bg-primary py-16 md:py-20 px-4">
    <div className="container mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-primary-foreground mb-4 leading-tight">
        Sua Máquina Parada<br />Não Pode Esperar
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-8">
        Fale agora com nossa equipe técnica
      </p>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded font-heading font-bold text-lg uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        Chamar no WhatsApp Agora
      </a>
    </div>
  </section>
);

export default CTABanner;
