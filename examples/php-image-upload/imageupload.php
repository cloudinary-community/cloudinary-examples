<?php
require 'vendor/autoload.php';
use Cloudinary\Cloudinary;

// Load environment variables from .env file
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Set your Cloudinary API credentials
$cloudinary = new Cloudinary([
    'cloud_name' => $_ENV['CLOUDINARY_CLOUD_NAME'],
    'api_key' => $_ENV['CLOUDINARY_API_KEY'],
    'api_secret' => $_ENV['CLOUDINARY_API_SECRET'],
]);

// Get the path to the image file to upload
$imagePath = 'demo.jpg';

// Upload the image to Cloudinary
$uploadResult = $cloudinary->uploadApi()->upload($imagePath);

if(isset($uploadResult)){
    echo 'Image uploaded';
}
?>
