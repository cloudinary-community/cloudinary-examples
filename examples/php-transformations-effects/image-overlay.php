#!/usr/bin/php
<?php
use Cloudinary\Transformation\Effect;
use Cloudinary\Transformation\Gravity;
use Cloudinary\Transformation\ImageTransformation;
use Cloudinary\Transformation\Rotate;

require_once('vendor/autoload.php');
use Cloudinary\Cloudinary;
use Cloudinary\Transformation\Overlay;
use Cloudinary\Transformation\Resize;
use Cloudinary\Transformation\Source;
          

$cld = new Cloudinary(['cloud_name' => $_ENV["CLOUDINARY_CLOUD_NAME"], 
'api_key' => $_ENV["API_KEY"], 
'api_secret' => $_ENV["API_SECRET"]]);
echo $cld->image('samples/smile.jpg')
  ->resize(Resize::fill()->width(600)->height(600))
  ->rotate(Rotate::byAngle(180))
  ->effect(Effect::sepia())
  ->effect(Effect::cartoonify());
?>