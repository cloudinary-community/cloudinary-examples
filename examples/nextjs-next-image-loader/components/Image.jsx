"use client";
import NextImage from "next/image";
import { cloudinaryLoader } from "../utils/cloudinaryLoader";

/** @param {import('next/image').ImageProps} props  */
export default function Image(props) {
  return <NextImage {...props} loader={cloudinaryLoader} />;
}
