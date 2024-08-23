# CldOgImage for Open Graph Social Media Cards in Next.js with Cloudinary

Generate social media cards for your site in Next.js with the CldOgImage component.

View Demo: <https://cloudinary-nextjs-cldogimage.netlify.app/>

## 🧰 Using CldOgImage in Next.js

### Using the Pages Router

To create a new social media card, add the following outside of the Head component, in any page:

```jsx
import { CldOgImage } from 'next-cloudinary';

<CldOgImage src="<Your Public ID>" />
```

See the component in action at [pages/index.jsx](pages/index.jsx).

Or [learn more on the docs](https://next.cloudinary.dev/components/cldogimage/basic-usage).

### Using the App Router

In Next.js App Router, **the metadata is set outside the component** unlike in pages router where the `<Head>` component is used to set metadata. Therefore, Instead of the `<CldOgImage />` component, **the `getCldOgImageUrl` function is used to generate the Open Graph image URL.**

```jsx
import { getCldOgImageUrl } from 'next-cloudinary';

const url = getCldOgImageUrl({
  src: "<Your Public ID>",
})

export const metadata = {
  openGraph: {
    images: [
      {
        width: 1200,
        height: 630,
        url,
      },
    ],
  },
};
```

See the component in action at [app/app/page.jsx](app/app/page.jsx).

[Learn more on the docs](https://next.cloudinary.dev/getcldogimageurl/basic-usage).

## 🚀 Get Started with This Example

* Install the project dependencies with:

```
yarn install
# or
npm install
```

* Add your cloud name as an environment variable inside `.env.local`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```


* Start the development server with:

```
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:3000>!
