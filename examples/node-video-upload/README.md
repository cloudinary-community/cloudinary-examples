# Uploadinag Images to Cloudinary with the Node SDK

## 🧰 Uploading with the SDK in a Node project

To use the SDK in a Node project, first import library:

```
const cloudinary = require('cloudinary').v2;
# or
import { v2 as cloudinary } from 'cloudinary'
```

Then configure a new instance of Cloudinary:

```
cloudinary.config({
  cloud_name: '<Your Cloud Name>',
  api_key: '<Your API Key>',
  api_secret: '<Your Cloud Name>'
});
```

Finally, run the upload method, passing in your image source:

```
const image = './path/to/image.jpg'; // Can be a remote URL or base64 DataURI
const result = await cloudinary.uploader.upload(image);
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
