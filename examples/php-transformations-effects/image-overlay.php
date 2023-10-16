#!/usr/bin/php
<?php
require_once('vendor/autoload.php');

use Cloudinary\Cloudinary;
use Cloudinary\Configuration\Configuration;
use Cloudinary\Tag\ImageTag;
use Cloudinary\Transformation\Overlay;
use Cloudinary\Transformation\Source;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$cld = new Cloudinary([
  'cloud_name' => $_ENV["CLOUDINARY_CLOUD_NAME"],
  'api_key' => $_ENV["CLOUDINARY_API_KEY"],
  'api_secret' => $_ENV["CLOUDINARY_API_SECRET"]
]);

echo $cld->image('samples/smile.jpg')
	->overlay(Overlay::source(
		Source::fetch("https://res.cloudinary.com/demo/image/upload/logos/cloudinary_full_logo_white_small.png")));
?>