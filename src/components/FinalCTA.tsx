import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-hero relative overflow-hidden py-16 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          Fale com a SOS Informática agora
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-white/85 sm:text-lg">
          Empresa local com loja física no Centro de Rio Verde. Fale direto com
          a nossa equipe e tire suas dúvidas sem compromisso.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-gradient mt-8 inline-flex items-center justify-center gap-2 rounded-full px-9 py-5 text-lg font-bold text-accent-foreground shadow-gold transition-transform hover:scale-[1.03] active:scale-95"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
