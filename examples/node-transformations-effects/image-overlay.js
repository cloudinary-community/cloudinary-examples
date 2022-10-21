require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME });

const image = cloudinary.url('examples/shoes_kto0zb', {
  transformation: [
    {
      width: 600,
      height: 600,
      crop: 'fill',
      gravity: 'auto'
    },
    {
      overlay: 'examples:sale-tag',
      width: 100,
      height: 100
    },
    {
      flags: 'layer_apply',
      gravity: 'north_east',
      x: 10,
      y: 10
    }
  ]
});

console.log(image);