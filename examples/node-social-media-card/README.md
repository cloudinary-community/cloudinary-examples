# Social Media Card in Node.js with Cloudinary Node.js SDK

## 🧰 Using the SDK in a Node project

To use the SDK in a Node project, first import library:

```
const cloudinary = require('cloudinary').v2;
# or
import { v2 as cloudinary } from 'cloudinary'
```

Then configure a new instance of Cloudinary:

```
cloudinary.config({
  cloud_name: '<Your Cloud Name>'
});
```

To create an image, we can first supply Cloudinary with our base image's public ID to generate a starting point:
```
const ogImage = cloudinary.url('social-card-mountain', {
  width: 1012,
  height: 506,
  secure: true,
  transformation: [
    {
      fetch_format: 'auto',
      quality: 'auto'
    }
  ]
});
```

To apply a layer of text, we can add a text overlay to our transformation array:

```
const ogImage = cloudinary.url('social-card-mountain', {
  width: 1012,
  height: 506,
  secure: true,
  transformation: [
    {
      fetch_format: 'auto',
      quality: 'auto'
    },
    {
      color: '#2E2F38',
      crop: 'fit',
      width: 892,
      overlay: {
        font_family: 'Source Sans Pro',
        font_size: 60,
        font_weight: 'bold',
        text: 'My Social Card',
        text_align: 'center'
      },
    },
    {
      flags: 'layer_apply',
      gravity: 'north',
      y: 100
    }
  ]
});
```

> Tip: You can embed multiple text overlays including nesting the text overlays to take advantage of the natural flow of the text. See the code in this example to see how!

Once we generate our image, we can pass it as data to our project's page and use it to supply metadata tags with our relevant image URL.

```
<meta property="og:image" content={ogImage} />
<meta property="og:image:secure_url" content={ogImage} />
<meta property="og:image:width" content="2024" />
<meta property="og:image:height" content="1012" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:image" content={ogImage} />
```

## 🚀 Get Started with This Example

* Create an environment variable file `.env` and inside add:
```
CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

* Install the project dependencies with:

```
npm install
```

* Run the node script with:

```
node <filename>
```

For example, inside the `examples/node-social-media-card` directory:

```
node social-media-card.js
```

The script will run in your terminal and you'll see the URL results logged.