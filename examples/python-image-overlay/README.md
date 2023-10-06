# Transformations & Effects in Python with Cloudinary Python SDK

## 🧰 Using the SDK in a Python project

To use the SDK in a Python project, first import library:

```
import cloudinary
from cloudinary import CloudinaryImage
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

Finally, run the imageOverlay method, passing in your image name(the image first should be uploaded in cloudinary and here image name is nothing but Public ID ):

```
image = CloudinaryImage("(public_id_of_image).jpg").build_url(secure=True,transformation=[transformation_config])
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

For example, inside the `examples/python-image-overlay` directory:

```
python3 imageOverlay.py
```

The script will run in your terminal and you'll see the results logged.
