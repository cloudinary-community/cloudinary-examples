import Head from 'next/head';
import { CldImage } from 'next-cloudinary';
import images from '../images.json';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
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

      <main className={poppins.className}>
        <header className='mb-12 mt-0 w-full bg-blue-950 px-0 py-4 text-center text-white'>
          <h1 className='text-2xl font-semibold'>
            <a
              href='https://next.cloudinary.dev'
              className='text-blue-200 underline-offset-2 hover:underline'
              target='_blank'
            >
              Next Cloudinary&apos;s
            </a>
            <br />
            <code className='font-mono'>{`<CldImage />`}</code> Component
          </h1>
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

          <div className='border-t'>
            <h2 className='mt-5 text-3xl font-bold'>Resources</h2>
            <a
              href='https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-cldimage'
              className='text-blue-800 hover:underline'
              target='_blank'
            >
              See the code on github.com.
            </a>
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
    </>
  );
}

function ImagesSection({ title, children }) {
  return (
    <div>
      <h2 className='mb-4 text-2xl font-semibold text-indigo-900'>{title}</h2>
      <ul className='grid list-none grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {children}
      </ul>
    </div>
  );
}
