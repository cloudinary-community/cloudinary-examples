import Image from "next/image";
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
  );
}
