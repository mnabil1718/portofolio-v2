// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import rehypeImageZoom from "./src/plugins/image-zoom/rehype.ts";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    layout: "constrained",
  },
  markdown: {
    rehypePlugins: [rehypeImageZoom],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-mono",
      },
    ],
  },
});
