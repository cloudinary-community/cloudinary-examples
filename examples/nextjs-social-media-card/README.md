# Next.js Social Media Card with Next Cloudinary

Programmatically create an open graph social media card with dynamic text in a Next.js app using Next Cloudinary.

## 🧰 Creating a social media card with the Next Cloudinary CldOgImage component

Using Cloudinary's ability to generate an image on the fly, we can create a social media card that embeds dynamically supplied text from an application.

> Tip: In this example, we'll use static text, but that text can be replaced with the dynamic counterpart.

First, add an environment variable with your Cloudinary Cloud Name:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

Then import the CldOgImage component from Next Cloudinary with:

```
import { CldOgImage } from 'next-cloudinary';
```

To create an image, we can supply Cloudinary with our base image's public ID along with any text and transformations:

```
<CldOgImage
  src="social-card-mountain"
  text="My Social Card"
  twitterTitle="My Social Card"
/>
```

This component should go anywhere in your page document EXCEPT in the `<Head>`.

> Tip: It can not go in the Next.js Head component as it does not support React components as children

We must additionally configure a Twitter title as required by Twitter when using the Large Summary card.

## 🚀 Get Started with This Example

* Install the project dependencies with:

```
yarn install
# or
npm install
```

* Start the development server with:

```
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:3000>!

The image on the page is an example using the CldImage component, which uses the same API as the CldOgImage component. To preview the image, inspect the page's HTML and look for the `og:image` meta tag.
