import {Cloudinary} from "@cloudinary/url-gen"
import {scale} from "@cloudinary/url-gen/actions/resize"

const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUD_NAME,
    },
})

const setImagesToUpload = (files: FileList) => {
    const imagesToUpload = document.getElementById(
        "imagesToUpload",
    ) as HTMLDivElement

    const imageList = document.createElement("ul")

    for (const file of files) {
        const selectedImage = document.createElement("li")
        selectedImage.innerHTML = file.name
        imageList.appendChild(selectedImage)
        imagesToUpload.innerHTML = imageList.outerHTML
    }
}

const clearUploadedImages = () => {
    const uploadedImages = document.getElementById(
        "uploadedImages",
    ) as HTMLDivElement

    uploadedImages.innerHTML = "No images uploaded yet."
}

const clearImagesToUpload = () => {
    const imagesToUpload = document.getElementById(
        "imagesToUpload",
    ) as HTMLDivElement

    imagesToUpload.innerHTML = "No images selected yet."
}

const setUploadedImages = (images: Array<{public_id: string}>) => {
    const uploadedImages = document.getElementById(
        "uploadedImages",
    ) as HTMLDivElement

    uploadedImages.innerHTML = ""

    images.forEach(image => {
        const cldImage = cld
            .image(image.public_id)
            .format("auto")
            .quality("auto")
            .resize(scale().width(225))

        const uploadedImage = document.createElement("img")
        uploadedImage.src = cldImage.toURL()
        uploadedImages.appendChild(uploadedImage)
    })
}

const setLoading = () => {
    const button = document.getElementById("submit") as HTMLButtonElement
    const input = document.getElementById("images") as HTMLButtonElement

    button.setAttribute("disabled", "true")
    button.innerText = "Uploading..."
    input.setAttribute("disabled", "true")
}

const clearLoading = () => {
    const button = document.getElementById("submit") as HTMLButtonElement
    const input = document.getElementById("images") as HTMLInputElement

    button.removeAttribute("disabled")
    button.innerText = "Upload"
    input.removeAttribute("disabled")
}

const clearForm = () => {
    const form = document.getElementById("upload") as HTMLFormElement

    form.reset()
}

export {
    clearForm,
    clearImagesToUpload,
    clearLoading,
    clearUploadedImages,
    setImagesToUpload,
    setLoading,
    setUploadedImages,
}
