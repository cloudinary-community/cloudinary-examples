import CldImage from '@/components/CldImage';
import Footer from '@/components/Footer';
import { getCldOgImageUrl } from 'next-cloudinary';

const url = getCldOgImageUrl({
  src: 'samples/animals/reindeer',
  overlays: [
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
  ],
});

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Next Cloudinary CldOgImage Component',
  description:
    'Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples',
  openGraph: {
    images: [
      {
        width: 1200,
        height: 630,
        url,
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="container mx-auto mb-5 max-w-screen-lg space-y-5 px-4 py-0">
      <h2 className="text-lg font-semibold text-indigo-900">Card Preview</h2>
      <blockquote className="relative border-s-4 ps-4 sm:ps-6 dark:border-gray-700">
        <p className="text-gray-800">
          <em>
            In Next.js App Router,{' '}
            <b>the metadata is set outside the component</b> unlike in pages
            router where the {`<Head>`} component is used to set metadata.
            Therefore, Instead of the {`<CldOgImage />`} component,{' '}
            <b>
              the {`getCldOgImageUrl`} function is used to generate the Open
              Graph image URL.
            </b>{' '}
            <a
              target="_blank"
              href="https://next.cloudinary.dev/getcldogimageurl/basic-usage"
              className="text-blue-800 hover:text-blue-700 hover:underline"
            >
              Docs
            </a>
          </em>
        </p>
      </blockquote>
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
  );
}
