import { ArrowRight, MapPin, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import { siteContent } from "@/content/siteContent";

const highlightIcons = [ShieldCheck, Sparkles, HeartHandshake];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={siteContent.assets.hero}
          alt="Imagen principal referencial para la clínica dental Dentatus"
          className="h-full w-full object-cover"
          width={1600}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(92deg, rgba(20, 31, 33, 0.94) 0%, rgba(20, 31, 33, 0.82) 40%, rgba(20, 31, 33, 0.38) 70%, rgba(20, 31, 33, 0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(36, 56, 59, 0.22) 0%, rgba(36, 56, 59, 0.1) 38%, rgba(31, 42, 44, 0.9) 100%)",
          }}
        />
      </div>

      <div className="relative container-narrow pb-16 pt-28 sm:pb-20 sm:pt-32 md:pt-36 lg:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(320px,0.7fr)]">
          <div className="max-w-[760px]">
            <div
              className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/22 bg-[rgba(20,31,33,0.52)] px-4 py-2 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.65)] backdrop-blur-md opacity-0 animate-fade-up"
              style={{ animationDelay: "0.18s" }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan">
                {siteContent.hero.eyebrow}
              </span>
              <span className="hidden h-3 w-px bg-white/20 sm:block" />
              <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-foreground">
                <MapPin className="h-3.5 w-3.5 text-cyan" />
                {siteContent.hero.locationLabel}
              </span>
            </div>

            <h1
              className="heading-display mb-5 text-[clamp(2.65rem,6vw,5rem)] leading-[0.96] tracking-[-0.045em] text-primary-foreground opacity-0 animate-fade-up sm:mb-6"
              style={{ animationDelay: "0.34s" }}
            >
              <span className="block">{siteContent.hero.title}</span>
            </h1>

            <p
              className="mb-8 max-w-[40rem] text-base leading-relaxed text-primary-foreground/90 opacity-0 animate-fade-up sm:text-lg md:mb-10 md:text-xl"
              style={{ animationDelay: "0.48s" }}
            >
              {siteContent.hero.description}
            </p>

            <div
              className="flex flex-col gap-3 opacity-0 animate-fade-up sm:flex-row sm:gap-4"
              style={{ animationDelay: "0.6s" }}
            >
              <a href={siteContent.hero.primaryCta.href} className="btn-primary-clinic w-full sm:w-auto">
                {siteContent.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={siteContent.hero.secondaryCta.href} className="btn-outline-clinic w-full sm:w-auto">
                {siteContent.hero.secondaryCta.label}
              </a>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:hidden">
              {siteContent.hero.highlights.map((item, index) => {
                const Icon = highlightIcons[index];

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/20 bg-[rgba(14,22,24,0.74)] p-4 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.82)] backdrop-blur-md"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/18">
                      <Icon className="h-4 w-4 text-cyan" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="glass-card hidden rounded-[2rem] border-white/14 bg-[rgba(20,31,33,0.46)] p-6 text-primary-foreground shadow-[0_26px_55px_-36px_rgba(0,0,0,0.7)] lg:block opacity-0 animate-fade-up"
            style={{ animationDelay: "0.72s" }}
          >
            <p className="text-2xl leading-relaxed text-white/92">
              En Dentatus nos dedicamos a cuidar tu sonrisa con amor, compromiso y excelencia.
            </p>
            <div className="mt-7 space-y-4">
              {siteContent.hero.highlights.map((item, index) => {
                const Icon = highlightIcons[index];

                return (
                  <div key={item.title} className="rounded-2xl border border-white/14 bg-[rgba(255,255,255,0.12)] p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/18">
                        <Icon className="h-5 w-5 text-cyan" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-white">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
