import Head from 'next/head';
import { CldVideoPlayer } from 'next-cloudinary';

import styles from "@/styles/Home.module.css";

const TITLE = 'Next Cloudinary CldVideoPlayer Component';

export default function Home() {
  return (
    <>
      <Head>
        <title>{ TITLE }</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{ TITLE }</h1>
        </div>

        <div className={styles.container}>
          <h2 className={styles.subtitle}>
            Using Cloudinary Public IDs
          </h2>
          <CldVideoPlayer
            id="sea-turtle-default"
            width="1920"
            height="1080"
            src="samples/sea-turtle"
          />
        </div>

        <div className={styles.container}>
          <h2 className={styles.subtitle}>
            Changing Colors
          </h2>
          <CldVideoPlayer
            id="sea-turtle-color"
            width="1920"
            height="1080"
            src="samples/sea-turtle"
            colors={{
              base: "#0f0",
              text: "#000",
              accent: "#fff",
            }}
          />
        </div>

        <div className={styles.container}>
          <h2>Resources</h2>
          <p>
            <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-cldvideoplayer">See the code on github.com.</a>
          </p>
          <ul>
            <li>Next Cloudinary: <a href="https://next-cloudinary.spacejelly.dev/">https://next-cloudinary.spacejelly.dev/</a></li>
          </ul>
        </div>

      </main>
    </>
  )
}