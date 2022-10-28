import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import images from '../images.json';

const TITLE = 'Next.js Image Component & Cloudinary';

const normalizeSrc = (src) => src[0] === '/' ? src.slice(1) : src

export function cloudinaryLoader({ src, width, quality }) {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
}

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
          <h2 className={styles.subtitle}>
            Using the Cloudinary Loader
          </h2>
        </div>

        <div className={styles.container}>
          <blockquote className={styles.warning}>
            Note: This is not the  recommended approach. Use the CldImage component with <a href="https://next-cloudinary.spacejelly.dev/">Next Cloudinary</a> for
            first-class support of Cloudinary with the Next.js Image component.
          </blockquote>
        </div>

        <div className={styles.container}>
          <h3>Quality: Auto</h3>
          <p>Automatically determine best quality. Default option.</p>
          <p><code>q_auto</code></p>
          <ul className={styles.images}>
            {images.map(image => {
              return (
                <li key={image.id}>
                  <Image
                    width={image.width}
                    height={image.height}
                    src={image.image}
                    alt={image.title}
                    loader={cloudinaryLoader}
                  />
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h3>Quality: Auto Best</h3>
          <p>Use auto with preferred setting.</p>
          <p><code>q_auto:best</code></p>
          <ul className={styles.images}>
            {images.map(image => {
              return (
                <li key={image.id}>
                  <Image
                    width={image.width}
                    height={image.height}
                    src={image.image}
                    alt={image.title}
                    quality="auto:best"
                    loader={cloudinaryLoader}
                  />
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h3>Quality: 10</h3>
          <p>Specify your own quality level.</p>
          <p><code>q_10</code></p>
          <ul className={styles.images}>
            {images.map(image => {
              return (
                <li key={image.id}>
                  <Image
                    width={image.width}
                    height={image.height}
                    src={image.image}
                    alt={image.title}
                    quality="10"
                    loader={cloudinaryLoader}
                  />
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h3>Learn More</h3>
          <p>View the documention to find out what settings are available for the quality parameter and other URL transformations.</p>
          <p>
            <a href="https://cloudinary.com/documentation/transformation_reference#q_quality">
              https://cloudinary.com/documentation/transformation_reference#q_quality
            </a>
          </p>
        </div>

        <div className={styles.container}>
          <h3>Resources</h3>
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
