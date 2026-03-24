import logoMd from "@/assets/logo-md.png";

const Footer = () => (
  <footer className="bg-background border-t border-border py-12 px-4">
    <div className="container mx-auto grid md:grid-cols-3 gap-8">
      <div>
        <img src={logoMd} alt="MD Fábrica" className="h-12 mb-3 brightness-0 invert" />
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          Fabricação e comércio de peças para máquinas pesadas. 22 anos de
          tradição no polo metalmecânico de Canoas/RS.
        </p>
      </div>

      <div>
        <h4 className="font-heading font-bold text-foreground uppercase mb-3 text-sm tracking-wide">
          Links Rápidos
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Início", "Marcas", "Produtos", "Sobre", "Contato"].map((l) => (
            <li key={l}>
              <button
                onClick={() => {
                  const id = l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-primary transition-colors"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-heading font-bold text-foreground uppercase mb-3 text-sm tracking-wide">
          Marcas Atendidas
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Case · Caterpillar · JCB · New Holland · Volvo · Komatsu · Hyundai ·
          Doosan · Sany · Clark Michigan · Bobcat · Yanmar
        </p>
      </div>
    </div>

    <div className="container mx-auto mt-8 pt-6 border-t border-border text-center">
      <p className="text-xs text-muted-foreground">
        © 2025 MD Indústria e Comércio de Peças LTDA — CNPJ 06.023.040/0001-35
      </p>
    </div>
  </footer>
);

export default Footer;
