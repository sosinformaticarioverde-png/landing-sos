import { Wrench } from "lucide-react";

const servicos = [
  "Conserto de notebooks",
  "Assistência técnica",
  "Manutenção de computadores",
  "Formatação",
  "Manutenção preventiva",
  "Upgrade de SSD",
  "Upgrade de memória",
  "Diagnóstico de equipamentos",
];

const marcas = [
  "Apple",
  "Dell",
  "Lenovo",
  "Acer",
  "ASUS",
  "HP",
  "Samsung",
  "Positivo",
  "Avell",
];

export function Services() {
  return (
    <section className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
            <Wrench className="h-4 w-4" /> O que resolvemos
          </span>
          <h2 className="mt-4 text-2xl font-bold text-brand-deep sm:text-3xl">
            Serviços de informática em Rio Verde
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Do conserto de notebooks à manutenção de computadores, cuidamos do
            seu equipamento com diagnóstico claro e atendimento direto.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {servicos.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-soft"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gold">
            Marcas que atendemos
          </h3>
          <p className="mx-auto mt-4 flex max-w-xl flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-base font-semibold text-foreground">
            {marcas.map((m, i) => (
              <span key={m} className="inline-flex items-center gap-x-2.5">
                {i > 0 && (
                  <span aria-hidden className="text-muted-foreground/50">
                    &middot;
                  </span>
                )}
                {m}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
