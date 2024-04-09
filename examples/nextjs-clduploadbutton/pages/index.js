import { useState } from 'react';
import Head from 'next/head';
import { CldUploadButton } from 'next-cloudinary';
import { CloudUpload } from 'lucide-react';

import styles from '../styles/Home.module.css';

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
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{TITLE}</h1>
        </div>

        <div className={styles.container}>
          <CldUploadButton
            uploadPreset="nextjs-clduploadbutton-unsigned"
            className="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
        </div>

        <div className={styles.container}>
          <h2>Resources</h2>
          <p>
            <a href="https://github.com/cloudinary-community/cloudinary-examples/tree/main/examples/nextjs-clduploadbutton">
              See the code on github.com.
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
