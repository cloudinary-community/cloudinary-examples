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
    <div className="App">
      <h1>Cloudinary Media Library</h1>
      <div className="card">
        <MediaLibrary onInsert={handleOnInsert}>
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
  )
}

export default App
