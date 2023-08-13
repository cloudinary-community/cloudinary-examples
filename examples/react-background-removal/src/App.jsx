import images from './data.json'
import * as React from 'react'


import { backgroundRemoval, dropShadow } from "@cloudinary/url-gen/actions/effect";
import { scale, fill} from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "demo"
  }
});



function App() {
  const { cars, furniture, chairs } = images
  const [collection, setCollection] = React.useState({ title: 'cars', images: cars })


  function getUrl(publicId) {
    return cld.image(publicId)
      .effect(backgroundRemoval()) // remove background
      .effect(dropShadow()) // add drop shadow
      .resize(scale().width(450).height(300))
      .format('auto')
      .quality('auto')
      .toURL()
  }

  return (
    <div className="max-w-3xl mx-auto py-20">
      <h2 className="text-3xl mx-auto">Product Selection</h2>
      <div className="grid grid-cols-3 mt-5" >
        <label className="text-2xl">Cars
          <input type="radio" name="collection" value="cars" onChange={e => setCollection({ title: 'cars', images: cars })} checked={collection.title === "cars"} />
        </label>
        <label className="text-2xl">Furniture
          <input type="radio" name="collection" value="furniture" onChange={e => setCollection({ title: 'furniture', images: furniture })} checked={collection.title === "furniture"} />
        </label>
        <label className="text-2xl">Chairs
          <input type="radio" name="collection" value="chairs" onChange={e => setCollection({ title: 'chairs', images: chairs })} checked={collection.title === "chairs"} />
        </label>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {collection.images.map(image => <img src={getUrl(image)} key={image} />)}
      </div>
    </div>
  )
}

export default App

