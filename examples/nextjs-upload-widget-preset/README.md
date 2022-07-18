# Next.js Using the Cloudinary Upload Widget with Upload Presets

Use the drop-in Cloudinary widget in a Next.js project.

View Demo: <https://cloudinary-nextjs-upload-widget-preset.netlify.app/>

## 🧰 Using the Cloudinary Upload Widget in Next.js for Unsigned Uploads with an Upload Preset

To use the Cloudinary Upload Widget with Next.js, we can optionally (but recommended) create a new component that includes any and all logic to handle loading the widget script along with the events that occur during the script loading and uploading process.

Start off by creating a new component, in this example `UploadWidget.js`, that includes the following code:

```
import { useRef } from 'react';
import Script from "next/script";

const UploadWidget = ({ children, onUpload }) => {
  const cloudinary = useRef();
  const widget = useRef();

  function createWidget() {
    const options = {
      cloudName: '<Your Cloud Name>',
      uploadPreset: '<Your Upload Preset>'
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
1. When creating the widget instance, we configure it using our Cloud Name and Upload Preset from Cloudinary along with an `onUpload` handler so that we can control the behavior where we use the component

See the code in action at [components/UploadWidget/UploadWidget.js](components/UploadWidget/UploadWidget.js).

Next we want to use this component:

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
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="<Your Upload Preset>"
```

* Start the development server with:

```
yarn dev
# or
npm run dev
```

* Visit the project at <http://localhost:3000>!
