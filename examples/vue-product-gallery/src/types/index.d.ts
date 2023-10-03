// This is needed in order to tell typescript about the global cloudinary object on the `window` object.
export { }

declare global {
  interface Window {
    cloudinary: {
      galleryWidget: (options: any) => { render: () => void }
    }
  }
}
