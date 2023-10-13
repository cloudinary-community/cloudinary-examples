# Uploading Images to Cloudinary with the Ruby SDK

## 🧰 Uploading with the SDK in a Ruby project

To use the SDK in a Ruby project, first install the library:

```

gem install cloudinary

```

Make sure you have Bundler installed.

Then configure a new instance of Cloudinary:

```
development: 
  cloud_name: "<Your Cloud Name>"
  api_key: "<Your API Key>"
  api_secret: "<Your Cloud Name>"
  secure: true
```

Finally, run the upload method, passing in your image source:

```
image = './path/to/image.jpg' # Can be a local file path or a remote URL
result = Cloudinary::Uploader.upload(image)
```

## 🚀 Get Started with This Example

* Create an environment variable file `.env` and inside add:
```
CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
CLOUDINARY_API_KEY="<Your API Key>"
CLOUDINARY_API_SECRET="<Your Cloud Name>"
```

* Install the project dependencies with:

```
gem install
```

* Run the Ruby script with:

```
ruby <filename>
```


The script will run in your terminal and you'll see the URL results logged.