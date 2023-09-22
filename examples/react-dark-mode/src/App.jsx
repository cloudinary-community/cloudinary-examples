import * as React from 'react';
import './App.css';

// Import the Cloudinary class.
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME
  },
});
const publicId = import.meta.env.VITE_PUBLIC_ID;
const baseImage = cld.image(publicId);

function useThemeToggle() {
  const [theme, setTheme] = React.useState('light');
  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  React.useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
    }
  }, []);

  return { theme, toggleTheme };
}

function App() {
  const { theme, toggleTheme } = useThemeToggle();
  const lightImage = cld.image(publicId);
  const darkImage = cld
    .image(publicId)
    .addTransformation('e_replace_color:white');

  React.useEffect(() => {
    const root = document.getElementById('root');
    if (theme === 'dark') {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
      <div>
        <h1>Original Image</h1>
        <img src={baseImage.toURL()} className="logo" alt="Cloudinary logo" />
      </div>

      <div>
        <h1>Picture tag using media prefers-color-scheme</h1>
        <picture>
          <source
            srcset={lightImage.toURL()}
            media="(prefers-color-scheme: light)"
          />
          <source
            srcset={darkImage.toURL()}
            media="(prefers-color-scheme: dark)"
          />
          <img src={baseImage.toURL()} className="logo" alt="Cloudinary logo" />
        </picture>
        <br />
        <p>
          The prefered scheme is set at the OS level, the picture tag will only
          display one of the images.{' '}
        </p>
        <p>
          If the prefered scheme is "dark" then the white image will be shown
          so, when the user click the theme toggler button setting the theme to
          light mode, the image will not be visible
        </p>
      </div>

      <div>
        <h1>With Cloudinary</h1>

        <img
          src={theme === 'dark' ? darkImage.toURL() : lightImage.toURL()}
          className="logo"
          alt="Cloudinary logo"
        />
      </div>
    </>
  );
}

export default App;

