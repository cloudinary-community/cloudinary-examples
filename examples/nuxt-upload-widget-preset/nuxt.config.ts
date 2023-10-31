// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://upload-widget.cloudinary.com/global/all.js",
          type: "text/javascript",
        },
      ],
    },
  },
});
