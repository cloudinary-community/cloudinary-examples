from dotenv import load_dotenv
load_dotenv()

import cloudinary
from cloudinary import CloudinaryImage

config = cloudinary.config(secure=True)

def imageOverlay():

  image = CloudinaryImage("samples/smile.jpg").build_url(secure=True,transformation=[
  {
    'width': 700, 
    'height': 850, 
    'crop': 'fill',
  },
  {
    'overlay': "samples:breakfast",
    'width': 200,
    'height': 200,
  },
  {
      'flags': 'layer_apply',
      'gravity': 'north_east',
      'x': 400,
      'y': 400
  }
  ])
  print(image)

imageOverlay()