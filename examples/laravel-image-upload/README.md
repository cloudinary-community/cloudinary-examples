## Laravel Cloudinary Image Upload App

## Getting started

-   Please ensure you have php <= 7.2 and composer installed on your machine
-   Clone this repo
-   Run `composer install`
-   Set your environment variable in your `.env` file: `CLOUDINARY_URL=xxxxxxxxxxxx`
-   Run `php artisan serve`
-   Access the `/upload` route to test uploads
-   Access the `/` route to test the image and video component

## Laravel Controller in Use

-   app/Http/Controllers/FileUploadController.php

## Blade Component in use for video and image tag

-   resources/views/welcome.blade.php

## View for upload

-   resources/views/upload.blade.php

```php

// Upload an Image File to Cloudinary with One line of Code
$uploadedFileUrl = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();

// Upload an Video File to Cloudinary with One line of Code
$uploadedFileUrl = Cloudinary::uploadVideo($request->file('file')->getRealPath())->getSecurePath();

// Upload any File to Cloudinary with One line of Code
$uploadedFileUrl = Cloudinary::uploadFile($request->file('file')->getRealPath())->getSecurePath();

// Upload an Image File to Cloudinary with One line of Code
$uploadedFileUrl = cloudinary()->upload($request->file('file')->getRealPath())->getSecurePath();

// Upload an Video File to Cloudinary with One line of Code
$uploadedFileUrl = cloudinary()->uploadVideo($request->file('file')->getRealPath())->getSecurePath();

// Upload any File to Cloudinary with One line of Code
$uploadedFileUrl = cloudinary()->uploadFile($request->file('file')->getRealPath())->getSecurePath();

// Store the uploaded file in the "anaconda" directory on Cloudinary
$result = $request->file('file')->store('anaconda', 'cloudinary');

// Store the uploaded file on Cloudinary
$result = $request->file('file')->storeOnCloudinary();

// Store the uploaded file on Cloudinary
$result = $request->file->storeOnCloudinary();

// Store the uploaded file in the "lambogini" directory on Cloudinary
$result = $request->file->storeOnCloudinary('lambogini');

// Store the uploaded file in the "lambogini" directory on Cloudinary with the filename "prosper"
$result = $request->file->storeOnCloudinaryAs('lambogini', 'prosper');


$result->getPath(); // Get the url of the uploaded file; http
$result->getSecurePath(); // Get the url of the uploaded file; https
$result->getSize(); // Get the size of the uploaded file in bytes
$result->getReadableSize(); // Get the size of the uploaded file in bytes, megabytes, gigabytes or terabytes. E.g 1.8 MB
$result->getFileType(); // Get the type of the uploaded file
$result->getFileName(); // Get the file name of the uploaded file
$result->getOriginalFileName(); // Get the file name of the file before it was uploaded to Cloudinary
$result->getPublicId(); // Get the public_id of the uploaded file
$result->getExtension(); // Get the extension of the uploaded file
$result->getWidth(); // Get the width of the uploaded file
$result->getHeight(); // Get the height of the uploaded file
$result->getTimeUploaded(); // Get the time the file was uploaded
```

**Attach Files** to Laravel **Eloquent Models**:

```php
$page = Page::create($this->request->input());
$page->attachMedia($file);   // Example of $file is $request->file('file');

$page = Page::find(2);
$page->attachMedia($file);  // Example of $file is $request->file('file');

$filesBelongingToSecondPage = Page::find(2)->fetchAllMedia();

$fileBelongingToSecondPage = Page::find(2)->fetchFirstMedia();

$fileBelongingToSecondPage = Page::find(2)->fetchLastMedia();

$page = Page::find(2);
$page->updateMedia($file);  // Example of $file is $request->file('file');

$page = Page::find(2);
$page->detachMedia($file)  // Example of $file is $request->file('file');
```

**Upload Files Via An Upload Widget**:

Use the `x-cld-upload-button` Blade component that ships with this Package like so:

```
<!DOCTYPE html>
<html>
    <head>
        ...
        @cloudinaryJS
    </head>
    <body>
        <x-cld-upload-button>
            Upload Files
        </x-cld-upload-button>
        <x-cld-image public-id='xxxxxxx'></x-cld-image>
        <x-cld-video public-id='xxxxxxx'></x-cld-video>
    </body>
</html>
```
