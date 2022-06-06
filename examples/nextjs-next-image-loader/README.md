# Next.js Image Component Using the Cloudinary Loader

You can configure Next.js to use Cloudinary when loading images and transforming them for your application.

View Demo: <https://cloudinary-nextjs-next-image-loader.netlify.app>

## 🧰 Using the Cloudinary Loader with the Next.js Image Component

To use Cloudinary with the Image component, simply update your `next.config.js` file with the following configuration:

```
const nextConfig = {
  ...
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/<Your Cloud Name>'
  }
}
```

See the file in action at [next.config.js](next.config.js).

> Note: If using a custom domain with Cloudinary, be sure add the appropriate host in the domains array.

Once configured, you can now specify images relative to where they're stored in your media library.

For instance, if you have an image available at `myimages/image.jpg`, you can use it in your application like:

```
<Image width="..." height="..." src="/myimages/image.jpg" alt="..." />
```

As of now, you can configure the `width`, `src`, and `quality` props.

To learn what values you can use for `quality` head over to the [Cloudinary docs](https://cloudinary.com/documentation/transformation_reference#q_quality):

<https://cloudinary.com/documentation/transformation_reference#q_quality>

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