'use client';

import { CldImage as CldImageDefault } from 'next-cloudinary';

/** @param {import('next-cloudinary').CldImageProps} props  */
export default function CldImage(props) {
  return <CldImageDefault {...props} />;
}
