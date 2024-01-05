'use client';

import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface UploadedAssetData {
  public_id: string;
  width: number;
  height: number;
  id: string;
  info: Record<string, unknown>;
  context: Record<string, Record<string, string>>;
  [key: string]: unknown;
}

export default function Home() {
  const [result, setResult] = useState<UploadedAssetData | null>(null);

  return (
    <main className="p-16 text-center">
      <h1 className="text-5xl font-medium py-8">Image Upload App</h1>
      <section className="flex flex-col items-center justify-between">
        <CldUploadWidget
          signatureEndpoint="/api/sign-image"
          options={{
            detection: 'captioning',
            on_success:
              'current_asset.update({context: {alt: e.upload_info?.info?.detection?.captioning?.data?.caption}})',
          }}
          onSuccess={(result) => {
            setResult(result?.info as UploadedAssetData);
          }}
        >
          {({ open }) => <button onClick={() => open()}>Upload an Image</button>}
        </CldUploadWidget>

        {result ? (
          <>
            <CldImage
              src={result.public_id}
              width={result.width}
              height={result.height}
              alt={result.context.custom.alt}
            />
            <p>Alt: { result.context.custom.alt }</p>
          </>
        ) : null}
      </section>
    </main>
  );
}
