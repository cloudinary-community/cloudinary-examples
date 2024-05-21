require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    secure: true,
})

// Requires you to have an auto upload mapping set to `automapping-qr-code`
// or the path of your choice forwarded to a QR code service
// Ex: automapping-qr-code => https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=

const cloudinaryUrl = cloudinary.url("automapping-qr-code/bradgarropy.com", {
    transformation: [
        {effect: "make_transparent"},
        {effect: "replace_color:yellow"},
        {background: "black"},
        {effect: "vectorize", fetch_format: "svg"},
    ],
})

console.log(cloudinaryUrl)
