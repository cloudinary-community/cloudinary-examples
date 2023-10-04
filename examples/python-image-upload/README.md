# Uploading Images to Cloudinary with the Python SDK

## 🧰 Uploading Images with the SDK in a Python project

To use the SDK in a Python project, first import library:

```
import cloudinary
import cloudinary.uploader
import cloudinary.api
```

Then configure a new instance of Cloudinary:

```
cloudinary.config( 
  cloud_name = "YOUR_CLOUD_NAME", 
  api_key = "YOUR_API_KEY", 
  api_secret = "YOUR_API_SECRET",
  secure = True
)
# or
config = cloudinary.config(secure=True) # when using env variables
```

Finally, run the uploadImage method, passing in your image source:

```
image = ['./path/to/image.jpg'] // Can be an array of remote URL or base64 DataURI
result = cloudinary.uploader.upload(image)
```

## 🚀 Get Started with This Example

* Create an environment variable file `.env` and inside add:
```
CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
```

* Install all project dependencies:

```
pip install -r requirements.txt
```

* Run the python script with:

```
python3 <filename>
```

For example, inside the `examples/python-image-upload` directory:

```
python3 upload.py
```

The script will run in your terminal and you'll see the results logged.
