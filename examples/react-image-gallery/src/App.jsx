import { useEffect, useRef } from "react";

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
      ref={galleryRef}
      style={{
        width: "1200px",
        margin: "auto",
      }}
    />
  );
}

export default App;
