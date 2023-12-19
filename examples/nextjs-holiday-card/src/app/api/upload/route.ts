import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  const requestFormData = await request.formData();
  
  try {
    const file = requestFormData.get('file') as ( File | string );
    const options = JSON.parse(requestFormData.get('options') as string);

    let results;

    if ( file instanceof Blob ) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);

      results = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
          folder: `${process.env.CLOUDINARY_FOLDER}/uploads`,
          upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
          ...options
        }, function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        })
        .end(buffer);
      });
    } else if ( typeof file === 'string' ) {
      results = await cloudinary.uploader.upload(file, {
        folder: `${process.env.CLOUDINARY_FOLDER}/uploads`,
        ...options
      });
    } else {
      throw new Error('Invalid file type.');
    }

    return NextResponse.json(results);
  } catch(error) {
    console.log('error', error)
    let message = 'Unknown Error';

    if ( error instanceof Error ) {
      message = error.message;
    }

    return new Response(JSON.stringify({ error: message }), {
      status: 500
    })
  }
}