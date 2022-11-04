const MultipartParser = require('lambda-multipart-parser');
const { Configuration, OpenAIApi } = require('openai');
const fetch = require('node-fetch');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.handler = async (event, context) => {
  // Process the multi-part form data passed by Cloudinary to the function
  // Particularly we're interested in the `metadata` property in this example
  // to use it for our generation prompt

  const formdata = await MultipartParser.parse(event);

  try {
    const metadata = JSON.parse(formdata.metadata);

    const response = await openai.createImage({
      prompt: metadata.variables.prompt,
      n: metadata.variables.n || 1,
      size: metadata.variables.size || '512x512',
    });

    const imageResponse = await fetch(response.data.data[0].url);
    const imageBuffer = await imageResponse.buffer();

    // Return a 200 response with the content headers and Base64 body

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Length': imageBuffer.length
      },
      isBase64Encoded: true,
      body: imageBuffer.toString('base64')
    }
  } catch (e) {
    console.log(`Failed to generate image: ${e}`)
    return {
      statusCode: 502,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: `Error generating image: ${e}`
      })
    }
  }
};