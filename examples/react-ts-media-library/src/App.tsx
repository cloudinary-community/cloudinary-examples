import { useState } from 'react';
import MediaLibrary from './components/MediaLibrary';
import type { MediaLibraryInsertResults } from './components/MediaLibrary/MediaLibrary.types';

import './App.css'

function App() {
  const [assets, setAssets] = useState<MediaLibraryInsertResults['assets']|undefined>();

  function handleOnInsert({ assets }: MediaLibraryInsertResults) {
    if ( Array.isArray(assets) ) {
      setAssets(assets);
    }
  }

  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          React &amp; Cloudinary Media Library
        </h1>
      </div>

      <div className="container">
        <div className="card">
          <MediaLibrary onInsert={handleOnInsert} options={{
            insertCaption: 'Add Assets',
            multiple: true
          }}>
            {({ open }) => {
              function handleOnOpen() {
                if ( typeof open == 'function' ) {
                  open();
                }
              }
              return (
                <button onClick={handleOnOpen}>
                  Open Library
                </button>
              );
            }}
          </MediaLibrary>
        </div>
      </div>

      <div className="container">
        {assets?.map(asset => {
          return (
            <div key={asset.public_id} className="card">
              { asset.resource_type === 'image' && (
                <img width={asset.width} height={asset.height} src={asset.secure_url} alt="" />
              )}

              { asset.resource_type === 'video' && (
                <video width={asset.width} height={asset.height} src={asset.secure_url} controls />
              )}
            </div>
          )
        })}
      </div>

      <div className="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-upload-widget-preset">See the code on github.com.</a>
        </p>
      </div>
    </main>
  )
}

export default App
