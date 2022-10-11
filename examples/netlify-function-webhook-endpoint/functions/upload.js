const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async (event, context) => {
  const { url, folder } = JSON.parse(event.body);

  const results = await cloudinary.uploader.upload(url, {
    tags: ['remove-background'],
    folder
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Success`,
      data: results
    })
  }
};