import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { siteContent } from "@/content/siteContent";

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonios" className="section-padding bg-secondary/55">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan">
            {siteContent.testimonials.badge}
          </span>
          <h2 className="heading-display mt-4 text-3xl text-foreground md:text-4xl">
            {siteContent.testimonials.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {siteContent.testimonials.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.testimonials.items.map((item) => (
            <article
              key={item.label}
              className="glass-card group relative rounded-[1.8rem] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-cyan/20" />
              <span className="inline-flex rounded-full bg-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
                {item.label}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
