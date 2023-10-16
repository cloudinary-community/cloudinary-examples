# Transformations & Effects in PHP with Cloudinary PHP SDK

## 🧰 Using the SDK in a PHP project

To use the SDK in a PHP project, first import library:

```
php composer.phar install
```

Then configure a new instance of Cloudinary:

```
$cld = new Cloudinary(['cloud_name' => $_ENV["CLOUDINARY_CLOUD_NAME"], 
    'api_key' => $_ENV["API_KEY"], 
    'api_secret' => $_ENV["API_SECRET"]]);
```
Where the ENV variables are replaced with your values.

Where you can generate a Cloudinary URL by using the `cld.image` method such as:

```
$cld->imageTag('samples/smile.jpg')
```

## 🚀 Get Started with This Example

* Create an environment variable file `.env` and inside add:
```
CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

* Install the project dependencies with:

```
npm install
```

* Run the PHP script with:

```
php <filename>
```

For example, inside the `examples/php-transformations-effects` directory:

```
php image-overlay.php
php image-effects.php
```

The script will run in your terminal and you'll see the URL results logged.