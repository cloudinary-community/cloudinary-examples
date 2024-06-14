require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const logTags = response => {
    const appliedTags = response.tags
    const possibleTags = response.info.categorization.google_tagging.data.slice(
        0,
        10,
    )

    console.log("POSSIBLE TAGS")
    console.table(possibleTags)

    console.log("APPLIED TAGS")
    console.table(appliedTags)
}

const images = [
    "aldebaran-s-uXchDIKs4qI-unsplash.jpg",
    "brian-mcgowan-I0fDR8xtApA-unsplash.jpg",
    "spacex-OHOU-5UVIYQ-unsplash.jpg",
    "spacex-VBNb52J8Trk-unsplash.jpg",
    "stellan-johansson-1PP0Fc-KSd4-unsplash.jpg",
]

const promises = images.map(image =>
    cloudinary.api.update(`cloudinary-existing-image-tag-demo/${image}`, {
        categorization: "google_tagging",
        auto_tagging: 0.9,
    }),
)

const results = await Promise.all(promises)
results.forEach(result => logTags(result))
