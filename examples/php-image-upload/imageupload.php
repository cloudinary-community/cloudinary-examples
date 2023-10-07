<?php

// Include the Cloudinary PHP SDK
require 'vendor/autoload.php';

// Set your Cloudinary API credentials
$cloudinary = new Cloudinary\Cloudinary([
    'cloud_name' => 'dlzz0d4yw',
    'api_key' => '375628352888284',
    'api_secret' => 'kTg_FC7crxiXD65hgEm8YHSfe5I',
]);

// Get the path to the image file to upload
$imagePath = 'demo.jpg';

// Upload the image to Cloudinary
$uploadResult = $cloudinary->uploadApi()->upload($imagePath);

if(isset($uploadResult)){
    echo 'image upload';
}

?>


