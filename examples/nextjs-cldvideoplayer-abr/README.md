# CldVideoPlayer for Embedding Cloudinary Videos in Next.js

Improve Video Streaming Next.js app with Adaptive Bitrate Streaming (ABR) and the CldVideoPlayer component from Next Cloudinary.

## 🧰 Using CldVideoPlayer in Next.js

Add Adaptive Bitrate Streaming to a video using the `CldVideoPlayer` component, use the following code:

```tsx
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

<CldVideoPlayer
  width="1920"
  height="1080"
  src="samples/sea-turtle"
  sourceTypes={['hls']} // <-- Add HLS as a source type or dash for MPEG-DASH
  transformation={{
    // <-- Add transformation prop
    streaming_profile: 'hd', // <-- Add streaming profile
  }}
/>
```

## App Router

When using the app router, create a wrapper client component for the video player.

Refer to the [CldVideoPlayer.tsx](components/CldVideoPlayer.tsx) file

```tsx
"use client";

import { CldVideoPlayer as VideoPlayer } from 'next-cloudinary';

export default function CldVideoPlayer(props) {
    return <VideoPlayer {...props} />
}
```

See the component in action at [app/page.tsx](app/page.tsx).

Or [learn more on the docs](https://next.cloudinary.dev/cldvideoplayer/examples#adaptive-streaming).

## 🚀 Get Started with This Example

- Clone this project with `degit`

```bash
npx degit cloudinary-community/cloudinary-examples/examples/nextjs-cldvideoplayer-abr nextjs-cldvideoplayer-abr
```

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
```

- Start the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

- Visit the project at <http://localhost:3000>!
