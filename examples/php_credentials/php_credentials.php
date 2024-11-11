<html lang="HTML5">

<head>
    <title>PHP Quick Start</title>
</head>

<body>
<?php

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv; 
use Cloudinary\Configuration\Configuration;
use Cloudinary\Tag\ImageTag;
use Cloudinary\Transformation\Resize;

// Load .env file 
$dotenv = Dotenv::createImmutable(__DIR__); 
$dotenv->load(); 

echo '<h1>Cloudinary PHP Set Credentials</h1>';

// Configure using your environment variable from the .env file

Configuration::instance($_ENV['CLOUDINARY_URL']);

// Asset delivery
echo '<h2>Cloudinary Image</h2>';

// Create the image tag with the transformed image
$imgtag = (new ImageTag('cld-sample'))
    ->resize(Resize::scale()
        ->width(400)
    );

echo $imgtag;
// The code above generates the following HTML image tag (for the demo account):
//  <img src="https://res.cloudinary.com/demo/image/upload/b_auto:predominant,c_pad,h_400,w_400/flower_sample">

echo '<br>';
echo '<br>';
echo '<br>';
?>
</body>

</html>