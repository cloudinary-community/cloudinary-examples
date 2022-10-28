require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME });

const image = cloudinary.url('social-card-mountain', {
  width: 1012,
  height: 506,
  secure: true,
  transformation: [
    {
      fetch_format: 'auto',
      quality: 'auto'
    },

    // Begin Parent Text Overlay

    {
      color: '#2E2F38',
      crop: 'fit',
      width: 892,
      overlay: {
        font_family: 'Source Sans Pro',
        font_size: 60,
        font_weight: 'bold',
        text: 'My Social Card',
        text_align: 'center'
      },
    },

      // By nesting overlays, we can take advantage of the natural flow of the image
      // or text in the overlay to position elements, such as setting a subtitle
      // to dynamically arrange itself to follow a headline.

      // Begin Nested Text Overlay

      {
        color: '#717387',
        crop: 'fit',
        width: 892,
        overlay: {
          font_family: 'Source Sans Pro',
          font_size: 40,
          font_weight: 'semibold',
          text: 'This is an example of how to generate a social media card on the fly with Cloudinary.',
          text_align: 'center'
        },
      },

      // End Nested Text Overlay

      {
        flags: 'layer_apply',
        gravity: 'north',
        y: 'h + 30'
      },

    // End  Parent Text Overlay

    {
      flags: 'layer_apply',
      gravity: 'north',
      y: 100
    }
  ]
});

console.log(image);