# React Cloudinary AdvancedVideo Component

The AdvancedVideo component from the Cloudinary React SDK extends the default video-loading capabilities and allows developers to use advanced plugins to help build performance apps.

View Demo: <https://cloudinary-react-advanced-video.netlify.app/>

## 🧰 Using AdvancedVideo in a React project

To use AdvancedVideo in a React app, first import the component from the React SDK.

```
import { AdvancedVideo } from '@cloudinary/react';
```

You can use the component similar to the HTML img tag except instead of passing a `src` prop, you can pass the `cldVid` prop with a URL Gen `cld.video` instance:

```
<AdvancedVideo cldVid={cld.video('<Public ID>')} />
```

### Transformations & Effects

In order to take advantage of Cloudinary transformations and effects, use the URL Gen SDK to chain additional configurations:

```
<AdvancedVideo cldVid={cld.video('<Public ID>').delivery('q_auto').format('auto')} />
```

### Plugins

In order to use AdvancedVideo plugins, first import the plugin of your choice:

```
import { AdvancedVideo, lazyload } from '@cloudinary/react';
```

Then append the plugin to the `plugins` prop array:

```
<AdvancedVideo
  cldVid={cld.video('<Public ID>').delivery('q_auto').format('auto')}
  plugins={[ lazyload() ]}
/>
```

### Cloudinary-Generated Poster

You can automatically generate a thumbnail from your video to use with the `poster` prop using the same URL Gen SDK you use to create your `cld.video` instance:

```
<AdvancedVideo
  cldVid={cld.video(video.video).delivery('q_auto').format('auto')}
  poster={cld.image(video.video).setAssetType('video').delivery('q_auto').format('auto:image').toURL()}
/>
```

### Cloudinary-Generated Preview Clip

You can automatically generate a short clip to serve as a preview for your video:

```
<AdvancedVideo
  cldVid={cld.video(video.video).effect('e_preview:duration_4')}
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