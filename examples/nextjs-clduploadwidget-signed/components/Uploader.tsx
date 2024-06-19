'use client';

import {
  CldUploadWidget,
  CldImage,
  type CloudinaryUploadWidgetInfo,
} from 'next-cloudinary';
import { useState } from 'react';

export default function Uploader() {
  const [result, setResult] = useState<CloudinaryUploadWidgetInfo>();

  return (
    <section className="flex flex-col items-center justify-between">
      <CldUploadWidget
        signatureEndpoint="/api/sign-image-route"
        onSuccess={(result) => {
          if (typeof result.info === 'string') return;
          setResult(result.info);
        }}
      >
        {({ open }) => (
          <button
            className="me-2 inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            onClick={() => open()}
            type="button"
          >
            Upload an image
          </button>
        )}
      </CldUploadWidget>
      {result ? (
        <div className="mt-8">
          <CldImage
            src={result.public_id}
            width={result.width}
            height={result.height}
            alt="Uploaded Image"
          />
        </div>
      ) : null}
    </section>
  );
}
