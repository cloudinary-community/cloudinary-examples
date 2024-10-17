# Uploading Files to Cloudinary directly in Next.js with FormData

This example shows how to upload files to directly Cloudinary using Next.js FormData & generate a signature using API Routes/Route Handlers.

## Getting Started

### Using the pages router

Create an API Route as shown in [sign.ts](pages/api/sign.ts) to generate a signature for the upload. The signature is generated using the `cloudinary.v2.uploader.sign` method. 

```ts
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body: SignApiOptions = req.body;
  const signature = cloudinary.utils.api_sign_request(
    body,
    String(process.env.CLOUDINARY_API_SECRET)
  );

  res.json({ signature });
}


```

From the client side, you can create an `uploadFile` function that calls the API Route, and passes the signature along with the file to Cloudinary API endpoint as shown in [uploadFile.ts](utils/uploadFile.ts). Then call the `uploadFile` function on form submit as shown in [index.tsx](pages/index.tsx). 

```tsx
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  try {
    if (!file) throw new Error("No file selected");
    const result = await uploadFile(file, "/api/sign");
    if (!result) throw new Error("Failed to upload file");
    setFileUrl(result.secure_url);
  } catch (error) {
    console.error(error);
  }
}

// jsx
return (
  <form onSubmit={handleSubmit}>
    <input type='file' name='file' onChange={handleFileChange} />
    <button type='submit'>Upload</button>
  </form>
)
```

### Using the app router

Create a Route Handler as shown in [route.ts](app/app/api/sign/route.ts) similar to the API Route in pages router.

```ts
export async function POST(req: Request) {
  const body: SignApiOptions = await req.json();
  const signature = cloudinary.utils.api_sign_request(
    body,
    String(process.env.CLOUDINARY_API_SECRET)
  );

  return Response.json({ signature });
}
```

On the client side, you can use the `uploadFile` function to call the Route Handler, and pass the signature along with the file to Cloudinary API endpoint as shown in [uploadFile.ts](utils/uploadFile.ts). Then call the `uploadFile` function on form submit in a client component as shown in [Uploader.tsx](components/Uploader.tsx).

Same as the pages router.

## Running this example

- Install the project dependencies with:
```sh
yarn install
# or
npm install
```

- Add environment variables to a `.env.local` file:
```sh
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
NEXT_PUBLIC_CLOUDINARY_API_KEY=""
NEXT_PUBLIC_CLOUDINARY_UPLOADS_FOLDER=""

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