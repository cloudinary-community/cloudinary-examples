# Netlify Graph Authentication for Cloudinary in a Function

Easily authenticate Cloudinary requests using [Netlify Graph Authentication](https://docs.netlify.com/netlify-labs/experimental-features/netlify-graph/authentication/)

View Demo: <https://cloudinary-netlify-graph-authentication-function.netlify.app/.netlify/functions/resources>

## 🧰 Using Cloudinary in a Serverless Function with Netlify Graph Authentication 

To begin working with authenticated Cloudinary sessions inside of Netlify Functions, you first need to enable and authenticate a Cloudinary oAuth session inside of your Netlify site by navigating to the Graph tab.

Once connected, first access the secrets inside of your Netlify Function by first instsalling the npm package:

```
yarn add @netlify/functions
# or
npm install @netlify/functions
```

Importing the `getSecrets` function:

```
const { getSecrets } = require('@netlify/functions');
```

And using it along with passing the function `event` as an argument:

```
const secrets = await getSecrets(event);
```

If the session is authenticated, the Cloudinary token should now be available inside of `secrets.cloudinary`.

Before configuring the Cloudinary library, we need to know the Cloud Name the token is associated with. You can either hard-code this value into your configuration or you can dynamically look it up based on the given token using `node-fetch` and:

```
const { cloud_name } = await fetch('https://api.cloudinary.com/v1_1/token/info', {
  headers: {
    Authorization: `Bearer ${secrets.cloudinary.bearerToken}`
  }
}).then(r => r.json());
```

With the Cloud Name, we can now configure our Cloudinary library by first importing it:

```
const cloudinary = require('cloudinary').v2;
```

Then configuring it to our account:

```
cloudinary.config({
  cloud_name,
  oauth_token: secrets.cloudinary.bearerToken
});
```

where we now have an authenticated Cloudinary SDK to perform actions on behalf of our account, such as searching for assets in a folder:

```
const results = await cloudinary.search.expression('folder:examples').execute();
```


## 🚀 Get Started with This Example

### Prerequistes

You must be on version 16 of node in order to use Netlify CLI with Graph capabilities.

### Running the Project

* Install the project dependencies with:

```
yarn install
# or
npm install
```

* Start the development server with:

```
netlify dev --graph
```

* Invoke the function at <http://localhost:8888/.netlify/functions/resources>!
