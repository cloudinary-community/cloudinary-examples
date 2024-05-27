"use client";

import NextImage from "next/image";
import styles from "./page.module.css";
import { CldImage } from "next-cloudinary";

import bridge from "./bridge.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Default Next.js Image component */}
      <NextImage
        className={styles.logo}
        src={bridge}
        alt="A photo of a bridge"
        width={640}
        height={360}
        priority
      />

      {/* Next.js Image with Cloudinary loader */}
      <NextImage
        width={640}
        height={360}
        src="bridge"
        alt="a photo of a bridge"
        priority
      />

      {/* Basic CldImage component usage */}
      <CldImage
        width={640}
        height={360}
        src="bridge"
        alt="A photo of a bridge"
        priority
      />

      {/*Advanced CldImage component usage */}
      <CldImage
        width={640}
        height={360}
        alt="cat in space"
        src="cat"
        crop="fill"
        removeBackground
        tint="70:blue:purple"
        underlay="space"
      />

      {/* Advanced CldImage component usage */}
      <CldImage
        width={640}
        height={360}
        alt="jazz band playing"
        src="samples/people/jazz"
        crop="fill"
        remove="woman with raised hands"
        replace={["saxophone", "holding cat"]}
      />
    </main>
  );
}
