import images from './data.json'
import * as React from 'react'


import { backgroundRemoval, dropShadow } from "@cloudinary/url-gen/actions/effect";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "demo"
  }
});

function getOriginalUrl(publicID, width, height) {

  // Scale the image to the specified dimensions
  // and optimize format and quality
  const myImage = cld.image(publicID)
    .resize(scale().width(width).height(height))
    .format('auto')
    .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}

function getBackgroundRemovedUrl(publicID, width, height) {

  const myImage = cld.image(publicID);

  // Apply the background removal effect, scale to the specified
  // dimensions and optimize format and quality
  myImage
    .effect(backgroundRemoval())
    .resize(scale().width(width).height(height))
    .format('auto')
    .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}


function getBackgroundRemovedShadowUrl(publicID, width, height, az = 215, el = 45, spr = 50) {

  const myImage = cld.image(publicID);

  // Apply the background removal and drop shadow effects,
  // then scale the image to the specified dimensions
  // and optimize format and quality
  myImage
    .effect(backgroundRemoval())
    .effect(dropShadow().azimuth(az).elevation(el).spread(spr))
    .resize(scale().width(width).height(height))
    .format('auto')
    .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}

function CldImage({ src }) {
  return (
    <img src={src} loading="lazy" />
  )
}

function Album({ images, displayType = "original" }) {
  let getUrl = getOriginalUrl
  if(displayType === 'no-background') {
    getUrl = getBackgroundRemovedUrl
  }
  if(displayType === 'no-background-shadow') {
    getUrl = getBackgroundRemovedShadowUrl
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map(image => <CldImage src={getUrl(image, 1920, 1278)} key={image} />)}
    </div>
  )
}

function App() {
  const { cars, furniture, chairs } = images
  const [collection, setCollection] = React.useState({ title: 'cars', images: cars })
  const [display, setDisplay] = React.useState('original')

  return (
    <div className="max-w-3xl mx-auto py-20">
      <h2 className="text-3xl mx-auto">Product Selection</h2>
      <div className="grid grid-cols-3" >
        <label className="text-2xl">Cars
          <input type="radio" name="collection" value="cars" onChange={e => setCollection({ title: 'cars', images: cars})} checked={collection.title === "cars"} />
        </label>
        <label className="text-2xl">Furniture
          <input type="radio" name="collection" value="furniture" onChange={e => setCollection({title: 'furniture', images: furniture})} checked={collection.title === "furniture"} />
        </label>
        <label className="text-2xl">Chairs
          <input type="radio" name="collection" value="chairs" onChange={e => setCollection({ title: 'chairs', images: chairs})} checked={collection.title === "chairs"} />
        </label>
      </div>
      <h2 className="text-3xl mx-auto">How to display Selection</h2>
      <div className="grid grid-cols-3" >
        <label className="text-2xl">Original
          <input type="radio" name="display" value="original" onChange={e => setDisplay('original')} checked={display === "original"} />
        </label>
        <label className="text-2xl">No Background
          <input type="radio" name="display" value="no-background" onChange={e => setDisplay('no-background')} checked={display === "no-background"} />
        </label>
        <label className="text-2xl">No Background + Shadow
          <input type="radio" name="display" value="no-background-shadow" onChange={e => setDisplay('no-background-shadow')} checked={display === "no-background-shadow"} />
        </label>
      </div>
      <Album images={collection.images} displayType={display}/>
    </div>
  )
}

export default App
