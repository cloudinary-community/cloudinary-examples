import Head from 'next/head';
import { useState } from 'react';
import { CldUploadWidget, CldImage, CldVideoPlayer } from 'next-cloudinary';
import { toast } from 'sonner';

import Footer from '@/components/Footer';

const TITLE = 'Next Cloudinary CldUploadWidget Component';

export default function Home() {
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
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto mb-5 max-w-screen-lg space-y-5 px-4 py-0">
        <h2 className="text-lg font-semibold">
          The button below is wrapped in the{' '}
          <code className="font-bold">{`<CldUploadWidget>`}</code> component
        </h2>
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

          {error && (
            <p className="mt-2 text-xs text-red-600">{error.statusText}</p>
          )}

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
        <Footer />
      </div>
    </>
  );
}
