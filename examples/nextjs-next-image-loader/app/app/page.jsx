import Image from "../../components/Image";
import ImagesGrid from "../../components/ImagesGrid";
import Footer from "../../components/Footer";

import images from "../../images.json";

export const metadata = {
  title: "Next.js Image Component & Cloudinary - App Router Demo",
  description:
    "Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples",
};

export default function AppDemoPage() {
  return (
    <div className="container mx-auto mb-5 max-w-screen-lg space-y-5 px-4 py-0">
      <h2 className="text-2xl font-semibold text-indigo-900">Example</h2>
      <blockquote className="relative border-s-4 ps-4 sm:ps-6 dark:border-gray-700">
        ⚠️ Note: This is not the recommended approach. Use the CldImage
        component with{" "}
        <a
          className="text-blue-800 hover:underline"
          href="https://next.cloudinary.dev"
          target="_blank"
        >
          Next Cloudinary
        </a>{" "}
        for first-class support of Cloudinary with the Next.js Image component.
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
              />
            </li>
          );
        })}
      </ImagesGrid>
      <Footer />
    </div>
  );
}
