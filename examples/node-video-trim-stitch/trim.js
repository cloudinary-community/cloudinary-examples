require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

const start_offset = 6.5;
const end_offset = 20;
const duration = 15;

const videoUrl = cloudinary.url('samples/elephants.mp4', {
  resource_type: 'video',
  transformation: [
    {
      start_offset: start_offset,
      end_offset: end_offset,
      // duration: duration,
    },
  ],
});

console.log(videoUrl);
