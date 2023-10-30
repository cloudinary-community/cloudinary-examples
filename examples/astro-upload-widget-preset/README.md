# Astro & Cloduinary Upload Widget Example

Example showing how to use the Cloudinary Upload Widget with an Astro project.

Demo: 

## 🧰 Using Upload Widget in an Astro project (Unsigned Uploads)

> **Note**
> This example uses unsigned uploads for simplicity. This is not recommended though. See the [Cloudinary documentation](https://cloudinary.com/documentation/upload_widget#unsigned_uploads) for more information.

1. Add the Cloudinary Upload Widget script to your Astro file.

```js
<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript">  
</script>
```

2. Add a button to handle the upload widget and an image to display the uploaded image.

```html
<button id="upload-button" class="cloudinary-button"> Upload files</button>

<div class="image-container">
    <img id="uploadedimage" class="uploadedimage" src="" />
</div>
```

3. Add the upload button event listener inside another script tag in the same file.

```js
const cloudinary = window && window.cloudinary;
  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
      uploadPreset: import.meta.env.PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      // cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      // multiple: false,  //restrict upload to a single file
      // folder: "user_images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    },

    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        document
          .getElementById("uploadedimage")
          .setAttribute("src", result.info.secure_url); // set the uploaded image url as the src attribute of the image element
      }
    }
  );

  document.getElementById("upload-button").addEventListener(
    "click",
    function () {
      myWidget.open();
    },
    false
  );
```

## 🚀 Get Started with This Example

1. Install the project dependencies with:

```bash
yarn install
# or
npm install
# or
pnpm install
```

2. Add your environment variables to `.env` or `.env.local`:

```
PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset_name
```

3. Start the development server with:

```bash
yarn dev
# or
npm run dev
# or
pnpm dev
```

4. Visit the project at <http://localhost:4321>!
