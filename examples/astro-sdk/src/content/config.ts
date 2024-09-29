import { cldAssetsLoader } from "astro-cloudinary/loaders";
import { defineCollection } from "astro:content";

export const collections = {
  photos: defineCollection({
    loader: cldAssetsLoader({
      folder: "astro-sdk/photos",
    }),
  }),
  videos: defineCollection({
    loader: cldAssetsLoader({
      folder: "astro-sdk/videos",
      resourceType: "video",
    }),
  }),
};
