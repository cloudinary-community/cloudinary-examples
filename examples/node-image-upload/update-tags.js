require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const pLimit = require('p-limit');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
  // this needs to be an active public ID in your configured Cloudinary
  // account. Tip: use upload-multiple.js and copy the resulting IDs
  '<Public ID>',
];

(async function run() {
  const limit = pLimit(2);

  const imagesToUpdate = images.map((image) => {
    return limit(async () => {

      // Use the update method passing along the categorization and auto_tagging configuration

      const result = await cloudinary.api.update(image, {
        categorization: "google_tagging",
        auto_tagging: 0.9,
      });

      console.log(`Successfully updated ${image}`);

      console.log('> POSSIBLE TAGS');
      console.table(result.info.categorization.google_tagging.data.slice(0, 10));

      console.log('> APPLIED TAGS');
      console.table(result.tags);

      return result;
    })
  });

  await Promise.all(imagesToUpdate);
})();