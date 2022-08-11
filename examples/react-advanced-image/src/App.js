import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';

import './App.css';

import images from './images.json';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  }
});

function App() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          Cloudinary React SDK AdvancedImage Component
        </h1>
      </div>

      <div className="container">
        <h2>Default</h2>
        <p>No additional configuration or settings.</p>
        <ul className="images">
          {images.slice(0,4).map(image => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <AdvancedImage
                    width={image.width}
                    height={image.height}
                    cldImg={cld.image(image.image)}
                    alt={image.title}
                  />
                  <h3 className="imageTitle">
                    { image.title }
                  </h3>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Optimized</h2>
        <p>Format of auto (<code>f_auto</code>) and quality of auto (<code>q_auto</code>).</p>
        <ul className="images">
          {images.slice(0,4).map(image => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <AdvancedImage
                    width={image.width}
                    height={image.height}
                    cldImg={cld.image(image.image).delivery('q_auto').format('auto')}
                    alt={image.title}
                  />
                  <h3 className="imageTitle">
                    { image.title }
                  </h3>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Plugins</h2>
        <p>Lazy loading and low quality placeholders.</p>
        <ul className="images">
          {images.slice(0,4).map(image => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <AdvancedImage
                    width={image.width}
                    height={image.height}
                    cldImg={cld.image(image.image).delivery('q_auto').format('auto')}
                    alt={image.title}
                    plugins={[ lazyload(), placeholder() ]}
                  />
                  <h3 className="imageTitle">
                    { image.title }
                  </h3>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
