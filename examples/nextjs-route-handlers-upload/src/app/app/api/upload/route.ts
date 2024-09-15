import cloudinary from '@/lib/cloudinary';
import type { UploadApiResponse } from 'cloudinary';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return Response.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: 'auto' }, (error, result) => {
          if (error || !result) reject(error);
          else resolve(result);
        })
        .end(Buffer.from(fileBuffer));
    });

    return Response.json({ secure_url: result.secure_url });
  } catch (error) {
    console.error('Error uploading file:', error);
    return Response.json({ error: 'Error uploading file' }, { status: 500 });
  }
}
