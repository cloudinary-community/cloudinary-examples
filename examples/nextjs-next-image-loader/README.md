# Next.js Image Component Using the Cloudinary Loader

You can configure Next.js to use Cloudinary when loading images and transforming them for your application.

View Demo: <https://cloudinary-nextjs-next-image-loader.netlify.app>

## 🧰 Using the Cloudinary Loader with the Next.js Image Component

> ⚠️ Note: This is not the recommended approach. Use the CldImage component with [Next Cloudinary](https://next.cloudinary.dev) for first-class support of Cloudinary with the Next.js Image component.

To use Cloudinary as a Loader with the Image component, you must specify a `loader` prop for each instance of an Image.

```js
function normalizeSrc(src, width) {
  // Optimization options cannot be taken as arguments in the loader function.
  // To add optimization options like `q_auto`, `f_auto`, etc., add them to the src URL before the public ID.
  return `w_${width}/` + src.replace(/^\//, "");
}

export function cloudinaryLoader({ src, width }) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    throw new Error(
      "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is required in the environment"
    );
  }
  return `https://res.cloudinary.com/${cloudName}/image/upload/${normalizeSrc(src, width)}`;
}

<Image ... loader={cloudinaryLoader} />
```

> Tip: As of Next.js 13.0.0, you can not globally specify a Loader.

See the file in action at [pages/index.jsx](pages/index.jsx).

> Note: If using a custom domain with Cloudinary, be sure add the appropriate the domain instead of `res.cloudinary.com`.

Once configured, you can now specify images relative to where they're stored in your media library.

For instance, if you have an image available at `myimages/image.jpg`, you can use it in your application like:

```jsx
<Image width="..." height="..." src="myimages/image.jpg" alt="..." />
```

To add optimization options like `q_auto`, `f_auto`, etc., add them to the src URL before the public ID.

```jsx
<Image width="..." height="..." src="q_auto,f_auto/myimages/image.jpg" alt="..." />
```

As of now, you can configure the `width` and `src` props.

## 🚀 Get Started with This Example

* Install the project dependencies with:

```sh
yarn install
# or
npm install
```

* Start the development server with:

```sh
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:3000>!