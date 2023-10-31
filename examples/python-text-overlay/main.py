import streamlit as st
from cloudinary.uploader import upload
import cloudinary
import random
import string
import requests


cloudinary.config(
  cloud_name = st.secrets['cloud_name'],
  api_key = st.secrets['api_key'],
  api_secret = st.secrets['api_secret'],
  secure = True
)

r_id = []
my_upload = None

st.set_page_config(layout="wide", page_title="Textify")

if "first_time" not in st.session_state:
    st.session_state.first_time = False

if not st.session_state.first_time:
        st.balloons()
        st.session_state.first_time = True

st.write("<h1 style='text-align: center;'>Textify</h1>", unsafe_allow_html=True)
st.write("<h4 style='text-align: center;'>~Powered by Cloudinary</h4>", unsafe_allow_html=True)

input_method = st.selectbox('Select an image input method:', ('Select an option', 'Upload An Image', 'Take Input From Camera'))
if input_method is not None:
    if input_method == 'Upload An Image':
        my_upload = st.file_uploader("Upload an image", type=["png", "jpg", "jpeg"])
    elif input_method == 'Take Input From Camera':
        my_upload = st.camera_input("Take a picture")

if my_upload is not None:
    col1, col2 = st.columns(2)
    with col1:
        font_family = st.selectbox('Select Font Family:', ("Arial", "Georgia", "Roboto", "Times New Roman", "Helvetica", "Open Sans", "Verdana", "Trebuchet Ms", "Courier New"))
        font_size = st.number_input("Font Size", min_value=1, max_value=1000, value=100)
        color_code = st.color_picker('Pick Font Color', '#000000')
        st.write('The current color is', color_code)
    with col2:
        position = st.selectbox("Placement Position", ("Center", "North", "South", "East", "West", "North West", "North East", "South East", "South West"))
        dict = {"Center": "center", "North":"north", "South": "south", "East": "east", "West": "west", "North West": "north_west", "South West": "south_west", "North East": "north_east", "SouthEast": "south_east"}
        text = st.text_input("Text", "Hello World")
    
    r = ''.join(random.choices(string.ascii_letters + string.digits, k=6))
    while r in r_id:
        r = ''.join(random.choices(string.ascii_letters + string.digits, k=6))
    r_id.append(r)
    
    image = upload(my_upload, public_id=f"test_{r}", color=color_code, overlay={"font_family":font_family, "font_size":font_size, "text":text}, gravity=dict[position])
    st.write("<h3>Output Image:</h3>", unsafe_allow_html=True)
    response = requests.get(image['url'])
    img_data = response.content
    st.download_button(label="Download Image", data=img_data, file_name="image.jpg", mime="image/jpg")
    st.image(image['url'])
