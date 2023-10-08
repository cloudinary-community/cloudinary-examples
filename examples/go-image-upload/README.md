# Uploading Images to Cloudinary with the Go SDK

## 🧰 Uploading with the SDK in a Go project

To use the SDK in a Go project, first configure a new instance of Cloudinary:

```
cld, err := cloudinary.New() // CLOUDINARY_URL environment variable should already be set
OR
cld, err := NewFromParams(cloud_name, api_key, api_secret)
```

Then, customize upload behaviour by configuring UploadParams

```
// can be left empty if default behaviour is needed
uploadParams := uploader.UploadParams{
    UseFilename:              api.Bool(true),
    UseFilenameAsDisplayName: api.Bool(true),
    UniqueFilename:           api.Bool(false),
}
```

Finally, run the upload method, passing in your image source:

```
filePath := "./path/to/image.jpg" // Can be a remote URL or base64 DataURI as well
res, err := cld.Upload.Upload(context.Background(), filepath, uploadParams)
```

## 🚀 Get Started with This Example

* Create an environment variable file `.env` and inside add:
```
CLOUDINARY_URL="cloudinary://<API_KEY>:<API_SECRET>@<CLOUD_NAME>"
```


* Run the Go script from project directory, i.e. inside the `examples/go-image-upload` directory:

```
go run .
```

The script will run in your terminal and you'll see the URL results logged.