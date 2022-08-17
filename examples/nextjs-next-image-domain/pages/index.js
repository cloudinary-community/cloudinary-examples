import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import images from '../images.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Image Component &amp; Cloudinary</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Next.js Image Component &amp; Cloudinary
          </h1>
          <h2 className={styles.subtitle}>
            Using Cloudinary URLs
          </h2>
        </div>

        <div className={styles.container}>
          <ul className={styles.images}>
            {images.map(image => {
              return (
                <li key={image.id}>
                  <Image width={image.width} height={image.height} src={image.image} alt={image.title} />
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h2>Resources</h2>
          <ul>
            {images.map(image => {
              return (
                <li key={image.id}>
                  { image.title }: <a href={image.link} rel="noreferrer">{image.link}</a>
                </li>
              )
            })}
          </ul>
        </div>

      </main>
    </>
  )
}
