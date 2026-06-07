import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Reviews } from "@/components/Reviews";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <Reviews />
      <FinalCTA />
      <SiteFooter />
      <WhatsAppFab />
    </main>
  );
}
