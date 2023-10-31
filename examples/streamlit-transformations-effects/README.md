# 🧰 Adding Text Over Your Images with the Cloudinary Python SDK

## Let's start by installing the Required libraries, If you already have them(Streamlit & Cloudinary) installed you can skip this step:
```
pip install -r requirements.txt
```

To start using the Cloudinary SDK in a Python project, let's start by importing the required libraries:

```py
import streamlit as st
import cloudinary
from cloudinary.uploader import upload
import random
import string
import requests
```

Then let's configure a new instance of Cloudinary, You will need to create `.streamlit/secrets.toml` and fill in the secrets:

Not sure where is my cloudinary api-key, it will be available on your dashboard: [Cloudinary](https://cloudinary.com/)

If you are unsure about how `.streamlit/secrets.toml` looks:

![image](https://github.com/codingis4noobs2/cloudinary-examples/assets/87560178/594f6042-e74f-4849-bbef-d9e296006842)


If you want to learn more about secrets, visit here: [Streamlit Secrets](https://docs.streamlit.io/streamlit-community-cloud/deploy-your-app/secrets-management)

```
cloudinary.config(
  cloud_name = st.secrets['cloud_name'],
  api_key = st.secrets['api_key'],
  api_secret = st.secrets['api_secret'],
  secure = True
)
```

Great work 👏, Now let's run the streamlit application using:
```
streamlit run main.py
```

Awesome job mate 😎, your application awaits you at `http://localhost:8501/`

Screenshots:
![image](https://github.com/codingis4noobs2/cloudinary-examples/assets/87560178/a5bfd5e6-8026-4eac-8517-00b28fd5475d)
![image](https://github.com/codingis4noobs2/cloudinary-examples/assets/87560178/7ae29038-853f-4bab-9521-90b5bb995d64)

