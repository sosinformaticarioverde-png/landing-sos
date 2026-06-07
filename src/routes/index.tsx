import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Reviews } from "@/components/Reviews";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOS Informática Rio Verde | Especialistas em Notebooks e Desktops" },
      {
        name: "description",
        content:
          "Especialistas em notebooks e desktops em Rio Verde - GO. Atendimento local, transparente e confiável, com nota 5,0 no Google. Fale agora no WhatsApp.",
      },
      { property: "og:title", content: "SOS Informática Rio Verde | Especialistas em Notebooks e Desktops" },
      {
        property: "og:description",
        content:
          "Atendimento local, transparente e confiável em Rio Verde - GO. Fale agora no WhatsApp.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SOS Informática",
          description:
            "Especialistas em notebooks e desktops em Rio Verde - GO. Atendimento local, transparente e confiável.",
          telephone: "+556436213682",
          email: "contato@sosinformaticarv.com.br",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rio Verde",
            addressRegion: "GO",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "6",
          },
          sameAs: [
            "https://instagram.com/sosinformaticarv",
            "https://facebook.com/sosinformaticarv",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
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
