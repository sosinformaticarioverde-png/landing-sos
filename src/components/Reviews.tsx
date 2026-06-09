import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import jean from "@/assets/reviews/jean.png";
import ana from "@/assets/reviews/ana.png";
import sarah from "@/assets/reviews/sarah.png";
import felipe from "@/assets/reviews/felipe.png";
import artur from "@/assets/reviews/artur.png";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";

type Review = {
  name: string;
  meta: string;
  text: string;
  avatar?: string;
  initial?: string;
  initialColor?: string;
};

const reviews: Review[] = [
  {
    name: "Sarah Bezerra",
    meta: "3 semanas atrás",
    avatar: sarah,
    text: "Precisei realizar um serviço com eles e fiquei extremamente satisfeita com o atendimento prestado. A equipe foi muito atenciosa, cordial e ágil em todo o processo. Recomendo a todos que procuram qualidade e eficiência.",
  },
  {
    name: "Jean Carlos",
    meta: "4 meses atrás",
    avatar: jean,
    text: "Atenciosidade em todos os detalhes dos eletrônicos que levei, trabalho impecável!!! Profissionais honestos e com preço justo, serviço de qualidade. Com certeza retornarei mais vezes!",
  },
  {
    name: "Ana Júlia Frazzini",
    meta: "uma semana atrás",
    avatar: ana,
    text: "O trabalho é de qualidade, recebi bastante atenção e dedicação no serviço, o rapaz explica tudo muito bem e parece extremamente esforçado. A entrega foi excelente, com certeza faria negócio novamente.",
  },
  {
    name: "Felipe",
    meta: "2 meses atrás",
    avatar: felipe,
    text: "Atendimento impecável, sempre colocando o cliente em primeiro lugar."
  },
  {
    name: "Rodrigo Nunes",
    meta: "2 meses atrás",
    initial: "R",
    initialColor: "#34a853",
    text: "Atendimento nota 10! Preço justo e serviço de qualidade. Tiveram muita agilidade para diagnosticar o problema e o valor passado foi super justo. Ótimo atendimento, tanto presencial quanto online. Recomendo!",
  },
  {
    name: "Artur Soares Haase",
    meta: "Local Guide · 3 meses atrás",
    avatar: artur,
    text: "Pessoal muito caprichoso e cuidadoso, levei o notebook e foi realizado o serviço com limpeza, veio embalado, pessoal muito atencioso. Precisando, chama eles!",
  },
];

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

export function Reviews() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <GoogleG />
              <span className="text-sm font-bold text-muted-foreground">
                Avaliações reais no Google
              </span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-brand-deep sm:text-3xl">
              Quem confia, recomenda
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-brand-deep transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Próximo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-brand-deep transition-colors hover:bg-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex w-[85%] flex-none snap-center flex-col rounded-2xl border border-border bg-card p-6 shadow-soft sm:w-[360px]"
            >
              <div className="flex items-center gap-3">
                {r.avatar ? (
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                    style={{ backgroundColor: r.initialColor }}
                  >
                    {r.initial}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold text-foreground">{r.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{r.meta}</p>
                </div>
                <GoogleG />
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-brand-deep shadow-soft transition-colors hover:bg-secondary"
          >
            <GoogleG />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
