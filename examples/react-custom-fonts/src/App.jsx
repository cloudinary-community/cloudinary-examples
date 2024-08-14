import './App.css'

import {Cloudinary} from "@cloudinary/url-gen"
import {source} from "@cloudinary/url-gen/actions/overlay"
import {scale} from "@cloudinary/url-gen/actions/resize"
import {text} from "@cloudinary/url-gen/qualifiers/source"
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle"


const cloudinary = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
})

const cldImage = cloudinary
    .image("examples/sneakers_cuuqb1.jpg")
    .quality("auto")
    .format("auto")
    .resize(scale().width(600))
    .overlay(
        source(
            text(`
                  clean shoes
                  clean code
                `,
                new TextStyle(
                    // "example:CascadiaCode.woff2",
                    "Roboto Mono",
                    36,
                ).fontWeight("bold"),
            ).textColor("white"),
        ).position(
          new Position()
              .gravity(compass("south"))
              .offsetY(20),
        ),
    )
    .toURL()

function App() {
  return (
    <div>
      <img src={cldImage} />
    </div>
  )
}

export default App
