import {Cloudinary} from "@cloudinary/url-gen"
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import images from '../images.json';
import baseStyles from "../base.css?url"
import appStyles from "../app.css?url"

const cld = new Cloudinary({
  cloud: {
    cloudName: "bradgarropy"
  }
});

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: baseStyles },
    { rel: "stylesheet", href: appStyles },
  ];
}

export default function Index() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          Remix Transformations & Effects
        </h1>
      </div>

      <div className="container">
        <h2>Optimization</h2>
        <p>Format of auto (<code>f_auto</code>) and quality of auto (<code>q_auto</code>).</p>
        <ul className="images">
          {images.slice(0, 4).map(image => {
            const imgSrc = cld.image(image.image)
                              .quality('auto')
                              .format('auto')
                              .toURL();
            return (
              <li key={image.id}>
                <img width={image.width} height={image.height} src={imgSrc} alt={image.title} loading="lazy" />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-transformations-effects">See the code on github.com.</a>
        </p>
        <ul>
          {images.slice(0, 4).map(image => {
            return (
              <li key={image.id}>
                { image.title }: <a href={image.link} rel="noreferrer">{image.link}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  );
}
