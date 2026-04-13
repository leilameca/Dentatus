import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, Search, Wrench, HeartHandshake, ShieldCheck } from "lucide-react";
import { siteContent } from "@/content/siteContent";

const stepIcons = [ClipboardCheck, Search, Wrench, ShieldCheck, HeartHandshake];

export default function SmileJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolledInto = viewportHeight - rect.top;
      const totalScroll = sectionHeight + viewportHeight;
      const nextProgress = Math.max(0, Math.min(1, scrolledInto / totalScroll));
      setProgress(nextProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experiencia" ref={sectionRef} className="section-padding relative overflow-hidden bg-navy-gradient">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-cyan blur-[100px]" />
      </div>

      <div className="container-narrow relative">
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan">{siteContent.experience.badge}</span>
          <h2 className="heading-display mt-4 text-3xl text-primary-foreground md:text-4xl">
            {siteContent.experience.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/92">
            Queremos que cada visita se sienta clara, acompañada y bien cuidada, desde la primera consulta hasta el
            seguimiento.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-cyan/20 md:left-1/2 md:-translate-x-px">
            <div
              className="w-full bg-gradient-to-b from-cyan to-cyan-light transition-all duration-100 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="space-y-16">
            {siteContent.experience.steps.map((step, index) => {
              const Icon = stepIcons[index];
              const stepThreshold = index / siteContent.experience.steps.length;
              const isActive = progress > stepThreshold + 0.05;

              return (
                <div
                  key={step.title}
                  className={`relative flex items-start gap-6 transition-all duration-700 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-100"}`}
                >
                  <div className={`hidden flex-1 md:block ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">{step.description}</p>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                        isActive
                          ? "border-cyan bg-cyan/18 shadow-[0_0_20px_hsl(var(--cyan)/0.28)]"
                          : "border-cyan/32 bg-navy-deep"
                      }`}
                    >
                      <Icon className={`h-5 w-5 transition-colors duration-500 ${isActive ? "text-cyan" : "text-cyan/62"}`} />
                    </div>
                  </div>

                  <div className="flex-1 md:hidden">
                    <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">{step.description}</p>
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
