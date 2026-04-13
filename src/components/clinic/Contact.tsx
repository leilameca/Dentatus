import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { siteContent } from "@/content/siteContent";
import { ExternalLink, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";

const getGoogleMapsEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const message = [
      `Hola, soy ${formData.name}.`,
      formData.phone ? `Teléfono: ${formData.phone}.` : "",
      formData.email ? `Correo: ${formData.email}.` : "",
      formData.message ? `Mensaje: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    window.open(`https://wa.me/18498589889?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contacto" className="section-padding bg-secondary/65">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan">{siteContent.contact.badge}</span>
          <h2 className="heading-display mt-4 text-3xl text-foreground md:text-4xl">{siteContent.contact.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{siteContent.contact.description}</p>
        </div>

        <div className="grid items-start gap-12 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <div className="glass-card overflow-hidden rounded-[2rem]">
              <img
                src={siteContent.assets.contact}
                alt="Placeholder para fotografía de contacto o clínica Dentatus"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 md:p-7">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {siteContent.brand.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {siteContent.brand.descriptor}
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-cyan" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{siteContent.brand.city}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{siteContent.brand.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 flex-shrink-0 text-cyan" />
                    <a href={siteContent.brand.phoneHref} className="text-sm font-medium text-foreground transition-colors hover:text-cyan">
                      {siteContent.brand.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="h-4 w-4 flex-shrink-0 text-cyan" />
                    <a
                      href={siteContent.brand.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-foreground transition-colors hover:text-cyan"
                    >
                      {siteContent.brand.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={siteContent.brand.phoneHref}
                className="glass-card rounded-[1.5rem] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold text-foreground">Llamar ahora</p>
              </a>
              <a
                href={siteContent.brand.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-[1.5rem] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold text-foreground">Escribir por WhatsApp</p>
              </a>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(siteContent.brand.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-[1.5rem] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold text-foreground">Ver ubicación</p>
              </a>
            </div>

            <div className="glass-card rounded-[1.7rem] p-6">
              <h3 className="text-base font-semibold text-foreground">Canales listos para actualizar</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan" />
                  <span className="text-sm text-muted-foreground">Correo pendiente de confirmación</span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 text-cyan" />
                  <span className="text-sm text-muted-foreground">Instagram activo: {siteContent.brand.instagramHandle}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-8 space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{siteContent.contact.formLabels.name}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">{siteContent.contact.formLabels.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-cyan/40"
                    placeholder="809-000-0000"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">{siteContent.contact.formLabels.email}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-cyan/40"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{siteContent.contact.formLabels.message}</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder="Cuéntanos sobre el procedimiento o la orientación que necesitas."
                />
              </div>
              <button type="submit" className="btn-primary-clinic w-full">
                <Send className="h-4 w-4" />
                Enviar mensaje
              </button>
            </form>

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <div className="flex items-center justify-between gap-4 px-6 pt-6">
                <div>
                  <h3 className="text-base font-semibold text-foreground">Ubicación</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{siteContent.brand.city}, República Dominicana</p>
                </div>
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(siteContent.brand.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-navy transition-colors hover:bg-navy/10"
                >
                  Abrir mapa
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="p-6">
                <div className="overflow-hidden rounded-[1.4rem] border border-border/60 bg-background/80">
                  <iframe
                    title={`Mapa interactivo de ${siteContent.brand.name}`}
                    src={getGoogleMapsEmbedUrl(siteContent.brand.mapQuery)}
                    className="h-[300px] w-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
