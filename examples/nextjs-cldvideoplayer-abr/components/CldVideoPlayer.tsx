"use client";

import {
  type CldVideoPlayerProps,
  CldVideoPlayer as VideoPlayer,
} from "next-cloudinary";

export default function CldVideoPlayer(props: CldVideoPlayerProps) {
  return <VideoPlayer {...props} />;
}
