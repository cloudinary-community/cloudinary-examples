function normalizeSrc(src, width) {
  // Optimization options cannot be taken as arguments in the loader function.
  // To add optimization options like `q_auto`, `f_auto`, etc., add them to the src URL before the public ID.
  return `w_${width}/` + src.replace(/^\//, "");
}

export function cloudinaryLoader({ src, width }) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    throw new Error(
      "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is required in the environment"
    );
  }
  return `https://res.cloudinary.com/${cloudName}/image/upload/${normalizeSrc(src, width)}`;
}
