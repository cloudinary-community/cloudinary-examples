import Head from "next/head";
import { CldVideoPlayer } from "next-cloudinary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Cloudinary CldVideoPlayer Example</title>
        <meta
          name="description"
          content="Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto mb-5 max-w-screen-lg space-y-8 px-4 py-0">
        <h2 className="text-2xl font-semibold text-center">
          <code>CldVideoPlayer</code> usage examples
        </h2>
        <h2 className="text-lg font-semibold">1. Using Cloudinary Public ID</h2>
        <CldVideoPlayer
          id="sea-turtle-default"
          width="1920"
          height="1080"
          src="samples/sea-turtle"
        />

        <h2 className="text-lg font-semibold">
          2. Customizing player colors with <code>colors</code> prop
        </h2>
        <CldVideoPlayer
          id="sea-turtle-color"
          width="1920"
          height="1080"
          src="samples/sea-turtle"
          colors={{
            base: "#0f0",
            text: "#000",
            accent: "#fff",
          }}
        />
        <Footer />
      </div>
    </>
  );
}
