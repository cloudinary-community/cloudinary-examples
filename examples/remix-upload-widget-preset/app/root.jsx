import { json} from "@remix-run/node";
import { ExternalScripts } from "remix-utils";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function loader() {
  const ENV = {
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME ?? "",
    CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET ?? "",
  };
  return json({  ENV });
}

export const meta= () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <ExternalScripts />
      </body>
    </html>
  );
}
