import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  // 'static' - Building a static site to be deploy to any static host.
  // 'server' - Building an app to be deployed to a host supporting SSR (server-side rendering).
  // 'hybrid' - Building a static site with a few server-side rendered pages.
});
