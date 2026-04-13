import { Instagram, MapPin, Phone } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container-narrow py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src={siteContent.assets.logo}
                alt={`Logo de ${siteContent.brand.name}`}
                className="h-12 w-auto max-w-[140px] object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-semibold">{siteContent.brand.name}</span>
                <span className="text-[10px] uppercase tracking-[0.24em] text-cyan">
                  {siteContent.brand.descriptor}
                </span>
              </div>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-primary-foreground/58">
              {siteContent.brand.name} — {siteContent.brand.descriptor}
              <br />
              {siteContent.brand.city}, {siteContent.brand.country}
            </p>

            <div className="mt-5 space-y-3 text-sm text-primary-foreground/72">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                <span>{siteContent.brand.shortAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-cyan" />
                <a href={siteContent.brand.phoneHref} className="transition-colors hover:text-white">
                  {siteContent.brand.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 flex-shrink-0 text-cyan" />
                <a
                  href={siteContent.brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {siteContent.brand.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground/86">Enlaces rápidos</h4>
            <ul className="mt-4 space-y-3">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-primary-foreground/52 transition-colors hover:text-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground/86">Horarios</h4>
            <div className="mt-4 space-y-3 text-sm text-primary-foreground/52">
              {siteContent.hours.schedule.map((slot) => (
                <p key={slot.days}>
                  {slot.days}: {slot.hours}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-primary-foreground/38">
          © {new Date().getFullYear()} {siteContent.brand.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
