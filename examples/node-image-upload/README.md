# Uploadinag Images to Cloudinary with the Node SDK

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