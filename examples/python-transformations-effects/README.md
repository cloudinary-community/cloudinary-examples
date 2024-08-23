# Resizing and Cropping Images with Cloudinary's Python SDK
To use the SDK in a Python project for cropping and resizing images stored in Cloudinary:

1. Install the SDK:

```python
pip install cloudinary
```


2. Add the necessary package references:

```
from cloudinary import CloudinaryImage
```


3. Install the `python-dotenv` library for importing Cloudinary credentials into your project from a `.env` file:

```python
pip install python-dotenv
```

4. Create a `.env` file in your project directory containing your Cloudinary API environment variable. Copy the API environment variable format from the [API Keys](https://console.cloudinary.com/settings/api-keys) Settings page. Replace <your_api_key> and <your_api_secret> with your actual values, while your cloud name is already correctly included in the format.

5. Use the `python-dotenv` library to import your Cloudinary credentials into your project:

```python
from dotenv import load_dotenv
load_dotenv()
```


