require('dotenv').config();

const cloudinary = require('cloudinary').v2;
const path = require("node:path")

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// PART ONE | PDF upload

const path = path.resolve(__dirname, "vcr.pdf")

const pdf = await cloudinary.uploader.upload(path, {
    folder: "examples",
    use_filename: true,
    unique_filename: false,
})

console.log(pdf.url)

// PART TWO | PDF retrieval

const url = cloudinary.url("examples/vcr", {
    transformation: [{page: 27}],
})

console.log(url)
