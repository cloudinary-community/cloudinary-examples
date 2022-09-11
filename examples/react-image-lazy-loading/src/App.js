import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, lazyload } from '@cloudinary/react';

import './App.css';

import images from './images.json';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  }
});

function App() {
  console.log('one')
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          &nbsp;
        </h1>
      </div>

      <div className="container">
        <ul className="images">
          {images.map(image => {
            return (
              <li key={image.id}>
                <AdvancedImage
                  width={image.width}
                  height={image.height}
                  cldImg={cld.image(image.image)}
                  alt={image.title}
                  plugins={[lazyload()]}
                />
              </li>
            )
          })}
        </ul>
      </div>


    </main>
  );
}

export default App;
