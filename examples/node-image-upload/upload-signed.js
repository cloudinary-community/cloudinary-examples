require('dotenv').config()
const cloudinary = require('cloudinary').v2;

const fs = require("node:fs")
const path = require("node:path")

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const imagePath = path.resolve(__dirname, "./images/stellan-johansson-1PP0Fc-KSd4-unsplash.jpg")

// PART ONE | Generate a signature

const timestamp = Math.round(new Date().getTime() / 1000)

const signature = cloudinary.utils.api_sign_request(
    {
        folder: "example",
        public_id: "satellite-rest-signed",
        unique_filename: false,
        timestamp,
    },
    process.env.CLOUDINARY_API_SECRET,
)

console.log(signature)

// PART TWO | Upload an image using the REST API

const fileBuffer = fs.readFileSync(imagePath)
const base64File = fileBuffer.toString("base64")
const dataUri = `data:image/jpeg;base64,${base64File}`

const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`

const formData = new FormData()

formData.append("file", dataUri)
formData.append("folder", "example")
formData.append("public_id", "satellite-rest-signed")
formData.append("unique_filename", "false")
formData.append("timestamp", timestamp.toString())
formData.append("api_key", process.env.CLOUDINARY_API_KEY)
formData.append("signature", signature)

const response = await fetch(url, {
    method: "POST",
    body: formData,
})

const signedRestImage = await response.json()
console.log(signedRestImage.url)

// PART THREE | Cloudinary SDK handles signing for you

const signedSdkImage = await cloudinary.uploader.upload(imagePath, {
    folder: "example",
    public_id: "satellite-sdk-signed",
    unique_filename: false,
})

console.log(signedSdkImage.url)
