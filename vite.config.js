import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Must match your GitHub repo name (path after github.io). Change if repo is renamed.
const GH_PAGES_BASE = "/saimposter/";

export default defineConfig(({ command }) => {
  // Dev: '/' so http://localhost:4000/ works. Build: subpath for GitHub Pages project sites.
  const base = command === "build" ? GH_PAGES_BASE : "/";
  
  const pwaConfig = {
    registerType: "autoUpdate",
    includeAssets: ["favicon.webp", "maskable-icon-180.png"],
    workbox: {
      mode: "development",
    },
    manifest: {
      name: "Saimposter - GoCoffee Edition",
      short_name: "Saimposter",
      description: "Social deduction word game",
      icons: [
        {
          src: "maskable-icon-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "maskable-icon-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "maskable-icon-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "maskable-icon-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      theme_color: "#171717",
      background_color: "#f0e7db",
      display: "standalone",
      scope: base,
      start_url: base,
      orientation: "portrait",
    },
  };

  return {
    base,
    plugins: [react(), VitePWA(pwaConfig)],
    server: {
      host: "0.0.0.0",
      port: 4000,
    },
  };
});
