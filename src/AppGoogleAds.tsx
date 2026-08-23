import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Reviews } from "@/components/Reviews";
import { FinalCTA } from "@/components/FinalCTA";
import { LocationMap } from "@/components/LocationMap";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { WHATSAPP_URL_ADS } from "@/lib/site";

// Variante da landing page para tráfego pago (Google Ads), servida em
// /google-ads. Visualmente idêntica à raiz, exceto por: sem o menu de
// navegação superior (showNav={false}) e sem o SiteFooter institucional.
// Todos os CTAs de WhatsApp usam o link com rastreamento exclusivo de Ads.
export default function AppGoogleAds() {
  return (
    <main className="min-h-screen bg-background">
      <Hero showNav={false} whatsappUrl={WHATSAPP_URL_ADS} />
      <SocialProof />
      <Reviews />
      <FinalCTA whatsappUrl={WHATSAPP_URL_ADS} />
      <LocationMap />
      <WhatsAppFab whatsappUrl={WHATSAPP_URL_ADS} />
    </main>
  );
}
