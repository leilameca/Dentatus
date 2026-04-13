import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { siteContent } from "@/content/siteContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="section-padding">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan">{siteContent.faq.badge}</span>
            <h2 className="heading-display mt-4 text-3xl text-foreground md:text-4xl">{siteContent.faq.title}</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {siteContent.faq.items.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="glass-card rounded-[1.4rem] border-none px-6">
                <AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground transition-colors hover:text-cyan hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
