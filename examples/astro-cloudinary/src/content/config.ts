import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

export const collections = {
  food: defineCollection({
    loader: cldAssetsLoader({
      folder: 'samples/food'
    })
  }),
  products: defineCollection({
    loader: cldAssetsLoader({
      folder: 'samples/ecommerce'
    })
  }),
  videos: defineCollection({
    loader: cldAssetsLoader({
      folder: 'samples',
      resourceType: 'video'
    })
  }),
}