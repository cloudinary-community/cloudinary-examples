import { useEffect, useRef } from "react";

import './App.css';

function App() {
  const galleryRef = useRef();

  useEffect(() => {
    if (window && galleryRef.current) {
      window.cloudinary
        .galleryWidget({
          container: galleryRef.current,
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
          aspectRatio: "16:9",
          mediaAssets: [
            { tag: "react-image-gallery-images", transformation: { crop: "fill" } },
            { tag: "react-image-gallery-videos", mediaType: "video", transformation: { crop: "fill" }  },
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
        <h1 className="title">
          React &amp; Cloudinary Product Gallery
        </h1>
      </div>

      <div className="container">
        <div ref={galleryRef} />
      </div>

      <div className="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-product-gallery">See the code on github.com.</a>
        </p>
      </div>
    </main>
  );
}

export default App;
