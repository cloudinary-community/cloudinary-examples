# Transformations & Effects in Golang with Cloudinary Go SDK

## 🧰 Transformations & effects with the SDK in a Go project

To use the SDK in a Go project, first configure a new instance of Cloudinary:

```
cld, err := cloudinary.New() // CLOUDINARY_URL environment variable should already be set
OR
cld, err := NewFromParams(cloud_name, api_key, api_secret)
```

Then, run the Image method, passing in your image public ID

```
image, err := cld.Image("(public_id_of_image)")
```

Then, add a transformation query with your overlay image's public ID refer to [Transformation URL API](https://cloudinary.com/documentation/transformation_reference)

```
image.Transformation = "(transformation_query)"
```

## 🚀 Get Started with This Example

* Create an environment variable file `.env` and inside add:
```
CLOUDINARY_URL="cloudinary://<API_KEY>:<API_SECRET>@<CLOUD_NAME>"
```

* Set the correct public ID from your available assets
```
image, err := cld.Image("(public_id_of_image)")
...

image.Transformation = "c_fill,g_auto,h_600,w_600/h_100,l_(public_id_of_overlay),w_100/fl_layer_apply,g_north_east,x_10,y_10"
```

* Run the Go script from project directory, i.e. inside the `examples/go-transformation-effects` directory:

```
go run .
```

The script will run in your terminal and you'll see the URL results logged.
