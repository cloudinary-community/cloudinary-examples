import { Cloudinary } from '@cloudinary/url-gen';

import './App.css';

import images from './images.json';

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
          {images.map(image => {
            const imgSrc = cld.image(image.image).delivery('q_auto').format('auto').toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Background Removal</h2>
        <p>On-the-fly background removal (<code>e_background_removal</code>).</p>
        <ul className="images">
          {images.map(image => {
            const imgSrc = cld.image(image.image).effect('e_background_removal').delivery('q_auto').format('auto').toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} />
              </li>
            )
          })}
        </ul>
        <p>With solid color background.</p>
        <ul className="images">
          {images.map(image => {
            const imgSrc = cld.image(image.image)
                              .effect('e_background_removal')
                              .backgroundColor('#692ba8')
                              .delivery('q_auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} />
              </li>
            )
          })}
        </ul>
        <p>With an image underlay as the background.</p>
        <ul className="images">
          {images.map(image => {
            const imgSrc = cld.image(image.image)
                              .effect(`e_background_removal`)
                              .effect(`u_${PUBLIC_ID_BACKGROUND.replaceAll('/', ':')},c_fill,w_${image.width},h_${image.height}`)
                              .delivery('q_auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Resources</h2>
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
