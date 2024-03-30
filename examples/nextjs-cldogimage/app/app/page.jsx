import CldImage from '../../components/CldImage';
import Footer from '../../components/Footer';
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
          alt="Jellyfish Swimming in the Darkness"
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
