#!/usr/bin/php
<?php
use Cloudinary\Configuration\Configuration;
use Cloudinary\Tag\ImageTag;
use Cloudinary\Transformation\TextStyle;
require_once('vendor/autoload.php');
use Cloudinary\Transformation\Effect;
use Cloudinary\Transformation\Gravity;
use Cloudinary\Transformation\ImageTransformation;
use Cloudinary\Transformation\Rotate;

use Cloudinary\Cloudinary;
use Cloudinary\Transformation\Overlay;
use Cloudinary\Transformation\Resize;
use Cloudinary\Transformation\Source;
          

Configuration::instance([
	'cloud_name' => $_ENV["CLOUDINARY_CLOUD_NAME"], 
	'api_key' => $_ENV["CLOUDINARY_API_KEY"], 
	'api_secret' => $_ENV["CLOUDINARY_API_SECRET"]
  ]);

echo ((new ImageTag('samples/smile.jpg')))
->overlay(Overlay::source(
	Source::fetch("https://res.cloudinary.com/demo/image/upload/logos/cloudinary_full_logo_white_small.png")));
?>