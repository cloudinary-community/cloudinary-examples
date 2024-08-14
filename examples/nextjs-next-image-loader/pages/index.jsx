import Head from "next/head";
import Image from "next/image";

import images from "../images.json";

import { cloudinaryLoader } from "../utils/cloudinaryLoader";
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
        <h2 className="text-2xl font-semibold text-indigo-900">Example</h2>
        <blockquote className="relative border-s-4 ps-4 sm:ps-6 dark:border-gray-700">
          Warning: This is not recommended because you have to manually add
          customization options to the <code>src</code> url. The best approach
          is to use the{" "}
          <a
            className="text-blue-800 hover:underline"
            href="https://next.cloudinary.dev"
            target="_blank"
          >
            Next Cloudinary
          </a>{" "}
          library.
        </blockquote>
        <ImagesGrid>
          {images.map(image => {
            return (
              <li key={image.id}>
                <Image
                  width={image.width}
                  height={image.height}
                  src={image.image}
                  alt={image.title}
                  loader={cloudinaryLoader}
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
