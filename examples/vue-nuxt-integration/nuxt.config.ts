// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image-edge"],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/kc-cloud/image/upload/",
    },
  },
});
