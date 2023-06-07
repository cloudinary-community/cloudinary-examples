# Next.js Uploading Files from FormData Using the Cloudinary Node.js SDK

<!-- View Demo: demo-link-needed -->

## 🧰 Using the Cloudinary Node.js SDK in Next.js with FormData

Start off by getting your file from the form input.

For example, given a form with a submit and change handler:

```
<form onSubmit={handleSubmit}>
  <input type='file' name='file' onChange={handleFileChange} />
  <button type='submit'>Submit</button>
</form>
```

And the associated form handling logic:

```
const [file, setFile] = useState(null);
const [fileUrl, setFileUrl] = useState(null);

const handleFileChange = e => {
  setFile(e.target.files[0]);
};

const handleSubmit = async e => {
  try {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const { fileUrl } = await res.json();
    setFileUrl(fileUrl);
  } catch (error) {
    console.error(error);
  }
};
```

Where here, we're doing a couple of things:

1. We set our file state every time we change the file we input.
2. We use the FormData API to pass the file over to our API route where we'll handle the file upload and return the secure url from Cloudinary.

To handle the upload, we can create a new API endpoint at `pages/api/upload.js` with the following:

```
import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  secure: true,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const file = await new Promise((resolve, reject) => {
      const form = formidable();
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
      });
      form.on('file', (formName, file) => {
        resolve(file);
      });
    });

    const data = await cloudinary.uploader.unsigned_upload(
      file.filepath,
      process.env.CLOUDINARY_UPLOAD_PRESET
    );

    res.status(200).json({ fileUrl: data.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server upload error' });
  }
}

```

Here's what is happening above:

1. We configure the Cloudinary Node.js SDK with our environment variables. We do this to keep our values secure.
2. We define and export the new config so we can allow the request to be parsed by Formidable.
3. With access to the file via Formidable, we upload it to Cloudinary using the file path and the name of our preset.
4. Cloudinary returns data, containing our secure file url, which we pass back within JSON to the frontend for further usage.

Finally, to allow the above to make "unsigned uploads", be sure to create a new Upload Preset that allows unsigned uploads and configure the name with the environment variable `CLOUDINARY_UPLOAD_PRESET`.

> Alternatively, you can use the Node.js SDK to sign your uploads!

## 🚀 Get Started with This Example

- Install the project dependencies with:

```
yarn install
# or
npm install
```

- Add your environment variables to `.env.local`:

```
CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
CLOUDINARY_API_KEY="<Your Cloud API Key>"
CLOUDINARY_API_SECRET="<Your API Secret>"
CLOUDINARY_UPLOAD_PRESET="<Your Upload Preset>"
```

- Start the development server with:

```
yarn dev
# or
npm run dev
```

- Visit the project at <http://localhost:3000>!
