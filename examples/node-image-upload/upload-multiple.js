require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const pLimit = require('p-limit');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
  './images/aldebaran-s-uXchDIKs4qI-unsplash.jpg',
  './images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg',
  './images/spacex-OHOU-5UVIYQ-unsplash.jpg',
  './images/spacex-VBNb52J8Trk-unsplash.jpg',
  './images/stellan-johansson-1PP0Fc-KSd4-unsplash.jpg',
  'https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
];

(async function run() {

  // Example using a simple for loop

  // for ( const image of images ) {
  //   const result = await cloudinary.uploader.upload(image);
  //   console.log(`Successfully uploaded ${image}`);
  //   console.log(`> Result: ${result.secure_url}`);
  // }

  // Example with paralell uploads and concurrency
  // Default Cloudinary upload limit for the free tier is 10
  const limit = pLimit(2);

  const imagesToUpload = images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      console.log(`Successfully uploaded ${image}`);
      console.log(`> Result: ${result.secure_url}`);
      return result;
    })
  });

  await Promise.all(imagesToUpload);
})();