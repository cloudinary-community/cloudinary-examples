import Head from "next/head";
import { CldVideoPlayer } from "next-cloudinary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Next Cloudinary CldVideoPlayer - Adaptive Bitrate Streaming (ABR)
        </title>
        <meta
          name="description"
          content="Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-5 max-w-screen-lg space-y-8 px-4 py-0">
        <h2 className="text-2xl font-semibold text-center">
          <code>CldVideoPlayer</code> - Adaptive Bitrate Streaming (ABR)
        </h2>
        <CldVideoPlayer
          width="1920"
          height="1080"
          src="samples/sea-turtle"
          sourceTypes={["hls"]}
          transformation={{
            streaming_profile: "hd",
          }}
        />
        <Footer />
      </div>
    </>
  );
}
