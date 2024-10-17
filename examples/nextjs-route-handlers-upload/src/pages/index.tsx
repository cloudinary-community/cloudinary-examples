import { useState } from 'react';
import Head from 'next/head';

import Footer from '@/components/Footer';

const TITLE = 'Cloudinary & Next.js Route Handlers';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (!file) throw new Error('No file selected');
      setIsLoading(true);
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const result: { secure_url: string } = await response.json();
      if (!result) throw new Error('Failed to upload file');
      setFileUrl(result.secure_url);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name='description'
          content='Learn how to upload files from a form to Cloudinary using Next.js Route Handlers'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto mb-5 text-center max-w-screen-lg space-y-5 px-4 py-0'>
        <h1 className='text-3xl font-semibold py-5'>{TITLE}</h1>

        <section className='flex flex-col items-center justify-between'>
          <form onSubmit={handleSubmit} className='border rounded-lg p-4'>
            <input
              type='file'
              name='file'
              onChange={handleFileChange}
              className='block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-indigo-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-700 file:cursor-pointer focus:outline-none disabled:pointer-events-none disabled:opacity-60'
            />
            <button
              type='submit'
              disabled={isLoading}
              className='bg-indigo-500 hover:bg-indigo-700 rounded-md py-2 px-4 mt-4 text-white w-full disabled:pointer-events-none disabled:opacity-60'
            >
              Upload
            </button>
          </form>
          {fileUrl && (
            <div className='whitespace-pre-wrap overflow-hidden'>
              <code>{fileUrl}</code>
              <img src={fileUrl} alt='Uploaded image' />
            </div>
          )}
        </section>
        <Footer />
      </main>
    </>
  );
}
