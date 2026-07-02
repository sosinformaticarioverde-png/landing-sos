import { MapPin, Navigation } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/lib/site";

const MAP_QUERY = encodeURIComponent("SOS Informática Rio Verde GO");

// Pins the exact registered Google Business location (CID) so the marker
// shows the SOS Informática place before the user ever opens Maps.
const EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&ftid=0x9361dc9e498d365b:0xf8cb926472fffd2&z=17&output=embed`;

export function LocationMap() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
            <MapPin className="h-4 w-4" /> Onde estamos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Loja física no Centro de Rio Verde
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Rua Itagiba Gonzaga Jaime, 1640 — sala 3, Setor Central. Venha nos
            visitar ou trace sua rota com um clique.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-xl">
          <iframe
            title="Mapa da SOS Informática em Rio Verde - GO"
            src={EMBED_URL}
            className="h-[360px] w-full sm:h-[460px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            <Navigation className="h-5 w-5 text-gold" /> Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
