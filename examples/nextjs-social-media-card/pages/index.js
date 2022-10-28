import Head from 'next/head';
import Image from 'next/image';

import { CldImage, CldOgImage } from 'next-cloudinary';

import styles from '../styles/Home.module.css';

const TITLE = 'Next.js Social Media Card with Cloudinary';

export default function Home() {
  return (
    <>
      <Head>
        <title>{ TITLE }</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={TITLE} />
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
        twitterTitle={TITLE}
      />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{ TITLE }</h1>
        </div>

        <div className={styles.container}>
          <h2>Card Preview</h2>
          <p style={{ maxWidth: 600 }}>
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
                    color: 'black',
                    fontFamily: 'Arial',
                    fontSize: 90,
                    fontWeight: 'bold',
                    text: 'My Social Card'
                  }
                }
              ]}
            />
          </p>
          <p>
            <a href="https://github.com/colbyfayock/cloudinary-examples/blob/main/examples/nextjs-social-media-card/pages/index.js#L23">See the code on github.com.</a>
          </p>
          <p>
            Preview the working card at <a href="https://www.opengraph.xyz/url/https%3A%2F%2Fcloudinary-nextjs-social-media-card.netlify.app%2F" target="_blank" rel="noreferrer">opengraph.xyz</a>
          </p>
        </div>
      </main>
    </>
  )
}