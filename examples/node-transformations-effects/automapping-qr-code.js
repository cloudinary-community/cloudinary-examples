require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: "bradgarropy",
    secure: true,
})

const cloudinaryUrl = cloudinary.url("cloudinary-qr-demo/bradgarropy.com", {
    transformation: [
        {effect: "make_transparent"},
        {effect: "replace_color:yellow"},
        {background: "black"},
        {effect: "vectorize", fetch_format: "svg"},
    ],
})

console.log(cloudinaryUrl)
