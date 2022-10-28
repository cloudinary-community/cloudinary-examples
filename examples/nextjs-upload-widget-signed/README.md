# Next.js Using the Cloudinary Upload Widget for Signed Uploads

Use the drop-in Cloudinary widget in a Next.js project.

View Demo: <https://cloudinary-nextjs-upload-widget-signed.netlify.app/>

## 🧰 Using the Cloudinary Upload Widget in Next.js for Signed Uploads

> ⚠️ Note: This is not the  recommended approach. Use the CldUploadWidget component with [Next Cloudinary](https://next-cloudinary.spacejelly.dev) for first-class Next.js support of the Cloudinary Upload Widget.

To use the Cloudinary Upload Widget with Next.js, we can optionally (but recommended) create a new component that includes any and all logic to handle loading the widget script along with the events that occur during the script loading and uploading process.

Start off by creating a new component, in this example `UploadWidget.js`, that includes the following code:

```
import { useRef } from 'react';
import Script from "next/script";

const UploadWidget = ({ children, onUpload }) => {
  const cloudinary = useRef();
  const widget = useRef();

  function generateSignature( callback, paramsToSign ) {
    fetch(`/api/sign-cloudinary-params`, {
      method: 'POST',
      body: JSON.stringify({
        paramsToSign
      })
    }).then(r => r.json())
      .then(({ signature }) => {
        callback(signature)
      });
  }

  function createWidget() {
    const options = {
      cloudName: '<Your Cloud Name>',
      apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      uploadSignature: generateSignature
    }

    return cloudinary.current?.createUploadWidget(options,
      function (error, result) {
        if ( error || result.event === 'success' ) {
          onUpload(error, result);
        }
      }
    );
  }

  function open() {
    if ( !widget?.current ) {
      widget.current = createWidget();
    }

    widget?.current && widget.current.open();
  }

  function handleOnLoad() {
    cloudinary.current = window.cloudinary;
  }

  return (
    <>
      {children({ open })}
      <Script id="cloudinary" src="https://widget.cloudinary.com/v2.0/global/all.js" onLoad={handleOnLoad} />
    </>
  )
}

export default UploadWidget;
```

We have a few moving parts here:
1. Load the Cloudinary Widget script using the Next.js Script component
1. When the script loads, we want to store the Cloudinary instance in a React ref so that we can continue to have access
1. The `open` function is passed to our `children` as an argument to the function, allowing us to access that function from where we use the component
1. When `open` is triggered, we first attempt to create a new widget instance if it hasn't been created, then we attempt to use that widget reference to open the upload modal and UI
1. When creating the widget instance, we configure it using our Cloud Name, our API Key, and a signature generator function along with an `onUpload` handler so that we can control the behavior where we use the component
1. The signature generator function makes a request to an API that subsequently signs parameters, provided by the upload widget to ensure an authenticated request

See the code in action at [components/UploadWidget/UploadWidget.js](components/UploadWidget/UploadWidget.js).

Inside of `generateSignature` we ultimately make a request to an API endpoint. Luckily Next.js allows us to create serverless APIs which is where we'll create this request.

Inside `pages/api` create a new file called `sign-cloudinary-params.js` and include the following:

```
import { v2 as cloudinary } from "cloudinary";

export default async function handler(req, res) {
  const body = JSON.parse(req.body) || {};
  const { paramsToSign } = body;

  try {
    const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET);
    res.status(200).json({
      signature
    });
  } catch (error) {
    res.status(500).json({
      error: e.message
    });
  }
}
```

Here we're doing the following:
1. Parsing the incoming body including the parameters provided by the Upload Widget
1. Pass those parameters to the Cloudinary `api_sign_request` method along with our Cloudinary API Secret to authenticate the request
1. Return the signature as part of the response

See the code in action at [pages/api/sign-cloudinary-params.js](pages/api/sign-cloudinary-params.js).

Next we want to use our component:

```
import UploadWidget from '../path/to/UploadWidget';

...

<UploadWidget onUpload={(error, result) => { /* Do Something With the Error or Result */ }}>
  {({ open }) => {
    function handleOnClick(e) {
      e.preventDefault();
      open();
    }
    return (
      <button onClick={handleOnClick}>
        Upload an Image
      </button>
    )
  }}
</UploadWidget>
```

Here we're doing the following:
1. Importing the widget from our component file
1. Using the UploadWidget component in our application
1. Pass in a `onUpload` prop to control the behavior once the upload is finished or fails
1. Use a function as the immediate child of our component allowing us to receive the `open` function to trigger the widget modal and UI
1. Render a button or UI that will trigger the `open` function on interaction

See the code in action at [pages/index.js](pages/index.js).

Once the interactive element triggers the open functionality, the widget should display a modal allowing you or your visitors to upload an image!

## 🚀 Get Started with This Example

* Install the project dependencies with:

```
yarn install
# or
npm install
```

* Add your environment variables to `.env.local`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
NEXT_PUBLIC_CLOUDINARY_API_KEY="<Your Cloudinary API Key>"
CLOUDINARY_API_SECRET="<Your Cloudinary API Secret>"
```

Note: the API secret does not have NEXT_PUBLIC as a prefix to prevent it from being available in the client.

* Start the development server with:

```
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:3000>!
