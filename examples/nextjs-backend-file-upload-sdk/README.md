# Next.js Uploading Files Using the Cloudinary Backend SDK

<!-- View Demo: demo-link-needed -->

## 🧰 Using the Cloudinary Backend SDK in Next.js for Unsigned File Uploads with an Upload Preset

Start off by getting your file from the form input. An example of doing so with state is in following example:

```
import Head from 'next/head';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
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

  return (
    <>
      <Head>
        <title>Upload Files with Next.js and Cloudinary Backend SDK</title>
        <meta
          name='description'
          content='Uploading files with Next.js and Cloudinary Backend SDK'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1>Using the Cloudinary Backend SDK for File Uploads</h1>
        <form onSubmit={handleSubmit}>
          <input type='file' name='file' onChange={handleFileChange} />
          <button type='submit'>Submit</button>
        </form>
        {fileUrl ? (
          <a href={fileUrl} target='_blank'>
            Click to see your file
          </a>
        ) : null}
      </main>
    </>
  );
}
```

There are a couple of things we're doing here:

1. We set our file state every time we change the file we input.
2. We use the FormData API to pass the file over to our API route where we'll handle the file upload and return the secure url from Cloudinary.

Here's how you can leverage Formidable to access the file on the back end of your application:

```
import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

<!-- Store environment variables in your .env.local file -->
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  secure: true,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

<!-- Be sure to export this config so Formidable can do the parsing -->
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

1. We configure the Cloudinary backend SDK with our environment variables. We do this to keep our values secure.
2. We define and export the new config so we can allow the request to be parsed by Formidable.
3. With access to the file via Formidable, we upload it to Cloudinary using the file path and the name of our preset.
4. Cloudinary returns data, containing our secure file url, which we pass back within JSON to the frontend for further usage.

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
