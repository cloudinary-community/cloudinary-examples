import MediaLibrary from './components/MediaLibrary';

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Cloudinary Media Library</h1>
      <div className="card">
        <MediaLibrary>
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
  )
}

export default App
