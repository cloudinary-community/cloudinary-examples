export const upload = async (image, callback) => {
  let formData = new FormData()

  formData.append("file", image)
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  )
  formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY)
  formData.append("folder", "webcam")

  await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then(r => {
      return r.json()
    })
    .then(data => {
      callback({ image_url: data.url, public_id: data.public_id })
    })
}
