require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

(async function run() {
  const image = './images/aldebaran-s-uXchDIKs4qI-unsplash.jpg';
  const result = await cloudinary.uploader.upload(image);
  console.log(`Successfully uploaded ${image}`);
  console.log(`> Result: ${result.secure_url}`);
})();