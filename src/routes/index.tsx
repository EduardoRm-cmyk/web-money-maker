import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Smartphone, Zap, ArrowRight, Check, Mail } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import portfolioPreview from "../assets/portfolio-preview.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Website Forever | Custom Websites" },
      { name: "description", content: "Premium custom websites that convert visitors into customers. Clean design, fast performance, and lasting results." },
      { property: "og:title", content: "Website Forever | Custom Websites" },
      { property: "og:description", content: "Premium custom websites that convert visitors into customers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <span className="font-display text-xl font-extrabold tracking-tighter">
            WEBSITE<span className="text-brand-gold">.</span>FOREVER
          </span>
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Contactar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
        {/* Background image — half screen with gradient fade */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:bg-gradient-to-r md:from-background md:via-background/70 md:to-transparent z-10" />
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover object-center hero-mask md:hero-mask-desktop opacity-70"
            width={1920}
            height={1088}
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-center md:min-h-[80vh] md:items-center md:text-center">
          <span className="mb-4 inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Websites Personalizados
          </span>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            Tu web,{" "}
            <span className="bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold bg-clip-text text-transparent text-glow">
              para siempre
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Diseñamos sitios que no solo se ven premium, sino que convierten visitantes en clientes. Sin plantillas. Sin complicaciones.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-brand-gold/20 transition-transform hover:scale-105"
            >
              Empezar proyecto
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 px-8 py-4 text-base font-semibold backdrop-blur-sm transition-colors hover:bg-muted"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">(01) Servicios</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Todo lo que necesitas para vender online
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Monitor className="size-6" />}
              title="Diseño a Medida"
              description="Nada de plantillas genéricas. Cada sitio es diseñado único para tu marca."
            />
            <ServiceCard
              icon={<Smartphone className="size-6" />}
              title="100% Responsivo"
              description="Perfecto en móvil, tablet y escritorio. Tus clientes navegan desde cualquier lado."
            />
            <ServiceCard
              icon={<Zap className="size-6" />}
              title="Velocidad Premium"
              description="Carga instantánea. Google y tus visitantes lo agradecen."
            />
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card ring-1 ring-white/5">
            <img
              src={portfolioPreview}
              alt="Ejemplo de website premium en laptop"
              className="w-full object-cover"
              loading="lazy"
              width={800}
              height={1008}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">(02) Proceso</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              De la idea a la web en 3 pasos
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <StepCard number="01" title="Escuchamos" description="Entendemos tu negocio, tus metas y lo que necesitas transmitir." />
            <StepCard number="02" title="Diseñamos" description="Creamos propuestas visuales y refinamos hasta que sea perfecto." />
            <StepCard number="03" title="Lanzamos" description="Publicamos tu web, optimizada y lista para convertir visitantes." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">(03) Inversión</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Un plan, todo incluido
            </h2>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl shadow-black/40 sm:p-12">
            <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Paquete Premium</div>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight text-brand-gold sm:text-6xl">$899</span>
              <span className="text-muted-foreground">/proyecto</span>
            </div>
            <ul className="mb-10 space-y-4">
              {[
                "Diseño personalizado de 5 secciones",
                "Optimización para móvil y Google",
                "Dominio y Hosting (1 año)",
                "Formulario de contacto integrado",
                "Soporte post-lanzamiento",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                  <Check className="size-5 shrink-0 text-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="block w-full rounded-full bg-brand-gold py-4 text-center text-base font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Reservar mi cupo
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contacto" className="px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            ¿Listo para tener una web que venda?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            Escríbenos y en menos de 24 horas te responderemos con un plan claro para tu proyecto.
          </p>
          <a
            href="mailto:hello@websiteforever.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-muted px-8 py-4 text-lg font-semibold transition-colors hover:bg-muted/80"
          >
            <Mail className="size-5 text-brand-gold" />
            hello@websiteforever.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-lg font-extrabold tracking-tighter">
            WEBSITE<span className="text-brand-gold">.</span>FOREVER
          </span>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Website Forever. Hecho a mano.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-brand-gold/30">
      <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-8">
      <span className="mb-4 block font-mono text-3xl font-bold text-brand-gold/30">{number}</span>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
