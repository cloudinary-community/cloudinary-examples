import { useState } from 'react';
import Head from 'next/head';

import UploadWidget from '../components/UploadWidget';

import styles from '../styles/Home.module.css';

const TITLE = 'Next.js & Cloudinary Upload Widget'

export default function Home() {
  const [url, updateUrl] = useState();
  const [error, updateError] = useState();

  /**
   * handleOnUpload
   */

  function handleOnUpload(error, result, widget) {
    if ( error ) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  }

  return (
    <>
      <Head>
        <title>{ TITLE }</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{ TITLE }</h1>
        </div>

        <div className={styles.container}>
          <blockquote className={styles.warning}>
            Note: See <a href="https://next-cloudinary.spacejelly.dev/">Next Cloudinary</a> for
            first-class Next.js support of the Cloudinary Upload Widget.
          </blockquote>
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

        <div className={styles.container}>
          <h2>Resources</h2>
          <p>
            <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-upload-widget-preset">See the code on github.com.</a>
          </p>
        </div>

      </main>
    </>
  )
}
