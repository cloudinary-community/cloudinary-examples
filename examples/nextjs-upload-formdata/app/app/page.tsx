import Footer from "@/components/Footer";
import Uploader from "@/components/Uploader";
import type { Metadata } from "next";

const TITLE = "FormData File Uploads with Next.js & Cloudinary Node SDK";
export const metadata: Metadata = {
  title: TITLE,
  description:
    "Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples",
};

export default function AppRouterPage() {
  return (
    <main className="container mx-auto mb-5 text-center max-w-screen-lg space-y-5 px-4 py-0">
      <h1 className="text-3xl font-semibold py-5">{TITLE}</h1>
      <Uploader />
      <Footer />
    </main>
  );
}
