import { Phone, MapPin, Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/sos-logo.png";
import {
  WHATSAPP_URL,
  GOOGLE_MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  EMAIL,
  CNPJ,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img src={logo} alt="SOS Informática" className="h-12 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Especialistas em Notebooks e Desktops. Atendimento local,
            transparente e confiável em Rio Verde - GO.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-gold">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white">
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2.5 hover:text-white">
                <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 break-all hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-gold" /> {EMAIL}
              </a>
            </li>
            <li>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white">
                <MapPin className="h-4 w-4 text-gold" /> Centro, Rio Verde - GO
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-gold">
            Redes sociais
          </h3>
          <div className="mt-4 flex gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-6 text-xs text-white/55">@sosinformaticarv</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>SOS Informática · CNPJ {CNPJ}</p>
          <p>© {new Date().getFullYear()} SOS Informática Rio Verde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
