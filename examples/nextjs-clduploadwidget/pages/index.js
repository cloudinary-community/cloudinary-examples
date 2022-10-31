import { useState } from 'react';
import Head from 'next/head';
import { CldUploadWidget } from 'next-cloudinary';

import styles from '../styles/Home.module.css';

const TITLE = 'Next Cloudinary CldUploadWidget Component';

export default function Home() {
  const [info, updateInfo] = useState();
  const [error, updateError] = useState();

  /**
   * handleOnUpload
   */

  function handleOnUpload(error, result, widget) {
    if ( error ) {
      updateError(error);
      return;
    }

    updateInfo(result?.info);

    widget.close({
      quiet: true
    });
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
          <CldUploadWidget uploadPreset="nextjs-clduploadwidget-unsigned" onUpload={handleOnUpload}>
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return (
                <button onClick={handleOnClick}>
                  Upload an Asset
                </button>
              )
            }}
          </CldUploadWidget>

          {error && <p>{ error.status }</p>}

          {info && (
            <>
              {info.resource_type === 'image' && (
                <p><img width={info.width} height={info.height} src={ info.secure_url } alt="Uploaded image" /></p>
              )}
              {info.resource_type === 'video' && (
                <p><video controls width={info.width} height={info.height} src={ info.secure_url } alt="Uploaded video" /></p>
              )}
              <p>{ info?.secure_url }</p>
            </>
          )}
        </div>

        <div className={styles.container}>
          <h2>Resources</h2>
          <p>
            <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-clduploadwidget">See the code on github.com.</a>
          </p>
        </div>

      </main>
    </>
  )
}
