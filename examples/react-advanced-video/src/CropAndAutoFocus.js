import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { scale, fill } from "@cloudinary/url-gen/actions/resize";
import { AutoFocus } from '@cloudinary/url-gen/qualifiers/autoFocus'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import { autoGravity, } from '@cloudinary/url-gen/qualifiers/gravity'

import "./App.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  },
});

const original = cld
  .video("demo4")
  .resize(scale().width(400))
  .quality('auto')
  .format("auto");

const youtube = cld
  .video("demo4")
  .resize(fill().width(400)
    .aspectRatio("16:9")
    .gravity(
      autoGravity()
        .autoFocus(AutoFocus.focusOn(FocusOn.face()))
    )
  )
  .quality("auto")
  .format("auto");

const mobile = cld
  .video("demo4")
  .resize(fill().width(400)
    .aspectRatio("9:16")
    .gravity(
      autoGravity()
        .autoFocus(AutoFocus.focusOn(FocusOn.face()))
    )
  )
  .quality("auto")
  .format("auto");

const square = cld
  .video("demo4")
  .resize(fill().width(400)
    .aspectRatio("9:16")
  )
  .quality("auto")
  .format("auto");

function App() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">Cloudinary React SDK AdvancedVideo Component</h1>
      </div>
      <div className="container">
        <h2>Dynamic Cropping</h2>
        <p>
          Uses AI to identify the dominant object in the video and tracks them
        </p>
        <div className="videos">
          <div>
            <h3>Original Video </h3>
            <p>no additional configuration or settings.</p>
            <AdvancedVideo controls cldVid={original} autoPlay loop />
          </div>
          <div>
            <h3>Youtube like settings</h3>
            <p>Aspect Ratio 16:9, auto gravity and auto focus on faces</p>
            <AdvancedVideo controls cldVid={youtube} autoPlay loop />
          </div>
        </div>
        <div className="videos">
          <div>
            <h3>Mobile Video</h3>
            <p>Aspect Ratio 9:16, auto gravity and auto focus on faces</p>
            <AdvancedVideo controls cldVid={mobile} autoPlay loop />
          </div>

          <div>
            <h3>Square Video </h3>
            <p>Aspect Ratio 1:1 , auto gravity and auto focus on faces</p>
            <AdvancedVideo controls cldVid={square} autoPlay loop />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;


