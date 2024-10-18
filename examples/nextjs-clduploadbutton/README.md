# CldUploadButton for Drop-in File Uploads in Next.js with Cloudinary

Add a button for uploading media and other files to Cloudinary in Next.js.

## 🧰 Using CldUploadButton in Next.js

### Using the Pages Router

To add an upload widget instance, use the following:

```jsx
import { CldUploadButton } from 'next-cloudinary';

<CldUploadButton uploadPreset="<Your Upload Preset>" />
```

See the component in action at [pages/index.jsx](pages/index.jsx).

### Using the App Router

> Make sure to put `"use client"` directive at the top of the component when you use `<CldUploadButton />`

 ```jsx
"use client"

import { CldUploadButton } from 'next-cloudinary';

<CldUploadButton uploadPreset="<Your Upload Preset>" />
```

See the component in action at [components/Uploader.jsx](components/Uploader.jsx).

[Learn more on the docs](https://next.cloudinary.dev/components/clduploadbutton/basic-usage).

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
