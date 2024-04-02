import Head from 'next/head';

import { CldImage, CldOgImage } from 'next-cloudinary';

import Footer from '@/components/Footer';

const TITLE = 'Next Cloudinary CldOgImage Component';

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={TITLE} />
        <meta
          property="og:url"
          content="https://cloudinary-nextjs-cldogimage.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples"
        />
      </Head>

      <CldOgImage
        src="samples/animals/reindeer"
        overlays={[
          {
            position: {
              y: -250,
              x: 320,
            },
            text: {
              color: 'black',
              fontFamily: 'Poppins',
              fontSize: 100,
              fontWeight: 'bold',
              text: 'Reindeer',
            },
          },
          {
            position: {
              y: 260,
              x: -350,
            },
            text: {
              color: 'black',
              fontFamily: 'Poppins',
              fontWeight: 'semibold',
              fontSize: 45,
              text: 'Antlers of the North',
            },
          },
        ]}
        alt="Reindeer roaming in snow"
        twitterTitle={TITLE}
      />

      <div className="container mx-auto mb-5 max-w-screen-lg space-y-5 px-4 py-0">
        <h2 className="text-lg font-semibold text-indigo-900">Card Preview</h2>
        <div className="max-w-[600px]">
          {/* Values cut in half for smaller image file size */}
          <CldImage
            width="1200"
            height="630"
            crop={{
              width: 1200,
              height: 630,
              type: 'fill',
              source: true,
            }}
            src="samples/animals/reindeer"
            alt="Reindeer roaming in snow"
            overlays={[
              {
                position: {
                  y: -250,
                  x: 320,
                },
                text: {
                  color: 'black',
                  fontFamily: 'Poppins',
                  fontSize: 100,
                  fontWeight: 'bold',
                  text: 'Reindeer',
                },
              },
              {
                position: {
                  y: 260,
                  x: -350,
                },
                text: {
                  color: 'black',
                  fontFamily: 'Poppins',
                  fontWeight: 'semibold',
                  fontSize: 45,
                  text: 'Antlers of the North',
                },
              },
            ]}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
