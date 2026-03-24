import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5551997859061"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-whatsapp hover:brightness-110 transition whatsapp-pulse"
    style={{
      width: 58,
      height: 58,
      boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
    }}
  >
    <MessageCircle className="w-7 h-7 text-whatsapp-foreground" />
  </a>
);

export default WhatsAppFloat;
