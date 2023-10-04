import { type MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return json({
    ENV: {
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    },
  });
}

// Add typescript definitions for stuff we added to the `window`
declare global {
  interface Window {
    // The `window.cloudinary` object is provided by the `<script/>` we imported
    cloudinary: any;
  }
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  const galleryRef = useRef<HTMLDivElement>(null)!;

  useEffect(() => {
    if (window && galleryRef.current) {
      window.cloudinary
        .galleryWidget({
          container: galleryRef.current,
          cloudName: data.ENV.CLOUDINARY_CLOUD_NAME,
          aspectRatio: "16:9",
          mediaAssets: [
            {
              tag: "gallery-images",
              transformation: { crop: "fill" },
            },
            {
              tag: "gallery-videos",
              mediaType: "video",
              transformation: { crop: "fill" },
            },
          ],
          // carouselStyle: "indicators",
          // carouselLocation: "bottom",
        })
        .render();
    }
  }, []);

  return (
    <main className="main">
      <div className="container">
        <h1 className="title">Remix &amp; Cloudinary Product Gallery</h1>
      </div>

      <div className="container">
        <div ref={galleryRef} />
      </div>

      <div className="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/cloudinary-community/cloudinary-examples/tree/main/examples/remix-product-gallery">
            See the code on github.com.
          </a>
        </p>
      </div>
    </main>
  );
}
