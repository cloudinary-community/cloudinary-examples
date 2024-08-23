import { useRef } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { preview } from '@cloudinary/url-gen/actions/videoEdit';
import { AdvancedImage, AdvancedVideo, lazyload } from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'cloudinary-examples'
  }
});

interface VideoProps {
  video: {
    format: string;
    id: string;
    link: string;
    title: string;
    description: string;
  };
}

const Video = ({ video }: VideoProps) => {
  const playerRef = useRef<AdvancedVideo>(null);

  const onMouseOver = () => {
    playerRef?.current?.videoRef.current?.play();
  };

  const onMouseOut = () => {
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
        className="w-full h-auto z-20 relative group-hover:opacity-0 transition-none duration-300 rounded-md"
        width={1080}
        height={1920}
        cldImg={cld
          .image(video.id)
          .setAssetType('video')
          .quality('auto')
          .format('auto:image')}
      />
      <AdvancedVideo
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 w-full h-auto rounded-md"
        ref={playerRef}
        width={1080}
        height={1920}
        cldVid={cld
          .video(video.id)
          .videoEdit(preview().duration(4))
          .quality('auto')
          .format('auto')}
        muted
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

export { Video };
