require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({cloud_name: process.env.CLOUDINARY_CLOUD_NAME})

// Quality Options
// ---------------
// auto
// best
// good
// eco
// low

const img = cloudinary.url("examples/shoes_kto0zb", {
    quality: "auto",
    fetch_format: "auto",
})

console.log(img)
