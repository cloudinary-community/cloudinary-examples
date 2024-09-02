import cloudinary from "@/lib/cloudinary";
import type { SignApiOptions } from "cloudinary";

export async function POST(req: Request) {
  const body: SignApiOptions = await req.json();
  const signature = cloudinary.utils.api_sign_request(
    body,
    String(process.env.CLOUDINARY_API_SECRET)
  );

  return Response.json({ signature });
}
