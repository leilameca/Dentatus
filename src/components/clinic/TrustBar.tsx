import { HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { siteContent } from "@/content/siteContent";

const icons = [HeartHandshake, Stethoscope, ShieldCheck];

export default function TrustBar() {
  const { ref, isVisible } = useScrollAnimation({ once: false });

  return (
    <section className="relative -mt-14 z-10">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="glass-card rounded-[2rem] p-5 sm:p-6 md:p-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">Dentatus</p>
              <h2 className="heading-display mt-3 max-w-2xl text-2xl text-foreground md:text-3xl">
                {siteContent.trustBar.title}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-foreground/72">
              Una presencia clínica sobria, humana y profesional, adaptada a la nueva marca sin perder la calidad
              visual de la plantilla original.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {siteContent.trustBar.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-border/70 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10">
                    <Icon className="h-5 w-5 text-navy" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
