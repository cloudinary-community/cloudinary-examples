import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";


import "./App.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: "tutorials",
  },
});

const original = cld.video("demo1").resize(fill().width(400).height(400)).delivery("q_auto").format("auto");
const mobile = cld.video("demo1").resize(
  fill()
    .height(401)
    .aspectRatio("9:16")
    .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.dog())))
).delivery("q_auto").format("auto")

const youtube = cld.video("demo1").resize(
  fill()
    .height(401)
    .aspectRatio("16:9")
    .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.dog())))
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
        <ul className="videos">
          <li>
            <AdvancedVideo controls cldVid={original} />
          </li>
          <li>
            <AdvancedVideo controls cldVid={youtube} />
          </li>
          <li>
            <AdvancedVideo controls cldVid={mobile} />
          </li>
        </ul>
      </div>
    </main >
  );
}

export default App;

