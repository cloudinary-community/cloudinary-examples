import Head from 'next/head';
import { CldImage } from 'next-cloudinary';
import images from '../images.json';
import ImagesGrid from '../components/ImagesGrid';

const TITLE = 'Next Cloudinary CldImage Component';

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto mb-5 max-w-screen-lg space-y-14 px-4 py-0">
        <ImagesGrid title="Using Cloudinary Public IDs">
          {images.map((image) => (
            <li key={image.id}>
              <CldImage
                width={image.width}
                height={image.height}
                src={image.image}
                alt={image.title}
                sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw"
              />
            </li>
          ))}
        </ImagesGrid>

        <ImagesGrid title="AI Generative Fill">
          {images.map((image) => (
            <li key={image.id}>
              <CldImage
                width={image.height}
                height={image.width}
                crop="pad"
                src={image.image}
                alt={image.title}
                fillBackground
                sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw"
              />
            </li>
          ))}
        </ImagesGrid>

        <ImagesGrid title="Uniform Cropping">
          {images.map((image) => (
            <li key={image.id}>
              <CldImage
                width="600"
                height="600"
                crop="fill"
                src={image.image}
                alt={image.title}
                sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw"
              />
            </li>
          ))}
        </ImagesGrid>

        <ImagesGrid title="With Effects">
          {images.map((image) => (
            <li key={image.id}>
              <CldImage
                width="600"
                height="600"
                crop={{
                  crop: 'fill',
                  source: true,
                }}
                src={image.image}
                alt={image.title}
                tint="equalize:80:blue:blueviolet"
                blur="1500"
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
                sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw"
              />
            </li>
          ))}
        </ImagesGrid>

        <div className="border-t pt-8">
          <h2 className="mb-3 text-2xl font-bold">Resources</h2>
          <p className="mb-2">
            <a
              href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-cldimage"
              className="text-blue-800 hover:underline"
              target="_blank"
            >
              See the code on github.com.
            </a>
          </p>
          <p>
            Next Cloudinary:{' '}
            <a
              href="https://next.cloudinary.dev/"
              className="text-blue-800 hover:underline"
              target="_blank"
            >
              https://next.cloudinary.dev
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
