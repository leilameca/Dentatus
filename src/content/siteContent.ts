import dentatusLogo from "@/assets/dentatus-logo.png";
import heroClinic from "@/assets/hero-clinic.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import doctorOne from "@/assets/doctor-1.jpg";
import doctorTwo from "@/assets/doctor-2.jpg";
import contourCrown from "@/assets/Full-Contour-Zirconia-Crown-1.jpg";
import reconstruccion from "@/assets/reconstruccion.webp";
import rehabilitacion from "@/assets/rehabilitacion.webp";
import restrucuturacionDental from "@/assets/restrucuturaciondental.png";
import diagnosticoDental from "@/assets/diagnostico-odontologico-clave-tratamiento-ideal.png";
import limpiezaDental from "@/assets/limpieza-dental-takahashi-health-group.jpg";
import sonrisaDigital from "@/assets/Diseño-de-sonrisa-digital--300x141.jpg";
import blanqueamientoDental from "@/assets/que-es-blanqueamiento-dental-1200x630.original.jpg";
import prevencionDental from "@/assets/prevencion-dental.jpg";
import esteticaSmile from "@/assets/estetica5.jpg";

const whatsappNumber = "18498589889";
const whatsappMessage = "Hola, me gustaría agendar una cita en Dentatus.";

export const siteContent = {
  brand: {
    name: "Dentatus",
    institutionalName: "Dentatus_SFM",
    descriptor: "Centro de Especialidades Odontológicas",
    city: "San Francisco de Macorís",
    country: "República Dominicana",
    instagramHandle: "@dentatussfm",
    instagramUrl: "https://www.instagram.com/dentatussfm/",
    phoneDisplay: "849-858-9889",
    phoneHref: "tel:+18498589889",
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    address:
      "Ave. Presidente Antonio Guzmán Fernández, entrada a la Urb. Caperuza II, Garden Plaza, local L15 y L18",
    shortAddress: "Garden Plaza, locales L15 y L18",
    mapQuery: "18.813826659725844,-70.44768863229132",
    hashtags: ["#dentistry", "#implants"],
  },
  seo: {
    title: "Dentatus | Clínica Dental en San Francisco de Macorís",
    description:
      "Dentatus es una clínica dental en San Francisco de Macorís enfocada en atención profesional, procedimientos odontológicos, restauración dental y cuidado integral de tu sonrisa.",
    ogImage: heroClinic,
  },
  assets: {
    logo: dentatusLogo,
    favicon: "/dentatus/dentatus-logo.png",
    hero: heroClinic,
    contact: clinicInterior,
    team: [doctorPortrait, doctorOne, doctorTwo],
    cases: [restrucuturacionDental, contourCrown, rehabilitacion],
    procedures: [
      diagnosticoDental,
      contourCrown,
      reconstruccion,
      restrucuturacionDental,
      limpiezaDental,
      sonrisaDigital,
      blanqueamientoDental,
      prevencionDental,
    ],
  },
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Procedimientos", href: "#procedimientos" },
    { label: "Antes y Después", href: "#antes-despues" },
    { label: "Horarios", href: "#horarios" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    eyebrow: "Centro de Especialidades Odontológicas",
    title: "Tu sonrisa en manos de profesionales",
    description:
      "En Dentatus te ofrecemos atención odontológica con compromiso, precisión y calidez humana, en un espacio diseñado para cuidar tu salud bucal con excelencia.",
    locationLabel: "San Francisco de Macorís, República Dominicana",
    primaryCta: { label: "Agendar cita", href: "#contacto" },
    secondaryCta: { label: "Ver procedimientos", href: "#procedimientos" },
    highlights: [
      {
        title: "Atención especializada",
        description: "Evaluación responsable y acompañamiento cercano desde la primera consulta.",
      },
      {
        title: "Tecnología y precisión",
        description: "Procesos clínicos guiados con enfoque en restauración, función y estética.",
      },
      {
        title: "Compromiso con tu sonrisa",
        description: "Un equipo dedicado a cuidar tu salud bucal con claridad y calidez humana.",
      },
    ],
  },
  trustBar: {
    title: "Una clínica pensada para brindar confianza",
    items: [
      {
        title: "Atención personalizada",
        description: "Escuchamos tu caso y construimos una experiencia clínica clara y cercana.",
      },
      {
        title: "Profesionalismo clínico",
        description: "Cada procedimiento se aborda con criterio responsable, orden y precisión.",
      },
      {
        title: "Bienestar y confianza",
        description: "Priorizamos confort, seguimiento y una comunicación transparente.",
      },
    ],
  },
  about: {
    badge: "Nosotros",
    title: "Cuidamos tu sonrisa con amor, compromiso y excelencia",
    description:
      "En Dentatus trabajamos para ofrecer una experiencia odontológica profesional, cercana y confiable. Nuestro compromiso es brindar atención de calidad, acompañando a cada paciente con responsabilidad, calidez humana y enfoque en resultados duraderos.",
    note: "Estas imágenes se cambiarán cuando el cliente envíe las fotografías reales de la clínica.",
    pillars: [
      {
        title: "Atención personalizada",
        description: "Cada plan se ajusta a tu necesidad clínica, ritmo de tratamiento y expectativas.",
      },
      {
        title: "Profesionalismo clínico",
        description: "Cuidamos cada detalle del proceso para mantener una experiencia ordenada y confiable.",
      },
      {
        title: "Bienestar y confianza",
        description: "Queremos que te sientas acompañado durante toda tu atención odontológica.",
      },
    ],
  },
  procedures: {
    badge: "Procedimientos odontológicos",
    title: "Tratamientos pensados para restaurar, cuidar y acompañar tu sonrisa",
    description:
      "Por ahora estamos usando imágenes de apoyo. Se cambiarán cuando el cliente envíe las fotografías reales de Dentatus.",
    dialogTitle: "Más información",
    items: [
      {
        title: "Evaluación dental",
        description: "Valoración clínica inicial para conocer tu caso y definir el mejor plan de atención.",
        detail:
          "Ideal para iniciar cualquier tratamiento con una visión clara del estado general de tu salud bucal.",
        audience: "Pacientes que desean orientación profesional antes de iniciar un procedimiento.",
        duration: "Según valoración",
        followUp: "Plan de tratamiento y recomendaciones iniciales",
      },
      {
        title: "Resinas compuestas",
        description: "Restauraciones conservadoras que ayudan a devolver forma, función y estética dental.",
        detail:
          "Esta imagen y este contenido se pueden actualizar cuando el cliente envíe el material real del caso.",
        audience: "Pacientes con pequeñas fracturas, desgaste o necesidades estéticas localizadas.",
        duration: "1 cita o según el caso",
        followUp: "Control clínico y cuidados de higiene",
      },
      {
        title: "Incrustaciones dentales",
        description: "Soluciones restauradoras para reforzar dientes comprometidos con precisión clínica.",
        detail:
          "Puede complementarse con antes y después autorizados cuando la clínica comparta casos reales.",
        audience: "Casos que requieren reconstrucción parcial con buen ajuste funcional.",
        duration: "Según planificación",
        followUp: "Revisión de adaptación y función",
      },
      {
        title: "Restauración dental",
        description: "Enfoque orientado a recuperar estructura dental y estabilidad en la mordida.",
        detail:
          "Este bloque puede ampliarse cuando el cliente envíe la información definitiva del tratamiento.",
        audience: "Pacientes que necesitan devolver integridad a piezas afectadas.",
        duration: "Variable según complejidad",
        followUp: "Seguimiento de evolución y mantenimiento",
      },
      {
        title: "Limpieza y prevención",
        description: "Cuidado preventivo para mantener una boca sana y una sonrisa bien acompañada.",
        detail:
          "Espacio listo para ampliar con programas preventivos, controles y recomendaciones personalizadas.",
        audience: "Pacientes en seguimiento periódico o prevención general.",
        duration: "Consulta corta",
        followUp: "Recomendaciones de higiene y controles",
      },
      {
        title: "Estética de la sonrisa",
        description: "Tratamientos orientados a mejorar armonía dental con un criterio natural y profesional.",
        detail:
          "La clínica puede reemplazar este texto con su enfoque estético específico sin tocar la estructura.",
        audience: "Pacientes que buscan armonía visual sin perder naturalidad.",
        duration: "Según el plan propuesto",
        followUp: "Controles posteriores al tratamiento",
      },
      {
        title: "Implantes dentales",
        description: "Alternativas restauradoras para reemplazar piezas ausentes con enfoque integral.",
        detail:
          "Procedimiento destacado dentro del sitio por la presencia de esta línea en la comunicación de Dentatus.",
        audience: "Pacientes con ausencias dentales que requieren valoración especializada.",
        duration: "Por etapas clínicas",
        followUp: "Controles de integración y restauración",
      },
      {
        title: "Atención integral",
        description: "Acompañamiento odontológico coordinado para resolver necesidades funcionales y estéticas.",
        detail:
          "Puede transformarse fácilmente en una sección más específica si la clínica comparte nuevas especialidades.",
        audience: "Pacientes que necesitan orientación global o varios procedimientos combinados.",
        duration: "Según cada caso",
        followUp: "Plan organizado por fases",
      },
    ],
  },
  beforeAfter: {
    badge: "Antes y después",
    title: "Resultados que reflejan cuidado, precisión y restauración dental",
    description:
      "Por ahora estamos usando imágenes de apoyo. Se cambiarán cuando el cliente envíe los casos reales autorizados.",
    cases: [
      {
        title: "Caso de restauración posterior",
        caption: "Esta imagen se cambiará cuando el cliente envíe el caso real autorizado.",
      },
      {
        title: "Mejora funcional y estética",
        caption: "Aquí podremos colocar un antes y después real cuando el cliente comparta la fotografía final.",
      },
      {
        title: "Seguimiento del resultado final",
        caption: "La estructura quedará igual y solo se cambiará la imagen cuando llegue el material real.",
      },
    ],
  },
  team: {
    badge: "Equipo clínico",
    title: "Un equipo comprometido con tu salud bucal",
    description:
      "En Dentatus contamos con profesionales enfocados en brindar atención responsable, humana y de alta calidad, cuidando cada detalle de tu experiencia clínica.",
    members: [
      {
        name: "Nombre del profesional",
        role: "Especialidad / cargo",
        description: "Placeholder editable para añadir trayectoria, enfoque de atención o procedimientos destacados.",
      },
      {
        name: "Nombre del profesional",
        role: "Especialidad / cargo",
        description: "Sustituye esta tarjeta con la fotografía oficial y una breve presentación del equipo.",
      },
      {
        name: "Nombre del profesional",
        role: "Especialidad / cargo",
        description: "La estructura conserva la animación y el ritmo visual del sitio original para el equipo.",
      },
    ],
  },
  experience: {
    badge: "Nuestra atención",
    title: "Una atención clara, ordenada y humana",
    description:
      "Cuidamos cada etapa con orden, claridad y una atención cercana, pensada para que te sientas bien acompañado.",
    steps: [
      {
        title: "Consulta inicial",
        description: "Escuchamos tu motivo de visita, revisamos antecedentes y orientamos el siguiente paso.",
      },
      {
        title: "Valoración profesional",
        description: "Analizamos tu caso con criterio clínico para recomendar una atención adecuada.",
      },
      {
        title: "Plan de tratamiento",
        description: "Explicamos el procedimiento, el orden de trabajo y las recomendaciones de seguimiento.",
      },
      {
        title: "Atención clínica",
        description: "Realizamos cada etapa con precisión, comunicación clara y acompañamiento cercano.",
      },
      {
        title: "Seguimiento",
        description: "Mantenemos control y orientación para que tu evolución sea estable y bien cuidada.",
      },
    ],
  },
  hours: {
    badge: "Horarios de atención",
    title: "Agenda tu cita y recibe la atención que mereces",
    description:
      "Una sección destacada y fácil de leer para que la información clave también se vea impecable en móvil.",
    schedule: [
      {
        days: "Lunes, miércoles y viernes",
        hours: "9:00 a.m. – 7:00 p.m.",
      },
      {
        days: "Martes y jueves",
        hours: "9:00 a.m. – 6:00 p.m.",
      },
      {
        days: "Sábados",
        hours: "9:00 a.m. – 1:00 p.m.",
      },
    ],
    supportMessage: "Contamos con un equipo comprometido con tu salud bucal.",
  },
  testimonials: {
    badge: "Testimonios",
    title: "Espacios listos para historias reales de pacientes",
    description:
      "Para mantener credibilidad, dejamos esta sección preparada para reemplazarla con testimonios autorizados por la clínica.",
    items: [
      {
        label: "Testimonio 01",
        title: "Atención profesional y cercana",
        text: "Sustituye este texto por una opinión real de paciente aprobada para publicación.",
      },
      {
        label: "Testimonio 02",
        title: "Proceso claro y bien acompañado",
        text: "Ideal para compartir experiencias sobre restauración, prevención o seguimiento clínico.",
      },
      {
        label: "Testimonio 03",
        title: "Resultados con enfoque humano",
        text: "La estructura puede actualizarse con nombre, procedimiento y valoración real cuando esté disponible.",
      },
    ],
  },
  faq: {
    badge: "Preguntas frecuentes",
    title: "Información útil antes de tu cita",
    items: [
      {
        question: "¿Cómo puedo agendar una cita en Dentatus?",
        answer:
          "Puedes comunicarte por teléfono, escribir por WhatsApp o usar el formulario de contacto de esta página.",
      },
      {
        question: "¿Dónde está ubicada la clínica?",
        answer:
          "Dentatus está en Ave. Presidente Antonio Guzmán Fernández, entrada a la Urb. Caperuza II, Garden Plaza, local L15 y L18, San Francisco de Macorís.",
      },
      {
        question: "¿Qué tipo de atención ofrece la clínica?",
        answer:
          "El sitio está estructurado para presentar procedimientos odontológicos, restauración dental, implantes, prevención y atención integral según la información disponible.",
      },
      {
        question: "¿Puedo consultar por un procedimiento específico?",
        answer:
          "Sí. Si deseas orientación sobre un procedimiento, puedes escribir a Dentatus y detallar tu caso para recibir información inicial.",
      },
      {
        question: "¿El formulario envía directamente a WhatsApp?",
        answer:
          "Sí. El formulario se utiliza como un puente rápido para abrir una conversación con los datos de contacto del paciente.",
      },
    ],
  },
  contact: {
    badge: "Contacto",
    title: "Agenda tu cita y recibe una atención profesional y cercana",
    description:
      "Todos los datos esenciales quedan centralizados y listos para futuras actualizaciones de mapas, correo o redes.",
    formLabels: {
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo",
      message: "Mensaje",
    },
  },
  footer: {
    quickLinks: [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Procedimientos", href: "#procedimientos" },
      { label: "Antes y después", href: "#antes-despues" },
      { label: "Horarios", href: "#horarios" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  decorative: {
    smileImage: esteticaSmile,
  },
} as const;

export type SiteContent = typeof siteContent;
