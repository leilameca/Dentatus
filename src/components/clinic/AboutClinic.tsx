import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { siteContent } from "@/content/siteContent";

const icons = [HeartHandshake, ShieldCheck, Sparkles];

export default function AboutClinic() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="section-padding">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative">
            <div
              className={`absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-cyan/15 via-transparent to-navy/10 blur-2xl transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-[0_30px_70px_-36px_hsl(var(--navy)/0.42)]">
              <img
                src={siteContent.assets.contact}
                alt="Imagen institucional de Dentatus"
                className={`h-[420px] w-full object-cover transition-transform duration-1000 lg:h-[540px] ${
                  isVisible ? "scale-100" : "scale-105"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/88 via-navy-deep/44 to-transparent px-6 pb-7 pt-16 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Imagen de referencia</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/74">{siteContent.about.note}</p>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan">
                {siteContent.about.badge}
              </span>
            </div>

            <h2 className="heading-display mt-6 text-3xl text-foreground md:text-4xl">
              {siteContent.about.title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {siteContent.about.description}
            </p>

            <div className="mt-8 grid gap-4">
              {siteContent.about.pillars.map((pillar, index) => {
                const Icon = icons[index];

                return (
                  <article
                    key={pillar.title}
                    className="glass-card rounded-[1.5rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10">
                        <Icon className="h-5 w-5 text-navy" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
