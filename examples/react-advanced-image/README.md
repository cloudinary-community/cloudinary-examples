# React Cloudinary AdvancedImage Component

The AdvancedImage component from the Cloudinary React SDK extends the default image-loading capabilities and allows developers to use advanced plugins to help build performance apps.

View Demo: <https://cloudinary-react-advanced-image.netlify.app/>

## 🧰 Using AdvancedImage in a React project

To use AdvanedImage in a React app, first import the component from the React SDK.

```
import { AdvancedImage } from '@cloudinary/react';
```

You can use the component similar to the HTML img tag except instead of passing a `src` prop, you can pass the `cldImg` prop with a URL Gen `cld.image` instance:

```
<AdvancedImage cldImg={cld.image(image.image)} />
```

In order to take advantage of Cloudinary transformations and effects, use the URL Gen SDK to chain additional configurations:

```
<AdvancedImage cldImg={cld.image(image.image).delivery('q_auto').format('auto')} />
```

In order to use AdvancedImage plugins, first import the plugin of your choice:

```
import { AdvancedImage, lazyload } from '@cloudinary/react';
```

Then append the plugin to the `plugins` prop array:

```
<AdvancedImage
  cldImg={cld.image(image.image).delivery('q_auto').format('auto')}
  plugins={[ lazyload() ]}
/>
```

See all of the above in action at [src/App.js](src/App.js).

## 🚀 Get Started with This Example

* Create an environment variable file `.env.` and inside add:
```
REACT_APP_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

> Note: the image references inside of `src/images.json` must correspond to your Cloudinary Media Library.

* Install the project dependencies with:

```
yarn install
# or
npm install
```

* Start the development server with:

```
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:3000>!