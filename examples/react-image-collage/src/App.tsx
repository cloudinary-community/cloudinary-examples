import { Cloudinary, Transformation } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { image } from '@cloudinary/url-gen/qualifiers/source';
import { Position } from '@cloudinary/url-gen/qualifiers/position';
import { autoGravity, compass } from '@cloudinary/url-gen/qualifiers/gravity';
import { colorize } from '@cloudinary/url-gen/actions/effect';
import { AdvancedImage } from '@cloudinary/react';

function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }
  });

  /**
   * Option 1: Manually creating overlays for each location
   */

  const baseImg = cld.image("samples/dessert-on-a-plate")
    .resize(fill().width(1200).height(1200))
    .effect(colorize().color('white'));

  baseImg.overlay(
        source(image("samples/dessert-on-a-plate")
          .transformation(
            new Transformation().resize(
              fill().width(600).height(1200).gravity(autoGravity())
            )
          )
        )
    .position(
      new Position().gravity(compass("west"))
    )
  );

  baseImg.overlay(
        source(image("cld-sample-4")
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

  baseImg.overlay(
        source(image("samples/breakfast")
          .transformation(
            new Transformation().resize(
              fill().width(600).height(600).gravity(autoGravity())
            )
          )
        )
    .position(
      new Position().gravity(compass("south_east"))
    )
  );

  /**
   * Option 2: Creating a reusable function for abstracting overlay generation
   */

  const baseImg2 = cld.image('samples/dessert-on-a-plate').resize(fill().width(1200).height(1200)).effect(colorize().color('white'));

  const addOverlays = (overlays: Overlay[]) => {
    overlays.forEach((overlay: Overlay) => {
      const { imageName, width, height, gravity, offsetX } = overlay;
      baseImg2.overlay(
        source(
          image(imageName).transformation(
            new Transformation().resize(fill().width(width).height(height).gravity(autoGravity()))
          )
        ).position(new Position().gravity(compass(gravity)).offsetX(offsetX ?? 0))

      );
    });
  };

  type Overlay = {
    imageName: string;
    width: number;
    height: number;
    gravity: string,
    offsetX?: number,
  };

  const overlays: Overlay[] = [
    { imageName: 'samples/dessert-on-a-plate', width: 300, height: 600, gravity: 'north_west' },
    { imageName: 'cld-sample-4', width: 300, height: 600, gravity: 'north_west', offsetX: 300 },
    { imageName: 'samples/breakfast', width: 600, height: 600, gravity: 'south_west' },
    { imageName: 'samples/food/pot-mussels', width: 600, height: 600, gravity: 'north_east' },
    { imageName: 'samples/food/spices', width: 600, height: 600, gravity: 'south_east' },
  ];

  addOverlays(overlays);

  return (
    <>
      <h2>Basic Collage</h2>
      
      <AdvancedImage cldImg={baseImg} width={600} height={600} />
      
      <h2>Collage with Generator Function</h2>
      
      <AdvancedImage cldImg={baseImg2} width={600} height={600} />
    </>
  );
}

export default App;