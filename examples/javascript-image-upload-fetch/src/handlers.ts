import {uploadImages} from "./upload"
import {
    clearForm,
    clearImagesToUpload,
    clearLoading,
    clearUploadedImages,
    setImagesToUpload,
    setLoading,
    setUploadedImages,
} from "./utils"

const handleChange = async (event: Event) => {
    const {files} = event.target as HTMLInputElement

    if (!files || files.length === 0) {
        clearImagesToUpload()
        return
    }

    setImagesToUpload(files)
    clearUploadedImages()
}

const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault()

    const form = document.getElementById("upload") as HTMLFormElement
    const formData = new FormData(form)
    const images = formData.getAll("images")

    setLoading()
    const uploadedImages = await uploadImages(images as File[])
    clearLoading()

    setUploadedImages(uploadedImages)

    clearForm()
    clearImagesToUpload()
}

export {handleChange, handleSubmit}
