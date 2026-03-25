import caterpillarLogo from "@/assets/brands/caterpillar.webp";
import jcbLogo from "@/assets/brands/jcb.png";
import caseLogo from "@/assets/brands/case.png";
import komatsuLogo from "@/assets/brands/komatsu.png";
import newHollandLogo from "@/assets/brands/new-holland.png";
import volvoLogo from "@/assets/brands/volvo.png";
import hyundaiLogo from "@/assets/brands/hyundai.png";
import doosanLogo from "@/assets/brands/doosan.png";
import sanyLogo from "@/assets/brands/sany.png";
import bobcatLogo from "@/assets/brands/bobcat.png";
import yanmarLogo from "@/assets/brands/yanmar.png";
import clarkMichiganLogo from "@/assets/brands/clark-michigan.png";

export const brands = [
  { name: "Case", logo: caseLogo },
  { name: "Caterpillar", logo: caterpillarLogo },
  { name: "JCB", logo: jcbLogo },
  { name: "New Holland", logo: newHollandLogo },
  { name: "Volvo", logo: volvoLogo },
  { name: "Komatsu", logo: komatsuLogo },
  { name: "Hyundai", logo: hyundaiLogo },
  { name: "Doosan", logo: doosanLogo },
  { name: "Sany", logo: sanyLogo },
  { name: "Clark Michigan", logo: clarkMichiganLogo },
  { name: "Bobcat", logo: bobcatLogo },
  { name: "Yanmar", logo: yanmarLogo },
];

interface BrandsSectionProps {
  onBrandClick?: (brand: string) => void;
}

const BrandsSection = ({ onBrandClick }: BrandsSectionProps) => {
  const handleClick = (brandName: string) => {
    if (onBrandClick) {
      onBrandClick(brandName);
    }
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="marcas" className="py-12 md:py-16 px-4 md:px-8 bg-card">
      <div className="container mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
          Marcas que atendemos
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mt-3 mb-3 text-foreground">
          Mais de 12 marcas
        </h2>
        <p className="text-sm text-muted-foreground mb-10">Clique em uma marca para ver as peças disponíveis</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {brands.map((b) => (
            <button
              key={b.name}
              onClick={() => handleClick(b.name.toUpperCase())}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg border transition-all duration-300 cursor-pointer group hover:scale-[1.03]"
              style={{
                backgroundColor: "#1a1a1a",
                borderColor: "#2a2a2a",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#CC1414"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a"; }}
            >
              <div className="h-14 w-full flex items-center justify-center">
                {b.logo ? (
                  <img
                    src={b.logo}
                    alt={`Logo ${b.name}`}
                    className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <span className="text-2xl font-black text-muted-foreground/50 font-heading uppercase">
                    {b.name.split(" ").map(w => w[0]).join("")}
                  </span>
                )}
              </div>
              <span className="text-xs text-foreground/80 uppercase tracking-wider font-medium">
                {b.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
