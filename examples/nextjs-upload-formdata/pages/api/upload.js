import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

// Store environment variables in your .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  secure: true,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const file = await new Promise((resolve, reject) => {
      const form = formidable();
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
      });
      form.on('file', (formName, file) => {
        resolve(file);
      });
    });

    const data = await cloudinary.uploader.unsigned_upload(
      file.filepath,
      process.env.CLOUDINARY_UPLOAD_PRESET
    );

    res.status(200).json({ fileUrl: data.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server upload error' });
  }
}
