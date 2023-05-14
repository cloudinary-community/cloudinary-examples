# Video trimming and stitching in Node.js with Cloudinary Node.js SDK

## 🧰 Using the SDK in a Node project

To use the SDK in a Node project, first import library:

```bash
const cloudinary = require('cloudinary').v2;
# or
import { v2 as cloudinary } from 'cloudinary'
```

Then configure a new instance of Cloudinary:

```javascript
cloudinary.config({
  cloud_name: '<Your Cloud Name>',
});
```

Where you can generate a Cloudinary URL by using the `cld.url` method such as:

```javascript
cloudinary.url('<Your Public ID>', { VIDEO_TRANSFORMATION_OPTIONS_HERE });
```

## 🚀 Get Started with This Example

- Rename the `.env.example` file to `.env` and add your Cloudinary Cloud name:

  ```bash
  CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
  ```

- Install the project dependencies with:

  ```bash
  npm install
  ```

- `cd` into `examples/node-video-trim-stitch` folder

- Run the trim/stitch script with:

  ```bash
  node trim
  # or
  node stitch
  ```

The script will run in your terminal and you'll see the URL results logged.
