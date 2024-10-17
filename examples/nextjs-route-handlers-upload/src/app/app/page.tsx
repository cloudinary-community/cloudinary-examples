import Footer from '@/components/Footer';
import Uploader from '@/components/Uploader';
import type { Metadata } from 'next';

const TITLE = 'Cloudinary & Next.js Route Handlers';
export const metadata: Metadata = {
  title: TITLE,
  description:
    'Learn how to upload files from a form to Cloudinary using Next.js Route Handlers',
};

export default function AppRouterPage() {
  return (
    <main className='container mx-auto mb-5 text-center max-w-screen-lg space-y-5 px-4 py-0'>
      <h1 className='text-3xl font-semibold py-5'>{TITLE}</h1>
      <Uploader />
      <Footer />
    </main>
  );
}
