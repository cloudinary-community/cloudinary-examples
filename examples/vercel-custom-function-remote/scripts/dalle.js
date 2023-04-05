require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const image = cloudinary.url('cld-sample-5', {
  sign_url: true,
  secure: true,
  custom_function:{
    function_type: 'remote',
    source: 'https://vercel-custom-function-remote.vercel.app/api/edge'
  },
  transformation: [
    {
      variables: [["$prompt", "!jellyfish in space!"]]
    },
  ]
});

console.log('image', image)