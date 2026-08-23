import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL, trackWhatsAppClick } from "@/lib/site";

interface WhatsAppFabProps {
  /** URL do WhatsApp usada no botão flutuante. Default: WHATSAPP_URL. */
  whatsappUrl?: string;
}

export function WhatsAppFab({ whatsappUrl = WHATSAPP_URL }: WhatsAppFabProps = {}) {
  return (
    <a
      href={whatsappUrl}
      onClick={trackWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold transition-transform hover:scale-105 active:scale-95 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
