import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoMd from "@/assets/logo-md.png";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const navItems = ["Início", "Marcas", "Produtos", "Sobre", "Contato"];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex flex-col">
          <span className="font-heading text-2xl md:text-3xl font-black tracking-tight text-foreground leading-none">
            MD <span className="text-primary">FÁBRICA</span>
          </span>
          <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase">
            Peças para Máquinas Pesadas
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-heading font-bold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            ORÇAMENTO GRÁTIS
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left py-3 text-sm font-medium text-muted-foreground hover:text-primary uppercase tracking-wide border-b border-border last:border-0"
            >
              {item}
            </button>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded font-heading font-bold text-sm uppercase"
          >
            <MessageCircle className="w-4 h-4" />
            ORÇAMENTO GRÁTIS
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
