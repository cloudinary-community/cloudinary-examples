# Next.js Image Component Using the Cloudinary Loader

You can configure Next.js to use Cloudinary when loading images and transforming them for your application.

View Demo: <https://cloudinary-nextjs-next-image-loader.netlify.app>

## 🧰 Using the Cloudinary Loader with the Next.js Image Component

> ⚠️ Note: This is not the  recommended approach. Use the CldImage component with [Next Cloudinary](https://next-cloudinary.spacejelly.dev) for first-class support of Cloudinary with the Next.js Image component.

To use Cloudinary as a Loader with the Image component, you must specify a `loader` prop for each instance of an Image.

```
const normalizeSrc = (src) => src[0] === '/' ? src.slice(1) : src

export function cloudinaryLoader({ src, width, quality }) {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
}

<Image ... loader={cloudinaryLoader} />
```

> Tip: As of Next.js 13.0.0, you can not globally specify a Loader.

See the file in action at [pages/index.js](pages/index.js).

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