import {
  CldUploadWidget,
  CldImage,
  type CloudinaryUploadWidgetInfo,
} from 'next-cloudinary';
import Footer from '@/components/Footer';
import Head from 'next/head';

import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<CloudinaryUploadWidgetInfo>();

  return (
    <>
      <Head>
        <title>Next Cloudinary CldUploadWidget - Signed Upload Example</title>
        <meta
          name="description"
          content="Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-5 max-w-screen-lg space-y-8 px-4 py-0">
        <h2 className="text-lg font-semibold">
          Below is the demo of <u>signed</u> upload using the{' '}
          <code className="font-bold">{`<CldUploadWidget>`}</code> component
        </h2>
        <section className="flex flex-col items-center justify-between">
          <CldUploadWidget
            signatureEndpoint="/api/sign-image"
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
        <Footer />
      </div>
    </>
  );
}
