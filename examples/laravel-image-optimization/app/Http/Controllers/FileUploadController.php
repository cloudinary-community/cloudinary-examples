<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;
use App\Pages;

class FileUploadController extends Controller
{
    public function showUploadForm()
    {
        return view('upload');
    }

    public function storeUploads(Request $request)
    {

        // $size = $request->file('file')->getSize();
        // $path = $request->file('file')->getPath();
        // $realpath = $request->file('file')->getRealPath();

        $result = cloudinary()->upload($request->file('image')->getRealPath())->getSecurePath();

        // dd($result);

        // Upload a Video File to Cloudinary with One line of Code
        // $result = cloudinary()->upload($request->file('file')->getRealPath())->getSecurePath();

        // // Upload an Image File to Cloudinary with One line of Code
        // $result = cloudinary()->uploadVideo($request->file('file')->getRealPath())->getSecurePath();

        // Store the uploaded file on Cloudinary
        //$result = $request->file('image')->storeOnCloudinary();

        // Store the uploaded file on Cloudinary
        //$result = $request->file('image')->store('alarmanda', 'cloudinary');

        //$res = cloudinary()->getImageTag('mc8rrqhubdfvdvmqcu0f')->serialize();

        dd($result);

        // Add transformations { Add to the documentation}
        // $result = cloudinary()->getImage('fdavgzpaxqdz4jjxznsh')->scale(500, 500);

        // dd((string)$result);

        // Store the uploaded file on Cloudinary
        // $result = $request->image->storeOnCloudinary();

        // $request->image->storeOnCloudinary()->getSize();

        // Store the uploaded file in the "lambogini" directory on Cloudinary
        // $result = $request->image->storeOnCloudinary();

        // Store the uploaded file in the "lambogini" directory as something else on Cloudinary
        // $result = $request->image->storeOnCloudinaryAs('goodness', 'prosper');

        // How to attach a file to a new Model
        // $post = new Post;
        // $post->title = 'This is how we do it';
        // $post->content = 'Like Like Like Man';
        // $post->save();

        // $post->attachMedia($request->image);

        // $post = new Post;
        // $post->title = 'dfhdhfdhfdf';
        // $post->content = 'Laravel Cloudinary content';
        // $post->save();

        // $post->attachMedia($request->image);

        // $result = Post::find(4)->fetchAllMedia();

        // dd($result[0]->getSecurePath());




        // How to attach a file to a new Model by retrieving first
        //$post = Post::find(2);
        //$post->attachMedia($request->image);


        //$result = Post::find(2)->getAllMedia();

        // $res = Post::find(1)->updateMedia($request->image);

        //$res = Post::find(1)->attachMedia($request->image);

        return back()
            ->with('url', $result[0]->getSecurePath());
    }
}
