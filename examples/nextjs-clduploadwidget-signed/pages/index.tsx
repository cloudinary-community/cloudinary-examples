import Footer from '@/components/Footer';
import Uploader from '@/components/Uploader';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Cloudinary CldUploadWidget - Signed Upload Example</title>
        <meta
          name="description"
          content="Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-5 max-w-screen-lg space-y-8 px-4 py-0">
        <h2 className="text-lg font-semibold">
          Below is the demo of <u>signed</u> upload using the{' '}
          <code className="font-bold">{`<CldUploadWidget>`}</code> component
        </h2>
        <Uploader signatureEndpoint="/api/sign-image" />
        <Footer />
      </div>
    </>
  );
}
