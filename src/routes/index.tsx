import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, X, Mail, Shield, Clock, Sparkles, Star } from "lucide-react";
import heroBg from "../assets/honey-hero.jpg";
import stackImg from "../assets/honey-stack.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Website Forever | Tu web lista en 7 días" },
      {
        name: "description",
        content:
          "Diseñamos webs personalizadas que convierten visitantes en clientes. Sin plantillas, sin complicaciones y listas en 7 días.",
      },
      { property: "og:title", content: "Website Forever | Tu web lista en 7 días" },
      {
        property: "og:description",
        content: "Webs personalizadas que convierten visitantes en clientes. Listas en 7 días.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Announcement bar */}
      <div className="bg-brand-deep px-4 py-2.5 text-center text-xs font-medium tracking-wide text-brand-cream">
        Solo tomamos <strong className="font-bold text-brand-gold-light">4 proyectos</strong> por mes · Quedan 2 cupos
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="font-display text-lg font-extrabold tracking-tighter">
            WEBSITE<span className="text-brand-gold">.</span>FOREVER
          </span>
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Quiero mi web
          </a>
        </div>
      </header>

      {/* HERO — promesa */}
      <section className="relative px-6 pb-20 pt-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[60%] bg-gradient-to-b from-brand-cream to-transparent" />
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-deep">
            Para negocios que ya venden, pero no se ven
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
            Tu negocio merece una web que{" "}
            <span className="relative inline-block">
              <span className="relative z-10">venda por ti</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-brand-gold/35" />
            </span>{" "}
            mientras duermes
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Diseñamos y lanzamos tu sitio en <strong className="text-foreground">7 días</strong>: hecho a mano, rápido,
            impecable en el móvil y pensado para una sola cosa — que te contacten.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <a
              href="#contacto"
              className="group inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-brand-gold/25 transition-transform hover:scale-[1.03]"
            >
              Reservar mi cupo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-xs text-muted-foreground">Sin pagos por adelantado · Respuesta en 24h</span>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-border shadow-2xl shadow-brand-deep/10">
          <img
            src={heroBg}
            alt="Web personalizada mostrada en una laptop sobre un escritorio con luz cálida"
            className="w-full object-cover"
            width={1600}
            height={1008}
          />
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-brand-cream px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-balance">
            Si algo de esto te suena, no es tu culpa
          </h2>
          <ul className="mt-10 space-y-4">
            {[
              "Tienes clientes, pero cuando te buscan en Google no encuentran nada serio.",
              "Tu web actual se ve bien en la computadora y se rompe en el celular.",
              "Pagaste por una plantilla que se parece a la de todo el mundo.",
              "Te da pena mandar tu link, así que terminas mandando el Instagram.",
              "Nadie te escribe desde la web, aunque la gente entre.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed sm:text-base"
              >
                <X className="mt-0.5 size-5 shrink-0 text-destructive/70" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-base font-semibold text-brand-deep">
            El problema no es tu negocio. Es que tu presencia online no está a la altura de lo que ya haces bien.
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section id="solucion" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">La solución</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Una web hecha a mano, diseñada para convertir
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Nada de constructores genéricos. Escribimos el código, diseñamos cada sección y ordenamos el mensaje para
              que el visitante haga exactamente lo que quieres: escribirte, agendar o comprar.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Diseño 100% original para tu marca",
                "Carga en menos de 2 segundos",
                "Perfecta en móvil, tablet y escritorio",
                "Textos escritos para vender, no para rellenar",
                "Optimizada para Google desde el día uno",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm sm:text-base">
                  <Check className="size-5 shrink-0 text-brand-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-brand-deep/10">
            <img
              src={stackImg}
              alt="Ejemplos de webs personalizadas en laptop, tablet y móvil"
              className="w-full object-cover"
              loading="lazy"
              width={1200}
              height={912}
            />
          </Reveal>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-brand-cream px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Cómo funciona</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              De la idea a tu web en 3 pasos
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <StepCard number="01" title="Escuchamos" description="30 minutos para entender tu negocio, tu cliente y tu meta." />
            <StepCard number="02" title="Diseñamos" description="Te mostramos la propuesta y ajustamos hasta que digas 'es esta'." />
            <StepCard number="03" title="Lanzamos" description="Publicamos tu web con dominio, hosting y todo funcionando." />
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="precios" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Todo lo que recibes</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Un solo pago. Todo incluido.
            </h2>
          </div>

          <Reveal className="overflow-hidden rounded-3xl border border-brand-gold/40 bg-card shadow-2xl shadow-brand-deep/10">
            <div className="bg-brand-deep px-8 py-5 text-center text-sm font-semibold uppercase tracking-widest text-brand-cream">
              Paquete Premium
            </div>
            <div className="p-8 sm:p-10">
              <ul className="space-y-4">
                {[
                  ["Web personalizada de 5 secciones", "$700"],
                  ["Textos de venta escritos por nosotros", "$250"],
                  ["Optimización móvil y velocidad", "$180"],
                  ["SEO local + Google", "$150"],
                  ["Dominio y hosting el primer año", "$120"],
                  ["Formulario de contacto y WhatsApp", "$90"],
                  ["30 días de soporte post-lanzamiento", "$150"],
                ].map(([item, value]) => (
                  <li key={item} className="flex items-center justify-between gap-4 border-b border-border pb-3 text-sm sm:text-base">
                    <span className="flex items-center gap-3">
                      <Check className="size-5 shrink-0 text-brand-gold" />
                      {item}
                    </span>
                    <span className="shrink-0 text-muted-foreground line-through">{value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Valor real: <span className="line-through">$1,640</span>
                </p>
                <div className="mt-2 flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-extrabold tracking-tight text-brand-gold sm:text-6xl">$899</span>
                  <span className="text-muted-foreground">/proyecto</span>
                </div>
                <a
                  href="#contacto"
                  className="mt-8 block w-full rounded-full bg-brand-gold py-4 text-center text-base font-bold text-primary-foreground shadow-lg shadow-brand-gold/25 transition-transform hover:scale-[1.02]"
                >
                  Reservar mi cupo
                </a>
                <p className="mt-3 text-xs text-muted-foreground">Puedes pagar en 2 partes: 50% al inicio, 50% al lanzar.</p>
              </div>
            </div>
          </Reveal>

          {/* Garantía */}
          <Reveal delay={120} className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-border bg-brand-cream p-8 text-center sm:flex-row sm:text-left">
            <Shield className="size-10 shrink-0 text-brand-gold" />
            <div>
              <h3 className="text-lg font-bold">Garantía "o te gusta, o no pagas"</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Si después de ver la primera propuesta de diseño no te convence, cancelas y te devolvemos el 100%. Sin
                preguntas incómodas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-brand-cream px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Lo que dicen quienes ya la tienen
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Testimonial
              quote="Pasé de mandar mi Instagram a mandar mi web. En el primer mes me llegaron 9 clientes nuevos."
              name="Carla M."
              role="Estudio de uñas"
            />
            <Testimonial
              quote="En una semana estaba online. Se ve mejor que la de negocios mucho más grandes que el mío."
              name="Diego R."
              role="Taller mecánico"
              delay={120}
            />
            <Testimonial
              quote="Lo que más valoro es que escribieron los textos. Yo nunca hubiera sabido qué poner."
              name="Ana P."
              role="Consultora"
              delay={240}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            <Faq
              q="¿Cuánto tarda realmente?"
              a="7 días hábiles desde que recibimos tus fotos y la información de tu negocio. Si algo se retrasa, te avisamos antes."
            />
            <Faq
              q="¿Y si ya tengo una web?"
              a="Mejor. La rediseñamos y migramos tu contenido sin perder tu posicionamiento actual."
            />
            <Faq
              q="¿Necesito saber de tecnología?"
              a="No. Nos encargamos del dominio, el hosting y la publicación. Tú solo apruebas el diseño."
            />
            <Faq
              q="¿Puedo hacer cambios después?"
              a="Sí. Tienes 30 días de soporte incluido y después puedes pedir cambios cuando los necesites."
            />
            <Faq
              q="¿Qué pasa después del primer año?"
              a="Dominio y hosting cuestan alrededor de $120 al año. Puedes renovarlo con nosotros o por tu cuenta."
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="bg-brand-deep px-6 py-24 text-brand-cream">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Sparkles className="mx-auto size-8 text-brand-gold-light" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            Tu competencia ya está online. Tú puedes verte mejor.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-brand-cream/80">
            Escríbenos hoy y en menos de 24 horas te enviamos un plan claro para tu proyecto. Sin compromiso.
          </p>
          <a
            href="mailto:hello@websiteforever.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-105 sm:text-lg"
          >
            <Mail className="size-5" />
            hello@websiteforever.com
          </a>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-brand-cream/70">
            <Clock className="size-3.5" />
            Quedan 2 cupos este mes
          </p>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-lg font-extrabold tracking-tighter">
            WEBSITE<span className="text-brand-gold">.</span>FOREVER
          </span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Website Forever. Hecho a mano.
          </p>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <span className="mb-4 block font-mono text-3xl font-bold text-brand-gold/50">{number}</span>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function Testimonial({ quote, name, role, delay = 0 }: { quote: string; name: string; role: string; delay?: number }) {
  return (
    <Reveal as="figure" delay={delay} className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-brand-gold text-brand-gold" />
        ))}
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed">"{quote}"</blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold">{name}</span>
        <span className="block text-xs text-muted-foreground">{role}</span>
      </figcaption>
    </Reveal>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <Reveal>
    <details className="group rounded-2xl border border-border bg-card p-5 open:bg-brand-cream">
      <summary className="cursor-pointer list-none text-sm font-semibold sm:text-base">{q}</summary>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
    </details>
    </Reveal>
  );
}
