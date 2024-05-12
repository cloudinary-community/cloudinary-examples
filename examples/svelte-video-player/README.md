# Svelte Video Player Demo

This project shows how to use the [svelte-cloudinary SDK](https://github.com/cloudinary-community/svelte-cloudinary) to fetch and transform videos from cloudinary.

To run this project, provide an environment variable for your cloudinary cloud name:

```bash
.env.local
VITE_PUBLIC_CLOUDINARY_CLOUD_NAME=...
```

Then provide the right `public_id`s for the videos in [+page.svelte](./src/routes/+page.svelte).

Then, run `npm run dev`.
