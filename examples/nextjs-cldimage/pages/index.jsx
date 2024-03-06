import Head from 'next/head';
import { CldImage } from 'next-cloudinary';
import images from '../images.json';
import { Inter } from 'next/font/google';
import Images from '../components/Images';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

const TITLE = 'Next Cloudinary CldImage Component';

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name='description'
          content='Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Images />
    </>
  );
}

function ImagesSection({ title, children }) {
  return (
    <div>
      <h2 className='mb-5 text-lg font-semibold text-indigo-900'>{title}</h2>
      <ul className='grid list-none grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {children}
      </ul>
    </div>
  );
}
