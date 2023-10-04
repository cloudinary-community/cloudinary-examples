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
        <ul className="images">
          {images.map(watermarkImage => {
            return (
              <li key={watermarkImage.id}>
                <AdvancedImage
                  width={watermarkImage.width}
                  height={watermarkImage.height}
                  cldImg={
                    cld.image(watermarkImage.image)
                      .resize(fill(300, 300))
                      .overlay(
                        source(
                          image('examples/cloudinary-logo-blue_ulaqws')
                            .transformation(new Transformation()
                              .resize(scale().width(200))
                            )
                        )
                          .position(new Position().gravity(compass('south_east')))
                      )
                      .delivery('q_auto').format('auto')
                  }
                  alt={watermarkImage.title}
                  plugins={[lazyload(), placeholder()]}
                />
              </li>
            )
          })}
        </ul>
        <ul className="images">
          {images.map(watermarkImage => {
            return (
              <li key={watermarkImage.id}>
                <AdvancedImage
                  width={watermarkImage.width}
                  height={watermarkImage.height}
                  cldImg={
                    cld.image(watermarkImage.image)
                      .resize(fill(300, 300))
                      .overlay(
                        source(
                          text('PREVIEW', new TextStyle('arial', 60)
                            .fontWeight('bold'))
                            .textColor('gray')
                            .transformation(new Transformation().adjust(opacity(70)))
                        )
                      )
                      .delivery('q_auto').format('auto')
                  }
                  alt={watermarkImage.title}
                  plugins={[lazyload(), placeholder()]}
                />
              </li>
            )
          })}
        </ul>
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