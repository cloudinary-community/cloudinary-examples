require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
})

const image = cloudinary.url("examples/shoes_kto0zb", {
    fetch_format: "webp",
})

console.log(image)
