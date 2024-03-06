# CldImage for Cloudinary Images in Next.js

Use the CldImage component for automatically optimized images with the power of Cloudinary.

View Demo: <https://cloudinary-nextjs-cldimage.netlify.app/>

## 🧰 Using CldImage in Next.js

Add an image from Cloudinary using the following:

```
import { CldImage } from 'next-cloudinary';

<CldImage width="100" height="100" src="<Your Public ID>" alt="My Image" />
```

See the component in action at [pages/index.js](pages/index.js).

Or [learn more on the docs](https://next-cloudinary.spacejelly.dev/components/cldimage/basic-usage).

## 🚀 Get Started with This Example

- Install the project dependencies with:

```
yarn install
# or
npm install
```

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
