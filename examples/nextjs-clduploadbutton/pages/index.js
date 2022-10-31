import { useState } from 'react';
import Head from 'next/head';
import { CldUploadButton } from 'next-cloudinary';

import styles from '../styles/Home.module.css';

const TITLE = 'Next Cloudinary CldUploadButton Component';

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
          <CldUploadButton uploadPreset="nextjs-upload-widget-preset" onUpload={handleOnUpload} />

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
            <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-clduploadbutton">See the code on github.com.</a>
          </p>
        </div>

      </main>
    </>
  )
}
