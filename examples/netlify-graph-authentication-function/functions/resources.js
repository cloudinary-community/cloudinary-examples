const { getSecrets } = require('@netlify/functions');
const cloudinary = require('cloudinary').v2;
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const secrets = await getSecrets(event);

  if ( !secrets.cloudinary?.bearerToken ) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Failed to authenticate with Cloudinary'
      })
    }
  }

  try {
    const { cloud_name } = await fetch('https://api.cloudinary.com/v1_1/token/info', {
      headers: {
        Authorization: `Bearer ${secrets.cloudinary.bearerToken}`
      }
    }).then(r => r.json());

    cloudinary.config({
      cloud_name,
      oauth_token: secrets.cloudinary.bearerToken
    });

    const results = await cloudinary.search.expression('folder:examples').execute();

    return {
      statusCode: 200,
      body: JSON.stringify({
        results
      })
    }
  } catch(e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }
};