# CldVideoPlayer for Embedding Cloudinary Videos in Next.js

Embed videos in your Next.js app with CldVideoPlayer component and Cloudinary.

## 🧰 Using CldVideoPlayer in Next.js

To embed a video using the `CldVideoPlayer` component, use the following:

Include the stylesheet globally in `_app.tsx` or `layout.tsx`

```tsx
// In _app.tsx or layout.tsx
import "next-cloudinary/dist/cld-video-player.css";
```

### Pages router

```tsx
import { CldVideoPlayer } from 'next-cloudinary';

<CldVideoPlayer
  id="<Player ID>"
  width="1920"
  height="1080"
  src="<Your Public ID>"
/>
```

### App Router

Create a wrapper client component with `"use client"` directive. 

Refer to the [CldVideoPlayer.tsx](src/components/CldVideoPlayer.tsx) file

```tsx
"use client";

import { CldVideoPlayer as VideoPlayer } from 'next-cloudinary';

export default function CldVideoPlayer(props) {
    return <VideoPlayer {...props} />
}
```

See the component in action at [index.tsx](src/pages/index.tsx) & [page.tsx](src/app/app/page.tsx).

Or [learn more on the docs](https://next.cloudinary.dev/cldvideoplayer/basic-usage).

## 🚀 Get Started with This Example

- Clone this project with `degit`

```bash
npx degit cloudinary-community/cloudinary-examples/examples/nextjs-cldvideoplayer nextjs-cldvideoplayer
```

- Install the project dependencies with:

```
yarn install
# or
npm install
```

> Note: The **upload preset** must be updated to one available in your account

- Add your cloud name as an environment variable inside `.env.local`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```


- Start the development server with:

```
yarn dev
# or
npm run dev
```

- Visit the project at <http://localhost:3000>!
