import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5551997859061?text=Olá!+Quero+cotar+uma+peça.+Pode+confirmar+compatibilidade+e+prazo?";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary border-t border-primary/80 px-4 py-3 safe-area-bottom">
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-background text-foreground py-3 rounded font-heading font-bold text-sm uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
    >
      <MessageCircle className="w-5 h-5" />
      Pedir Orçamento Agora
    </a>
  </div>
);

export default MobileCTA;
