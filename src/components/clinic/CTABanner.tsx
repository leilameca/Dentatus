import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { siteContent } from "@/content/siteContent";

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="bg-navy-gradient relative overflow-hidden rounded-[2.2rem] p-10 text-center md:p-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-cyan blur-[80px]" />
          </div>

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
              {siteContent.brand.descriptor}
            </p>
            <h2 className="heading-display mt-4 text-3xl text-white md:text-4xl lg:text-5xl">
              En Dentatus nos dedicamos a cuidar tu sonrisa con amor, compromiso y excelencia.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white md:text-lg">
              Agenda tu cita y recibe una atención profesional, cercana y alineada con el cuidado que tu salud bucal merece.
            </p>
            <a href="#contacto" className="btn-primary-clinic mt-8 text-base">
              Agendar cita
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
