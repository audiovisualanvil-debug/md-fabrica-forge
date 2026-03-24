import { useState, FormEvent } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="section-padding bg-card">
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

          {submitted ? (
            <div className="bg-background border border-border rounded-lg p-8 flex items-center justify-center">
              <p className="text-foreground font-heading text-xl font-bold uppercase text-center">
                ✅ Mensagem enviada!<br />
                <span className="text-sm font-normal text-muted-foreground normal-case">
                  Retornaremos em breve.
                </span>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-background border border-border rounded-lg p-6 space-y-4"
            >
              {[
                { name: "nome", placeholder: "Seu nome", type: "text" },
                { name: "empresa", placeholder: "Empresa", type: "text" },
                { name: "telefone", placeholder: "Telefone", type: "tel" },
                { name: "marca", placeholder: "Marca da máquina", type: "text" },
              ].map((f) => (
                <input
                  key={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              ))}
              <textarea
                placeholder="Mensagem"
                rows={4}
                required
                className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded font-heading font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
