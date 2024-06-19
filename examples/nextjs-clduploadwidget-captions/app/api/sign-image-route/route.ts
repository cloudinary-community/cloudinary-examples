import { v2 as cloudinary } from 'cloudinary';

interface RequestBody {
  paramsToSign: Record<string, string>;
}

export async function POST(request: Request) {
  if (!process.env.CLOUDINARY_API_SECRET) {
    return Response.json({ error: 'API secret not set' }, { status: 500 });
  }

  const body: RequestBody | undefined = await request.json();

  if (!body || !body.paramsToSign) {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  const signature = cloudinary.utils.api_sign_request(
    body.paramsToSign,
    process.env.CLOUDINARY_API_SECRET as string,
  );

  return Response.json({ signature });
}
