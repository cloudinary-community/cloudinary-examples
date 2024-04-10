import { useState } from 'react';
import Head from 'next/head';
import { CldUploadButton } from 'next-cloudinary';
import { CloudUpload } from 'lucide-react';

import Footer from '@/components/Footer';

const TITLE = 'Next Cloudinary CldUploadButton Component';

export default function Home() {
  const [info, setInfo] = useState();
  const [error, setError] = useState();

  function handleSuccess(result, widget) {
    setInfo(result?.info);
    widget.close({
      quiet: true,
    });
  }

  function handleError(error, _widget) {
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
        <meta
          property="og:url"
          content="https://cloudinary-nextjs-cldogimage.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples"
        />
      </Head>
      <div className="container mx-auto mb-5 max-w-screen-lg space-y-5 px-4 py-0">
        <h2 className="text-lg font-semibold">
          Below is the <code className="font-bold">{`<CldUploadButton>`}</code>{' '}
          component
        </h2>
        <CldUploadButton
          uploadPreset="nextjs-clduploadbutton-unsigned"
          className="me-2 inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          onError={handleError}
          onSuccess={handleSuccess}
        >
          <CloudUpload className="mr-2" />
          Upload
        </CldUploadButton>

        {error && <p>{error.status}</p>}

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

        <Footer />
      </div>
    </>
  );
}
