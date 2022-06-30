import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import UploadWidget from '../components/UploadWidget';

import styles from '../styles/Home.module.css';

import images from '../images.json';

export default function Home() {
  const [url, updateUrl] = useState();
  const [error, updateError] = useState();

  /**
   * handleOnUpload
   */

  function handleOnUpload(error, result) {
    if ( error ) {
      updateError(error);
      return;
    }
    updateUrl(result?.info?.secure_url);
  }

  return (
    <>
      <Head>
        <title>Next.js &amp; Cloudinary Upload Widget</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Next.js &amp; Cloudinary Upload Widget
          </h1>
        </div>

        <div className={styles.container}>
          <UploadWidget onUpload={handleOnUpload}>
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return (
                <button onClick={handleOnClick}>
                  Upload an Image
                </button>
              )
            }}
          </UploadWidget>

          {error && <p>{ error }</p>}

          {url && (
            <>
              <p><img src={ url } alt="Uploaded image" /></p>
              <p>{ url }</p>
            </>
          )}
        </div>

      </main>
    </>
  )
}
