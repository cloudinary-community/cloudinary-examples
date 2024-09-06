import Head from "next/head";
import Image from "next/image";

import images from "../images.json";

import ImagesGrid from "../components/ImagesGrid";
import Footer from "../components/Footer";

const TITLE = "Next.js Image Component & Cloudinary";

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
      </Head>

      <div className="container mx-auto mb-5 max-w-screen-lg space-y-5 px-4 py-0">
        <h2 className="text-2xl font-semibold text-indigo-900">
          Using Cloudinary URLs Directly
        </h2>
        <ImagesGrid>
          {images.map(image => {
            return (
              <li key={image.id}>
                <Image
                  width={image.width}
                  height={image.height}
                  src={image.image}
                  alt={image.title}
                />
              </li>
            );
          })}
        </ImagesGrid>
        <Footer />
      </div>
    </>
  );
}
