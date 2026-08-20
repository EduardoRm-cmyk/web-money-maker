import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Mail, Shield, Clock, Sparkles } from "lucide-react";

const WHATSAPP =
  "https://wa.me/5491138844100?text=Hola%20Golden.WEBSITE%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20servicio";
import heroBg from "../assets/honey-hero.jpg";
import stackImg from "../assets/honey-stack.jpg";
import { Reveal } from "@/components/Reveal";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm6.14 13.83c-.25.71-1.46 1.34-2.03 1.42-.54.08-1.08.18-3.37-.7-2.84-1.1-4.67-3.88-4.81-4.07-.14-.18-1.15-1.54-1.15-2.93 0-1.39.72-2.06.98-2.35.25-.28.54-.35.72-.35.18 0 .36 0 .52.01.17.01.39-.06.61.47.22.53.72 1.87.79 2.01.07.14.01.29-.04.43-.05.14-.09.25-.18.38-.09.14-.19.29-.27.39-.09.1-.18.21-.08.41.1.2.46.76.99 1.23.68.61 1.25.8 1.51.89.18.06.31-.04.4-.13.1-.1.42-.49.53-.66.11-.17.22-.14.37-.09.15.06.96.45 1.13.54.17.08.28.13.32.2.05.08.03.47-.22 1.18z" />
    </svg>
  );
}

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
        &nbsp;<span className="font-bold text-brand-gold-light">50% OFF</span>&nbsp;· hasta el 31 de Agosto
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="font-display text-lg font-extrabold tracking-tighter">
            <span className="text-gold-shine">Golden</span><span className="text-brand-gold">.</span><span className="text-brand-deep">WEBSITE</span>
          </span>
          
        </div>
      </header>

      {/* HERO — promesa */}
      <section className="relative px-6 pb-20 pt-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[60%] bg-gradient-to-b from-brand-cream to-transparent" />
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sub inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-deep">
            PARA NEGOCIOS QUE YA EMPEZARON, PERO NO VENDEN
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
            Tu negocio merece una web que{" "}
            <span className="relative inline-block">
              <span className="relative z-10">venda por ti</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-brand-gold/35" />
            </span>{" "}
            <span className="inline-block border-b-[4px] border-red-600 pb-0.5">mientras duermes</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg whitespace-pre-line">
            Diseño personalizado, subdominio <span className="text-foreground">gratis</span> de por vida y Marketing Digital que <span className="inline-block border-b-[3px] border-red-600 pb-0.5">triplica tus ventas</span>.{"\n\n\n"}
            Tu propio Website en menos de <span className="text-foreground">7 días</span>: rápido, impecable en cualquier dispositivo y pensado para una sola cosa — vender y que te contacten.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-brand-gold/25 transition-transform hover:scale-[1.03]"
            >
              Solicitar web
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-xs text-muted-foreground">· Respuesta en menos de 24h</span>
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
              "❌ Tu negocio online no funciona como debería.",
              "❌ No tienes buenos diseños y ganchos.",
              "❌ No tienes reconocimiento en internet.",
              "❌ Tienes pocos interesados.",
              "❌ Nadie entra a tu web, o no te compran y ni te escriben.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed sm:text-base"
              >
                {/* Removed X icon as per list text containing ❌ */}
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
            <span className="font-sub text-xs font-semibold uppercase tracking-widest text-brand-gold">La solución</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Una web profesional, diseñada para vender y crecer tu comunidad de clientes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              &nbsp;Escribo el código, diseño cada sección y ordeno el marketing impecable para que los visitantes hagan exactamente lo que quieres: escribirte, agendar o comprar.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Diseño 100% original y personalizado para tu marca",
                "Carga rápido tu página web",
                "Textos de marketing (Copywriting) perfectos para vender, atrae cualquier cliente",
                "Dominio propio o un subdominio gratis permanente",
                "Atención integral y cambios en cuestión de minutos impulsados por IA",
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
            <span className="font-sub text-xs font-semibold uppercase tracking-widest text-brand-gold">Cómo funciona</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              De la idea a tu web en 3 pasos
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <StepCard number="01" title="Escucho" description="Entiendo tu negocio, tu cliente y tu meta." />
            <StepCard number="02" title="Diseño" description="Te muestro la propuesta y lo ajusto hasta que sea perfecta para ti." />
            <StepCard number="03" title="¡Listo!" description="Publicamos tu web con dominio, hosting y todo funcionando." />
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="precios" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="font-sub text-xs font-semibold uppercase tracking-widest text-brand-gold">Todo lo que recibes</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              3&nbsp; &nbsp;Planes para ti
            </h2>
          </div>

          <Reveal className="overflow-hidden rounded-3xl border border-brand-gold/40 bg-card shadow-2xl shadow-brand-deep/10">
            <div className="bg-brand-deep px-8 py-5 text-center text-sm font-semibold uppercase tracking-widest text-brand-cream">
              GOLDEN WEBSITE
            </div>
            <div className="p-8 sm:p-10">
              <ul className="space-y-4">
                {[
                  ["Diseño y estructura Web personalizados", ""],
                  ["Textos de venta irresistibles estilo Copywrite", ""],
                  ["Catálogo de productos con personalidad", ""],
                  ["Velocidad y eficiencia en la web de tu negocio", ""],
                  ["Subdominio y hosting totalmente gratis de Netlify", ""],
                  ["Formulario de contacto, email Marketing con Workflows y WhatsApp ", ""],
                  ["30 días de soporte y modificaciones post-lanzamiento", ""],
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
                  Antes: <span className="line-through">$159,99</span>
                </p>
                <div className="mt-2 flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-extrabold tracking-tight text-brand-gold sm:text-6xl">$79,99</span>
                  <span className="text-muted-foreground">/proyecto</span>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full rounded-full bg-brand-gold py-4 text-center text-base font-bold text-primary-foreground shadow-lg shadow-brand-gold/25 transition-transform hover:scale-[1.02]"
                >
                  Ordenar
                </a>
                <p className="mt-3 text-xs text-muted-foreground">50% hasta el 31 de Agosto.</p>
              </div>
            </div>
          </Reveal>

          {/* Garantía */}
          <Reveal delay={120} className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-border bg-brand-cream p-8 text-center sm:flex-row sm:text-left">
            <Shield className="size-10 shrink-0 text-brand-gold" />
            <div>
              <h3 className="text-lg font-bold">Garantía "o te gusta, o no pagas"</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Si antes de lanzarlo no te convence la propuesta de diseño, cancelas y te devuelvo el 100%. Sin preguntas incómodas.
              </p>
            </div>
          </Reveal>
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
              a="No. Me encargo del dominio, el hosting y la publicación. Tú solo apruebas el diseño para tu negocio."
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
            Tu competencia ya está online. Tú puedes ser mucho mejor.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-brand-cream/80">
            Escríbeme hoy y en menos de 24 horas te envío un plan claro para tu proyecto. Sin compromiso.
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
            Consigue ventas ahora mismo
          </p>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-lg font-extrabold tracking-tighter">
            <span className="text-gold-shine">Golden</span><span className="text-brand-gold">.</span><span className="text-brand-deep">WEBSITE</span>
          </span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}&nbsp;Golden Website.
          </p>
        </div>
      </footer>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbeme por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="size-7" />
      </a>
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
