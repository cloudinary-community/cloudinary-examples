import Head from 'next/head';
import Image from 'next/image';

import { CldImage, CldOgImage } from 'next-cloudinary';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Social Media Card with Cloudinary</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Next.js Social Media Card with Cloudinary" />
        <meta property="og:url" content="https://cloudinary-nextjs-social-media-card.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
      </Head>

      <CldOgImage
        src="social-card-mountain"
        overlays={[
          {
            position: {
              y: -220
            },
            text: {
              color: 'blueviolet',
              fontFamily: 'Source Sans Pro',
              fontSize: 180,
              fontWeight: 'bold',
              text: 'My Social Card'
            }
          }
        ]}
        twitterTitle="Next.js Social Media Card with Cloudinary"
      />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Next.js Social Media Card with Cloudinary
          </h1>
        </div>

        <div className={styles.container}>
          <h2>Card Preview</h2>
          <p>
            {/* Values cut in half for smaller image file size */}
            <CldImage
              width="1200"
              height="600"
              src="social-card-mountain"
              alt="My Social Card"
              overlays={[
                {
                  position: {
                    y: -110
                  },
                  text: {
                    color: 'blueviolet',
                    fontFamily: 'Source Sans Pro',
                    fontSize: 90,
                    fontWeight: 'bold',
                    text: 'My Social Card'
                  }
                }
              ]}
            />
          </p>
          <p>
            Preview the working card at <a href="https://www.opengraph.xyz/url/https%3A%2F%2Fcloudinary-nextjs-social-media-card.netlify.app%2F" target="_blank" rel="noreferrer">opengraph.xyz</a>
          </p>
        </div>
      </main>
    </>
  )
}