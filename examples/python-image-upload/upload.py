from dotenv import load_dotenv
load_dotenv()

import cloudinary
import cloudinary.uploader
import cloudinary.api

import json


config = cloudinary.config(secure=True)

def uploadImage():

  images = [
    './images/aldebaran-s-uXchDIKs4qI-unsplash.jpg',
    './images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg',
    './images/spacex-OHOU-5UVIYQ-unsplash.jpg',
    './images/spacex-VBNb52J8Trk-unsplash.jpg',
    './images/stellan-johansson-1PP0Fc-KSd4-unsplash.jpg',
    'https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  ]
  for image in images:
    result = cloudinary.uploader.upload(image)
    print("Response:",end="\n")
    print(result,end="\n")
    print(image+" uploaded successfully",end="\n")

uploadImage()