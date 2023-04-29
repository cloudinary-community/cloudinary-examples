import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window) {
      window.cloudinary
        .galleryWidget({
          container: "#gallery",
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
          aspectRatio: "16:9",
          mediaAssets: [
            { tag: "gallery-images" },
            { tag: "gallery-videos", mediaType: "video" },
          ],
          carouselStyle: "indicators",
          carouselLocation: "bottom",
        })
        .render();
    }
  }, []);

  return (
    <div
      id="gallery"
      style={{
        width: "1200px",
        margin: "auto",
      }}
    />
  );
}

export default App;
