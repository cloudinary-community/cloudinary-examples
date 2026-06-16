<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/do', function () {

   // return Cloudinary::getImage('l56d0bz2hwkntrg09123.png');

    //dd($result);

    // Upload a File to Cloudinary with One line of Code
    $url = (string) cloudinary()->getImage('l56d0bz2hwkntrg09123.png');

    // Another way of retrieving the image or video
    $anotherUrl = cloudinary()->getImage('l56d0bz2hwkntrg09123.png')->toUrl();

    return $anotherUrl;

    //$result->getPath();
    // dd($result);
});


Route::get('/upload', 'FileUploadController@showUploadForm');
Route::post('/upload', 'FileUploadController@storeUploads');
