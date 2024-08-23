import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function handler(request, response) {
  const dateToday = new Date();
  const dateChristmas = new Date(`December 25 ${dateToday.getFullYear()}`);
  const timeLeft = dateChristmas - dateToday;

  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const image = cloudinary.url('examples/mountain_xr6uv2', {
    width: 2340,
    height: 1561,
    transformation: [
      {
        color: 'white',
        overlay: {
          font_family: 'Source Sans Pro',
          font_size: 120,
          font_weight: 'semibold',
          text: `${days} days, ${hours} hours, ${minutes} minutes`
        },
      },
      {
        flags: 'layer_apply'
      },
    ]
  })

  return response.redirect(image)
}