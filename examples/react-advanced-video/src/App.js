import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo, lazyload } from '@cloudinary/react';

import './App.css';

import videos from './videos.json';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  }
});

function App() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          Cloudinary React SDK AdvancedVideo Component
        </h1>
      </div>

      <div className="container">
        <h2>Default</h2>
        <p>No additional configuration or settings.</p>
        <ul className="videos">
          {videos.map(video => {
            return (
              <li key={video.id}>
                <AdvancedVideo
                  controls
                  cldVid={cld.video(video.video)}
                />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Optimized</h2>
        <p>Format of auto (<code>f_auto</code>) and quality of auto (<code>q_auto</code>).</p>
        <ul className="videos">
          {videos.map(video => {
            return (
              <li key={video.id}>
                <AdvancedVideo
                  controls
                  cldVid={cld.video(video.video).delivery('q_auto').format('auto')}
                />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Plugins</h2>
        <p>Lazy loading and low quality placeholders.</p>
        <ul className="videos">
          {videos.map(video => {
            return (
              <li key={video.id}>
                <AdvancedVideo
                  controls
                  cldVid={cld.video(video.video).delivery('q_auto').format('auto')}
                  plugins={[ lazyload() ]}
                />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Cloudinary-Generated Poster</h2>
        <p>Uses <code>cld.image</code> to generate a video thumbnail as the <code>poster</code> prop.</p>
        <ul className="videos">
          {videos.map(video => {
            return (
              <li key={video.id}>
                <AdvancedVideo
                  controls
                  cldVid={cld.video(video.video).delivery('q_auto').format('auto')}
                  poster={cld.image(video.video).setAssetType('video').delivery('q_auto').format('auto:image').toURL()}
                />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Auto-Play Video Preview</h2>
        <p>Autoplays video with a Cloudinary-generated preview via <code>e_preview:duration_4</code>.</p>
        <ul className="videos">
          {videos.map(video => {
            return (
              <li key={video.id}>
                <AdvancedVideo
                  autoPlay
                  muted
                  loop
                  cldVid={cld.video(video.video).effect('e_preview:duration_4').delivery('q_auto').format('auto')}
                />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-advanced-video">See the code on github.com.</a>
        </p>
        <ul>
          {videos.map(video => {
            return (
              <li key={video.id}>
                { video.title }: <a href={video.link} rel="noreferrer">{video.link}</a>
              </li>
            )
          })}
        </ul>
      </div>

    </main>
  );
}

export default App;
