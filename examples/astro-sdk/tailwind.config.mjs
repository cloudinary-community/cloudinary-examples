/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif:
          "Libre Baskerville, Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif",
      },
    },
  },
  plugins: [],
};
