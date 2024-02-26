import Head from 'next/head';
import Image from 'next/image';

import { CldImage, CldOgImage } from 'next-cloudinary';

import styles from '../styles/Home.module.css';

const TITLE = 'Next Cloudinary CldOgImage Component';

export default function Home() {
  return (
    <>
      <Head>
        <title>{ TITLE }</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:url" content="https://cloudinary-nextjs-cldogimage.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
      </Head>

      <CldOgImage
        src="examples/jellyfish_qjeelr"
        overlays={[
          {
            position: {
              y: -50
            },
            text: {
              color: 'white',
              fontFamily: 'Source Sans Pro',
              fontSize: 120,
              fontWeight: 'bold',
              text: 'Jellyfish'
            }
          },
          {
            position: {
              y: 50,
            },
            text: {
              color: 'white',
              fontFamily: 'Source Sans Pro',
              fontSize: 60,
              text: 'Swimming in the Darkness'
            }
          },
        ]}
        alt="Jellyfish Swimming in the Darkness"
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
              height="630"
              crop={{
                width: 1200,
                height: 630,
                type: 'fill',
                source: true
              }}
              src="examples/jellyfish_qjeelr"
              alt="Jellyfish Swimming in the Darkness"
              overlays={[
                {
                  position: {
                    y: -50
                  },
                  text: {
                    color: 'white',
                    fontFamily: 'Source Sans Pro',
                    fontSize: 120,
                    fontWeight: 'bold',
                    text: 'Jellyfish'
                  }
                },
                {
                  position: {
                    y: 50,
                  },
                  text: {
                    color: 'white',
                    fontFamily: 'Source Sans Pro',
                    fontSize: 60,
                    text: 'Swimming in the Darkness'
                  }
                },
              ]}
            />
          </p>
        </div>

        <div className={styles.container}>
          <h2>Resources</h2>
          <p>
            <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-cldogimage">See the code on github.com.</a>
          </p>
          <p>
            Preview the working card at <a href="https://www.opengraph.xyz/url/https%3A%2F%2Fcloudinary-nextjs-cldogimage.netlify.app%2F" target="_blank" rel="noreferrer">opengraph.xyz</a>
          </p>
        </div>
      </main>
    </>
  )
}