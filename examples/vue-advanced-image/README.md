# Vue Cloudinary AdvancedImage Component

The AdvancedImage component from the Cloudinary Vue SDK extends the default image-loading capabilities and allows developers to use advanced plugins to help build performance apps.

## 🧰 Using AdvancedImage in a Vue project

To use AdvancedImage in a Vue app, first import the component from the Vue SDK.

```
import { AdvancedImage } from '@cloudinary/vue';
```

You can use the component similar to the HTML img tag except instead of passing a `src` prop, you can pass the `cldImg` prop with a URL Gen `cld.image` instance:

```
<AdvancedImage :cldImg={cld.image('<Public ID>')} />
```

### Transformations & Effects

In order to take advantage of Cloudinary transformations and effects, use the URL Gen SDK to chain additional configurations:

```
<AdvancedImage :cldImg={cld.image('<Public ID>').delivery('q_auto').format('auto')} />
```

See all of the above in action at [src/App.js](src/App.js).

## 🚀 Get Started with This Example

* Create an environment variable file `.env.` and inside add:
```
VITE_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
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

* Visit the project at <http://127.0.0.1:5173>!
