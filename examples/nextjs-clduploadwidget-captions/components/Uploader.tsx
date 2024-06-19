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
        options={{
          detection: 'captioning',
          on_success:
            'current_asset.update({context: {alt: e.upload_info?.info?.detection?.captioning?.data?.caption}})',
        }}
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
        <>
          <blockquote className="relative border-s-4 border-indigo-700 ps-4 sm:ps-6 my-12">
            <p className="flex gap-2 text-neutral-800 sm:text-lg">
              <span>Caption:</span>
              <em>{result.context.custom.alt}</em>
            </p>
          </blockquote>
          <CldImage
            src={result.public_id}
            width={result.width}
            height={result.height}
            alt={result.context.custom.alt}
            title={result.context.custom.alt}
          />
        </>
      ) : null}
    </section>
  );
}
