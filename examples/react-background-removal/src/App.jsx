import images from './data.json'
import * as React from 'react'
import { backgroundRemoval, dropShadow } from "@cloudinary/url-gen/actions/effect"
import { scale } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_PUBLIC_CLOUD_NAME
  }
});

function App() {
  const { cars, furniture } = images
  const [collection, setCollection] = React.useState({ title: 'cars', images: cars })

  return (
    <div className="max-w-3xl mx-auto py-20">
      <h2 className="text-3xl mx-auto mb-6">Product Selection</h2>

      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">

        <ul className="flex flex-wrap">
            <li className="mr-2">
              <input id="cars" className="sr-only peer" type="radio" name="collection" value="cars" onChange={e => setCollection({ title: 'cars', images: cars })} checked={collection.title === "cars"} />
              <label className="inline-block p-4 border-b-2 border-transparent peer-checked:border-blue-600 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer" htmlFor="cars">
                Cars
              </label>
            </li>
            <li className="mr-2">
              <input id="furniture" className="sr-only peer" type="radio" name="collection" value="furniture" onChange={e => setCollection({ title: 'furniture', images: furniture })} checked={collection.title === "furniture"} />
              <label className="inline-block p-4 border-b-2 border-transparent peer-checked:border-blue-600 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer" htmlFor="furniture">
                Furniture
              </label>
            </li>
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {collection.images.map(({ publicId, width, height }) =>
          <img
            width={width}
            height={height}
            key={publicId}
            src={
              cld.image(publicId)
                .effect(backgroundRemoval())
                .effect(
                  dropShadow()
                    .azimuth(150)
                    .elevation(50)
                    .spread(70)
                  )
                .resize(scale().width(width).height(height))
                .format("auto")
                .quality("auto")
                .toURL()
            }
          />
        )}
      </div>
    </div>
  )
}

export default App

