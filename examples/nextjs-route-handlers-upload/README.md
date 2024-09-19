# Uploading Files to Cloudinary with Next.js API Routes/Route Handlers

This example shows how to upload files to Cloudinary using Next.js API Routes (Pages Router) and Route Handlers (App Router).

## Getting Started

### Using the pages router

Create an API Route as shown in [upload.ts](src/pages/api/upload.ts) using the `formidable` library to accept files in request body.

```ts
const uploadsFolder = process.env.CLOUDINARY_UPLOADS_FOLDER;
const form = new IncomingForm();
form.parse(req, async (err, fields, files) => {
  const result = await new Promise<UploadApiResponse>((resolve, reject) => {
    cloudinary.uploader.upload(
      file.filepath,
      { resource_type: 'auto', folder: uploadsFolder },
      (error, result) => {
        if (error || !result) reject(error);
        else resolve(result);
      },
    );
});
```

From the client side, you can use the `fetch` API to send a POST request to the API Route with the file in the request body as shown in [index.tsx](src/pages/index.tsx).

```tsx
// handleSubmit
const formData = new FormData();
formData.append('file', file);
const response = await fetch('/api/upload', {
  method: 'POST',
  body: formData,
});
const result = await response.json();

// jsx
return (
  <form onSubmit={handleSubmit}>
    <input type='file' name='file' onChange={handleFileChange} />
    <button type='submit'>Upload</button>
  </form>
)
```

### Using the app router

Create a Route Handler as shown in [route.ts](src/app/app/api/upload/route.ts). Route Handlers don't require the `formidable` library to accept files in request body.

```ts
const uploadsFolder = process.env.CLOUDINARY_UPLOADS_FOLDER;
const formData = await request.formData();
const file = formData.get('file') as File;
const fileBuffer = await file.arrayBuffer();

const result = await new Promise<UploadApiResponse>((resolve, reject) => {
  cloudinary.uploader
    .upload_stream(
      { resource_type: 'auto', folder: uploadsFolder },
      (error, result) => {
        if (error || !result) reject(error);
        else resolve(result);
      },
    )
    .end(Buffer.from(fileBuffer));
});
```

On the client side, you can use the `fetch` API to send a POST request to the Route Handler with the file in the request body. It should be a client component like shown in [Uploader.tsx](src/components/Uploader.tsx). Same as the pages router.

## Running this example

- Install the project dependencies with:
```sh
yarn install
# or
npm install
```

- Add environment variables to a `.env.local` file:
```sh
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_UPLOADS_FOLDER=""
CLOUDINARY_API_SECRET=""
```

> Note: the upload preset must be updated to one available in your account

- Start the development server with:
```sh
yarn dev
# or
npm run dev
```

- Visit the project at <http://localhost:3000>!