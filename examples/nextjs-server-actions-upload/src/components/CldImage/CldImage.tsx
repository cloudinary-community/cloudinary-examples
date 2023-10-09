"use client";
import { CldImage as NextCldImage, CldImageProps } from 'next-cloudinary';

const CldImage = (props: CldImageProps) => {
  return <NextCldImage {...props} />
}

export default CldImage;