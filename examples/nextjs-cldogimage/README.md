# CldOgImage for Open Graph Social Media Cards in Next.js with Cloudinary

Generate social media cards for your site in Next.js with the CldOgImage component.

View Demo: <https://cloudinary-nextjs-cldogimage.netlify.app/>

## 🧰 Using CldOgImage in Next.js

To create a new social media card, add the following outside of the Head component, in any page:

```
import { CldOgImage } from 'next-cloudinary';

<CldOgImage src="<Your Public ID>" />
```

See the component in action at [pages/index.js](pages/index.js).

Or [learn more on the docs](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage).

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
