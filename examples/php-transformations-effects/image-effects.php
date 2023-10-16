#!/usr/bin/php
<?php
require_once('vendor/autoload.php');

use Cloudinary\Cloudinary;
use Cloudinary\Transformation\Resize;
use Cloudinary\Transformation\Effect;
use Cloudinary\Transformation\Rotate;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$cld = new Cloudinary([
  'cloud_name' => $_ENV["CLOUDINARY_CLOUD_NAME"],
  'api_key' => $_ENV["CLOUDINARY_API_KEY"],
  'api_secret' => $_ENV["CLOUDINARY_API_SECRET"]
]);

echo $cld->image('samples/smile.jpg')
  ->resize(Resize::fill()->width(600)->height(600))
  ->rotate(Rotate::byAngle(180))
  ->effect(Effect::sepia())
  ->effect(Effect::cartoonify());
?>