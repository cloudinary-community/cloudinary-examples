'use client';

import { CldUploadWidget } from 'next-cloudinary';

export default function Home() {
  return (
    <main className="p-16 text-center">
      <h1 className="text-5xl font-medium py-8">Image Upload App</h1>
      <section className="flex flex-col items-center justify-between">
        {/* <CldUploadWidget uploadPreset="next_cloudinary_app">
          {({ open }) => <button onClick={() => open()}>Upload an Image</button>}
        </CldUploadWidget> */}

        <CldUploadWidget signatureEndpoint="/api/sign-image">
          {({ open }) => (
            <button className="bg-indigo-500 rounded py-2 px-4 mb-4 text-white" onClick={() => open()}>
              Upload an Image
            </button>
          )}
        </CldUploadWidget>
      </section>
    </main>
  );
}
