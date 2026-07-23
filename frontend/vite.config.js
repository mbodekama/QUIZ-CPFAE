import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// PWA au design actuel (mobile-first, couleurs Côte d'Ivoire).
// Le service worker précache l'app-shell ET les données (data/*.js) pour un
// fonctionnement hors-ligne complet.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // "prompt" : le nouveau SW reste en attente jusqu'à ce que l'utilisateur
      // clique sur « Actualiser » dans le bandeau (cf. src/components/UpdatePrompt.jsx).
      registerType: "prompt",
      includeAssets: [
        "icon.svg",
        "data/questions.js",
        "data/finances-publiques.js",
        "data/management-organisations.js",
        "data/droit-administratif.js",
      ],
      manifest: {
        name: "QCM CPFAE — Révision Fonction Publique",
        short_name: "QCM CPFAE",
        description:
          "Réviser la Fonction Publique ivoirienne module par module, hors-ligne.",
        lang: "fr",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#f5f6f8",
        theme_color: "#ea7317",
        icons: [
          { src: "/icon.svg", sizes: "192x192", type: "image/svg+xml", purpose: "any" },
          { src: "/icon.svg", sizes: "512x512", type: "image/svg+xml", purpose: "any" },
          { src: "/icon.svg", sizes: "512x512", type: "image/svg+xml", purpose: "maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,woff2}"],
        // Les données du quiz sont statiques : cache-first via le précache.
        navigateFallback: "/index.html",
      },
    }),
  ],
  server: {
    port: 5173,
    // En développement, proxifie l'API vers le backend local.
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
