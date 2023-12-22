"use client";

import { useEffect, useRef, useState } from 'react';
import { getCldImageUrl } from 'next-cloudinary/helpers';

import Container from '@/components/Container';
import CldImage from '@/components/CldImage';
import Button from '@/components/Button';

import { CloudinaryResource } from '@/types/cloudinary';

const backgrounds = [
  'nextjs-holiday-card/amy-shamblen-x2lm26Rs2PM-unsplash_morllz',
  'nextjs-holiday-card/tessa-rampersad-5toRIWF2GUY-unsplash_fvsedc',
  'nextjs-holiday-card/roberto-nickson-5PQn41LFsQk-unsplash_lv9qtc',
  'nextjs-holiday-card/grooveland-designs-2IP2_2zti_I-unsplash_r2ll35',
  'nextjs-holiday-card/almos-bechtold-x_sDxxccTtw-unsplash_hwpzhx'
]

export default function Home() {
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null | undefined>(null);
  const [error, setError] = useState<string | undefined>();
  const [results, setResults] = useState<{ default?: CloudinaryResource, transparent?: CloudinaryResource} | undefined>();
  const [selectedBackground, setSelectedBackground] = useState<string | undefined>(backgrounds[0]);

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
  
    setFile(target.files[0]);
  
    const file = new FileReader;
  
    file.onload = function() {
      setPreview(file.result);
    }
  
    file.readAsDataURL(target.files[0])
  }

  async function handleOnSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    setError(undefined);

    const formData = new FormData();

    if ( !file ) {
      setError('Please select a file');
      return;
    };

    formData.append('file', file);

    const result = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setResults({
      default: result,
      transparent: undefined
    });

    const transparentUrl = getCldImageUrl({
      src: result.public_id,
      removeBackground: true,
    });

    async function pollForProcessingImage(url: string) {
      try {
        await new Promise(async (resolve, reject) => {
          fetch(url).then(response => {
            if ( !response.ok ) {
              reject(response);
              return;
            }
            resolve(response);
          })
        })
      } catch(e: any) {
        if ( e.status === 423 ) {
          return await pollForProcessingImage(url);
        }
        return false;
      }
      return true;
    }

    await pollForProcessingImage(transparentUrl);

    const formDataTransparent = new FormData();

    formDataTransparent.append('file', transparentUrl)

    const resultTransparent = await fetch('/api/upload', {
      method: 'POST',
      body: formDataTransparent
    }).then(r => r.json());

    setResults(prev => ({
      ...prev,
      transparent: resultTransparent
    }));
  }

  function handleOnReset() {
    setResults(undefined);
    setFile(undefined);
    setPreview(undefined);
  }

  return (
    <>
      {/* {!results && ( */}
        <Container className="max-w-4xl my-12">
          {/* <h2 className="text-2xl font-bold mb-6">Upload an Image</h2>
          <p className="mb-6">Create a custom holiday card by uploading your image and selecting a new background.</p>
          <div className={`grid gap-12 ${preview ? 'grid-cols-2' : ''} mb-6`}>
            <div>
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
                    accept="image/*"
                    onChange={handleOnChange}
                  />
                </p>
                <Button>Submit</Button>
                {error && (
                  <p>{ error }</p>
                )}
              </form>
            </div>

            {preview && (
              <p><img src={preview as string} alt="Upload preview" /></p>
            )}
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Other Examples</h2> */}
          
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <CldImage
              src="nextjs-holiday-card/colby_ut0z6p"
              width={720}
              height={480}
              crop="fill"
              alt="Holiday Card"
              underlay="nextjs-holiday-card/almos-bechtold-x_sDxxccTtw-unsplash_hwpzhx"
              overlays={[
                {
                  text: {
                    text: 'Happy New Year!'.toUpperCase(),
                    color: 'black',
                    fontFamily: 'Oswald',
                    fontSize: 80,
                    fontWeight: 'bold'
                  },
                  position: {
                    gravity: 'south',
                    y: 45
                  }
                },
                {
                  text: {
                    text: 'Happy New Year!'.toUpperCase(),
                    color: 'white',
                    fontFamily: 'Oswald',
                    fontSize: 80,
                    fontWeight: 'bold'
                  },
                  position: {
                    gravity: 'south',
                    y: 50
                  }
                },
              ]}
            />

            <CldImage 
              src="nextjs-holiday-card/snow_wbbpgq"
              width={720}
              height={480}
              crop="fill"
              alt="Holiday Card"
              overlays={[
                {
                  publicId: 'nextjs-holiday-card/Photo_on_12-18-23_at_2.24_PM_sk4rjx',
                  width: '1.0',
                  flags: ['relative'],
                  appliedEffects: [{
                    multiply: true
                  }]
                },
                {
                  publicId: 'nextjs-holiday-card/colby_ut0z6p',
                  width: '1.0',
                  flags: ['relative']
                },
                {
                  text: {
                    text: 'Happy Holidays!',
                    color: 'rgb:1e611d',
                    fontFamily: 'Berkshire Swash',
                    fontSize: 80
                  },
                  position: {
                    gravity: 'south',
                    y: 145
                  }
                },
                {
                  text: {
                    text: 'Happy Holidays!',
                    color: 'white',
                    fontFamily: 'Berkshire Swash',
                    fontSize: 80
                  },
                  position: {
                    gravity: 'south',
                    y: 150
                  }
                },

                {
                  text: {
                    text: 'Steve & Janice',
                    color: 'rgb:1e611d',
                    fontFamily: 'Oswald',
                    fontSize: 80
                  },
                  position: {
                    gravity: 'south',
                    y: 45
                  }
                },
                {
                  text: {
                    text: 'Steve & Janice',
                    color: 'white',
                    fontFamily: 'Oswald',
                    fontSize: 80
                  },
                  position: {
                    gravity: 'south',
                    y: 50
                  }
                },
                {
                  width: '0.27',
                  publicId: 'nextjs-holiday-card/santa-hat_pua72w',
                  position: {
                    y: -170,
                    x: 5
                  },
                  flags: ['relative']
                },
              ]}
            />

            <CldImage
              src="nextjs-holiday-card/roberto-nickson-5PQn41LFsQk-unsplash_lv9qtc"
              width={720}
              height={480}
              crop="fill"
              gravity="north"
              alt="Holiday Card"
              overlays={[
                {
                  publicId: 'nextjs-holiday-card/colby_ut0z6p',
                  width: '1.0',
                  flags: ['relative']
                },
                {
                  text: {
                    text: 'Happy Holidays!',
                    color: 'rgb:1e611d',
                    fontFamily: 'Berkshire Swash',
                    fontSize: 80
                  },
                  position: {
                    gravity: 'south',
                    y: 45
                  }
                },
                {
                  text: {
                    text: 'Happy Holidays!',
                    color: 'white',
                    fontFamily: 'Berkshire Swash',
                    fontSize: 80
                  },
                  position: {
                    gravity: 'south',
                    y: 50
                  }
                },

                {
                  width: '0.27',
                  publicId: 'nextjs-holiday-card/santa-hat_pua72w',
                  position: {
                    y: -170,
                    x: 5
                  },
                  flags: ['relative']
                },
              ]}
            />
            
            <CldImage
              src="nextjs-holiday-card/colby_ut0z6p"
              width={720}
              height={480}
              crop="fill"
              alt="Holiday Card"
              underlay="nextjs-holiday-card/jason-leung-Xaanw0s0pMk-unsplash_ftbb7i"
              overlays={[
                {
                  text: {
                    text: 'Happy Birthday!'.toUpperCase(),
                    color: 'black',
                    fontFamily: 'Oswald',
                    fontSize: 80,
                    fontWeight: 'bold'
                  },
                  position: {
                    gravity: 'south',
                    y: 45
                  }
                },
                {
                  text: {
                    text: 'Happy Birthday!'.toUpperCase(),
                    color: 'white',
                    fontFamily: 'Oswald',
                    fontSize: 80,
                    fontWeight: 'bold'
                  },
                  position: {
                    gravity: 'south',
                    y: 50
                  }
                },
              ]}
            />
          </div>
        </Container>
      {/* )} */}
      {/* {results && (
        <Container className="max-w-4xl my-12">
          <div className="flex justify-between pb-4 border-b-2 border-slate-100 mb-6">
            <h2 className="text-2xl font-bold">Design Your Card</h2>
            <p><Button onClick={handleOnReset}>Restart</Button></p>
          </div>
          {!results.transparent?.public_id && (
            <p>Loading</p>
          )}
          {results.transparent?.public_id && (
            <div className="grid grid-cols-[1fr_80px] gap-6">
              <CldImage
                className="bg-slate-100"
                key={selectedBackground}
                src={selectedBackground || results.transparent.public_id}
                width={1600}
                height={1000}
                crop="fill"
                alt="Holiday Card"
                overlays={[
                  {
                    publicId: results.transparent.public_id,
                    height: '1.0',
                    position: {
                      x: -50,
                      gravity: 'south_east'
                    },
                    flags: ['relative']
                  },
                  {
                    publicId: results.transparent.public_id,
                    height: '1.0',
                    position: {
                      x: -50,
                      gravity: 'south_east'
                    },
                    flags: ['relative']
                  },
                  {
                    text: {
                      color: 'white',
                      text: 'Happy',
                      fontFamily: 'Berkshire Swash',
                      fontSize: 180,
                    },
                    position: {
                      x: 100,
                      y: -100,
                      gravity: 'west',
                    },
                    appliedEffects: [{
                      color: 'black',
                      shadow: 10,
                    }]
                  },
                  {
                    text: {
                      color: 'white',
                      text: 'Holidays',
                      fontFamily: 'Berkshire Swash',
                      fontSize: 220,
                    },
                    position: {
                      x: 100,
                      y: 100,
                      gravity: 'west',
                    },
                    appliedEffects: [{
                      color: 'black',
                      shadow: 10,
                    }]
                  },
                ]}
              />
              <div>
                <ul className="grid gap-2">
                  {backgrounds.map(background => {
                    return (
                      <li key={background} className={`border-4 ${selectedBackground === background ? 'border-primary' : 'border-slate-200'}`}>
                        <button className="block" onClick={() => setSelectedBackground(background)}>
                          <CldImage
                            className="block"
                            src={background}
                            width={160}
                            height={160}
                            crop="fill"
                            alt=""
                          />
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )}
        </Container>
      )} */}
    </>
  )
}