import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const brandTextClass = scrolled ? "text-foreground" : "text-primary-foreground";
  const linkClass = scrolled
    ? "text-foreground/75 hover:text-foreground"
    : "text-primary-foreground/78 hover:text-primary-foreground";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/92 py-2 shadow-[0_18px_45px_-30px_hsl(var(--navy)/0.32)] backdrop-blur-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-narrow flex items-center justify-between gap-3">
        <a
          href="#inicio"
          className="min-w-0 flex flex-1 items-center gap-3 pr-2 sm:gap-4"
          aria-label={`${siteContent.brand.name} ${siteContent.brand.descriptor}`}
        >
          <img
            src={siteContent.assets.logo}
            alt={`Logo de ${siteContent.brand.name}`}
            className="h-14 w-auto max-w-[162px] object-contain shrink-0 sm:h-16 sm:max-w-[190px] md:h-20 md:max-w-[240px]"
          />
          <div className="min-w-0 flex flex-col leading-tight">
            <span className={`font-display truncate text-sm font-semibold tracking-tight ${brandTextClass} sm:text-lg md:text-xl`}>
              {siteContent.brand.name}
            </span>
            <span className="max-w-[150px] truncate text-[8px] uppercase tracking-[0.18em] text-cyan sm:max-w-none sm:text-[10px] sm:tracking-[0.24em] md:text-[11px]">
              {siteContent.brand.descriptor}
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {siteContent.navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${linkClass}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contacto" className="btn-primary-clinic text-sm !px-5 !py-2.5">
            Agendar cita
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className={`lg:hidden shrink-0 rounded-full p-2.5 transition-colors ${
            scrolled ? "text-foreground hover:bg-foreground/5" : "text-primary-foreground hover:bg-white/10"
          }`}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep/95 backdrop-blur-xl">
          <nav className="container-narrow flex flex-col gap-4 py-6">
            {siteContent.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-base font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn-primary-clinic mt-2 text-center" onClick={() => setMobileOpen(false)}>
              Agendar cita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
