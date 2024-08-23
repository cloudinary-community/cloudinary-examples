# Image Collage

## Intro

- Collages are a great way to showcase a collection of in a single image

- But creating them manually can get a bit tedious, especially if you have a lot of images

- Wouldn't it be cool if you could  write some JavaScript to generate them for you?

- Let me show you how.

## Context

- The Cloudinary API allows you make all kinds of image transformations

- One of them being overlays which are a bit like layers

- Giving you ability to layer text, shapes and other images on top of an existing image

- While also being able to control the size and position of the layer

- For this video we'll be using React, but the code will work in any JavaScript framework

## Tutorial

- Make sure you've installed both cloudinary-react and cloudinary-url-gen

- Then we'll choose a base image and display it using the CloudinaryImage object, making sure to add our cloud name

- We'll put that in a constant and use it as a prop for the AdvancedImage component

- Next we'll create an image overlay using our base image just to test things out

- But the problem with this is the overly is covering the base image which looks is not what we want

- To fix that, let's add a transformation to resize the overlay using fill and give it a width and height to crop the image to

- We'll also give it a gravity of autoGravity which means cloudinary will find the most interesting part of the image to show after resizing

- But this still doesn't fix the problem, because work best within the bounds of the base image

- So let's increase the width and height of the base image

- Then we'll use the colorize effect to make it white so it doesn't show up in the collage

- And now we just see the overlaid image

- We can add another image with the same size, but this time we'll change the position of the first to west using gravity and the second to east

- Which will put them side by side

- We can use this same technique to add a third image

- And we could even abstract this into a function

- Which accepts an array of objects as an argument


## Next Video

- Now that you know about overlays in the next video we'll learn how to use them to add watermarks to images

https://www.youtube.com/watch?v=5tOyDWNuPF0&list=PL8dVGjLA2oMpaTbvoKCaRNBMQzBUIv7N8&index=44

## Questions

- Is it okay to use Bun or do I have to use Node/NPM?