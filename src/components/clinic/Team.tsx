import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { siteContent } from "@/content/siteContent";

export default function Team() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="equipo" className="section-padding bg-secondary/55">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan">{siteContent.team.badge}</span>
          <h2 className="heading-display mt-4 text-3xl text-foreground md:text-4xl">{siteContent.team.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{siteContent.team.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {siteContent.team.members.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className={`group text-center transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className={`team-card-motion ${isVisible ? "is-visible" : ""}`} style={{ animationDelay: `${index * 220}ms` }}>
                <div className="doctor-portrait-shell relative mb-6 aspect-[3/4] overflow-hidden rounded-[2rem]">
                  <img
                    src={siteContent.assets.team[index]}
                    alt={`Placeholder del equipo Dentatus ${index + 1}`}
                    className="doctor-portrait-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/78 via-transparent to-transparent opacity-25 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-cyan">{member.role}</p>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
