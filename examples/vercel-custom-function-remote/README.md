# Not Currently Working

* Set up a `.env` in the root of the project
```
OPENAI_API_KEY="<Your OpenAI API Key>"
CLOUDINARY_CLOUD_NAME="<Your Cloudinary Cloud Name>"
CLOUDINARY_API_KEY="<Your Cloudinary API Key>"
CLOUDINARY_API_SECRET="<Your Cloudinary API Secret>"
```

* Install the Vercel CLI & dependencies

```
npm install
npm install -g vercel
```

* Start the development server

```
vercel dev
```

> Note: The first time you run this it will ask you to set up the environment including connecting to your Vercel account. You don't need to have an existing project to get this set up but you do need an account I believe.

* POST a request to the endpoint

Custom Remote Functions send a specific payload. Included in this repository (`postman.json`) is a Postman collection that includes a sample request.

Learn more about Cloudinary Remote Custom Functions and the request structure at: https://cloudinary.com/documentation/custom_functions#request_structure

## Generating a Cloudinary URL

Once this is deployed, you can easily generate a Cloudinary URL by modifying and running the script located in the `./scripts` directory. You must have a valid Public ID added to the URL method and the endpoint where it's deployed.