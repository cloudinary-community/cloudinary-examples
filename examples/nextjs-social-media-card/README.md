# Next.js Social Media Card with Cloudinary

Programmatically create an open graph social media card with dynamic text in a Next.js app using Cloudinary.

View Demo: <https://cloudinary-nextjs-social-media-card.netlify.app>

## 🧰 Creating a social media card with Cloudinary to use in Next.js

Using Cloudinary's ability to generate an image on the fly, we can create a social media card that embeds dynamically supplied text from an application.

> Tip: In this example, we'll use static text, but that text can be replaced with the dynamic counterpart.

To create an image, we can first supply Cloudinary with our base image's public ID to generate a starting point:
```
const ogImage = cloudinary.url('social-card-mountain', {
  width: 1012,
  height: 506,
  secure: true,
  transformation: [
    {
      fetch_format: 'auto',
      quality: 'auto'
    }
  ]
});
```

To apply a layer of text, we can add a text overlay to our transformation array:

```
const ogImage = cloudinary.url('social-card-mountain', {
  width: 1012,
  height: 506,
  secure: true,
  transformation: [
    {
      fetch_format: 'auto',
      quality: 'auto'
    },
    {
      color: '#2E2F38',
      crop: 'fit',
      width: 892,
      overlay: {
        font_family: 'Source Sans Pro',
        font_size: 60,
        font_weight: 'bold',
        text: 'My Social Card',
        text_align: 'center'
      },
    },
    {
      flags: 'layer_apply',
      gravity: 'north',
      y: 100
    }
  ]
});
```

> Tip: You can embed multiple text overlays including nesting the text overlays to take advantage of the natural flow of the text. See the code in this example to see how!

Once we generate our image, we want to use the `getStaticProps` or `getServerSideProps` functions to return our new image URL as a prop:

```
export async function getStaticProps() {
  ...
  return {
    props: {
      ogImage
    }
  }
}
```

And make that prop available in our application:

```
export default function Home({ ogImage }) {
```

Finally using it to supply metadata tags with our relevant image URL.

```
<meta property="og:image" content={ogImage} />
<meta property="og:image:secure_url" content={ogImage} />
<meta property="og:image:width" content="2024" />
<meta property="og:image:height" content="1012" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:image" content={ogImage} />
```

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