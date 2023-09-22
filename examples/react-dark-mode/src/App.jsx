import './App.css';
import { useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { replaceColor } from '@cloudinary/url-gen/actions/adjust';

import { useThemeToggle } from './use-theme-toggle';

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  },
});

function App() {
  const { theme, toggleTheme } = useThemeToggle();

  const lightImage = cld.image('examples/cloudinary-logo-blue_ulaqws')
    .format('auto')
    .quality('auto')
    .toURL();

  const darkImage = cld.image('examples/cloudinary-logo-blue_ulaqws')
    .adjust(replaceColor('white'))
    .format('auto')
    .quality('auto')
    .toURL();

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <>
      <div className="section">
        <h2>Picture tag using media prefers-color-scheme</h2>
        <picture>
          <source srcSet={darkImage} media="(prefers-color-scheme: dark)" />
          <img src={lightImage} className="logo" alt="Cloudinary logo" />
        </picture>
        <p>
          The prefered scheme is set at the OS level, the picture tag will only
          display one of the images.
        </p>
        <p>
          If the prefered scheme is "dark" then the white image will be shown
          so, when the user click the theme toggler button setting the theme to
          light mode, the image will not be visible
        </p>
      </div>

      <div className="section">
        <h2>Preview Using JavaScript-based Theme</h2>
        <p>
          <img src={theme === 'dark' ? darkImage : lightImage} className="logo" alt="Cloudinary logo" />
        </p>
        <p>
          <button onClick={toggleTheme}>Toggle Dark Mode</button>
        </p>
        <p>
          Note: this does not change the OS level preferred scheme, this uses JavaScript and CSS to
          change the appearance of the page to preview dark mode using the same images.
        </p>
      </div>
    </>
  );
}

export default App;

