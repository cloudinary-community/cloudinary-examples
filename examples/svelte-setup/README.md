# Svelte Cloudinary Setup

This project shows how to use cloudinary in your Svelte application.

To run this locally, provide your cloudinary cloudname as an environment variable:

```bash
# .env.local
VITE_PUBLIC_CLOUDINARY_CLOUD_NAME=...
```

Then change the `public_id`s in [+layout.svelte](./src/routes/+layout.svelte) and [+page.svelte](./src/routes/+page.svelte)
