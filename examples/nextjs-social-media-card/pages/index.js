import Head from 'next/head';
import Image from 'next/image';

/* The Node SDK will only work in node-based environments such as getStaticProps */
import { v2 as cloudinary } from 'cloudinary';

import styles from '../styles/Home.module.css';

export default function Home({ ogImage }) {
  return (
    <>
      <Head>
        <title>Next.js Image Component &amp; Cloudinary</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImage} />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Next.js Social Media Card with Cloudinary
          </h1>
        </div>

        <div className={styles.container}>
          <h2>Card Preview</h2>
          <img src={ogImage} />
        </div>
      </main>
    </>
  )
}


export async function getStaticProps() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME
  });

  const ogImage = cloudinary.url('social-card-mountain', {
    width: 1012,
    height: 506,
    transformation: [
      {
        fetch_format: 'auto',
        quality: 'auto'
      },

      // Begin Parent Text Overlay

      {
        color: '#2E2F38',
        crop: 'fit',
        width: 892,
        overlay: {
          font_family: 'Source Sans Pro',
          font_size: 60,
          font_weight: 'bold',
          text: 'My Social Card'
        },
      },

        // By nesting overlays, we can take advantage of the natural flow of the image
        // or text in the overlay to position elements, such as setting a subtitle
        // to dynamically arrange itself to follow a headline.

        // Begin Nested Text Overlay

        {
          color: '#717387',
          crop: 'fit',
          width: 892,
          overlay: {
            font_family: 'Source Sans Pro',
            font_size: 40,
            font_weight: 'semibold',
            text: 'This is an example of how to generate a social media card on the fly with Cloudinary.'
          },
        },

        // End Nested Text Overlay

        {
          flags: 'layer_apply',
          gravity: 'north_west',
          y: 'h + 30'
        },

      // End  Parent Text Overlay

      {
        flags: 'layer_apply',
        gravity: 'north_west',
        x: 60,
        y: 60
      }
    ]
  });

  return {
    props: {
      ogImage
    }
  }
}