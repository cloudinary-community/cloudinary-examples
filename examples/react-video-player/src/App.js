import VideoPlayer from './components/VideoPlayer';

import './App.css';

function App() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          React &amp; Cloudinary Video Player
        </h1>
      </div>

      <div className="container">
        <h2>Default Settings</h2>

        <VideoPlayer
          id="demo-player"
          publicId="videos/waterfall"
          width="3840"
          height="2160"
        />
      </div>

      <div className="container">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://cloudinary.com/documentation/cloudinary_video_player">
              Cloudinary Video Player Documentation
            </a>
          </li>
          <li>
            <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-video-player">
              Source on GitHub
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
