import { useState } from "react";
import UploadWidget from "../components/UploadWidget";
import styles from "../styles/home.css";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

// create the scripts function with the correct type
// note: loader type is optional
let scripts = () => {
  return [
    {
      src: "https://widget.cloudinary.com/v2.0/global/all.js",
    },
  ];
};

// and export it through the handle, you could also create it inline here
// if you don't care about the type
export let handle = { scripts };

export default function Index() {
  const [url, updateUrl] = useState();
  const [error, updateError] = useState();
  function handleOnUpload(error, result, widget) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  }

  return (
    <main className="main">
      <div className="container">
        <h1 className="title">Remix & Cloudinary Uppload Widget</h1>
      </div>

      <div className="container">
        <blockquote className="warning"></blockquote>
      </div>

      <div className="container">
        <UploadWidget onUpload={handleOnUpload}>
          {({ open }) => {
            return <button onClick={open}>Upload Image</button>;
          }}
        </UploadWidget>
        {error && <p>{error}</p>}

        {url && (
          <>
            <p>
              <img src={url} alt="Uploaded" />
            </p>
            <p>{url}</p>
          </>
        )}
      </div>

      <div className="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/remix-upload-widget-preset">
            See the code on github.com.
          </a>
        </p>
      </div>
    </main>
  );
}
