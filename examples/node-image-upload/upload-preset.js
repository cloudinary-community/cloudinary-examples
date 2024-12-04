require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

(async function run() {
  const image = './images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg';
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET

  const result = await cloudinary.uploader.upload(image, {upload_preset: uploadPreset});

  console.log(`Successfully uploaded ${image}`);
  console.log(`> Result: ${result.secure_url}`);
})();
