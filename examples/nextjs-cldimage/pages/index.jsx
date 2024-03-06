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
        <header className='w-full mt-0 px-0 py-4 text-center bg-blue-950 text-white mb-12'>
          <h1 className='text-2xl font-semibold'>
            <a
              href='https://next.cloudinary.dev'
              className='text-blue-200 hover:underline underline-offset-2'
              target='_blank'
            >
              Next Cloudinary&apos;s
            </a>
            <br />
            <code className='font-mono'>{`<CldImage />`}</code> Component
          </h1>
        </header>

        <div className='container max-w-screen-lg mb-5 py-0 px-4 mx-auto space-y-14'>
          <ImagesSection title='Using Cloudinary Public IDs'>
            {images.slice(0, 4).map(image => {
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
            {images.slice(0, 4).map(image => {
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
            {images.slice(0, 4).map(image => {
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
            {images.slice(4, 8).map(image => {
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
            <h2 className='text-3xl font-bold mt-5'>Resources</h2>
            <a
              href='https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-cldimage'
              className='hover:underline text-blue-800'
              target='_blank'
            >
              See the code on github.com.
            </a>
            <p>
              Next Cloudinary:{' '}
              <a
                href='https://next.cloudinary.dev/'
                className='hover:underline text-blue-800'
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
      <h2 className='text-2xl font-semibold mb-4 text-indigo-900'>{title}</h2>
      <ul className='list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
        {children}
      </ul>
    </div>
  );
}
