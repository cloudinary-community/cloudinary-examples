require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function run() {
  const file = './large.mp4';
  try {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_large(
        file,
        {
          resource_type: 'video',
        },
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
    console.log(`> Result: ${result.secure_url}`);
  } catch (error) {
    console.error(error);
  }
}

run();
