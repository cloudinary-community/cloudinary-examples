import { createSignal, Show } from 'solid-js';
import { Title } from 'solid-start';

import UploadWidget from '~/components/UploadWidget';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [url, updateUrl] = createSignal('');
  const [error, updateError] = createSignal(undefined);

  /**
   * handleOnUpload
   */

  interface Result {
    info: {
      secure_url: string;
    }
  }

  function handleOnUpload(error: any, result: Result, widget: any) {
    if ( error ) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  }

  return (
    <main class={styles.main}>
      <Title>SolidJS &amp; Cloudinary Upload Widget</Title>

      <div class={styles.container}>
        <h1 class={styles.title}>
          SolidJS &amp; Cloudinary Upload Widget
        </h1>
      </div>

      <div class={styles.container}>
        <h2>Unsigned with Upload Preset</h2>
        <UploadWidget onUpload={handleOnUpload}>
          {({ open }: { open: Function }) => {
            function handleOnClick(e: { preventDefault: () => void; }) {
              e.preventDefault();
              open();
            }
            return (
              <button onClick={handleOnClick}>
                Upload an Image
              </button>
            )
          }}
        </UploadWidget>

        <Show when={error()}>
          <p>{ error() }</p>
        </Show>

        <Show when={url()}>
          <p><img src={ url() } alt="Uploaded resource" /></p>
          <p>{ url() }</p>
        </Show>
      </div>

      <div class={styles.container}>
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/solid-upload-widget-preset">See the code on github.com.</a>
        </p>
      </div>
    </main>
  );
}
