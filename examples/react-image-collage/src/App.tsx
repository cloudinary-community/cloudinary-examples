import { Cloudinary, Transformation } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { image } from '@cloudinary/url-gen/qualifiers/source';
import { Position } from '@cloudinary/url-gen/qualifiers/position';
import { autoGravity, compass } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { colorize } from '@cloudinary/url-gen/actions/effect';

function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "cloud_name"
    }
  });

  const baseImg = cld.image("flying_phone")
    .resize(fill().width(1200).height(1200))
    .effect(colorize().color('white'));

  baseImg.overlay(
        source(image("flying_phone")
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

  baseImg.overlay(
        source(image("hiking")
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

  return (
    <>
      <AdvancedImage cldImg={baseImg} />
    </>
  );
}

export default App;

// Code for abstracting into a function

// function App() {
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: 'demunxdyd',
//     },
//   });

//   const baseImg = cld.image('flying_phone').resize(fill().width(1200).height(1200)).effect(colorize().color('white'));

//   const addOverlays = (overlays: Overlay[]) => {
//     overlays.forEach((overlay: Overlay) => {
//       const { imageName, width, height, gravity, offsetX } = overlay;
//       baseImg.overlay(
//         source(
//           image(imageName).transformation(
//             new Transformation().resize(fill().width(width).height(height).gravity(autoGravity()))
//           )
//         ).position(new Position().gravity(compass(gravity)).offsetX(offsetX ?? 0))

//       );
//     });
//   };

//   type Overlay = {
//     imageName: string;
//     width: number;
//     height: number;
//     gravity: string,
//     offsetX?: number,
//   };

//   const overlays: Overlay[] = [
//     { imageName: 'food_3_lwvupk', width: 300, height: 600, gravity: 'north_west' },
//     { imageName: 'cld-sample-4', width: 300, height: 600, gravity: 'north_west', offsetX: 300 },
//     { imageName: 'food_1_bnjenq', width: 600, height: 600, gravity: 'south_west' },
//     { imageName: 'food_4_sbgsu3', width: 600, height: 600, gravity: 'north_east' },
//     { imageName: 'food_2_s10f9o', width: 600, height: 600, gravity: 'south_east' },
//   ];

//   addOverlays(overlays);

//   return (
//     <>
//       <AdvancedImage cldImg={baseImg} />
//     </>
//   );
// }

// export default App;
