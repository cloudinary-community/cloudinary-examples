const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async (event, context) => {
  const { public_id, secure_url, tags } = JSON.parse(event.body);

  if ( Array.isArray(tags) && tags.includes('remove-background') ) {
    await cloudinary.uploader.upload(secure_url, {
      background_removal: 'cloudinary_ai',
      folder: 'examples/background-removed'
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Removing background from ${public_id}`
      })
    }
  }

  return {
    statusCode: 202,
    body: JSON.stringify({
      status: 'Ok'
    })
  }
};