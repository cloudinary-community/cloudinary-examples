import { AdvancedImage } from "@cloudinary/react"
import {
  cartoonify,
  grayscale,
  pixelate,
  sepia,
  vectorize,
  vignette,
} from "@cloudinary/url-gen/actions/effect"
import { Cloudinary } from "@cloudinary/url-gen/index"
import { useState } from "react"

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
})

const EFFECTS = {
  none: null,
  sepia: sepia(),
  grayscale: grayscale(),
  cartoon: cartoonify(),
  pixelate: pixelate(),
  vignette: vignette(),
  vectorize: vectorize(),
}

export default function CldImage({ public_id }) {
  const [activeEffect, setActiveEffect] = useState("none")

  const myImage = cld.image(public_id)

  if (activeEffect !== "none") myImage.effect(EFFECTS[activeEffect])

  return (
    <div>
      <AdvancedImage className="main-image" cldImg={myImage} />
      <div className="effects">
        {Object.keys(EFFECTS).map(effect => {
          const imageWithFilter = cld.image(public_id)
          imageWithFilter.effect(EFFECTS[effect])

          return (
            <div
              onClick={() => setActiveEffect(effect)}
              className={`${effect} effect-preview ${
                activeEffect === effect && "active"
              }`}
              key={effect}
            >
              {effect === "none" ? (
                <div className='no-effect'></div>
              ) : (
                <AdvancedImage cldImg={imageWithFilter} />
              )}
              <span className="effect-name">{effect}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
