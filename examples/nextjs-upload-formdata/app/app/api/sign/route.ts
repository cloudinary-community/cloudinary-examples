import cloudinary from "@/lib/cloudinary";
import type { SignApiOptions } from "cloudinary";

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error("Missing CLOUDINARY_API_SECRET");
}

export async function POST(req: Request) {
  const body: SignApiOptions = await req.json();
  const signature = cloudinary.utils.api_sign_request(
    body,
    String(process.env.CLOUDINARY_API_SECRET)
  );

  return Response.json({ signature });
}
