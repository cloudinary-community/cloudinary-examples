import Footer from '@/components/Footer';
import {
  CldUploadWidget,
  CldImage,
  type CloudinaryUploadWidgetInfo,
} from 'next-cloudinary';
import Head from 'next/head';
import { useState } from 'react';

export default function HomePage() {
  const [result, setResult] = useState<CloudinaryUploadWidgetInfo>();
  return (
    <>
      <Head>
        <title>Next Cloudinary CldUploadWidget - AI Generated Caption</title>
        <meta
          name="description"
          content="Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-5 max-w-screen-lg space-y-5 px-4 py-0">
        <h2 className="text-center text-lg font-semibold">
          Below is the demo to generate caption of an image using the{' '}
          <a
            href="https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            AI Content Analysis
          </a>
        </h2>
        <section className="flex flex-col items-center justify-between">
          <CldUploadWidget
            signatureEndpoint="/api/sign-image"
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
              <blockquote className="relative border-s-4 border-indigo-700 ps-4 sm:ps-6">
                <p className="text-neutral-800 sm:text-lg">
                  Caption:{' '}
                  <em className="font-bold text-indigo-800">
                    {result.context.custom.alt}
                  </em>
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
        <Footer />
      </div>
    </>
  );
}
