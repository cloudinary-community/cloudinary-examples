# CldVideoPlayer for embedding videos in Next.js with Cloudinary

Embed videos in your Next.js app with `CldVideoPlayer` component and Cloudinary.

## 🧰 Using CldVideoPlayer in Next.js

To embed a video using the `CldVideoPlayer` component, use the following:

```
import { CldVideoPlayer } from 'next-cloudinary';

<CldVideoPlayer
  id='[ELEMENT_ID]'
  width='[WIDTH]'
  height='[HEIGHT]'
  src='[CLOURINARY_VIDEO_SRC]'
/>
```

See the component in action at [src/pages/index.tsx](src/pages/index.tsx).

Or [learn more on the docs](https://next-cloudinary.spacejelly.dev/components/cldvideoplayer/basic-usage).

## 🚀 Get Started with This Example

- Install the project dependencies with:

```
yarn install
# or
npm install
```

- Add your cloud name as an environment variable inside `.env`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

> Note: the upload preset must be updated to one available in your account

- Start the development server with:

```
yarn dev
# or
npm run dev
```

- Visit the project at <http://localhost:3000>!
