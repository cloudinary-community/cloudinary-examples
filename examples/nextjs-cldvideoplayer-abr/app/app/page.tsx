import CldVideoPlayer from "@/components/CldVideoPlayer";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Cloudinary CldVideoPlayer - Adaptive Bitrate Streaming (ABR)",
  description:
    "Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples",
};

export default function AppRouterExamplePage() {
  return (
    <div className="container mx-auto mb-5 max-w-screen-lg space-y-8 px-4 py-0">
      <h2 className="text-2xl font-semibold text-center">
        <code>CldVideoPlayer</code> - Adaptive Bitrate Streaming (ABR)
      </h2>
      <CldVideoPlayer
        width="1920"
        height="1080"
        src="samples/sea-turtle"
        sourceTypes={["hls"]}
        transformation={{
          streaming_profile: "hd",
        }}
      />
      <Footer />
    </div>
  );
}
