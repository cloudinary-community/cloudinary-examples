# Set your Cloudinary credentials
# ==============================
from dotenv import load_dotenv
load_dotenv()

# Import the Cloudinary libraries
# ==============================

from cloudinary import CloudinaryImage

optimized_only = CloudinaryImage("moving-day").build_url(transformation=[
  {'format': "auto", 'quality': "auto"}
  ])
print("Optimized Only:")
print(optimized_only)

scale_only = CloudinaryImage("moving-day").build_url(transformation=[
  {'format': "auto", 'quality': "auto"},
  {'crop': "scale", 'width': 600}
  ])
print("Scale Only:")
print(scale_only)


crop_only = CloudinaryImage("moving-day").build_url(transformation=[
  {'format': "auto", 'quality': "auto"},
  {'crop': "crop", 'width': 2000, 'height': 2000}
  ])
print("Crop Only:")
print(crop_only)

crop_with_gravity = CloudinaryImage("moving-day").build_url(transformation=[
  {'format': "auto", 'quality': "auto"},
  {'crop': "crop", 'gravity': 'auto', 'width': 2000, 'height': 2000}
  ])
print("Crop with Gravity:")
print(crop_with_gravity)

crop_with_gravity_and_scale = CloudinaryImage("moving-day").build_url(transformation=[
  {'format': "auto", 'quality': "auto"},
  {'crop': "crop", 'gravity': 'auto', 'width': 2000, 'height': 2000},
  {'crop': "scale", 'width': 600}
  ])
print("Crop with Gravity and Scale:")
print(crop_with_gravity_and_scale)
  

large_crop = CloudinaryImage("moving-day").build_url(transformation=[
  {'format': "auto", 'quality': "auto"},
  {'crop': "crop", 'gravity': 'auto', 'width': 3000, 'height': 3000},
  {'crop': "scale", 'width': 600}
  ])
print("Large crop:")
print(large_crop)

crop_and_gravity_auto = CloudinaryImage("moving-day").build_url(transformation=[
  {'format': "auto", 'quality': "auto"},
  {'crop': "auto", 'gravity': 'auto', 'width': 600, 'height': 600}
  ])
print("Crop and Gravity Auto:")
print(crop_and_gravity_auto)

crop_fill = CloudinaryImage("moving-day").build_url(transformation=[
  {'format': "auto", 'quality': "auto"},
  {'crop': "fill", 'width': 600, 'height': 600}
  ])
print("Crop Fill:")
print(crop_fill)
