const MultipartParser = require('lambda-multipart-parser');
const { encode, decode } = require('blurhash');
const sharp = require('sharp');

exports.handler = async (event, context) => {
  // Process the multi-part form data passed by Cloudinary to the function
  // Particularly we're interested in the `files` property in this example

  const formdata = await MultipartParser.parse(event);

  try {
    // Use sharp to determine metadata needed during blurhash processing

    const { data, info } = await sharp(formdata.files[0].content)
      .ensureAlpha()
      .raw()
      .toBuffer({
        resolveWithObject: true
      });

    // Encode with BlurHash to get a resulting blurred placeholder image

    const encoded = encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);

    // Then immediatley decode so we can change it back into usable image data

    const decoded = decode(encoded, info.width, info.height);

    // Use sharp to ingest the new image data and turn it into a usable Buffer

    const result = await sharp(Buffer.from(decoded), {
      raw: {
        channels: 4,
        width: info.width,
        height: info.height,
      },
    })
      .jpeg({
        overshootDeringing: true,
        quality: 40,
      })
      .toBuffer();

    // Return a 200 response with the content headers and Base64 body

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Length': result.length
      },
      isBase64Encoded: true,
      body: result.toString('base64')
    }
  } catch (e) {
    console.log(`Failed to manipulate image: ${e}`)
    return {
      statusCode: 502,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: `Error manipulating image: ${e}`
      })
    }
  }
};