import Footer from '@/components/Footer';
import Uploader from '@/components/Uploader';

export default function Home() {
  return (
    <div className="container mx-auto mb-5 max-w-screen-lg space-y-8 px-4 py-0">
      <h2 className="text-center text-lg font-semibold">
        Below is the demo to generate caption of an image using the{' '}
        <a
          href="https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning"
          target="_blank"
          className="text-blue-800 hover:underline"
        >
          AI Content Analysis
        </a>
      </h2>
      <Uploader />
      <Footer />
    </div>
  );
}
