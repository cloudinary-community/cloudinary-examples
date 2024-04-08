import { AdvancedImage, AdvancedVideo, lazyload } from "@cloudinary/react";
import { cld } from "~/lib/cloudinary";
import { useRef } from "react";

interface LongVideoProps {
  video: {
    format: string;
    id: string;
    link: string;
    title: string;
    description: string;
  };
}

const LongVideo = ({ video }: LongVideoProps) => {
  const playerRef = useRef<AdvancedVideo>(null);

  const onMouseOver = () => {
    console.log("onMouseOver");
    playerRef?.current?.videoRef.current?.play();
  };

  const onMouseOut = () => {
    console.log("onMouseOut");
    playerRef?.current?.videoRef.current?.pause();
  };

  return (
    <button
      className="relative group"
      onFocus={onMouseOver}
      onBlur={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <AdvancedImage
        className="w-full h-auto z-20 relative group-hover:opacity-0 transition-opacity duration-300 rounded-md"
        cldImg={cld
          .image(video.id)
          .setAssetType("video")
          .delivery("q_auto")
          .format("auto:image")}
      />
      <AdvancedVideo
        className="absolute inset-0 z-10 w-full h-auto rounded-md"
        ref={playerRef}
        muted
        cldVid={cld
          .video(video.id)
          .effect("e_preview:duration_4")
          .delivery("q_auto")
          .format("auto")}
        plugins={[lazyload()]}
      />
      <p className="text-left py-2">
        <strong>{video.title}</strong>
        <br />
        {video.description}
      </p>
    </button>
  );
};

export { LongVideo };
