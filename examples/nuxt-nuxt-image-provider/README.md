# Nuxt Image Component with the Cloudinary Provider

Load Cloudinary images in a Nuxt app with the Nuxt Image component.

## 🧰 Using Cloudinary with the Nuxt Image Component

To allow Cloudinary to load with the Image component, simply update your `nuxt.config.ts` file with the following configuration:

```
export default defineNuxtConfig({
  modules: ["@nuxt/image-edge"],
  image: {
    cloudinary: {
      baseURL: `https://res.cloudinary.com/<Your Cloud Name>/image/upload/`,
    },
  },
});
```

Then set the `provider` prop on the Image component to `cloudinary`:
```
<nuxt-img
  provider="cloudinary"
  ...
/>
```

## 🚀 Get Started with This Example

* Install the project dependencies with:

```
yarn install
# or
npm install
```

* Start the development server with:

```
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:3000>!
