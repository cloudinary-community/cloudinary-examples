# React Image Collage with Overlay

Create an image collage with React and also regular JavaScript using the image overlay feature.

## 🧰 Setting a base image

An overlay requires a base image resized to the size of the collage, as well hiding the base image with a solid color.

```tsx
import { fill } from '@cloudinary/url-gen/actions/resize';
import { colorize } from '@cloudinary/url-gen/actions/effect';

const baseImg = cld.image("some_image")
  .resize(fill().width(1200).height(1200))
  .effect(colorize().color('white'));
```

## Adding Overlays

With the base image in place, an overlay image can be added. Then a transformation can be applied to resize the overlay image, as well as a position set by the image gravity.

```tsx
baseImg.overlay(
  source(image("paintbrushes")
    .transformation(
      new Transformation().resize(
        fill().width(600).height(1200).gravity(autoGravity())
      )
    )
  )
  .position(
    new Position().gravity(compass("east"))
  )
);
```

See the collage in action at [src/App.tsx](src/App.tsx).

## 🚀 Get Started with This Example

- Clone this project with `degit`

```bash
npx degit cloudinary-community/cloudinary-examples/examples/react-image-collage react-image-collage
```

- Install the project dependencies with:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

- Replace the `cloud_name` in [src/App.tsx](src/App.tsx) with your Cloud Name.

- Start the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

- Visit the project at <http://localhost:5173>!
