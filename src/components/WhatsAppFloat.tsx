import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5551997859061?text=Olá,+vim+pelo+site+e+gostaria+de+um+orçamento";

const WhatsAppFloat = () => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition whatsapp-pulse"
  >
    <MessageCircle className="w-7 h-7 text-whatsapp-foreground" />
  </a>
);

export default WhatsAppFloat;
