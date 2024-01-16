"use client";

import React, {useRef, MutableRefObject, useEffect} from 'react';
import 'cloudinary-video-player/cld-video-player.min.css';

type CldVideoPlayerProps = {
  controls?: boolean;
  height: string | number;
  id: string;
  source?: object;
  src: string;
  width: string | number;
}

const CldVideoPlayer = ({ controls = true, id, src, width, height, source }: CldVideoPlayerProps) => {
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement | null>;
  const playerRef = useRef<any>();

  // Initialize the player

  useEffect(() => {
    if ( !src || playerRef.current ) return;

    (async function run() {
      // @ts-ignore
      const { videoPlayer } = await import('cloudinary-video-player');

      if ( !playerRef.current ) {
        playerRef.current = videoPlayer(videoRef.current, {
          cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          controls,
          publicId: src,
        });
      }

      if ( source ) {
        playerRef.current.source("docs/shoppable_demo", source)
      }
    })();

    return () => {
      if ( playerRef.current ) {
        playerRef.current.dispose();
      }
    }
  }, [src])

  return (
    <>
      <div style={{ width: '100%', aspectRatio: `${width} / ${height}`}}>
        <video
          ref={videoRef}
          id={id}
          className="cld-video-player cld-fluid"
          width={width}
          height={height}
        />
      </div>
    </>
  );
};

export default CldVideoPlayer;