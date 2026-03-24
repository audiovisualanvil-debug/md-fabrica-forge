import { Zap, Phone, Truck } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground py-2 px-4 text-sm font-medium">
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs md:text-sm">
      <span className="flex items-center gap-1.5">
        <Zap className="w-3.5 h-3.5" /> Segunda a Sexta 7h–18h
      </span>
      <span className="hidden md:inline">|</span>
      <span className="flex items-center gap-1.5">
        <Phone className="w-3.5 h-3.5" /> (51) 3428-3012
      </span>
      <span className="hidden md:inline">|</span>
      <span className="flex items-center gap-1.5">
        <Truck className="w-3.5 h-3.5" /> Entregamos para todo o Brasil
      </span>
    </div>
  </div>
);

export default TopBar;
