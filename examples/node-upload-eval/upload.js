const dotenv = require("dotenv");
const cloudinary = require('cloudinary').v2;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// "./images/agnieszka-kowalczyk-c0VRNWVEjOA-unsplash.jpg";
// "./images/cade-roberts-EpIUbeFrqwQ-unsplash.jpg";
// "./images/blurry-cade-roberts-EpIUbeFrqwQ-unsplash.jpg";

(async function run() {
  const image = "./images/agnieszka-kowalczyk-c0VRNWVEjOA-unsplash.jpg";

  const result = await cloudinary.uploader
    .upload(image, {
      quality_analysis: true,
      eval: "if(resource_info.width > resource_info.height) { upload_options['tags'] = 'landscape'}",
      //eval: "if(resource_info.quality_analysis.focus < 0.5) { upload_options['tags'] = 'blurry' }",
    })
    .catch((error) => console.log(error));

  console.log(`Successfully uploaded ${image}`);
  console.log(result);
})();
