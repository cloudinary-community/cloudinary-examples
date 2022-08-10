/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}`
  }
}

module.exports = nextConfig
