'use client';

import { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { CloudUpload } from 'lucide-react';
import { toast } from 'sonner';

export default function Uploader() {
  const [info, setInfo] = useState();
  const [error, setError] = useState();

  function handleSuccess(result, widget) {
    toast.success('Media successfully uploaded');
    setInfo(result?.info);
    widget.close({
      quiet: true,
    });
  }

  function handleError(error, _widget) {
    toast.error(error.statusText);
    setError(error);
  }

  return (
    <>
      <CldUploadButton
        uploadPreset="unsigned_1"
        className="me-2 inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        onError={handleError}
        onSuccess={handleSuccess}
      >
        <CloudUpload className="mr-2" />
        Upload
      </CldUploadButton>

      {error && <p>{error.statusText}</p>}

      {info && (
        <>
          {info.resource_type === 'image' && (
            <p>
              <img
                width={info.width}
                height={info.height}
                src={info.secure_url}
                alt="Uploaded image"
              />
            </p>
          )}
          {info.resource_type === 'video' && (
            <p>
              <video
                controls
                width={info.width}
                height={info.height}
                src={info.secure_url}
                alt="Uploaded video"
              />
            </p>
          )}
          <p>{info?.secure_url}</p>
        </>
      )}
    </>
  );
}
