require 'dotenv'
require 'cloudinary'

Dotenv.load

Cloudinary.config do |config|
  config.cloud_name = ENV['CLOUDINARY_CLOUD_NAME']
  config.api_key = ENV['CLOUDINARY_API_KEY']
  config.api_secret = ENV['CLOUDINARY_API_SECRET']
end

images = [
  './images/aldebaran-s-uXchDIKs4qI-unsplash.jpg',
  './images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg',
  './images/spacex-OHOU-5UVIYQ-unsplash.jpg',
  './images/spacex-VBNb52J8Trk-unsplash.jpg',
  './images/stellan-johansson-1PP0Fc-KSd4-unsplash.jpg',
  'https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
]

images.each do |image|
  result = Cloudinary::Uploader.upload(image)
  puts "Successfully uploaded #{image}"
  puts "> Result: #{result['secure_url']}"
end
