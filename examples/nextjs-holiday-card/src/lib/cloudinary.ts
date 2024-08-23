import { getCldImageUrl } from 'next-cloudinary';

import { CloudinaryResource } from '@/types/cloudinary';

type GetCollagePublicIds  = Array<CloudinaryResource["public_id"]>;

interface GetCollageOptions {
  
}

const templates: Record<number, Function> = {
  1: (publicIds: GetCollagePublicIds) => {
    return [
      {
        publicId: publicIds[0],
        width: 1200,
        height: 1200,
        crop: 'fill',
        gravity: 'auto'
      }
    ]
  },
  2: (publicIds: GetCollagePublicIds) => {
    return [
      {
        publicId: publicIds[0],
        position: {
          gravity: 'west'
        },
        width: 600,
        height: 1200,
        crop: 'fill',
        gravity: 'auto'
      },
      {
        publicId: publicIds[1],
        position: {
          gravity: 'east'
        },
        width: 600,
        height: 1200,
        crop: 'fill',
        gravity: 'auto'
      },
    ]
  },
  3: (publicIds: GetCollagePublicIds) => {
    return [
      {
        publicId: publicIds[0],
        position: {
          gravity: 'west'
        },
        width: 600,
        height: 1200,
        crop: 'fill',
        gravity: 'auto'
      },
      {
        publicId: publicIds[1],
        position: {
          gravity: 'north_east'
        },
        width: 600,
        height: 600,
        crop: 'fill',
        gravity: 'auto'
      },
      {
        publicId: publicIds[2],
        position: {
          gravity: 'south_east'
        },
        width: 600,
        height: 600,
        crop: 'fill',
        gravity: 'auto'
      },
    ]
  },
  4: (publicIds: GetCollagePublicIds) => {
    return [
      {
        publicId: publicIds[0],
        position: {
          gravity: 'north_west'
        },
        width: 600,
        height: 600,
        crop: 'fill',
        gravity: 'auto'
      },
      {
        publicId: publicIds[1],
        position: {
          gravity: 'north_east'
        },
        width: 600,
        height: 600,
        crop: 'fill',
        gravity: 'auto'
      },
      {
        publicId: publicIds[2],
        position: {
          gravity: 'south_west'
        },
        width: 600,
        height: 600,
        crop: 'fill',
        gravity: 'auto'
      },
      {
        publicId: publicIds[3],
        position: {
          gravity: 'south_east'
        },
        width: 600,
        height: 600,
        crop: 'fill',
        gravity: 'auto'
      },
    ]
  },
}

export function getCollage(publicIds: GetCollagePublicIds, option?: GetCollageOptions) {
  const template = templates[publicIds.length];

  if ( typeof template !== 'function' ) {
    throw new Error('No template found.');
  };

  return getCldImageUrl({
    src: publicIds[0],
    width: 1200,
    height: 1200,
    crop: 'fill',
    effects: [{
      colorize: '100,co_white',
      background: 'white',
    }],
    overlays: template(publicIds),
    version: Date.now()
  })
}