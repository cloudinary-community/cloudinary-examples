"use client";

import { uploadFile } from "@/utils/uploadFile";
import { useState } from "react";

export default function Uploader() {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (!file) throw new Error("No file selected");
      const result = await uploadFile(file, "/app/api/sign");
      if (!result) throw new Error("Failed to upload file");
      setFileUrl(result.secure_url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
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
        <div className="whitespace-pre-wrap overflow-hidden grid place-items-center">
          <code>{fileUrl}</code>
          <img src={fileUrl} alt="Uploaded image" />
        </div>
      )}
    </section>
  );
}
