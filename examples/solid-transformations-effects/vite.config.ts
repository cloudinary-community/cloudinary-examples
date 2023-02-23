import solid from "solid-start/vite";
import netlify from "solid-start-netlify";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ adapter: netlify() })],
});
