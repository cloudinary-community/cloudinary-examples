import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import {  scale, fill } from "@cloudinary/url-gen/actions/resize";
import { Gravity } from '@cloudinary/url-gen/qualifiers';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import { AutoFocus } from '@cloudinary/url-gen/qualifiers/autoFocus'
import "./App.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: "tutorials",
  },
});
// Basic transformation scale down
const original = cld.video("demo").resize(scale().width(400)).delivery("q_auto").format("auto");
const mobile = cld.video("demo").resize(
  fill().height(400).aspectRatio("9:16")
).delivery("q_auto").format("auto");

const mobile2 = cld.video("demo").resize(
  fill().height(400).aspectRatio("9:16")
  .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces())))
).delivery("q_auto").format("auto");

const youtube = cld.video("demo").resize(
  fill()
    .height(401)
    .aspectRatio("16:9")
    .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces())))
).delivery("q_auto").format("auto")



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
          
            <AdvancedVideo controls cldVid={original} />
            <AdvancedVideo controls cldVid={youtube} />
          
        </div>
        <div className="videos">
          
            <AdvancedVideo controls cldVid={mobile} />
          
            <AdvancedVideo controls cldVid={mobile2} />
          
        </div>
      </div>
    </main >
  );
}

export default App;

