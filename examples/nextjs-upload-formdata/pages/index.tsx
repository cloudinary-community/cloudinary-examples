import { useState } from "react";
import Head from "next/head";

import { uploadFile } from "@/utils/uploadFile";

const TITLE = "FormData File Uploads with Next.js & Cloudinary Node SDK";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (!file) throw new Error("No file selected");
      const result = await uploadFile(file);
      if (!result) throw new Error("Failed to upload file");
      setFileUrl(result.secure_url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-3xl font-semibold py-5">{TITLE}</h1>

        <section className="flex flex-col items-center justify-between">
          <form onSubmit={handleSubmit} className="border rounded-lg p-4">
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-indigo-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-700 file:cursor-pointer focus:outline-none disabled:pointer-events-none disabled:opacity-60"
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 rounded-md py-2 px-4 mt-4 text-white w-full"
            >
              Upload
            </button>
          </form>
          {fileUrl && (
            <div className="whitespace-pre-wrap overflow-hidden">
              <code>{fileUrl}</code>
              <img src={fileUrl} alt="Uploaded image" />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
