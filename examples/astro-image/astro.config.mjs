import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["res.cloudinary.com"],
    service: passthroughImageService()
  }
});
