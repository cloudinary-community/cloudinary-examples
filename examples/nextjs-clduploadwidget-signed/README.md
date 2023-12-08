# CldUploadWidget (signed) for Cloudinary Images in Next.js

Use the CldUploadWidget component to create a new instance of the [Cloudinary Upload Widget](https://cloudinary.com/documentation/upload_widget) giving you an easy way to add upload capabilities to your Next.js app.

## 🧰 Using CldUploadWidget in Next.js

Add a basic (unsigned) upload widget using the following:

```jsx
import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget uploadPreset="<Your Upload Preset>">
  {({ open }) => <button onClick={() => open()}>Upload an Image</button>}
</CldUploadWidget>;
```

To set up a signed upload, you'll need to install the Cloudinary Node SDK, then set up a route parameter in Next.js to create a signature for the upload widget.

You can look at the code for the route param in this project under [app/api/sign-image/route.ts](app/api/sign-image/route.ts)

Then all you have to do is add the signatureEndpoint prop to the CldUploadWidget component with the route parameter:

```jsx
import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget uploadPreset="<Your Upload Preset>" signatureEndpoint="/api/sign-image">
  {({ open }) => <button onClick={() => open()}>Upload an Image</button>}
</CldUploadWidget>;
```

See the component in action at [app/page.tsx](app/page.tsx).

Or [learn more on the docs](https://next.cloudinary.dev/clduploadwidget/basic-usage).

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
