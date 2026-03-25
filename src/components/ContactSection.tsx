import { useState, FormEvent } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, Zap } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-16 md:py-20 px-4 md:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
            Fale Conosco
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mt-3 text-foreground">
            Contato
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-5">
            {[
              { icon: MapPin, text: "Rua Quaraí, 38 – Niterói, Canoas/RS" },
              { icon: Phone, text: "(51) 3428-3012" },
              { icon: MessageCircle, text: "(51) 99785-9061" },
              { icon: Mail, text: "comercial@mdfabrica.com.br" },
              { icon: Clock, text: "Segunda a Sexta, 7h às 18h" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-background border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-heading font-bold text-sm uppercase tracking-wide">
                Exclusivo
              </span>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-black text-foreground mb-2">
              Peças que saem antes de chegar ao site.
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Cadastre-se e seja o primeiro a saber.
            </p>

            {submitted ? (
              <div className="py-6 text-center">
                <p className="text-foreground font-heading text-xl font-bold uppercase">
                  ✅ Cadastro recebido!
                </p>
                <span className="text-sm text-muted-foreground">
                  Você será avisado em primeira mão.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Seu WhatsApp"
                  required
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded font-heading font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Quero ser avisado
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10">
          <iframe
            title="Localização MD Fábrica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.2!2d-51.1812!3d-29.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197050d11da3bb%3A0x4f6e5f1b4e3a2c8d!2sRua+Quara%C3%AD%2C+38+-+Niter%C3%B3i%2C+Canoas+-+RS%2C+92120-420!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "4px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
