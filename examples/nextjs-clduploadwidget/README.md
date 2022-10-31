# CldUploadWidget for Media & File Uploads in Next.js with Cloudinary

Add media and file uploading to Cloudinary in Next.js.

View Demo: <https://cloudinary-nextjs-clduploadwidget.netlify.app/>

## 🧰 Using CldUploadWidget in Next.js

To add an upload widget instance, use the following:

```
import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget uploadPreset="next-cloudinary-unsigned">
  {({ open }) => {
    function handleOnClick(e) {
      e.preventDefault();
      open();
    }
    return (
      <button onClick={handleOnClick}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
```

See the component in action at [pages/index.js](pages/index.js).

Or [learn more on the docs](https://next-cloudinary.spacejelly.dev/components/clduploadwidget/basic-usage).

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

> Note: the upload preset must be updated to one available in your account

* Start the development server with:

```
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:3000>!
