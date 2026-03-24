const brands = [
  "Case", "Caterpillar", "JCB", "New Holland", "Volvo",
  "Komatsu", "Hyundai", "Doosan", "Sany",
  "Clark Michigan", "Bobcat", "Yanmar",
];

const BrandsSection = () => (
  <section id="marcas" className="section-padding bg-card">
    <div className="container mx-auto text-center">
      <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
        Marcas que atendemos
      </span>
      <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mt-3 mb-10 text-foreground">
        Mais de 12 marcas
      </h2>
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {brands.map((b) => (
          <span
            key={b}
            className="px-5 py-2.5 border border-border rounded-md text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default uppercase tracking-wide"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
