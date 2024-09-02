import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/Home.module.css';

const TITLE = 'FormData File Uploads with Next.js & Cloudinary Node SDK'

export default function Home() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const { fileUrl } = await res.json();
      setFileUrl(fileUrl);
    } catch (error) {
      console.error(error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <input type='file' name='file' onChange={handleFileChange} />
            <button type='submit'>Submit</button>
          </form>
          {fileUrl && (
            <>
              <p><img src={ fileUrl } alt="Uploaded image" /></p>
              <p>{ fileUrl }</p>
            </>
          )}
        </div>

        <div className={styles.container}>
          <h2>Resources</h2>
          <p>
            <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-upload-formdata">See the code on github.com.</a>
          </p>
        </div>
      </main>
    </>
  )
}
