const steps = [
  { num: "01", title: "Fale Conosco", desc: "Entre em contato pelo WhatsApp ou formulário" },
  { num: "02", title: "Informe a Peça", desc: "Informe a marca, modelo e código da peça" },
  { num: "03", title: "Receba Rápido", desc: "Receba sua peça com entrega rápida" },
];

const HowItWorksSection = () => (
  <section className="py-14 md:py-20 px-4 md:px-8">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
          Simples e Rápido
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase mt-3 text-foreground">
          Como Funciona
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.num} className="text-center relative">
            <span className="font-heading text-6xl md:text-8xl font-black text-primary/15 leading-none">
              {s.num}
            </span>
            <h3 className="font-heading text-lg md:text-xl font-bold text-foreground uppercase -mt-4 mb-2">
              {s.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 -right-3 text-primary/30 text-3xl">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
