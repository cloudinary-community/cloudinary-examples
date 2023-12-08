'use client';

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-5xl mb-12">My Amazing Video!!</h1>
      <CldVideoPlayer
        width="1920"
        height="1080"
        src="samples/sea-turtle"
        sourceTypes={['hls']}
        transformation={{
          streaming_profile: 'hd',
        }}
      />
    </main>
  );
}
