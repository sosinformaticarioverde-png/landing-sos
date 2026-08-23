import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

// Plain React + Vite static site (no SSR / server).
// `vite build` outputs a static site (with index.html) into ./dist,
// ready to deploy on Cloudflare Pages.
//
// Multipágina (MPA): além da raiz (index.html), a build gera a landing de
// tráfego pago em google-ads/index.html -> dist/google-ads/index.html,
// servida em /google-ads. Adição aditiva; não altera a saída de "/".
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        googleAds: resolve(root, "google-ads/index.html"),
      },
    },
  },
});
