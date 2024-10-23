# CldUploadWidget for Media & File Uploads in Next.js with Cloudinary

Add media and file uploading to Cloudinary in Next.js.

## 🧰 Using CldUploadWidget in Next.js

### Using the Pages Router

To add an upload widget instance, use the following:

```jsx
import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget uploadPreset="<Your Upload Preset>">
  {({ open }) => {
    return (
      <button onClick={open}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
```

See the component in action at [pages/index.jsx](pages/index.jsx).

### Using the App Router

> Make sure to put `"use client"` directive at the top of the component when you use `<CldUploadWidget />`

```jsx
"use client"

import { CldUploadWidget } from 'next-cloudinary';

<CldUploadWidget uploadPreset="<Your Upload Preset>">
  {({ open }) => {
    return (
      <button onClick={open}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
```

See the component in action at [components/Uploader.jsx](components/Uploader.jsx).

Or [learn more on the docs](https://next.cloudinary.dev/components/clduploadwidget/basic-usage).

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
