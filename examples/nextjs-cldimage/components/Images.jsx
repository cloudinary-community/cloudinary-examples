import CldImage from './CldImage';
import ImagesSection from './ImagesSection';

import { Inter } from 'next/font/google';

import images from '../images.json';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export default function Images() {
  return (
    <main className={inter.className}>
      <header className='mb-12 mt-0 w-full bg-blue-950 py-4 text-center text-white'>
        <div className='mx-auto flex max-w-screen-lg flex-col items-center justify-between px-4 sm:flex-row'>
          <h1 className='flex items-center gap-3 text-xl font-semibold'>
            <a
              href='https://next.cloudinary.dev'
              className='text-blue-200 underline-offset-2 hover:underline'
              target='_blank'
            >
              Next Cloudinary
            </a>
            <code className='font-mono text-lg'>{`<CldImage />`}</code>
          </h1>
          <ul>
            <li>
              <a
                className='text-sm'
                href='https://github.com/cloudinary-community/cloudinary-examples/tree/main/examples/nextjs-cldimage'
                target='_blank'
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className='container mx-auto mb-5 max-w-screen-lg space-y-14 px-4 py-0'>
        <ImagesSection title='Using Cloudinary Public IDs'>
          {images.slice(0, 4).map((image) => {
            return (
              <li key={image.id}>
                <CldImage
                  width={image.width}
                  height={image.height}
                  src={image.image}
                  alt={image.title}
                  sizes='(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw'
                />
              </li>
            );
          })}
        </ImagesSection>

        <ImagesSection title='Uniform Cropping'>
          {images.slice(0, 4).map((image) => {
            return (
              <li key={image.id}>
                <CldImage
                  width='600'
                  height='600'
                  crop='fill'
                  src={image.image}
                  alt={image.title}
                  sizes='(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw'
                />
              </li>
            );
          })}
        </ImagesSection>

        <ImagesSection title='With Effects'>
          {images.slice(0, 4).map((image) => {
            return (
              <li key={image.id}>
                <CldImage
                  width='600'
                  height='600'
                  crop={{
                    crop: 'fill',
                    source: true,
                  }}
                  src={image.image}
                  alt={image.title}
                  tint='equalize:80:blue:blueviolet'
                  blur='1500'
                  overlays={[
                    {
                      text: {
                        color: 'white',
                        fontFamily: 'Source Sans Pro',
                        fontSize: 100,
                        fontWeight: 'bold',
                        letterSpacing: 14,
                        text: image.title,
                      },
                    },
                  ]}
                  sizes='(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw'
                />
              </li>
            );
          })}
        </ImagesSection>

        <ImagesSection title='AI Generative Fill'>
          {images.slice(4, 8).map((image) => {
            return (
              <li key={image.id}>
                <CldImage
                  width={image.height}
                  height={image.width}
                  crop='pad'
                  src={image.image}
                  alt={image.title}
                  fillBackground
                  sizes='(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw'
                />
              </li>
            );
          })}
        </ImagesSection>

        <div className='border-t pt-8'>
          <h2 className='mb-3 text-2xl font-bold'>Resources</h2>
          <p className='mb-2'>
            <a
              href='https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-cldimage'
              className='text-blue-800 hover:underline'
              target='_blank'
            >
              See the code on github.com.
            </a>
          </p>
          <p>
            Next Cloudinary:{' '}
            <a
              href='https://next.cloudinary.dev/'
              className='text-blue-800 hover:underline'
              target='_blank'
            >
              https://next.cloudinary.dev
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
