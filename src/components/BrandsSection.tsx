import caterpillarLogo from "@/assets/brands/caterpillar.png";
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

const brands = [
  { name: "Case", logo: caseLogo },
  { name: "Caterpillar", logo: caterpillarLogo },
  { name: "JCB", logo: jcbLogo },
  { name: "New Holland", logo: newHollandLogo },
  { name: "Volvo", logo: volvoLogo },
  { name: "Komatsu", logo: komatsuLogo },
  { name: "Hyundai", logo: hyundaiLogo },
  { name: "Doosan", logo: doosanLogo },
  { name: "Sany", logo: sanyLogo },
  { name: "Clark Michigan", logo: null },
  { name: "Bobcat", logo: bobcatLogo },
  { name: "Yanmar", logo: yanmarLogo },
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {brands.map((b) => (
          <div
            key={b.name}
            className="flex flex-col items-center justify-center gap-3 p-5 border border-border rounded-lg bg-background/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default group"
          >
            {b.logo ? (
              <img
                src={b.logo}
                alt={`Logo ${b.name}`}
                className="h-10 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            ) : (
              <span className="h-10 flex items-center text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wide">
                {b.name}
              </span>
            )}
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider font-medium">
              {b.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
