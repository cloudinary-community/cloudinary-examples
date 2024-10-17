import cloudinary from "@/lib/cloudinary";
import type { SignApiOptions } from "cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error("Missing CLOUDINARY_API_SECRET");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body: SignApiOptions = req.body;
  const signature = cloudinary.utils.api_sign_request(
    body,
    String(process.env.CLOUDINARY_API_SECRET)
  );

  res.json({ signature });
}
