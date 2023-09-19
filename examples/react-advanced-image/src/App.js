import { Cloudinary, Transformation } from '@cloudinary/url-gen';
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
import { fill, scale } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { image, text } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { opacity } from "@cloudinary/url-gen/actions/adjust";

import './App.css';

import images from './images.json';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  }
});

function App() {

  const myImage = cld.image('cld-sample-5');

  myImage
    .resize(fill(300, 300))
    .format('auto')
    .overlay(
      source(
        image('samples/cloudinary-icon')
          .transformation(new Transformation()
            .resize(scale().height(55))
          )
      )
        .position(new Position().gravity(compass('south_east')))
    )


  const mySecondImage = cld.image('cld-sample')

  mySecondImage
    .resize(fill(300, 300))
    .format('auto')
    .overlay(
      source(
        text('PREVIEW', new TextStyle('arial', 60)
          .fontWeight('bold'))
          .textColor('gray')
          .transformation(new Transformation().adjust(opacity(70)))
      )
    )

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
          {images.map(image => {
            return (
              <li key={image.id}>
                <AdvancedImage
                  width={image.width}
                  height={image.height}
                  cldImg={cld.image(image.image)}
                  alt={image.title}
                />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Optimized</h2>
        <p>Format of auto (<code>f_auto</code>) and quality of auto (<code>q_auto</code>).</p>
        <ul className="images">
          {images.map(image => {
            return (
              <li key={image.id}>
                <AdvancedImage
                  width={image.width}
                  height={image.height}
                  cldImg={cld.image(image.image).delivery('q_auto').format('auto')}
                  alt={image.title}
                />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Plugins</h2>
        <p>Lazy loading and low quality placeholders.</p>
        <ul className="images">
          {images.map(image => {
            return (
              <li key={image.id}>
                <AdvancedImage
                  width={image.width}
                  height={image.height}
                  cldImg={cld.image(image.image).delivery('q_auto').format('auto')}
                  alt={image.title}
                  plugins={[lazyload(), placeholder()]}
                />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Watermarks</h2>
        <p>Add watermarks to your images.</p>
        <img src={myImage} />
        <img src={mySecondImage} />
      </div>

      <div className="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-advanced-image">See the code on github.com.</a>
        </p>
        <ul>
          {images.map(image => {
            return (
              <li key={image.id}>
                {image.title}: <a href={image.link} rel="noreferrer">{image.link}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;