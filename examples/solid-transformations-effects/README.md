# Transformations & Effects in SolidJS with Cloudinary URL Gen SDK

## 🧰 Using the URL Gen SDK in a Solid project

To use the URL Gen SDK in a solid app, first import library:

```
import { Cloudinary } from '@cloudinary/url-gen';
```

Then configure a new instance of Cloudinary:

```
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
});
```

Where you can generate a Cloudinary URL by using the `cld.image` or `cld.video` methods such as:

```
cld.image('<Public ID>').toURL()
```

### Optimization

Using Cloudinary media optimization by setting the format and quality both to auto:

```
cld.image('<Public ID>').quality('auto').format('auto').toURL()
```

### Background Removal

Remove the background on-the-fly with:

```
cld.image('<Public ID>').effect('e_background_removal').toURL();
```

And add a background color with:

```
cld.image('<Public ID>').effect('e_background_removal').backgroundColor('#692ba8').toURL();
```

Or with add an underlay with:

```
cld.image('<Public ID>')
  .effect(`e_background_removal`)
  .effect(`u_${PUBLIC_ID_BACKGROUND.replaceAll('/', ':')},c_fill,w_${width},h_${height}`)
  .toURL();
```

> Note: The `replaceAll` is used to replace any instance of `/` in a Public ID path with `:` which is required when formatting an underlay or overlay. Additionally the crop, width, and height are applied to ensure the underlay doesn't exceed the size of the original image.


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

* Visit the project at <http://localhost:3000>!
