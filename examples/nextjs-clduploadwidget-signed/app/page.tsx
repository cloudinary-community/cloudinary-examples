'use client';

import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface UploadedAssetData {
  public_id: string;
  width: number;
  height: number;
  id: string;
}

export default function Home() {
  const [result, setResult] = useState<UploadedAssetData | null>(null);
  return (
    <main className="p-16 text-center">
      <h1 className="text-5xl font-medium py-8">Image Upload App</h1>
      <section className="flex flex-col items-center justify-between">
        {/* UNSIGNED EXAMPLE
        <CldUploadWidget uploadPreset="next_cloudinary_app">
          {({ open }) => <button onClick={() => open()}>Upload an Image</button>}
        </CldUploadWidget>

        */}

        {/* SIGNED EXAMPLE */}
        <CldUploadWidget
          signatureEndpoint="/api/sign-image"
          onSuccess={(result) => {
            setResult(result?.info as UploadedAssetData);
          }}
        >
          {({ open }) => (
            <button className="bg-indigo-500 rounded py-2 px-4 mb-4 text-white" onClick={() => open()}>
              Upload an Image
            </button>
          )}
        </CldUploadWidget>

        {result ? (
          <CldImage src={result.public_id} width={result.width} height={result.height} alt="Uploaded Image" />
        ) : null}
      </section>
    </main>
  );
}
