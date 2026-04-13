import { Clock3, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { siteContent } from "@/content/siteContent";

export default function TreatmentQuiz() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="horarios" className="section-padding">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="bg-navy-gradient relative overflow-hidden rounded-[2rem] p-8 text-primary-foreground md:p-10">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan blur-[90px]" />
              <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-cyan blur-[80px]" />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-1.5">
                <Clock3 className="h-4 w-4 text-cyan" />
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">
                  {siteContent.hours.badge}
                </span>
              </div>

              <h2 className="heading-display mt-5 text-3xl text-white md:text-4xl">{siteContent.hours.title}</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/95">
                {siteContent.hours.description}
              </p>

              <div className="mt-8 space-y-4">
                {siteContent.hours.schedule.map((slot) => (
                  <article
                    key={slot.days}
                    className="rounded-[1.5rem] border border-white/16 bg-white/12 p-5 backdrop-blur-sm"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan">{slot.days}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{slot.hours}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass-card rounded-[2rem] p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Mensaje de apoyo</p>
              <p className="mt-4 text-2xl leading-relaxed text-foreground">{siteContent.hours.supportMessage}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Agenda tu cita y recibe la atención que mereces en un entorno profesional, cercano y bien cuidado.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <a
                href={siteContent.brand.phoneHref}
                className="glass-card rounded-[1.6rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10">
                  <Phone className="h-5 w-5 text-navy" />
                </div>
                <h3 className="text-base font-semibold text-foreground">Llamar ahora</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{siteContent.brand.phoneDisplay}</p>
              </a>

              <a
                href="#contacto"
                className="glass-card rounded-[1.6rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10">
                  <MapPin className="h-5 w-5 text-navy" />
                </div>
                <h3 className="text-base font-semibold text-foreground">Ver contacto</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {siteContent.brand.city}, {siteContent.brand.country}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
