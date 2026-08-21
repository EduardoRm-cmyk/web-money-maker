import { createFileRoute } from "@tanstack/react-router";
import { Check, Lock, ShieldCheck } from "lucide-react";

const PAYMENT_LINKS = {
  "golden-website": {
    mercadopago: "https://mpago.li/191tqip",
  },
  "golden-plus": {
    mercadopago: "https://mpago.li/191tqip",
  },
} as const;

const PLANS = {
  "golden-website": {
    name: "Golden Website",
    price: "$79,99",
    before: "$159,99",
    features: [
      "Web totalmente personalizada",
      "Textos de venta irresistibles estilo Copywrite",
      "Catálogo llamativo de productos + pago directo API",
      "Dominio y hosting incluído por un año",
      "Formulario de contacto y WhatsApp",
      "30 días de soporte y modificaciones post-lanzamiento",
    ],
  },
  "golden-plus": {
    name: "Sofisticated Luxury Web",
    price: "$129,99",
    before: "$259,99",
    features: [
      "Plan Golden Website +",
      "Diseño con animaciones inmersivas",
      "Automatización de Email Marketing (bienvenida, carritos y ofertas)",
      "Automatización de procesos internos Workflow (actualización de inventario, alertas de pedidos y facturación inmediata)",
      "Optimización SEO avanzada para destacar en buscadores Google",
      "Panel de analíticas de visitas y contactos",
      "60 días de soporte y modificaciones post-lanzamiento",
    ],
  },
} as const;

type PlanKey = keyof typeof PLANS;

export const Route = createFileRoute("/checkout")({
  component: Checkout,
  validateSearch: (search: Record<string, unknown>): { plan: PlanKey } => {
    const plan = search.plan;
    return { plan: plan === "golden-plus" ? "golden-plus" : "golden-website" };
  },
  head: () => ({
    meta: [
      { title: "Checkout | Golden.WEBSITE" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Checkout() {
  const { plan: planKey } = Route.useSearch();
  const plan = PLANS[planKey];
  const links = PAYMENT_LINKS[planKey];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-brand-gold/25 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <a href="/" className="font-display text-lg tracking-tight">
            <span className="text-gold-shine font-extrabold">Golden</span>
            <span className="text-brand-gold font-extrabold">.</span>
            <span className="ml-0.5 align-middle text-sm font-medium tracking-[0.2em] text-brand-black/80">
              WEBSITE
            </span>
          </a>
          <a href="/" className="text-xs font-medium text-muted-foreground hover:text-foreground">
            ← Volver al sitio
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="text-center">
          <span className="font-sub text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Checkout
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Estás a un paso de tu nueva web
          </h1>
          <p className="mt-3 text-muted-foreground">
            Elige tu método de pago preferido para completar el pedido del plan{" "}
            <span className="font-semibold text-foreground">{plan.name}</span>.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Resumen del pedido */}
          <div className="golden-border overflow-hidden rounded-3xl shadow-xl shadow-brand-deep/10">
            <div className="rounded-[calc(1.5rem-2px)] bg-card p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">{plan.name}</h2>
                <span className="rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold text-brand-deep">
                  50% OFF
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">Antes</span>
                  <span className="text-sm text-muted-foreground line-through">{plan.before}</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-base font-semibold">Total hoy</span>
                  <span className="text-gold-shine text-3xl font-extrabold">{plan.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Métodos de pago */}
          <div className="flex flex-col gap-4">
            <a
              href={links.mercadopago}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#009EE3] px-6 py-5 text-base font-bold text-white shadow-lg shadow-[#009EE3]/25 transition-transform hover:scale-[1.02]"
            >
              Pagar con Mercado Pago
            </a>
            <p className="-mt-2 text-center text-xs text-muted-foreground">
              Tarjeta, transferencia, efectivo o cuotas — sin necesidad de cuenta
            </p>

            <a
              href={links.paypal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#003087] px-6 py-5 text-base font-bold text-white shadow-lg shadow-[#003087]/25 transition-transform hover:scale-[1.02]"
            >
              Pagar con PayPal
            </a>
            <p className="-mt-2 text-center text-xs text-muted-foreground">
              Con cuenta PayPal o tarjeta, sin necesidad de registrarte
            </p>

            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-border bg-brand-cream p-5">
              <ShieldCheck className="mt-0.5 size-6 shrink-0 text-brand-gold" />
              <div>
                <p className="text-sm font-semibold">Garantía "o te gusta, o no pagas"</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Si antes de lanzarlo no te convence la propuesta de diseño, cancelas y te devuelvo el 100%.
                </p>
              </div>
            </div>

            <p className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="size-3.5" />
              Pago procesado de forma segura por Mercado Pago o PayPal
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
