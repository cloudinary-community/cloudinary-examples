# Astro with Cloudinary Image

This example shows how to fetch and transform images in cloudinary in an Astro application. As there is no Astro SDK for cloudinary yet, this project uses the [cloudinary url gen sdk](https://www.npmjs.com/package/@cloudinary/url-gen).

To run this example, first you have to upload the images in [demo.js](./src/demo.js) to your cloudinary account. Then, you add your cloud name as an environment variable:

```bash
# .env
CLOUDNAME=...
```

Then you can run `npm run dev`.

You can change the transformations in [CldImage.astro](./src/components/CldImage.astro) to see how they are applied to your images.
