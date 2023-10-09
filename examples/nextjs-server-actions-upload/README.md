# Uploading Files to Cloudinary with Next.js Server Actions

Use Next.js Server Actions to upload files to Cloudinary.

## 🧰 Using Cloudinary and Next.js Server Actions

When working on the server in a Next.js application, as long as it's not using the Edge runtime, you can safely use the Cloudinary Node SDK to upload files and other asset administration.

```
async function create(formData: FormData) {
  'use server'
  const file = formData.get('image') as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({}, function (error, result) {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    })
    .end(buffer);
  });
}
...
<form action={create}>
```

In the above code, we create a new Server Action, which:
* Reads an image file from the given form
* Accesses the image buffer
* Passes it along to the Node SDK's upload_stream method

This results in a successfully uploaded Cloudinary asset which can then be queried or stored depending on the app's use case.

See the code in action at [src/app/pages.tsx](src/app/pages.tsx).

## 🚀 Get Started with This Example

* Install the project dependencies with:

```
yarn install
# or
npm install
```

> The project uses Yarn by default, but when worked on individually from the application root, npm can be safely used.

* Add your cloud name as an environment variable inside `.env.local`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
CLOUDINARY_API_KEY="<Your API Key>"
CLOUDINARY_API_SECRET="<Your API Secret>"
```

* Start the development server with:

```
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:3000>!
