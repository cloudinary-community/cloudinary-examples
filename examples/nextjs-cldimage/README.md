# CldImage for Cloudinary Images in Next.js

Use the CldImage component for automatically optimized images with the power of Cloudinary.

View Demo: <https://cloudinary-nextjs-cldimage.netlify.app/>

## 🧰 Using CldImage in Next.js

### Using the Pages Router

Add an image from Cloudinary using the following:

```
import { CldImage } from 'next-cloudinary';

<CldImage width="100" height="100" src="<Your Public ID>" alt="My Image" />
```

See the component in action at [pages/index.js](pages/index.jsx).

### Using the App Router

CldImage is a Client component and at this time, doesn't automatically append the
"use client" directive to the top of the component, meaning, you need to add the
directive yourself, either in the component/page you're using CldImage, or by
creating your own light component wrapper (recommended).

Create a new file `components/CldImage.jsx` and inside add:

```jsx
'use client';

import { CldImage as CldImageDefault } from 'next-cloudinary';

/** @param {import('next-cloudinary').CldImageProps} props  */
export default function CldImage(props) {
  return <CldImageDefault {...props} />;
}
```

Then you can import this component and use it as you normally would:

```
import CldImage from 'components/CldImage';

<CldImage width="100" height="100" src="<Your Public ID>" alt="My Image" />
```

See the component in action at [app/app-demo/page.jsx](app/app-demo/page.jsx).

### More

Learn more on the [Next Cloudinary docs](https://next-cloudinary.spacejelly.dev/components/cldimage/basic-usage).

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

- Visit the Pages Router demo at <http://localhost:3000> or the App Router demo at <http://localhost:3000/app-demo>!
