"use client"

import { useState, useEffect, SyntheticEvent } from 'react';

import Container from '@/components/Container';
import CldImage from '@/components/CldImage';
import Button from '@/components/Button';

import images from '@/data/images.json';

interface CloudinaryResource {
  context?: {
    alt?: string;
    caption?: string;
  };
  public_id: string;
  secure_url: string;
}

function Home() {
  const [file, setFile] = useState<File>();
  const [sneakers, setSneakers] = useState<Array<CloudinaryResource>>();

  useEffect(() => {
    (async function run() {
      const response = await fetch('/api/resources');
      const { results } = await response.json();
      setSneakers(results);
    })()
  }, [])

  /**
   * handleOnSubmit
   */

  async function handleOnSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if ( typeof file === 'undefined' ) return;

    const formData = new FormData();
    
    formData.append('file', file);
    
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    
    const { results } = await response.json();

    setSneakers(prev => {
      if ( !prev ) return [results];
      return [results, ...prev]
    });
  }

  /**
   * handleOnImageChange
   */

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }

    setFile(target.files[0]);
  }

  return (
    <Container>
      <h2 className="text-xl font-bold mb-4">Add a New Image</h2>
      <form className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6" onSubmit={handleOnSubmit}>
        <p className="mb-6">
          <label htmlFor="image" className="block font-semibold text-sm mb-2">
            Select an Image to Upload
          </label>
          <input
            id="image"
            className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="image"
            required
            onChange={handleOnChange}
          />
        </p>
        <Button>Submit</Button>
      </form>
      <h2 className="text-xl font-bold mb-4">Images</h2>
      <ul className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {Array.isArray(sneakers) && sneakers.map((sneaker: CloudinaryResource) => {
          return (
            <li key={sneaker.public_id} className="rounded overflow-hidden bg-white dark:bg-slate-700">
              <div className="relative">
                <CldImage
                  width={800}
                  height={600}
                  src={sneaker.public_id}
                  alt={sneaker.context?.alt || ''}
                />
              </div>
              { sneaker.context?.caption && (
                <div className="py-4 px-5">
                  <p className="mb-1 text-md font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                    { sneaker.context?.caption || '' }
                  </p>
                </div>
              )}
              
            </li>
          )
        })}
      </ul>
      <h2 className="text-xl font-bold mb-4">Links</h2>
      <ul>
        {images.map(image => {
          return (
            <li key={image.name}>
              { image.name }: <a className="text-blue-600" href={image.link}>{ image.link }</a>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 py-10 border-[0] border-t border-solid border-slate-300">
        <p>
          Find more Cloudinary examples at: <a className="underline text-inherit" href="https://github.com/cloudinary-community/cloudinary-examples">github.com/cloudinary-community/cloudinary-examples</a>.
        </p>
      </div>
    </Container>
  )
}

export default Home;
