# CldImage for Cloudinary Images in Svelte/SvelteKit

Use the CldImage component for automatically optimized images with the power of Cloudinary.

View Demo: <https://cloudinary-sveltekit-cldimage.netlify.app/>

## 🧰 Using CldImage in Svelte/SvelteKit

Add an image from Cloudinary using the following:

```html
<script>
import { CldImage } from 'next-cloudinary';
</script>

<CldImage width="100" height="100" src="<Your Public ID>" alt="My Image" />
```

See the component in action at [src/routes/+page.svelte](routes/+page.svelte).

Or [learn more on the docs](https://svelte-cloudinary.vercel.app/components/CldImage/usage).

## 🚀 Get Started with This Example

* Install the project dependencies with:

```
pnpm install
# or
yarn install
# or
npm install
```

* Add your cloud name as an environment variable inside `.env.local`:

```
VITE_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

* Start the development server with:

```
pnpm install
# or
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:5173>!

