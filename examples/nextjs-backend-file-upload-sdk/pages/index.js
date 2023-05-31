import Head from 'next/head';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
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
        <title>File Upload with Next.js and Cloudinary Backend SDK</title>
        <meta
          name='description'
          content='Uploading files with Next.js and Cloudinary Backend SDK'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1>Using the Cloudinary Backend SDK for File Uploads</h1>
        <form onSubmit={handleSubmit}>
          <input type='file' name='file' onChange={handleFileChange} />
          <button type='submit'>Submit</button>
        </form>
        {fileUrl ? (
          <a href={fileUrl} target='_blank'>
            Click to see your file
          </a>
        ) : null}
      </main>
    </>
  );
}
