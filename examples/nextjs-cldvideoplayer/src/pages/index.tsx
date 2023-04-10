import { CldVideoPlayer } from 'next-cloudinary';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <CldVideoPlayer
        id='sea-turtle'
        width='1920'
        height='1080'
        src='samples/sea-turtle.mp4'
        colors={{
          base: '#0f0',
          text: '#000',
          accent: '#fff',
        }}
      />
    </main>
  );
}
