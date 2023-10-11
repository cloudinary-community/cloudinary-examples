import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET() {
  const { resources } = await cloudinary.api.resources_by_tag('nextjs-route-handlers-upload-sneakers', { context: true });
  return Response.json({ results: resources });
}



