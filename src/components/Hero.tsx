import { Star, MapPin, ShieldCheck } from "lucide-react";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/sos-logo.png";
import fachada from "@/assets/fachada.jpg";
import jean from "@/assets/reviews/jean.png";
import ana from "@/assets/reviews/ana.png";
import sarah from "@/assets/reviews/sarah.png";
import felipe from "@/assets/reviews/felipe.png";
import { WHATSAPP_URL, GOOGLE_REVIEWS_URL } from "@/lib/site";

const faces = [jean, ana, sarah, felipe];

export function Hero() {
  return (
    <header className="bg-hero relative overflow-hidden text-white">
      {/* subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />

      {/* top bar */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <img src={logo} alt="SOS Informática" className="h-9 w-auto sm:h-11" />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-accent-foreground shadow-gold transition-transform hover:scale-[1.03] active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:pt-10 lg:grid-cols-2 lg:gap-12 lg:pb-24">
        <div className="animate-float-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-sm sm:text-sm">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            Rio Verde - GO · Loja física no Centro
          </span>

          <h1 className="mt-5 text-[2.1rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            Especialistas em{" "}
            <span className="text-gold">notebooks e desktops</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0">
            Loja física própria no Centro de Rio Verde. Empresa local,
            transparente e confiável, com atendimento direto pela nossa equipe.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-accent-foreground shadow-gold transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Ver avaliações no Google
            </a>
          </div>

          {/* social proof above the fold */}
          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            <div className="flex -space-x-3">
              {faces.map((f, i) => (
                <img
                  key={i}
                  src={f}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white/80 object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
                <span className="ml-1 text-sm font-bold">4,9</span>
              </div>
              <p className="text-xs text-white/75">Avaliações reais no Google</p>
            </div>
          </div>
        </div>

        {/* storefront image */}
        <div className="animate-float-up relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-3xl border border-white/15 shadow-card">
            <img
              src={fachada}
              alt="Fachada da loja SOS Informática no Centro de Rio Verde - GO"
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-sm font-bold text-brand-deep shadow-soft">
            <ShieldCheck className="h-4 w-4 text-brand" />
            Empresa real, loja física
          </div>
        </div>
      </div>
    </header>
  );
}