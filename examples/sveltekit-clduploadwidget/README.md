# CldUploadWidget for Cloudinary Images in Svelte/SvelteKit

Use the CldUploadWidget component to streamline the upload process to get your assets into the Cloudinary Platform

## 🧰 Using CldUploadWidget in Svelte/SvelteKit

Add an upload widget instance using the following:

```html
<script>
import { CldUploadWidget } from 'next-cloudinary';
</script>

<CldUploadWidget uploadPresety="<Your Upload Preset>">
    <button on:click={open}>Upload an Image</button>
</CldUploadWidget>
```

See the component in action at [src/routes/+page.svelte](routes/+page.svelte).

Or [learn more on the docs](https://svelte.cloudinary.dev/clduploadwidget/usage).

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

