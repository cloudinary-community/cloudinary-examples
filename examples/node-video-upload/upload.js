require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function run() {
  try {
    const file = './donut.mp4';
    const result = await cloudinary.uploader.upload(file, { resource_type: 'video'});
    console.log(`Successfully uploaded video: ${file}`);
    console.log(`> Result: ${result.secure_url}`);
  } catch (e) {
    console.error(e);
  }
}
run()
