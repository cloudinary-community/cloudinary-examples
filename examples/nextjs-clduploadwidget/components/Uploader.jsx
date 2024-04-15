'use client';

import { CldUploadWidget, CldImage, CldVideoPlayer } from 'next-cloudinary';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Uploader() {
  const [info, setInfo] = useState();
  const [error, setError] = useState();

  function handleSuccess(result, widget) {
    toast.success('Media successfully uploaded');
    setInfo(result?.info);
    setError(null);
    widget.close({
      quiet: true,
    });
  }

  function handleError(error, _widget) {
    toast.error(error.statusText);
    setInfo(null);
    setError(error);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-lg border border-slate-200 p-6 shadow-sm">
      <CldUploadWidget
        uploadPreset="nextjs-clduploadwidget-unsigned"
        onError={handleError}
        onSuccess={handleSuccess}
      >
        {({ open }) => {
          return (
            <button
              className="me-2 inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              onClick={open}
              type="button"
            >
              Upload an Asset
            </button>
          );
        }}
      </CldUploadWidget>

      {error && <p>{error.status}</p>}

      {info && (
        <>
          {info.resource_type === 'image' && (
            <CldImage
              width={info.width}
              height={info.height}
              src={info.public_id}
              alt="Uploaded image"
            />
          )}
          {info.resource_type === 'video' && (
            <CldVideoPlayer
              width={info.width}
              height={info.height}
              src={info.public_id}
            />
          )}

          <p className="text-center">
            Media URL
            <br />
            <a
              href={info.secure_url}
              className="text-sm text-blue-800 hover:underline"
              target="_blank"
            >
              {info.secure_url}
            </a>
          </p>
        </>
      )}
    </div>
  );
}
