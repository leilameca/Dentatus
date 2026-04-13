import { useMemo, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import { siteContent } from "@/content/siteContent";
import {
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  Heart,
  Scan,
  Smile,
  Wrench,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Image as ImageIcon,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Procedure = (typeof siteContent.procedures.items)[number] & {
  image: string;
  icon: LucideIcon;
};

const icons: LucideIcon[] = [
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  Heart,
  Scan,
  Smile,
  Wrench,
  Stethoscope,
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  const isMobile = useIsMobile();
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);

  const procedures = useMemo(
    () =>
      siteContent.procedures.items.map((item, index) => ({
        ...item,
        image: siteContent.assets.procedures[index],
        icon: icons[index],
      })),
    [],
  );

  return (
    <>
      <section id="procedimientos" className="section-padding bg-secondary/60">
        <div
          ref={ref}
          className={`container-narrow transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan">
              {siteContent.procedures.badge}
            </span>
            <h2
              className={`heading-display services-heading mt-4 text-3xl text-foreground md:text-4xl ${
                isMobile ? `services-heading-mobile ${isVisible ? "is-active" : ""}` : "services-heading-desktop"
              }`}
            >
              <span className="services-heading-line">Tratamientos pensados para</span>
              <span className="services-heading-line">
                restaurar y cuidar tu <span className="services-heading-highlight">sonrisa</span>
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/78">{siteContent.procedures.description}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {procedures.map((procedure, index) => (
              <article
                key={procedure.title}
                className="group overflow-hidden rounded-[1.6rem] border border-border/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-34px_hsl(var(--navy)/0.4)]"
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={procedure.image}
                    alt={`Imagen de referencia para ${procedure.title}`}
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/72 via-navy-deep/8 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/88 backdrop-blur-sm shadow-lg">
                    <procedure.icon className="h-5 w-5 text-navy" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">{procedure.title}</h3>
                  <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-foreground/76">
                    {procedure.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="mt-4 h-auto px-0 py-0 text-navy hover:bg-transparent hover:text-navy-light"
                    onClick={() => setSelectedProcedure(procedure)}
                  >
                    Consultar
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={Boolean(selectedProcedure)} onOpenChange={(open) => !open && setSelectedProcedure(null)}>
        {selectedProcedure ? (
          <DialogContent className="w-[min(94vw,1080px)] max-w-5xl overflow-hidden border-border/70 bg-background/95 p-0 backdrop-blur-xl">
            <div className="max-h-[88vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProcedure.image}
                  alt={`Imagen de apoyo para ${selectedProcedure.title}`}
                  className="h-60 w-full object-cover md:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/56 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/16 px-4 py-1.5 backdrop-blur-sm">
                    <selectedProcedure.icon className="h-4 w-4 text-cyan" />
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/94">
                      {siteContent.procedures.dialogTitle}
                    </span>
                  </div>

                  <DialogTitle className="heading-display mt-4 text-3xl text-white md:text-5xl">
                    {selectedProcedure.title}
                  </DialogTitle>
                  <DialogDescription className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                    {selectedProcedure.description}
                  </DialogDescription>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-8 grid gap-4 md:grid-cols-3">
                  <div className="glass-card rounded-2xl p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan">
                      <Clock3 className="h-4 w-4 text-navy" />
                      Duración
                    </div>
                    <p className="text-sm font-semibold text-foreground">{selectedProcedure.duration}</p>
                  </div>

                  <div className="glass-card rounded-2xl p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan">
                      <CheckCircle2 className="h-4 w-4 text-navy" />
                      Seguimiento
                    </div>
                    <p className="text-sm font-semibold text-foreground">{selectedProcedure.followUp}</p>
                  </div>

                  <div className="glass-card rounded-2xl p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan">
                      <ImageIcon className="h-4 w-4 text-navy" />
                      Imagen de apoyo
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      Esta imagen se cambiará cuando el cliente envíe la fotografía real del tratamiento.
                    </p>
                  </div>
                </div>

                <Tabs defaultValue="overview" className="w-full" key={selectedProcedure.title}>
                  <TabsList className="h-auto w-full justify-start gap-2 overflow-x-auto rounded-none bg-transparent p-0">
                    <TabsTrigger
                      value="overview"
                      className="rounded-full border border-border bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-none"
                    >
                      Resumen
                    </TabsTrigger>
                    <TabsTrigger
                      value="candidate"
                      className="rounded-full border border-border bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-none"
                    >
                      Orientación
                    </TabsTrigger>
                    <TabsTrigger
                      value="image"
                      className="rounded-full border border-border bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-none"
                    >
                      Imagen
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
                      <div className="space-y-4">
                        <p className="text-base leading-relaxed text-muted-foreground">{selectedProcedure.detail}</p>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          Este contenido puede ampliarse cuando el cliente envíe más detalles clínicos del
                          procedimiento.
                        </p>
                      </div>

                      <div className="glass-card rounded-2xl p-5">
                        <h3 className="text-sm font-semibold text-foreground">Lo esencial de este procedimiento</h3>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy" />
                            <p className="text-sm leading-relaxed text-muted-foreground">{selectedProcedure.description}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy" />
                            <p className="text-sm leading-relaxed text-muted-foreground">{selectedProcedure.followUp}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy" />
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              Aquí también se podrá sumar información adicional cuando el cliente comparta el material
                              final.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="candidate" className="mt-6">
                    <div className="glass-card rounded-2xl p-5 md:p-6">
                      <h3 className="text-base font-semibold text-foreground">Para quién puede ser útil</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        {selectedProcedure.audience}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="image" className="mt-6">
                    <figure className="glass-card overflow-hidden rounded-2xl">
                      <img
                        src={selectedProcedure.image}
                        alt={`Imagen de referencia para ${selectedProcedure.title}`}
                        className="h-72 w-full object-cover"
                        loading="lazy"
                      />
                      <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                        Esta imagen se cambiará cuando el cliente envíe la fotografía real del procedimiento.
                      </figcaption>
                    </figure>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
