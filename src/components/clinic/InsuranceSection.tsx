import { Image as ImageIcon, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { siteContent } from "@/content/siteContent";

const humanCaptions = [
  "Esta imagen se cambiará cuando el cliente envíe la fotografía real del caso.",
  "Aquí podremos mostrar un resultado real con una explicación breve y profesional.",
  "Cuando el cliente envíe las imágenes finales, solo habrá que reemplazarlas y mantener este mismo diseño.",
];

export default function InsuranceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="antes-despues" className="section-padding">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan">
            {siteContent.beforeAfter.badge}
          </span>
          <h2 className="heading-display mt-4 text-3xl text-foreground md:text-4xl">
            {siteContent.beforeAfter.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/72">
            Esta sección queda lista para que luego incorpores fotos reales de tratamientos y resultados de Dentatus
            con una presentación clara, sobria y confiable.
          </p>
        </div>

        <div className="grid items-start gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="glass-card rounded-[2rem] p-7 md:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan/12">
              <ShieldCheck className="h-7 w-7 text-navy" />
            </div>
            <h3 className="heading-display text-2xl text-foreground">
              Un espacio pensado para mostrar resultados con claridad
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              La idea es que aquí puedas presentar resultados reales con una apariencia limpia, humana y profesional.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-border/70 bg-background/80 p-5">
              <div className="flex items-start gap-3">
                <ImageIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Cuando el cliente envíe las fotos reales, solo habrá que sustituir las imágenes y mantener esta
                  misma composición.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {siteContent.beforeAfter.cases.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.8rem] border border-border/70 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-34px_hsl(var(--navy)/0.38)] ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-t-[1.8rem]">
                  <img
                    src={siteContent.assets.cases[index]}
                    alt={`Imagen de referencia para ${item.title}`}
                    className={`w-full object-cover ${index === 0 ? "h-[300px]" : "h-[250px]"}`}
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{humanCaptions[index]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
