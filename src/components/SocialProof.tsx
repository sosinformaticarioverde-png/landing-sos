import { Store, MapPin, HeartHandshake, Star } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Empresa local",
    text: "Aqui em Rio Verde, perto de você.",
  },
  {
    icon: Store,
    title: "Loja física",
    text: "Endereço real no Centro da cidade.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Conversa clara, direta e sem enrolação.",
  },
  {
    icon: Star,
    title: "Nota 4,9 no Google",
    text: "Avaliações reais de clientes satisfeitos.",
  },
];

export function SocialProof() {
  return (
    <section className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-2xl font-bold text-brand-deep sm:text-3xl">
          Por que confiar na SOS Informática
        </h2>
        <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center shadow-soft sm:p-7"
            >
              <span className="bg-gold-gradient flex h-12 w-12 items-center justify-center rounded-xl shadow-gold">
                <Icon className="h-6 w-6 text-accent-foreground" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg">
                {title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}