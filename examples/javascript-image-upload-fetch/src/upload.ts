const uploadImages = async (images: File[]) => {
    const promises = images.map(image => uploadFile(image))
    const uploadedImages = await Promise.all(promises)

    return uploadedImages
}

const uploadFile = async (file: File) => {
    console.log(`Uploading ${file.name}...`)

    const formData = new FormData()

    formData.append("file", file)
    formData.append("upload_preset", "<Your Unsigned Upload Preset>")
    // formData.append("upload_preset", "<Your Signed Upload Preset>")

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/<Your Cloud Name>/upload",
        {
            method: "post",
            body: formData,
        },
    )

    const image = await response.json()
    console.log(image.url)
    return image
}

export {uploadFile, uploadImages}
