import { onMount } from "solid-js";

import "./App.css";

function App() {
  let galleryRef;

  onMount(() => {
    if (window && galleryRef) {
      window.cloudinary
        .galleryWidget({
          container: galleryRef,
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
          aspectRatio: "16:9",
          mediaAssets: [
            {
              tag: "solid-product-gallery",
              transformation: { crop: "fill" },
            },
            {
              tag: "solid-product-gallery-vids",
              mediaType: "video",
              transformation: { crop: "fill" },
            },
          ],
        })
        .render();
    }
  });

  return (
    <>
      <main className="main">
        <div className="container">
          <h1 className="title">Solid &amp; Cloudinary Product Gallery</h1>
        </div>

        <div className="container">
          <div ref={galleryRef}></div>
        </div>

        <div className="container">
          <h2>Resources</h2>
          <p>
            <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/solid-product-gallery">
              See the code on github.com.
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
