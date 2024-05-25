import Footer from '@/components/Footer';
import Uploader from '@/components/Uploader';

export default function Home() {
  return (
    <div className="container mx-auto mb-5 max-w-screen-lg space-y-5 px-4 py-0">
      <h2 className="text-lg font-semibold">
        Below is the demo of <u>signed</u> upload using the{' '}
        <code className="font-bold">{`<CldUploadWidget>`}</code> component
      </h2>
      <Uploader />
      <Footer />
    </div>
  );
}
