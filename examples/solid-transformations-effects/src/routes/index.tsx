import { For } from 'solid-js';
import { Title } from "solid-start";
import { Cloudinary } from '@cloudinary/url-gen';
import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect';
import { scale, thumbnail } from '@cloudinary/url-gen/actions/resize';

import styles from '../styles/Home.module.css';

import images from '../images.json';

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
});

const PUBLIC_ID_BACKGROUND = 'examples/galaxy_sqrqb2';

export default function Home() {
  return (
    <main class={styles.main}>
      <Title>SolidJS &amp; Cloudinary Image Transformations</Title>

      <div class={styles.container}>
        <h1 class={styles.title}>
          SolidJS &amp; Cloudinary Image Transformations
        </h1>
      </div>

      <div class={styles.container}>
        <h2>Optimization</h2>
        <p>Format of auto (<code>f_auto</code>) and quality of auto (<code>q_auto</code>).</p>
        <ul class={styles.images}>
          <For each={images.slice(0, 4)}>
            {image => {
              const imgSrc = cld.image(image.image)
                                .format('auto')
                                .quality('auto')
                                .toURL();
              return (
                <li >
                  <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
                </li>
              )
            }}
          </For>
        </ul>
      </div>

      <div class={styles.container}>
        <h2>Background Removal</h2>
        <p>On-the-fly background removal (<code>e_background_removal</code>).</p>
        <ul class={styles.images}>
          <For each={images.slice(0, 4)}>
            {image => {
              const imgSrc = cld.image(image.image)
                                .effect(backgroundRemoval())
                                .resize(scale().width(image.width).height(image.height))
                                .quality('auto')
                                .format('auto')
                                .toURL();
              return (
                <li>
                  <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
                </li>
              )
            }}
          </For>
        </ul>
        <p>With solid color background.</p>
        <ul class={styles.images}>
          <For each={images.slice(0, 4)}>
            {image => {
              const imgSrc = cld.image(image.image)
                                .effect(backgroundRemoval())
                                .resize(scale().width(image.width).height(image.height))
                                .backgroundColor('#692ba8')
                                .quality('auto')
                                .format('auto')
                                .toURL();
              return (
                <li>
                  <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
                </li>
              )
            }}
          </For>
        </ul>
        <p>With an image underlay as the background.</p>
        <ul class={styles.images}>
          <For each={images.slice(0, 4)}>
            {image => {
              const imgSrc = cld.image(image.image)
                                .effect(backgroundRemoval())
                                .resize(scale().width(image.width).height(image.height))
                                .effect(`u_${PUBLIC_ID_BACKGROUND.replaceAll('/', ':')},c_fill,w_${image.width},h_${image.height}`)
                                .quality('auto')
                                .format('auto')
                                .toURL();
              return (
                <li>
                  <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
                </li>
              )
            }}
          </For>
        </ul>
      </div>

      <div class={styles.container}>
        <h2>Gravity</h2>
        <p>Using <code>g_auto</code> to automatically center to the subject.</p>
        <ul class={styles.images}>
          <For each={images.filter(({ id }) => ['girl', 'parrot', 'guitar-player', 'model'].includes(id))}>
            {image => {
              const imgSrc = cld.image(image.image)
                                .resize(thumbnail().width(1000).height(1000).gravity('auto'))
                                .quality('auto')
                                .format('auto')
                                .toURL();
              return (
                <li>
                  <img width="500" height="500" src={imgSrc} alt={image.title} loading="lazy" />
                </li>
              )
            }}
          </For>
        </ul>
        <p>Using <code>g_faces</code> (or <code>g_face</code>) to target the subject&apos;s face.</p>
        <ul class={styles.images}>
          <For each={images.filter(({ id }) => ['girl', 'parrot', 'guitar-player', 'model'].includes(id))}>
            {image => {
              const imgSrc = cld.image(image.image)
                                .resize(thumbnail().width(1000).height(1000).gravity('face'))
                                .quality('auto')
                                .format('auto')
                                .toURL();
              return (
                <li>
                  <img width="500" height="500" src={imgSrc} alt={image.title} loading="lazy" />
                </li>
              )
            }}
          </For>
        </ul>
      </div>

      <div class={styles.container}>
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/solid-transformations-effects">See the code on github.com.</a>
        </p>
        <ul>
          <For each={images}>
            {image => {
              return (
                <li>
                  { image.title }: <a href={image.link} rel="noreferrer">{image.link}</a>
                </li>
              )
            }}
          </For>
        </ul>
      </div>
    </main>
  );
}
