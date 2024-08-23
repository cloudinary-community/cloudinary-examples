# CldUploadWidget (captions) for Cloudinary Images in Next.js

Easily add AI-generated captions to your Cloudinary images using the `CldUploadWidget` component in Next.js and Cloudinary's AI Content Analysis feature.

> Make sure to enable **Cloudinary AI Content Analysis** Add-on in your Cloudinary account to use this feature.

## 🧰 Using CldUploadWidget in Next.js to enable captions

If using captions via the API you would need to add the options prop with an object of `{ detection: 'captioning' }` to the CldUploadWidget component:

```tsx
import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget
  options={{
    detection: 'captioning',
  }}
>
  {({ open }) => <button onClick={() => open()}>Upload an Image</button>}
</CldUploadWidget>
```

Using captioning via the API requires a signature using the signatureEndpoint prop with a POST request to the Cloudinary API. You can look at the code for the route param in the Next Cloudinary documentation [https://next.cloudinary.dev/clduploadwidget/signed-uploads#api-endpoint-to-sign-requests](https://next.cloudinary.dev/clduploadwidget/signed-uploads#api-endpoint-to-sign-requests).

```jsx
import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget
  signatureEndpoint="/api/sign-image" {/* 👈 New Code*/}
  options={{
    detection: 'captioning',
  }}
>
  {({ open }) => <button onClick={() => open()}>Upload an Image</button>}
</CldUploadWidget>
```

You could also add the on_success parameter to the options object with the following code to add the caption text to the image in your Cloudinary Media Library:

```jsx
import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget
  signatureEndpoint="/api/sign-image"
  options={{
    detection: 'captioning',
    on_success: 'current_asset.update({context: {alt: e.upload_info?.info?.detection?.captioning?.data?.caption}})', {/* 👈 New Code*/}
  }}
>
  {({ open }) => <button onClick={() => open()}>Upload an Image</button>}
</CldUploadWidget>
```

See the component in action at [app/app/page.tsx](app/app/page.tsx) and [pages/index.tsx](pages/index.tsx).

Or [learn more on the docs](https://next.cloudinary.dev/clduploadwidget/basic-usage).

[Learn more about AI Content Analysis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon).

## 🚀 Get Started with this example

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

```py
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
