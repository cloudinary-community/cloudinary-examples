import Head from 'next/head';
import { CldImage } from 'next-cloudinary';

import styles from '../styles/Home.module.css';

import images from '../images.json';

const TITLE = 'Next Cloudinary CldImage Component';

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name='description'
          content='Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>
            <a href='https://next.cloudinary.dev' target='_blank'>
              Next Cloudinary&apos;s
            </a>
            <br />
            <code>{`<CldImage />`}</code> Component
          </h1>
        </header>

        <div className={styles.container}>
          <h2 className={styles.subtitle}>Using Cloudinary Public IDs</h2>
          <ul className={styles.images}>
            {images.slice(0, 4).map(image => {
              return (
                <li key={image.id}>
                  <CldImage
                    width={image.width}
                    height={image.height}
                    src={image.image}
                    alt={image.title}
                    sizes='(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw'
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h2 className={styles.subtitle}>AI Generative Fill</h2>
          <ul className={styles.images}>
            {images.slice(4, 8).map(image => {
              return (
                <li key={image.id}>
                  <CldImage
                    width={image.height}
                    height={image.width}
                    crop='pad'
                    src={image.image}
                    alt={image.title}
                    fillBackground
                    sizes='(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw'
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h2 className={styles.subtitle}>Uniform Cropping</h2>
          <ul className={styles.images}>
            {images.slice(0, 4).map(image => {
              return (
                <li key={image.id}>
                  <CldImage
                    width='600'
                    height='600'
                    crop='fill'
                    src={image.image}
                    alt={image.title}
                    sizes='(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw'
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h2 className={styles.subtitle}>With Effects</h2>
          <ul className={styles.images}>
            {images.slice(0, 4).map(image => {
              return (
                <li key={image.id}>
                  <CldImage
                    width='600'
                    height='600'
                    crop={{
                      crop: 'fill',
                      source: true,
                    }}
                    src={image.image}
                    alt={image.title}
                    tint='equalize:80:blue:blueviolet'
                    blur='1500'
                    overlays={[
                      {
                        text: {
                          color: 'white',
                          fontFamily: 'Source Sans Pro',
                          fontSize: 100,
                          fontWeight: 'bold',
                          letterSpacing: 14,
                          text: image.title,
                        },
                      },
                    ]}
                    sizes='(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw'
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h2>Resources</h2>
          <p>
            <a href='https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-cldimage'>
              See the code on github.com.
            </a>
          </p>
          <ul>
            <li>
              Next Cloudinary:{' '}
              <a href='https://next.cloudinary.dev/'>
                https://next.cloudinary.dev
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
