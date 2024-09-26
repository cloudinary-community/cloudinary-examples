# Astro Cloudinary

This example shows how to use Astro Cloudinary to deliver images, videos, Social Cards, add uploading capabiltiies, and source assets from your Media Library.

- CldImage: Deliver optimized images with tranformations
- CldVideoPlayer: Deliver optimized videos with tranformations
- getCldOgImageUrl: Generate Open Graph Social Media Card image URLs
- CldUploadWidget: Add uploading to an app with Cloudinary Upload Widget
- cldAssetsLoader: Load images or videos from your Media Library into Astro

## Getting Started

To run this example, create a `.env` file in the root of this directory and add:

```bash
PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
PUBLIC_CLOUDINARY_API_KEY="<Your API Key>"
CLOUDINARY_API_SECRET="<Your API Secret>"
```

To enable uploads, create an Upload Preset for Signed Uploads named: `astro-cloudinary`.

> Tip: Alternatively, replace the `uploadPreset` value on CldUploadWidget with your own preset.

To start your server, run:

```
npm run dev
```

Where the application should now be available at: <http://localhost:4321>.

## More Info

Learn more about Astro Cloudinary: https://astro.cloudinary.dev/
