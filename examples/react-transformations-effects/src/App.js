import { Cloudinary } from '@cloudinary/url-gen';
import { pad } from '@cloudinary/url-gen/actions/resize';
import { generativeFill } from '@cloudinary/url-gen/qualifiers/background';

import './App.css';

import images from './images.json';
import { getPage } from '@cloudinary/url-gen/actions/extract';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  }
});

const PUBLIC_ID_BACKGROUND = 'examples/galaxy_sqrqb2';

function App() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          Cloudinary React SDK AdvancedImage Component
        </h1>
      </div>

      <div className="container">
        <h2>Optimization</h2>
        <p>Format of auto (<code>f_auto</code>) and quality of auto (<code>q_auto</code>).</p>
        <ul className="images">
          {images.slice(0, 4).map(image => {
            const imgSrc = cld.image(image.image)
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>AI Generative Fill</h2>
        <p>Original</p>
        <ul className="images">
          {[images[0], images[2], images[4], images[8]].map(image => {
            const imgSrc = cld.image(image.image)
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
        <p>With Generative Fill</p>
        <ul className="images">
          {[images[0], images[2], images[4], images[8]].map(image => {
            const imgSrc = cld.image(image.image)
                              .resize(
                                pad()
                                  .width(1200)
                                  .height(1800)
                                  .background(generativeFill())
                              )
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={1200} height={1200} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Background Removal</h2>
        <p>On-the-fly background removal (<code>e_background_removal</code>).</p>
        <ul className="images">
          {images.slice(0, 4).map(image => {
            const imgSrc = cld.image(image.image)
                              .effect('e_background_removal')
                              .resize(`w_${image.width},h_${image.height}`)
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
        <p>With solid color background.</p>
        <ul className="images">
          {images.slice(0, 4).map(image => {
            const imgSrc = cld.image(image.image)
                              .effect('e_background_removal')
                              .resize(`w_${image.width},h_${image.height}`)
                              .backgroundColor('#692ba8')
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
        <p>With an image underlay as the background.</p>
        <ul className="images">
          {images.slice(0, 4).map(image => {
            const imgSrc = cld.image(image.image)
                              .effect(`e_background_removal`)
                              .resize(`w_${image.width},h_${image.height}`)
                              .effect(`u_${PUBLIC_ID_BACKGROUND.replaceAll('/', ':')},c_fill,w_${image.width},h_${image.height}`)
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Pan &amp; Zoom</h2>
        <p>Zoom into the center of an image (<code>e_panzoom</code>).</p>
        <ul className="images">
          {images.filter(({ id }) => ['girl', 'parrot', 'guitar-player', 'model'].includes(id)).map(image => {
            const imgSrc = cld.image(image.image)
                              .resize(`w_${image.width},h_${image.height}`)
                              .effect('e_zoompan')
                              .quality('auto')
                              .format('gif')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
        <p>With looping (<code>e_panzoom/e_loop</code>).</p>
        <ul className="images">
          {images.filter(({ id }) => ['girl', 'parrot', 'guitar-player', 'model'].includes(id)).map(image => {
            const imgSrc = cld.image(image.image)
                              .resize(`w_${image.width},h_${image.height}`)
                              .quality('auto')
                              .effect('e_zoompan')
                              .effect('e_loop')
                              .format('gif')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
        <p>With zooming automatically to the subject (<code>e_zoompan:to_(g_auto)</code>)</p>
        <ul className="images">
          {images.filter(({ id }) => ['girl', 'parrot', 'guitar-player', 'model'].includes(id)).map(image => {
            const imgSrc = cld.image(image.image)
                              .resize(`w_${image.width},h_${image.height}`)
                              .effect('e_zoompan:to_(g_auto)')
                              .effect('e_loop')
                              .quality('auto')
                              .format('gif')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
        <p>With lower FPS (<code>e_panzoom,fps_2</code>)</p>
        <ul className="images">
          {images.filter(({ id }) => ['girl', 'parrot', 'guitar-player', 'model'].includes(id)).map(image => {
            const imgSrc = cld.image(image.image)
                              .resize(`w_${image.width},h_${image.height}`)
                              .effect('e_zoompan:fps_2')
                              .effect('e_loop')
                              .quality('auto')
                              .format('gif')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Gravity</h2>
        <p>Using <code>g_auto</code> to automatically center to the subject.</p>
        <ul className="images">
          {images.filter(({ id }) => ['girl', 'parrot', 'guitar-player', 'model'].includes(id)).map(image => {
            const imgSrc = cld.image(image.image)
                              .resize(`w_1000,h_1000,c_thumb,g_auto`)
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width="500" height="500" src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
        <p>Using <code>g_faces</code> (or <code>g_face</code>) to target the subject&apos;s face.</p>
        <ul className="images">
          {images.filter(({ id }) => ['girl', 'parrot', 'guitar-player', 'model'].includes(id)).map(image => {
            const imgSrc = cld.image(image.image)
                              .resize(`w_1000,h_1000,c_thumb,g_face`)
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width="500" height="500" src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Motion Removal</h2>
        <p>Using <code>pg_1</code> to grab the first frame.</p>
        <ul className="images">
          {images.filter(({ id }) => ['working-penguin'].includes(id)).map(image => {
            const imgSrc = cld.image(image.image)
                              .extract(getPage().byNumber(1))
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-transformations-effects">See the code on github.com.</a>
        </p>
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
  );
}

export default App;
