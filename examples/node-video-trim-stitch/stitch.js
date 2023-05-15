require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

const videoUrl = cloudinary.url('samples/elephants.mp4', {
  resource_type: 'video',
  transformation: [
    {
      flags: 'splice',
      overlay: 'video:samples:sea-turtle',
    },
    { flags: 'layer_apply' },
  ],
});

console.log(videoUrl);
