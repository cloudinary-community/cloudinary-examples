# CldUploadWidget (signed) for Cloudinary Images in Next.js

Use the CldUploadWidget component to create a new instance of the [Cloudinary Upload Widget](https://cloudinary.com/documentation/upload_widget) giving you an easy way to add upload capabilities to your Next.js app.

## 🧰 Using CldUploadWidget in Next.js

To set up a signed upload, you'll need to install the Cloudinary Node SDK, then set up a Route Handler or API Route in Next.js to create a signature for the upload widget.

### Using the Pages Router

API Route: [pages/api/sign-image.ts](pages/api/sign-image.ts)

Add a basic (unsigned) upload widget using the following:

```tsx
import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget 
  uploadPreset="<Your Upload Preset>" 
  signatureEndpoint="/api/sign-image" {/* This prop allows you to sign the upload */}
>
  {({ open }) => (
    <button onClick={() => open()}>Upload an Image</button>
  )}
</CldUploadWidget>
```

See the component in action at [pages/index.tsx](pages/index.tsx).

### Using the App Router

API Route: [app/api/sign-image-route.ts](app/api/sign-image-route.ts)

Add a basic (unsigned) upload widget using the following:
> Make sure to put `"use client"` directive at the top of the component when you use `<CldUploadWidget />`

```tsx
"use client"

import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget 
  uploadPreset="<Your Upload Preset>" 
  signatureEndpoint="/api/sign-image-route" {/* This prop allows you to sign the upload */}
>
  {({ open }) => (
    <button onClick={() => open()}>Upload an Image</button>
  )}
</CldUploadWidget>
```

See the component in action at [components/Uploader.tsx](components/Uploader.tsx).

Or [learn more on the docs](https://next.cloudinary.dev/clduploadwidget/signed-uploads).

## 🚀 Get Started with This Example

- Install the project dependencies with:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

- Add your cloud name as an environment variable inside `.env.local`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
NEXT_PUBLIC_CLOUDINARY_API_KEY="<Your API Key>"
CLOUDINARY_API_SECRET="<Your API Secret>"
```

- Start the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
# or
bun dev
```

- Visit the project at <http://localhost:3000>!
