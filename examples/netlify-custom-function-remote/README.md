# Netlify Functions as Cloudinary Custom Remote Function

Cloudinary allows you to use a remote function to add custom processing to your media requests. We can use Netlify Functions to do things like generate BlurHash representations of images.

Once the remote function is invoked, the result is cached on Cloudinary's CDN.

## 🧰 Using Netlify Functions as Remote Functions in Cloudinary

The most important part when creating a remote custom function is ensuring that the response is as Cloudinary expects.

The [response structure](https://cloudinary.com/documentation/custom_functions#response_structure) should be the following:

```
{
  "statusCode": 200,
  "headers": {
    "Content-Type": "image/jpeg",
    "Content-Length": imageData.length
  },
  "isBase64Encoded": true,
  "body": imageData.toString('base64')
}
```

Read more: <https://cloudinary.com/documentation/custom_functions#response_structure>

When making the request, Cloudinary will send image data as multi-part form data.

[The request](https://cloudinary.com/documentation/custom_functions#request_structure) will be in the following structure:

- `files`: image data
- `metadata`: JSON data representing any configured metadata

Read more: https://cloudinary.com/documentation/custom_functions#request_structure

Finally, most use cases will require you to [sign the image](https://cloudinary.com/blog/on_the_fly_image_manipulations_secured_with_signed_urls) when generating image URLs with a custom remote function.

Read more: <https://cloudinary.com/blog/on_the_fly_image_manipulations_secured_with_signed_urls>

### Testing the Remote Function

To simulate making a request to the function as if Cloudinary was using it, you can create a request with the following:

Send a body as Form Data with:

- files: the actual image file data
- metadata: JSON in the form of a string with required metadata

Send the headers as:

- User-Agent: Typhoeus - https://github.com/typhoeus/typhoeus
- X-Cld-Signature: Cloudinary generated signature
- X-Cld-Timestamp: Time the request was made

When making the request, the response will be the new image data.

See [postman.json](postman.json) to import this request into [Postman](https://www.postman.com/).

### Generating an Image with a Remote Function

To generate an image using the Node SDK, you can specify the remote function like:

```
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: '<Your Cloudinary Cloud Name>',
  api_key: '<Your Cloudinary API Key>',
  api_secret: '<Your Cloudinary API Secret>'
});

const image = cloudinary.url('<Your Public ID>', {
  sign_url: true,
  secure: true,
  custom_function:{
    function_type: 'remote',
    source: '<Your Netlify Endpoint>'
  }
});
```

## 🚀 Get Started with This Example

* Install the project dependencies with:

```
yarn install
# or
npm install
```

* Start the development server using the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```
netlify dev
```

* The local server should now be available at <http://localhost:888> where you can make a POST request to this endpoint at <http://localhost:8888/.netlify/functions/blurhash>

See [postman.json](postman.json) to import this request into [Postman](https://www.postman.com/).