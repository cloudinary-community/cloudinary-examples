import { Buffer } from 'buffer';

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  const formData = await req.formData();

  try {
    const metadata = JSON.parse(formData.get('metadata'));

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      body: JSON.stringify({
        prompt: metadata.variables.prompt,
        n: metadata.variables.n || 1,
        size: metadata.variables.size || '512x512',
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
    });
    
    const data = await response.json();
    
    const imageResponse = await fetch(data.data[0].url);

    return new Response(imageResponse.body, {
      headers: {
        "content-type": imageResponse.headers.get('content-type')
      }
    });
  } catch (e) {
    console.log(`Failed to generate image: ${e}`)
    return new Response(
      JSON.stringify({
        error: `Error generating image: ${e}`
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        },
        
      }
    );
  }
}
