require('dotenv').config()

const cloudinary = require('cloudinary').v2;
const path = require('node:path');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// PART ONE - Adding existing subtitles

const video = cloudinary.url("examples/first", {
    resource_type: "video",
    overlay: {
        resource_type: "subtitles",
        public_id: "examples/first.transcript",
    },
})

console.log(video)

// PART TWO - Adding generated subtitles

const videoPath = path.resolve("./examples/second.mp4")

await cloudinary.uploader.upload(videoPath, {
    public_id: "second",
    folder: "examples",
    resource_type: "video",
    raw_convert: "google_speech:srt:vtt",
})

const uploadedVideo = cloudinary.url("examples/second", {
    resource_type: "video",
    overlay: {
        resource_type: "subtitles",
        public_id: "examples/second.transcript",
    },
})

console.log(uploadedVideo)
