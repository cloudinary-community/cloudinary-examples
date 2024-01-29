# Personalized Email Images in Node.js with Cloudinary Node.js SDK

Add personalized images based on user data to your emails with Cloudinary, Nodemailer (Optional) and Node.js.

## 🧰 Using the SDK in a Node project

To use the SDK in a Node project, first import library:

```js
const cloudinary = require('cloudinary').v2;
# or
import { v2 as cloudinary } from 'cloudinary'
```

Then configure a new instance of Cloudinary:

```js
cloudinary.config({
  cloud_name: '<Your Cloud Name>',
  api_key: '<Your API Key>',
  api_secret: '<Your API Secret>',
});
```

To create an image, first supply Cloudinary with our base image's public ID. For this example the public IDs have been modified to match the user's interest in the data.json file.

```js
const generatedImage = await cloudinary.image(`email-${user.interest}`);
```

To apply transformations to the image, we can add a transformation array with transformation objects. For example, this is the code needed to crop an image, give it rounded corners and export it as a JPG.

```js
const generatedImage = await cloudinary.image(`email-${user.interest}`, {
  transformation: [{ width: 800, height: 500, crop: 'fill', format: 'jpg', radius: 10 }],
});
```

Additional transformations can be added to the array such as a text overlay. In order to set transformation to a specific layer, the `layer_apply` flag must be set.

```js
const generatedImage = await cloudinary.image(`email-${user.interest}`, {
  transformation: [
    { width: 800, height: 500, crop: 'fill', format: 'jpg', radius: 10 },
    {
      overlay: {
        font_family: 'Arial',
        font_size: 50,
        font_weight: 'bold',
        text: 'some text',
      },
    },
    { flags: 'layer_apply', gravity: 'north_east' }, // <- layer_apply flag
  ],
});
```

In this example, the `layer_apply` flag is used to apply the text overlay to the top right corner of the image.

Since the image transformations have access to user data, we can use that data to customize the image. For example, we can use the user's name to create a personalized image.

```js
const generatedImage = await cloudinary.image(`email-${user.interest}`, {
  transformation: [
    { width: 800, height: 500, crop: 'fill', format: 'jpg', radius: 10 },
    {
      overlay: {
        font_family: 'Arial',
        font_size: 50,
        font_weight: 'bold',
        text: `Hello ${user.firstName}`, // <- user data
      },
    },
    { flags: 'layer_apply', gravity: 'north_east' },
  ],
});
```

And the generated image can be sent in the body of an email using Nodemailer.

```js
const transporter = nodemailer.createTransport({
  // your nodemailer configuration
});

transporter.sendMail(
  {
    from: process.env.NODEMAILER_USER,
    to: user.email,
    subject: 'Your Personalized Image',
    html: `<a href="#">${generatedImage}</a>`,
  },
  (error, info) => {
    // nodemailer error handling
  }
);
```

> NOTE: In the above example `generatedImage` is an image tag that contains a source of the image url. If you want to return just the image url, change the `generatedImage` code from `cloudinary.image` to `cloudinary.url`.

## 🚀 Get Started with This Example

- Install the project dependencies with:

```bash
npm install
# or
bun install
```

- Edit the `.env.example` file with the required credentials and rename it to `.env`.

> NOTE: If you don't want to use Nodemailer you can remove the related credentials from the `.env.example` file and remove the code in `index.js` that uses Nodemailer.

```
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

NODEMAILER_HOST=""
NODEMAILER_USER=""
NODEMAILER_PASS=""
RECIPIENT_EMAIL=""
```

- Nodemailer needs to be set up with an email provider via SMTP. To set up Gmail, follow the instructions [here](https://nodemailer.com/usage/using-gmail/). Please note this is optional. You can trigger the transformations without sending an email.

- Run the script with

```bash
node start
# or
bun run index.js
```

- If you've chosen to up Nodemailer and emails have been sent successfully, you should see the following in your terminal:

```bash
Email response: 250 Message received
```

- If you've chosen not to use Nodemailer, you should see the generated image element in your terminal.

```bash
Generated Image: <img src='...' />
```
